'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { HOW_TO_APPLY } from '../content/careers';

interface HowToApplyProps {
    content?: typeof HOW_TO_APPLY;
}

export function HowToApply({ content }: HowToApplyProps = {}) {
    const data = content || HOW_TO_APPLY;
    const headline = data.headline || HOW_TO_APPLY.headline;
    const subheadline = data.subheadline || HOW_TO_APPLY.subheadline;
    const types = (data as any).types?.length ? (data as any).types : ((data as any).applicationTypes?.length ? (data as any).applicationTypes : HOW_TO_APPLY.applicationTypes);
    const note = data.note || HOW_TO_APPLY.note;
    return (
        <section className="bg-gradient-to-br from-gray-50 to-white py-20" id="apply">
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
                        {headline}
                    </h2>
                    <p className="mx-auto max-w-2xl text-lg text-gray-600">
                        {subheadline}
                    </p>
                </motion.div>

                {/* Application Types */}
                <div className="mb-8 grid gap-6 md:grid-cols-3">
                    {types.map((type: any, index: number) => (
                        <motion.div
                            key={index}
                            className="group rounded-xl border-2 border-gray-200 bg-white p-6 transition-all hover:border-purple-300 hover:shadow-lg"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                        >
                            <h3 className="mb-3 text-xl font-bold text-gray-900">{type.title || type.type}</h3>
                            <p className="mb-6 text-sm leading-relaxed text-gray-600">{type.description}</p>
                            <a
                                href={type.ctaLink}
                                className="group/cta inline-flex items-center gap-2 font-semibold text-purple-600 hover:gap-3 transition-all"
                            >
                                {type.ctaText}
                                <ArrowRight className="h-4 w-4" />
                            </a>
                        </motion.div>
                    ))}
                </div>

                {/* Note */}
                <motion.div
                    className="mx-auto max-w-3xl rounded-lg bg-purple-50 p-6 text-center"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                >
                    <p className="text-sm font-medium text-purple-900">{note}</p>
                </motion.div>
            </div>
        </section>
    );
}
