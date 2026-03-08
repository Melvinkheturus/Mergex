'use client';

import { motion } from 'framer-motion';
import { PROBLEM_FRAGMENTATION } from '../content';
import Image from 'next/image';
import Link from 'next/link';
import { Playfair_Display } from 'next/font/google';

const playfair = Playfair_Display({
    subsets: ['latin'],
    style: ['italic', 'normal'],
    weight: ['400', '500', '600', '700'],
});

/**
 * ProblemFragmentation — Editorial bento-grid layout
 *
 * Desktop (CSS grid-template-areas):
 *  ┌──────────┬──────────────────┐
 *  │  Card 1  │     Card 2       │
 *  │  (tall)  ├─────────┬────────┤
 *  │          │  Card 3 │ Card 4 │
 *  └──────────┴─────────┴────────┘
 */
export function ProblemFragmentation() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1, delayChildren: 0.05 },
        },
    };

    const headerItemVariants = {
        hidden: { opacity: 0, y: 24 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.7, ease: [0.215, 0.61, 0.355, 1] as any },
        },
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 36, scale: 0.96 },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: { type: 'spring' as const, stiffness: 80, damping: 13 },
        },
    };

    return (
        <section className="relative z-40 pt-12 md:pt-16 pb-24 md:pb-32 bg-white overflow-hidden">
            <motion.div
                className="container mx-auto px-6 md:px-12"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-80px' }}
            >
                {/* ── Header ── */}
                <div className="mb-14">
                    <motion.span
                        variants={headerItemVariants}
                        className="text-neutral-500 font-semibold tracking-wide uppercase text-sm mb-6 block"
                    >
                        The Friction
                    </motion.span>

                    <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-start">
                        <motion.h2
                            variants={headerItemVariants}
                            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-neutral-900 leading-[1.1] lg:w-1/2 flex-shrink-0"
                            style={{ fontFamily: 'var(--font-manrope)' }}
                        >
                            {PROBLEM_FRAGMENTATION.headline}
                        </motion.h2>
                        <motion.p
                            variants={headerItemVariants}
                            className="text-lg md:text-xl text-neutral-500 leading-relaxed font-light lg:w-1/2 lg:pt-2"
                        >
                            {PROBLEM_FRAGMENTATION.subheadline}
                        </motion.p>
                    </div>
                </div>

                {/* ── Bento Grid ── */}
                <div
                    className="problem-frag-grid max-w-7xl mx-auto"
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
                    {/* ── Card 1: Tall left – fragmented shards image ── */}
                    <motion.div
                        variants={cardVariants}
                        whileHover={{ y: -6, scale: 1.01 }}
                        className="relative rounded-2xl overflow-hidden group cursor-default"
                        style={{ gridArea: 'c1' }}
                    >
                        <Image
                            src="/mockups/common/bento-card2.png"
                            alt={PROBLEM_FRAGMENTATION.problems[0].title}
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                            sizes="(max-width: 768px) 100vw, 33vw"
                        />
                        {/* Bottom-heavy gradient */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/82 via-black/20 to-black/8" />

                        {/* Number – top left */}
                        <div className="absolute top-5 left-5 text-[11px] font-semibold text-white/55 tracking-[0.15em] uppercase">
                            01/
                        </div>
                        {/* Category – top right */}
                        <div className="absolute top-5 right-5 text-[10px] font-medium text-white/45 tracking-[0.12em] uppercase">
                            Found in Friction
                        </div>

                        {/* Text – bottom */}
                        <div className="absolute bottom-7 left-6 right-6">
                            <h3 className={`${playfair.className} text-[1.55rem] md:text-[1.9rem] text-white font-normal leading-[1.2] mb-2`}>
                                {PROBLEM_FRAGMENTATION.problems[0].title}
                            </h3>
                            <p className="text-[11px] text-white/55 leading-relaxed">
                                {PROBLEM_FRAGMENTATION.problems[0].description}
                            </p>
                        </div>
                    </motion.div>

                    {/* ── Card 2: Wide top-right – abstract fluid image ── */}
                    <motion.div
                        variants={cardVariants}
                        whileHover={{ y: -6, scale: 1.01 }}
                        className="relative rounded-2xl overflow-hidden group cursor-default"
                        style={{ gridArea: 'c2' }}
                    >
                        <Image
                            src="/mockups/common/Disconnected tools.jpeg"
                            alt={PROBLEM_FRAGMENTATION.problems[1].title}
                            fill
                            className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                            sizes="(max-width: 768px) 100vw, 66vw"
                        />
                        {/* Subtle top gradient for text legibility */}
                        <div className="absolute inset-0 bg-gradient-to-br from-black/25 via-transparent to-black/10" />

                        {/* Number – top right */}
                        <div className="absolute top-5 right-5 text-[11px] font-semibold text-white/60 tracking-[0.15em] uppercase">
                            02/
                        </div>

                        {/* Title – top left */}
                        <div className="absolute top-5 left-6">
                            <h3
                                className="text-xl md:text-2xl font-semibold text-white leading-tight"
                                style={{ fontFamily: 'var(--font-manrope)' }}
                            >
                                {PROBLEM_FRAGMENTATION.problems[1].title}
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
                        {/* Ambient glow */}
                        <motion.div
                            animate={{ opacity: [0.08, 0.18, 0.08], scale: [1, 1.08, 1] }}
                            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                            className="absolute inset-0 rounded-2xl pointer-events-none"
                            style={{
                                background: 'radial-gradient(circle at 35% 65%, rgba(139,92,246,0.18) 0%, transparent 70%)',
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
                                {PROBLEM_FRAGMENTATION.problems[2].description}
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
                            src="/mockups/common/frag-card4.png"
                            alt={PROBLEM_FRAGMENTATION.problems[3].title}
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                            sizes="(max-width: 768px) 100vw, 33vw"
                        />
                        {/* Dark overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-black/15" />

                        {/* Purple ambient glow */}
                        <motion.div
                            animate={{ opacity: [0.08, 0.2, 0.08] }}
                            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                            className="absolute inset-0 pointer-events-none"
                            style={{
                                background: 'radial-gradient(circle at 70% 55%, rgba(139,92,246,0.22) 0%, transparent 60%)',
                            }}
                        />

                        {/* Labels */}
                        <div className="absolute top-5 left-5 text-[9px] font-semibold uppercase tracking-[0.18em] text-white/50">
                            04/
                        </div>
                        <div className="absolute top-5 right-5 text-[9px] font-semibold uppercase tracking-[0.12em] text-white/40">
                            Just Ask
                        </div>

                        {/* Large stat */}
                        <div className="absolute bottom-0 left-0 right-0 p-6">
                            <p
                                className="text-6xl md:text-7xl font-black text-white leading-none tracking-tight"
                                style={{ fontFamily: 'var(--font-manrope)' }}
                            >
                                93%
                            </p>
                            <p className="text-[11px] text-white/50 uppercase tracking-[0.14em] font-medium mt-1">
                                {PROBLEM_FRAGMENTATION.problems[3].title}
                            </p>
                        </div>
                    </motion.div>
                </div>

                {/* Responsive CSS overrides */}
                <style
                    dangerouslySetInnerHTML={{
                        __html: `
                            @media (max-width: 640px) {
                                .problem-frag-grid {
                                    grid-template-columns: 1fr !important;
                                    grid-template-rows: 320px 260px 240px 240px !important;
                                    grid-template-areas: "c1" "c2" "c3" "c4" !important;
                                }
                            }
                            @media (min-width: 641px) and (max-width: 1023px) {
                                .problem-frag-grid {
                                    grid-template-columns: 1fr 1fr !important;
                                    grid-template-rows: 290px 250px !important;
                                    grid-template-areas: "c1 c2" "c3 c4" !important;
                                }
                            }
                        `,
                    }}
                />

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-20 text-center max-w-3xl mx-auto"
                >
                    <p className={`text-2xl md:text-3xl font-medium text-neutral-900 leading-relaxed italic ${playfair.className}`}>
                        {PROBLEM_FRAGMENTATION.closingStatement}
                    </p>
                </motion.div>
            </motion.div>
        </section>
    );
}
