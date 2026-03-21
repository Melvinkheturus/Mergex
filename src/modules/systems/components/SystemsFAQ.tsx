'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Plus, Minus, Sparkles } from 'lucide-react';
import { TextReveal } from '@/modules/shared/components/TextReveal';
import Image from 'next/image';
import Link from 'next/link';
import { SYSTEMS_FAQ_DATA } from '@/modules/homepage/content/faq';

/**
 * SystemsFAQ - FAQ accordion section
 * Minimal white design with purple gradient accents
 */

export function SystemsFAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="py-16 md:py-24 bg-white w-full">
            <div className="container mx-auto px-6 md:px-12">
                <div className="max-w-4xl mx-auto">
                    {/* Header */}
                    <div className="mb-12">
                        <TextReveal>
                            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#1A1A1A]"
                                style={{ fontFamily: 'var(--font-geist-sans)' }}
                            >
                                {SYSTEMS_FAQ_DATA.headline}
                            </h2>
                        </TextReveal>
                        <TextReveal delay={0.1}>
                            <p className="text-lg text-[#666666]">
                                {SYSTEMS_FAQ_DATA.subheadline} {SYSTEMS_FAQ_DATA.subheadlineItalic}
                            </p>
                        </TextReveal>
                        <TextReveal delay={0.2}>
                            <p className="text-sm text-[#999999] mt-1">
                                {SYSTEMS_FAQ_DATA.description}
                            </p>
                        </TextReveal>
                    </div>

                    {/* FAQ List */}
                    <div className="space-y-4">
                        {SYSTEMS_FAQ_DATA.questions.map((faq, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.05 }}
                                className="bg-white border border-[#F0F0F0] rounded-xl overflow-hidden"
                            >
                                {/* Question */}
                                <button
                                    onClick={() => toggleFAQ(index)}
                                    className="w-full flex items-center justify-between p-6 text-left hover:bg-[#FAFAFA] transition-colors"
                                >
                                    <span className="text-[#1A1A1A] font-medium pr-4">
                                        {faq.question}
                                    </span>
                                    <div className="shrink-0 w-8 h-8 bg-linear-to-br from-purple-600 to-purple-400 rounded-md flex items-center justify-center">
                                        {openIndex === index ? (
                                            <Minus size={16} className="text-white" />
                                        ) : (
                                            <Plus size={16} className="text-white" />
                                        )}
                                    </div>
                                </button>

                                {/* Answer */}
                                <motion.div
                                    initial={false}
                                    animate={{
                                        height: openIndex === index ? 'auto' : 0,
                                        opacity: openIndex === index ? 1 : 0,
                                    }}
                                    transition={{ duration: 0.3 }}
                                    className="overflow-hidden"
                                >
                                    <div className="px-6 pb-6 text-[#666666] text-sm leading-relaxed">
                                        <p>{faq.answer}</p>
                                        <div className="mt-4 flex">
                                            <button 
                                                onClick={() => {
                                                    const event = new CustomEvent('mergex-open-chat', {
                                                        detail: { 
                                                            question: faq.question,
                                                            chatPrompt: (faq as any).chatPrompt 
                                                        }
                                                    });

                                                    window.dispatchEvent(event);
                                                }}
                                                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full bg-purple-50 text-purple-700 border border-purple-100 hover:bg-purple-100 hover:text-purple-800 transition-colors text-xs font-medium"
                                            >
                                                Ask Mergex about this
                                            </button>
                                        </div>

                                    </div>
                                </motion.div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
