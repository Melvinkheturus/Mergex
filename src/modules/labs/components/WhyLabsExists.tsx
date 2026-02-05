'use client';

import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { WHY_LABS_EXISTS } from '../content/labs';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/**
 * WhyLabsExists - Philosophy and differentiation
 */
export function WhyLabsExists() {
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const section = sectionRef.current;
        if (!section) return;

        ScrollTrigger.create({
            trigger: section,
            start: 'top bottom',
            end: 'bottom top', // Trigger exit when scrolling past
            onLeave: () => {
                // Revert to light mode when fully past this section
                document.body.style.background = '#fff';
                document.body.style.transition = 'background 0.5s ease';
            },
            onEnterBack: () => {
                // Ensure dark mode when scrolling back up into this section
                document.body.style.background = '#000';
            }
        });
    }, []);

    return (
        <section ref={sectionRef} className="py-20 md:py-28 bg-black">
            <div className="container mx-auto px-6 md:px-12">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-5xl mx-auto"
                >
                    {/* Header */}
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display mb-16 text-center text-white">
                        {WHY_LABS_EXISTS.headline}
                    </h2>

                    {/* Statements */}
                    <div className="space-y-12 mb-16">
                        {WHY_LABS_EXISTS.statements.map((statement, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.2 }}
                                className="relative pl-8 border-l-4 border-purple-500"
                            >
                                <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
                                    {statement.text}
                                </p>
                            </motion.div>
                        ))}
                    </div>

                    {/* Closing Line */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.6 }}
                        className="text-center"
                    >
                        <p className="text-2xl md:text-3xl font-semibold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                            {WHY_LABS_EXISTS.closingLine}
                        </p>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
