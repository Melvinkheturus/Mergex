'use client';

import { useEffect } from 'react';
import { PartnerApplicationForm } from '@/modules/partnership/components/PartnerApplicationForm';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function ApplyPartnerPage() {
    useEffect(() => {
        if ((window as any).lenis) {
            (window as any).lenis.scrollTo(0, { immediate: true });
        } else {
            window.scrollTo(0, 0);
        }
    }, []);

    return (
        <main className="min-h-screen bg-neutral-50 py-20">
            <div className="max-w-3xl mx-auto px-6">
                <Link
                    href="/partner"
                    scroll={true}
                    className="inline-flex items-center gap-2 text-gray-600 hover:text-violet-600 mb-8 transition-colors group"
                >
                    <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                    Back to Partner Page
                </Link>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="mb-12">
                        <h1 className="text-4xl md:text-5xl font-[family-name:var(--font-playfair)] font-bold text-gray-900 mb-4">
                            Apply as a Partner
                        </h1>
                        <p className="text-lg text-gray-600">
                            Join our ecosystem and let&apos;s build something great together.
                        </p>
                    </div>

                    <PartnerApplicationForm />
                </motion.div>
            </div>
        </main>
    );
}
