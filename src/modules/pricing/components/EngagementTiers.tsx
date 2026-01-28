'use client';

import { motion } from 'framer-motion';
import { Check, Sparkles, TrendingUp, Users } from 'lucide-react';
import { ENGAGEMENT_TIERS } from '../content/pricing';

const iconMap = {
    rocket: Sparkles,
    'trending-up': TrendingUp,
    users: Users,
};

export function EngagementTiers() {
    return (
        <section className="bg-white py-20">
            <div className="container mx-auto max-w-7xl px-6">
                {/* Header */}
                <motion.div
                    className="mb-16 text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
                        {ENGAGEMENT_TIERS.headline}
                    </h2>
                    <p className="mx-auto max-w-2xl text-lg text-gray-600">
                        {ENGAGEMENT_TIERS.subheadline}
                    </p>
                </motion.div>

                {/* Tiers Grid */}
                <div className="grid gap-8 md:grid-cols-3">
                    {ENGAGEMENT_TIERS.tiers.map((tier, index) => {
                        const Icon = iconMap[tier.icon as keyof typeof iconMap];

                        return (
                            <motion.div
                                key={tier.name}
                                className={`relative rounded-2xl border-2 p-8 transition-all hover:shadow-xl ${tier.recommended
                                        ? 'border-purple-500 bg-gradient-to-br from-purple-50 to-white'
                                        : 'border-gray-200 bg-white hover:border-purple-200'
                                    }`}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                            >
                                {/* Recommended Badge */}
                                {tier.recommended && (
                                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-purple-600 px-4 py-1 text-sm font-semibold text-white">
                                        Most Popular
                                    </div>
                                )}

                                {/* Icon */}
                                <div className="mb-6 flex items-center gap-3">
                                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-purple-100">
                                        <Icon className="h-6 w-6 text-purple-600" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900">{tier.name}</h3>
                                        <p className="text-sm text-gray-600">{tier.tagline}</p>
                                    </div>
                                </div>

                                {/* Best For */}
                                <div className="mb-6">
                                    <p className="text-sm font-semibold text-gray-700">Best for:</p>
                                    <p className="text-gray-600">{tier.bestFor}</p>
                                </div>

                                {/* Includes */}
                                <div className="mb-6">
                                    <p className="mb-3 text-sm font-semibold text-gray-700">Includes:</p>
                                    <ul className="space-y-2">
                                        {tier.includes.map((item, i) => (
                                            <li key={i} className="flex items-start gap-2">
                                                <Check className="mt-0.5 h-5 w-5 shrink-0 text-green-600" />
                                                <span className="text-sm text-gray-600">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Price Framing */}
                                <div className="rounded-lg bg-gray-50 p-4">
                                    <p className="text-sm leading-relaxed text-gray-700">{tier.priceFraming}</p>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Bottom Note */}
                <motion.p
                    className="mt-12 text-center text-gray-600"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                >
                    All engagements are custom-scoped.{' '}
                    <a href="#contact" className="font-semibold text-purple-600 hover:text-purple-700">
                        Let's discuss your specific needs →
                    </a>
                </motion.p>
            </div>
        </section>
    );
}
