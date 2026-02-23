'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Playfair_Display } from 'next/font/google';

const playfair = Playfair_Display({
    subsets: ['latin'],
    style: ['italic'],
    weight: ['400', '500', '600']
});
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
                    className="object-cover opacity-100"
                    priority
                />
                {/* Only Bottom Fade */}
                <div className="absolute bottom-0 left-0 right-0 h-[400px] z-[2] pointer-events-none"
                    style={{ background: 'linear-gradient(to bottom, transparent 0%, white 100%)' }}
                />
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
                            className="text-[10px] md:text-xs text-gray-900 font-medium tracking-[0.3em] uppercase"
                        >
                            Mergex Systems · Software, Automation & Digital Infrastructure
                        </motion.p>

                        {/* Primary Headline */}
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                            className="text-4xl md:text-5xl lg:text-7xl font-bold leading-[1.1] tracking-tight text-gray-900"
                        >
                            Architecting <span className={`${playfair.className} italic font-normal`}>Scalable</span> Business Systems.
                        </motion.h1>

                        {/* Supporting Copy */}
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="text-base md:text-lg text-gray-800 leading-relaxed max-w-3xl mx-auto font-normal"
                        >
                            Build Systems that replace disconnected vendors and scattered tools with a unified revenue system designed to scale.
                        </motion.p>

                        {/* Value Proposition */}
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.5 }}
                            className="text-sm md:text-base text-gray-500 font-normal italic"
                        >
                            Built for founders ready to move from chaos to structured scale.
                        </motion.p>

                        {/* CTAs */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                            className="flex justify-center pt-4"
                        >
                            <Link
                                href="#how-we-work"
                                className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-white text-black border border-black rounded-lg font-medium shadow-md hover:shadow-lg hover:bg-gray-50 transition-all duration-300"
                            >
                                View Case Studies
                                <ArrowRight size={18} />
                            </Link>
                        </motion.div>


                    </motion.div>
                </div>
            </div>
        </section>
    );
}
