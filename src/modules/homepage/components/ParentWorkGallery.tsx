'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { PARENT_WORK_SAMPLES } from '../content';
import { ArrowUpRight } from 'lucide-react';

/**
 * ParentWorkGallery - Modern Bento Grid showcase
 * Different from the scrolling cards on Labs/Systems pages.
 */
export function ParentWorkGallery() {
    return (
        <section className="py-24 md:py-40 bg-[#FAFAFA]">
            <div className="container mx-auto px-6 md:px-12 lg:px-16 max-w-[1400px]">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 md:mb-24">
                    <div className="max-w-2xl">
                        <motion.span
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-xs font-bold text-violet-600 uppercase tracking-widest block mb-4"
                        >
                            The Showcase
                        </motion.span>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="text-4xl md:text-6xl font-bold font-display tracking-tight text-neutral-900"
                        >
                            Engineered for <span className="text-neutral-400 italic font-medium">Impact.</span>
                        </motion.h2>
                    </div>
                </div>

                {/* Bento Grid */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6 auto-rows-[300px] md:auto-rows-[350px]">
                    {PARENT_WORK_SAMPLES.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className={`group relative rounded-[2rem] overflow-hidden bg-white border border-neutral-200/60 shadow-sm hover:shadow-2xl transition-all duration-500
                                ${item.size === 'large' ? 'md:col-span-2 md:row-span-2' : ''}
                                ${item.size === 'medium' ? 'md:col-span-2 md:row-span-1' : ''}
                                ${item.size === 'small' ? 'md:col-span-1 md:row-span-1' : ''}
                            `}
                        >
                            {/* Image Overlay */}
                            <div className="absolute inset-0 z-0">
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    fill
                                    className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out grayscale group-hover:grayscale-0"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />
                            </div>

                            {/* Content */}
                            <div className="absolute inset-0 z-10 p-8 md:p-10 flex flex-col justify-end">
                                <span className="text-xs font-bold text-white/60 uppercase tracking-widest mb-2 block">
                                    {item.category}
                                </span>
                                <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 leading-tight">
                                    {item.title}
                                </h3>
                                <p className="text-white/70 text-sm md:text-base font-light max-w-[240px] opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                                    {item.description}
                                </p>
                            </div>

                            {/* Corner Icon */}
                            <div className="absolute top-8 right-8 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity translate-x-4 group-hover:translate-x-0 duration-500">
                                <ArrowUpRight size={20} />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
