'use client';

import { motion } from 'framer-motion';
import { REFERRAL_EXPLAINER } from '../constants';
import { Send, Cog, DollarSign } from 'lucide-react';

const STEP_ICONS = {
    '01': Send,
    '02': Cog,
    '03': DollarSign,
};

export function ReferralExplainer() {
    return (
        <section className="py-20 md:py-28 bg-white">
            <div className="max-w-6xl mx-auto px-6 md:px-12">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-[family-name:var(--font-playfair)] font-bold text-gray-900 mb-4">
                        {REFERRAL_EXPLAINER.headline}
                    </h2>
                    <p className="text-lg text-gray-600">
                        A simple, transparent process
                    </p>
                </motion.div>

                {/* Steps */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                    {REFERRAL_EXPLAINER.steps.map((step, index) => {
                        const Icon = STEP_ICONS[step.number as keyof typeof STEP_ICONS];
                        return (
                            <motion.div
                                key={step.number}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.15 }}
                                className="relative text-center"
                            >
                                {/* Connector Line (hidden on last item) */}
                                {index < REFERRAL_EXPLAINER.steps.length - 1 && (
                                    <div className="hidden md:block absolute top-12 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-purple-300 to-transparent" />
                                )}

                                {/* Icon Circle */}
                                <div className="relative mx-auto w-24 h-24 rounded-full bg-gradient-to-br from-violet-400 to-purple-900 flex items-center justify-center mb-6 shadow-lg">
                                    <Icon className="w-10 h-10 text-white" />
                                    <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-white shadow-md flex items-center justify-center">
                                        <span className="text-xs font-bold text-purple-900">{step.number}</span>
                                    </div>
                                </div>

                                <h3 className="text-xl font-bold text-gray-900 mb-3">
                                    {step.title}
                                </h3>
                                <p className="text-gray-600 leading-relaxed">
                                    {step.description}
                                </p>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Commission Note */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="p-6 rounded-2xl bg-gradient-to-r from-purple-50 to-violet-50 border border-purple-200 max-w-3xl mx-auto"
                >
                    <p className="text-sm text-gray-700 leading-relaxed text-center">
                        <span className="font-semibold text-purple-900">Commission Transparency: </span>
                        {REFERRAL_EXPLAINER.commissionNote}
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
