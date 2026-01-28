import type { Metadata } from 'next';
import {
    SystemsHero,
    WhatWeSolve,
    OurSolutions,
    SpeedAdvantage,
    HowWeWorkSystems,
    ProofSystems,
    EngagementModel,
    SystemsCTA,
} from '@/modules/systems';
import { SystemsCasePreviews } from '@/modules/caseStudies';

export const metadata: Metadata = {
    title: 'Mergex Systems - Solution Partner | Custom Software & AI Automation',
    description: 'Building and automating systems that help businesses scale. MVPs in weeks, not months. Custom software, AI automation, design, and marketing solutions.',
    keywords: ['custom software development', 'MVP development', 'AI automation', 'solution partner', 'web app development', 'mobile app development', 'business automation'],
    openGraph: {
        title: 'Mergex Systems - Your Solution Partner',
        description: 'MVPs in weeks, not months. Building systems that scale.',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Mergex Systems - Solution Partner',
        description: 'Building and automating systems that help businesses scale',
    },
};

export default function SystemsPage() {
    return (
        <main className="">
            {/* 1. Hero - Professional Positioning */}
            <div id="systems-hero">
                <SystemsHero />
            </div>

            {/* 2. What We Solve - Pain Point Matching */}
            <div id="pain-points">
                <WhatWeSolve />
            </div>

            {/* 3. Our Solutions - Service Pillars */}
            <div id="solutions">
                <OurSolutions />
            </div>

            {/* 4. Speed Advantage - Key Differentiator */}
            <div id="speed">
                <SpeedAdvantage />
            </div>

            {/* 5. How We Work - Process Confidence */}
            <div id="process">
                <HowWeWorkSystems />
            </div>

            {/* 6. Proof - Tech Stack */}
            <div id="proof">
                <ProofSystems />
            </div>

            {/* 7. Case Studies - Conversion Proof */}
            <div id="case-studies">
                <SystemsCasePreviews />
            </div>

            {/* 8. Engagement & Pricing */}
            <div id="engagement">
                <EngagementModel />
            </div>

            {/* 9. CTA - Final Conversion */}
            <div id="cta">
                <SystemsCTA />
            </div>
        </main>
    );
}
