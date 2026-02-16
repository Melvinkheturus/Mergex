'use client';

import { motion } from 'framer-motion';
import { HOW_WE_WORK_SYSTEMS } from '../content/systems';

/**
 * HowWeWorkSystems - Premium Process Visualization
 * 
 * Redesigned with MERGEX design system:
 * - Vertical timeline with purple gradient line
 * - Large step numbers in bold typography
 * - Clean content alignment
 * - No bulky containers - spacing-based separation
 * - Editorial, designed sections
 * - Subtle scroll animations
 */
export function HowWeWorkSystems() {
    return (
        <section className="relative py-24 lg:py-32 bg-white overflow-hidden">
            {/* Atmospheric Background Elements */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div className="absolute top-20 right-20 w-[500px] h-[500px] bg-purple-100/40 rounded-full blur-[120px]" />
                <div className="absolute bottom-20 left-20 w-[400px] h-[400px] bg-purple-50/50 rounded-full blur-[100px]" />
            </div>

            <div className="relative z-10 container mx-auto px-6 md:px-12 max-w-6xl">
                {/* Header */}
                <div className="text-center mb-20 lg:mb-24">
                    {/* Eyebrow */}
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="flex items-center justify-center gap-4 mb-6"
                    >
                        <div className="h-[2px] w-12 bg-gradient-to-r from-transparent to-purple-500" />
                        <span className="text-purple-600 font-bold text-xs uppercase tracking-[0.25em]">
                            Our Process
                        </span>
                        <div className="h-[2px] w-12 bg-gradient-to-l from-transparent to-purple-500" />
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-neutral-900 leading-tight tracking-tight"
                    >
                        {HOW_WE_WORK_SYSTEMS.headline}
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-xl md:text-2xl text-neutral-600 max-w-3xl mx-auto leading-relaxed"
                    >
                        {HOW_WE_WORK_SYSTEMS.subheadline}
                    </motion.p>
                </div>

                {/* Vertical Timeline */}
                <div className="relative max-w-4xl mx-auto">
                    {/* Vertical Purple Gradient Line */}
                    <div className="absolute left-[2.5rem] md:left-[3rem] top-0 bottom-0 w-[2px] bg-gradient-to-b from-violet-400 via-purple-500 to-violet-900" />

                    {/* Timeline Steps */}
                    <div className="space-y-20 lg:space-y-24">
                        {HOW_WE_WORK_SYSTEMS.phases.map((phase, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className="relative pl-24 md:pl-28"
                            >
                                {/* Step Number Circle */}
                                <div className="absolute left-0 top-0 flex items-center justify-center w-20 h-20 md:w-24 md:h-24">
                                    <div className="absolute inset-0 bg-white rounded-full" />
                                    <div className="absolute inset-2 bg-gradient-to-br from-violet-400 to-violet-900 rounded-full" />
                                    <span className="relative text-2xl md:text-3xl font-black text-white z-10">
                                        {phase.number}
                                    </span>
                                </div>

                                {/* Content */}
                                <div className="space-y-4">
                                    {/* Title & Timeframe */}
                                    <div className="space-y-3">
                                        <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900 leading-tight">
                                            {phase.title}
                                        </h3>
                                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-50 rounded-full border border-purple-100">
                                            <svg className="w-4 h-4 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                            <span className="text-sm font-semibold text-purple-700">
                                                {phase.timeframe}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Description */}
                                    <p className="text-lg md:text-xl text-neutral-700 leading-relaxed max-w-3xl">
                                        {phase.description}
                                    </p>

                                    {/* Outcome */}
                                    <div className="inline-flex items-start gap-3 px-5 py-3 bg-purple-50/50 border border-purple-100 rounded-xl">
                                        <svg className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                        <div>
                                            <div className="text-xs font-bold text-purple-700 uppercase tracking-wider mb-1">
                                                Outcome
                                            </div>
                                            <div className="text-sm font-semibold text-purple-900">
                                                {phase.outcome}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Deliverables */}
                                    <div className="pt-2">
                                        <div className="text-xs font-bold text-neutral-500 uppercase tracking-wider mb-3">
                                            Key Deliverables
                                        </div>
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                            {phase.deliverables.map((deliverable, idx) => (
                                                <div key={idx} className="flex items-start gap-2 text-sm text-neutral-700">
                                                    <div className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-2 flex-shrink-0" />
                                                    <span>{deliverable}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Bottom CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="mt-24 text-center"
                >
                    <div className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-50 to-violet-50 border-2 border-purple-200 rounded-full">
                        <span className="text-purple-700 text-lg font-semibold">
                            Ready to start? Let's map your project timeline.
                        </span>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
