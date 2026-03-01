import type { Metadata } from 'next';
import { fetchWithFallback } from '@/sanity/lib/contentFetcher';

export const metadata: Metadata = {
    title: 'Resources | Mergex',
    description: 'Free templates, guides, and tools to help you build better.',
};

const RESOURCES_PAGE_QUERY = `
    *[_type == "resourcesPage"][0] {
        headline,
        subheadline,
        categories[] { title, description, status }
    }
`;

const DEFAULT_CATEGORIES = [
    { title: 'Templates', description: 'Ready-to-use website templates, UI kits, and landing pages', status: 'Coming soon' },
    { title: 'Free Resources', description: 'Guides, playbooks, checklists, and case study PDFs', status: 'Coming soon' },
    { title: 'For Builders', description: 'Open-source tools, experiments, and frameworks', status: 'Coming soon' },
];

const DEFAULTS = {
    headline: 'Resources',
    subheadline: 'Free templates, guides, and tools to help you build better.',
};

interface ResourceCategory {
    title?: string;
    description?: string;
    status?: string;
}

interface ResourcesPageData {
    headline?: string;
    subheadline?: string;
    categories?: ResourceCategory[];
}

export default async function ResourcesHubPage() {
    const content = await fetchWithFallback<ResourcesPageData | null>(
        RESOURCES_PAGE_QUERY,
        null,
        'resourcesPage'
    );

    const headline = content?.headline || DEFAULTS.headline;
    const subheadline = content?.subheadline || DEFAULTS.subheadline;
    const categories = content?.categories?.length ? content.categories : DEFAULT_CATEGORIES;

    return (
        <main className="pt-16 min-h-screen">
            <div className="max-w-7xl mx-auto px-4 md:px-10 py-20">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-6xl font-bold mb-4 font-display">{headline}</h1>
                    <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                        {subheadline}
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {categories.map((cat, i) => (
                        <div key={i} className="p-8 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700">
                            <h3 className="text-xl font-bold mb-4">{cat.title}</h3>
                            <p className="text-gray-600 dark:text-gray-300 mb-4">{cat.description}</p>
                            <p className="text-sm text-gray-500 dark:text-gray-400">{cat.status || 'Coming soon'}</p>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
}
