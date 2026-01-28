'use client';

import { motion } from 'framer-motion';
import { WHAT_WE_CREATE } from '../content/labs';
import { Image, Video, Megaphone, Palette, Sparkles } from 'lucide-react';

/**
 * WhatWeCreate - Capabilities showcase
 */
export function WhatWeCreate() {
    const iconMap = {
        image: Image,
        video: Video,
        megaphone: Megaphone,
        palette: Palette,
        sparkles: Sparkles,
    };

    return (
        <section className="py-20 md:py-32 bg-gradient-to-b from-white to-purple-50/30">
            <div className="container mx-auto px-6 md:px-12">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display mb-4 text-foreground">
                        {WHAT_WE_CREATE.headline}
                    </h2>
                    <p className="text-lg md:text-xl text-foreground-muted max-w-2xl mx-auto">
                        {WHAT_WE_CREATE.subheadline}
                    </p>
                </motion.div>

                {/* Capabilities Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {WHAT_WE_CREATE.categories.map((category, index) => {
                        const Icon = iconMap[category.icon as keyof typeof iconMap];

                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="group bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-2xl hover:border-purple-200 transition-all duration-300"
                            >
                                {/* Icon */}
                                <div className="w-14 h-14 bg-gradient-to-br from-purple-100 to-pink-100 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                                    <Icon size={28} className="text-purple-600" />
                                </div>

                                {/* Title */}
                                <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-purple-600 transition-colors">
                                    {category.title}
                                </h3>

                                {/* Description */}
                                <p className="text-foreground-muted mb-5 leading-relaxed">
                                    {category.description}
                                </p>

                                {/* Capabilities List */}
                                <ul className="space-y-2">
                                    {category.capabilities.map((capability, idx) => (
                                        <li key={idx} className="flex items-start text-sm text-foreground-muted">
                                            <span className="w-1.5 h-1.5 bg-purple-400 rounded-full mr-2 mt-1.5 flex-shrink-0" />
                                            {capability}
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
