'use client';

import { motion } from 'framer-motion';
import { HOW_WE_WORK } from '../content';
import { Search, PenTool, Code2, Rocket } from 'lucide-react';

/**
 * HowWeWorkSection - Process confidence builder
 * Shows systematic 4-step approach to build trust
 */
export function HowWeWorkSection() {
    const iconMap = {
        search: Search,
        pencil: PenTool,
        code: Code2,
        rocket: Rocket,
    };

    return (
        <section className="py-20 md:py-32 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-[0.02]">
                <div
                    className="absolute top-0 left-0 w-full h-full"
                    style={{
                        backgroundImage: 'radial-gradient(circle, #3b82f6 1px, transparent 1px)',
                        backgroundSize: '40px 40px',
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
                        {HOW_WE_WORK.headline}
                    </h2>
                    <p className="text-lg md:text-xl text-foreground-muted max-w-2xl mx-auto">
                        {HOW_WE_WORK.subheadline}
                    </p>
                </motion.div>

                {/* Process Steps - Horizontal on desktop, vertical on mobile */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                    {HOW_WE_WORK.steps.map((step, index) => {
                        const Icon = iconMap[step.icon as keyof typeof iconMap];

                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="relative"
                            >
                                {/* Connector Line (desktop only, not for last item) */}
                                {index < HOW_WE_WORK.steps.length - 1 && (
                                    <div className="hidden lg:block absolute top-12 left-[calc(50%+40px)] w-[calc(100%-40px)] h-0.5 bg-gradient-to-r from-primary/40 to-transparent" />
                                )}

                                {/* Step Card */}
                                <div className="relative bg-white border border-gray-100 rounded-2xl p-6 hover:shadow-lg hover:border-primary/30 transition-all duration-300">
                                    {/* Step Number */}
                                    <div className="text-5xl font-bold text-primary/10 mb-2">
                                        {step.number}
                                    </div>

                                    {/* Icon */}
                                    <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-4">
                                        <Icon size={24} className="text-blue-600" />
                                    </div>

                                    {/* Content */}
                                    <h3 className="text-xl font-bold mb-3 text-foreground">
                                        {step.title}
                                    </h3>
                                    <p className="text-sm text-foreground-muted leading-relaxed">
                                        {step.description}
                                    </p>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Key Messages */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    className="flex flex-wrap justify-center gap-6"
                >
                    {HOW_WE_WORK.keyMessages.map((message, index) => (
                        <div
                            key={index}
                            className="px-6 py-3 bg-primary/5 border border-primary/20 rounded-full text-primary font-medium"
                        >
                            ✓ {message}
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
