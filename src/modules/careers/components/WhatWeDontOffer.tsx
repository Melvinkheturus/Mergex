'use client';

import { motion } from 'framer-motion';
import { X } from 'lucide-react';
import { WHAT_WE_DONT_OFFER } from '../content/careers';

export function WhatWeDontOffer() {
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
                        {WHAT_WE_DONT_OFFER.headline}
                    </h2>
                    <p className="mx-auto max-w-2xl text-lg text-gray-600">
                        {WHAT_WE_DONT_OFFER.subheadline}
                    </p>
                </motion.div>

                {/* Items */}
                <div className="grid gap-4 md:grid-cols-2">
                    {WHAT_WE_DONT_OFFER.items.map((item, index) => (
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
