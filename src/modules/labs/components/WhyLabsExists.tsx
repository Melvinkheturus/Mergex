'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { WHY_LABS_EXISTS } from '../content/labs';

/**
 * WhyLabsExists - Immersive Manifesto Layout
 * 
 * Features large-scale typography, overlapping glassmorphism accents,
 * and high-impact scroll-driven reveals.
 */
export function WhyLabsExists() {
    const containerRef = useRef<HTMLElement>(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const scrollSpring = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
    const yTransform = useTransform(scrollSpring, [0, 1], [0, -100]);
    const opacityTransform = useTransform(scrollSpring, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

    return (
        <section
            ref={containerRef}
            className="relative py-32 md:py-48 bg-[#050505] overflow-hidden"
        >
            {/* Background Decorative Elements */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute top-1/4 -left-20 w-96 h-96 bg-purple-600/10 rounded-full blur-[120px]" />
                <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-purple-900/10 rounded-full blur-[120px]" />
            </div>

            <div className="container mx-auto px-6 md:px-12 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">

                    {/* Left: Sticky Headline (Desktop) */}
                    <div className="lg:col-span-5 lg:sticky lg:top-32">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <span className="text-purple-500 font-mono text-xs tracking-[0.3em] uppercase mb-6 block">
                                // CORE_MOTIVATION
                            </span>
                            <h2 className="text-5xl md:text-6xl lg:text-8xl font-black font-display text-white leading-[0.9] tracking-tighter italic">
                                {WHY_LABS_EXISTS.headline.split(' ').map((word, i) => (
                                    <span key={i} className="block last:text-purple-500">
                                        {word}
                                    </span>
                                ))}
                            </h2>
                        </motion.div>
                    </div>

                    {/* Right: manifesto Statements */}
                    <div className="lg:col-span-7 space-y-24 md:space-y-40">
                        {WHY_LABS_EXISTS.statements.map((statement, index) => (
                            <ManifestoItem
                                key={index}
                                statement={statement}
                                index={index}
                            />
                        ))}
                    </div>
                </div>

                {/* Closing Statement */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="mt-40 md:mt-64 text-center border-t border-white/5 pt-24"
                >
                    <div className="max-w-4xl mx-auto">
                        <p className="text-3xl md:text-5xl lg:text-7xl font-bold text-white leading-tight tracking-tight">
                            {WHY_LABS_EXISTS.closingLine.split('10x').map((part, i) => (
                                <React.Fragment key={i}>
                                    {part}
                                    {i === 0 && (
                                        <span className="relative inline-block px-4">
                                            <span className="relative z-10 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent italic">
                                                10x
                                            </span>
                                            <motion.span
                                                animate={{
                                                    scale: [1, 1.2, 1],
                                                    opacity: [0.3, 0.6, 0.3]
                                                }}
                                                transition={{
                                                    duration: 2,
                                                    repeat: Infinity,
                                                    ease: "easeInOut"
                                                }}
                                                className="absolute inset-0 bg-purple-500/20 blur-xl rounded-full z-0"
                                            />
                                        </span>
                                    )}
                                </React.Fragment>
                            ))}
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

function ManifestoItem({ statement, index }: any) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            className="relative group"
        >
            {/* Background Numbering (Watermark) */}
            <div className="absolute -top-12 -left-8 text-9xl font-black text-white/[0.02] select-none group-hover:text-purple-500/[0.04] transition-colors duration-700">
                0{index + 1}
            </div>

            <div className="relative z-10">
                <h3 className="text-xl font-mono text-purple-400 mb-6 flex items-center gap-3">
                    <span className="w-8 h-px bg-purple-500/30" />
                    {statement.emphasis.toUpperCase()}
                </h3>

                <p className="text-2xl md:text-3xl lg:text-4xl font-light text-gray-300 leading-snug tracking-tight max-w-2xl">
                    {statement.text.split(statement.emphasis).map((part: string, i: number) => (
                        <React.Fragment key={i}>
                            {part}
                            {i === 0 && (
                                <span className="text-white font-medium border-b border-purple-500/30">
                                    {statement.emphasis}
                                </span>
                            )}
                        </React.Fragment>
                    ))}
                </p>

                {/* Decorative Technical Line */}
                <div className="mt-12 w-full h-px bg-gradient-to-r from-purple-500/20 via-transparent to-transparent" />
            </div>

            {/* Glassmorphism Floating Accent (Desktop) */}
            {index % 2 === 0 && (
                <div className="hidden xl:block absolute -right-32 top-0 w-64 h-64 bg-white/[0.02] backdrop-blur-3xl border border-white/5 rounded-full -z-10 animate-blob" />
            )}
        </motion.div>
    );
}
