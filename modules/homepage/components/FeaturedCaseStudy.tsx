'use client';

import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function FeaturedCaseStudy() {
    // TODO: Replace with actual case study data when available
    const caseStudy = {
        client: 'Internal Project',
        challenge: 'Building a modular, scalable website architecture that maintains strict separation of concerns while supporting rapid growth across multiple divisions.',
        solution: 'Implemented a feature-first module system with clear boundaries, enabling independent development of Software, Labs, and Products divisions without cross-contamination.',
        results: [
            'Zero cross-module dependencies',
            'Modular architecture ready for subdomain extraction',
            'Clear development workflow for multi-team collaboration',
        ],
        slug: 'mergex-platform',
    };

    return (
        <section className="py-20 md:py-28 bg-gray-50 dark:bg-gray-900/50">
            <div className="max-w-7xl mx-auto px-4 md:px-10">
                {/* Heading */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4 font-display">Featured Work</h2>
                    <p className="text-lg text-gray-600 dark:text-gray-300 font-body">
                        Real projects, real results
                    </p>
                </div>

                {/* Case Study Card */}
                <div className="max-w-4xl mx-auto p-8 md:p-12 bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-xl">
                    {/* Client */}
                    <div className="flex items-center gap-3 mb-8">
                        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                            <span className="text-primary font-bold text-xl">M</span>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 font-display">
                                {caseStudy.client}
                            </h3>
                            <p className="text-sm text-gray-500 dark:text-gray-400">Case Study</p>
                        </div>
                    </div>

                    {/* Challenge */}
                    <div className="mb-6">
                        <h4 className="text-sm font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2">
                            The Challenge
                        </h4>
                        <p className="text-lg text-gray-700 dark:text-gray-200 font-body">{caseStudy.challenge}</p>
                    </div>

                    {/* Solution */}
                    <div className="mb-6">
                        <h4 className="text-sm font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2">
                            Our Solution
                        </h4>
                        <p className="text-lg text-gray-700 dark:text-gray-200 font-body">{caseStudy.solution}</p>
                    </div>

                    {/* Results */}
                    <div className="mb-8">
                        <h4 className="text-sm font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-4">
                            Results
                        </h4>
                        <ul className="space-y-3">
                            {caseStudy.results.map((result, index) => (
                                <li key={index} className="flex items-start gap-3">
                                    <div className="w-6 h-6 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                                        <svg
                                            className="w-4 h-4 text-green-600 dark:text-green-400"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <span className="text-gray-700 dark:text-gray-200 font-body">{result}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* CTA */}
                    <Link
                        href={`/case-studies/${caseStudy.slug}`}
                        className="inline-flex items-center gap-2 text-primary font-bold hover:gap-3 transition-all group"
                    >
                        Read full story
                        <ArrowRight className="w-5 h-5" />
                    </Link>
                </div>

                {/* View All Link */}
                <div className="text-center mt-8">
                    <Link
                        href="/case-studies"
                        className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors font-medium"
                    >
                        View all case studies
                        <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>
            </div>
        </section>
    );
}
