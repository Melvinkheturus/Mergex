'use client';

import { motion } from 'framer-motion';

/**
 * PhilosophySection - Mergex's Philosophy
 * 
 * Purpose: Define how you think, not what you sell
 * Psychology: First Principles, Jobs to Be Done
 * Copy: One idea (alignment), benefits over features
 */
export function PhilosophySection() {
    return (
        <section className="relative bg-gray-50 py-20 md:py-32">
            <div className="container mx-auto px-6 md:px-12 lg:px-16 max-w-[1200px]">

                {/* Headline */}
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-900 mb-8 leading-tight"
                >
                    Mergex is built around one idea: alignment.
                </motion.h2>

                {/* Body - philosophy statement */}
                <div className="max-w-3xl space-y-6">
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-lg md:text-xl text-gray-700 leading-relaxed"
                    >
                        We believe businesses move faster when ideas, intelligence, and execution
                        operate as one system — not separate vendors.
                    </motion.p>

                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="text-lg md:text-xl text-gray-700 leading-relaxed"
                    >
                        That's why Mergex isn't a single service.
                        It's an ecosystem designed to adapt as your needs evolve.
                    </motion.p>

                    {/* Micro-statement */}
                    <motion.p
                        initial={{ opacity: 0, scaleX: 0 }}
                        whileInView={{ opacity: 1, scaleX: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="text-base text-gray-500 pt-4 border-t border-gray-200 origin-left"
                    >
                        Strategy, creativity, engineering, and automation — designed to work together.
                    </motion.p>
                </div>

            </div>
        </section>
    );
}
