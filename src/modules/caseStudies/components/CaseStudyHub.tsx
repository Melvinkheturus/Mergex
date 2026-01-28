'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { CASE_STUDY_HUB, CASE_STUDIES } from '../content/caseStudies';
import { CaseStudyCard } from './CaseStudyCard';
import type { BusinessType, ProblemType } from '../content/caseStudies';

export function CaseStudyHub() {
    const [businessFilter, setBusinessFilter] = useState<string>('all');
    const [problemFilter, setProblemFilter] = useState<string>('all');

    // Filter case studies (only show systems type for hub)
    const filteredCases = CASE_STUDIES.filter((cs) => {
        if (cs.type !== 'systems') return false;

        const matchesBusiness = businessFilter === 'all' || cs.businessType === businessFilter;
        const matchesProblem = problemFilter === 'all' || cs.problemType === problemFilter;

        return matchesBusiness && matchesProblem;
    });

    return (
        <section className="bg-white py-20">
            <div className="container mx-auto max-w-7xl px-6">
                {/* Header */}
                <motion.div
                    className="mb-12 text-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h1 className="mb-4 text-4xl font-bold text-gray-900 md:text-5xl">
                        {CASE_STUDY_HUB.headline}
                    </h1>
                    <p className="mx-auto max-w-2xl text-lg text-gray-600">
                        {CASE_STUDY_HUB.subheadline}
                    </p>
                </motion.div>

                {/* Filters */}
                <motion.div
                    className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    {/* Business Type Filter */}
                    <div className="flex items-center gap-2">
                        <label className="text-sm font-semibold text-gray-700">Business:</label>
                        <select
                            value={businessFilter}
                            onChange={(e) => setBusinessFilter(e.target.value)}
                            className="rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-900 transition-colors hover:border-purple-300 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-200"
                        >
                            {CASE_STUDY_HUB.filters.businessType.map((option) => (
                                <option key={option.value} value={option.value}>
                                    {option.label}
                                </option>
                            ))}
                        </select>
                    </div>

                    {/* Problem Type Filter */}
                    <div className="flex items-center gap-2">
                        <label className="text-sm font-semibold text-gray-700">Problem:</label>
                        <select
                            value={problemFilter}
                            onChange={(e) => setProblemFilter(e.target.value)}
                            className="rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-900 transition-colors hover:border-purple-300 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-200"
                        >
                            {CASE_STUDY_HUB.filters.problemType.map((option) => (
                                <option key={option.value} value={option.value}>
                                    {option.label}
                                </option>
                            ))}
                        </select>
                    </div>
                </motion.div>

                {/* Case Studies Grid */}
                {filteredCases.length > 0 ? (
                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {filteredCases.map((caseStudy, index) => (
                            <motion.div
                                key={caseStudy.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 + 0.3 }}
                            >
                                <CaseStudyCard caseStudy={caseStudy} />
                            </motion.div>
                        ))}
                    </div>
                ) : (
                    <motion.div
                        className="rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 p-12 text-center"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                    >
                        <p className="text-gray-600">No case studies match your filters. Try adjusting your selection.</p>
                    </motion.div>
                )}
            </div>
        </section>
    );
}
