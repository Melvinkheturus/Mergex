'use client';

import { motion } from 'framer-motion';

/**
 * ProblemSection - Problem Reframing
 * 
 * Purpose: Make visitors feel understood
 * Psychology: Jobs to Be Done, naming the pain without blame
 * Copy: Customer language, specificity over vagueness
 */
export function ProblemSection() {
    return (
        <section className="relative bg-white py-20 md:py-32">
            <div className="container mx-auto px-6 md:px-12 lg:px-16 max-w-[1200px]">

                {/* Headline - Psychology shift */}
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-10%" }}
                    transition={{ duration: 0.8 }}
                    className="text-4xl md:text-5xl lg:text-6xl font-semibold text-gray-900 mb-8 leading-tight"
                >
                    The modern business problem <br className="hidden md:block" />
                    isn't complexity.
                </motion.h2>

                <motion.h3
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-10%" }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-4xl md:text-5xl lg:text-6xl font-semibold text-gray-900 mb-12"
                >
                    It's coordination.
                </motion.h3>

                {/* Body - systemic problem, not personal */}
                <div className="max-w-3xl">
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-10%" }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6"
                    >
                        Today's businesses juggle agencies, freelancers, platforms, tools, and timelines.
                        Each solves a narrow problem — but none see the whole system.
                    </motion.p>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-10%" }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                        className="text-lg md:text-xl text-gray-700 leading-relaxed"
                    >
                        The result?
                    </motion.p>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-10%" }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                        className="text-xl md:text-2xl font-medium text-gray-900 mt-4"
                    >
                        Slower decisions. Higher costs. Lost momentum.
                    </motion.p>
                </div>

            </div>
        </section>
    );
}
