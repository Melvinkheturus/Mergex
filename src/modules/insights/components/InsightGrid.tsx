'use client';

import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { InsightCard } from './InsightCard';
import { CATEGORY_FILTERS, FORMAT_FILTERS, PLACEHOLDER_INSIGHTS } from '../content/insights';

interface Post {
    _id: string;
    title: string;
    slug: { current: string };
    excerpt?: string;
    insightFormat?: string;
    categories?: string[];
    publishedAt?: string;
    tldr?: string;
    author?: { name: string; role?: string };
    readTime?: string;
    featured?: boolean;
}

interface InsightGridProps {
    posts: Post[];
    activeCategory: string;
    onCategoryChange: (category: string) => void;
}

export function InsightGrid({ posts, activeCategory, onCategoryChange }: InsightGridProps) {
    const [activeFormat, setActiveFormat] = useState('all');

    // Use Sanity posts if available, otherwise fall back to placeholders
    const sourcePosts: Post[] = posts.length > 0 ? posts : PLACEHOLDER_INSIGHTS;

    const filtered = useMemo(() => {
        return sourcePosts.filter((post) => {
            const formatMatch =
                activeFormat === 'all' || post.insightFormat === activeFormat;
            const categoryMatch =
                activeCategory === 'All' ||
                post.categories?.some(
                    (c) => c.toLowerCase() === activeCategory.toLowerCase()
                );
            return formatMatch && categoryMatch;
        });
    }, [sourcePosts, activeFormat, activeCategory]);

    return (
        <section className="py-8 pb-20">
            <div className="max-w-7xl mx-auto px-6 md:px-10">
                {/* Section header */}
                <div className="flex items-center gap-3 mb-8">
                    <span className="text-xs font-semibold text-gray-400 uppercase tracking-[0.2em]">
                        All Insights
                    </span>
                    <div className="flex-1 h-px bg-gray-100" />
                </div>

                {/* Category filter pills */}
                <div className="flex flex-wrap gap-2 mb-6">
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
                </div>

                {/* Format filter tabs */}
                <div className="flex flex-wrap gap-2 mb-10">
                    {FORMAT_FILTERS.map((filter) => {
                        const isActive = activeFormat === filter.value;
                        return (
                            <button
                                key={filter.value}
                                onClick={() => setActiveFormat(filter.value)}
                                className={`px-4 py-1.5 rounded-full text-sm font-semibold border transition-all duration-200 cursor-pointer ${isActive
                                    ? 'bg-violet-600 text-white border-violet-600'
                                    : 'bg-white text-gray-500 border-gray-200 hover:border-violet-300 hover:text-violet-600'
                                    }`}
                            >
                                {filter.label}
                            </button>
                        );
                    })}
                </div>

                {/* Grid */}
                <AnimatePresence mode="popLayout">
                    {filtered.length > 0 ? (
                        <motion.div
                            key="grid"
                            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
                        >
                            {filtered.map((post, i) => (
                                <motion.div
                                    key={post._id}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, scale: 0.96 }}
                                    transition={{ duration: 0.35, delay: i * 0.04 }}
                                >
                                    <InsightCard {...post} />
                                </motion.div>
                            ))}
                        </motion.div>
                    ) : (
                        <motion.div
                            key="empty"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="text-center py-20"
                        >
                            <p className="text-4xl mb-4">✦</p>
                            <p className="text-gray-500 text-lg font-medium">
                                No insights in this category yet.
                            </p>
                            <p className="text-gray-400 text-sm mt-2">
                                Check back — we&apos;re writing.
                            </p>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Placeholder watermark if using placeholder data */}
                {posts.length === 0 && (
                    <p className="text-center text-xs text-gray-300 mt-10">
                        Preview content · Connect Sanity to display live insights
                    </p>
                )}
            </div>
        </section>
    );
}
