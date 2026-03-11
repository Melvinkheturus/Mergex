'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { AnimatedBeamMultipleOutputDemo } from '@/components/ui/animated-beam-demo';

/**
 * ArchitectureSection — "From Chaos to Clarity"
 *
 * Visual language: large conceptual typography + small system blocks.
 * Inspired by Vanda AI / Stripe / Vercel editorial aesthetic.
 *
 * Layout:
 *  • Full-width big background word: ARCHITECTURE
 *  • Top corners: floating pill badges (Interesting trends / The future)
 *  • Center top: a floating glass card (image/visual)
 *  • Bottom: two-column split — left manifesto + right system intelligence cards
 */
export function ArchitectureSection() {

    const floatingCards = ['Structure', 'Intelligence', 'Leverage'];

    return (
        <section className="relative z-40 bg-white overflow-hidden pb-12 md:pb-16 mt-[-100vh] rounded-t-[2rem] md:rounded-t-[3rem] shadow-[0_-20px_50px_rgba(0,0,0,0.15)]">

            {/* ── TOP HERO: Big text + floating cards ───────────────────── */}
            <div className="relative w-full overflow-hidden px-4 md:px-10 lg:px-16">
                <div className="relative flex items-center justify-center select-none py-28" style={{ minHeight: '20vw' }}>
                    {/* The big bold black text */}
                    <div
                        aria-label="ARCHITECTURE"
                        className="relative z-0 font-medium uppercase text-neutral-950 leading-none whitespace-nowrap pointer-events-none w-full text-center"
                        style={{
                            fontSize: 'clamp(2rem, 11vw, 13.5rem)',
                            fontFamily: '"Outfit", system-ui, sans-serif',
                            letterSpacing: '-0.02em',
                            lineHeight: 0.9,
                        }}
                    >
                        ARCHITECTURE
                    </div>
                </div>

                {/* Concept word tags — moved back OUTSIDE because cards are too small now */}
                <div className="relative z-10 container mx-auto px-4 lg:px-6 max-w-[1300px] -mt-6 md:-mt-10 mb-16 md:mb-20">
                    <div className="flex flex-wrap items-center justify-center gap-2 md:gap-4">
                        {floatingCards.map((word, i) => (
                            <motion.div
                                key={word}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1, duration: 0.5 }}
                                className="px-4 py-1.5 rounded-full border border-neutral-100 bg-white/50 backdrop-blur-sm text-[11px] font-medium text-neutral-500 shadow-sm"
                            >
                                {word}
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            {/* ── Main two-column content ─────────────────────────────── */}
            <div className="relative z-10 container mx-auto px-6 md:px-12 max-w-[1300px]">

                {/* ── Main two-column content ─────────────────────────────── */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">

                    {/* LEFT — Manifesto copy */}
                    <motion.div
                        initial={{ opacity: 0, x: -24 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        {/* Label */}
                        <span
                            className="block text-[10px] font-semibold uppercase tracking-[0.25em] text-neutral-400 mb-6"
                            style={{ fontFamily: '"Outfit", system-ui' }}
                        >
                            The Foundation
                        </span>

                        {/* Manifesto text */}
                        <p
                            className="text-2xl md:text-3xl lg:text-[2.1rem] font-medium leading-[1.3] text-neutral-900 mb-8"
                            style={{ fontFamily: '"Outfit", system-ui', letterSpacing: '-0.01em' }}
                        >
                            Behind every scalable company
                            <br className="hidden md:block" /> is a{' '}
                            <em
                                className="not-italic font-semibold"
                                style={{
                                    background: 'linear-gradient(135deg, #7c3aed, #a78bfa)',
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent',
                                }}
                            >
                                well-designed system.
                            </em>
                        </p>

                        {/* CTA moved under title */}
                        <div className="mb-10">
                            <Link
                                href="/systems"
                                className="inline-flex items-center gap-2 text-base font-semibold text-neutral-900 hover:text-violet-700 transition-colors group"
                            >
                                <ArrowUpRight size={18} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                                Explore the architecture
                            </Link>
                        </div>

                        <p className="text-base text-neutral-500 leading-relaxed mb-10 max-w-md">
                            Mergex architects integrated infrastructures that unify strategy, software,
                            automation, and intelligence transforming disconnected operations into
                            systems designed to grow.
                        </p>

                        {/* Numbered list */}
                        <div className="space-y-4 mb-12">
                            {['Extraordinary clarity', 'Unrivalled resilience', 'Compounding leverage'].map((item, i) => (
                                <div key={item} className="flex items-center gap-4">
                                    <span className="text-sm md:text-base text-neutral-300 font-medium tabular-nums w-8">
                                        {String(i + 1).padStart(2, '0')}
                                    </span>
                                    <span className="text-lg md:text-xl text-neutral-600 font-medium">{item}</span>
                                </div>
                            ))}
                        </div>

                    </motion.div>

                    {/* RIGHT — System intelligence cards */}
                    <motion.div
                        initial={{ opacity: 0, x: 24 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                    >
                        {/* Right header block */}
                        <div className="mb-8 pb-8 border-b border-neutral-100">
                            <span
                                className="block text-[10px] font-semibold uppercase tracking-[0.25em] text-neutral-400 mb-3"
                                style={{ fontFamily: '"Outfit", system-ui' }}
                            >
                                System Intelligence
                            </span>
                            <p className="text-base text-neutral-600 leading-relaxed max-w-md">
                                Mergex architects unified growth systems that help businesses move faster, operate with clarity, and scale with zero friction.
                            </p>

                            {/* About page link button */}
                            <div className="mt-6">
                                <Link
                                    href="/about"
                                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-violet-200 bg-violet-50 text-violet-700 text-xs font-semibold hover:bg-violet-100 hover:border-violet-300 transition-all duration-200 group"
                                >
                                    Engineered for Modern Businesses
                                    <ArrowUpRight size={13} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                                </Link>
                            </div>
                        </div>

                        {/* Animated Beam — tool integration visualization */}
                        <AnimatedBeamMultipleOutputDemo className="-mt-2 md:-mt-4" />
                    </motion.div>

                </div>
            </div>
        </section >
    );
}
