'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

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
        <section ref={containerRef} className="relative z-20 bg-gradient-to-b from-transparent via-white via-20% to-white pt-0 pb-20 md:pb-32 overflow-hidden">
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
                        <motion.span 
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="inline-block text-[10px] font-bold tracking-[0.3em] uppercase text-neutral-500 mb-4"
                        >
                            Context / 01
                        </motion.span>
                        <motion.h2 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="text-4xl md:text-6xl font-bold text-white leading-[1.05] tracking-tight max-w-4xl"
                            style={{ fontFamily: 'var(--font-playfair)' }}
                        >
                            Architecture is the <br />
                            <span className="italic font-medium text-neutral-500">Silent Determinant</span> <br />
                            of Scale.
                        </motion.h2>
                    </div>

                    {/* Main Asymmetric Grid */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-stretch">
                        
                        {/* Column 1: The Challenge List */}
                        <div className="lg:col-span-3 border-l border-neutral-800/50 pl-8 space-y-12">
                            {[
                                { title: "Complexity", desc: "Operational Fragmentaiton" },
                                { title: "Integrity", desc: "Siloed Intelligence" },
                                { title: "Ceiling", desc: "Architectural Limits" }
                            ].map((item, i) => (
                                <motion.div 
                                    key={item.title}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="group cursor-default"
                                >
                                    <h4 className="text-xl font-bold text-white mb-1 group-hover:text-violet-400 transition-colors uppercase tracking-tight">{item.title}</h4>
                                    <p className="text-sm text-neutral-500 font-light">{item.desc}</p>
                                </motion.div>
                            ))}
                        </div>

                        {/* Column 2: Detailed Context */}
                        <div className="lg:col-span-4 flex flex-col justify-between py-2">
                            <motion.div
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.3 }}
                            >
                                <h3 className="text-2xl font-semibold text-white mb-6">Structural Integrity</h3>
                                <p className="text-neutral-400 leading-relaxed font-light mb-8">
                                    Technology alone is an accelerator. But without structure, it simply accelerates chaos. We look past the tools to find the structural limits holding your business back.
                                </p>
                                <div className="w-12 h-px bg-neutral-800" />
                            </motion.div>
                            
                            <div className="mt-8">
                                <button className="px-6 py-2.5 rounded-full border border-neutral-800 text-sm font-bold text-white hover:bg-white hover:text-black transition-all duration-300">
                                    Explore Framework
                                </button>
                            </div>
                        </div>

                        {/* Column 3: The White Solution Card (Inverted for Contrast) */}
                        <div className="lg:col-span-5">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 1, ease: [0.165, 0.84, 0.44, 1] }}
                                className="h-full bg-white rounded-[2.5rem] p-10 md:p-14 text-black flex flex-col justify-between group overflow-hidden relative shadow-xl"
                            >
                                <div className="relative z-10">
                                    <h3 className="text-3xl md:text-4xl font-bold mb-8 leading-tight">
                                        Let&apos;s build your <br />
                                        <span className="text-violet-600 italic font-medium" style={{ fontFamily: 'var(--font-playfair)' }}>Growth Engine</span> Together.
                                    </h3>
                                    <p className="text-neutral-600 font-light leading-relaxed mb-10 max-w-sm">
                                        Mergex solves the architectural problem. We design the systems, automation, and AI that turn fragmented operations into a unified competitive advantage.
                                    </p>
                                </div>

                                <div className="relative z-10">
                                    <button className="group/btn relative px-8 py-4 bg-black text-white font-bold rounded-full overflow-hidden transition-all hover:pr-12 active:scale-95">
                                        <span className="relative z-10">Select Strategy</span>
                                        <div className="absolute top-1/2 -translate-y-1/2 right-4 opacity-0 group-hover/btn:opacity-100 transition-all">
                                            →
                                        </div>
                                    </button>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
    );
}
