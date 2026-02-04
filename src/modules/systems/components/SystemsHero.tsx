'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { BlurVignette } from '@/components/ui/BlurVignette';

/**
 * SystemsHero - Conversion-focused hero with white background
 * Two-column layout with compelling copy and image
 */
export function SystemsHero() {
    return (
        <section className="relative min-h-screen flex items-center bg-white text-gray-900 overflow-hidden">
            <div className="w-full max-w-[95%] mx-auto px-4 md:px-8 py-20 md:py-32">
                <div className="grid grid-cols-1 lg:grid-cols-[60%_40%] gap-12 lg:gap-16 items-center">
                    {/* Left Column - Text Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="space-y-6 md:space-y-8"
                        style={{ fontFamily: 'var(--font-manrope)' }}
                    >
                        {/* Eyebrow */}
                        <motion.p
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="text-sm md:text-base text-gray-600 font-medium tracking-wide"
                        >
                            Mergex Systems · Software, Automation & Digital Infrastructure
                        </motion.p>

                        {/* Primary Headline */}
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                            className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
                        >
                            Build{' '}
                            <span
                                className="font-serif italic font-normal bg-gradient-to-b from-violet-400 to-violet-900 bg-clip-text text-transparent"
                                style={{ fontFamily: 'var(--font-playfair)' }}
                            >
                                Systems
                            </span>{' '}
                            That Actually Scale Without Managing Five Vendors.
                        </motion.h1>

                        {/* Supporting Copy */}
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="text-lg md:text-xl text-gray-700 leading-relaxed"
                        >
                            We design, build, and automate production-ready digital systems from MVPs to full platforms so businesses can move fast without breaking foundations.
                        </motion.p>

                        {/* Value Proposition */}
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.5 }}
                            className="text-base md:text-lg text-gray-600 italic"
                        >
                            One partner. One accountable system. Built to evolve as you grow.
                        </motion.p>

                        {/* CTAs */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                            className="flex flex-col sm:flex-row gap-4 pt-4"
                        >
                            <Link
                                href="/contact"
                                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-b from-violet-500 to-violet-700 text-white rounded-full font-medium shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
                            >
                                Book a Discovery Call
                                <ArrowRight size={18} />
                            </Link>
                            <Link
                                href="#how-we-work"
                                className="inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-gray-300 text-gray-900 rounded-full font-medium hover:bg-gray-50 transition-all duration-300"
                            >
                                See how we build systems
                            </Link>
                        </motion.div>

                        {/* Micro-copy */}
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.8 }}
                            className="text-sm text-gray-500 italic"
                        >
                            No sales pitch. No tech jargon. Just clarity on what to build next.
                        </motion.p>
                    </motion.div>

                    {/* Right Column - Image */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="relative h-[400px] md:h-[500px] lg:h-[600px] flex items-center justify-center -mt-12 lg:-mt-20"
                    >
                        <div className="relative w-full h-full">
                            <Image
                                src="/assets/background/convayer-hero.png"
                                alt="Systems Visualization"
                                fill
                                className="object-contain"
                                priority
                            />
                            {/* White Gradient Overlays for Seamless Blending */}
                            <div className="absolute top-0 left-0 right-0 h-[50%] bg-gradient-to-b from-white via-white/90 to-transparent z-10" />
                            <div className="absolute bottom-0 left-0 right-0 h-[50%] bg-gradient-to-t from-white via-white/90 to-transparent z-10" />
                            <div className="absolute top-0 left-0 bottom-0 w-[20%] bg-gradient-to-r from-white via-white/90 to-transparent z-10" />
                            <div className="absolute top-0 right-0 bottom-0 w-[20%] bg-gradient-to-l from-white via-white/90 to-transparent z-10" />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
