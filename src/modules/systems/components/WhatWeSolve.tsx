'use client';

import { motion } from 'framer-motion';
import { WHAT_WE_SOLVE } from '../content/systems';
import { Users, Zap, Clock, Link } from 'lucide-react';

/**
 * WhatWeSolve - Pain point identification
 */
export function WhatWeSolve() {
    const iconMap = {
        users: Users,
        zap: Zap,
        clock: Clock,
        link: Link,
    };

    return (
        <section className="py-20 md:py-28 bg-white">
            <div className="container mx-auto px-6 md:px-12">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display mb-4 text-foreground">
                        {WHAT_WE_SOLVE.headline}
                    </h2>
                    <p className="text-lg md:text-xl text-foreground-muted max-w-2xl mx-auto">
                        {WHAT_WE_SOLVE.subheadline}
                    </p>
                </motion.div>

                {/* Problems Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                    {WHAT_WE_SOLVE.problems.map((problem, index) => {
                        const Icon = iconMap[problem.icon as keyof typeof iconMap];

                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-xl hover:border-blue-200 transition-all duration-300"
                            >
                                {/* Icon */}
                                <div className="w-14 h-14 bg-red-50 rounded-xl flex items-center justify-center mb-5">
                                    <Icon size={28} className="text-red-500" />
                                </div>

                                {/* Problem Title */}
                                <h3 className="text-xl font-bold mb-2 text-foreground">
                                    {problem.title}
                                </h3>

                                {/* Problem Description */}
                                <p className="text-foreground-muted mb-4 leading-relaxed">
                                    {problem.description}
                                </p>

                                {/* Solution */}
                                <div className="pt-4 border-t border-gray-100">
                                    <p className="text-sm font-semibold text-blue-600 flex items-start gap-2">
                                        <span className="text-blue-400">→</span>
                                        {problem.solution}
                                    </p>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
