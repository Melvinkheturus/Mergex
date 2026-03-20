'use client';

import { motion } from 'framer-motion';
import { TextReveal } from '@/modules/shared/components/TextReveal';

const stats = [
    { label: "Operational Friction", value: "85%", detail: "Increase in task switching costs in fragmented systems." },
    { label: "Data Sinks", value: "40%", detail: "Of organizational intelligence is lost in siloed databases." },
    { label: "Scale Ceiling", value: "3x", detail: "Complexity growth relative to linear revenue growth." }
];

export function TheProblem() {
    return (
        <section className="relative py-24 md:py-40 bg-white overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 right-1/4 w-px h-full bg-linear-to-b from-transparent via-gray-100 to-transparent opacity-50" />
            <div className="absolute top-0 left-1/4 w-px h-full bg-linear-to-b from-transparent via-gray-100 to-transparent opacity-50" />

            <div className="container mx-auto px-4 md:px-8 lg:px-12 max-w-7xl relative z-10">
                <div className="max-w-4xl mb-24">
                    <TextReveal delay={0.1}>
                        <span className="inline-block text-[10px] font-bold tracking-[0.4em] uppercase text-violet-600 mb-6">
                            Problem State / 02
                        </span>
                    </TextReveal>
                    <TextReveal delay={0.2} duration={1.6}>
                        <h2 className="text-4xl md:text-7xl font-bold text-gray-900 leading-none tracking-tight mb-10">
                            The Hidden <br />
                            <span className="text-gray-400 italic">Cost of Chaos.</span>
                        </h2>
                    </TextReveal>
                    <TextReveal delay={0.4}>
                        <p className="text-xl md:text-2xl text-gray-600 font-light leading-relaxed max-w-2xl">
                            As organizations grow, they don&apos;t just add people; they add complexity. Without a unified system, this complexity becomes a tax on every decision.
                        </p>
                    </TextReveal>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 border-t border-gray-100 pt-16">
                    {stats.map((stat, i) => (
                        <motion.div 
                            key={stat.label}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 + i * 0.1, duration: 0.8 }}
                            className="group"
                        >
                            <div className="text-sm font-bold text-violet-600 tracking-widest uppercase mb-4">{stat.label}</div>
                            <div className="text-5xl md:text-6xl font-black text-gray-900 mb-6 tracking-tighter group-hover:text-violet-600 transition-colors">
                                {stat.value}
                            </div>
                            <p className="text-gray-500 font-light text-sm leading-relaxed max-w-[200px]">
                                {stat.detail}
                            </p>
                        </motion.div>
                    ))}
                </div>
                
                {/* Bottom Quote/Insight */}
                <div className="mt-32 p-8 md:p-12 bg-gray-50 rounded-3xl border border-gray-100 flex flex-col md:flex-row gap-12 items-center">
                    <div className="flex-1">
                        <h4 className="text-gray-900 text-xl md:text-2xl font-semibold mb-4 leading-tight">
                            &ldquo;Fragmentation is the silent killer of modern enterprises. It&apos;s not that people aren&apos;t working; it&apos;s that the system is working against them.&rdquo;
                        </h4>
                    </div>
                    <div className="shrink-0 w-full md:w-px h-px md:h-16 bg-gray-200" />
                    <div className="shrink-0 flex items-center gap-4">
                        <div className="text-right">
                            <div className="text-gray-900 font-bold text-sm uppercase tracking-tighter">Systems Analysis</div>
                            <div className="text-gray-400 text-xs">Internal Report 2024</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
