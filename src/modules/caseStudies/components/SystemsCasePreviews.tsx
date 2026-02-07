'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { CASE_STUDIES } from '../content/caseStudies';
import { SystemCategorySection } from './SystemCategorySection';

export function SystemsCasePreviews() {
    const systemsCases = CASE_STUDIES.filter((cs) => cs.type === 'systems');

    return (
        <section className="bg-white py-24">
            <div className="container mx-auto max-w-7xl px-6">
                {/* Header */}
                <motion.div
                    className="mb-20 text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="mb-4 text-4xl font-bold text-gray-900 md:text-5xl">
                        Selected Systems
                    </h2>
                    <p className="mx-auto max-w-3xl text-lg text-gray-600">
                        Production-ready platforms, automation, and digital infrastructure across multiple system domains
                    </p>
                </motion.div>

                {/* Category Sections */}
                <div className="space-y-24">
                    <SystemCategorySection
                        category="platform"
                        caseStudies={systemsCases}
                    />
                    <SystemCategorySection
                        category="automation"
                        caseStudies={systemsCases}
                    />
                    <SystemCategorySection
                        category="commerce"
                        caseStudies={systemsCases}
                    />
                    <SystemCategorySection
                        category="dashboard"
                        caseStudies={systemsCases}
                    />
                    <SystemCategorySection
                        category="ai-intelligent"
                        caseStudies={systemsCases}
                    />
                </div>

                {/* Bottom CTA */}
                <motion.div
                    className="mt-20 text-center"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                >
                    <p className="text-gray-600 mb-6">
                        Ready to build your system?
                    </p>
                    <Link
                        href="/#faq"
                        className="inline-flex items-center gap-2 rounded-full bg-purple-600 px-8 py-4 text-sm font-semibold text-white transition-all hover:bg-purple-700 hover:shadow-lg hover:shadow-purple-500/30"
                    >
                        Let's Talk About Your Project
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
