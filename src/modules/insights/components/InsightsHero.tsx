'use client';

import { motion } from 'framer-motion';
import { INSIGHTS_HERO, CATEGORY_FILTERS } from '../content/insights';

interface InsightsHeroProps {
    activeCategory: string;
    onCategoryChange: (category: string) => void;
}

export function InsightsHero({ activeCategory, onCategoryChange }: InsightsHeroProps) {
    return (
        <section className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28">
            {/* Purple top gradient — user requested */}
            <div
                className="pointer-events-none absolute inset-x-0 top-0 h-[520px] z-0"
                style={{
                    background:
                        'radial-gradient(ellipse 80% 60% at 50% -10%, rgba(139, 92, 246, 0.22) 0%, rgba(196, 181, 253, 0.10) 40%, transparent 75%)',
                }}
            />

            {/* Subtle grid lines */}
            <div
                className="pointer-events-none absolute inset-0 z-0 opacity-[0.03]"
                style={{
                    backgroundImage:
                        'linear-gradient(rgba(139,92,246,1) 1px, transparent 1px), linear-gradient(90deg, rgba(139,92,246,1) 1px, transparent 1px)',
                    backgroundSize: '60px 60px',
                }}
            />

            <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10">
                {/* Eyebrow */}
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="flex items-center gap-3 mb-8"
                >
                    <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-violet-200 bg-violet-50 text-violet-700 text-xs font-semibold tracking-[0.15em] uppercase">
                        <span className="w-1.5 h-1.5 rounded-full bg-violet-500 animate-pulse" />
                        {INSIGHTS_HERO.eyebrow}
                    </span>
                </motion.div>

                {/* Headline */}
                <motion.h1
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.08 }}
                    className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight leading-[1.05] text-gray-950 mb-6 font-display max-w-4xl"
                >
                    {INSIGHTS_HERO.headline.split('\n').map((line, i) => (
                        <span key={i} className={i === 1 ? 'block text-gradient' : 'block'}>
                            {line}
                        </span>
                    ))}
                </motion.h1>

                {/* Subtext */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.16 }}
                    className="text-lg md:text-xl text-gray-500 max-w-2xl leading-relaxed mb-4"
                >
                    {INSIGHTS_HERO.subtext}
                </motion.p>

                {/* Micro-line */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="text-sm text-gray-400 font-mono tracking-wide mb-14"
                    style={{ fontFamily: "'JetBrains Mono', monospace" }}
                >
                    // {INSIGHTS_HERO.microLine}
                </motion.p>

                {/* Category Filter Pills */}
                <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.38 }}
                    className="flex flex-wrap gap-2"
                >
                    {CATEGORY_FILTERS.map((cat) => {
                        const isActive = activeCategory === cat;
                        return (
                            <button
                                key={cat}
                                onClick={() => onCategoryChange(cat)}
                                className={`px-4 py-2 rounded-full text-sm font-semibold border transition-all duration-200 cursor-pointer ${isActive
                                        ? 'bg-gray-950 text-white border-gray-950 shadow-md'
                                        : 'bg-white/70 text-gray-600 border-gray-200 hover:border-violet-300 hover:text-violet-700 hover:bg-violet-50'
                                    }`}
                            >
                                {cat}
                            </button>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
}
