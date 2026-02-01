'use client';

import { motion } from 'framer-motion';
import { TRUST_SECTION, TRUST_PRINCIPLES } from '../constants';
import { CheckCircle2 } from 'lucide-react';

export function TrustSection() {
    return (
        <section className="py-20 md:py-28 bg-gradient-to-b from-white to-purple-50/30">
            <div className="max-w-4xl mx-auto px-6 md:px-12">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-[family-name:var(--font-playfair)] font-bold text-gray-900 mb-4">
                        {TRUST_SECTION.headline}
                    </h2>
                    <p className="text-lg text-gray-600">
                        {TRUST_SECTION.subheadline}
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="bg-white rounded-3xl border-2 border-gray-200 shadow-xl p-8 md:p-10"
                >
                    <ul className="space-y-6">
                        {TRUST_PRINCIPLES.map((principle, index) => (
                            <motion.li
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                                className="flex items-start gap-4"
                            >
                                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-violet-400 to-purple-600 flex items-center justify-center mt-1">
                                    <CheckCircle2 className="w-5 h-5 text-white" />
                                </div>
                                <p className="text-lg text-gray-700 leading-relaxed flex-1">
                                    {principle.text}
                                </p>
                            </motion.li>
                        ))}
                    </ul>
                </motion.div>
            </div>
        </section>
    );
}
