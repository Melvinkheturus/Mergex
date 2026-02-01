'use client';

import { motion } from 'framer-motion';
import { WHAT_WE_CREATE } from '../content/labs';

/**
 * WhatWeCreate - Capabilities showcase with numbered services layout
 */
export function WhatWeCreate() {
    return (
        <section className="py-20 md:py-32 bg-white">
            <div className="container mx-auto px-6 md:px-12 max-w-7xl">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-20"
                >
                    <p className="text-sm uppercase tracking-wider text-gray-500 mb-4">
                        WHAT WE DO
                    </p>
                    <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
                        SERVICES
                    </h2>
                    <p className="text-lg md:text-xl text-gray-600 max-w-3xl">
                        {WHAT_WE_CREATE.subheadline}
                    </p>
                </motion.div>

                {/* Services List */}
                <div className="space-y-16 md:space-y-20">
                    {WHAT_WE_CREATE.categories.map((category, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="grid grid-cols-12 gap-6 md:gap-12 items-start border-b border-gray-200 pb-16 md:pb-20"
                        >
                            {/* Number */}
                            <div className="col-span-2 md:col-span-1">
                                <span className="text-2xl md:text-3xl font-light text-gray-400">
                                    {String(index + 1).padStart(2, '0')}
                                </span>
                            </div>

                            {/* Content */}
                            <div className="col-span-10 md:col-span-11 grid md:grid-cols-2 gap-8">
                                {/* Left: Title & Description */}
                                <div>
                                    <h3 className="text-3xl md:text-4xl font-bold mb-4">
                                        {category.title}
                                    </h3>
                                    <p className="text-gray-600 text-lg leading-relaxed">
                                        {category.description}
                                    </p>
                                </div>

                                {/* Right: Capabilities */}
                                <div className="flex items-center">
                                    <ul className="space-y-3">
                                        {category.capabilities.map((capability, idx) => (
                                            <li
                                                key={idx}
                                                className="text-gray-700 leading-relaxed"
                                            >
                                                {capability}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
