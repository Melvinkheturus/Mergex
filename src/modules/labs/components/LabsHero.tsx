'use client';

import { motion } from 'framer-motion';
import { LABS_HERO } from '../content/labs';

/**
 * LabsHero - Cinematic hero for AI Content Studio
 * Features: Video background support, poetic headline, minimal UI
 */
export function LabsHero() {
    return (
        <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-purple-50 via-pink-50 to-white selection:bg-purple-100">
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
            <div className="relative z-10 container mx-auto px-6 md:px-12 py-32 md:py-40">
                <div className="max-w-5xl mx-auto text-center">
                    {/* Main Headline - Poetic */}
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.3 }}
                        className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold font-display mb-8 leading-tight"
                    >
                        {LABS_HERO.headline.split('\n').map((line, index) => (
                            <span key={index} className="block">
                                {index === 0 ? (
                                    <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 bg-clip-text text-transparent">
                                        {line}
                                    </span>
                                ) : (
                                    <span className="text-foreground">{line}</span>
                                )}
                            </span>
                        ))}
                    </motion.h1>

                    {/* Subheadline - Grounded */}
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.6 }}
                        className="text-xl md:text-2xl text-foreground-muted max-w-3xl mx-auto leading-relaxed"
                    >
                        {LABS_HERO.subheadline}
                    </motion.p>
                </div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1.5 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20"
            >
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="w-6 h-10 border-2 border-purple-300 rounded-full flex items-start justify-center p-2"
                >
                    <div className="w-1.5 h-1.5 bg-purple-400 rounded-full" />
                </motion.div>
            </motion.div>
        </section>
    );
}
