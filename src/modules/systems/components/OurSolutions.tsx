'use client';

import { motion } from 'framer-motion';
import { OUR_SOLUTIONS } from '../content/systems';
import { Code2, Bot, Palette, Megaphone } from 'lucide-react';

/**
 * OurSolutions - Service pillar showcase
 */
export function OurSolutions() {
    const iconMap = {
        code: Code2,
        bot: Bot,
        palette: Palette,
        megaphone: Megaphone,
    };

    return (
        <section className="py-20 md:py-32 bg-white">
            <div className="container mx-auto px-6 md:px-12">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display mb-4 text-foreground">
                        {OUR_SOLUTIONS.headline}
                    </h2>
                    <p className="text-lg md:text-xl text-foreground-muted max-w-2xl mx-auto">
                        {OUR_SOLUTIONS.subheadline}
                    </p>
                </motion.div>

                {/* Pillars Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {OUR_SOLUTIONS.pillars.map((pillar, index) => {
                        const Icon = iconMap[pillar.icon as keyof typeof iconMap];

                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-2xl hover:border-blue-200 transition-all duration-300"
                            >
                                {/* Icon + Title */}
                                <div className="flex items-start gap-4 mb-6">
                                    <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center flex-shrink-0">
                                        <Icon size={24} className="text-blue-600" />
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-bold text-foreground mb-2">
                                            {pillar.title}
                                        </h3>
                                        <p className="text-foreground-muted">
                                            {pillar.description}
                                        </p>
                                    </div>
                                </div>

                                {/* Capabilities */}
                                <div className="mb-6">
                                    <h4 className="text-sm font-semibold text-foreground-muted uppercase tracking-wider mb-3">
                                        Capabilities
                                    </h4>
                                    <ul className="space-y-2">
                                        {pillar.capabilities.map((capability, idx) => (
                                            <li key={idx} className="flex items-start text-sm text-foreground-muted">
                                                <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2 mt-1.5 flex-shrink-0" />
                                                {capability}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Outcomes */}
                                <div className="pt-6 border-t border-gray-100">
                                    <h4 className="text-sm font-semibold text-blue-600 uppercase tracking-wider mb-3">
                                        Outcomes
                                    </h4>
                                    <div className="flex flex-wrap gap-2">
                                        {pillar.outcomes.map((outcome, idx) => (
                                            <span
                                                key={idx}
                                                className="px-3 py-1 bg-blue-50 text-blue-700 text-xs font-medium rounded-full"
                                            >
                                                {outcome}
                                            </span>
                                        ))}
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
