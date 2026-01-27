'use client';

import { motion } from 'framer-motion';
import { HERO_CONTENT } from '../content';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';

/**
 * HeroSection - Cinematic hero with light theme
 * Features: Soft gradient background, clean design, light aesthetics
 */
export function HeroSection() {
    return (
        <section className="relative min-h-screen flex items-center overflow-hidden bg-white selection:bg-purple-100">
            {/* Advanced CSS Background Generation (Nano Banana Style simulation) */}
            <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                {/* Main Gradient Mesh */}
                <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-purple-200/40 rounded-full blur-[120px] mix-blend-multiply animate-float" />
                <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-blue-200/40 rounded-full blur-[120px] mix-blend-multiply animate-float" style={{ animationDelay: '2s' }} />
                <div className="absolute bottom-[-10%] left-[20%] w-[60%] h-[60%] bg-indigo-100/40 rounded-full blur-[120px] mix-blend-multiply animate-float" style={{ animationDelay: '4s' }} />

                {/* Glassmorphism Elements */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.8)_0%,rgba(255,255,255,0)_100%)] z-10" />

                {/* Texture/Pattern */}
                <div className="absolute inset-0 opacity-[0.4] mix-blend-overlay z-0" style={{ backgroundImage: 'url("/noise.png")' }} />
                <div className="absolute inset-0 opacity-[0.03] z-0"
                    style={{
                        backgroundImage: `linear-gradient(#6366f1 1px, transparent 1px), linear-gradient(90deg, #6366f1 1px, transparent 1px)`,
                        backgroundSize: '100px 100px'
                    }}
                />
            </div>


            {/* Content Container */}
            <div className="relative z-10 container mx-auto px-6 md:px-12 py-32 md:py-40">
                <div className="max-w-4xl">
                    {/* Badge/Tagline */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="mb-6"
                    >
                        <span className="inline-block px-5 py-2.5 bg-purple-100 text-primary border border-purple-200 rounded-full text-sm font-semibold">
                            ✨ {HERO_CONTENT.tagline}
                        </span>
                    </motion.div>

                    {/* Main Headline */}
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold font-display mb-6 leading-tight text-foreground"
                    >
                        {HERO_CONTENT.headline.split('\n').map((line, index) => (
                            <span key={index} className="block">
                                {line}
                            </span>
                        ))}
                    </motion.h1>

                    {/* Subheadline */}
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="text-lg md:text-xl text-foreground-muted max-w-2xl mb-10 leading-relaxed"
                    >
                        {HERO_CONTENT.subheadline}
                    </motion.p>

                    {/* CTAs */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="flex flex-col sm:flex-row gap-4 mb-12"
                    >
                        <button className="group px-8 py-4 bg-primary text-white rounded-xl text-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 hover:scale-105">
                            {HERO_CONTENT.cta.primary}
                            <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
                        </button>
                        <button className="px-8 py-4 bg-white hover:bg-gray-50 text-foreground border-2 border-gray-200 rounded-xl text-lg font-semibold transition-all duration-300 shadow-sm hover:shadow-md">
                            {HERO_CONTENT.cta.secondary}
                        </button>
                    </motion.div>

                    {/* Trust Stats */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.8 }}
                        className="flex flex-wrap gap-10"
                    >
                        {HERO_CONTENT.stats.map((stat, index) => (
                            <div key={index} className="text-left">
                                <div className="text-3xl md:text-4xl font-bold text-primary mb-1">
                                    {stat.value}
                                </div>
                                <div className="text-sm text-foreground-muted uppercase tracking-wide">
                                    {stat.label}
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1.2 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20"
            >
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="w-6 h-10 border-2 border-gray-300 rounded-full flex items-start justify-center p-2"
                >
                    <div className="w-1.5 h-1.5 bg-gray-400 rounded-full" />
                </motion.div>
            </motion.div>
        </section>
    );
}
