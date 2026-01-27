'use client';

import { motion } from 'framer-motion';
import { PORTAL_CARDS } from '../content';
import { ArrowRight, Sparkles, Code, Package } from 'lucide-react';
import Link from 'next/link';

/**
 * ProductPortalGallery - Google AI Studio-inspired horizontal scrolling cards
 * Features: Glassmorphism cards, smooth horizontal scroll, division portals
 */
export function ProductPortalGallery() {
    const icons = {
        labs: Sparkles,
        systems: Code,
        platform: Package,
    };

    return (
        <section className="py-20 md:py-32 bg-white overflow-hidden">
            <div className="container mx-auto px-6 md:px-12">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display mb-4 text-foreground">
                        Explore Our Ecosystem
                    </h2>
                    <p className="text-lg md:text-xl text-foreground-muted max-w-2xl mx-auto">
                        Three divisions. One mission. Empowering makers to build without limits.
                    </p>
                </motion.div>

                {/* Horizontal Scrolling Cards */}
                <div className="relative">
                    <div className="flex gap-6 overflow-x-auto pb-8 snap-x snap-mandatory scrollbar-hide">
                        {Object.entries(PORTAL_CARDS).map(([key, card], index) => {
                            const Icon = icons[key as keyof typeof icons];

                            return (
                                <motion.div
                                    key={key}
                                    initial={{ opacity: 0, x: 50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className="snap-center"
                                >
                                    <Link href={card.href}>
                                        <div
                                            className="group relative min-w-[340px] md:min-w-[400px] h-[480px] bg-white rounded-2xl p-8 transition-all duration-500 hover:scale-105 hover:shadow-2xl cursor-pointer border border-gray-100"
                                        >
                                            {/* Glow Effect on Hover */}
                                            <div
                                                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl -z-10"
                                                style={{
                                                    background: `radial-gradient(circle at 50% 50%, ${card.color}20, transparent 70%)`,
                                                }}
                                            />

                                            {/* Icon */}
                                            <div
                                                className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-transform duration-500 group-hover:scale-110"
                                                style={{ backgroundColor: card.color + '15' }}
                                            >
                                                <Icon size={32} style={{ color: card.color }} />
                                            </div>

                                            {/* Title & Tagline */}
                                            <div className="mb-6">
                                                <h3 className="text-2xl md:text-3xl font-bold font-display mb-2 text-foreground">
                                                    {card.title}
                                                </h3>
                                                <p
                                                    className="text-lg font-semibold"
                                                    style={{ color: card.color }}
                                                >
                                                    {card.tagline}
                                                </p>
                                            </div>

                                            {/* Description */}
                                            <p className="text-foreground-muted mb-6 leading-relaxed">
                                                {card.description}
                                            </p>

                                            {/* Features */}
                                            <div className="space-y-2 mb-8">
                                                {card.features.map((feature, idx) => (
                                                    <div key={idx} className="flex items-center gap-2 text-sm text-foreground">
                                                        <div
                                                            className="w-1.5 h-1.5 rounded-full"
                                                            style={{ backgroundColor: card.color }}
                                                        />
                                                        <span>{feature}</span>
                                                    </div>
                                                ))}
                                            </div>

                                            {/* Enter Portal CTA */}
                                            <div className="absolute bottom-8 left-8 right-8 flex items-center justify-between text-foreground font-semibold group-hover:gap-2 transition-all duration-300">
                                                <span>Enter Portal</span>
                                                <ArrowRight
                                                    className="group-hover:translate-x-2 transition-transform duration-300"
                                                    size={20}
                                                    style={{ color: card.color }}
                                                />
                                            </div>
                                        </div>
                                    </Link>
                                </motion.div>
                            );
                        })}
                    </div>

                    {/* Scroll Indicator */}
                    <div className="flex justify-center gap-2 mt-6">
                        {Object.keys(PORTAL_CARDS).map((key, index) => (
                            <div
                                key={key}
                                className="w-2 h-2 rounded-full bg-gray-200 transition-all duration-300 hover:bg-primary"
                            />
                        ))}
                    </div>
                </div>
            </div>

            <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
        </section>
    );
}
