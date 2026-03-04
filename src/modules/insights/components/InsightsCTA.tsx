'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export function InsightsCTA() {
    return (
        <section className="py-20 md:py-28">
            <div className="max-w-7xl mx-auto px-6 md:px-10">
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="relative overflow-hidden rounded-3xl bg-gray-950 px-8 py-16 md:px-16 md:py-20 text-center"
                >
                    {/* Background gradient */}
                    <div
                        className="pointer-events-none absolute inset-0"
                        style={{
                            background:
                                'radial-gradient(ellipse 70% 60% at 50% 100%, rgba(139, 92, 246, 0.3) 0%, transparent 70%)',
                        }}
                    />

                    {/* Subtle grid */}
                    <div
                        className="pointer-events-none absolute inset-0 opacity-[0.04]"
                        style={{
                            backgroundImage:
                                'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)',
                            backgroundSize: '40px 40px',
                        }}
                    />

                    <div className="relative z-10">
                        <p className="text-xs font-semibold text-violet-400 uppercase tracking-[0.25em] mb-5">
                            Let&apos;s Think Together
                        </p>
                        <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight mb-5 max-w-2xl mx-auto">
                            If an idea here resonates,{' '}
                            <span
                                style={{ fontFamily: 'var(--font-playfair)' }}
                                className="italic font-normal text-violet-300"
                            >
                                let&apos;s discuss it.
                            </span>
                        </h2>
                        <p className="text-gray-400 text-lg max-w-xl mx-auto mb-10 leading-relaxed">
                            Every insight here came from a real problem. If you&apos;re looking at one and
                            seeing your business, that&apos;s probably not a coincidence.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-3 justify-center">
                            <Link
                                href="/contact"
                                className="inline-flex items-center justify-center px-8 py-3.5 bg-white text-gray-950 rounded-xl font-semibold text-sm hover:bg-violet-50 hover:scale-105 transition-all duration-200 shadow-lg"
                            >
                                Start a Conversation →
                            </Link>
                            <Link
                                href="/systems"
                                className="inline-flex items-center justify-center px-8 py-3.5 bg-white/8 border border-white/20 text-white rounded-xl font-semibold text-sm hover:bg-white/15 hover:border-white/30 transition-all duration-200 backdrop-blur-sm"
                            >
                                Explore Mergex Systems
                            </Link>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
