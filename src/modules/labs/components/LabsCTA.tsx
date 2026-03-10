'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { LABS_CTA } from '../content/labs';
import { ArrowRight } from 'lucide-react';
import { BlurVignette } from '@/components/ui/BlurVignette';
import GlassSurface from '@/components/ui/GlassSurface';

/**
 * LabsCTA — Cinematic & Refined
 * Parallax background, text reveal animations, and elegant serif headline.
 */
export function LabsCTA() {
    const sectionRef = useRef<HTMLElement>(null);

    // Scroll progress for both parallax and entrance animations
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ['start end', 'end start'],
    });

    // Subtler parallax for the image inside the card
    const imageY = useTransform(scrollYProgress, [0, 1], ['-15%', '15%']);
    const cardScale = useTransform(scrollYProgress, [0, 0.5], [0.95, 1]);
    const cardOpacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);

    return (
        <section
            ref={sectionRef}
            className="relative h-screen min-h-[600px] md:min-h-[800px] flex items-center justify-center bg-white overflow-hidden z-30 px-6"
        >
            <div className="w-full max-w-6xl relative z-10">
                {/* 3D Glass Card Container */}
                <motion.div
                    style={{ 
                        scale: cardScale,
                        opacity: cardOpacity,
                    }}
                    className="relative aspect-[16/10] md:aspect-[21/9] w-full bg-neutral-900 rounded-[40px] md:rounded-[80px] overflow-hidden border border-black/5 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.15),inset_0_1px_1px_rgba(255,255,255,0.4),inset_0_-1px_1px_rgba(0,0,0,0.1)] group"
                >
                    {/* Integrated Background within Card */}
                    <div className="absolute inset-0 z-0 overflow-hidden">
                        <motion.div
                            className="hidden md:block absolute inset-0 bg-cover bg-center transition-transform duration-700"
                            style={{ 
                                backgroundImage: 'url(/background/labs/Cta.jpeg)',
                                y: imageY,
                                scale: 1.1
                            }}
                        />
                         <motion.div
                            className="block md:hidden absolute inset-0 bg-cover bg-center transition-transform duration-700"
                            style={{ 
                                backgroundImage: 'url(/background/labs/Cta_Mobile.jpeg)',
                                y: imageY,
                                scale: 1.1
                            }}
                        />
                        {/* Subtle dark tint to ensure white text readability without blurring/frosting */}
                        <div className="absolute inset-0 bg-black/30" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                    </div>

                    {/* Card Content */}
                    <div className="relative z-10 h-full flex flex-col items-center justify-center p-8 md:p-16 text-center">
                        {/* Floating "new moment" style tag */}
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2, duration: 0.8 }}
                            className="mb-8"
                        >
                            <div className="px-5 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-md shadow-lg">
                                <span className="text-[10px] md:text-xs font-semibold text-white tracking-[0.2em] uppercase">
                                    {LABS_CTA.tag || "The Lab Process"}
                                </span>
                            </div>
                        </motion.div>

                        {/* Centered Transformation Narrative */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4, duration: 1 }}
                            className="max-w-3xl"
                        >
                            <h2 
                                className="text-3xl md:text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight"
                                style={{ fontFamily: 'Playfair Display, serif' }}
                            >
                                Where Ideas <br className="hidden md:block" /> <em>Become</em> Reality.
                            </h2>
                            <p className="text-neutral-300 text-sm md:text-xl font-light mb-10 max-w-xl mx-auto leading-relaxed">
                                In the Lab, ideas aren't just explored — they evolve into experiences.
                            </p>
                        </motion.div>

                        {/* CTA Button */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.6, duration: 0.8 }}
                        >
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.98 }}
                                className="px-8 py-3 rounded-full bg-white text-black font-bold text-sm md:text-base transition-colors hover:bg-neutral-200 flex items-center gap-3"
                            >
                                {LABS_CTA.primaryCTA}
                                <ArrowRight size={18} />
                            </motion.button>
                        </motion.div>
                    </div>

                    {/* Inner highlight ring */}
                    <div className="absolute inset-0 rounded-[inherit] pointer-events-none border-[1.5px] border-white/5 opacity-50 z-20" />
                </motion.div>
            </div>
        </section>
    );
}
