'use client';

import { motion } from 'framer-motion';
import { PRICING_FACTORS } from '../content/pricing';

interface PricingFactorsProps {
    content?: typeof PRICING_FACTORS;
}

export function PricingFactors({ content }: PricingFactorsProps = {}) {
    const data = content || PRICING_FACTORS;
    const headline = data.headline || PRICING_FACTORS.headline;
    const subheadline = data.subheadline || PRICING_FACTORS.subheadline;
    const factors = (data as any).list?.length ? (data as any).list : PRICING_FACTORS.factors;
    const closingStatement = data.closingStatement || PRICING_FACTORS.closingStatement;
    const labsClarification = data.labsClarification || PRICING_FACTORS.labsClarification;
    return (
        <section className="bg-gray-50 py-20">
            <div className="container mx-auto max-w-6xl px-6">
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

                {/* Factors Grid */}
                <div className="mb-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {factors.map((factor: any, index: number) => (
                        <motion.div
                            key={factor.title}
                            className="rounded-lg border border-gray-200 bg-white p-6 transition-shadow hover:shadow-md"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                        >
                            <h3 className="mb-2 font-semibold text-gray-900">{factor.title}</h3>
                            <p className="text-sm leading-relaxed text-gray-600">{factor.description}</p>
                        </motion.div>
                    ))}
                </div>

                {/* Closing Statement */}
                <motion.div
                    className="mx-auto max-w-2xl rounded-lg bg-purple-50 border border-purple-100 p-6 text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                >
                    <p className="text-lg font-medium text-purple-900">{closingStatement}</p>
                </motion.div>

                {/* Labs Clarification */}
                <motion.p
                    className="mx-auto max-w-2xl text-center text-sm text-gray-500 italic mt-6"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                >
                    {labsClarification}
                </motion.p>
            </div>
        </section>
    );
}
