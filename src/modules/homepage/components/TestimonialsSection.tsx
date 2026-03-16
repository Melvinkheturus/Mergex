'use client';

import { motion } from 'framer-motion';
import { PARENT_TESTIMONIALS } from '../content';
import { Quote, Play } from 'lucide-react';
import Image from 'next/image';
import { Alex_Brush } from 'next/font/google';

const signatureFont = Alex_Brush({
    weight: '400',
    subsets: ['latin'],
    display: 'swap',
});

/**
 * TestimonialsSection - High-end social proof
 * Curated for builders and makers.
 */
export function TestimonialsSection() {
    return (
        <section className="py-24 md:py-32 bg-white overflow-hidden">
            <div className="container mx-auto px-6 max-w-7xl">
                {/* Header Section - Matched to Process Section style */}
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-20 gap-8">
                    <div className="max-w-xl">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-2.5 h-2.5 rounded-full bg-violet-600 shadow-[0_0_10px_rgba(124,58,237,0.2)]" />
                            <span className="text-xs md:text-sm font-semibold uppercase tracking-wider text-neutral-500">
                                WHAT MAKERS SAY
                            </span>
                        </div>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-neutral-900 leading-[1.1]">
                            Don't just take our word.<br />
                            Hear it from the builders.
                        </h2>
                    </div>
                    <div className="hidden md:block h-[1px] flex-1 bg-neutral-100 ml-12 mb-6" />
                </div>

                {/* Horizontal Scroll Container - Bleeds to the right */}
                <div className="flex overflow-x-auto snap-x snap-mandatory pb-12 -ml-6 pl-6 md:-ml-12 md:pl-12 scrollbar-hide">
                    <div className="flex gap-6 pr-6 md:pr-12">
                        {PARENT_TESTIMONIALS.map((testimonial, index) => {
                            const isVideoCard = index === 1; // Arjun Mehta - Video card

                            if (isVideoCard) {
                                return (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, x: 20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.8, delay: index * 0.1 }}
                                        className="relative group min-w-[280px] md:min-w-[340px] h-[480px] rounded-[1.5rem] overflow-hidden snap-center"
                                    >
                                        <Image
                                            src={testimonial.avatar}
                                            alt={testimonial.name}
                                            fill
                                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                                        />
                                        <div className="absolute inset-0 bg-black/40 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                                        
                                        {/* Play Button Overlay */}
                                        <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
                                            <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30 group-hover:scale-110 group-hover:bg-white/30 transition-all duration-300">
                                                <Play className="text-white fill-white ml-1" size={16} />
                                            </div>
                                            <span className="text-[9px] text-white/80 font-medium tracking-widest uppercase">
                                                Watch his story
                                            </span>
                                        </div>

                                        {/* Signature Overlay */}
                                        <div className="absolute bottom-8 left-8 right-8">
                                            <h4 className={`${signatureFont.className} text-3xl text-white mb-1`}>
                                                {testimonial.name}
                                            </h4>
                                            <p className="text-white/60 text-[9px] font-medium tracking-widest uppercase text-balance">
                                                {testimonial.role}, {testimonial.company}
                                            </p>
                                        </div>
                                    </motion.div>
                                );
                            }

                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.8, delay: index * 0.1 }}
                                    className="relative p-8 rounded-[1.5rem] bg-white border border-neutral-100 flex flex-col justify-between min-w-[300px] md:min-w-[340px] snap-center hover:shadow-[0_20px_50px_rgba(0,0,0,0.05)] transition-all duration-500"
                                >
                                    <div>
                                        <div className="mb-8 text-violet-500/20">
                                            <Quote size={28} fill="currentColor" />
                                        </div>

                                        <p className="text-base md:text-[17px] text-neutral-800 leading-relaxed font-normal mb-8 italic">
                                            "{testimonial.quote}"
                                        </p>
                                    </div>

                                    <div>
                                        <h4 className={`${signatureFont.className} text-3xl text-neutral-900 mb-1`}>
                                            {testimonial.name}
                                        </h4>
                                        <p className="text-[9px] text-neutral-400 font-semibold tracking-widest uppercase">
                                            {testimonial.role}, {testimonial.company}
                                        </p>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </div>

            <style jsx global>{`
                .scrollbar-hide {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }
                .scrollbar-hide::-webkit-scrollbar {
                    display: none;
                }
            `}</style>
        </section>
    );
}
