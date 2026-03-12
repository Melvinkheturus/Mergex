'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

import { NeonOrbs } from '@/components/ui/neon-orbs';

/**
 * HeroSection - The "Architecture" style hero
 */
export function HeroSection() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    });

    const yTransform = useTransform(scrollYProgress, [0, 1], [0, -100]);
    const opacityTransform = useTransform(scrollYProgress, [0, 0.5], [0.03, 0]);

    return (
        <section className="relative sticky top-0 h-screen overflow-hidden z-0">
            <NeonOrbs className="flex flex-col items-center justify-center py-20 px-4 md:px-10 lg:px-16 h-full">
            <div ref={containerRef} className="absolute inset-0 pointer-events-none" />
            
            {/* Background Ghost Word */}
            <motion.div
                style={{ 
                    y: yTransform,
                    opacity: opacityTransform,
                    fontFamily: '"Outfit", system-ui, sans-serif',
                }}
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-[25vh] font-black text-neutral-950 select-none pointer-events-none z-0 tracking-[-0.05em] leading-none whitespace-nowrap"
            >
                ABOUT
            </motion.div>
            
            <div className="relative z-10 w-full max-w-7xl flex flex-col items-center text-center pt-32 md:pt-48 pb-10">
                
                {/* 1. Focused Content Area */}
                <div className="flex flex-col items-center">
                    
                    {/* Eyebrow badge */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="mb-8 flex items-center justify-center gap-2"
                    >
                        <span className="h-[1px] w-6 bg-violet-600/30"></span>
                        <span className="bg-gradient-to-b from-violet-400 to-violet-800 bg-clip-text text-transparent font-semibold tracking-[0.2em] text-[10px] md:text-xs uppercase inline-block">
                            One system. Zero friction.
                        </span>
                        <span className="h-[1px] w-6 bg-violet-600/30"></span>
                    </motion.div>

                    {/* Main Headline */}
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
                        className="mb-10 max-w-3xl"
                    >
                        <span className="block font-sans font-semibold text-[clamp(1.5rem,4.5vw,2.75rem)] text-gray-900 leading-[1.2] mb-2">
                            Architecting Modern Businesses
                        </span>
                        <span className="block font-sans font-medium text-[clamp(1.25rem,4vw,2.5rem)] bg-gradient-to-b from-violet-400 to-violet-800 bg-clip-text text-transparent italic leading-[1.2]" style={{ fontFamily: 'var(--font-playfair)' }}>
                            for the AI Era
                        </span>
                    </motion.h1>

                    {/* Supporting copy */}
                    <div className="max-w-3xl space-y-8">
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.5 }}
                            className="text-base md:text-lg lg:text-xl text-gray-700 leading-relaxed font-normal max-w-4xl mx-auto"
                        >
                            Mergex is a Business Architecture company. We design the scalable systems and infrastructure that allow modern organizations to evolve at the speed of AI.
                        </motion.p>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.6 }}
                            className="text-sm md:text-base text-gray-500 leading-relaxed max-w-xl mx-auto"
                        >
                            We translate strategy into operational infrastructure combining <strong className="text-gray-900 font-semibold">systems design, automation, and AI workflows</strong> into one unified engine of growth.
                        </motion.p>
                    </div>

                </div>
            </div>
        </NeonOrbs>
    </section>
    );
}
