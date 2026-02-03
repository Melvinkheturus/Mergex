'use client';

import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import type { CaseStudy } from '../content/caseStudies';
import { DetailedCaseStudy } from './DetailedCaseStudy';

interface FullCaseStudyProps {
    caseStudy: CaseStudy;
}

export function FullCaseStudy({ caseStudy }: FullCaseStudyProps) {
    // If detailedCase exists, render the comprehensive DetailedCaseStudy component
    if (caseStudy.detailedCase) {
        return <DetailedCaseStudy caseStudy={caseStudy} />;
    }

    if (!caseStudy.fullCase) {
        return <div>Case study content not available</div>;
    }

    const { fullCase } = caseStudy;

    return (
        <article className="bg-white">
            {/* Hero */}
            <section className="bg-gradient-to-br from-purple-50 to-blue-50 py-20">
                <div className="container mx-auto max-w-4xl px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="mb-4 inline-block rounded-full bg-purple-100 px-4 py-1 text-sm font-semibold text-purple-700">
                            {fullCase.context.industry}
                        </div>
                        <h1 className="mb-6 text-4xl font-bold leading-tight text-gray-900 md:text-5xl">
                            {caseStudy.title}
                        </h1>
                        <p className="text-xl text-gray-600">{fullCase.context.situation}</p>
                    </motion.div>
                </div>
            </section>

            {/* The Real Problem */}
            <section className="border-t border-gray-200 py-16">
                <div className="container mx-auto max-w-4xl px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="mb-6 text-3xl font-bold text-gray-900">{fullCase.realProblem.headline}</h2>

                        <div className="space-y-6">
                            <div>
                                <h3 className="mb-2 font-semibold text-gray-900">What Wasn't Working</h3>
                                <p className="leading-relaxed text-gray-600">{fullCase.realProblem.whatWasntWorking}</p>
                            </div>

                            <div>
                                <h3 className="mb-2 font-semibold text-gray-900">Why Previous Vendors Failed</h3>
                                <p className="leading-relaxed text-gray-600">{fullCase.realProblem.whyVendorsFailed}</p>
                            </div>

                            <div>
                                <h3 className="mb-2 font-semibold text-gray-900">The Real Complexity</h3>
                                <p className="leading-relaxed text-gray-600">{fullCase.realProblem.complexity}</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* The Approach */}
            <section className="border-t border-gray-200 bg-gray-50 py-16">
                <div className="container mx-auto max-w-4xl px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="mb-6 text-3xl font-bold text-gray-900">{fullCase.approach.headline}</h2>

                        <div className="space-y-6">
                            <div>
                                <h3 className="mb-2 font-semibold text-gray-900">How We Simplified</h3>
                                <p className="leading-relaxed text-gray-600">{fullCase.approach.simplification}</p>
                            </div>

                            <div className="rounded-lg border-2 border-red-200 bg-red-50 p-4">
                                <h3 className="mb-2 font-semibold text-red-900">What We Didn't Build</h3>
                                <p className="leading-relaxed text-red-800">{fullCase.approach.whatWeDidntBuild}</p>
                            </div>

                            <div>
                                <h3 className="mb-2 font-semibold text-gray-900">Decision Process</h3>
                                <p className="leading-relaxed text-gray-600">{fullCase.approach.decisionProcess}</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Speed & Execution */}
            <section className="border-t border-gray-200 py-16">
                <div className="container mx-auto max-w-4xl px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="mb-6 text-3xl font-bold text-gray-900">Speed & Execution</h2>

                        <div className="space-y-4">
                            <div className="flex items-start gap-3">
                                <div className="mt-1 h-2 w-2 shrink-0 rounded-full bg-green-600"></div>
                                <div>
                                    <p className="font-semibold text-gray-900">Timeline</p>
                                    <p className="text-gray-600">{fullCase.execution.mvpTimeline}</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-3">
                                <div className="mt-1 h-2 w-2 shrink-0 rounded-full bg-green-600"></div>
                                <div>
                                    <p className="font-semibold text-gray-900">Iterations</p>
                                    <p className="text-gray-600">{fullCase.execution.iterations} major iterations before launch</p>
                                </div>
                            </div>

                            <div className="rounded-lg bg-purple-50 p-4">
                                <h3 className="mb-2 font-semibold text-purple-900">What Shipped First</h3>
                                <p className="leading-relaxed text-purple-800">{fullCase.execution.whatShippedFirst}</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Outcome */}
            <section className="border-t border-gray-200 bg-gradient-to-br from-green-50 to-blue-50 py-16">
                <div className="container mx-auto max-w-4xl px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="mb-6 text-3xl font-bold text-gray-900">Outcome</h2>

                        {fullCase.outcome.metrics && fullCase.outcome.metrics.length > 0 && (
                            <div className="mb-6">
                                <h3 className="mb-3 font-semibold text-gray-900">Measurable Results</h3>
                                <ul className="space-y-2">
                                    {fullCase.outcome.metrics.map((metric, index) => (
                                        <li key={index} className="flex items-start gap-2">
                                            <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-green-600" />
                                            <span className="text-gray-800">{metric}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}

                        {fullCase.outcome.qualitativeResults.length > 0 && (
                            <div className="mb-6">
                                <h3 className="mb-3 font-semibold text-gray-900">Qualitative Impact</h3>
                                <ul className="space-y-2">
                                    {fullCase.outcome.qualitativeResults.map((result, index) => (
                                        <li key={index} className="flex items-start gap-2">
                                            <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-blue-600" />
                                            <span className="text-gray-800">{result}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}

                        <div className="rounded-lg bg-white p-4">
                            <p className="text-sm italic text-gray-600">{fullCase.outcome.direction}</p>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Reflection */}
            <section className="border-t border-gray-200 py-16">
                <div className="container mx-auto max-w-4xl px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="mb-6 text-3xl font-bold text-gray-900">{fullCase.reflection.headline}</h2>

                        <ul className="space-y-4">
                            {fullCase.reflection.learnings.map((learning, index) => (
                                <li key={index} className="flex items-start gap-3 rounded-lg border border-gray-200 bg-gray-50 p-4">
                                    <span className="text-2xl">{index + 1}.</span>
                                    <p className="leading-relaxed text-gray-700">{learning}</p>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                </div>
            </section>

            {/* CTA */}
            <section className="border-t border-gray-200 bg-gradient-to-br from-purple-600 to-blue-600 py-16">
                <div className="container mx-auto max-w-4xl px-6 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="mb-6 text-3xl font-bold text-white">{fullCase.cta.headline}</h2>

                        <a
                            href="https://calendly.com/mergex"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group inline-flex items-center gap-2 rounded-lg bg-white px-8 py-4 font-semibold text-purple-600 shadow-lg transition-all hover:scale-105"
                        >
                            {fullCase.cta.ctaText}
                            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                        </a>
                    </motion.div>
                </div>
            </section>
        </article>
    );
}
