
import type { Metadata } from 'next';

import {
    SystemsHero,
    SystemsPageShell,
    WhatWeSolve,
    OurSolutions,
    HowWeWorkSystems,
    EngagementModel,
    SystemsFAQ,
    ImpactSection,
    CaseStudySection,
} from '@/modules/systems';
import { FAQSection } from '@/modules/homepage';
import { PageTransition } from '@/components/transitions/PageTransition';

import SystemsScrollRegistrar from '@/modules/systems/components/SystemsScrollRegistrar';



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

            <SystemsScrollRegistrar />
            <SystemsPageShell>
                <main className="bg-white text-gray-900">
                    {/* 1. Systems Hero — Relief */}
                    <div id="systems-hero" className="systems-section">
                        <SystemsHero />
                    </div>

                    {/* 2. What We Solve — Problem Alignment */}
                    <div id="pain-points" className="systems-section">
                        <WhatWeSolve />
                    </div>

                    {/* 3. Our System Types — NOT Services */}
                    <div id="solutions" className="systems-section">
                        <OurSolutions />
                    </div>

                    {/* 4. How We Work — Risk Reduction */}
                    <div id="process" className="systems-section">
                        <HowWeWorkSystems />
                    </div>

                    {/* 5. Case Studies — Proof */}
                    <div id="case-overview" className="systems-section">
                        <CaseStudySection />
                    </div>

                    {/* 6. Impact — Measurable Results */}
                    <div id="impact" className="systems-section">
                        <ImpactSection />
                    </div>

                    {/* 8. Engagement Models — Pricing Philosophy */}
                    <div id="engagement" className="systems-section">
                        <EngagementModel />
                    </div>

                    {/* 9. FAQs — Objection Handling */}
                    <div id="faq" className="systems-section">
                        <FAQSection variant="systems" />
                    </div>
                </main>
            </SystemsPageShell>
        </PageTransition>
    );
}
