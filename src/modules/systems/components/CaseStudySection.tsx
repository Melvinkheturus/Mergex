'use client';

import { useEffect, useState } from 'react';
import { CaseStudyCardStack } from '@/modules/caseStudies';
import { CASE_STUDIES } from '@/modules/caseStudies';
import type { CaseStudy } from '@/modules/caseStudies';

interface CaseStudySectionProps {
    caseStudies?: CaseStudy[];
}

/**
 * CaseStudySection — Teaser section for systems page
 * Uses the reusable CaseStudyCardStack.
 */
export function CaseStudySection({ caseStudies }: CaseStudySectionProps = {}) {
    // Fallback to hardcoded data if Sanity data is not provided
    const studies = caseStudies && caseStudies.length > 0 ? caseStudies : CASE_STUDIES;

    const [isClient, setIsClient] = useState(false);

    // Hydration guard
    useEffect(() => {
        setIsClient(true);
    }, []);

    if (!isClient) {
        return (
            <section className="relative bg-slate-50 h-screen flex items-center justify-center">
                <div className="text-center">
                    <h2
                        className="text-sm font-bold uppercase tracking-[0.2em] text-violet-600 mb-4"
                        style={{ fontFamily: 'var(--font-manrope)' }}
                    >
                        Selected Work
                    </h2>
                    <h3
                        className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4"
                        style={{ fontFamily: 'var(--font-manrope)' }}
                    >
                        Case Studies
                    </h3>
                </div>
            </section>
        );
    }

    return (
        <>
            {/* Section Header — outside the pinned area */}
            <div className="bg-slate-50 pt-24 lg:pt-32 pb-12">
                <div className="container mx-auto px-6 md:px-12 max-w-7xl">
                    <div className="text-center">
                        <h2
                            className="text-sm font-bold uppercase tracking-[0.2em] text-violet-600 mb-4"
                            style={{ fontFamily: 'var(--font-manrope)' }}
                        >
                            Selected Work
                        </h2>
                        <h3
                            className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4"
                            style={{ fontFamily: 'var(--font-manrope)' }}
                        >
                            Case Studies
                        </h3>
                        <p
                            className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto"
                            style={{ fontFamily: 'var(--font-manrope)' }}
                        >
                            Explore our portfolio of successful projects and transformative solutions
                        </p>
                    </div>
                </div>
            </div>

            {/* Reusable Pinned Card Stack */}
            <CaseStudyCardStack studies={studies} />
        </>
    );
}
