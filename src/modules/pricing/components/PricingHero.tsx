'use client';

import { motion } from 'framer-motion';
import { PRICING_HERO } from '../content/pricing';

export function PricingHero() {
    return (
        <section className="relative overflow-hidden bg-gradient-to-br from-purple-50 via-white to-blue-50 pt-32 pb-20">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-30">
                <div className="absolute inset-0" style={{
                    backgroundImage: `radial-gradient(circle at 1px 1px, rgb(139, 92, 246) 1px, transparent 0)`,
                    backgroundSize: '40px 40px'
                }}></div>
            </div>

            <div className="container relative mx-auto max-w-4xl px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h1 className="mb-6 text-4xl font-bold leading-tight text-gray-900 md:text-5xl lg:text-6xl">
                        {PRICING_HERO.headline}
                    </h1>
                    <p className="mx-auto max-w-2xl text-lg text-gray-600 md:text-xl">
                        {PRICING_HERO.subheadline}
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
