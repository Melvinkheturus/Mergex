'use client';

import { motion } from 'framer-motion';
import { HOW_WE_WORK_SYSTEMS } from '../content/systems';

interface HowWeWorkSystemsProps {
    content?: typeof HOW_WE_WORK_SYSTEMS;
}

/**
 * HowWeWorkSystems - Premium Process Visualization
 * Accepts optional `content` prop from server-side Sanity fetch.
 */
export function HowWeWorkSystems({ content }: HowWeWorkSystemsProps = {}) {
    const data = content ?? HOW_WE_WORK_SYSTEMS;
    const headline = data.headline || HOW_WE_WORK_SYSTEMS.headline;
    const subheadline = data.subheadline || HOW_WE_WORK_SYSTEMS.subheadline;
    const phases = data.phases?.length ? data.phases : HOW_WE_WORK_SYSTEMS.phases;

    return (
        <section className="relative bg-white text-[#1A1A1A] py-24 lg:py-32 overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-40">
                <div className="absolute top-[10%] left-[-5%] w-[40%] h-[40%] rounded-full bg-purple-50 blur-[120px]" />
                <div className="absolute bottom-[10%] right-[-5%] w-[40%] h-[40%] rounded-full bg-indigo-50 blur-[120px]" />
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
                        {headline}
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-xl md:text-2xl text-neutral-600 max-w-3xl mx-auto leading-relaxed"
                    >
                        {subheadline}
                    </motion.p>
                </div>

                {/* Timeline Steps */}
                <div className="space-y-20 lg:space-y-24 relative">
                    {/* Vertical connecting line */}
                    <div className="absolute left-[40px] md:left-[48px] top-10 bottom-10 w-[2px] bg-gradient-to-b from-purple-100 via-purple-200 to-purple-100 hidden md:block" />

                    {phases.map((phase, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="relative pl-24 md:pl-32"
                        >
                            {/* Step Number Circle */}
                            <div className="absolute left-0 top-0 flex items-center justify-center w-20 h-20 md:w-24 md:h-24 z-20">
                                <div className="absolute inset-0 bg-white rounded-full shadow-xl shadow-purple-500/10 border border-purple-100" />
                                <div className="absolute inset-2 bg-gradient-to-br from-violet-400 to-violet-900 rounded-full" />
                                <span className="relative text-2xl md:text-3xl font-black text-white z-10">
                                    {phase.number}
                                </span>
                            </div>

                            {/* Content */}
                            <div className="space-y-6">
                                {/* Title & Timeframe */}
                                <div className="space-y-3">
                                    <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900 leading-tight" style={{ fontFamily: 'var(--font-manrope)' }}>
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

                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 pt-4">
                                    {/* Outcome */}
                                    <div className="flex flex-col gap-3 px-6 py-5 bg-purple-50/50 border border-purple-100 rounded-2xl">
                                        <div className="flex items-center gap-2">
                                            <svg className="w-5 h-5 text-purple-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                            </svg>
                                            <div className="text-xs font-bold text-purple-700 uppercase tracking-wider">
                                                Main Outcome
                                            </div>
                                        </div>
                                        <div className="text-base font-semibold text-purple-900 leading-snug">
                                            {phase.outcome}
                                        </div>
                                    </div>

                                    {/* Deliverables */}
                                    <div className="flex flex-col gap-4">
                                        <div className="text-xs font-bold text-neutral-500 uppercase tracking-wider">
                                            Key Deliverables
                                        </div>
                                        <div className="grid grid-cols-1 gap-3">
                                            {phase.deliverables.map((deliverable, idx) => (
                                                <div key={idx} className="flex items-start gap-3 text-sm text-neutral-700 bg-neutral-50 p-3 rounded-lg border border-neutral-100/50">
                                                    <div className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-2 flex-shrink-0" />
                                                    <span className="font-medium">{deliverable}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
