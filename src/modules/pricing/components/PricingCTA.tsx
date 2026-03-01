'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Mail } from 'lucide-react';
import { PRICING_CTA } from '../content/pricing';

interface PricingCTAProps {
    content?: typeof PRICING_CTA;
}

export function PricingCTA({ content }: PricingCTAProps = {}) {
    const data = content || PRICING_CTA;
    const headline = data.headline || PRICING_CTA.headline;
    const subheadline = data.subheadline || PRICING_CTA.subheadline;
    const primaryCTA = data.primaryCTA || PRICING_CTA.primaryCTA;
    const secondaryCTA = data.secondaryCTA || PRICING_CTA.secondaryCTA;
    const reassurance = data.reassurance || PRICING_CTA.reassurance;
    const finalReassurance = data.finalReassurance || PRICING_CTA.finalReassurance;
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
                        {headline}
                    </h2>
                    <p className="mb-8 text-lg text-purple-100 md:text-xl">
                        {subheadline}
                    </p>

                    {/* CTAs */}
                    <div className="mb-6 flex flex-col items-center justify-center gap-4 sm:flex-row">
                        <a
                            href="https://calendly.com/mergex"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group inline-flex items-center gap-2 rounded-lg bg-white px-8 py-4 font-semibold text-purple-600 shadow-lg transition-all hover:scale-105 hover:shadow-xl"
                        >
                            {primaryCTA}
                            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                        </a>
                        <a
                            href="mailto:melvin@mergex.in"
                            className="group inline-flex items-center gap-2 rounded-lg border-2 border-white/30 bg-white/10 px-8 py-4 font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/20"
                        >
                            <Mail className="h-5 w-5" />
                            {secondaryCTA}
                        </a>
                    </div>

                    {/* Reassurance */}
                    <p className="text-sm text-purple-100">
                        {reassurance}
                    </p>

                    {/* Final Reassurance */}
                    <p className="text-xs text-purple-200 italic mt-3">
                        {finalReassurance}
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
