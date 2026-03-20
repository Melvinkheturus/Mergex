'use client';

import { motion } from 'framer-motion';
import { Outfit } from 'next/font/google';
import { TextReveal } from '@/modules/shared/components/TextReveal';

const outfit = Outfit({
    subsets: ['latin'],
    display: 'swap',
});

export function VisionMission() {
    return (
        <section className="relative py-24 md:py-40 bg-white overflow-hidden text-gray-900">
            {/* Background elements */}
            <div className="absolute inset-0 opacity-40 pointer-events-none">
                <div className="absolute top-0 left-0 w-full h-full" style={{ 
                    backgroundImage: 'none',
                    background: 'radial-gradient(circle at 50% 50%, rgba(124, 58, 237, 0.05) 0%, transparent 70%)' 
                }} />
            </div>

            <div className="container mx-auto px-4 md:px-8 lg:px-12 max-w-7xl relative z-10 text-center">
                <div className="max-w-4xl mx-auto mb-20">
                    <TextReveal delay={0.1}>
                        <span className="inline-block text-[10px] font-bold tracking-[0.4em] uppercase text-violet-600 mb-8 font-sans px-6 py-2 border border-gray-100 rounded-full">
                            Future Core / 06
                        </span>
                    </TextReveal>
                    <TextReveal delay={0.2} duration={1.6}>
                        <h2 className="text-5xl md:text-8xl font-black mb-12" style={{ fontFamily: outfit.style.fontFamily }}>
                            Where we&apos;re <br />
                            <span className="italic text-violet-600" style={{ fontFamily: 'var(--font-playfair)' }}>Going.</span>
                        </h2>
                    </TextReveal>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left">
                    <motion.div 
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3, duration: 1 }}
                        className="p-12 bg-gray-50 rounded-[3rem] border border-gray-100"
                    >
                        <h3 className="text-2xl font-bold mb-6 text-violet-600">Our Vision</h3>
                        <p className="text-lg md:text-xl text-gray-600 font-light leading-relaxed italic" style={{ fontFamily: 'var(--font-playfair)' }}>
                            &ldquo;To build the architectural foundation for the AI-Native era, where every organization functions as a singular, unified organism of growth.&rdquo;
                        </p>
                    </motion.div>
                    <motion.div 
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5, duration: 1 }}
                        className="p-12 bg-gray-50 rounded-[3rem] border border-gray-100"
                    >
                        <h3 className="text-2xl font-bold mb-6 text-violet-600">Our Mission</h3>
                        <p className="text-lg md:text-xl text-gray-600 font-light leading-relaxed">
                            We exist to eliminate operational fragmentation and replace it with scalable systems infrastructure that allows businesses to evolve at the speed of intelligence.
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
