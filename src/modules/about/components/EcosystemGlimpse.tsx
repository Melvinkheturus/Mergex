'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import type { EcosystemCard } from '../types';

const ECOSYSTEM_CARDS: EcosystemCard[] = [
    {
        id: 'labs',
        title: 'Mergex Labs',
        description: 'Where we explore AI-native creativity — experimenting with generative visuals, motion, and storytelling before it becomes predictable.',
        href: '/labs',
        ctaText: 'Explore Mergex Labs'
    },
    {
        id: 'systems',
        title: 'Mergex Systems',
        description: 'Where ideas turn into production-ready systems — software, automation, and platforms designed to scale with real businesses.',
        href: '/systems',
        ctaText: 'Explore Mergex Systems'
    }
];

/**
 * EcosystemGlimpse - Two Clear Doors
 * 
 * Purpose: Create invitation to Labs/Systems, not explanation
 * Psychology: Hick's Law (simpler choices), Paradox of Choice, AIDA Funnel
 * Copy: No bullet points, no service lists - pure invitation
 */
export function EcosystemGlimpse() {
    return (
        <section className="relative bg-white py-20 md:py-32">
            <div className="container mx-auto px-6 md:px-12 lg:px-16 max-w-[1400px]">

                {/* Headline */}
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-900 mb-16 text-center"
                >
                    One ecosystem. Two focused modes.
                </motion.h2>

                {/* Cards */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {ECOSYSTEM_CARDS.map((card, index) => (
                        <motion.div
                            key={card.id}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            className="group relative bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-2xl p-8 md:p-10 hover:shadow-xl transition-all duration-300 hover:border-violet-200"
                        >
                            {/* Card content */}
                            <div className="mb-8">
                                <h3 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4">
                                    {card.title}
                                </h3>

                                <p className="text-lg text-gray-700 leading-relaxed">
                                    {card.description}
                                </p>
                            </div>

                            {/* CTA */}
                            <Link
                                href={card.href}
                                className="inline-flex items-center gap-2 text-lg font-medium text-violet-600 group-hover:text-violet-700 group-hover:gap-3 transition-all"
                            >
                                {card.ctaText}
                                <ArrowRight
                                    size={20}
                                    className="group-hover:translate-x-1 transition-transform"
                                />
                            </Link>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}
