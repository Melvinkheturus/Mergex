import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';
import { createClient as createSanityClient } from 'next-sanity';

// ─── Supabase Client (server-side, uses anon key for read) ────────────────────
const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

// ─── Sanity Client ────────────────────────────────────────────────────────────
const sanityClient = createSanityClient({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
    apiVersion: '2026-01-29',
    useCdn: false,
});

// ─── Supabase Knowledge Base Retrieval (Full-Text Search) ────────────────────
async function fetchKnowledgeContext(query: string): Promise<string> {
    try {
        // Primary: full-text search
        const { data: ftsResults } = await supabase.rpc('search_knowledge_fts', {
            query_text: query,
            match_count: 4,
        });

        if (ftsResults && ftsResults.length > 0) {
            return ftsResults
                .map((r: { category: string; title: string; content: string }) =>
                    `[${r.category.toUpperCase()}] ${r.title}\n${r.content}`
                )
                .join('\n\n');
        }

        // Fallback: keyword ILIKE search
        const words = query.split(' ').filter(w => w.length > 3).slice(0, 2).join(' ');
        const { data: fallback } = await supabase.rpc('search_knowledge_fallback', {
            query_text: words || query,
            match_count: 3,
        });

        if (fallback && fallback.length > 0) {
            return fallback
                .map((r: { category: string; title: string; content: string }) =>
                    `[${r.category.toUpperCase()}] ${r.title}\n${r.content}`
                )
                .join('\n\n');
        }

        return '';
    } catch (err) {
        console.error('[Knowledge] Supabase fetch error:', err);
        return '';
    }
}

// ─── Sanity Insights Context (supplemental blog posts) ───────────────────────
async function fetchSanityContext(): Promise<string> {
    try {
        const posts = await sanityClient.fetch<
            Array<{ title: string; excerpt?: string; tldr?: string; keyTakeaway?: string; insightFormat?: string }>
        >(
            `*[_type == "post"][0...3] | order(publishedAt desc) {
                title, excerpt, tldr, keyTakeaway, insightFormat
            }`
        );
        if (!posts || posts.length === 0) return '';
        return posts
            .map(p =>
                `Insight: "${p.title}" [${p.insightFormat ?? 'general'}]` +
                (p.tldr ? `\nTL;DR: ${p.tldr}` : '') +
                (p.excerpt ? `\nExcerpt: ${p.excerpt}` : '') +
                (p.keyTakeaway ? `\nKey Takeaway: ${p.keyTakeaway}` : '')
            )
            .join('\n\n');
    } catch {
        return '';
    }
}

// ─── System Prompt ────────────────────────────────────────────────────────────
const SYSTEM_PROMPT = `You are "Mergex Intelligence" — the strategic AI concierge for Mergex.

Your role is to guide visitors through the Mergex ecosystem with a senior, advisory tone. You help them understand how Mergex architects scalable business infrastructure (Mergex Systems) and explores creative AI intelligence (Mergex Labs).

Guidelines:
- TONE: Professional, strategic, and advisory. Sound like a senior product partner, not a generic chatbot.
- CONVERSATIONAL NAVIGATION: Think of yourself as a guide. Naturally direct users to the right division or resource.
- INLINE LINKS: Occasionally insert markdown links within your explanation when it feels natural. 
  * Use [/systems](/systems) when mentioning infrastructure, automation, or scaling.
  * Use [/labs](/labs) when mentioning AI visuals, creative media, or experimentation.
  * Use [/about](/about) or [/contact](/contact) for background or scheduling.
- NEXT STEPS: At the end of helpful responses, if the conversation relates to building systems, automation, or Mergex services, offer a follow-up using the two-tier model:
  * Example: "If you'd like to speak with our team, type 'connect' — I'll show you two options: a free discovery call or priority architect access."
- FOCUS: Keep the conversation anchored in Mergex services. If a question is unrelated, politely redirect to how Mergex might approach that topic (e.g., from a systems or creative AI perspective).\n- No aggressive sales. Be helpful first. Trust is our foundation.

About Mergex:
1. Mergex Systems — automation, scalable platforms, growth infrastructure. Goal: unified scalable systems.
2. Mergex Labs — AI visuals, ads, avatars, storytelling, experimental media.
3. Two options for next steps: 
   - Type "connect" → they see a free Discovery Call + Priority Architect Access (₹299, credited toward project)
   - Type "priority" → they receive the priority access payment link directly
4. Priority Architect Access skips the queue and gives immediate attention from a Mergex architect. The ₹299 fee is fully credited toward the project if they proceed.`;

// ─── POST Handler ─────────────────────────────────────────────────────────────
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

        // ── Fetch context from both sources in parallel ──────────────────────
        const [knowledgeContext, sanityContext] = await Promise.all([
            fetchKnowledgeContext(message),
            fetchSanityContext(),
        ]);

        // ── Build user content with context ──────────────────────────────────
        const contextParts: string[] = [];
        if (knowledgeContext) {
            contextParts.push(`Mergex Knowledge Base:\n${knowledgeContext}`);
        }
        if (sanityContext) {
            contextParts.push(`Recent Mergex Insights:\n${sanityContext}`);
        }

        const userContent = contextParts.length > 0
            ? `${contextParts.join('\n\n---\n\n')}\n\n---\n\nUser Question: ${message}`
            : message;

        // ── Call Groq ─────────────────────────────────────────────────────────
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
                temperature: 0.6,
            }),
        });

        if (!groqRes.ok) {
            console.error('Groq API error:', await groqRes.text());
            return NextResponse.json(
                { answer: 'I ran into a technical issue. Please try again in a moment.' },
                { status: 200 }
            );
        }

        const data = await groqRes.json();
        const answer = data.choices?.[0]?.message?.content ?? 'No response generated.';
        return NextResponse.json({ answer });

    } catch (err) {
        console.error('Chat API error:', err);
        return NextResponse.json(
            { answer: 'Something went wrong. Please try again.' },
            { status: 200 }
        );
    }
}
