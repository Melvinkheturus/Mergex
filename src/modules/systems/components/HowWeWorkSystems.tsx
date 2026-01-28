'use client';

import { motion } from 'framer-motion';
import { HOW_WE_WORK_SYSTEMS } from '../content/systems';
import { Search, PenTool, Code2, Rocket, TrendingUp } from 'lucide-react';

/**
 * HowWeWorkSystems - 5-phase process
 */
export function HowWeWorkSystems() {
    const iconMap = {
        search: Search,
        pencil: PenTool,
        code: Code2,
        rocket: Rocket,
        'trending-up': TrendingUp,
    };

    return (
        <section className="py-20 md:py-32 bg-gradient-to-b from-blue-50/30 to-white">
            <div className="container mx-auto px-6 md:px-12">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display mb-4 text-foreground">
                        {HOW_WE_WORK_SYSTEMS.headline}
                    </h2>
                    <p className="text-lg md:text-xl text-foreground-muted max-w-2xl mx-auto">
                        {HOW_WE_WORK_SYSTEMS.subheadline}
                    </p>
                </motion.div>

                {/* Phases Timeline */}
                <div className="max-w-4xl mx-auto">
                    {HOW_WE_WORK_SYSTEMS.phases.map((phase, index) => {
                        const Icon = iconMap[phase.icon as keyof typeof iconMap];

                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="relative mb-12 last:mb-0"
                            >
                                {/* Connector Line */}
                                {index < HOW_WE_WORK_SYSTEMS.phases.length - 1 && (
                                    <div className="absolute left-6 top-16 w-0.5 h-full bg-blue-200" />
                                )}

                                {/* Phase Card */}
                                <div className="flex gap-6">
                                    {/* Icon Circle */}
                                    <div className="relative z-10 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg">
                                        <Icon size={24} className="text-white" />
                                    </div>

                                    {/* Content Card */}
                                    <div className="flex-1 bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-shadow">
                                        <div className="flex items-baseline gap-3 mb-2">
                                            <span className="text-3xl font-bold text-blue-200">{phase.number}</span>
                                            <h3 className="text-2xl font-bold text-foreground">{phase.title}</h3>
                                        </div>
                                        <p className="text-foreground-muted mb-4">{phase.description}</p>
                                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 text-blue-700 text-sm font-medium rounded-lg">
                                            ✓ {phase.outcome}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
