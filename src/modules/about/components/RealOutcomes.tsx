'use client';

import { motion } from 'framer-motion';
import { TextReveal } from '@/modules/shared/components/TextReveal';

const outcomes = [
    { title: "Operational Velocity", value: "3x", desc: "Faster time-to-market for new features and process changes." },
    { title: "Cost Efficiency", value: "40%", desc: "Reduction in manual operational overhead within 12 months." },
    { title: "Revenue Integrity", value: "100%", desc: "Data visibility across all core revenue-generating systems." }
];

export function RealOutcomes() {
    return (
        <section className="relative py-24 md:py-32 bg-white">
            <div className="container mx-auto px-4 md:px-8 lg:px-12 max-w-7xl">
                <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
                    <div className="max-w-2xl">
                        <TextReveal delay={0.1}>
                            <span className="inline-block text-[10px] font-bold tracking-[0.4em] uppercase text-violet-600 mb-6 px-6 py-2 border border-gray-100 rounded-full">
                                Proven Results / 05
                            </span>
                        </TextReveal>
                        <TextReveal delay={0.2} duration={1.6}>
                            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 leading-[1.1]">
                                Real <br />
                                <span className="italic text-gray-400">Outcomes.</span>
                            </h2>
                        </TextReveal>
                    </div>
                    <div className="max-w-sm">
                        <p className="text-gray-500 font-light leading-relaxed mb-4">
                            Architecture isn&apos;t just theoretical. It has a measurable impact on your bottom line and your ability to scale.
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {outcomes.map((outcome, i) => (
                        <motion.div 
                            key={outcome.title}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 + i * 0.1, duration: 0.8 }}
                            className="bg-gray-50 rounded-[2.5rem] p-12 border border-gray-100 flex flex-col items-center text-center"
                        >
                            <div className="text-6xl font-black text-violet-600 mb-6 tracking-tighter">
                                {outcome.value}
                            </div>
                            <h4 className="text-lg font-bold text-gray-900 mb-4 uppercase tracking-wider">{outcome.title}</h4>
                            <p className="text-gray-500 font-light text-sm leading-relaxed">
                                {outcome.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>

                {/* Case Study Callout */}
                <div className="mt-20 flex flex-col items-center">
                    <button className="px-8 py-4 bg-violet-600 text-white font-bold rounded-full hover:bg-violet-700 transition-all active:scale-95 shadow-lg shadow-violet-500/20">
                        View Detailed Case Studies
                    </button>
                </div>
            </div>
        </section>
    );
}
