'use client';
import { CLOUDINARY_ASSETS } from '@/lib/cloudinary';

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
                        boxShadow: `
                            0 20px 30px rgba(0,0,0,0.5),
                            inset 0px 4px 12px rgba(255,255,255,0.7),
                            inset 0px -6px 16px rgba(0,0,0,0.5),
                            inset 4px 0px 12px rgba(255,255,255,0.3),
                            inset -4px 0px 12px rgba(0,0,0,0.3)
                        `
                    }}
                    className="relative aspect-[16/10] md:aspect-[21/9] w-full bg-neutral-900 rounded-[3rem] md:rounded-[4rem] overflow-hidden group"
                >
                    {/* Integrated Background within Card */}
                    <div className="absolute inset-0 z-0 h-full w-full overflow-hidden">
                        <motion.div
                            className="hidden md:block absolute inset-0 bg-cover bg-center transition-transform duration-700"
                            style={{ 
                                backgroundImage: `url(${CLOUDINARY_ASSETS.labsCta}), url(/background/labs/Cta.jpeg)`,
                                y: imageY,
                                scale: 1.1
                            }}
                        />
                        <motion.div
                            className="block md:hidden absolute inset-0 bg-cover bg-center transition-transform duration-700"
                            style={{ 
                                backgroundImage: `url(${CLOUDINARY_ASSETS.labsCta}), url(/background/labs/Cta.jpeg)`,
                                y: imageY,
                                scale: 1.1
                            }}
                        />
                    </div>

                    {/* Integrated Edge Blur softening */}
                    <BlurVignette 
                        radius="40px" 
                        inset="0px" 
                        transitionLength="150px" 
                        blur="32px" 
                        className="absolute inset-0 z-10 pointer-events-none"
                    />

                    {/* The Crystal Clear 3D Glass Overlay */}
                    <div 
                        className="absolute inset-0 z-10 border border-white/40 pointer-events-none"
                        style={{
                            background: `radial-gradient(
                                circle at 50% 0%, 
                                rgba(255, 255, 255, 0.15) 0%, 
                                transparent 60%
                            )`,
                            borderBottomColor: 'rgba(255, 255, 255, 0.1)'
                        }}
                    />
                    
                    {/* Additional Tints */}
                    <div className="absolute inset-0 z-10 bg-black/20" />
                    <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

                    {/* Card Content */}
                    <div className="relative z-10 h-full flex flex-col items-center justify-center p-8 md:p-16 text-center">
                        {/* Floating "new moment" style tag */}
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2, duration: 0.8 }}
                            className="mb-8"
                        >
                            <div className="mx-auto px-5 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-md shadow-lg flex items-center justify-center">
                                <span className="text-[10px] md:text-xs font-semibold text-white tracking-[0.2em] uppercase">
                                    COLLABORATE
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
                                In the Lab, ideas aren't just explored they evolve into experiences.
                            </p>
                        </motion.div>

                        {/* CTA Button */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.6, duration: 0.8 }}
                        >
                            <button
                                className="px-8 py-3 rounded-full bg-white flex items-center gap-3 active:scale-95 transition-transform group mix-blend-screen"
                            >
                                <span className="font-bold text-sm md:text-base text-black">
                                    Let’s see what AI can do for you
                                </span>
                                <ArrowRight size={18} className="text-black" />
                            </button>
                        </motion.div>
                    </div>

                    {/* Inner highlight ring */}
                    <div className="absolute inset-0 rounded-[inherit] pointer-events-none border-[1.5px] border-white/5 opacity-50 z-20" />
                </motion.div>
            </div>
        </section>
    );
}
