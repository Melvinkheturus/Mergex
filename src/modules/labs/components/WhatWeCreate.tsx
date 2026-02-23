'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { WHAT_WE_CREATE } from '../content/labs';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from 'gsap';

gsap.registerPlugin(ScrollTrigger);

/**
 * WhatWeCreate - Capabilities showcase with accordion-style numbered services layout
 */
export function WhatWeCreate() {
    const [activeIndex, setActiveIndex] = useState<number | null>(0);

    const toggleAccordion = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section className="py-20 md:py-32 bg-white text-black">
            <div className="container mx-auto px-6 md:px-12 max-w-7xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-20"
                >
                    <p className="text-sm uppercase tracking-wider mb-4">WHAT WE DO</p>
                    <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">SERVICES</h2>
                    <p className="text-lg md:text-xl max-w-3xl">{WHAT_WE_CREATE.subheadline}</p>
                </motion.div>

                {/* Services List */}
                <div className="space-y-0">
                    {WHAT_WE_CREATE.categories.map((category, index) => {
                        const isActive = activeIndex === index;

                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className="grid grid-cols-12 gap-0 items-start border-t border-gray-200 py-12 md:py-16"
                            >
                                {/* Number */}
                                <div className="col-span-2 md:col-span-1">
                                    <span className="text-2xl md:text-3xl font-light text-gray-300">
                                        {String(index + 1).padStart(2, '0')}
                                    </span>
                                </div>

                                {/* Content */}
                                <div className="col-span-10 md:col-span-11">
                                    <div className="flex justify-between items-start gap-8">
                                        <div className="max-w-3xl">
                                            <h3 className="text-3xl md:text-4xl font-bold mb-6">
                                                {category.title}
                                            </h3>
                                            <p className="text-gray-500 text-lg md:text-xl leading-relaxed max-w-2xl">
                                                {category.description}
                                            </p>
                                        </div>

                                        {/* Circular Toggle Button - Image 2 Style */}
                                        <button
                                            onClick={() => toggleAccordion(index)}
                                            className="w-16 h-16 md:w-20 md:h-20 rounded-full border border-gray-300 flex items-center justify-center flex-shrink-0 transition-colors hover:bg-gray-50 group"
                                            aria-label={isActive ? "Collapse" : "Expand"}
                                        >
                                            <div className="relative w-6 h-6 flex items-center justify-center text-gray-600">
                                                <AnimatePresence mode="wait">
                                                    {isActive ? (
                                                        <motion.span
                                                            key="minus"
                                                            initial={{ opacity: 0, rotate: -90 }}
                                                            animate={{ opacity: 1, rotate: 0 }}
                                                            exit={{ opacity: 0, rotate: 90 }}
                                                            className="text-2xl font-light"
                                                        >
                                                            --
                                                        </motion.span>
                                                    ) : (
                                                        <motion.span
                                                            key="plus"
                                                            initial={{ opacity: 0, rotate: 90 }}
                                                            animate={{ opacity: 1, rotate: 0 }}
                                                            exit={{ opacity: 0, rotate: -90 }}
                                                            className="text-3xl font-light"
                                                        >
                                                            +
                                                        </motion.span>
                                                    )}
                                                </AnimatePresence>
                                            </div>
                                        </button>
                                    </div>

                                    {/* Accordion Content: Capabilities as Tags */}
                                    <AnimatePresence>
                                        {isActive && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: 'auto', opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                transition={{ duration: 0.4, ease: "easeInOut" }}
                                                className="overflow-hidden"
                                            >
                                                <div className="pt-12 flex flex-wrap gap-4 md:gap-x-8 md:gap-y-6">
                                                    {category.capabilities.map((capability, idx) => (
                                                        <span
                                                            key={idx}
                                                            className="text-sm md:text-base font-medium tracking-[0.2em] text-gray-500 uppercase flex items-center"
                                                        >
                                                            [ {capability} ]
                                                        </span>
                                                    ))}
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
