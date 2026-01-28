'use client';

import { motion } from 'framer-motion';
import { WHY_LABS_EXISTS } from '../content/labs';

/**
 * WhyLabsExists - Philosophy and differentiation
 */
export function WhyLabsExists() {
    return (
        <section className="py-20 md:py-28 bg-gradient-to-b from-purple-50/30 to-white">
            <div className="container mx-auto px-6 md:px-12">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-5xl mx-auto"
                >
                    {/* Header */}
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display mb-16 text-center text-foreground">
                        {WHY_LABS_EXISTS.headline}
                    </h2>

                    {/* Statements */}
                    <div className="space-y-12 mb-16">
                        {WHY_LABS_EXISTS.statements.map((statement, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.2 }}
                                className="relative pl-8 border-l-4 border-purple-300"
                            >
                                <p className="text-xl md:text-2xl text-foreground-muted leading-relaxed">
                                    {statement.text}
                                </p>
                            </motion.div>
                        ))}
                    </div>

                    {/* Closing Line */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.6 }}
                        className="text-center"
                    >
                        <p className="text-2xl md:text-3xl font-semibold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                            {WHY_LABS_EXISTS.closingLine}
                        </p>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
