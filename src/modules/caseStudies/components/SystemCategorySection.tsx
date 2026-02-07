'use client';

import { motion } from 'framer-motion';
import { CaseStudy, SystemCategory } from '../content/caseStudies';
import Link from 'next/link';
import { ArrowRight, Code, Zap, ShoppingCart, LayoutDashboard, Brain } from 'lucide-react';

// Category metadata
const CATEGORY_META: Record<SystemCategory, {
    icon: React.ElementType;
    title: string;
    description: string;
    gradient: string;
}> = {
    platform: {
        icon: Code,
        title: 'Platform Systems',
        description: 'Full platforms, marketplaces, and SaaS products built for scale',
        gradient: 'from-blue-600 to-cyan-600'
    },
    automation: {
        icon: Zap,
        title: 'Automation Systems',
        description: 'Workflow automation and AI-powered process optimization',
        gradient: 'from-orange-600 to-red-600'
    },
    commerce: {
        icon: ShoppingCart,
        title: 'Commerce Systems',
        description: 'E-commerce, payments, inventory, and revenue infrastructure',
        gradient: 'from-green-600 to-emerald-600'
    },
    dashboard: {
        icon: LayoutDashboard,
        title: 'Operational Dashboards',
        description: 'Admin panels, internal tools, and analytics platforms',
        gradient: 'from-purple-600 to-pink-600'
    },
    'ai-intelligent': {
        icon: Brain,
        title: 'AI & Intelligent Systems',
        description: 'AI integration, ML models, and intelligent automation',
        gradient: 'from-indigo-600 to-violet-600'
    }
};

interface Props {
    category: SystemCategory;
    caseStudies: CaseStudy[];
}

export function SystemCategorySection({ category, caseStudies }: Props) {
    const meta = CATEGORY_META[category];
    const Icon = meta.icon;

    // Filter cases that belong to this category
    const relevantCases = caseStudies.filter(cs =>
        cs.systemTypes.includes(category) && cs.type === 'systems'
    );

    if (relevantCases.length === 0) {
        return null;
    }

    return (
        <section className="pb-20">
            {/* Category Header */}
            <motion.div
                className="mb-12"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                <div className="flex items-center gap-4 mb-4">
                    <div className={`inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${meta.gradient}`}>
                        <Icon className="h-7 w-7 text-white" />
                    </div>
                    <div>
                        <h2 className="text-3xl font-bold text-gray-900">{meta.title}</h2>
                        <p className="text-gray-600">{meta.description}</p>
                    </div>
                </div>
            </motion.div>

            {/* Cases Grid */}
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {relevantCases.map((caseStudy, index) => {
                    // Find the entry angle for this category
                    const entryAngle = caseStudy.entryAngles.find(
                        angle => angle.categoryId === category
                    );

                    return (
                        <motion.div
                            key={`${caseStudy.id}-${category}`}
                            className="group relative overflow-hidden rounded-2xl bg-white p-8 shadow-sm border border-gray-200 transition-all duration-300 hover:shadow-xl hover:border-gray-300"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ y: -6 }}
                        >
                            {/* Speed Badge */}
                            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-green-100 px-3 py-1.5">
                                <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
                                <span className="text-xs font-bold text-green-700">
                                    {caseStudy.speedIndicator}
                                </span>
                            </div>

                            {/* System-First Headline */}
                            <h3 className="mb-3 text-xl font-bold text-gray-900 group-hover:text-purple-700 transition-colors">
                                {entryAngle?.headline || caseStudy.title}
                            </h3>

                            {/* Client Context (smaller) */}
                            <p className="mb-4 text-sm text-gray-500">
                                Built for {caseStudy.client}
                            </p>

                            {/* Focus Area */}
                            <p className="mb-6 text-sm text-gray-700 line-clamp-2">
                                {entryAngle?.focusArea || caseStudy.problemSummary}
                            </p>

                            {/* Complexity Indicators */}
                            {caseStudy.complexity && (
                                <div className="mb-6">
                                    <div className="flex flex-wrap gap-2">
                                        {caseStudy.complexity.architecture?.slice(0, 2).map((item, i) => (
                                            <span
                                                key={i}
                                                className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full"
                                            >
                                                {item.length > 40 ? item.substring(0, 40) + '...' : item}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* Outcome */}
                            <div className="mb-6 rounded-lg bg-gray-50 p-4 border-l-4 border-purple-500">
                                <p className="text-xs font-semibold text-gray-500 uppercase mb-1">
                                    Outcome
                                </p>
                                <p className="text-sm font-medium text-gray-900">
                                    {caseStudy.outcomeHint}
                                </p>
                            </div>

                            {/* CTA */}
                            <Link
                                href={`/systems#case-studies`}
                                className="inline-flex items-center gap-2 text-sm font-semibold text-purple-600 hover:text-purple-700 transition-colors group/link"
                            >
                                View full case study
                                <ArrowRight className="h-4 w-4 transition-transform group-hover/link:translate-x-1" />
                            </Link>

                            {/* Hover Gradient */}
                            <div className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br ${meta.gradient} opacity-5 -z-10`} />
                        </motion.div>
                    );
                })}
            </div>
        </section>
    );
}
