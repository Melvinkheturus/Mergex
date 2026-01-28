'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { PRICING_FAQ } from '../content/pricing';

export function PricingFAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section className="bg-gray-50 py-20">
            <div className="container mx-auto max-w-3xl px-6">
                <motion.div
                    className="mb-12 text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
                        {PRICING_FAQ.headline}
                    </h2>
                </motion.div>

                {/* FAQ Items */}
                <div className="space-y-4">
                    {PRICING_FAQ.questions.map((faq, index) => (
                        <motion.div
                            key={index}
                            className="overflow-hidden rounded-lg border border-gray-200 bg-white"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                        >
                            <button
                                className="flex w-full items-center justify-between p-6 text-left transition-colors hover:bg-gray-50"
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                            >
                                <span className="font-semibold text-gray-900">{faq.question}</span>
                                <ChevronDown
                                    className={`h-5 w-5 shrink-0 text-gray-600 transition-transform ${openIndex === index ? 'rotate-180' : ''
                                        }`}
                                />
                            </button>
                            {openIndex === index && (
                                <div className="border-t border-gray-100 px-6 pb-6 pt-4">
                                    <p className="leading-relaxed text-gray-600">{faq.answer}</p>
                                </div>
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
