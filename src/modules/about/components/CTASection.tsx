'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { BlurVignette } from '@/components/ui/BlurVignette';

/**
 * CTASection - Cinematic Directional Conversion
 */
export function CTASection() {
    const containerRef = useRef<HTMLElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "center center"]
    });

    const imageY = useTransform(scrollYProgress, [0, 1], ['-15%', '15%']);
    const cardScale = useTransform(scrollYProgress, [0, 1], [0.92, 1]);
    const cardOpacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);

    return (
        <section 
            ref={containerRef} 
            className="relative h-screen min-h-[850px] bg-gradient-to-t from-transparent via-white via-20% to-white flex items-center justify-center overflow-hidden z-30 px-6 py-20 pb-0"
        >
            <div className="w-full max-w-7xl relative z-10">
                {/* 3D Glass Card Container - Increased size & impact */}
                <motion.div
                    style={{ 
                        scale: cardScale,
                        opacity: cardOpacity,
                        boxShadow: `
                            0 40px 60px rgba(0,0,0,0.5),
                            inset 0px 4px 12px rgba(255,255,255,0.7),
                            inset 0px -6px 16px rgba(0,0,0,0.5),
                            inset 4px 0px 12px rgba(255,255,255,0.3),
                            inset -4px 0px 12px rgba(0,0,0,0.3)
                        `
                    }}
                    className="relative aspect-[3/4] md:aspect-[21/10] w-full bg-neutral-900 rounded-[2rem] md:rounded-[2.5rem] overflow-hidden group origin-bottom"
                >
                    {/* Integrated Background within Card - Enhanced Parallax */}
                    <div className="absolute inset-0 z-0 h-full w-full overflow-hidden">
                        <motion.div
                            className="absolute inset-0 bg-cover bg-center transition-transform duration-700"
                            style={{ 
                                backgroundImage: `url(/background/parent/about_cta.jpeg)`,
                                y: useTransform(scrollYProgress, [0, 1], ['-15%', '15%']),
                                scale: 1.15
                            }}
                        />
                    </div>

                    {/* Integrated Edge Blur softening */}
                    <BlurVignette 
                        radius="40px" 
                        inset="0px" 
                        transitionLength="140px" 
                        blur="30px" 
                        className="absolute inset-0 z-10 pointer-events-none"
                    />

                    {/* Glass Overlay */}
                    <div 
                        className="absolute inset-0 z-10 border border-white/20 pointer-events-none"
                        style={{
                            background: `radial-gradient(
                                circle at 50% 0%, 
                                rgba(255, 255, 255, 0.15) 0%, 
                                transparent 50%
                            )`,
                            borderBottomColor: 'rgba(255, 255, 255, 0.05)'
                        }}
                    />
                    
                    {/* Additional Tints - Darker for strategic feel */}
                    <div className="absolute inset-0 z-10 bg-black/50" />
                    <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                    {/* Card Content */}
                    <div className="relative z-20 h-full flex flex-col items-center justify-center p-8 md:p-12 text-center">
                        {/* Tag */}
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2, duration: 0.8 }}
                            className="mb-6 md:mb-8"
                        >
                            <div className="mx-auto px-4 py-1.5 rounded-full bg-white/5 border border-white/15 backdrop-blur-md shadow-lg flex items-center justify-center">
                                <span className="text-[9px] md:text-[10px] font-bold text-white/70 tracking-[0.4em] uppercase">
                                    Strategic Direction
                                </span>
                            </div>
                        </motion.div>

                        {/* Headline */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4, duration: 1 }}
                            className="max-w-3xl"
                        >
                            <h2 
                                className="text-3xl md:text-5xl lg:text-5xl font-bold text-white mb-6 md:mb-8 leading-[1.1] tracking-tight"
                                style={{ fontFamily: 'var(--font-playfair)' }}
                            >
                                Build the System <br className="hidden md:block" />
                                <span className="italic font-medium">Behind</span> Your Business.
                            </h2>
                            <p className="text-neutral-400 text-xs md:text-sm font-light mb-10 max-w-xl mx-auto leading-relaxed">
                                Business scale is an <span className="text-white font-normal">architectural challenge</span>. <br className="hidden md:block" />
                                Let’s design the system that connects yours.
                            </p>
                        </motion.div>

                        {/* Simplified CTAs for focus */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.98 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.6, duration: 1 }}
                            className="flex flex-col md:flex-row gap-3 md:gap-4"
                        >
                            <Link
                                href="/systems"
                                className="px-6 md:px-8 py-3 rounded-full bg-white text-black font-bold text-xs md:text-sm flex items-center justify-center gap-2 transition-transform active:scale-95 group"
                            >
                                See How Mergex Systems Works
                                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                            </Link>
                            
                            <Link
                                href="/contact"
                                className="px-6 md:px-8 py-3 rounded-full bg-white/5 border border-white/10 text-white font-bold text-xs md:text-sm backdrop-blur-md transition-all hover:bg-white/10 active:scale-95 text-center"
                            >
                                Talk to Our Team
                            </Link>
                        </motion.div>
                    </div>

                    {/* Subtle inner detailing */}
                    <div className="absolute inset-0 rounded-[inherit] pointer-events-none border border-white/10 opacity-30 z-20" />
                </motion.div>
            </div>
        </section>
    );
}
