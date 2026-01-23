'use client';

import { BookOpen, ArrowRight, Calendar } from 'lucide-react';
import Link from 'next/link';

export default function BlogPreview() {
    // Placeholder blog posts - will be replaced with CMS data
    const blogPosts = [
        {
            id: 1,
            title: 'Building Modular Architectures for Scale',
            category: 'Tech',
            excerpt: 'How we structure codebases for long-term growth and subdomain extraction',
            date: '2026-01-20',
            href: '/blog/modular-architectures',
        },
        {
            id: 2,
            title: 'The Future of AI Automation',
            category: 'AI',
            excerpt: 'Practical AI automation patterns that actually work in production',
            date: '2026-01-18',
            href: '/blog/ai-automation-future',
        },
        {
            id: 3,
            title: 'From Agency to Tech Ecosystem',
            category: 'Build in Public',
            excerpt: 'Our journey evolving from website development to a complete tech platform',
            date: '2026-01-15',
            href: '/blog/agency-to-ecosystem',
        },
    ];

    const getCategoryColor = (category: string) => {
        const colors = {
            Tech: 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400',
            AI: 'bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400',
            'Build in Public': 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400',
        };
        return colors[category as keyof typeof colors] || colors.Tech;
    };

    return (
        <section className="py-20 md:py-28 bg-gray-50 dark:bg-gray-900/50">
            <div className="max-w-7xl mx-auto px-4 md:px-10">
                {/* Heading */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-bold uppercase tracking-wider mb-6">
                        <BookOpen className="w-4 h-4" />
                        Insights & Learning
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold mb-4 font-display">Latest from Our Blog</h2>
                    <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto font-body">
                        Tech articles, AI insights, and build-in-public stories
                    </p>
                </div>

                {/* Blog Posts Grid */}
                <div className="grid md:grid-cols-3 gap-8 mb-12">
                    {blogPosts.map((post) => (
                        <Link
                            key={post.id}
                            href={post.href}
                            className="group p-6 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-primary dark:hover:border-primary hover:shadow-xl transition-all duration-300"
                        >
                            {/* Category & Date */}
                            <div className="flex items-center justify-between mb-4">
                                <span className={`px-3 py-1 rounded-full text-xs font-bold ${getCategoryColor(post.category)}`}>
                                    {post.category}
                                </span>
                                <div className="flex items-center gap-1 text-xs text-gray-500 dark:text-gray-400">
                                    <Calendar className="w-3 h-3" />
                                    {new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                                </div>
                            </div>

                            {/* Title */}
                            <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors font-display">
                                {post.title}
                            </h3>

                            {/* Excerpt */}
                            <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">{post.excerpt}</p>

                            {/* Read More */}
                            <div className="flex items-center gap-2 text-primary font-medium group-hover:gap-3 transition-all">
                                Read article
                                <ArrowRight className="w-4 h-4" />
                            </div>
                        </Link>
                    ))}
                </div>

                {/* View All Link */}
                <div className="text-center">
                    <Link
                        href="/blog"
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border-2 border-gray-200 dark:border-gray-700 text-gray-900 dark:text-gray-100 font-bold hover:border-primary dark:hover:border-primary hover:text-primary transition-all"
                    >
                        Explore All Insights
                        <ArrowRight className="w-5 h-5" />
                    </Link>
                </div>
            </div>
        </section>
    );
}
