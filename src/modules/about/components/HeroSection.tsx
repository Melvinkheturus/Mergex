'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { Outfit } from 'next/font/google';

const outfit = Outfit({
    subsets: ['latin'],
    display: 'swap',
});

import { useRef } from 'react';

import { NeonOrbs } from '@/components/ui/neon-orbs';
import { TextReveal } from '@/modules/shared/components/TextReveal';

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
        <section className="sticky top-0 h-screen overflow-hidden z-0 bg-white">
            <NeonOrbs className="flex flex-col items-center justify-center py-20 px-4 md:px-10 lg:px-16 h-full">
            <div ref={containerRef} className="absolute inset-0 pointer-events-none" />
            
            {/* Background Ghost Word */}
            <motion.div
                style={{ 
                    y: yTransform,
                    opacity: opacityTransform,
                    fontFamily: outfit.style.fontFamily,

                }}
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-[25vh] font-black text-neutral-950 select-none pointer-events-none z-0 tracking-[-0.05em] leading-none whitespace-nowrap"
            >
                ABOUT
            </motion.div>
            
            <div className="relative z-10 w-full max-w-7xl flex flex-col items-center text-center pt-32 md:pt-48 pb-10">
                
                {/* 1. Focused Content Area */}
                <div className="flex flex-col items-center">
                    
                    {/* Eyebrow badge */}
                    <TextReveal delay={0.2}>
                        <div className="mb-8 flex items-center justify-center gap-2">
                            <span className="h-px w-6 bg-violet-600/30"></span>
                            <span className="bg-linear-to-b from-violet-400 to-violet-800 bg-clip-text text-transparent font-semibold tracking-[0.2em] text-[10px] md:text-xs uppercase inline-block">
                                ONE SYSTEM. ZERO FRICTION.
                            </span>
                            <span className="h-px w-6 bg-violet-600/30"></span>
                        </div>
                    </TextReveal>

                    {/* Main Headline */}
                    <div className="mb-10 max-w-3xl">
                        <TextReveal delay={0.3} duration={1.6}>
                            <h1 className="font-sans font-semibold text-[clamp(1.5rem,4.5vw,2.75rem)] text-gray-900 leading-[1.2] mb-2">
                                We exist so ambitious businesses
                            </h1>
                        </TextReveal>
                        <TextReveal delay={0.5} duration={1.6}>
                            <span className="block font-sans font-medium text-[clamp(1.25rem,4vw,2.5rem)] bg-linear-to-b from-violet-400 to-violet-800 bg-clip-text text-transparent italic leading-[1.2]" style={{ fontFamily: 'var(--font-playfair)' }}>
                                never outgrow their execution.
                            </span>
                        </TextReveal>
                    </div>

                    {/* Supporting copy */}
                    <div className="max-w-3xl space-y-8">
                        <TextReveal delay={0.7} duration={1.2}>
                            <p className="text-base md:text-lg lg:text-xl text-gray-700 leading-relaxed font-normal max-w-4xl mx-auto">
                                Mergex builds the systems behind modern businesses - integrating software, automation, AI, and growth infrastructure into one unified foundation so founders stop managing vendors and start building what matters.
                            </p>
                        </TextReveal>

                        <TextReveal delay={0.8} duration={1.2}>
                            <p className="text-sm md:text-base text-gray-500 leading-relaxed max-w-xl mx-auto">
                                We work across development, AI, branding, and growth - not as separate services, but as one aligned system with one accountable team behind it.
                            </p>
                        </TextReveal>
                    </div>

                </div>
            </div>
        </NeonOrbs>
    </section>
    );
}
