'use client';

import { motion } from 'framer-motion';
import { TextReveal } from '@/modules/shared/components/TextReveal';

const systems = [
    { title: "Universal Data Core", desc: "A singular source of truth that synchronizes mission-critical data across every department." },
    { title: "Automation Engine", desc: "Custom-built workflows that eliminate manual overhead and operational latency." },
    { title: "AI Infrastructure", desc: "Scalable LLM deployments and RAG pipelines integrated directly into your business logic." }
];

export function WhatWeBuild() {
    return (
        <section className="relative py-24 md:py-32 bg-white">
            <div className="container mx-auto px-4 md:px-8 lg:px-12 max-w-7xl">
                <div className="mb-20">
                    <TextReveal delay={0.1}>
                        <span className="inline-block text-[10px] font-bold tracking-[0.4em] uppercase text-violet-600 mb-6 font-sans">
                            Internal Architecture / 03
                        </span>
                    </TextReveal>
                    <TextReveal delay={0.2} duration={1.6}>
                        <h2 className="text-4xl md:text-6xl font-bold text-gray-900 leading-[1.1] mb-8">
                            What we <br />
                            <span className="italic text-gray-400">Build.</span>
                        </h2>
                    </TextReveal>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {systems.map((system, i) => (
                        <motion.div 
                            key={system.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 + i * 0.1, duration: 0.8 }}
                            className="p-10 bg-gray-50 rounded-[2.5rem] border border-gray-100 group hover:bg-violet-600 transition-all duration-500"
                        >
                            <div className="w-12 h-12 rounded-2xl bg-violet-600 text-white flex items-center justify-center mb-8 group-hover:bg-white group-hover:text-violet-600 transition-colors">
                                <span className="text-lg font-bold">0{i + 1}</span>
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-white transition-colors">{system.title}</h3>
                            <p className="text-gray-500 leading-relaxed font-light group-hover:text-violet-100 transition-colors">
                                {system.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>

                {/* Technical Capability Showcase */}
                <div className="mt-20 p-12 bg-neutral-950 rounded-[3rem] text-white overflow-hidden relative">
                    <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
                        <svg viewBox="0 0 400 400" className="w-full h-full fill-white">
                            <path d="M0,200 Q100,0 200,200 T400,200" fill="none" stroke="currentColor" strokeWidth="0.5" />
                            <path d="M0,210 Q100,10 200,210 T400,210" fill="none" stroke="currentColor" strokeWidth="0.5" />
                            <path d="M0,220 Q100,20 200,220 T400,220" fill="none" stroke="currentColor" strokeWidth="0.5" />
                        </svg>
                    </div>
                    
                    <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h3 className="text-3xl font-bold mb-6">Unified Operational Stack</h3>
                            <p className="text-neutral-400 font-light leading-relaxed mb-8 max-w-lg">
                                We don&apos;t just install software. We engineer the entire operational stack from the ground up, ensuring every component talks to the next. No gaps, no friction.
                            </p>
                            <div className="flex gap-4">
                                <span className="px-4 py-1.5 rounded-full border border-neutral-800 text-xs font-bold uppercase tracking-widest text-neutral-500">Postgres</span>
                                <span className="px-4 py-1.5 rounded-full border border-neutral-800 text-xs font-bold uppercase tracking-widest text-neutral-500">GraphQL</span>
                                <span className="px-4 py-1.5 rounded-full border border-neutral-800 text-xs font-bold uppercase tracking-widest text-neutral-500">Node.js</span>
                            </div>
                        </div>
                        <div className="bg-neutral-900 rounded-2xl p-8 border border-neutral-800">
                            <div className="flex items-center gap-2 mb-6">
                                <div className="w-2 h-2 rounded-full bg-green-500" />
                                <span className="text-[10px] font-bold tracking-widest uppercase text-neutral-500">System Integrity: Stable</span>
                            </div>
                            <div className="space-y-4">
                                {[1, 2, 3].map(i => (
                                    <div key={i} className="h-2 bg-neutral-800 rounded-full overflow-hidden">
                                        <motion.div 
                                            initial={{ width: 0 }}
                                            whileInView={{ width: `${60 + i * 10}%` }}
                                            transition={{ delay: 0.5 + i * 0.1, duration: 1 }}
                                            className="h-full bg-violet-600"
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
