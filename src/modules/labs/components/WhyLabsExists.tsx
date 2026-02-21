'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { WHY_LABS_EXISTS } from '../content/labs';

// Each statement gets a distinct accent color
const ACCENT_COLORS = [
    { border: '#7C3AED', glow: 'rgba(124,58,237,0.12)', tag: 'bg-violet-100 text-violet-700' },
    { border: '#EC4899', glow: 'rgba(236,72,153,0.12)', tag: 'bg-pink-100 text-pink-700' },
    { border: '#0EA5E9', glow: 'rgba(14,165,233,0.12)', tag: 'bg-sky-100 text-sky-700' },
];

const TAGS = ['Philosophy', 'Approach', 'Vision'];

const containerVariants = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.18 },
    },
};

const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
    },
};

/**
 * WhyLabsExists — Modern white-bg redesign
 *
 * Three animated philosophy cards with colored accents, a bold headline,
 * and a closing gradient statement. Scroll-driven parallax on the headline.
 */
export function WhyLabsExists() {
    const sectionRef = useRef<HTMLElement>(null);

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ['start end', 'center center'],
    });

    const headlineY = useTransform(scrollYProgress, [0, 1], [30, 0]);
    const headlineOpacity = useTransform(scrollYProgress, [0, 0.4], [0, 1]);

    return (
        <section
            ref={sectionRef}
            className="relative py-24 md:py-36 bg-white overflow-hidden"
        >

            <div className="container mx-auto px-6 md:px-12 relative z-10">
                {/* Section Label */}
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="flex items-center gap-3 mb-8 justify-center"
                >
                    <span className="h-px w-12 bg-violet-400" />
                    <span className="text-sm font-semibold tracking-widest text-violet-600 uppercase">
                        Our Philosophy
                    </span>
                    <span className="h-px w-12 bg-violet-400" />
                </motion.div>

                {/* Headline */}
                <motion.h2
                    style={{
                        y: headlineY,
                        opacity: headlineOpacity,
                        fontFamily: 'var(--font-manrope)',
                        letterSpacing: '-0.03em',
                    }}
                    className="text-4xl md:text-5xl lg:text-6xl font-bold text-center text-gray-900 mb-20 leading-[1.1]"
                >
                    {WHY_LABS_EXISTS.headline}
                </motion.h2>

                {/* Statement Cards */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-80px' }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20"
                >
                    {WHY_LABS_EXISTS.statements.map((statement, index) => {
                        const accent = ACCENT_COLORS[index];
                        return (
                            <motion.div
                                key={index}
                                variants={cardVariants}
                                whileHover={{ y: -6, transition: { duration: 0.25 } }}
                                className="group relative rounded-2xl p-8 bg-white border border-gray-100 cursor-default"
                                style={{
                                    boxShadow: `0 4px 24px rgba(0,0,0,0.06), 0 0 0 1px rgba(0,0,0,0.04)`,
                                    transition: 'box-shadow 0.3s ease',
                                }}
                                onMouseEnter={(e) => {
                                    (e.currentTarget as HTMLElement).style.boxShadow = `0 12px 40px ${accent.glow}, 0 0 0 1.5px ${accent.border}30`;
                                }}
                                onMouseLeave={(e) => {
                                    (e.currentTarget as HTMLElement).style.boxShadow = `0 4px 24px rgba(0,0,0,0.06), 0 0 0 1px rgba(0,0,0,0.04)`;
                                }}
                            >
                                {/* Top accent bar */}
                                <div
                                    className="absolute top-0 left-8 right-8 h-[3px] rounded-b-full"
                                    style={{ background: accent.border }}
                                />

                                {/* Tag */}
                                <span className={`inline-block text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full mb-6 ${accent.tag}`}>
                                    {TAGS[index]}
                                </span>

                                {/* Index number */}
                                <div
                                    className="text-7xl font-black leading-none mb-4 select-none"
                                    style={{ color: `${accent.border}18`, fontFamily: 'var(--font-manrope)' }}
                                >
                                    0{index + 1}
                                </div>

                                {/* Statement text */}
                                <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                                    {statement.text}
                                </p>

                                {/* Emphasis highlight */}
                                {statement.emphasis && (
                                    <div
                                        className="mt-6 pt-5 border-t border-gray-100 text-sm font-semibold"
                                        style={{ color: accent.border }}
                                    >
                                        ↗ {statement.emphasis}
                                    </div>
                                )}
                            </motion.div>
                        );
                    })}
                </motion.div>

                {/* Closing Line */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.96 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                    className="relative max-w-3xl mx-auto text-center"
                >
                    {/* Decorative quote mark */}
                    <div
                        className="text-[120px] leading-none font-black select-none absolute -top-10 left-1/2 -translate-x-1/2 pointer-events-none"
                        style={{ color: 'rgba(124,58,237,0.06)', fontFamily: 'Georgia, serif' }}
                    >
                        "
                    </div>

                    <p
                        className="relative text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-snug"
                        style={{ fontFamily: 'var(--font-manrope)', letterSpacing: '-0.02em' }}
                    >
                        {WHY_LABS_EXISTS.closingLine.split('10x').map((part, i) =>
                            i === 0 ? (
                                <span key={i}>{part}</span>
                            ) : (
                                <span key={i}>
                                    <span
                                        className="relative inline-block"
                                        style={{
                                            background: 'linear-gradient(135deg, #7C3AED 0%, #EC4899 100%)',
                                            WebkitBackgroundClip: 'text',
                                            WebkitTextFillColor: 'transparent',
                                        }}
                                    >
                                        10x
                                    </span>
                                    {part}
                                </span>
                            )
                        )}
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
