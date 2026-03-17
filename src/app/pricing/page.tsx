import type { Metadata } from 'next';
import {
    PricingHero,
    EngagementTiers,
    PricingFactors,
    WhatYouDontPayFor,
    PricingFAQ,
    PricingCTA,
} from '@/modules/pricing';

export const metadata: Metadata = {
    title: {
        absolute: 'Mergex - Transparent, Scope-Based Pricing'
    },
    description: 'Flexible engagement models designed for startups and growing businesses. From MVP launches to ongoing partnerships, pricing that adapts to your scope, speed, and scale.',
    keywords: ['pricing', 'custom software pricing', 'MVP development cost', 'flexible engagement', 'outcome-driven pricing', 'startup development'],
    openGraph: {
        title: 'Mergex - Transparent, Scope-Based Pricing',
        description: 'Transparent pricing for custom software, AI automation, and growth systems.',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Mergex - Transparent, Scope-Based Pricing',
        description: 'Flexible engagement models for startups and growing businesses.',
    },
};


export default function PricingPage() {
    return (
        <main>
            <PricingHero />
            <EngagementTiers />
            <PricingFactors />
            <WhatYouDontPayFor />
            <PricingFAQ />
            <PricingCTA />
        </main>
    );
}
