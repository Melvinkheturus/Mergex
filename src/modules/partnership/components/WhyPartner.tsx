'use client';

import { motion } from 'framer-motion';
import { WHY_PARTNER_CONTENT, PARTNERSHIP_BENEFITS } from '../constants';
import { Target, Zap, Shield, TrendingUp } from 'lucide-react';

const ICONS = {
    target: Target,
    zap: Zap,
    shield: Shield,
    'trending-up': TrendingUp,
};

interface WhyPartnerProps {
    content?: typeof WHY_PARTNER_CONTENT;
    benefits?: any[];
}

export function WhyPartner({ content, benefits }: WhyPartnerProps = {}) {
    const data = content || WHY_PARTNER_CONTENT;
    const headline = data.headline || WHY_PARTNER_CONTENT.headline;
    const subheadline = data.subheadline || WHY_PARTNER_CONTENT.subheadline;
    const benefitsList = benefits?.length ? benefits : PARTNERSHIP_BENEFITS;
    return (
        <section className="py-20 md:py-28 bg-white">
            <div className="max-w-7xl mx-auto px-6 md:px-12">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-[family-name:var(--font-playfair)] font-bold text-gray-900 mb-4">
                        {headline}
                    </h2>
                    <p className="text-lg text-gray-600">
                        {subheadline}
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {benefitsList.map((benefit: any, index: number) => {
                        const Icon = ICONS[benefit.icon as keyof typeof ICONS] || Target;
                        return (
                            <motion.div
                                key={benefit.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="group p-6 rounded-2xl bg-gradient-to-b from-gray-50 to-white border border-gray-200 hover:border-violet-300 hover:shadow-lg transition-all duration-300"
                            >
                                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-violet-400 to-purple-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                    <Icon className="w-6 h-6 text-white" />
                                </div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                                    {benefit.title}
                                </h3>
                                <p className="text-gray-600 leading-relaxed">
                                    {benefit.description}
                                </p>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
