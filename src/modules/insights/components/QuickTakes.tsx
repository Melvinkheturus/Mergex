'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { QUICK_TAKES } from '../content/insights';

export function QuickTakes() {
    const [expanded, setExpanded] = useState<number | null>(null);

    return (
        <section className="py-16 md:py-20 border-t border-gray-100">
            <div className="max-w-7xl mx-auto px-6 md:px-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-20">
                    {/* Left label */}
                    <div className="lg:col-span-3 flex flex-col justify-start">
                        <motion.div
                            initial={{ opacity: 0, x: -16 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                        >
                            <p className="text-xs text-gray-400 uppercase tracking-[0.2em] font-semibold mb-3">
                                Quick Takes
                            </p>
                            <h2
                                className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight"
                                style={{ fontFamily: 'var(--font-playfair)' }}
                            >
                                Bites of{' '}
                                <em className="text-violet-600 not-italic">clarity.</em>
                            </h2>
                            <p className="text-sm text-gray-400 mt-3 leading-relaxed">
                                Things we believe deeply. Each one expands into a full insight.
                            </p>
                        </motion.div>
                    </div>

                    {/* Right — Takes list */}
                    <div className="lg:col-span-9 flex flex-col divide-y divide-gray-100">
                        {QUICK_TAKES.map((take, i) => {
                            const isOpen = expanded === i;
                            return (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 12 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: i * 0.06 }}
                                >
                                    <button
                                        onClick={() => setExpanded(isOpen ? null : i)}
                                        className="w-full text-left py-5 flex items-start justify-between gap-6 group cursor-pointer"
                                    >
                                        <span className="flex items-start gap-4">
                                            <span className="text-[11px] font-mono text-gray-300 mt-1 shrink-0">
                                                {String(i + 1).padStart(2, '0')}
                                            </span>
                                            <span className="text-base md:text-lg font-semibold text-gray-800 group-hover:text-violet-700 transition-colors duration-200 leading-snug">
                                                {take}
                                            </span>
                                        </span>
                                        <span
                                            className={`shrink-0 w-6 h-6 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 group-hover:border-violet-300 group-hover:text-violet-600 transition-all duration-200 mt-0.5 ${isOpen ? 'rotate-45' : ''}`}
                                        >
                                            +
                                        </span>
                                    </button>

                                    <AnimatePresence>
                                        {isOpen && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: 'auto', opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                transition={{ duration: 0.3 }}
                                                className="overflow-hidden"
                                            >
                                                <div className="pl-9 pb-5">
                                                    <p className="text-sm text-gray-500 leading-relaxed mb-3">
                                                        This is a short-form take. We&apos;re expanding this into a full insight soon.
                                                    </p>
                                                    <button className="text-xs font-semibold text-violet-600 hover:underline">
                                                        Notify me when it&apos;s published →
                                                    </button>
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
