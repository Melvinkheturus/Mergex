import { NextRequest, NextResponse } from 'next/server';
import { createClient } from 'next-sanity';

const sanityClient = createClient({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
    apiVersion: '2026-01-29',
    useCdn: false,
});

async function fetchSanityContext(query: string): Promise<string> {
    try {
        const words = query.toLowerCase().split(' ').filter((w) => w.length > 3);
        const searchTerms = words.slice(0, 3).join('|');

        const posts = await sanityClient.fetch<
            Array<{ title: string; excerpt?: string; tldr?: string; keyTakeaway?: string; insightFormat?: string }>
        >(
            `*[_type == "post"][0...4] | order(publishedAt desc) {
                title,
                excerpt,
                tldr,
                keyTakeaway,
                insightFormat,
                categories
            }`
        );

        if (!posts || posts.length === 0) return '';

        return posts
            .map(
                (p) =>
                    `Insight: "${p.title}" [${p.insightFormat ?? 'general'}]` +
                    (p.tldr ? `\nTL;DR: ${p.tldr}` : '') +
                    (p.excerpt ? `\nExcerpt: ${p.excerpt}` : '') +
                    (p.keyTakeaway ? `\nKey Takeaway: ${p.keyTakeaway}` : '')
            )
            .join('\n\n');

        void searchTerms; // suppress unused variable warning
    } catch {
        return '';
    }
}

const SYSTEM_PROMPT = `You are Mergex Intelligence — an AI assistant representing Mergex, a company that architects engineered business systems, AI-powered creative tools (Labs), and scalable software ecosystems.

You help founders, CTOs, and operators understand:
- Business systems architecture and the 0→1→N growth model
- AI content and creative workflows (Mergex Labs)
- Automation strategy — when to automate, when not to
- Why fragmented vendors kill business growth
- How Mergex Systems, Labs, and Software can help

Tone: direct, confident, systems-thinker. No fluff. Think senior architect who also understands growth strategy.

Format your answers clearly. Use short paragraphs. If relevant, reference frameworks or insights from Mergex thinking. End with a natural invitation to go deeper only if genuinely relevant.`;

export async function POST(req: NextRequest) {
    try {
        const { message } = await req.json();
        if (!message || typeof message !== 'string') {
            return NextResponse.json({ error: 'Invalid message' }, { status: 400 });
        }

        const GROQ_API_KEY = process.env.GROQ_API_KEY;
        if (!GROQ_API_KEY) {
            return NextResponse.json(
                { answer: 'The AI assistant is not configured yet. Please check back soon.' },
                { status: 200 }
            );
        }

        // Fetch context from Sanity
        const sanityContext = await fetchSanityContext(message);

        const userContent = sanityContext
            ? `Context from Mergex Insights:\n${sanityContext}\n\n---\n\nUser Question: ${message}`
            : message;

        const groqRes = await fetch('https://api.groq.com/openai/v1/chat/completions', {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${GROQ_API_KEY}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                model: 'llama-3.3-70b-versatile',
                messages: [
                    { role: 'system', content: SYSTEM_PROMPT },
                    { role: 'user', content: userContent },
                ],
                max_tokens: 600,
                temperature: 0.65,
            }),
        });

        if (!groqRes.ok) {
            const err = await groqRes.text();
            console.error('Groq API error:', err);
            return NextResponse.json(
                { answer: 'I ran into a technical issue. Please try again in a moment.' },
                { status: 200 }
            );
        }

        const data = await groqRes.json();
        const answer = data.choices?.[0]?.message?.content ?? 'No response.';

        return NextResponse.json({ answer });
    } catch (err) {
        console.error('Chat API error:', err);
        return NextResponse.json(
            { answer: 'Something went wrong. Please try again.' },
            { status: 200 }
        );
    }
}
