'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Playfair_Display } from 'next/font/google';
import { CLOUDINARY_ASSETS } from '@/lib/cloudinary';

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
                    src={CLOUDINARY_ASSETS.systemsHero}
                    alt="Systems Hero Background"
                    fill
                    className="object-cover opacity-100"
                    priority
                    onError={(e) => {
                        (e.target as HTMLImageElement).src = '/background/systems/system hero.png';
                    }}
                />
                {/* Only Bottom Fade */}
                <div className="absolute bottom-0 left-0 right-0 h-[400px] z-[2] pointer-events-none"
                    style={{ background: 'linear-gradient(to bottom, transparent 0%, white 100%)' }}
                />
            </div>

            {/* Content Container */}
            <div className="relative z-10 w-full min-h-screen flex flex-col justify-between pt-48 md:pt-64 pb-6 md:pb-10 px-6 md:px-12 lg:px-16 max-w-[1400px] mx-auto">

                {/* 1. Top Left Area - Identity & Headline */}
                <div className="text-left w-full max-w-4xl">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="space-y-6 md:space-y-8"
                        style={{ fontFamily: 'var(--font-manrope)' }}
                    >
                        {/* Eyebrow */}
                        <motion.p
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="text-[8px] md:text-[11px] text-gray-900 font-medium tracking-[0.3em] uppercase"
                        >
                            Mergex Systems · Software, Automation & Digital Infrastructure
                        </motion.p>

                        {/* Primary Headline */}
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                            className="text-2xl md:text-3xl lg:text-5xl font-bold leading-[1.1] tracking-tight text-gray-900"
                        >
                            Architecting <span className={`${playfair.className} italic font-normal`}>Scalable</span> <br className="hidden lg:block" /> Business Systems.
                        </motion.h1>
                    </motion.div>
                </div>

                {/* 2. Bottom Right Area - Description & CTAs */}
                <div className="self-end text-right w-full max-w-[380px]">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="space-y-4 md:space-y-6"
                    >
                        {/* Supporting Copy */}
                        <motion.p
                            className="text-sm md:text-base lg:text-[17px] text-gray-800 lg:leading-[1.7] font-medium"
                        >
                            Build Systems that replace disconnected vendors and scattered tools with a unified revenue system designed to scale.
                        </motion.p>

                        {/* Value Proposition */}
                        <motion.p
                            className="text-xs md:text-sm text-gray-500 font-normal italic pb-2"
                        >
                            Built for founders ready to move from chaos to structured scale.
                        </motion.p>

                        {/* CTAs */}
                        <motion.div
                            className="flex flex-col sm:flex-row items-center justify-end gap-4 pt-4"
                        >
                            <Link
                                href="#case-overview"
                                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-black text-white rounded-lg font-medium shadow-xl hover:bg-neutral-800 transition-all duration-300"
                            >
                                Case Study
                                <ArrowRight size={18} />
                            </Link>

                            <Link
                                href="#solutions"
                                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-transparent border border-black text-black rounded-lg font-medium hover:bg-gray-50 transition-all duration-300"
                            >
                                Solutions
                            </Link>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
