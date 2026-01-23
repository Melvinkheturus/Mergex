'use client';

import { ArrowRight, Handshake } from 'lucide-react';
import Link from 'next/link';

export default function PartnerCTA() {
    return (
        <section className="py-16 md:py-20">
            <div className="max-w-7xl mx-auto px-4 md:px-10">
                <div className="max-w-4xl mx-auto p-8 md:p-12 bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl border border-primary/20">
                    <div className="flex flex-col md:flex-row items-center gap-6">
                        {/* Icon */}
                        <div className="w-16 h-16 rounded-xl bg-primary flex items-center justify-center flex-shrink-0">
                            <Handshake className="w-8 h-8 text-white" />
                        </div>

                        {/* Content */}
                        <div className="flex-1 text-center md:text-left">
                            <h3 className="text-2xl md:text-3xl font-bold mb-2 font-display">Build With Us</h3>
                            <p className="text-gray-700 dark:text-gray-200 font-body">
                                Strategic partnerships for agencies, founders, and enterprises looking for technical execution and
                                innovation expertise.
                            </p>
                        </div>

                        {/* CTA */}
                        <Link
                            href="/partner"
                            className="flex-shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-white font-bold hover:bg-primary-hover transition-colors group"
                        >
                            Explore Partnership
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
