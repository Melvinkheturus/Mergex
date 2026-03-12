import type { Metadata } from 'next';
import { fetchWithFallback } from '@/sanity/lib/contentFetcher';
import ProductsPageClient from './ProductsPageClient';

export const metadata: Metadata = {
    title: 'Products | Mergex',
    description: 'Building tools from real problems. Our products are born from real client needs and refined through real-world use.',
};

// ── GROQ Query ──
const PRODUCTS_PAGE_QUERY = `
    *[_type == "productsPage"][0] {
        heroHeadlinePart1,
        heroHeadlinePart2,
        heroSubheadline,
        heroSupportText,
        products[] { name, tagline, description, status, features },
        whyHeadline,
        whyParagraphs,
        waitlistHeadline,
        waitlistSubheadline,
        waitlistButtonText,
        serviceCtaHeadline,
        serviceCtaSubheadline,
        serviceCtaButtonText
    }
`;

export default async function Page() {
    const content = await fetchWithFallback(
        PRODUCTS_PAGE_QUERY,
        null,
        'productsPage'
    );

    return <ProductsPageClient content={content} />;
}
