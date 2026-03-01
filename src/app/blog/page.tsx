import type { Metadata } from 'next';
import { fetchWithFallback } from '@/sanity/lib/contentFetcher';

export const metadata: Metadata = {
    title: 'Blog & Insights | Mergex',
    description: 'Tech articles, AI insights, and build-in-public stories from the Mergex team',
};

const BLOG_PAGE_QUERY = `
    *[_type == "blogPage"][0] {
        headline,
        subheadline
    }
`;

const DEFAULTS = {
    headline: 'Blog & Insights',
    subheadline: 'Tech articles, AI insights, and build-in-public stories from the Mergex team',
};

interface BlogPageData {
    headline?: string;
    subheadline?: string;
}

export default async function BlogPage() {
    const content = await fetchWithFallback<BlogPageData | null>(
        BLOG_PAGE_QUERY,
        null,
        'blogPage'
    );

    const headline = content?.headline || DEFAULTS.headline;
    const subheadline = content?.subheadline || DEFAULTS.subheadline;

    return (
        <main className="pt-16 min-h-screen">
            <div className="max-w-7xl mx-auto px-4 md:px-10 py-20">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-6xl font-bold mb-4 font-display">{headline}</h1>
                    <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                        {subheadline}
                    </p>
                </div>

                {/* Placeholder - Will be populated with blog module */}
                <div className="text-center py-20">
                    <p className="text-gray-500 dark:text-gray-400">
                        Blog posts coming soon
                    </p>
                </div>
            </div>
        </main>
    );
}
