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
import { SystemsCasePreviews } from '@/modules/caseStudies';
import { PageTransition } from '@/components/transitions/PageTransition';

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
            <SystemsPageShell>
                <main className="bg-black text-white">
                    {/* 1. Hero - Minimal positioning */}
                    <div id="systems-hero" className="systems-section">
                        <SystemsHero />
                    </div>

                    {/* 2. What We Solve - Pain Point Matching */}
                    <div id="pain-points" className="systems-section border-t border-white/5 py-20 md:py-28">
                        <WhatWeSolve />
                    </div>

                    {/* 3. Our Solutions - Service Pillars */}
                    <div id="solutions" className="systems-section border-t border-white/5 py-20 md:py-28">
                        <OurSolutions />
                    </div>

                    {/* 4. Speed Advantage - Key Differentiator */}
                    <div id="speed" className="systems-section border-t border-white/5 py-20 md:py-28">
                        <SpeedAdvantage />
                    </div>

                    {/* 5. How We Work - Process Confidence */}
                    <div id="process" className="systems-section border-t border-white/5 py-20 md:py-28">
                        <HowWeWorkSystems />
                    </div>

                    {/* 6. Proof - Tech Stack */}
                    <div id="proof" className="systems-section border-t border-white/5 py-20 md:py-28">
                        <ProofSystems />
                    </div>

                    {/* 7. Case Studies - Conversion Proof */}
                    <div id="case-studies" className="systems-section border-t border-white/5 py-20 md:py-28">
                        <SystemsCasePreviews />
                    </div>

                    {/* 8. FAQ Section */}
                    <div id="faq" className="systems-section border-t border-white/5 py-20 md:py-28">
                        <SystemsFAQ />
                    </div>

                    {/* 9. Engagement & Pricing */}
                    <div id="engagement" className="systems-section border-t border-white/5 py-20 md:py-28">
                        <EngagementModel />
                    </div>

                    {/* 10. CTA - Final Conversion */}
                    <div id="cta" className="systems-section border-t border-white/5 py-20 md:py-28">
                        <SystemsCTA />
                    </div>
                </main>
            </SystemsPageShell>
        </PageTransition>
    );
}
