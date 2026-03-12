'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { ArrowUpRight, Network, Scissors, Cpu, ArrowRight } from 'lucide-react'; // Combined and fixed lucide-react imports
import Link from 'next/link'; // Added for potential use in new sections

/**
 * PhilosophySection - Thinking Frameworks
 */
export function PhilosophySection() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const yTransform = useTransform(scrollYProgress, [0, 1], [50, -50]);

    return (
        <section ref={containerRef} className="relative py-24 md:py-32 bg-white flex flex-col justify-center overflow-hidden min-h-screen">
            
            {/* Background Ghost Word */}
            <motion.div
                style={{ 
                    y: yTransform,
                    fontFamily: '"Outfit", system-ui, sans-serif',
                }}
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-[25vh] font-black text-neutral-900 opacity-[0.02] select-none pointer-events-none z-0 tracking-[-0.05em] leading-none whitespace-nowrap uppercase"
            >
                PHILOSOPHY
            </motion.div>

            <div className="container mx-auto px-6 md:px-12 lg:px-16 max-w-[1400px] relative z-10">
                
                <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12 mb-20 md:mb-32">
                    <div className="max-w-3xl">
                        <motion.span
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="block text-violet-600 font-bold tracking-widest text-xs uppercase mb-6"
                        >
                            The Thinking
                        </motion.span>
                        <motion.h2
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="text-4xl md:text-6xl lg:text-8xl font-semibold leading-[1.05] tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-indigo-900 via-blue-600 to-indigo-400"
                        >
                            Design for <br />
                            <span className="italic font-medium" style={{ fontFamily: 'var(--font-playfair)' }}>Systemic Scale.</span>
                        </motion.h2>
                    </div>
                    
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.3 }}
                        className="max-w-sm"
                    >
                        <p className="text-gray-500 text-xl leading-relaxed lg:text-right">
                            The fusion of architecture, engineering, and strategy to build resilient, future-ready business systems.
                        </p>
                    </motion.div>
                </div>

                {/* Principles Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
                    {[
                        {
                            title: "Architecture First",
                            description: "Designing the structural foundation of your business to ensure long-term integrity and scalability.",
                            number: "01",
                            icon: <Network className="text-violet-600" size={32} />
                        },
                        {
                            title: "Integrated Systems",
                            description: "Merging technology and human workflows into a unified, frictionless operational machine.",
                            number: "02",
                            icon: <Cpu className="text-violet-600" size={32} />
                        },
                        {
                            title: "First Principles Engineering",
                            description: "Building vertically from first principles to ensure every component powers the whole.",
                            number: "03",
                            icon: <Scissors className="text-violet-600" size={32} />
                        }
                    ].map((item, i) => (
                        <motion.div
                            key={item.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: i * 0.1 }}
                            className="group relative bg-gray-50 rounded-[3rem] p-12 md:p-14 h-full overflow-hidden border border-gray-100 hover:border-violet-200 hover:bg-white hover:shadow-[0_40px_100px_-20px_rgba(139,92,246,0.1)] transition-all duration-700 flex flex-col"
                        >
                            {/* Number Background */}
                            <div className="absolute top-8 right-8 text-8xl md:text-9xl font-black text-violet-600/5 group-hover:text-violet-600/10 transition-colors duration-700 pointer-events-none select-none tracking-tighter italic" style={{ fontFamily: 'var(--font-playfair)' }}>
                                {item.number}
                            </div>
                            
                            {/* Icon */}
                            <div className="w-16 h-16 bg-white rounded-3xl flex items-center justify-center mb-16 shadow-xl shadow-gray-200/50 border border-gray-100 group-hover:scale-110 transition-transform duration-500 relative z-10">
                                {item.icon}
                            </div>
                            
                            {/* Content Area */}
                            <div className="relative z-10 mt-auto">
                                <h3 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-6 group-hover:text-violet-600 transition-colors duration-500">{item.title}</h3>
                                <p className="text-gray-500 text-lg leading-relaxed group-hover:text-gray-600 transition-colors duration-500">
                                    {item.description}
                                </p>
                            </div>

                            {/* Hover link display */}
                            <div className="mt-10 pt-10 border-t border-gray-100 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                                <div className="flex items-center gap-2 text-violet-600 font-bold uppercase tracking-widest text-xs">
                                    Deep Dive <ArrowRight size={16} />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
