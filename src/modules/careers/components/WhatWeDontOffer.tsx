'use client';

import { motion } from 'framer-motion';
import { X } from 'lucide-react';
import { WHAT_WE_DONT_OFFER } from '../content/careers';

interface WhatWeDontOfferProps {
    content?: typeof WHAT_WE_DONT_OFFER;
}

export function WhatWeDontOffer({ content }: WhatWeDontOfferProps = {}) {
    const data = content || WHAT_WE_DONT_OFFER;
    const headline = data.headline || WHAT_WE_DONT_OFFER.headline;
    const subheadline = data.subheadline || WHAT_WE_DONT_OFFER.subheadline;
    const items = data.items?.length ? data.items : WHAT_WE_DONT_OFFER.items;
    return (
        <section className="bg-white py-20">
            <div className="container mx-auto max-w-4xl px-6">
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

                {/* Items */}
                <div className="grid gap-4 md:grid-cols-2">
                    {items.map((item: string, index: number) => (
                        <motion.div
                            key={index}
                            className="flex items-start gap-3 rounded-lg border border-red-200 bg-red-50 p-4"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                        >
                            <X className="h-5 w-5 shrink-0 text-red-600" />
                            <p className="text-sm font-medium text-red-900">{item}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
