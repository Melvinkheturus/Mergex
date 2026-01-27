'use client';

import { motion } from 'framer-motion';
import { WHAT_WE_BUILD } from '../content';
import { Sparkles, Wrench, Rocket, GraduationCap } from 'lucide-react';

/**
 * WhatWeBuildSection - Problem-solution grid showing division capabilities
 */
export function WhatWeBuildSection() {
    const iconMap = {
        spark: Sparkles,
        build: Wrench,
        rocket_launch: Rocket,
        school: GraduationCap,
    };

    return (
        <section className="py-20 md:py-32 relative overflow-hidden bg-gradient-to-b from-white to-purple-50/30">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-[0.03]">
                <div className="absolute top-0 left-0 w-full h-full"
                    style={{
                        backgroundImage: 'radial-gradient(circle, #8b5cf6 1px, transparent 1px)',
                        backgroundSize: '40px 40px'
                    }}
                />
            </div>

            <div className="container mx-auto px-6 md:px-12 relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display mb-4 text-foreground">
                        {WHAT_WE_BUILD.headline}
                    </h2>
                    <p className="text-lg md:text-xl text-foreground-muted max-w-2xl mx-auto">
                        {WHAT_WE_BUILD.subheadline}
                    </p>
                </motion.div>

                {/* Problem-Solution Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {WHAT_WE_BUILD.problems.map((item, index) => {
                        const Icon = iconMap[item.icon as keyof typeof iconMap];

                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="group relative bg-white border border-gray-100 rounded-2xl p-6 hover:shadow-lg hover:border-primary/20 transition-all duration-300"
                            >
                                {/* Icon */}
                                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                                    <Icon size={24} className="text-primary" />
                                </div>

                                {/* Challenge */}
                                <div className="mb-4">
                                    <span className="text-xs text-foreground-muted uppercase tracking-wider">Challenge</span>
                                    <h3 className="text-lg font-semibold mt-1 text-foreground">{item.challenge}</h3>
                                </div>

                                {/* Solution */}
                                <div className="mb-4">
                                    <span className="text-xs text-primary uppercase tracking-wider">Our Solution</span>
                                    <p className="text-sm text-foreground-muted mt-1">{item.solution}</p>
                                </div>

                                {/* Division Tag */}
                                <div className="inline-block px-3 py-1 bg-purple-50 text-primary text-xs font-medium rounded-full border border-purple-100">
                                    {item.division}
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
