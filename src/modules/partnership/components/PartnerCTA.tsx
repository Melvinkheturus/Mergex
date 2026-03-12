'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { CTA_SECTION } from '../constants';
import { Send, Briefcase } from 'lucide-react';

interface PartnerCTAProps {
    content?: typeof CTA_SECTION;
}

export function PartnerCTA({ content }: PartnerCTAProps = {}) {
    const data = content || CTA_SECTION;
    const headline = data.headline || CTA_SECTION.headline;
    const subheadline = data.subheadline || CTA_SECTION.subheadline;
    const partnerButtonText = data.partnerButtonText || CTA_SECTION.partnerButtonText;
    const referralButtonText = data.referralButtonText || CTA_SECTION.referralButtonText;

    return (
        <section className="py-20 md:py-32 bg-gradient-to-b from-purple-50/30 to-white">
            <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-[family-name:var(--font-playfair)] font-bold text-gray-900 mb-4">
                        {headline}
                    </h2>
                    <p className="text-lg text-gray-600 mb-10">
                        {subheadline}
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/partner/apply"
                            className="
                                group flex items-center justify-center gap-3 px-8 py-4 rounded-xl
                                bg-gradient-to-b from-violet-400 to-violet-900
                                text-white font-semibold text-lg
                                shadow-lg hover:shadow-xl
                                transition-all duration-200
                                hover:brightness-110 hover:-translate-y-0.5
                                active:scale-95
                            "
                        >
                            <Briefcase className="w-5 h-5" />
                            <span>{partnerButtonText}</span>
                        </Link>

                        <Link
                            href="/partner/refer"
                            className="
                                group flex items-center justify-center gap-3 px-8 py-4 rounded-xl
                                bg-white border-2 border-violet-600
                                text-violet-900 font-semibold text-lg
                                shadow-lg hover:shadow-xl
                                transition-all duration-200
                                hover:bg-violet-50 hover:-translate-y-0.5
                                active:scale-95
                            "
                        >
                            <Send className="w-5 h-5" />
                            <span>{referralButtonText}</span>
                        </Link>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
