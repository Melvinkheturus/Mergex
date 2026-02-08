'use client';

import { motion } from 'framer-motion';
import { WHAT_WE_SOLVE } from '../content/systems';
import Link from 'next/link';

/**
 * WhatWeSolve - Hero-style section with proof cards
 * Following reference design with large headline, supporting text, CTA, and metric/testimonial cards
 */
export function WhatWeSolve() {
    return (
        <section className="py-20 md:py-28 bg-white w-full">
            <div className="container mx-auto px-6 md:px-12">
                {/* Hero Header */}
                <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8 mb-16">
                    {/* Left: Headline */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="max-w-2xl"
                    >
                        <span className="inline-block px-3 py-1 bg-gray-100 rounded-full text-sm font-medium text-gray-800 mb-6">
                            Why Mergex Systems
                        </span>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1A1A1A] leading-tight"
                            style={{ fontFamily: 'var(--font-geist-sans)' }}
                        >
                            {WHAT_WE_SOLVE.headline}
                        </h2>
                    </motion.div>

                    {/* Right: Subheadline + CTA */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="max-w-md flex flex-col gap-6"
                    >
                        <p className="text-lg text-[#666666] leading-relaxed">
                            {WHAT_WE_SOLVE.subheadline}
                        </p>
                        <Link
                            href="/contact"
                            className="inline-flex items-center justify-center px-8 py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-full font-medium hover:from-orange-600 hover:to-orange-700 transition-all shadow-sm hover:shadow-md w-fit"
                        >
                            {WHAT_WE_SOLVE.primaryCTA}
                        </Link>
                    </motion.div>
                </div>

                {/* Proof Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
                    {WHAT_WE_SOLVE.proofCards.map((card, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className={`
                                rounded-3xl p-8 shadow-sm hover:shadow-md transition-all duration-300
                                ${card.type === 'testimonial'
                                    ? 'bg-[#2D2D2D] text-white col-span-1 md:col-span-2 lg:col-span-1'
                                    : 'bg-white border border-gray-100'
                                }
                            `}
                        >
                            {card.type === 'metric' ? (
                                <>
                                    <div className="mb-4">
                                        <div className="text-5xl md:text-6xl font-bold text-[#1A1A1A] mb-2">
                                            {card.value}
                                        </div>
                                        <div className="text-sm font-semibold text-[#1A1A1A] uppercase tracking-wide">
                                            {card.label}
                                        </div>
                                    </div>
                                    <p className="text-sm text-[#666666] leading-relaxed">
                                        {card.description}
                                    </p>
                                </>
                            ) : (
                                <>
                                    <div className="mb-6">
                                        <p className="text-lg font-medium leading-relaxed mb-4">
                                            "{card.quote}"
                                        </p>
                                    </div>
                                    <div className="text-sm text-gray-400">
                                        <div className="font-semibold text-white">{card.author}</div>
                                        <div className="text-gray-500">{card.context}</div>
                                    </div>
                                </>
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
