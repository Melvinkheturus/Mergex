'use client';

import { motion } from 'framer-motion';
import { PROOF_SYSTEMS } from '../content/systems';
import { GridBackground } from '@/components/backgrounds/GridBackground';

/**
 * ProofSystems - Tech stack credibility
 * Minimal white design with purple accents
 */
export function ProofSystems() {
    return (
        <GridBackground className="py-20 md:py-28 bg-white">
            <section className="container mx-auto px-6 md:px-12">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-[#1A1A1A]"
                        style={{ fontFamily: 'var(--font-geist-sans)' }}
                    >
                        {PROOF_SYSTEMS.headline}
                    </h2>
                    <p className="text-lg md:text-xl text-[#666666] max-w-2xl mx-auto">
                        {PROOF_SYSTEMS.subheadline}
                    </p>
                </motion.div>

                {/* Tech Stack - Partner Logo Style */}
                <div className="max-w-5xl mx-auto mb-12">
                    <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
                        {PROOF_SYSTEMS.techStack.map((tech, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.3, delay: index * 0.05 }}
                                className="group flex flex-col items-center"
                            >
                                <div className="font-bold text-[#1A1A1A] text-lg group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-purple-400 group-hover:bg-clip-text group-hover:text-transparent transition-all">
                                    {tech.name}
                                </div>
                                <div className="text-xs text-[#999999] uppercase tracking-wider mt-1">
                                    {tech.category}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Trust Statement */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    className="text-center max-w-3xl mx-auto"
                >
                    <p className="text-lg text-[#666666] italic">
                        {PROOF_SYSTEMS.trustStatement}
                    </p>
                </motion.div>
            </section>
        </GridBackground>
    );
}

