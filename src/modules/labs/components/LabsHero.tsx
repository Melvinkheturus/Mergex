'use client';

import { motion } from 'framer-motion';
import ImageTrail from '../../../components/ImageTrail';
import Image from 'next/image';
import { LABS_HERO } from '../content/labs';

/**
 * LabsHero - Cinematic hero for AI Content Studio
 * Features: Video background support, poetic headline, minimal UI
 */
export function LabsHero() {
    return (
        <section className="relative min-h-screen flex items-center overflow-hidden selection:bg-purple-100">
            {/* Full Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/assets/background/Labs-hero.jpeg"
                    alt="Labs Hero Background"
                    fill
                    className="object-cover"
                    priority
                />
                {/* Overlay for text readability */}
                {/* Overlay removed as requested */}

                {/* Gradient Mesh Overlay - Kept subtle for depth */}
                <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-purple-300/30 rounded-full blur-[150px] mix-blend-multiply animate-float" />
                <div className="absolute bottom-[-15%] right-[-10%] w-[50%] h-[50%] bg-indigo-200/30 rounded-full blur-[150px] mix-blend-multiply animate-float" style={{ animationDelay: '4s' }} />

                {/* Texture */}
                <div className="absolute inset-0 opacity-[0.3] mix-blend-overlay" style={{ backgroundImage: 'url("/noise.png")' }} />
            </div>

            {/* Image Trail - Interactive Layer */}
            <div className="absolute inset-0 z-[50] opacity-60 pointer-events-none">
                <ImageTrail
                    variant={4}
                    items={[
                        '/assets/mockups/Gemini_Generated_Image_m6ev2fm6ev2fm6ev.png',
                        '/assets/mockups/Gemini_Generated_Image_p2gmifp2gmifp2gm.png',
                        '/assets/mockups/WhatsApp Image 2026-02-05 at 12.11.55 AM.jpeg',
                        '/assets/mockups/WhatsApp Image 2026-02-05 at 12.12.28 AM.jpeg'
                    ]}
                />
            </div>

            {/* Content Container */}
            <div className="relative z-10 container mx-auto px-6 md:px-12 py-20 md:py-32 pointer-events-none">
                <div className="max-w-4xl mx-auto text-center">
                    {/* Eyebrow Group */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="mb-8"
                    >
                        <p className="text-sm md:text-base text-gray-600 tracking-widest font-semibold uppercase mb-1">
                            {LABS_HERO.eyebrow}
                        </p>
                        <p className="text-xs md:text-sm text-gray-500 tracking-wide font-medium uppercase">
                            {LABS_HERO.subEyebrow}
                        </p>
                    </motion.div>

                    {/* Main Headline */}
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.3 }}
                        className="text-5xl md:text-6xl lg:text-8xl font-bold mb-10 leading-tight text-gray-900"
                        style={{ fontFamily: 'var(--font-manrope)' }}
                    >
                        Create at the{' '}
                        <span
                            className="font-serif italic font-normal relative z-10"
                            style={{ fontFamily: 'var(--font-playfair)' }}
                        >
                            Speed
                        </span>{' '}
                        of Imagination.
                    </motion.h1>

                    {/* Supporting Line */}
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8 max-w-3xl mx-auto font-medium"
                    >
                        {LABS_HERO.supportingLine}
                    </motion.p>

                    {/* Reinforcement Line */}
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.7 }}
                        className="text-base md:text-lg text-gray-600 italic mb-12 font-medium"
                    >
                        {LABS_HERO.reinforcementLine}
                    </motion.p>

                    {/* CTAs */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.9 }}
                        className="flex flex-col sm:flex-row gap-6 justify-center mb-8"
                    >
                        <a
                            href={LABS_HERO.primaryCTA.href}
                            className="inline-flex items-center justify-center px-10 py-4 bg-gray-900 text-white rounded-full font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 pointer-events-auto"
                        >
                            {LABS_HERO.primaryCTA.text}
                        </a>
                        <a
                            href={LABS_HERO.secondaryCTA.href}
                            className="inline-flex items-center justify-center px-10 py-4 bg-white/80 backdrop-blur-md border border-gray-200 text-gray-900 rounded-full font-semibold hover:bg-white transition-all duration-300 pointer-events-auto"
                        >
                            {LABS_HERO.secondaryCTA.text}
                        </a>
                    </motion.div>

                    {/* Micro-copy */}
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 1.1 }}
                        className="text-sm text-gray-500 italic"
                    >
                        {LABS_HERO.microcopy}
                    </motion.p>
                </div>
            </div>
        </section>
    );
}
