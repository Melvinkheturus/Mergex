'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowUpRight, ArrowRight } from 'lucide-react';

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
    const systemCards = [
        {
            number: '01',
            title: 'Business Architecture',
            description: 'Designing the structural systems that align operations, strategy, and execution.',
        },
        {
            number: '02',
            title: 'AI & Automation',
            description: 'Embedding intelligence into workflows to reduce friction and amplify productivity.',
        },
        {
            number: '03',
            title: 'Scalable Infrastructure',
            description: 'Building platforms and systems designed to evolve as businesses grow.',
        },
    ];

    const floatingCards = ['Structure', 'Intelligence', 'Leverage'];

    return (
        <section className="relative bg-white overflow-hidden pb-28 md:pb-36">

            {/* ── TOP HERO: Big text + floating cards ───────────────────── */}
            <div className="relative w-full overflow-hidden px-10 md:px-16">
                {/* BIG TEXT + OVERLAPPING CARDS container */}
                <div className="relative flex items-center justify-center select-none py-28" style={{ minHeight: '20vw' }}>
                    {/* The big bold black text */}
                    <div
                        aria-label="ARCHITECTURE"
                        className="relative z-0 font-medium uppercase text-neutral-950 leading-none whitespace-nowrap pointer-events-none w-full text-center"
                        style={{
                            fontSize: 'clamp(4rem, 12.5vw, 13.5rem)',
                            fontFamily: '"Outfit", system-ui, sans-serif',
                            letterSpacing: '-0.02em',
                            lineHeight: 0.9,
                        }}
                    >
                        ARCHITECTURE
                    </div>

                    {/* 3 overlapping cards — slightly increased size and reduced roundness */}
                    <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none">
                        <div className="relative" style={{ width: '135px', height: '160px' }}>

                            {/* Card 1 — micro back left */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.5, rotate: -20, y: 10 }}
                                whileInView={{ opacity: 1, scale: 1, rotate: -18, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
                                className="absolute rounded-md overflow-hidden shadow-md border border-white/40"
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    top: '0',
                                    left: '-50%',
                                    background: 'linear-gradient(145deg, #e5deff 0%, #c4b5fd 60%, #a78bfa 100%)',
                                }}
                            />

                            {/* Card 2 — micro back right */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.5, rotate: 18, y: 10 }}
                                whileInView={{ opacity: 1, scale: 1, rotate: 15, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.05, ease: 'easeOut' }}
                                className="absolute rounded-md overflow-hidden shadow-md border border-white/30"
                                style={{
                                    width: '95%',
                                    height: '95%',
                                    top: '5%',
                                    right: '-45%',
                                    background: 'linear-gradient(145deg, #ede9fe 0%, #ddd6fe 50%, #c4b5fd 100%)',
                                }}
                            />

                            {/* Card 3 — micro front center */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.6, y: 15 }}
                                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, ease: 'easeOut' }}
                                className="absolute rounded-lg overflow-hidden shadow-lg border border-white/50"
                                style={{
                                    width: '105%',
                                    height: '110%',
                                    top: '-5%',
                                    left: '-2.5%',
                                    background: 'linear-gradient(160deg, #f5f0ff 0%, #ddd6fe 35%, #a78bfa 80%, #7c3aed 100%)',
                                }}
                            >
                                {/* Micro dots instead of labels */}
                                <div className="absolute inset-0 flex flex-col items-center justify-center gap-1 opacity-20">
                                    <div className="w-4 h-4 rounded-full bg-white/40 blur-[2px]" />
                                    <div className="w-10 h-0.5 rounded-full bg-white/20" />
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>

                {/* Concept word tags — moved back OUTSIDE because cards are too small now */}
                <div className="relative z-10 container mx-auto px-6 max-w-[1300px] -mt-10 mb-20">
                    <div className="flex justify-center gap-4">
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

                        <p className="text-base text-neutral-500 leading-relaxed mb-10 max-w-md">
                            Mergex architects integrated infrastructures that unify strategy, software,
                            automation, and intelligence — transforming fragmented operations into
                            systems designed to grow.
                        </p>

                        {/* Numbered list */}
                        <div className="space-y-3 mb-10">
                            {['Extraordinary clarity', 'Unrivalled resilience', 'Compounding leverage'].map((item, i) => (
                                <div key={item} className="flex items-center gap-4">
                                    <span className="text-[11px] text-neutral-300 font-medium tabular-nums w-6">
                                        {String(i + 1).padStart(2, '0')}
                                    </span>
                                    <span className="text-sm text-neutral-600 font-medium">{item}</span>
                                </div>
                            ))}
                        </div>

                        {/* CTA */}
                        <Link
                            href="/systems"
                            className="inline-flex items-center gap-2 text-sm font-semibold text-neutral-900 hover:text-violet-700 transition-colors group"
                        >
                            <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                            Explore the architecture
                        </Link>
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
                                Mergex integrates strategy, AI, automation, and software architecture
                                into a unified operational layer — enabling businesses to move faster,
                                operate smarter, and scale without friction.
                            </p>

                            {/* Customer social proof row */}
                            <div className="flex items-center gap-3 mt-6">
                                <div className="flex -space-x-2">
                                    {['#a78bfa', '#7c3aed', '#ddd6fe', '#c4b5fd'].map((color, i) => (
                                        <div
                                            key={i}
                                            className="w-8 h-8 rounded-full border-2 border-white"
                                            style={{ background: color }}
                                        />
                                    ))}
                                    <div className="w-8 h-8 rounded-full border-2 border-white bg-neutral-100 flex items-center justify-center">
                                        <span className="text-[9px] font-bold text-neutral-500">+</span>
                                    </div>
                                </div>
                                <span className="text-xs text-neutral-500 font-medium">Built for Modern Businesses</span>
                            </div>
                        </div>

                        {/* System capability cards */}
                        <div className="space-y-4">
                            {systemCards.map((card, i) => (
                                <motion.div
                                    key={card.title}
                                    initial={{ opacity: 0, y: 16 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.15 + i * 0.08 }}
                                    className="group flex gap-5 p-5 rounded-2xl border border-neutral-100 bg-white hover:border-violet-200 hover:shadow-md hover:shadow-violet-50 transition-all duration-300 cursor-default"
                                >
                                    {/* Number */}
                                    <span
                                        className="text-xs text-neutral-300 font-medium tabular-nums mt-0.5 w-5 flex-shrink-0"
                                        style={{ fontFamily: '"Outfit", system-ui' }}
                                    >
                                        {card.number}
                                    </span>
                                    <div className="flex-1 min-w-0">
                                        <div className="flex items-center justify-between mb-1">
                                            <h3 className="text-sm font-semibold text-neutral-900 group-hover:text-violet-800 transition-colors">
                                                {card.title}
                                            </h3>
                                            <ArrowRight
                                                size={12}
                                                className="text-neutral-300 group-hover:text-violet-400 group-hover:translate-x-0.5 transition-all flex-shrink-0 ml-2"
                                            />
                                        </div>
                                        <p className="text-xs text-neutral-500 leading-relaxed">
                                            {card.description}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                </div>
            </div>
        </section >
    );
}
