'use client';

import { motion } from 'framer-motion';
import { PROOF_SIGNALS } from '../content';

/**
 * ProofSection - Tech stack showcase to build trust
 * Shows technologies we work with, establishing technical credibility
 */
export function ProofSection() {
    return (
        <section className="py-20 md:py-28 bg-gradient-to-b from-white to-purple-50/30">
            <div className="container mx-auto px-6 md:px-12">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display mb-4 text-foreground">
                        {PROOF_SIGNALS.headline}
                    </h2>
                    <p className="text-lg md:text-xl text-foreground-muted max-w-2xl mx-auto">
                        {PROOF_SIGNALS.subheadline}
                    </p>
                </motion.div>

                {/* Tech Stack Grid */}
                <div className="text-center mb-8">
                    <span className="text-sm font-semibold text-purple-600 uppercase tracking-widest bg-purple-50 px-3 py-1 rounded-full">
                        The Tools of Velocity
                    </span>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-12">
                    {PROOF_SIGNALS.techStack.map((tech, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.3, delay: index * 0.05 }}
                            className="group bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg hover:border-primary/30 transition-all duration-300 text-center"
                        >
                            <div className="font-bold text-foreground mb-1 text-lg group-hover:text-primary transition-colors">
                                {tech.name}
                            </div>
                            <div className="text-xs text-foreground-muted uppercase tracking-wider">
                                {tech.category}
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Trust Statement */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    className="text-center max-w-3xl mx-auto"
                >
                    <p className="text-lg text-foreground-muted italic">
                        {PROOF_SIGNALS.trustStatement}
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
