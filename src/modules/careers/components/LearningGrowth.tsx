'use client';

import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import { LEARNING_GROWTH } from '../content/careers';

export function LearningGrowth() {
    return (
        <section className="bg-gradient-to-br from-blue-50 to-purple-50 py-20">
            <div className="container mx-auto max-w-6xl px-6">
                {/* Header */}
                <motion.div
                    className="mb-12 text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
                        {LEARNING_GROWTH.headline}
                    </h2>
                    <p className="mx-auto max-w-2xl text-lg text-gray-600">
                        {LEARNING_GROWTH.subheadline}
                    </p>
                </motion.div>

                {/* Benefits */}
                <div className="mb-8 grid gap-6 md:grid-cols-2">
                    {LEARNING_GROWTH.benefits.map((benefit, index) => (
                        <motion.div
                            key={index}
                            className="rounded-xl border border-purple-200 bg-white/80 p-6 backdrop-blur-sm"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                        >
                            <div className="mb-3 flex items-start gap-3">
                                <CheckCircle2 className="mt-1 h-6 w-6 shrink-0 text-green-600" />
                                <h3 className="text-lg font-bold text-gray-900">{benefit.title}</h3>
                            </div>
                            <p className="leading-relaxed text-gray-600">{benefit.description}</p>
                        </motion.div>
                    ))}
                </div>

                {/* Disclaimer */}
                <motion.div
                    className="mx-auto max-w-3xl rounded-lg border-2 border-purple-300 bg-white p-4 text-center"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                >
                    <p className="text-sm font-medium text-gray-700">{LEARNING_GROWTH.disclaimer}</p>
                </motion.div>
            </div>
        </section>
    );
}
