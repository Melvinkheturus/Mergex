'use client';

import { motion } from 'framer-motion';
import type { Principle } from '../types';

const PRINCIPLES: Principle[] = [
    {
        id: '1',
        text: 'We start with the problem, not the deliverable'
    },
    {
        id: '2',
        text: 'We design systems, not one-off outputs'
    },
    {
        id: '3',
        text: 'We move fast without breaking foundations'
    },
    {
        id: '4',
        text: 'We treat AI as leverage, not spectacle'
    }
];

/**
 * PrinciplesSection - How We Work
 * 
 * Purpose: Reduce buyer anxiety through clear principles
 * Psychology: Commitment & Consistency, Pratfall Effect (honest about approach)
 * Copy: Active voice, confident tone, benefits over features
 */
export function PrinciplesSection() {
    return (
        <section className="relative bg-white py-20 md:py-32">
            <div className="container mx-auto px-6 md:px-12 lg:px-16 max-w-[1200px]">

                {/* Headline */}
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-3xl md:text-4xl font-semibold text-gray-900 mb-12"
                >
                    How we approach every engagement
                </motion.h2>

                {/* Principles list */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-4xl">
                    {PRINCIPLES.map((principle, index) => (
                        <motion.div
                            key={principle.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="flex items-start gap-4 group"
                        >
                            {/* Visual indicator */}
                            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-violet-100 flex items-center justify-center group-hover:bg-violet-200 transition-colors">
                                <div className="w-2 h-2 rounded-full bg-violet-600"></div>
                            </div>

                            {/* Principle text */}
                            <p className="text-lg md:text-xl text-gray-800 leading-relaxed pt-0.5">
                                {principle.text}
                            </p>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}
