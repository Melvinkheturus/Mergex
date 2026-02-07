'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { CASE_STUDIES } from '@/modules/caseStudies';

export function FeaturedSystemsWork() {
    // Show first 3 systems cases only
    const featuredCases = CASE_STUDIES.filter((cs) => cs.type === 'systems').slice(0, 3);

    return (
        <section className="relative overflow-hidden bg-gradient-to-b from-gray-50 to-white py-24">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />

            <div className="container mx-auto max-w-7xl px-6 relative z-10">
                {/* Header */}
                <motion.div
                    className="mb-16 text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <motion.div
                        className="mb-4 inline-flex items-center gap-2 rounded-full bg-purple-100 px-4 py-2"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <CheckCircle2 className="h-4 w-4 text-purple-600" />
                        <span className="text-sm font-semibold text-purple-700 uppercase tracking-wider">
                            Proof of Work
                        </span>
                    </motion.div>

                    <h2 className="mb-4 text-4xl font-bold text-gray-900 md:text-5xl">
                        Systems That Work
                    </h2>
                    <p className="mx-auto max-w-2xl text-lg text-gray-600">
                        Real businesses solving real problems. Here's what execution looks like.
                    </p>
                </motion.div>

                {/* Featured Cases Grid */}
                <div className="grid gap-8 lg:grid-cols-3">
                    {featuredCases.map((caseStudy, index) => (
                        <motion.div
                            key={caseStudy.id}
                            className="group relative overflow-hidden rounded-2xl bg-white p-8 shadow-sm border border-gray-200 transition-all duration-300 hover:shadow-xl hover:border-purple-300"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.15 }}
                            whileHover={{ y: -8 }}
                        >
                            {/* Speed Badge */}
                            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-green-100 px-3 py-1.5">
                                <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
                                <span className="text-xs font-bold text-green-700">
                                    {caseStudy.speedIndicator}
                                </span>
                            </div>

                            {/* Problem Type */}
                            <div className="mb-3">
                                <span className="text-xs font-semibold text-purple-600 uppercase tracking-wider">
                                    {caseStudy.problemType.replace('-', ' ')}
                                </span>
                            </div>

                            {/* Title */}
                            <h3 className="mb-4 text-xl font-bold text-gray-900 line-clamp-2 group-hover:text-purple-700 transition-colors">
                                {caseStudy.title}
                            </h3>

                            {/* Problem Summary */}
                            <p className="mb-4 text-sm text-gray-600 line-clamp-3">
                                {caseStudy.problemSummary}
                            </p>

                            {/* Outcome */}
                            <div className="mb-6 rounded-lg bg-gray-50 p-4 border-l-4 border-purple-500">
                                <p className="text-xs font-semibold text-gray-500 uppercase mb-1">
                                    Outcome
                                </p>
                                <p className="text-sm font-medium text-gray-900">
                                    {caseStudy.outcomeHint}
                                </p>
                            </div>

                            {/* CTA */}
                            <Link
                                href="/systems#case-studies"
                                className="inline-flex items-center gap-2 text-sm font-semibold text-purple-600 hover:text-purple-700 transition-colors group/link"
                            >
                                View case study
                                <ArrowRight className="h-4 w-4 transition-transform group-hover/link:translate-x-1" />
                            </Link>

                            {/* Hover Gradient Border */}
                            <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-purple-500/20 to-pink-500/20 -z-10" />
                        </motion.div>
                    ))}
                </div>

                {/* Bottom CTA */}
                <motion.div
                    className="mt-12 text-center"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                >
                    <Link
                        href="/systems"
                        className="inline-flex items-center gap-2 rounded-full bg-purple-600 px-8 py-4 text-sm font-semibold text-white transition-all hover:bg-purple-700 hover:shadow-lg hover:shadow-purple-500/30"
                    >
                        Explore Mergex Systems
                        <ArrowRight className="h-4 w-4" />
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
