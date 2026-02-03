'use client';

import { motion } from 'framer-motion';

/**
 * HeroSection - Opening Statement
 * 
 * Purpose: Orientation without story
 * Psychology: First Principles thinking, clear positioning
 * Copy: Clarity over cleverness
 */
export function HeroSection() {
    return (
        <section className="relative min-h-[80vh] bg-[#f8f7ff] flex items-center">
            <div className="container mx-auto px-6 md:px-12 lg:px-16 max-w-[1400px] py-20 md:py-32">

                {/* Headline - Direct positioning statement */}
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="mb-8 leading-tight"
                >
                    <span className="block font-sans font-semibold text-[clamp(2.5rem,7vw,5rem)] text-gray-900 mb-4">
                        Mergex is built for problems
                    </span>
                    <span className="block font-sans font-semibold text-[clamp(2.5rem,7vw,5rem)] text-gray-900">
                        that don't fit neatly into boxes.
                    </span>
                </motion.h1>

                {/* Supporting statement - immediate belief anchoring */}
                <div className="max-w-3xl">
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="text-xl md:text-2xl text-gray-700 leading-relaxed mb-6"
                    >
                        That's intentional.
                    </motion.p>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                        className="text-lg md:text-xl text-gray-600 leading-relaxed"
                    >
                        Most companies don't struggle because of a lack of tools or talent.
                        They struggle because everything is fragmented — strategy in one place,
                        execution in another, intelligence somewhere else.
                    </motion.p>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                        className="text-lg md:text-xl text-gray-600 leading-relaxed mt-6"
                    >
                        Mergex exists to bring those pieces back together.
                    </motion.p>
                </div>

            </div>
        </section>
    );
}
