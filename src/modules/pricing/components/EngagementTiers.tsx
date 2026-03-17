'use client';

import { useRef } from 'react';
import { Check, ArrowRight } from 'lucide-react';
import { ENGAGEMENT_TIERS } from '../content/pricing';
import { motion, useScroll, useTransform } from 'framer-motion';

export function EngagementTiers() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    // Updated Ranges: [Start, End] of transitions
    // T1 -> T2: 0.30 - 0.45
    // T2 -> T3: 0.65 - 0.80

    // Left Content Animations
    const leftOpacity0 = useTransform(scrollYProgress, [0, 0.3, 0.45], [1, 1, 0]);
    const leftY0 = useTransform(scrollYProgress, [0.3, 0.45], [0, -40]);
    const leftBlur0 = useTransform(scrollYProgress, [0.3, 0.45], ["blur(0px)", "blur(10px)"]);

    const leftOpacity1 = useTransform(scrollYProgress, [0.3, 0.45, 0.65, 0.8], [0, 1, 1, 0]);
    const leftY1 = useTransform(scrollYProgress, [0.3, 0.45, 0.65, 0.8], [40, 0, 0, -40]);
    const leftBlur1 = useTransform(scrollYProgress, [0.3, 0.45, 0.65, 0.8], ["blur(10px)", "blur(0px)", "blur(0px)", "blur(10px)"]);

    const leftOpacity2 = useTransform(scrollYProgress, [0.65, 0.8], [0, 1]);
    const leftY2 = useTransform(scrollYProgress, [0.65, 0.8], [40, 0]);
    const leftBlur2 = useTransform(scrollYProgress, [0.65, 0.8], ["blur(10px)", "blur(0px)"]);

    // Right Card Animations (Sliding synchronized)
    const rightY0 = useTransform(scrollYProgress, [0, 0.3, 0.45], ["0%", "0%", "-100%"]);
    const rightY1 = useTransform(scrollYProgress, [0, 0.3, 0.45, 0.65, 0.8], ["100%", "100%", "0%", "0%", "-100%"]);
    const rightY2 = useTransform(scrollYProgress, [0, 0.65, 0.8], ["100%", "100%", "0%"]);

    // Outer Card Background/Border Animation (Aligned with T2 -> T3 transition)
    const cardBg = useTransform(
        scrollYProgress,
        [0.65, 0.8],
        ["#ffffff", "rgba(250, 245, 255, 1)"]
    );
    const cardBorder = useTransform(
        scrollYProgress,
        [0.65, 0.8],
        ["#f3f4f6", "#e9d5ff"]
    );
    const cardGradient = useTransform(
        scrollYProgress,
        [0.65, 0.8],
        [
            "linear-gradient(to bottom right, #ffffff, #ffffff)",
            "linear-gradient(to bottom right, #ffffff, #faf5ff, #f3e8ff)"
        ]
    );

    const leftContents = [
        { opacity: leftOpacity0, y: leftY0, filter: leftBlur0 },
        { opacity: leftOpacity1, y: leftY1, filter: leftBlur1 },
        { opacity: leftOpacity2, y: leftY2, filter: leftBlur2 }
    ];

    const rightCards = [rightY0, rightY1, rightY2];

    return (
        <section ref={containerRef} className="relative h-[400vh] bg-white pb-32">
            {/* Header: Static at the top of the section */}
            <div className="container relative mx-auto max-w-6xl px-6 pt-24 mb-12">
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center"
                >
                    <h2 className="mb-4 text-4xl lg:text-5xl font-display font-medium text-gray-900 tracking-tight">
                        Pricing
                    </h2>
                    <p className="mx-auto max-w-2xl text-base text-gray-600 leading-relaxed font-light">
                        {ENGAGEMENT_TIERS.subheadline}
                    </p>
                </motion.div>
            </div>

            <div className="sticky top-0 h-screen flex items-center">
                <div className="container relative mx-auto max-w-6xl px-6">
                    {/* Single Card Container */}
                    <motion.div 
                        className="group relative overflow-hidden rounded-3xl border border-neutral-100 bg-white shadow-[0_20px_50px_rgba(0,0,0,0.1)] min-h-[550px] transition-all duration-500"
                    >
                        {/* 3D Inner Polish Shadows for the main container */}
                        <div className="absolute inset-0 rounded-3xl pointer-events-none shadow-[inset_1px_1px_2px_rgba(255,255,255,0.8),inset_-1px_-1px_2px_rgba(139,92,246,0.02)] z-20" />
                        
                        <div className="flex flex-col lg:flex-row min-h-[550px] relative z-10">
                            {/* Left Side: Dynamic Text Content */}
                            <div className="flex-1 relative order-2 lg:order-1">
                                {ENGAGEMENT_TIERS.tiers.map((tier, index) => (
                                    <motion.div
                                        key={tier.name}
                                        style={leftContents[index]}
                                        className="absolute inset-0 p-8 lg:p-12 flex flex-col justify-between"
                                    >
                                        <div>
                                            <div className="flex items-center gap-3 mb-8">
                                                <div className={`h-1.5 w-10 rounded-full ${tier.name === 'Growth Partnership' ? 'bg-purple-600' : 'bg-gray-300'}`} />
                                                <h3 className="text-xs font-bold uppercase tracking-widest text-gray-400">{tier.name}</h3>
                                            </div>
                                            
                                            <div className="mb-6">
                                                <div className="text-4xl lg:text-5xl font-display font-medium tracking-tight mb-4 text-gray-900 leading-none">
                                                    {tier.name === 'Project Model' ? 'Fixed' : tier.name === 'Retainer Model' ? 'Flexible' : 'Custom'}
                                                </div>
                                                <p className="text-sm max-w-xs leading-relaxed text-gray-500 font-light">
                                                    {tier.tagline}. Best for {tier.bestFor}
                                                </p>
                                            </div>
                                        </div>

                                        <div className="mt-8">
                                            <a
                                                href="#contact"
                                                className={`inline-flex items-center justify-center gap-2 rounded-xl px-8 py-4 text-sm font-bold transition-all duration-300 hover:scale-[1.02] active:scale-95 ${
                                                    tier.name === 'Growth Partnership'
                                                    ? 'bg-purple-600 text-white shadow-lg shadow-purple-200 hover:bg-purple-700'
                                                    : 'bg-gray-900 text-white shadow-lg shadow-gray-200 hover:bg-black'
                                                }`}
                                            >
                                                <span>{tier.name === 'Growth Partnership' ? 'Discuss Partnership' : 'Get started'}</span>
                                                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                                            </a>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>

                            {/* Right Side: Sliding Inner Cards */}
                            <div className="flex-1 relative overflow-hidden order-1 lg:order-2 bg-gray-50/10">
                                <div className="relative w-full h-full min-h-[500px]">
                                    {ENGAGEMENT_TIERS.tiers.map((tier, index) => (
                                        <motion.div
                                            key={tier.name + '-card'}
                                            style={{ y: rightCards[index] }}
                                            className="absolute inset-0 p-4 lg:p-7 flex items-stretch h-full"
                                        >
                                            <div className="bg-[#0a0a0a] rounded-3xl w-full p-6 lg:p-10 shadow-[20px_20px_60px_rgba(0,0,0,0.3)] relative overflow-hidden flex flex-col justify-center border border-white/5 group/inner transition-all duration-500 hover:scale-[1.01]">
                                                {/* 3D Inner Polish Shadows for the black card */}
                                                <div className="absolute inset-0 rounded-3xl pointer-events-none shadow-[inset_1px_1px_1px_rgba(255,255,255,0.1),inset_-1px_-1px_1px_rgba(0,0,0,0.5)] z-20" />

                                                {/* Decorative Elements */}
                                                <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 blur-[60px]" />
                                                
                                                <div className="relative z-10">
                                                    <p className="text-[10px] font-bold uppercase tracking-widest text-purple-400 mb-6 border-b border-white/10 pb-4">
                                                        What's included
                                                    </p>
                                                    
                                                    <ul className="space-y-3">
                                                        {tier.includes.map((item, i) => (
                                                            <li key={i} className="flex items-start gap-4 text-white/90">
                                                                <div className="mt-1 flex h-4 w-4 shrink-0 items-center justify-center rounded-lg bg-purple-600 text-white">
                                                                    <Check className="h-2.5 w-2.5" />
                                                                </div>
                                                                <span className="text-xs font-light leading-snug">{item}</span>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>

                                                {/* Subtler Hover Glow & 3D Inner Polish Overlay for the black card */}
                                                <div className="absolute inset-0 rounded-3xl opacity-0 group-hover/inner:opacity-100 transition-opacity duration-500 pointer-events-none shadow-[inset_0_0_20px_rgba(139,92,246,0.05),inset_0_0_0_1px_rgba(255,255,255,0.1)] z-30" />
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
            {/* Buffer to prevent following section from colliding with sticky ends */}
            <div className="h-32" />
        </section>
    );
}