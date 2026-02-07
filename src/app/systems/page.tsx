
import type { Metadata } from 'next';

import {
    SystemsHero,
    SystemsPageShell,
    WhatWeSolve,
    OurSolutions,
    SpeedAdvantage,
    HowWeWorkSystems,
    ProofSystems,
    EngagementModel,
    SystemsCTA,
    SystemsFAQ,
} from '@/modules/systems';
import { SystemsCasePreviews, CaseStudyOverview } from '@/modules/caseStudies';
import { PageTransition } from '@/components/transitions/PageTransition';

import SystemsScrollRegistrar from '@/modules/systems/components/SystemsScrollRegistrar';

import TargetCursorWrapper from '@/components/TargetCursorWrapper';

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
        <PageTransition>
            <TargetCursorWrapper targetSelector="a, button, .cursor-target" />
            <SystemsScrollRegistrar />
            <SystemsPageShell>
                <main className="bg-white text-gray-900">
                    {/* 1. Hero - Minimal positioning */}
                    <div id="systems-hero" className="systems-section">
                        <SystemsHero />
                    </div>

                    {/* 2. What We Solve - Pain Point Matching */}
                    <div id="pain-points" className="systems-section">
                        <WhatWeSolve />
                    </div>

                    {/* 3. Our Solutions - Service Pillars */}
                    <div id="solutions" className="systems-section">
                        <OurSolutions />
                    </div>

                    {/* 4. Speed Advantage - Key Differentiator */}
                    <div id="speed" className="systems-section">
                        <SpeedAdvantage />
                    </div>

                    {/* 5. How We Work - Process Confidence */}
                    <div id="process" className="systems-section">
                        <HowWeWorkSystems />
                    </div>

                    {/* 6. Proof - Tech Stack */}
                    <div id="proof" className="systems-section">
                        <ProofSystems />
                    </div>

                    {/* 7a. Case Study Overview - Quick Glimpse */}
                    <div id="case-overview" className="systems-section">
                        <CaseStudyOverview />
                    </div>

                    {/* 7b. Full Case Studies - Detailed Proof */}
                    <div id="case-studies" className="systems-section">
                        <SystemsCasePreviews />
                    </div>

                    {/* 8. FAQ Section */}
                    <div id="faq" className="systems-section">
                        <SystemsFAQ />
                    </div>

                    {/* 9. Engagement & Pricing */}
                    <div id="engagement" className="systems-section">
                        <EngagementModel />
                    </div>

                    {/* 10. CTA - Final Conversion */}
                    <div id="cta" className="systems-section">
                        <SystemsCTA />
                    </div>
                </main>
            </SystemsPageShell>
        </PageTransition>
    );
}
