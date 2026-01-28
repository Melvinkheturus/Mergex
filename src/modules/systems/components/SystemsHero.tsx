'use client';

import { motion } from 'framer-motion';
import { SYSTEMS_HERO } from '../content/systems';
import { ArrowRight, Zap } from 'lucide-react';

/**
 * SystemsHero - Professional, outcome-focused hero
 * Immediate CTA visibility for business audience
 */
export function SystemsHero() {
    return (
        <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-gradient-to-br from-blue-50 via-white to-gray-50">
            {/* Professional Background Pattern */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-0 left-0 w-full h-full opacity-[0.03]" style={{
                    backgroundImage: 'linear-gradient(to right, #3b82f6 1px, transparent 1px), linear-gradient(to bottom, #3b82f6 1px, transparent 1px)',
                    backgroundSize: '80px 80px',
                }} />
            </div>

            <div className="container mx-auto px-6 md:px-12 relative z-10">
                <div className="max-w-5xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        {/* Pre-headline badge */}
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-6">
                            <Zap size={16} />
                            {SYSTEMS_HERO.keyDifferentiator}
                        </div>

                        {/* Main Headline */}
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold font-display mb-6 leading-tight text-foreground">
                            {SYSTEMS_HERO.headline.split('\n').map((line, index) => (
                                <span key={index} className="block">
                                    {line}
                                </span>
                            ))}
                        </h1>

                        {/* Subheadline - Service Scope */}
                        <p className="text-xl md:text-2xl text-foreground-muted mb-10 leading-relaxed">
                            {SYSTEMS_HERO.subheadline}
                        </p>

                        {/* CTAs */}
                        <div className="flex flex-col sm:flex-row gap-4">
                            <button className="group px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl hover:scale-105">
                                {SYSTEMS_HERO.primaryCTA}
                                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
                            </button>
                            <button className="px-8 py-4 bg-white hover:bg-gray-50 text-foreground border-2 border-gray-200 rounded-xl text-lg font-semibold transition-all duration-300 shadow-sm hover:shadow-md">
                                {SYSTEMS_HERO.secondaryCTA}
                            </button>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
