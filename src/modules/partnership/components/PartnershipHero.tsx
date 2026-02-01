'use client';

import { motion } from 'framer-motion';
import { HERO_CONTENT } from '../constants';
import { ArrowDown } from 'lucide-react';

export function PartnershipHero() {
    const scrollToTypes = () => {
        const element = document.getElementById('partnership-types');
        element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

    return (
        <section className="relative min-h-[70vh] flex items-center justify-center bg-gradient-to-b from-white via-purple-50/30 to-white px-6 pt-32 pb-20">
            <div className="max-w-5xl mx-auto text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-playfair)] font-bold text-gray-900 mb-6 leading-tight">
                        {HERO_CONTENT.headline}
                    </h1>
                    <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed">
                        {HERO_CONTENT.subheadline}
                    </p>

                    <motion.button
                        onClick={scrollToTypes}
                        className="
                            group relative px-8 py-4 rounded-full overflow-hidden
                            bg-gradient-to-b from-violet-400 to-violet-900
                            text-white font-medium text-lg
                            shadow-lg shadow-violet-900/30
                            transition-all duration-200 ease-out
                            hover:brightness-110 hover:-translate-y-0.5
                            active:scale-95
                            flex items-center gap-3 mx-auto
                        "
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        <span>{HERO_CONTENT.ctaText}</span>
                        <ArrowDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
                    </motion.button>
                </motion.div>
            </div>

            {/* Decorative gradient orbs */}
            <div className="absolute top-20 left-10 w-72 h-72 bg-violet-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob" />
            <div className="absolute top-40 right-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000" />
        </section>
    );
}
