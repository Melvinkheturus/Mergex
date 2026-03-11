'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { MergexOrb } from '@/modules/shared/components/AskMergex';

export function AskMergex() {
    return (
        <section className="py-20 px-4">
            <div className="max-w-3xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-violet-50 via-white to-fuchsia-50 border border-violet-100 px-8 py-12 text-center"
                >
                    {/* Subtle background blobs */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-violet-200/20 rounded-full blur-3xl pointer-events-none" />
                    <div className="absolute bottom-0 left-0 w-48 h-48 bg-fuchsia-200/20 rounded-full blur-3xl pointer-events-none" />

                    <div className="relative z-10 flex flex-col items-center">
                        <div className="relative mb-5">
                            <div className="absolute inset-0 blur-xl bg-violet-300/30 rounded-full scale-150" />
                            <MergexOrb size={56} className="relative z-10" />
                        </div>

                        <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-3">
                            Have a question?
                        </h2>
                        <p className="text-gray-500 text-sm md:text-base max-w-sm mb-8">
                            Ask Mergex Intelligence — trained on our methods, services, and insights.
                            Get clarity on systems, AI, and growth architecture instantly.
                        </p>

                        <Link
                            href="/ask-mergex"
                            className="inline-flex items-center gap-2 bg-violet-600 hover:bg-violet-700 text-white font-semibold text-sm px-6 py-3 rounded-full transition-all shadow-md hover:shadow-lg hover:scale-105 active:scale-95"
                        >
                            Ask Mergex Intelligence
                            <ArrowRight className="w-4 h-4" />
                        </Link>

                        <p className="mt-4 text-[11px] text-gray-400">
                            Free · No signup required · Instant answers
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
