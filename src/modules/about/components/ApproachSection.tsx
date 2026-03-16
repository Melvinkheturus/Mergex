import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Outfit } from 'next/font/google';

const outfit = Outfit({
    subsets: ['latin'],
    display: 'swap',
});

import { Network, Scissors, Cpu, ArrowRight } from 'lucide-react';
import Link from 'next/link';

/**
 * ApproachSection - "Proof of Thinking"
 */
export function ApproachSection() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const xTransform = useTransform(scrollYProgress, [0, 1], [-50, 50]);

    const steps = [
        {
            icon: <Network className="w-6 h-6" />,
            title: "1 — Business Architecture",
            description: "We start by designing the structural foundation of your business. We map operational dependencies and data flows to ensure alignment with your long-term strategy."
        },
        {
            icon: <Scissors className="w-6 h-6" />,
            title: "2 — Systems Strategy",
            description: "We design the integrated machine that powers your growth. We identify systemic friction and build the automated workflows that allow your team to operate at scale."
        },
        {
            icon: <Cpu className="w-6 h-6" />,
            title: "3 — Modern Engineering",
            description: "We translate strategy into reality. We engineer the AI workflows, digital platforms, and operational infrastructure that act as the backbone of your modern business."
        }
    ];

    return (
        <section ref={containerRef} className="relative bg-white py-24 md:py-40 overflow-hidden">
            
            {/* Background Ghost Word */}
            <motion.div
                style={{ 
                    x: xTransform,
                    fontFamily: outfit.style.fontFamily

                }}
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-[25vh] font-black text-neutral-950 opacity-[0.02] select-none pointer-events-none z-0 tracking-[-0.05em] leading-none whitespace-nowrap"
            >
                SCALE
            </motion.div>
            <div className="container mx-auto px-6 md:px-12 lg:px-16 max-w-[1400px]">
                
                {/* Header */}
                <div className="max-w-3xl mb-20">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-4xl md:text-5xl lg:text-6xl font-semibold mb-8 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-indigo-900 via-blue-600 to-indigo-400"
                    >
                        How We Approach <br />
                        <span className="italic" style={{ fontFamily: 'var(--font-playfair)' }}>Complex Problems</span>
                    </motion.h2>
                    
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="space-y-6"
                    >
                        <p className="text-xl md:text-2xl text-gray-700 leading-relaxed font-medium">
                            Scale is an architecture problem, not a technology choice.
                        </p>
                        <p className="text-lg md:text-xl text-gray-500 leading-relaxed max-w-2xl">
                            We don't just add new tools; we redesign the operational system of your business to ensure that growth creates efficiency instead of complexity.
                        </p>
                    </motion.div>
                </div>

                {/* Framework Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-20">
                    {steps.map((step, i) => (
                        <motion.div
                            key={step.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: i * 0.15 }}
                            className="bg-gray-50 rounded-3xl p-8 md:p-10 border border-transparent hover:border-violet-100 hover:bg-white hover:shadow-xl hover:shadow-violet-200/20 transition-all duration-500"
                        >
                            <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center mb-8 text-violet-600">
                                {step.icon}
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4">{step.title}</h3>
                            <p className="text-gray-600 leading-relaxed text-lg">
                                {step.description}
                            </p>
                        </motion.div>
                    ))}
                </div>

                {/* Footer Microline & Mini CTA */}
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pt-12 border-t border-gray-100">
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                        className="text-gray-500 font-medium tracking-tight"
                    >
                        Because scaling businesses requires more than code — <br className="hidden md:block" />
                        <span className="text-gray-900 italic" style={{ fontFamily: 'var(--font-playfair)' }}>it requires systems.</span>
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="group"
                    >
                        <p className="text-sm text-gray-400 mb-2 font-medium">Curious how this would work for your business?</p>
                        <Link 
                            href="/chat" 
                            className="inline-flex items-center gap-3 bg-gray-900 text-white px-8 py-4 rounded-full font-semibold hover:bg-violet-600 transition-all duration-300 shadow-lg shadow-gray-200"
                        >
                            Ask Mergex Intelligence
                            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </motion.div>
                </div>

            </div>
        </section>
    );
}
