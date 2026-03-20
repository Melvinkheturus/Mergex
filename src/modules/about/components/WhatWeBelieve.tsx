'use client';

import { motion } from 'framer-motion';
import { TextReveal } from '@/modules/shared/components/TextReveal';

const beliefs = [
    { title: "Systems > Tools", desc: "A great tool in a broken system is just another point of failure. We focus on the system first." },
    { title: "Speed via Structure", desc: "True velocity comes from architectural clarity, not from running faster into technical debt." },
    { title: "AI as Architecture", desc: "Artificial Intelligence isn&apos;t an add-on; it&apos;s a fundamental component of modern infrastructure." },
    { title: "Radical Simplicity", desc: "The height of sophistication is a system that works so well you forget it exists." }
];

export function WhatWeBelieve() {
    return (
        <section className="relative py-24 md:py-32 bg-white overflow-hidden">
            <div className="container mx-auto px-4 md:px-8 lg:px-12 max-w-7xl">
                <div className="flex flex-col lg:flex-row gap-16 lg:gap-32 items-start">
                    {/* Left: Headline Section */}
                    <div className="lg:w-1/3 pt-4">
                        <TextReveal delay={0.1}>
                            <span className="inline-block text-[10px] font-bold tracking-[0.4em] uppercase text-gray-400 mb-6">
                                Our Philosophy / 04
                            </span>
                        </TextReveal>
                        <TextReveal delay={0.2} duration={1.6}>
                            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-[1.1] mb-8">
                                What we <br />
                                <span className="italic text-violet-600">Believe.</span>
                            </h2>
                        </TextReveal>
                        <TextReveal delay={0.4}>
                            <p className="text-gray-600 leading-relaxed font-light mb-10">
                                Behind every successful scale-up is a system that was built to last. Our philosophy centers on the long-term integrity of your operational engine.
                            </p>
                        </TextReveal>
                    </div>

                    {/* Right: Beliefs Grid */}
                    <div className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-16">
                        {beliefs.map((belief, i) => (
                            <motion.div 
                                key={belief.title}
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 + i * 0.1, duration: 0.8 }}
                                className="group"
                            >
                                <div className="text-gray-300 text-4xl font-light mb-6 font-serif italic">{i + 1}</div>
                                <h4 className="text-xl font-bold text-gray-900 mb-4 uppercase tracking-tight">{belief.title}</h4>
                                <p className="text-gray-500 font-light leading-relaxed">
                                    {belief.desc}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
                
                {/* Horizontal Divider */}
                <div className="mt-24 h-px w-full bg-gray-200" />
            </div>
        </section>
    );
}
