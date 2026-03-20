'use client';

import { motion } from 'framer-motion';
import { Outfit } from 'next/font/google';
import { TextReveal } from '@/modules/shared/components/TextReveal';

const outfit = Outfit({
    subsets: ['latin'],
    display: 'swap',
});

export function FoundersInsight() {
    return (
        <section id="founders-insight" className="relative py-24 md:py-32 bg-white overflow-hidden">
            <div className="container mx-auto px-4 md:px-8 lg:px-12 max-w-7xl">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Left side: The Insight */}
                    <div className="max-w-xl">
                        <TextReveal delay={0.1}>
                            <span className="inline-block text-[10px] font-bold tracking-[0.3em] uppercase text-violet-600 mb-6">
                                The Founder&apos;s Insight
                            </span>
                        </TextReveal>
                        <TextReveal delay={0.2} duration={1.6}>
                            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 leading-[1.1] mb-8" style={{ fontFamily: outfit.style.fontFamily }}>
                                &ldquo;Scale is not a result of effort; it is a result of <span className="italic text-violet-600">Architecture</span>.&rdquo;
                            </h2>
                        </TextReveal>
                        <TextReveal delay={0.4}>
                            <p className="text-lg text-gray-600 leading-relaxed mb-8">
                                Most companies try to scale by working harder, hiring faster, and buying more tools. But without a unified architectural foundation, they only succeed in scaling chaos.
                            </p>
                        </TextReveal>
                        <TextReveal delay={0.6}>
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-violet-100 flex items-center justify-center">
                                    <span className="text-violet-600 font-bold text-xl">M</span>
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-900">Melvin Kheturus</h4>
                                    <p className="text-sm text-gray-500">Founder & Chief Architect</p>
                                </div>
                            </div>
                        </TextReveal>
                    </div>

                    {/* Right side: Abstract Visual */}
                    <div className="relative">
                        <motion.div 
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                            className="aspect-square bg-gray-50 rounded-3xl border border-gray-100 flex items-center justify-center p-12 relative overflow-hidden"
                        >
                            {/* Decorative Grid */}
                            <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
                                 style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '40px 40px' }} 
                            />
                            
                            {/* Central Abstract Element */}
                            <div className="relative w-full h-full flex items-center justify-center">
                                <motion.div 
                                    animate={{ rotate: 360 }}
                                    transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                                    className="w-48 md:w-64 h-48 md:h-64 border border-violet-200/50 rounded-full absolute"
                                />
                                <motion.div 
                                    animate={{ rotate: -360 }}
                                    transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                                    className="w-32 md:w-48 h-32 md:h-48 border border-violet-300/50 rounded-full absolute"
                                />
                                <div className="w-16 h-16 bg-violet-600 rounded-lg shadow-xl shadow-violet-500/20 z-10 flex items-center justify-center">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12 4L4 8L12 12L20 8L12 4Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path d="M4 12L12 16L20 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path d="M4 16L12 20L20 16" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
