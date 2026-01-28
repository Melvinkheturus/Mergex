'use client';

import { motion } from 'framer-motion';
import { Lightbulb, Zap, Shield, TrendingUp } from 'lucide-react';
import { HOW_WE_WORK } from '../content/careers';

const iconMap = {
    lightbulb: Lightbulb,
    zap: Zap,
    shield: Shield,
    'trending-up': TrendingUp,
} as const;

export function HowWeWorkCareers() {
    return (
        <section className="bg-gradient-to-br from-gray-50 to-white py-20">
            <div className="container mx-auto max-w-6xl px-6">
                {/* Header */}
                <motion.div
                    className="mb-12 text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
                        {HOW_WE_WORK.headline}
                    </h2>
                    <p className="mx-auto max-w-2xl text-lg font-medium text-purple-600">
                        {HOW_WE_WORK.subheadline}
                    </p>
                </motion.div>

                {/* Working Principles */}
                <div className="grid gap-6 md:grid-cols-2">
                    {HOW_WE_WORK.workingPrinciples.map((principle, index) => {
                        const Icon = iconMap[principle.icon as keyof typeof iconMap];
                        return (
                            <motion.div
                                key={index}
                                className="group rounded-xl border-2 border-gray-200 bg-white p-6 transition-all hover:border-purple-300 hover:shadow-lg"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                            >
                                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-purple-100 text-purple-600 transition-colors group-hover:bg-purple-600 group-hover:text-white">
                                    <Icon className="h-6 w-6" />
                                </div>
                                <h3 className="mb-3 text-xl font-bold text-gray-900">{principle.title}</h3>
                                <p className="leading-relaxed text-gray-600">{principle.description}</p>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
