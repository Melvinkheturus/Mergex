import type { Metadata } from 'next';
import { client } from '@/sanity/lib/client';
import {
    InsightsHero,
    FeaturedThinking,
    InsightGrid,
    QuickTakes,
    AskMergex,
    InsightsCTA,
} from '@/modules/insights';
import InsightsPageClient from '@/app/blog/InsightsPageClient';

export const metadata: Metadata = {
    title: 'Insights & Intelligence | Mergex',
    description:
        'Short explorations on systems, AI, automation, and growth architecture. A knowledge interface for builders — structured for humans and LLMs alike.',
    keywords: [
        'business systems',
        'AI workflows',
        'automation strategy',
        'growth architecture',
        'engineered scale',
        'Mergex insights',
    ],
    openGraph: {
        title: 'Mergex Intelligence — Ideas Behind Engineered Scale',
        description:
            'Frameworks, case insights, experiments, and strategic notes from the Mergex team.',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Mergex Intelligence',
        description: 'Written for humans. Structured for machines.',
    },
};

async function getPosts() {
    try {
        return await client.fetch<
            Array<{
                _id: string;
                title: string;
                slug: { current: string };
                excerpt?: string;
                insightFormat?: string;
                categories?: string[];
                publishedAt?: string;
                tldr?: string;
                author?: { name: string; role?: string };
                featured?: boolean;
            }>
        >(
            `*[_type == "post"] | order(publishedAt desc) {
                _id,
                title,
                slug,
                excerpt,
                insightFormat,
                categories,
                publishedAt,
                tldr,
                featured,
                "author": author { name, role }
            }`
        );
    } catch {
        return [];
    }
}

export default async function BlogPage() {
    const posts = await getPosts();

    return (
        <main className="min-h-screen">
            {/* Client shell handles category filter state shared between Hero and Grid */}
            <InsightsPageClient posts={posts}>
                <FeaturedThinking />
                <QuickTakes />
                <AskMergex />
                <InsightsCTA />
            </InsightsPageClient>
        </main>
    );
}
