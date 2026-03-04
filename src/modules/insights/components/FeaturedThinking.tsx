'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { FEATURED_THINKING, FORMAT_META } from '../content/insights';

const CORNER_COLORS: Record<string, string> = {
    purple: 'from-violet-500/20 to-transparent',
    blue: 'from-sky-500/20 to-transparent',
    green: 'from-emerald-500/20 to-transparent',
};

const BORDER_COLORS: Record<string, string> = {
    purple: 'hover:border-violet-300',
    blue: 'hover:border-sky-300',
    green: 'hover:border-emerald-300',
};

const ICON_COLORS: Record<string, string> = {
    purple: 'text-violet-500',
    blue: 'text-sky-500',
    green: 'text-emerald-500',
};

export function FeaturedThinking() {
    return (
        <section className="py-16 md:py-20">
            <div className="max-w-7xl mx-auto px-6 md:px-10">
                {/* Section Header */}
                <div className="flex items-center gap-3 mb-10">
                    <span className="text-xs font-semibold text-gray-400 uppercase tracking-[0.2em]">
                        Featured Thinking
                    </span>
                    <div className="flex-1 h-px bg-gray-100" />
                </div>

                {/* Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                    {FEATURED_THINKING.map((item, i) => {
                        const fmt = FORMAT_META[item.format];
                        return (
                            <motion.div
                                key={item.id}
                                initial={{ opacity: 0, y: 24 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                            >
                                <Link href={`/blog/${item.id}`} className="block group h-full">
                                    <div className={`relative h-full bg-white border border-gray-100 rounded-2xl p-7 flex flex-col gap-5 overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${BORDER_COLORS[item.color]}`}>

                                        {/* Background gradient */}
                                        <div
                                            className={`absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl ${CORNER_COLORS[item.color]} rounded-bl-full pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                                        />

                                        {/* Number + format */}
                                        <div className="flex items-center justify-between">
                                            <span className={`text-3xl font-black ${ICON_COLORS[item.color]} opacity-20`}>
                                                0{i + 1}
                                            </span>
                                            {fmt && (
                                                <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-semibold border ${fmt.color} ${fmt.bg} ${fmt.border}`}>
                                                    {fmt.label}
                                                </span>
                                            )}
                                        </div>

                                        {/* Title */}
                                        <h3 className="text-xl font-bold text-gray-900 leading-snug group-hover:text-violet-700 transition-colors duration-200 flex-1">
                                            {item.title}
                                        </h3>

                                        {/* Description */}
                                        <p className="text-sm text-gray-500 leading-relaxed">
                                            {item.description}
                                        </p>

                                        {/* Read arrow */}
                                        <div className="flex items-center gap-2 text-sm font-semibold text-gray-400 group-hover:text-violet-600 transition-colors duration-200">
                                            <span>Read insight</span>
                                            <span className="transform group-hover:translate-x-1 transition-transform duration-200">→</span>
                                        </div>
                                    </div>
                                </Link>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
