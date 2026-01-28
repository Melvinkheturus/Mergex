'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Mail } from 'lucide-react';
import { PRICING_CTA } from '../content/pricing';

export function PricingCTA() {
    return (
        <section className="bg-gradient-to-br from-purple-600 to-blue-600 py-20">
            <div className="container mx-auto max-w-4xl px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl lg:text-5xl">
                        {PRICING_CTA.headline}
                    </h2>
                    <p className="mb-8 text-lg text-purple-100 md:text-xl">
                        {PRICING_CTA.subheadline}
                    </p>

                    {/* CTAs */}
                    <div className="mb-6 flex flex-col items-center justify-center gap-4 sm:flex-row">
                        <a
                            href="https://calendly.com/mergex"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group inline-flex items-center gap-2 rounded-lg bg-white px-8 py-4 font-semibold text-purple-600 shadow-lg transition-all hover:scale-105 hover:shadow-xl"
                        >
                            {PRICING_CTA.primaryCTA}
                            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                        </a>
                        <a
                            href="mailto:melvin@mergex.in"
                            className="group inline-flex items-center gap-2 rounded-lg border-2 border-white/30 bg-white/10 px-8 py-4 font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/20"
                        >
                            <Mail className="h-5 w-5" />
                            {PRICING_CTA.secondaryCTA}
                        </a>
                    </div>

                    {/* Reassurance */}
                    <p className="text-sm text-purple-100">
                        {PRICING_CTA.reassurance}
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
