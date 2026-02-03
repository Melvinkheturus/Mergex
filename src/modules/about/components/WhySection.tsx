'use client';

import { motion } from 'framer-motion';

/**
 * WhySection - Why Mergex Exists
 * 
 * Purpose: Explain existence briefly, tie to tagline
 * Psychology: First Principles, Framing Effect
 * Copy: Simple, clear, connects to core belief
 */
export function WhySection() {
    return (
        <section className="relative bg-gray-50 py-20 md:py-32">
            <div className="container mx-auto px-6 md:px-12 lg:px-16 max-w-[1000px] text-center">

                {/* Headline */}
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-3xl md:text-4xl font-semibold text-gray-900 mb-8"
                >
                    Why Mergex exists
                </motion.h2>

                {/* Body */}
                <div className="space-y-6">
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-xl md:text-2xl text-gray-700 leading-relaxed"
                    >
                        Because modern businesses don't need more tools.
                    </motion.p>

                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.15 }}
                        className="text-xl md:text-2xl text-gray-700 leading-relaxed"
                    >
                        They need fewer disconnects.
                    </motion.p>

                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="text-lg md:text-xl text-gray-600 leading-relaxed mt-8 pt-8 border-t border-gray-200 max-w-2xl mx-auto"
                    >
                        Mergex exists to reduce friction — between ideas and execution,
                        creativity and intelligence, speed and stability.
                    </motion.p>
                </div>

            </div>
        </section>
    );
}
