'use client';

import { motion } from 'framer-motion';
import { PARENT_TESTIMONIALS } from '../content';
import { Quote } from 'lucide-react';

/**
 * TestimonialsSection - High-end social proof
 * Uses premium typography and minimalist card design.
 */
export function TestimonialsSection() {
    return (
        <section className="py-24 md:py-40 bg-white">
            <div className="container mx-auto px-6 md:px-12 lg:px-16 max-w-[1400px]">
                {/* Header */}
                <div className="text-center mb-20 md:mb-32">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-6xl font-bold font-display tracking-tight text-neutral-900 mb-6"
                    >
                        Voices of <span className="text-violet-600 italic">Momentum.</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-lg md:text-xl text-neutral-500 max-w-2xl mx-auto font-light"
                    >
                        We build for makers who refuse to wait. Here is what they have to say.
                    </motion.p>
                </div>

                {/* Testimonials Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
                    {PARENT_TESTIMONIALS.map((testimonial, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: index * 0.1 }}
                            className="relative p-10 md:p-12 rounded-[2.5rem] bg-neutral-50 border border-neutral-100 hover:border-violet-100 transition-colors group"
                        >
                            <Quote className="absolute top-10 right-10 text-neutral-200 group-hover:text-violet-100 transition-colors" size={40} strokeWidth={1.5} />

                            <p className="text-xl md:text-2xl text-neutral-800 leading-relaxed italic mb-12 relative z-10 font-medium">
                                "{testimonial.quote}"
                            </p>

                            <div className="flex items-center gap-4">
                                <div className="w-14 h-14 rounded-full bg-neutral-200 overflow-hidden relative border-2 border-white shadow-sm">
                                    {/* Placeholder for real image if missing */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-neutral-200 to-neutral-400" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-neutral-900 text-lg">{testimonial.name}</h4>
                                    <p className="text-sm text-neutral-500 uppercase tracking-widest font-bold">
                                        {testimonial.role} • {testimonial.company}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
