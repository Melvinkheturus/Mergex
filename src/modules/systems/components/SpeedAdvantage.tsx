'use client';

import { motion } from 'framer-motion';
import { SPEED_ADVANTAGE } from '../content/systems';
import { CheckCircle } from 'lucide-react';

/**
 * SpeedAdvantage - Key competitive differentiator
 */
export function SpeedAdvantage() {
    return (
        <section className="py-20 md:py-28 bg-gradient-to-br from-blue-600 to-blue-800 text-white relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 left-0 w-full h-full" style={{
                    backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
                    backgroundSize: '40px 40px',
                }} />
            </div>

            <div className="container mx-auto px-6 md:px-12 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-5xl mx-auto"
                >
                    {/* Header */}
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display mb-4">
                            {SPEED_ADVANTAGE.headline}
                        </h2>
                        <p className="text-xl md:text-2xl text-blue-100">
                            {SPEED_ADVANTAGE.subheadline}
                        </p>
                    </div>

                    {/* Comparison */}
                    <div className="grid md:grid-cols-2 gap-8 mb-16">
                        <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8">
                            <div className="text-sm text-blue-200 uppercase tracking-wider mb-2">
                                Traditional Agencies
                            </div>
                            <div className="text-3xl font-bold">
                                {SPEED_ADVANTAGE.comparison.traditional}
                            </div>
                        </div>
                        <div className="bg-white/20 backdrop-blur-sm border-2 border-white/40 rounded-2xl p-8">
                            <div className="text-sm text-blue-100 uppercase tracking-wider mb-2">
                                Mergex Systems
                            </div>
                            <div className="text-3xl font-bold">
                                {SPEED_ADVANTAGE.comparison.systems}
                            </div>
                        </div>
                    </div>

                    {/* How We Do It */}
                    <div>
                        <h3 className="text-2xl font-bold mb-8 text-center">How We Do It</h3>
                        <div className="grid md:grid-cols-2 gap-4">
                            {SPEED_ADVANTAGE.howWeDoIt.map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="flex items-start gap-3"
                                >
                                    <CheckCircle size={24} className="flex-shrink-0 text-blue-200" />
                                    <span className="text-lg text-blue-50">{item}</span>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
