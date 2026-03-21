'use client';

import { motion } from 'framer-motion';
import { PARTNERSHIP_TYPES } from '../constants';
import { Building2, Users, Zap, CheckCircle2, ArrowRight } from 'lucide-react';
import { PartnershipTypeId } from '../types';
import { Ripple } from '@/components/ui/ripple';

const ICONS = {
    building: Building2,
    users: Users,
    zap: Zap,
};

interface PartnershipTypesProps {
    onApplyClick?: (typeId: PartnershipTypeId) => void;
}

export function PartnershipTypes({ onApplyClick }: PartnershipTypesProps) {
    return (
        <section id="partnership-types" className="py-20 md:py-32 bg-[#fafafa]">
            <div className="max-w-7xl mx-auto px-6 md:px-12">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-20"
                >
                    <h2 className="text-3xl md:text-5xl lg:text-6xl font-(family-name:--font-playfair) font-bold text-gray-900 mb-6 line-clamp-2">
                        Partnership Models
                    </h2>
                    <p className="text-lg md:text-xl text-gray-500 max-w-2xl mx-auto font-light">
                        Choose the partnership model that aligns with your expertise and goals
                    </p>
                </motion.div>

                <div className="flex flex-col gap-12">
                    {PARTNERSHIP_TYPES.map((type, index) => {
                        const Icon = ICONS[type.icon as keyof typeof ICONS];

                        return (
                            <motion.div
                                key={type.id}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.7, delay: index * 0.1 }}
                                className="bg-white rounded-[2.5rem] p-3 flex flex-col lg:flex-row gap-3 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] border border-gray-100"
                            >
                                {/* Left Part - Light Gray */}
                                <div className="flex-1 bg-[#f4f4f5] rounded-[2rem] p-8 lg:p-12 flex flex-col justify-between">
                                    <div>
                                        <div className="mb-4">
                                            <Icon className="w-8 h-8 text-gray-400" strokeWidth={1.5} />
                                        </div>
                                        <h3 className="text-gray-400 text-xl font-light mb-1">
                                            {type.tagline}
                                        </h3>
                                        <h2 className="text-3xl lg:text-4xl font-semibold text-gray-900 mb-6 leading-tight font-(family-name:--font-manrope)">
                                            {type.title}
                                        </h2>
                                        <p className="text-gray-600 mb-10 leading-relaxed max-w-lg text-lg">
                                            {type.description}
                                        </p>

                                        <div className="flex flex-wrap gap-3 mb-12">
                                            {type.targetAudience.map((audience: string) => (
                                                <span
                                                    key={audience}
                                                    className="px-4 py-2 bg-white border border-gray-200/60 rounded-full text-sm font-medium text-gray-700 shadow-xs"
                                                >
                                                    {audience}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    <div>
                                        <button
                                            onClick={() => onApplyClick?.(type.id)}
                                            className="inline-flex items-center gap-3 px-6 py-3.5 bg-[#1a1a1a] text-white rounded-full text-sm font-medium hover:bg-black transition-colors shadow-lg"
                                        >
                                            <div className="w-2.5 h-2.5 rounded-full bg-purple-400 shadow-[0_0_8px_rgba(192,132,252,0.6)]"></div>
                                            {type.ctaText}
                                        </button>
                                    </div>
                                </div>

                                {/* Right Part - Dark */}
                                <div className="flex-1 bg-[#111111] rounded-[2rem] p-8 lg:p-12 text-white flex flex-col justify-between relative overflow-hidden group">
                                    {/* Abstract background graphics (mimicking the circles) */}
                                    <div className="absolute inset-0 opacity-30 pointer-events-none transition-transform duration-700 group-hover:scale-105">
                                        <div className="absolute top-[50%] right-[-5%] w-0 h-0">
                                            <Ripple mainCircleSize={120} mainCircleOpacity={0.45} opacityReduction={0.08} numCircles={5} />
                                        </div>
                                    </div>

                                    <div className="relative z-10 flex-col flex h-full">
                                        <h3 className="text-2xl lg:text-3xl font-medium mb-6 leading-snug font-(family-name:--font-manrope)">
                                            {type.valueProposition}
                                        </h3>
                                        
                                        <div className="mb-12 mt-6">
                                            <p className="text-gray-400 mb-6 text-sm font-medium uppercase tracking-wider">What it looks like</p>
                                            <ul className="space-y-5">
                                                {type.whatItLooks.map((item: string) => (
                                                    <li key={item} className="flex items-start gap-4 text-gray-300">
                                                        <div className="mt-1 w-5 h-5 rounded-full bg-gray-800 border border-gray-700 flex items-center justify-center shrink-0">
                                                            <div className="w-2 h-2 rounded-full bg-purple-400"></div>
                                                        </div>
                                                        <span className="leading-relaxed">{item}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        <div className="mt-auto pt-6 flex items-center justify-between relative z-10 border-t border-white/10">
                                            <div className="flex items-center gap-2 text-purple-400 text-sm font-medium">
                                                <CheckCircle2 className="w-4 h-4" />
                                                <span>Verified Partnership</span>
                                            </div>
                                            <button 
                                                onClick={() => onApplyClick?.(type.id)}
                                                className="px-6 py-3 bg-white text-black rounded-full text-sm font-semibold hover:bg-gray-200 transition-colors flex items-center gap-2"
                                            >
                                                Apply Now <ArrowRight className="w-4 h-4" />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
