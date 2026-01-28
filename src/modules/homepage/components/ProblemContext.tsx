'use client';

import { motion } from 'framer-motion';
import { PROBLEM_CONTEXT } from '../content';
import { Users, Clock, Brain, Link } from 'lucide-react';

/**
 * ProblemContext - Establishes understanding of user pain points
 * Positioned between Hero and Ecosystem to build context before presenting solutions
 */
export function ProblemContext() {
    const iconMap = {
        users: Users,
        clock: Clock,
        brain: Brain,
        link: Link,
    };

    return (
        <section className="py-20 md:py-28 bg-gradient-to-b from-white to-gray-50">
            <div className="container mx-auto px-6 md:px-12">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display mb-4 text-foreground">
                        {PROBLEM_CONTEXT.headline}
                    </h2>
                    <p className="text-lg md:text-xl text-foreground-muted max-w-2xl mx-auto">
                        {PROBLEM_CONTEXT.subheadline}
                    </p>
                </motion.div>

                {/* Problem Grid - 2x2 on desktop, stacked on mobile */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto mb-12">
                    {PROBLEM_CONTEXT.problems.map((problem, index) => {
                        const Icon = iconMap[problem.icon as keyof typeof iconMap];

                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="group relative bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-xl hover:border-primary/20 transition-all duration-300"
                            >
                                {/* Icon */}
                                <div className="w-14 h-14 bg-red-50 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                                    <Icon size={28} className="text-red-500" />
                                </div>

                                {/* Content */}
                                <h3 className="text-xl font-bold mb-3 text-foreground">
                                    {problem.title}
                                </h3>
                                <p className="text-foreground-muted leading-relaxed">
                                    {problem.description}
                                </p>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Closing Statement */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    className="text-center max-w-3xl mx-auto"
                >
                    <p className="text-xl md:text-2xl font-semibold text-primary leading-relaxed">
                        {PROBLEM_CONTEXT.closingStatement}
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
