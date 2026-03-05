'use client';

import { motion } from 'framer-motion';
import { HOW_WE_WORK } from '../content';
import { Search, PenTool, Code2, Rocket } from 'lucide-react';

/**
 * ParentHowItWorks - High-contrast vertical process section
 * Distinct from the division grid layouts.
 */
export function ParentHowItWorks() {
    const icons = [Search, PenTool, Code2, Rocket];

    return (
        <section className="py-24 md:py-40 bg-white relative overflow-hidden">
            <div className="container mx-auto px-6 md:px-12 lg:px-16 max-w-[1400px]">
                {/* Header */}
                <div className="max-w-3xl mb-24 md:mb-40">
                    <motion.span
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="text-xs md:text-sm font-semibold text-neutral-400 uppercase tracking-[0.4em] block mb-6"
                    >
                        Process Driven
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                        className="text-4xl md:text-7xl font-bold font-display tracking-tight text-neutral-900 leading-[0.95]"
                    >
                        {HOW_WE_WORK.headline.split(',').map((part, i) => (
                            <span key={i} className="block">{part}</span>
                        ))}
                    </motion.h2>
                </div>

                {/* Vertical Steps */}
                <div className="space-y-32 md:space-y-64">
                    {HOW_WE_WORK.steps.map((step, index) => {
                        const Icon = icons[index];
                        const isEven = index % 2 === 0;

                        return (
                            <div
                                key={index}
                                className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} gap-12 md:gap-24 items-center`}
                            >
                                {/* Visual Side */}
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.8, x: isEven ? -50 : 50 }}
                                    whileInView={{ opacity: 1, scale: 1, x: 0 }}
                                    viewport={{ once: true, margin: "-100px" }}
                                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                                    className="flex-1 w-full"
                                >
                                    <div className="relative aspect-[4/3] rounded-3xl overflow-hidden bg-neutral-50 border border-neutral-100 flex items-center justify-center group">
                                        <div className="absolute inset-0 bg-gradient-to-br from-violet-50 to-transparent opacity-50" />
                                        <Icon size={120} className="text-neutral-200 group-hover:text-violet-200 transition-colors duration-700" strokeWidth={1} />
                                        <span className="absolute top-10 left-10 text-9xl font-bold text-neutral-100/50 -z-10 select-none">
                                            {step.number}
                                        </span>
                                    </div>
                                </motion.div>

                                {/* Text Side */}
                                <motion.div
                                    initial={{ opacity: 0, y: 40 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-100px" }}
                                    transition={{ duration: 0.8, delay: 0.2 }}
                                    className="flex-1 max-w-xl"
                                >
                                    <span className="text-violet-600 font-bold text-lg mb-4 block">
                                        Step {step.number}
                                    </span>
                                    <h3 className="text-3xl md:text-5xl font-bold text-neutral-900 mb-6 tracking-tight">
                                        {step.title}
                                    </h3>
                                    <p className="text-lg md:text-xl text-neutral-500 leading-relaxed font-light">
                                        {step.description}
                                    </p>
                                </motion.div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
