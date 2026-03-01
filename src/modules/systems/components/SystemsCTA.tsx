'use client';

import { motion } from 'framer-motion';
import { SYSTEMS_CTA } from '../content/systems';
import { ArrowRight, Mail } from 'lucide-react';

interface SystemsCTAProps {
    content?: typeof SYSTEMS_CTA;
}

/**
 * SystemsCTA - Final conversion section
 * Accepts optional `content` prop from server-side Sanity fetch.
 */
export function SystemsCTA({ content }: SystemsCTAProps = {}) {
    const data = content ?? SYSTEMS_CTA;
    const headline = data.headline || SYSTEMS_CTA.headline;
    const subheadline = data.subheadline || SYSTEMS_CTA.subheadline;
    const primaryCTA = data.primaryCTA || SYSTEMS_CTA.primaryCTA;
    const secondaryCTA = data.secondaryCTA || SYSTEMS_CTA.secondaryCTA;
    return (
        <section className="py-20 md:py-32 bg-white text-gray-900 relative overflow-hidden">
            {/* Background Elements - Removed blue blobs */}
            {/* <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-0 right-0 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl" />
            </div> */}

            <div className="container mx-auto px-6 md:px-12 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-4xl mx-auto text-center"
                >
                    {/* Headline */}
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display mb-6 text-gray-900">
                        {headline}
                    </h2>

                    {/* Subheadline */}
                    <p className="text-xl md:text-2xl text-gray-600 mb-12">
                        {subheadline}
                    </p>

                    {/* CTAs */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="group px-8 py-4 bg-black text-white rounded-xl text-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl hover:scale-105">
                            {primaryCTA}
                            <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
                        </button>
                        <button className="px-8 py-4 bg-transparent hover:bg-gray-50 text-gray-900 border-2 border-gray-200 rounded-xl text-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2">
                            <Mail size={20} />
                            {secondaryCTA}
                        </button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
