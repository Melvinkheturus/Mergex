'use client';

import { motion } from 'framer-motion';
import { WHAT_WE_SOLVE } from '../content/systems';
import Link from 'next/link';
import { Playfair_Display } from 'next/font/google';

const playfair = Playfair_Display({
    subsets: ['latin'],
    style: ['italic', 'normal'],
    weight: ['400', '500', '600', '700'],
});

/**
 * WhatWeSolve - Hero-style section with proof cards
 * 4-card bento grid: 2nd card is dark, others are light.
 * Uses serif (Playfair Display) typography with italic accents.
 */
export function WhatWeSolve() {
    // --- Animation Variants ---
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.1,
            },
        },
    };

    const headerItemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: [0.215, 0.61, 0.355, 1] as any,
            },
        },
    };

    const cardVariants = {
        hidden: {
            opacity: 0,
            y: 50,
            scale: 0.9,
            rotateX: 15
        },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            rotateX: 0,
            transition: {
                type: 'spring' as const,
                stiffness: 80,
                damping: 12,
                mass: 0.8,
            },
        },
    };

    return (
        <section className="py-20 md:py-28 bg-white w-full overflow-hidden">
            <motion.div
                className="container mx-auto px-6 md:px-12"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
            >
                {/* Hero Header */}
                <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end lg:gap-32 gap-8 mb-14">
                    {/* Left: Headline */}
                    <motion.div
                        variants={headerItemVariants}
                        className="max-w-2xl lg:-translate-x-6"
                    >
                        <motion.span
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2 }}
                            className="inline-block px-3 py-1 bg-gray-100 rounded-full text-[10px] md:text-xs font-medium text-gray-800 mb-6 uppercase tracking-wider"
                        >
                            What is Mergex Systems?
                        </motion.span>
                        <h2
                            className="text-4xl md:text-6xl lg:text-7xl font-bold text-[#1A1A1A] leading-[1.1]"
                            style={{ fontFamily: 'var(--font-manrope)' }}
                        >
                            <span className="font-clash">The Revenue</span> <span className={`${playfair.className} italic font-normal`}>Architecture</span> <span className="font-clash">Engine of Mergex.</span>
                        </h2>
                    </motion.div>

                    {/* Right: Subheadline + CTA */}
                    <motion.div
                        variants={headerItemVariants}
                        className="max-w-4xl flex flex-col gap-6 lg:translate-x-6"
                    >
                        <div className="text-sm md:text-base text-[#444444] leading-relaxed max-w-4xl tracking-[0.002em]">
                            <p>{WHAT_WE_SOLVE.subheadline}</p>
                        </div>
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            <Link
                                href="/contact"
                                className="inline-flex items-center justify-center px-8 py-3 bg-gradient-to-b from-violet-400 to-violet-900 text-white rounded-xl font-medium shadow-lg shadow-violet-900/20 hover:shadow-violet-900/30 transition-all w-fit"
                            >
                                {WHAT_WE_SOLVE.primaryCTA}
                            </Link>
                        </motion.div>
                    </motion.div>
                </div>

                {/* 4-Card Bento Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-7xl mx-auto" style={{ perspective: '1000px' }}>
                    {WHAT_WE_SOLVE.proofCards.map((card, index) => {
                        const isDark = card.dark;

                        return (
                            <motion.div
                                key={index}
                                variants={cardVariants}
                                whileHover={{
                                    y: -8,
                                    scale: 1.02,
                                    boxShadow: isDark
                                        ? "0 25px 50px -12px rgba(139, 92, 246, 0.2)"
                                        : "0 20px 40px -12px rgba(0, 0, 0, 0.08)"
                                }}
                                className={[
                                    'rounded-2xl p-7 flex flex-col justify-between min-h-[260px] relative overflow-hidden group transition-all duration-300',
                                    isDark
                                        ? 'bg-[#1C1C1E] text-white border border-[#2a2a2c] hover:border-violet-500/50'
                                        : 'bg-[#F9F9FB] text-[#1A1A1A] border border-gray-100/50',
                                ].join(' ')}
                            >
                                {/* Top section: label */}
                                <div
                                    className={[
                                        'text-[9px] font-semibold uppercase tracking-[0.18em] mb-4',
                                        isDark ? 'text-gray-500' : 'text-gray-400',
                                    ].join(' ')}
                                >
                                    {card.label}
                                </div>

                                {/* Middle: main value */}
                                <div className="flex-1 flex flex-col justify-center gap-1">
                                    {'valueAccent' in card ? (
                                        /* Dark statement card (2nd card) */
                                        <>
                                            <p
                                                className={`${playfair.className} text-2xl md:text-3xl font-400 leading-snug`}
                                                style={{ fontStyle: 'normal' }}
                                            >
                                                {card.value}
                                            </p>
                                            <p
                                                className={`${playfair.className} text-2xl md:text-3xl font-700 italic leading-snug text-violet-300`}
                                            >
                                                {card.valueAccent}
                                            </p>
                                        </>
                                    ) : (
                                        /* Regular metric cards */
                                        <p
                                            className={[
                                                `${playfair.className} text-xl md:text-2xl font-600 leading-snug`,
                                                isDark ? 'text-white italic' : 'text-[#1A1A1A]',
                                            ].join(' ')}
                                        >
                                            {card.value}
                                        </p>
                                    )}
                                </div>

                                {/* Bottom: description */}
                                <p
                                    className={[
                                        'text-xs leading-relaxed mt-5',
                                        isDark ? 'text-gray-400' : 'text-[#666666]',
                                    ].join(' ')}
                                >
                                    {card.description}
                                </p>

                                {/* Subtle inner glow for dark card */}
                                {isDark && (
                                    <motion.div
                                        animate={{
                                            opacity: [0.1, 0.2, 0.1],
                                            scale: [1, 1.1, 1]
                                        }}
                                        transition={{
                                            duration: 4,
                                            repeat: Infinity,
                                            ease: "easeInOut"
                                        }}
                                        className="absolute inset-0 rounded-2xl pointer-events-none"
                                        style={{
                                            background: 'radial-gradient(circle at 50% 50%, rgba(139,92,246,0.15) 0%, transparent 70%)',
                                        }}
                                    />
                                )}
                            </motion.div>
                        );
                    })}
                </div>
            </motion.div>
        </section>
    );
}
