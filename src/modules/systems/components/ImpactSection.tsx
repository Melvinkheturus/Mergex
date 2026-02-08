'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export function ImpactSection() {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-6 md:px-12">
                {/* Header */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="max-w-2xl"
                    >
                        <span className="inline-block px-3 py-1 bg-gray-100 rounded-full text-sm font-medium text-gray-800 mb-6">
                            Impact
                        </span>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display text-[#1A1A1A] leading-tight">
                            Driving measurable <br /> impact.
                        </h2>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        <Link
                            href="/contact"
                            className="inline-flex items-center justify-center px-8 py-3 bg-black text-white rounded-full font-medium hover:bg-gray-800 transition-colors"
                        >
                            Get a demo
                        </Link>
                    </motion.div>
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* Card 1: Global Partners */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="bg-white rounded-3xl p-8 min-h-[400px] flex flex-col justify-between border border-gray-100 shadow-sm"
                    >
                        <div>
                            <span className="text-6xl md:text-7xl font-bold text-[#1A1A1A] block mb-4">
                                105+
                            </span>
                        </div>
                        <p className="text-lg text-gray-600 font-medium max-w-[200px]">
                            Global partners joined and integrated into our platform
                        </p>
                    </motion.div>

                    {/* Card 2: Uptime */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                        className="bg-white rounded-3xl p-8 min-h-[400px] flex flex-col justify-between border border-gray-100 shadow-sm"
                    >
                        <p className="text-lg text-gray-600 font-medium">
                            Average uptime achieved across all critical services
                        </p>
                        <div>
                            <span className="text-6xl md:text-7xl font-bold text-[#1A1A1A] block">
                                98%
                            </span>
                        </div>
                    </motion.div>

                    {/* Card 3: Visual Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 }}
                        className="bg-[#0f172a] rounded-3xl p-8 min-h-[400px] flex flex-col justify-between relative overflow-hidden group"
                    >
                        {/* Background Image Placeholder or Abstract Gradient */}
                        <div className="absolute inset-0 opacity-60">
                            <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/40 to-black/80 z-10" />
                            {/* Ideally we would put an actual image here, using a gradient for now matching the reference */}
                            <div className="absolute inset-0 bg-[url('/assets/background/noise.png')] opacity-20" />
                            <div className="absolute -right-20 -top-20 w-64 h-64 bg-emerald-500/20 rounded-full blur-3xl" />
                            <div className="absolute -left-20 bottom-0 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl" />
                        </div>

                        <div className="relative z-20 flex justify-between items-start w-full">
                            <span className="text-white/80 font-medium flex items-center gap-2">
                                <span className="w-4 h-4 rounded-full border border-white/30 flex items-center justify-center text-[10px]">◊</span>
                                Dune
                            </span>
                            <button className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white backdrop-blur-sm hover:bg-white/20 transition-colors">
                                +
                            </button>
                        </div>

                        <div className="relative z-20">
                            <h3 className="text-3xl md:text-4xl font-serif text-white leading-tight">
                                Grow your <br /> revenue
                            </h3>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
