'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import { CaseStudy } from '../types';
import { CaseStudyCardStack } from './CaseStudyCardStack';

interface ShowcaseViewProps {
    studies: CaseStudy[];
}

export const ShowcaseView: React.FC<ShowcaseViewProps> = ({ studies }) => {
    return (
        <div className="bg-gray-50/50 selection:bg-violet-100 min-h-screen">
            <style jsx global>{`
                body {
                    overflow-y: auto !important;
                }
                ::-webkit-scrollbar {
                    width: 10px;
                    background: #f1f1f1;
                }
                ::-webkit-scrollbar-thumb {
                    background: #d1d1d1;
                    border-radius: 5px;
                }
                ::-webkit-scrollbar-thumb:hover {
                    background: #bbbbbb;
                }
            `}</style>

            {/* Intro Hero */}
            <section id="intro" className="relative min-h-[100dvh] w-full flex items-center justify-center text-center px-6 overflow-hidden bg-white">

                {/* Background Image (matching SystemsHero) */}
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/assets/background/case_study_hero_bg.jpg"
                        alt="Case Studies Hero Background"
                        fill
                        className="object-cover opacity-100"
                        priority
                    />
                    {/*Light Scrim to improve hero text readability*/}
                    <div className="absolute inset-0 bg-[#f5f0ff]/25 z-[1]" />
                    {/* Bottom Fade to blend with next section */}
                    <div className="absolute bottom-0 left-0 right-0 h-[250px] z-[2] pointer-events-none"
                        style={{ background: 'linear-gradient(to bottom, transparent 0%, white 100%)' }}
                    />
                </div>

                {/* Content */}
                <div className="w-full max-w-7xl mx-auto px-4 md:px-8 py-20 md:py-32 relative z-10 flex items-center justify-center text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="space-y-6 md:space-y-8 flex flex-col items-center"
                        style={{ fontFamily: 'var(--font-manrope)' }}
                    >
                        {/* Eyebrow */}
                        <motion.p
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="text-[10px] md:text-xs text-[#1e143c] font-bold tracking-[0.3em] uppercase drop-shadow-sm"
                        >
                            Mergex · Showcase
                        </motion.p>

                        {/* Primary Headline */}
                        <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-[#0d0820] tracking-tighter leading-[1.1] max-w-4xl mx-auto text-center drop-shadow-sm">
                            Engineering Growth Through{' '}
                            <span className="text-[#0d0820]">Digital Excellence</span>
                        </h1>

                        {/* Supporting Copy */}
                        <p className="text-base md:text-lg text-[#140a32] max-w-2xl mx-auto font-medium leading-relaxed text-center drop-shadow-sm">
                            From complex business transformations to AI-powered marketing, see how we build the tools that define industry leaders.
                        </p>
                    </motion.div>
                </div>

            </section>

            {/* Case Studies Card Stack */}
            <CaseStudyCardStack studies={studies} />

            {/* Final CTA */}
            <section className="bg-gray-950 py-24 md:py-32 text-center overflow-hidden relative">
                <div className="absolute top-0 right-0 -m-20 w-[600px] h-[600px] bg-violet-600/10 blur-[120px] rounded-full" />
                <div className="absolute bottom-0 left-0 -m-20 w-[400px] h-[400px] bg-blue-600/5 blur-[100px] rounded-full" />

                <div className="container mx-auto px-6 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 md:mb-12 tracking-tight max-w-4xl mx-auto leading-[1.1]" style={{ fontFamily: 'var(--font-manrope)' }}>
                            Ready for your next <br />
                            <span className="bg-gradient-to-r from-violet-400 to-indigo-400 bg-clip-text text-transparent italic">Strategic Breakthrough?</span>
                        </h2>
                        <a href="/contact" className="group inline-flex items-center gap-4 bg-white text-gray-950 px-8 py-5 md:px-12 md:py-6 rounded-full font-bold text-lg md:text-xl hover:bg-violet-600 hover:text-white transition-all duration-500 shadow-2xl hover:shadow-violet-500/20" style={{ fontFamily: 'var(--font-manrope)' }}>
                            Start Your Transformation
                            <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
                        </a>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};
