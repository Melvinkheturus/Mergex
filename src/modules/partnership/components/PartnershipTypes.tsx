'use client';

import { motion } from 'framer-motion';
import { PARTNERSHIP_TYPES } from '../constants';
import { Building2, Users, ArrowRight, CheckCircle2 } from 'lucide-react';

const ICONS = {
    building: Building2,
    users: Users,
};

interface PartnershipTypesProps {
    onApplyClick?: (typeId: 'strategic' | 'referral') => void;
}

export function PartnershipTypes({ onApplyClick }: PartnershipTypesProps) {
    return (
        <section id="partnership-types" className="py-20 md:py-28 bg-gradient-to-b from-purple-50/30 via-white to-white">
            <div className="max-w-7xl mx-auto px-6 md:px-12">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-[family-name:var(--font-playfair)] font-bold text-gray-900 mb-4">
                        Partnership Models
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Choose the partnership model that aligns with your expertise and goals
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {PARTNERSHIP_TYPES.map((type, index) => {
                        const Icon = ICONS[type.icon as keyof typeof ICONS];
                        const gradientClass = type.accentColor === 'violet'
                            ? 'from-violet-400 to-violet-900'
                            : 'from-purple-400 to-purple-900';

                        return (
                            <motion.div
                                key={type.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.2 }}
                                className="group relative p-8 rounded-3xl bg-white border-2 border-gray-200 hover:border-violet-300 hover:shadow-2xl transition-all duration-300"
                            >
                                {/* Icon & Title */}
                                <div className="flex items-start gap-4 mb-6">
                                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${gradientClass} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}>
                                        <Icon className="w-7 h-7 text-white" />
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-bold text-gray-900 mb-1">
                                            {type.title}
                                        </h3>
                                        <p className="text-violet-600 font-medium">
                                            {type.tagline}
                                        </p>
                                    </div>
                                </div>

                                {/* Description */}
                                <p className="text-gray-600 mb-6 leading-relaxed">
                                    {type.description}
                                </p>

                                {/* Value Proposition */}
                                <div className="mb-6 p-4 rounded-xl bg-gradient-to-r from-purple-50 to-violet-50 border border-purple-100">
                                    <p className="text-sm font-semibold text-purple-900 italic">
                                        "{type.valueProposition}"
                                    </p>
                                </div>

                                {/* Target Audience */}
                                <div className="mb-6">
                                    <h4 className="text-sm font-semibold text-gray-900 mb-3 uppercase tracking-wide">
                                        Who this is for
                                    </h4>
                                    <div className="flex flex-wrap gap-2">
                                        {type.targetAudience.map((audience: string) => (
                                            <span
                                                key={audience}
                                                className="px-3 py-1.5 text-xs font-medium bg-gray-100 text-gray-700 rounded-full"
                                            >
                                                {audience}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* What it Looks Like */}
                                <div className="mb-8">
                                    <h4 className="text-sm font-semibold text-gray-900 mb-3 uppercase tracking-wide">
                                        What it looks like
                                    </h4>
                                    <ul className="space-y-2">
                                        {type.whatItLooks.map((item: string) => (
                                            <li key={item} className="flex items-start gap-2 text-sm text-gray-600">
                                                <CheckCircle2 className="w-4 h-4 text-violet-600 mt-0.5 flex-shrink-0" />
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* CTA Button */}
                                <button
                                    onClick={() => onApplyClick?.(type.id)}
                                    className={`
                                        group/btn w-full flex items-center justify-center gap-2 px-6 py-4 rounded-xl
                                        bg-gradient-to-b ${gradientClass}
                                        text-white font-semibold
                                        shadow-lg hover:shadow-xl
                                        transition-all duration-200
                                        hover:brightness-110 hover:-translate-y-0.5
                                        active:scale-98
                                    `}
                                >
                                    <span>{type.ctaText}</span>
                                    <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                                </button>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
