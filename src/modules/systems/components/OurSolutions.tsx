'use client';

import { motion } from 'framer-motion';
import { OUR_SOLUTIONS } from '../content/systems';
import { Code2, Bot, Palette, Megaphone, Check } from 'lucide-react';
import { GridBackground } from '@/components/backgrounds/GridBackground';
import Image from 'next/image';

/**
 * OurSolutions - Service pillar showcase
 * Minimal white design with purple gradient accents
 */
export function OurSolutions() {
    const iconMap = {
        code: Code2,
        bot: Bot,
        palette: Palette,
        megaphone: Megaphone,
    };

    // Robot images for each pillar
    const robotImages = [
        '/images/robots/robot-software.png',
        '/images/robots/robot-ai.png',
        '/images/robots/robot-design.png',
        '/images/robots/robot-marketing.png',
    ];

    return (
        <GridBackground className="py-20 md:py-32 bg-white">
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
                        {OUR_SOLUTIONS.headline}
                    </h2>
                    <p className="text-lg md:text-xl text-[#666666] max-w-2xl mx-auto">
                        {OUR_SOLUTIONS.subheadline}
                    </p>
                </motion.div>

                {/* Pillars Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
                    {OUR_SOLUTIONS.pillars.map((pillar, index) => {
                        const Icon = iconMap[pillar.icon as keyof typeof iconMap];

                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="group bg-white border border-[#F0F0F0] rounded-2xl overflow-hidden hover:shadow-lg hover:border-purple-200 transition-all duration-300"
                            >
                                {/* Card Content */}
                                <div className="p-8">
                                    {/* Icon + Title */}
                                    <div className="flex items-start gap-4 mb-6">
                                        <div className="w-12 h-12 bg-gradient-to-br from-purple-50 to-purple-100/50 rounded-xl flex items-center justify-center flex-shrink-0">
                                            <Icon size={24} className="text-purple-600" />
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="text-2xl font-bold text-[#1A1A1A] mb-2">
                                                {pillar.title}
                                            </h3>
                                            <p className="text-[#666666] text-sm">
                                                {pillar.description}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Capabilities List */}
                                    <div className="mb-6">
                                        <h4 className="text-xs font-semibold text-[#999999] uppercase tracking-wider mb-3">
                                            Capabilities
                                        </h4>
                                        <ul className="space-y-2">
                                            {pillar.capabilities.map((capability, idx) => (
                                                <li key={idx} className="flex items-start text-sm text-[#666666]">
                                                    <Check size={16} className="text-purple-500 mr-2 mt-0.5 flex-shrink-0" />
                                                    {capability}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* Outcomes */}
                                    <div className="pt-6 border-t border-[#F5F5F5]">
                                        <h4 className="text-xs font-semibold bg-gradient-to-r from-purple-600 to-purple-400 bg-clip-text text-transparent uppercase tracking-wider mb-3">
                                            Outcomes
                                        </h4>
                                        <div className="flex flex-wrap gap-2">
                                            {pillar.outcomes.map((outcome, idx) => (
                                                <span
                                                    key={idx}
                                                    className="px-3 py-1.5 bg-gradient-to-r from-purple-50 to-purple-100/50 border border-purple-200/50 text-[#1A1A1A] text-xs font-medium rounded-full"
                                                >
                                                    {outcome}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </section>
        </GridBackground>
    );
}

