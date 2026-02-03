'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

/**
 * CTASection - Directional Conversion
 * 
 * Purpose: Send users deeper into ecosystem
 * Psychology: Nudge Theory (strategic choices), Foot-in-the-Door, BJ Fogg
 * Copy: Action verb + what they get
 */
export function CTASection() {
    return (
        <section className="relative bg-white py-20 md:py-32 border-t border-gray-100">
            <div className="container mx-auto px-6 md:px-12 lg:px-16 max-w-[1000px] text-center">

                {/* Headline */}
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-3xl md:text-4xl font-semibold text-gray-900 mb-6"
                >
                    Not sure where to start?
                </motion.h2>

                {/* Guidance body */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="mb-12 space-y-2"
                >
                    <p className="text-lg md:text-xl text-gray-700">
                        If you're curious about what's possible, starts with Labs.
                    </p>
                    <p className="text-lg md:text-xl text-gray-700">
                        If you're ready to build, start with Systems.
                    </p>
                </motion.div>

                {/* Primary CTAs */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8"
                >
                    <Link
                        href="/labs"
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#1a1a2e] text-white rounded-full text-lg font-medium transition-all hover:scale-105 hover:shadow-xl shadow-lg"
                    >
                        Explore Mergex Labs
                        <ArrowRight size={18} />
                    </Link>

                    <Link
                        href="/systems"
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-gray-900 border border-gray-200 rounded-full text-lg font-medium transition-all hover:bg-gray-50 hover:border-gray-300 shadow-sm"
                    >
                        Explore Mergex Systems
                    </Link>
                </motion.div>

                {/* Microcopy/Soft conversion */}
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="text-sm md:text-base text-gray-500"
                >
                    Or <Link href="/contact" className="underline underline-offset-4 hover:text-gray-900 transition-colors">start a conversation</Link> if you'd rather talk it through.
                </motion.p>

            </div>
        </section>
    );
}
