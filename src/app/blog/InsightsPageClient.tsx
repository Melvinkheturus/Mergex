'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { InsightGrid, FeaturedThinking, QuickTakes, InsightsCTA, AskMergex } from '@/modules/insights';
import { cn } from '@/lib/utils';
import { Sparkles, BookOpen } from 'lucide-react';

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
    featured?: boolean;
}

interface InsightsPageClientProps {
    posts: Post[];
    children?: React.ReactNode;
}

export default function InsightsPageClient({ posts, children }: InsightsPageClientProps) {
    const [activeTab, setActiveTab] = useState<'chat' | 'insights'>('chat');
    // State for the InsightGrid categories (moved here from Hero)
    const [activeCategory, setActiveCategory] = useState('All');

    return (
        <div className="min-h-screen bg-white">
            {/* Simple Centered Hero */}
            <section className="pt-32 pb-8 md:pt-40 md:pb-12 text-center relative z-10">
                <h1
                    className="text-4xl md:text-5xl lg:text-6xl font-normal text-gray-950 px-4"
                    style={{ fontFamily: 'var(--font-playfair)' }}
                >
                    Mergex Intelligence
                </h1>

                {/* Tabs */}
                <div className="mt-12 flex items-center justify-center gap-2 px-4">
                    <button
                        onClick={() => setActiveTab('chat')}
                        className={cn(
                            "group flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300",
                            activeTab === 'chat'
                                ? "bg-violet-600 text-white shadow-lg shadow-violet-200"
                                : "bg-gray-50 text-gray-500 hover:bg-gray-100 hover:text-gray-900"
                        )}
                    >
                        <Sparkles className={cn("w-4 h-4", activeTab === 'chat' ? "text-violet-200" : "text-gray-400 group-hover:text-violet-600")} />
                        Ask Mergex
                    </button>
                    <button
                        onClick={() => setActiveTab('insights')}
                        className={cn(
                            "group flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300",
                            activeTab === 'insights'
                                ? "bg-gray-950 text-white shadow-lg shadow-gray-200/50"
                                : "bg-gray-50 text-gray-500 hover:bg-gray-100 hover:text-gray-900"
                        )}
                    >
                        <BookOpen className={cn("w-4 h-4", activeTab === 'insights' ? "text-gray-300" : "text-gray-400 group-hover:text-gray-900")} />
                        Read Insights
                    </button>
                </div>
            </section>

            {/* Content Area */}
            <div className="relative">
                <AnimatePresence mode="wait">
                    {activeTab === 'chat' && (
                        <motion.div
                            key="chat"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.3 }}
                        >
                            <AskMergex />
                        </motion.div>
                    )}

                    {activeTab === 'insights' && (
                        <motion.div
                            key="insights"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.3 }}
                        >
                            <FeaturedThinking />
                            <InsightGrid posts={posts} activeCategory={activeCategory} onCategoryChange={setActiveCategory} />
                            <QuickTakes />
                            <InsightsCTA />
                            {children}
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
}
