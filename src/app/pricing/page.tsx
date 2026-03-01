import type { Metadata } from 'next';
import {
    PricingHero,
    EngagementTiers,
    PricingFactors,
    WhatYouDontPayFor,
    PricingFAQ,
    PricingCTA,
} from '@/modules/pricing';
import { fetchWithFallback } from '@/sanity/lib/contentFetcher';

// ── GROQ Queries ──
const PRICING_PAGE_QUERY = `
    *[_type == "pricingPage"][0]{
        "hero": {
            "headline": heroHeadline,
            "subheadline": heroSubheadline
        },
        "tiers": {
            "headline": tiersHeadline,
            "subheadline": tiersSubheadline,
            "tiers": tiers
        },
        "factors": {
            "headline": factorsHeadline,
            "subheadline": factorsSubheadline,
            "list": factors,
            "closingStatement": factorsClosingStatement,
            "labsClarification": factorsLabsClarification
        },
        "noPay": {
            "headline": noPayHeadline,
            "subheadline": noPaySubheadline,
            "items": noPayItems
        },
        "faq": {
            "headline": faqHeadline,
            "questions": faqQuestions
        },
        "cta": {
            "headline": ctaHeadline,
            "subheadline": ctaSubheadline,
            "primaryCTA": ctaPrimaryCTA,
            "secondaryCTA": ctaSecondaryCTA,
            "reassurance": ctaReassurance,
            "finalReassurance": ctaFinalReassurance
        }
    }
`;

export const metadata: Metadata = {
    title: 'Pricing - Mergex | Transparent, Outcome-Driven Pricing',
    description: 'Flexible engagement models designed for startups and growing businesses. From MVP launches to ongoing partnerships, pricing that adapts to your scope, speed, and scale.',
    keywords: ['pricing', 'custom software pricing', 'MVP development cost', 'flexible engagement', 'outcome-driven pricing', 'startup development'],
    openGraph: {
        title: 'Pricing - Mergex',
        description: 'Transparent pricing for custom software, AI automation, and growth systems.',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Pricing - Mergex',
        description: 'Flexible engagement models for startups and growing businesses.',
    },
};

export default async function PricingPage() {
    const pageConfig = await fetchWithFallback<any>(
        PRICING_PAGE_QUERY,
        null,
        'Pricing Page Config'
    );

    return (
        <main>
            <PricingHero content={pageConfig?.hero} />
            <EngagementTiers content={pageConfig?.tiers} />
            <PricingFactors content={pageConfig?.factors} />
            <WhatYouDontPayFor content={pageConfig?.noPay} />
            <PricingFAQ content={pageConfig?.faq} />
            <PricingCTA content={pageConfig?.cta} />
        </main>
    );
}
