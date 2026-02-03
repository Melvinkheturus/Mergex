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

            {/* 1. Cinematic Hero - Let it breathe */}
            <div id="labs-hero">
                <LabsHero />
            </div>

            {/* 2. What Is Labs - Clear Definition */}
            <div id="what-is-labs">
                <WhatIsLabs />
            </div>

            {/* 3. What We Create - Capabilities Showcase */}
            <div id="capabilities">
                <WhatWeCreate />
            </div>

            {/* 3.5 Featured Work - Scroll Zoom Showcase (Kyra) */}
            <div id="featured-work">
                <ScrollZoomShowcase />
            </div>

            {/* 4. How Labs Works - Process Demystification */}
            <div id="process">
                <HowLabsWorks />
            </div>

            {/* 5. Work Gallery - CRITICAL Visual Proof */}
            <div id="work">
                <WorkGallery />
            </div>

            {/* 6. Why Labs Exists - Philosophy */}
            <div id="philosophy">
                <WhyLabsExists />
            </div>

            {/* 7. CTA - Conversion */}
            <div id="cta">
                <LabsCTA />
            </div>
        </main>
    );
}
