'use client';

import { Package, ArrowRight, Sparkles } from 'lucide-react';
import Link from 'next/link';

export default function ProductsPreview() {
    return (
        <section className="py-20 md:py-28">
            <div className="max-w-7xl mx-auto px-4 md:px-10">
                {/* Heading */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-bold uppercase tracking-wider mb-6">
                        <Sparkles className="w-4 h-4" />
                        Products & Innovation
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold mb-4 font-display">
                        We Don't Just Build for Clients
                    </h2>
                    <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto font-body">
                        We build platforms and tools that solve real problems at scale
                    </p>
                </div>

                {/* Product Card - Unisynk Featured */}
                <div className="max-w-4xl mx-auto">
                    <div className="group relative p-8 md:p-12 bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl border border-primary/20 hover:border-primary/40 transition-all duration-300 overflow-hidden">
                        {/* Gradient overlay on hover */}
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                        <div className="relative z-10">
                            {/* Icon */}
                            <div className="w-16 h-16 mb-6 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                <Package className="w-8 h-8 text-white" />
                            </div>

                            {/* Content */}
                            <div className="mb-6">
                                <div className="flex items-center gap-3 mb-3">
                                    <h3 className="text-3xl font-bold font-display">Unisynk</h3>
                                    <span className="px-3 py-1 rounded-full bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-xs font-bold">
                                        COMING SOON
                                    </span>
                                </div>
                                <p className="text-xl text-gray-700 dark:text-gray-200 mb-4 font-medium">
                                    AI-powered workflow & automation platform
                                </p>
                                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                                    Built from real client problems. Designed for scale. AI-first architecture that transforms how
                                    you work.
                                </p>
                            </div>

                            {/* CTA */}
                            <Link
                                href="/products/unisynk"
                                className="inline-flex items-center gap-2 text-primary font-bold hover:gap-3 transition-all group"
                            >
                                Learn more about Unisynk
                                <ArrowRight className="w-5 h-5" />
                            </Link>
                        </div>
                    </div>

                    {/* More Products Link */}
                    <div className="text-center mt-8">
                        <Link
                            href="/products"
                            className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors font-medium"
                        >
                            View all products & tools in development
                            <ArrowRight className="w-4 h-4" />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
