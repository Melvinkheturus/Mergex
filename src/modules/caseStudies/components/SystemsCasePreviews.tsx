'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { CASE_STUDIES } from '../content/caseStudies';
import { CaseStudyCard } from './CaseStudyCard';

export function SystemsCasePreviews() {
    // Show first 2 systems case studies
    const systemsCases = CASE_STUDIES.filter((cs) => cs.type === 'systems').slice(0, 2);

    return (
        <section className="bg-white py-20">
            <div className="container mx-auto max-w-7xl px-6">
                <motion.div
                    className="mb-12 text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
                        See Systems in Action
                    </h2>
                    <p className="mx-auto max-w-2xl text-lg text-gray-600">
                        Real businesses. Real challenges. Real outcomes.
                    </p>
                </motion.div>

                <div className="mb-8 grid gap-6 md:grid-cols-2">
                    {systemsCases.map((caseStudy, index) => (
                        <motion.div
                            key={caseStudy.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                        >
                            <CaseStudyCard caseStudy={caseStudy} />
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    className="text-center"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                >
                    <Link
                        href="/case-studies"
                        className="inline-flex items-center gap-2 text-lg font-semibold text-purple-600 hover:text-purple-700"
                    >
                        View all case studies →
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
