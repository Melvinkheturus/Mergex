'use client';

import { motion } from 'framer-motion';
import ImageTrail from '../../../components/ImageTrail';
import { LABS_HERO } from '../content/labs';

/**
 * LabsHero - Cinematic hero for AI Content Studio
 * Features: Video background support, poetic headline, minimal UI
 */
export function LabsHero() {
    return (
        <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-purple-50 via-pink-50 to-white selection:bg-purple-100">
            {/* Image Trail - Interactive Layer */}
            <div className="absolute inset-0 z-[50] opacity-60">
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

            {/* Creative Background */}
            <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                {/* Gradient Mesh - More vibrant for Labs */}
                <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-purple-300/40 rounded-full blur-[150px] mix-blend-multiply animate-float" />
                <div className="absolute top-[-10%] right-[-15%] w-[55%] h-[55%] bg-pink-300/40 rounded-full blur-[150px] mix-blend-multiply animate-float" style={{ animationDelay: '2s' }} />
                <div className="absolute bottom-[-15%] left-[25%] w-[50%] h-[50%] bg-indigo-200/40 rounded-full blur-[150px] mix-blend-multiply animate-float" style={{ animationDelay: '4s' }} />

                {/* Central Glow */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.9)_0%,rgba(255,255,255,0)_100%)] z-10" />

                {/* Texture */}
                <div className="absolute inset-0 opacity-[0.3] mix-blend-overlay z-0" style={{ backgroundImage: 'url("/noise.png")' }} />
            </div>

            {/* Content Container */}
            <div className="relative z-10 container mx-auto px-6 md:px-12 py-32 md:py-40 pointer-events-none">
                <div className="max-w-4xl mx-auto text-center">
                    {/* Eyebrow */}
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-sm md:text-base text-gray-600 tracking-wide mb-6"
                    >
                        {LABS_HERO.eyebrow}
                    </motion.p>

                    {/* Main Headline */}
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.3 }}
                        className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight text-gray-900"
                        style={{ fontFamily: 'var(--font-manrope)' }}
                    >
                        Where{' '}
                        <span
                            className="font-serif italic font-normal relative z-10"
                            style={{ fontFamily: 'var(--font-playfair)' }}
                        >
                            creativity
                        </span>{' '}
                        meets intelligence.
                    </motion.h1>

                    {/* Supporting Line */}
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed mb-6"
                    >
                        {LABS_HERO.supportingLine}
                    </motion.p>

                    {/* Reinforcement Line */}
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.7 }}
                        className="text-base md:text-lg text-gray-600 italic max-w-2xl mx-auto mb-10"
                    >
                        {LABS_HERO.reinforcementLine}
                    </motion.p>

                    {/* CTAs */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.9 }}
                        className="flex flex-col sm:flex-row gap-4 justify-center mb-8"
                    >
                        <a
                            href={LABS_HERO.primaryCTA.href}
                            className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-b from-purple-500 to-purple-700 text-white rounded-full font-medium shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 pointer-events-auto"
                        >
                            {LABS_HERO.primaryCTA.text}
                        </a>
                        <a
                            href={LABS_HERO.secondaryCTA.href}
                            className="inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-gray-300 text-gray-900 rounded-full font-medium hover:bg-gray-50 transition-all duration-300 pointer-events-auto"
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
