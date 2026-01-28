'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { CAREERS_HERO } from '../content/careers';

export function CareersHero() {
    return (
        <section className="relative overflow-hidden bg-gradient-to-br from-purple-50 via-blue-50 to-white py-24">
            <div className="container mx-auto max-w-5xl px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    {/* Headline */}
                    <h1 className="mb-6 text-4xl font-bold leading-tight text-gray-900 md:text-6xl">
                        {CAREERS_HERO.headline}
                    </h1>

                    {/* Subheadline */}
                    <p className="mb-10 text-lg leading-relaxed text-gray-600 md:text-xl">
                        {CAREERS_HERO.subheadline}
                    </p>

                    {/* CTAs */}
                    <div className="flex flex-col justify-center gap-4 sm:flex-row">
                        <a
                            href="#apply"
                            className="group inline-flex items-center justify-center gap-2 rounded-lg bg-purple-600 px-8 py-4 font-semibold text-white shadow-lg transition-all hover:scale-105 hover:bg-purple-700"
                        >
                            {CAREERS_HERO.primaryCTA}
                            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                        </a>
                        <a
                            href="#internships"
                            className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-purple-600 bg-white px-8 py-4 font-semibold text-purple-600 transition-all hover:bg-purple-50"
                        >
                            {CAREERS_HERO.secondaryCTA}
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
