'use client';

import { motion } from 'framer-motion';
import { WHAT_WE_SOLVE } from '../content/systems';
import { Users, Zap, Clock, Link } from 'lucide-react';
import { GridBackground } from '@/components/backgrounds/GridBackground';
import Image from 'next/image';

/**
 * WhatWeSolve - Pain point identification
 * Minimal white design with subtle purple accents
 */
export function WhatWeSolve() {
    const iconMap = {
        users: Users,
        zap: Zap,
        clock: Clock,
        link: Link,
    };

    return (
        <GridBackground className="py-20 md:py-28 bg-white">
            <section className="container mx-auto px-6 md:px-12">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-[#1A1A1A]"
                        style={{ fontFamily: 'var(--font-geist-sans)' }}
                    >
                        {WHAT_WE_SOLVE.headline}
                    </h2>
                    <p className="text-lg md:text-xl text-[#666666] max-w-2xl mx-auto">
                        {WHAT_WE_SOLVE.subheadline}
                    </p>
                </motion.div>

                {/* Problems Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
                    {WHAT_WE_SOLVE.problems.map((problem, index) => {
                        const Icon = iconMap[problem.icon as keyof typeof iconMap];

                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300 border border-[#F0F0F0]"
                            >
                                {/* Icon */}
                                <div className="w-12 h-12 bg-gradient-to-br from-purple-50 to-purple-100/50 rounded-xl flex items-center justify-center mb-5">
                                    <Icon size={24} className="text-purple-600" />
                                </div>

                                {/* Problem Title */}
                                <h3 className="text-xl font-bold mb-3 text-[#1A1A1A]">
                                    {problem.title}
                                </h3>

                                {/* Problem Description */}
                                <p className="text-[#666666] mb-4 leading-relaxed text-sm">
                                    {problem.description}
                                </p>

                                {/* Solution */}
                                <div className="pt-4 border-t border-[#F5F5F5]">
                                    <p className="text-sm font-semibold bg-gradient-to-r from-purple-600 to-purple-400 bg-clip-text text-transparent flex items-start gap-2">
                                        <span className="text-purple-500">→</span>
                                        {problem.solution}
                                    </p>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </section>
        </GridBackground>
    );
}

