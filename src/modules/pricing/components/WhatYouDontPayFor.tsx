'use client';

import { motion } from 'framer-motion';
import { X } from 'lucide-react';
import { WHAT_YOU_DONT_PAY_FOR } from '../content/pricing';

export function WhatYouDontPayFor() {
    return (
        <section className="bg-white py-20">
            <div className="container mx-auto max-w-6xl px-6">
                <motion.div
                    className="mb-12 text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
                        {WHAT_YOU_DONT_PAY_FOR.headline}
                    </h2>
                    <p className="mx-auto max-w-2xl text-lg text-gray-600">
                        {WHAT_YOU_DONT_PAY_FOR.subheadline}
                    </p>
                </motion.div>

                {/* Items Grid */}
                <div className="grid gap-6 md:grid-cols-2">
                    {WHAT_YOU_DONT_PAY_FOR.items.map((item, index) => (
                        <motion.div
                            key={item.title}
                            className="flex gap-4 rounded-lg border-2 border-red-100 bg-red-50/50 p-6"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                        >
                            <div className="shrink-0">
                                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-red-100">
                                    <X className="h-5 w-5 text-red-600" />
                                </div>
                            </div>
                            <div>
                                <h3 className="mb-2 font-semibold text-gray-900">{item.title}</h3>
                                <p className="text-sm leading-relaxed text-gray-600">{item.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
