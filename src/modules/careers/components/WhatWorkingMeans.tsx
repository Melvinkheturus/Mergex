'use client';

import { motion } from 'framer-motion';
import { WHAT_WORKING_MEANS } from '../content/careers';

export function WhatWorkingMeans() {
    return (
        <section className="bg-white py-20">
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
                        {WHAT_WORKING_MEANS.headline}
                    </h2>
                    <p className="mx-auto max-w-2xl text-lg text-gray-600">
                        {WHAT_WORKING_MEANS.subheadline}
                    </p>
                </motion.div>

                {/* Principles Grid */}
                <div className="grid gap-8 md:grid-cols-2">
                    {WHAT_WORKING_MEANS.principles.map((principle, index) => (
                        <motion.div
                            key={index}
                            className="rounded-xl border border-gray-200 bg-gray-50 p-6"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                        >
                            <h3 className="mb-3 text-xl font-bold text-gray-900">{principle.title}</h3>
                            <p className="leading-relaxed text-gray-600">{principle.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
