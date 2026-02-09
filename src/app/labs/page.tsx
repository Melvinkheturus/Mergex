import type { Metadata } from 'next';
import {
    LabsHero,
    WhatIsLabs,
    WhatWeCreate,
    ScrollZoomShowcase,
    WorkGallery,
    HowLabsWorks,
    WhyLabsExists,
    LabsCTA,
} from '@/modules/labs';
import { LabsExperiments } from '@/modules/caseStudies';
import { ExperimentsGallery } from '@/modules/labsPortfolio';

export const metadata: Metadata = {
    title: 'Mergex Labs - AI Content Studio | Creative AI Solutions',
    description: 'Where creativity meets intelligent systems. Gen-AI workflows for brands that need to move fast. AI-generated visuals, videos, campaigns, and brand assets.',
    keywords: ['AI content studio', 'generative AI', 'AI visuals', 'AI video creation', 'content automation', 'creative AI', 'brand assets'],
    openGraph: {
        title: 'Mergex Labs - AI Content Studio',
        description: 'Creative AI solutions for modern brands',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Mergex Labs - AI Content Studio',
        description: 'Where creativity meets intelligent systems',
    },
};

import LabsScrollRegistrar from "@/modules/labs/components/LabsScrollRegistrar";

export default function LabsPage() {
    return (
        <main className="">
            <LabsScrollRegistrar />

            {/* 1. Labs Hero — Invitation */}
            <div id="labs-hero">
                <LabsHero />
            </div>

            {/* 2. What Labs Is — Philosophical */}
            <div id="what-is-labs">
                <WhatIsLabs />
            </div>

            {/* 3. What We Create — NOT Services */}
            <div id="capabilities">
                <WhatWeCreate />
            </div>

            {/* 4. Featured Experiments Gallery */}
            <div id="experiments">
                <ExperimentsGallery />
            </div>

            {/* 5. Work Gallery — CRITICAL Visual Proof */}
            <div id="work">
                <WorkGallery />
            </div>

            {/* 6. Kyra Reveal / Scroll Experience — After Proof */}
            <div id="featured-work">
                <ScrollZoomShowcase />
            </div>

            {/* 7. How Labs Works — VERY LIGHT */}
            <div id="process">
                <HowLabsWorks />
            </div>

            {/* 8. Why Labs Exists — Short Manifesto */}
            <div id="philosophy">
                <WhyLabsExists />
            </div>

            {/* 9. Soft CTA */}
            <div id="cta">
                <LabsCTA />
            </div>
        </main>
    );
}
