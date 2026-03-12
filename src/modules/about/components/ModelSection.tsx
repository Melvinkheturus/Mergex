'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Link from 'next/link';
import { ArrowUpRight, Zap, Beaker } from 'lucide-react';

/**
 * ModelSection - The Mergex Ecosystem Model
 */
export function ModelSection() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const yTransform = useTransform(scrollYProgress, [0, 1], [-100, 100]);

    return (
        <section ref={containerRef} className="relative py-24 md:py-32 bg-white flex flex-col justify-center overflow-hidden min-h-screen">
            
            {/* Background Ghost Word */}
            <motion.div
                style={{ 
                    y: yTransform,
                    fontFamily: '"Outfit", system-ui, sans-serif',
                }}
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-[25vh] font-black text-neutral-900 opacity-[0.02] select-none pointer-events-none z-0 tracking-[-0.05em] leading-none whitespace-nowrap"
            >
                SYSTEMS
            </motion.div>

            <div className="container mx-auto px-6 md:px-12 lg:px-16 max-w-[1400px] relative z-10">
                
                {/* Section Header */}
                <div className="max-w-4xl mb-20 md:mb-32">
                    <motion.span
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="block text-violet-600 font-bold tracking-widest text-xs uppercase mb-6"
                    >
                        Our Ecosystem
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-4xl md:text-6xl lg:text-8xl font-semibold mb-8 leading-[1.05] tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-indigo-900 via-blue-600 to-indigo-400"
                    >
                        Stable Infrastructure. <br />
                        <span className="italic font-medium" style={{ fontFamily: 'var(--font-playfair)' }}>Advanced Innovation.</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-xl md:text-2xl text-gray-500 leading-relaxed max-w-2xl"
                    >
                        Mergex balances the need for robust, structural foundation with the necessity of cutting-edge innovation. 
                    </motion.p>
                </div>

                {/* The Model Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                    
                    {/* Left: Mergex Systems */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                        className="group relative"
                    >
                        <div className="bg-[#fcfcff] rounded-[3rem] p-10 md:p-16 h-full border border-gray-100 transition-all duration-700 hover:border-violet-200 hover:bg-white hover:shadow-[0_40px_100px_-20px_rgba(139,92,246,0.15)] overflow-hidden relative">
                            {/* Decorative background element */}
                            <div className="absolute top-0 right-0 w-64 h-64 bg-violet-100/20 blur-[100px] -mr-32 -mt-32 rounded-full group-hover:bg-violet-200/30 transition-colors duration-700"></div>

                            <div className="w-14 h-14 bg-violet-600 rounded-2xl flex items-center justify-center mb-10 text-white shadow-lg shadow-violet-200 group-hover:scale-110 transition-transform duration-500">
                                <Zap size={28} />
                            </div>
                            <h3 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-6 tracking-tight">Mergex Systems</h3>
                            <p className="text-xl text-gray-500 leading-relaxed mb-12">
                                The architectural engine. We design and implement <span className="text-gray-900 font-medium italic" style={{ fontFamily: 'var(--font-playfair)' }}>operational infrastructure</span> for businesses that require high-performance scale.
                            </p>
                            
                            <div className="space-y-5 mb-14">
                                {[
                                    "Business Architecture & Strategy",
                                    "Autonomous Operational Workflows",
                                    "Full-Stack Systems Engineering"
                                ].map((item) => (
                                    <div key={item} className="flex items-center gap-4 text-gray-700 font-medium group/item">
                                        <span className="w-2 h-2 rounded-full bg-violet-600 transition-transform group-hover/item:scale-150"></span>
                                        {item}
                                    </div>
                                ))}
                            </div>
                            
                            <Link 
                                href="/systems" 
                                className="inline-flex items-center gap-2 px-8 py-4 bg-violet-600 text-white rounded-full font-semibold text-lg hover:bg-violet-700 transition-all group/link"
                            >
                                Engineer Your System
                                <ArrowUpRight size={20} className="transition-transform group-hover/link:translate-x-1 group-hover/link:-translate-y-1" />
                            </Link>
                        </div>
                    </motion.div>

                    {/* Right: Mergex Labs */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="group relative"
                    >
                        <div className="bg-[#0a0a0f] rounded-[3rem] p-10 md:p-16 h-full transition-all duration-700 hover:shadow-[0_40px_100px_-20px_rgba(59,130,246,0.3)] relative overflow-hidden border border-white/5">
                            {/* Decorative background element */}
                            <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-600/10 blur-[100px] -ml-32 -mb-32 rounded-full group-hover:bg-blue-600/20 transition-colors duration-700"></div>

                            <div className="w-14 h-14 bg-blue-500 rounded-2xl flex items-center justify-center mb-10 text-white shadow-lg shadow-blue-900/40 group-hover:scale-110 transition-transform duration-500">
                                <Beaker size={28} />
                            </div>
                            <h3 className="text-4xl md:text-5xl font-semibold text-white mb-6 tracking-tight">Mergex Labs</h3>
                            <p className="text-xl text-blue-100/50 leading-relaxed mb-12 italic font-light" style={{ fontFamily: 'var(--font-playfair)' }}>
                                The research & innovation lab. We prototype AI-native interfaces and future-ready digital experiences.
                            </p>
                            
                            <div className="space-y-5 mb-14">
                                {[
                                    "Generative Design & AI R&D",
                                    "Interactive 3D & Spatial Web",
                                    "Emerging Tech Prototyping"
                                ].map((item) => (
                                    <div key={item} className="flex items-center gap-4 text-blue-100/70 font-medium group/item">
                                        <span className="w-2 h-2 rounded-full bg-blue-400 transition-transform group-hover/item:scale-150"></span>
                                        {item}
                                    </div>
                                ))}
                            </div>
                            
                            <Link 
                                href="/labs" 
                                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black hover:bg-gray-100 rounded-full font-semibold text-lg transition-all group/link"
                            >
                                Explore Research
                                <ArrowUpRight size={20} className="transition-transform group-hover/link:translate-x-1 group-hover/link:-translate-y-1" />
                            </Link>
                        </div>
                    </motion.div>

                </div>

            </div>
        </section>
    );
}
