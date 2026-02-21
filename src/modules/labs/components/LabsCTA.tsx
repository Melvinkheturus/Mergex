'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { LABS_CTA } from '../content/labs';
import { ArrowRight, Sparkles, MessageSquare } from 'lucide-react';

const FEATURES = [
    'No long-term contracts',
    'First draft in 48 hours',
    'Unlimited revisions',
];

/**
 * LabsCTA — "Have a Content Challenge?" section
 *
 * Modern white-bg design with a bold split headline, animated floating
 * accent orbs, feature pills, and two CTA buttons. Scroll-driven entrance.
 */
export function LabsCTA() {
    const sectionRef = useRef<HTMLElement>(null);

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ['start end', 'center center'],
    });

    const y = useTransform(scrollYProgress, [0, 1], [60, 0]);
    const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);

    return (
        <section
            ref={sectionRef}
            className="relative py-24 md:py-36 bg-white overflow-hidden"
        >

            <div className="container mx-auto px-6 md:px-12 relative z-10">
                <motion.div
                    style={{ y, opacity }}
                    className="max-w-4xl mx-auto"
                >
                    {/* Section Label */}
                    <div className="flex items-center gap-3 mb-10 justify-center">
                        <span className="h-px w-12 bg-pink-400" />
                        <span className="text-sm font-semibold tracking-widest text-pink-600 uppercase">
                            Let's Work Together
                        </span>
                        <span className="h-px w-12 bg-pink-400" />
                    </div>

                    {/* Main Headline */}
                    <div className="text-center mb-6">
                        <h2
                            className="text-5xl md:text-6xl lg:text-7xl font-black text-gray-900 leading-[1.05] tracking-tight"
                            style={{ fontFamily: 'var(--font-manrope)', letterSpacing: '-0.04em' }}
                        >
                            {LABS_CTA.headline.split('Content').map((part, i) =>
                                i === 0 ? (
                                    <span key={i}>{part}</span>
                                ) : (
                                    <span key={i}>
                                        <span
                                            style={{
                                                background: 'linear-gradient(135deg, #7C3AED 0%, #EC4899 60%, #F97316 100%)',
                                                WebkitBackgroundClip: 'text',
                                                WebkitTextFillColor: 'transparent',
                                            }}
                                        >
                                            Content
                                        </span>
                                        {part}
                                    </span>
                                )
                            )}
                        </h2>
                    </div>

                    {/* Subheadline */}
                    <motion.p
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        className="text-xl md:text-2xl text-gray-500 text-center mb-12 font-medium"
                    >
                        {LABS_CTA.subheadline}
                    </motion.p>

                    {/* Feature Pills */}
                    <motion.div
                        initial={{ opacity: 0, y: 12 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3, duration: 0.6 }}
                        className="flex flex-wrap gap-3 justify-center mb-14"
                    >
                        {FEATURES.map((feature, i) => (
                            <span
                                key={i}
                                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-50 border border-gray-200 text-sm font-medium text-gray-700"
                            >
                                <span
                                    className="w-1.5 h-1.5 rounded-full"
                                    style={{ background: 'linear-gradient(135deg, #7C3AED, #EC4899)' }}
                                />
                                {feature}
                            </span>
                        ))}
                    </motion.div>

                    {/* CTA Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4, duration: 0.6 }}
                        className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                    >
                        {/* Primary CTA */}
                        <motion.button
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.97 }}
                            className="group relative flex items-center gap-3 px-8 py-4 rounded-2xl text-white font-semibold text-lg overflow-hidden shadow-lg"
                            style={{
                                background: 'linear-gradient(135deg, #7C3AED 0%, #EC4899 100%)',
                                boxShadow: '0 8px 32px rgba(124,58,237,0.35)',
                            }}
                        >
                            {/* Shine sweep on hover */}
                            <span
                                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                                style={{
                                    background: 'linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.18) 50%, transparent 60%)',
                                }}
                            />
                            <Sparkles size={20} className="relative z-10" />
                            <span className="relative z-10">{LABS_CTA.primaryCTA}</span>
                            <ArrowRight
                                size={18}
                                className="relative z-10 group-hover:translate-x-1 transition-transform duration-200"
                            />
                        </motion.button>

                        {/* Secondary CTA */}
                        <motion.button
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.97 }}
                            className="group flex items-center gap-3 px-8 py-4 rounded-2xl font-semibold text-lg border-2 border-gray-200 text-gray-700 bg-white hover:border-violet-300 hover:text-violet-700 transition-all duration-300"
                        >
                            <MessageSquare size={20} className="group-hover:text-violet-600 transition-colors" />
                            {LABS_CTA.secondaryCTA}
                        </motion.button>
                    </motion.div>

                    {/* Bottom trust line */}
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.6, duration: 0.6 }}
                        className="text-center text-sm text-gray-400 mt-10"
                    >
                        No pitches. No fluff. Just results.
                    </motion.p>
                </motion.div>
            </div>
        </section>
    );
}
