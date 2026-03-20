'use client';
 
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { TextReveal } from '@/modules/shared/components/TextReveal';

/**
 * ProblemSection - Problem Reframing
 */
export function ProblemSection() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "center center"]
    });

    const scale = useTransform(scrollYProgress, [0, 1], [1.02, 0.92]);

    return (
        <section ref={containerRef} className="relative z-20 bg-linear-to-b from-transparent via-white via-20% to-white pt-0 pb-20 md:pb-32 overflow-hidden">
            <motion.div 
                style={{ scale }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                className="container-fluid mx-auto px-4 md:px-8 lg:px-12 max-w-[1600px] relative z-10 bg-neutral-950 rounded-[2rem] md:rounded-[2.5rem] py-20 md:py-32 overflow-hidden shadow-2xl border border-white/5 origin-top"
            >
                {/* Background Texture/Glow */}
                <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
                    <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-violet-600/10 blur-[120px]" />
                    <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-600/5 blur-[120px]" />
                </div>
 
                <div className="relative z-10">
                    {/* Header Row */}
                    <div className="mb-16 md:mb-24">
                        <TextReveal delay={0.1}>
                            <span className="inline-block text-[10px] font-bold tracking-[0.3em] uppercase text-neutral-500 mb-4">
                                Why MergeX
                            </span>
                        </TextReveal>
                        <div className="max-w-5xl">
                            <TextReveal delay={0.2} duration={1.6}>
                                <h2 className="text-3xl md:text-5xl font-bold text-white leading-[1.2] tracking-tight" style={{ fontFamily: 'var(--font-playfair)' }}>
                                    Most businesses don&apos;t fail because of bad ideas. 
                                    <span className="block italic font-medium text-violet-500 mt-2">They fail because of broken execution.</span>
                                </h2>
                            </TextReveal>
                        </div>
                    </div>

                    {/* Main Asymmetric Grid - Top Row (2 Columns) */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mb-24">
                        
                        {/* Column 1: Founder Insight */}
                        <div className="lg:col-span-7 flex flex-col justify-between py-2">
                            <motion.div
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.3 }}
                            >
                                <span className="block text-violet-400 text-[10px] font-bold tracking-[0.3em] uppercase mb-6 underline underline-offset-8 decoration-violet-500/30">
                                    The insight behind MergeX
                                </span>
                                <div className="space-y-8 max-w-2xl">
                                    <p className="text-xl md:text-2xl text-neutral-200 leading-snug font-light tracking-tight">
                                        After years in development, branding, and marketing, we noticed a persistent pattern - every domain used different tools and different language, while chasing exactly the same outcome.
                                    </p>
                                    <p className="text-white font-medium italic text-2xl md:text-3xl" style={{ fontFamily: 'var(--font-playfair)' }}>
                                        &ldquo;Grow the business. Build the brand. Scale.&rdquo;
                                    </p>
                                    <p className="text-neutral-400 leading-relaxed font-light text-lg">
                                        So why were businesses paying five separate vendors to reach one goal? That question is why Mergex exists.
                                    </p>
                                </div>
                            </motion.div>
                            
                            <div className="mt-12">
                                <Link 
                                    href="#founders-insight"
                                    className="inline-flex items-center gap-4 text-xs font-bold text-white group"
                                >
                                    <span className="px-6 py-2.5 rounded-full border border-neutral-800 hover:bg-white hover:text-black transition-all duration-300 uppercase tracking-widest scroll-smooth">
                                        Read the full story
                                    </span>
                                    <span className="text-xl group-hover:translate-x-2 transition-transform duration-300">→</span>
                                </Link>
                            </div>
                        </div>

                        {/* Column 2: The Call to Action Card */}
                        <div className="lg:col-span-5">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 1, ease: [0.165, 0.84, 0.44, 1] }}
                                className="h-full bg-white rounded-[2.5rem] p-10 md:p-14 text-black flex flex-col justify-between group overflow-hidden relative shadow-2xl"
                            >
                                <div className="relative z-10">
                                    <h3 className="text-3xl md:text-4xl font-bold mb-8 leading-tight">
                                        Let&apos;s build your <br />
                                        <span className="text-violet-600 italic font-medium" style={{ fontFamily: 'var(--font-playfair)' }}>system - together.</span>
                                    </h3>
                                    <p className="text-neutral-600 font-normal leading-relaxed mb-10 max-w-sm">
                                        Most businesses juggle five vendors to do the work one unified team could handle end-to-end. Mergex becomes that team - one system, one partner, one accountable outcome.
                                    </p>
                                </div>

                                <div className="relative z-10">
                                    <Link 
                                        href="/contact"
                                        className="group/btn relative inline-flex items-center px-10 py-5 bg-black text-white font-bold rounded-full overflow-hidden transition-all hover:pr-14 active:scale-95 text-sm"
                                    >
                                        <span className="relative z-10">Start a conversation</span>
                                        <div className="absolute top-1/2 -translate-y-1/2 right-6 opacity-0 group-hover/btn:opacity-100 transition-all">
                                            →
                                        </div>
                                    </Link>
                                </div>
                            </motion.div>
                        </div>
                    </div>

                    {/* Bottom Row - The Formula Story (3 Columns) */}
                    {/* Integrated Definition Block - Horizontal Alignment without Card */}
                    <div className="mt-32 max-w-5xl mx-auto px-4 relative">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, ease: [0.165, 0.84, 0.44, 1] }}
                            className="flex flex-col md:flex-row items-center gap-12 lg:gap-20"
                        >
                            <div className="flex-1 text-left">
                                <h3 className="text-violet-500/80 text-[10px] font-bold tracking-[0.4em] uppercase mb-6 leading-none">
                                    What is MergeX?
                                </h3>
                                <p className="text-lg md:text-xl lg:text-3xl text-neutral-100 font-light leading-relaxed tracking-tight">
                                    A unified technology and growth system designed to replace the fragmented ecosystem of vendors, tools, and agencies that holds modern businesses back. 
                                    <span className="text-neutral-500 block mt-4 text-base md:text-lg lg:text-xl font-medium tracking-normal">One partner. One system. One outcome.</span>
                                </p>
                                
                                <div className="flex items-center gap-4 text-neutral-800 mt-10">
                                    <div className="w-8 h-px bg-neutral-900" />
                                    <span className="text-[10px] font-bold tracking-[0.4em] uppercase italic text-neutral-600">clarity from chaos</span>
                                </div>
                            </div>
                            
                            <div className="w-32 md:w-48 lg:w-64 shrink-0 flex items-center justify-center pointer-events-none">
                                <Image 
                                    src="/logo/mergex-logo.png" 
                                    alt="Mergex Logo" 
                                    width={250} 
                                    height={250}
                                    className="w-full h-auto object-contain"
                                />
                            </div>
                        </motion.div>
                    </div>
                </div>

            </motion.div>
        </section>
    );
}
