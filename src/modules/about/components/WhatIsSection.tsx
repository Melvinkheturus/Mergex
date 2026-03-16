'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { Outfit } from 'next/font/google';

const outfit = Outfit({
    subsets: ['latin'],
    display: 'swap',
});

import { useRef } from 'react';
import { TextReveal } from '@/modules/shared/components/TextReveal';

/**
 * WhatIsSection - Identity Definition
 */
export function WhatIsSection() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const yTransform = useTransform(scrollYProgress, [0, 1], [-50, 50]);

    return (
        <section ref={containerRef} className="relative h-screen bg-[#fcfcff] flex flex-col justify-center overflow-hidden">
            
            {/* Background Ghost Word */}
            <motion.div
                style={{ 
                    y: yTransform,
                    fontFamily: outfit.style.fontFamily,

                }}
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-[25vh] font-black text-neutral-900 opacity-[0.03] select-none pointer-events-none z-0 tracking-[-0.05em] leading-none whitespace-nowrap"
            >
                CLARITY
            </motion.div>
 
            <div className="container mx-auto px-6 md:px-12 lg:px-16 max-w-[1200px] relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
                    
                    {/* Left: Headline & The Core Message */}
                    <div className="lg:col-span-12 xl:col-span-7">
                        <TextReveal delay={0.1}>
                            <span className="block text-violet-600 font-bold tracking-widest text-xs uppercase mb-6">
                                The Identity
                            </span>
                        </TextReveal>
                        <div className="max-w-4xl">
                            <TextReveal delay={0.2} duration={1.6}>
                                <h2 className="text-4xl md:text-6xl lg:text-7xl font-semibold leading-[1.05] tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-indigo-900 via-blue-600 to-indigo-400 mb-4">
                                    Mergex is a
                                </h2>
                            </TextReveal>
                            <TextReveal delay={0.4} duration={1.6}>
                                <h2 className="text-4xl md:text-6xl lg:text-7xl font-semibold leading-[1.05] tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-indigo-900 via-blue-600 to-indigo-400 mb-8">
                                    <span className="italic font-medium" style={{ fontFamily: 'var(--font-playfair)' }}>Business Architecture Company.</span>
                                </h2>
                            </TextReveal>
                        </div>
                        <TextReveal delay={0.6} duration={1.2}>
                            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed mb-12 max-w-2xl">
                                We scale organizations by designing integrated systems powered by <span className="text-gray-900 font-medium">automation, AI workflows, and bespoke digital platforms.</span> 
                            </p>
                        </TextReveal>

                        {/* GEO Definition Block */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="p-10 bg-white shadow-2xl shadow-violet-100/50 rounded-[2.5rem] border border-violet-50 relative overflow-hidden group max-w-2xl"
                        >
                            <div className="absolute top-0 right-0 w-48 h-48 bg-violet-100/30 blur-3xl -mr-24 -mt-24 group-hover:bg-violet-200/40 transition-colors duration-700"></div>
                            <h3 className="text-[10px] font-bold text-violet-600 uppercase tracking-[0.2em] mb-4">Core Definition</h3>
                            <p className="text-xl md:text-2xl text-gray-900 font-medium leading-relaxed relative z-10">
                                Mergex <span className="text-gray-400 font-light text-base">(noun)</span>: <br className="md:hidden" />
                                <span className="italic" style={{ fontFamily: 'var(--font-playfair)' }}>A firm specialized in the structural design and integration of businesses into unified digital engines.</span>
                            </p>
                        </motion.div>
                    </div>

                    {/* Right: The Shift */}
                    <div className="lg:col-span-12 xl:col-span-5 space-y-6">
                        {[
                            {
                                title: "Architecture Over Assets",
                                text: "We design sustainable systems, not isolated tools. Our engineering focus ensures your stack is built for durability.",
                                color: "bg-violet-500",
                                delay: 0.3
                            },
                            {
                                title: "Integration Over Isolation",
                                text: "We merge AI automation with human workflows to create a seamless operational environment without friction.",
                                color: "bg-indigo-500",
                                delay: 0.4
                            },
                            {
                                title: "Durability Over Hype",
                                text: "We build for the long term, focusing on infrastructure that scales as your business evolves and grows.",
                                color: "bg-blue-500",
                                delay: 0.5
                            }
                        ].map((item, idx) => (
                            <motion.div
                                key={item.title}
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: item.delay }}
                                className="p-8 bg-white border border-gray-100 rounded-3xl hover:border-violet-100 transition-all duration-300 hover:shadow-xl hover:shadow-gray-100/20 group"
                            >
                                <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-3">
                                    <span className={`w-1.5 h-1.5 rounded-full ${item.color} group-hover:scale-150 transition-transform`}></span>
                                    {item.title}
                                </h3>
                                <p className="text-gray-500 leading-relaxed text-base">
                                    {item.text}
                                </p>
                            </motion.div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
}
