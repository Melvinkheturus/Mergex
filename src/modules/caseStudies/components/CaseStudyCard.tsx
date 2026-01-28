'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Clock } from 'lucide-react';
import Link from 'next/link';
import type { CaseStudy } from '../content/caseStudies';

interface CaseStudyCardProps {
    caseStudy: CaseStudy;
}

export function CaseStudyCard({ caseStudy }: CaseStudyCardProps) {
    return (
        <Link href={`/case-studies/${caseStudy.slug}`}>
            <motion.div
                className="group h-full rounded-xl border-2 border-gray-200 bg-white p-6 transition-all hover:border-purple-300 hover:shadow-lg"
                whileHover={{ y: -4 }}
            >
                {/* Speed Indicator */}
                <div className="mb-4 flex items-center gap-2">
                    <div className="flex items-center gap-1 rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700">
                        <Clock className="h-3 w-3" />
                        {caseStudy.speedIndicator}
                    </div>
                    <span className="text-xs text-gray-500 capitalize">
                        {caseStudy.problemType.replace('-', ' ')}
                    </span>
                </div>

                {/* Title */}
                <h3 className="mb-3 text-xl font-bold text-gray-900 group-hover:text-purple-600">
                    {caseStudy.title}
                </h3>

                {/* Problem Summary */}
                <p className="mb-4 text-sm leading-relaxed text-gray-600">
                    {caseStudy.problemSummary}
                </p>

                {/* Outcome Hint */}
                <div className="mb-4 rounded-lg bg-purple-50 p-3">
                    <p className="text-sm font-medium text-purple-900">
                        ✓ {caseStudy.outcomeHint}
                    </p>
                </div>

                {/* Read More */}
                <div className="flex items-center gap-2 text-sm font-semibold text-purple-600 group-hover:gap-3 transition-all">
                    Read the case
                    <ArrowRight className="h-4 w-4" />
                </div>
            </motion.div>
        </Link>
    );
}
