'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import type { CaseStudy } from '../content/caseStudies';

interface FeaturedCasePreviewProps {
    caseStudy: CaseStudy;
}

export function FeaturedCasePreview({ caseStudy }: FeaturedCasePreviewProps) {
    return (
        <section className="bg-gradient-to-br from-purple-50 to-blue-50 py-20">
            <div className="container mx-auto max-w-5xl px-6">
                <motion.div
                    className="rounded-2xl border border-purple-200 bg-white p-8 shadow-lg md:p-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    {/* Label */}
                    <div className="mb-4 inline-block rounded-full bg-purple-100 px-4 py-1 text-sm font-semibold text-purple-700">
                        Featured Case Study
                    </div>

                    {/* Problem Headline */}
                    <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
                        {caseStudy.problemSummary}
                    </h2>

                    {/* Outcome Line */}
                    <p className="mb-6 text-lg font-medium text-green-700">
                        → {caseStudy.outcomeHint}
                    </p>

                    {/* Speed Badge */}
                    <div className="mb-6 inline-flex items-center gap-2 rounded-lg bg-green-50 px-4 py-2 text-sm font-semibold text-green-800">
                        <span className="h-2 w-2 rounded-full bg-green-600"></span>
                        {caseStudy.speedIndicator}
                    </div>

                    {/* CTA */}
                    <Link
                        href={`/case-studies/${caseStudy.slug}`}
                        className="group inline-flex items-center gap-2 text-lg font-semibold text-purple-600 transition-all hover:gap-3"
                    >
                        Read the case
                        <ArrowRight className="h-5 w-5" />
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
