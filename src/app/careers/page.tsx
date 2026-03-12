import type { Metadata } from 'next';
import {
    CareersHero,
    WhatWorkingMeans,
    HowWeWorkCareers,
    CareerPaths,
    LearningGrowth,
    WhatWeDontOffer,
    HowToApply,
    FinalNote,
} from '@/modules/careers';
import { fetchWithFallback } from '@/sanity/lib/contentFetcher';

// ── GROQ Queries ──
const CAREERS_PAGE_QUERY = `
    *[_type == "careersPage"][0]{
        "hero": {
            "headline": heroHeadline,
            "subheadline": heroSubheadline,
            "primaryCTA": heroPrimaryCTA,
            "secondaryCTA": heroSecondaryCTA
        },
        "whatWorkingMeans": {
            "headline": whatWorkingMeansHeadline,
            "subheadline": whatWorkingMeansSubheadline,
            "principles": whatWorkingMeansPrinciples
        },
        "howWeWork": {
            "headline": howWeWorkHeadline,
            "subheadline": howWeWorkSubheadline,
            "principles": howWeWorkPrinciples
        },
        "careerPaths": {
            "headline": careerPathsHeadline,
            "subheadline": careerPathsSubheadline,
            "paths": careerPaths
        },
        "learningGrowth": {
            "headline": learningGrowthHeadline,
            "subheadline": learningGrowthSubheadline,
            "benefits": learningGrowthBenefits,
            "disclaimer": learningGrowthDisclaimer
        },
        "whatWeDontOffer": {
            "headline": whatWeDontOfferHeadline,
            "subheadline": whatWeDontOfferSubheadline,
            "items": whatWeDontOfferItems
        },
        "howToApply": {
            "headline": howToApplyHeadline,
            "types": howToApplyTypes,
            "note": howToApplyNote
        },
        "finalNote": {
            "message": finalNoteMessage
        }
    }
`;

export const metadata: Metadata = {
    title: 'Careers at Mergex - Build Systems. Learn Fast. Grow With Intent.',
    description: 'Join a team that values clarity, ownership, and curiosity. Explore full-time roles, internships, and opportunities to build real systems with modern tech.',
    keywords: ['careers', 'jobs at Mergex', 'internships', 'software engineering jobs', 'AI careers', 'tech jobs'],
    openGraph: {
        title: 'Careers at Mergex',
        description: 'For people who like solving real problems.',
        type: 'website',
    },
};

export default async function CareersPage() {
    const pageConfig = await fetchWithFallback<any>(
        CAREERS_PAGE_QUERY,
        null,
        'Careers Page Config'
    );

    return (
        <main>
            {/* 1. Hero - Set the Tone */}
            <CareersHero content={pageConfig?.hero} />

            {/* 2. What Working Means - Define Culture */}
            <WhatWorkingMeans content={pageConfig?.whatWorkingMeans} />

            {/* 3. How We Work - Systems Mindset */}
            <HowWeWorkCareers content={pageConfig?.howWeWork} />

            {/* 4. Career Paths - 4 Clear Categories */}
            <CareerPaths content={pageConfig?.careerPaths} />

            {/* 5. Learning & Growth - Long-Term Value */}
            <LearningGrowth content={pageConfig?.learningGrowth} />

            {/* 6. What We Don't Offer - Honesty */}
            <WhatWeDontOffer content={pageConfig?.whatWeDontOffer} />

            {/* 7. How to Apply - Low Friction */}
            <HowToApply content={pageConfig?.howToApply} />

            {/* 8. Final Note - Human Touch */}
            <FinalNote content={pageConfig?.finalNote} />
        </main>
    );
}
