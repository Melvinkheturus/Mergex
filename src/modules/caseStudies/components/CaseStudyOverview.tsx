'use client';

import { motion } from 'framer-motion';
import { Rocket, Zap, Palette, BarChart3 } from 'lucide-react';

const SYSTEMS_CATEGORIES = [
    {
        id: 'development',
        icon: Rocket,
        title: 'Development',
        outcome: 'MVPs in 3-5 weeks, not months',
        gradient: 'from-blue-500 to-cyan-500',
        bgGradient: 'from-blue-500/10 to-cyan-500/10',
    },
    {
        id: 'automation',
        icon: Zap,
        title: 'Automation',
        outcome: '40+ hours/week saved per team',
        gradient: 'from-orange-500 to-red-500',
        bgGradient: 'from-orange-500/10 to-red-500/10',
    },
    {
        id: 'design',
        icon: Palette,
        title: 'Design',
        outcome: 'Premium UI that converts',
        gradient: 'from-purple-500 to-pink-500',
        bgGradient: 'from-purple-500/10 to-pink-500/10',
    },
    {
        id: 'marketing',
        icon: BarChart3,
        title: 'Marketing',
        outcome: '8x engagement, 15% conversions',
        gradient: 'from-green-500 to-emerald-500',
        bgGradient: 'from-green-500/10 to-emerald-500/10',
    },
];

export function CaseStudyOverview() {
    return (
        <section className="bg-gradient-to-b from-gray-50 to-white py-20">
            <div className="container mx-auto max-w-7xl px-6">
                {/* Header */}
                <motion.div
                    className="mb-12 text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
                        Systems That Deliver
                    </h2>
                    <p className="mx-auto max-w-2xl text-lg text-gray-600">
                        Quick glimpse of what we build and the outcomes we achieve
                    </p>
                </motion.div>

                {/* Categories Grid */}
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {SYSTEMS_CATEGORIES.map((category, index) => {
                        const Icon = category.icon;
                        return (
                            <motion.div
                                key={category.id}
                                className="group relative overflow-hidden rounded-2xl bg-white p-6 shadow-sm border border-gray-200 transition-all duration-300 hover:shadow-lg hover:border-gray-300"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                whileHover={{ y: -4 }}
                            >
                                {/* Background Gradient */}
                                <div className={`absolute inset-0 bg-gradient-to-br ${category.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

                                {/* Content */}
                                <div className="relative z-10">
                                    {/* Icon */}
                                    <div className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${category.gradient}`}>
                                        <Icon className="h-6 w-6 text-white" />
                                    </div>

                                    {/* Title */}
                                    <h3 className="mb-2 text-xl font-bold text-gray-900">
                                        {category.title}
                                    </h3>

                                    {/* Outcome */}
                                    <p className="text-sm text-gray-600 group-hover:text-gray-700 transition-colors">
                                        {category.outcome}
                                    </p>
                                </div>

                                {/* Hover Border Glow */}
                                <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br ${category.gradient} blur-xl -z-10`} />
                            </motion.div>
                        );
                    })}
                </div>

                {/* Bottom Text */}
                <motion.div
                    className="mt-12 text-center"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                >
                    <p className="text-gray-500 text-sm">
                        Scroll down for detailed case studies ↓
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
