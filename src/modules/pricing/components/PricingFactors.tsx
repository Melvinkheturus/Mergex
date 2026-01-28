'use client';

import { motion } from 'framer-motion';
import { PRICING_FACTORS } from '../content/pricing';

export function PricingFactors() {
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
                        {PRICING_FACTORS.headline}
                    </h2>
                    <p className="mx-auto max-w-2xl text-lg text-gray-600">
                        {PRICING_FACTORS.subheadline}
                    </p>
                </motion.div>

                {/* Factors Grid */}
                <div className="mb-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {PRICING_FACTORS.factors.map((factor, index) => (
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
                    <p className="text-lg font-medium text-purple-900">{PRICING_FACTORS.closingStatement}</p>
                </motion.div>
            </div>
        </section>
    );
}
