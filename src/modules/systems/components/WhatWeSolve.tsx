'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Playfair_Display } from 'next/font/google';
import Image from 'next/image';

const playfair = Playfair_Display({
    subsets: ['latin'],
    style: ['italic', 'normal'],
    weight: ['400', '500', '600', '700'],
});

/**
 * WhatWeSolve — Editorial bento-grid matching reference image.
 *
 * Desktop layout (via CSS grid-template-areas):
 *  ┌──────────┬──────────────────┐
 *  │  Card 1  │     Card 2       │
 *  │  (tall)  ├─────────┬────────┤
 *  │          │  Card 3 │ Card 4 │
 *  └──────────┴─────────┴────────┘
 */
export function WhatWeSolve() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.12, delayChildren: 0.08 },
        },
    };

    const headerVariants = {
        hidden: { opacity: 0, y: 28 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.75, ease: [0.215, 0.61, 0.355, 1] as any },
        },
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 36, scale: 0.96 },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: { type: 'spring' as const, stiffness: 85, damping: 14, mass: 0.7 },
        },
    };

    return (
        <section className="py-20 md:py-28 bg-white w-full overflow-hidden">
            <motion.div
                className="container mx-auto px-6 md:px-12"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-100px' }}
            >
                {/* ── Section Header ── */}
                <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8 lg:gap-32 mb-14">
                    <motion.div variants={headerVariants} className="max-w-2xl">
                        <motion.span
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2 }}
                            className="inline-block px-3 py-1 bg-gray-100 rounded-full text-[10px] md:text-xs font-medium text-gray-800 mb-6 uppercase tracking-wider"
                        >
                            What is Mergex Systems?
                        </motion.span>
                        <h2
                            className="text-3xl md:text-5xl lg:text-6xl font-bold text-[#1A1A1A] leading-[1.1] tracking-tight"
                            style={{ fontFamily: 'var(--font-manrope)' }}
                        >
                            The Revenue{' '}
                            <span className={`${playfair.className} italic font-normal`}>
                                Architecture
                            </span>{' '}
                            Engine of Mergex.
                        </h2>
                    </motion.div>

                    <motion.div variants={headerVariants} className="max-w-xl flex flex-col gap-6">
                        <p className="text-sm md:text-base text-[#444444] leading-relaxed tracking-[0.002em]">
                            Mergex Systems designs and deploys the full growth infrastructure behind
                            modern businesses — from positioning and automation to scalable software
                            and AI-powered workflows. We don't just build products. We architect
                            structured systems that generate predictable revenue.
                        </p>
                        <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
                            <Link
                                href="/contact"
                                className="inline-flex items-center justify-center px-8 py-3 bg-gradient-to-b from-violet-400 to-violet-900 text-white rounded-xl font-medium shadow-lg shadow-violet-900/20 hover:shadow-violet-900/30 transition-all w-fit"
                            >
                                Book a Strategy Call
                            </Link>
                        </motion.div>
                    </motion.div>
                </div>

                {/* ── Bento Grid ── */}
                {/*
                    DOM order: Card1, Card2, Card3, Card4
                    CSS grid-template-areas approach via inline style
                    (Tailwind doesn't have grid-areas utilities by default)
                */}
                <div
                    className="what-we-solve-grid max-w-7xl mx-auto"
                    style={{
                        display: 'grid',
                        gap: '12px',
                        gridTemplateColumns: '1fr 1fr 1fr',
                        gridTemplateRows: '300px 260px',
                        gridTemplateAreas: `
                            "c1 c2 c2"
                            "c1 c3 c4"
                        `,
                    }}
                >
                    {/* ── Card 1: Tall left – hand holding cube ── */}
                    <motion.div
                        variants={cardVariants}
                        whileHover={{ y: -6, scale: 1.01 }}
                        className="relative rounded-2xl overflow-hidden group cursor-default"
                        style={{ gridArea: 'c1' }}
                    >
                        <Image
                            src="/bento-card1.png"
                            alt="Build in Weeks, Scale for Years"
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                            sizes="(max-width: 768px) 100vw, 33vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-black/10" />

                        <div className="absolute top-5 left-5 text-[11px] font-semibold text-white/55 tracking-[0.15em] uppercase">
                            01/
                        </div>
                        <div className="absolute top-5 right-5 text-[10px] font-medium text-white/45 tracking-[0.12em] uppercase">
                            Speed &amp; Scale
                        </div>

                        <div className="absolute bottom-7 left-6 right-6">
                            <h3 className={`${playfair.className} text-[1.55rem] md:text-[1.9rem] text-white font-normal leading-[1.2] mb-2`}>
                                Build in Weeks.<br />Scale for Years.
                            </h3>
                            <p className="text-[11px] text-white/55 leading-relaxed">
                                Production-ready MVPs in 2–4 weeks, engineered with infrastructure built for long-term growth.
                            </p>
                        </div>
                    </motion.div>

                    {/* ── Card 2: Wide top-right – abstract pink image ── */}
                    <motion.div
                        variants={cardVariants}
                        whileHover={{ y: -6, scale: 1.01 }}
                        className="relative rounded-2xl overflow-hidden group cursor-default"
                        style={{ gridArea: 'c2' }}
                    >
                        <Image
                            src="/bento-card2.png"
                            alt="Where Systems Begin"
                            fill
                            className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                            sizes="(max-width: 768px) 100vw, 66vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-br from-black/20 via-transparent to-black/10" />

                        <div className="absolute top-5 right-5 text-[11px] font-semibold text-white/60 tracking-[0.15em] uppercase">
                            02/
                        </div>

                        <div className="absolute top-5 left-6">
                            <h3
                                className="text-xl md:text-2xl font-semibold text-white leading-tight"
                                style={{ fontFamily: 'var(--font-manrope)' }}
                            >
                                Where Systems Begin
                            </h3>
                        </div>
                    </motion.div>

                    {/* ── Card 3: Bottom-middle dark – body text + CTA ── */}
                    <motion.div
                        variants={cardVariants}
                        whileHover={{
                            y: -6,
                            scale: 1.01,
                            boxShadow: '0 25px 50px -12px rgba(139, 92, 246, 0.22)',
                        }}
                        className="rounded-2xl bg-[#1C1C1E] p-6 flex flex-col justify-between relative overflow-hidden group border border-[#2a2a2c] hover:border-violet-500/40 transition-all duration-300"
                        style={{ gridArea: 'c3' }}
                    >
                        <motion.div
                            animate={{ opacity: [0.08, 0.18, 0.08], scale: [1, 1.08, 1] }}
                            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                            className="absolute inset-0 rounded-2xl pointer-events-none"
                            style={{
                                background:
                                    'radial-gradient(circle at 35% 65%, rgba(139,92,246,0.18) 0%, transparent 70%)',
                            }}
                        />

                        <div className="relative z-10">
                            <div className="flex items-center justify-between mb-4">
                                <span className="text-[9px] font-semibold uppercase tracking-[0.18em] text-gray-500">
                                    In Real Time
                                </span>
                                <span className="text-[9px] font-semibold text-gray-600 tracking-[0.15em]">03/</span>
                            </div>
                            <p className="text-sm text-gray-300 leading-relaxed">
                                From complex workflows to quick automations, trust what your business deploys every single day.
                            </p>
                        </div>

                        <div className="relative z-10">
                            <Link
                                href="/contact"
                                className="inline-flex items-center justify-center px-5 py-2 bg-white text-[#1C1C1E] text-[13px] font-semibold rounded-lg hover:bg-gray-100 transition-colors"
                            >
                                Start with Mergex
                            </Link>
                        </div>
                    </motion.div>

                    {/* ── Card 4: Bottom-right dark – large stat over cinematic image ── */}
                    <motion.div
                        variants={cardVariants}
                        whileHover={{
                            y: -6,
                            scale: 1.01,
                            boxShadow: '0 25px 50px -12px rgba(139, 92, 246, 0.22)',
                        }}
                        className="relative rounded-2xl overflow-hidden group border border-[#2a2a2c] hover:border-violet-500/40 transition-all duration-300"
                        style={{ gridArea: 'c4' }}
                    >
                        <Image
                            src="/bento-card4.png"
                            alt="Track Record"
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                            sizes="(max-width: 768px) 100vw, 33vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-black/15" />

                        <motion.div
                            animate={{ opacity: [0.08, 0.2, 0.08] }}
                            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                            className="absolute inset-0 pointer-events-none"
                            style={{
                                background:
                                    'radial-gradient(circle at 70% 55%, rgba(139,92,246,0.22) 0%, transparent 60%)',
                            }}
                        />

                        <div className="absolute top-5 left-5 text-[9px] font-semibold uppercase tracking-[0.18em] text-white/50">
                            04/
                        </div>
                        <div className="absolute top-5 right-5 text-[9px] font-semibold uppercase tracking-[0.12em] text-white/40">
                            Just Ask
                        </div>

                        <div className="absolute bottom-0 left-0 right-0 p-6">
                            <p
                                className="text-6xl md:text-7xl font-black text-white leading-none tracking-tight"
                                style={{ fontFamily: 'var(--font-manrope)' }}
                            >
                                8+
                            </p>
                            <p className="text-[11px] text-white/50 uppercase tracking-[0.14em] font-medium mt-1">
                                Growth Systems Engineered
                            </p>
                        </div>
                    </motion.div>
                </div>

                {/* Responsive overrides via global style tag */}
                <style
                    // eslint-disable-next-line react/no-danger
                    dangerouslySetInnerHTML={{
                        __html: `
                            @media (max-width: 640px) {
                                .what-we-solve-grid {
                                    grid-template-columns: 1fr !important;
                                    grid-template-rows: 320px 260px 240px 240px !important;
                                    grid-template-areas: "c1" "c2" "c3" "c4" !important;
                                }
                            }
                            @media (min-width: 641px) and (max-width: 1023px) {
                                .what-we-solve-grid {
                                    grid-template-columns: 1fr 1fr !important;
                                    grid-template-rows: 290px 250px !important;
                                    grid-template-areas: "c1 c2" "c3 c4" !important;
                                }
                            }
                        `,
                    }}
                />
            </motion.div>
        </section>
    );
}
