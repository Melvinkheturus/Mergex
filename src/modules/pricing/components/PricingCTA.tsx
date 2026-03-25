'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Mail } from 'lucide-react';
import { PRICING_CTA } from '../content/pricing';

export function PricingCTA() {
    return (
        <section className="bg-white py-24 border-t border-gray-100">
            <div className="container mx-auto max-w-4xl px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="mb-4 text-4xl font-bold text-gray-900 md:text-5xl lg:text-6xl">
                        {PRICING_CTA.headline}
                    </h2>
                    <p className="mb-10 text-xl text-gray-500 max-w-2xl mx-auto">
                        {PRICING_CTA.subheadline}
                    </p>

                    {/* CTAs */}
                    <div className="mb-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
                        <a
                            href="https://calendly.com/mergex"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group inline-flex items-center gap-2 rounded-xl bg-gray-900 px-8 py-4 font-bold text-white shadow-lg transition-all hover:bg-gray-800 hover:scale-[1.02]"
                        >
                            {PRICING_CTA.primaryCTA}
                            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                        </a>
                        <a
                            href="mailto:melvin@mergex.in"
                            className="group inline-flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-8 py-4 font-bold text-gray-900 shadow-sm transition-all hover:bg-gray-50 hover:border-gray-300"
                        >
                            <Mail className="h-5 w-5" />
                            {PRICING_CTA.secondaryCTA}
                        </a>
                    </div>

                    {/* Reassurance */}
                    <div className="space-y-3">
                        <p className="text-sm font-medium text-gray-400">
                            {PRICING_CTA.reassurance}
                        </p>

                        {/* Final Reassurance */}
                        <p className="text-xs text-gray-300 italic">
                            {PRICING_CTA.finalReassurance}
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
