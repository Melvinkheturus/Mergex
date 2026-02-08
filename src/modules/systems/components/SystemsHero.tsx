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
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/assets/background/system hero.png"
                    alt="Systems Hero Background"
                    fill
                    className="object-cover"
                    priority
                />
                {/* Overlay for readability if necessary - keeping minimal for now */}
                {/* <div className="absolute inset-0 bg-white/50" /> */}
            </div>

            {/* Content */}
            <div className="w-full max-w-7xl mx-auto px-4 md:px-8 py-20 md:py-32 relative z-10 flex items-center justify-center text-center">
                <div className="max-w-4xl mx-auto">
                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="space-y-6 md:space-y-8 flex flex-col items-center"
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
                            className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-2xl mx-auto"
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
                            className="flex flex-col sm:flex-row gap-4 pt-4 justify-center"
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
                </div>
            </div>
        </section>
    );
}
