'use client';

import { motion } from 'framer-motion';
import { HOW_LABS_WORKS } from '../content/labs';
import { Clipboard, Cpu, Edit, CheckCircle } from 'lucide-react';

/**
 * HowLabsWorks - Process demonstration
 */
export function HowLabsWorks() {
    const iconMap = {
        clipboard: Clipboard,
        cpu: Cpu,
        edit: Edit,
        check: CheckCircle,
    };

    return (
        <section className="pt-20 pb-20 md:pb-32 bg-white relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-[0.03]">
                <div
                    className="absolute top-0 left-0 w-full h-full"
                    style={{
                        backgroundImage: 'radial-gradient(circle, #000 1px, transparent 1px)',
                        backgroundSize: '40px 40px',
                    }}
                />
            </div>

            <div className="container mx-auto px-6 md:px-12 relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display mb-4 text-gray-900">
                        {HOW_LABS_WORKS.headline}
                    </h2>
                    <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
                        {HOW_LABS_WORKS.subheadline}
                    </p>
                </motion.div>

                {/* Process Steps */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                    {HOW_LABS_WORKS.steps.map((step, index) => {
                        const Icon = iconMap[step.icon as keyof typeof iconMap];

                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="relative"
                            >
                                {/* Connector Line (desktop only) */}
                                {index < HOW_LABS_WORKS.steps.length - 1 && (
                                    <div className="hidden lg:block absolute top-12 left-[calc(50%+40px)] w-[calc(100%-40px)] h-0.5 bg-gradient-to-r from-purple-200 to-transparent" />
                                )}

                                {/* Step Card */}
                                <div className="relative bg-white border border-gray-100 rounded-2xl p-6 hover:shadow-lg hover:border-purple-200 transition-all duration-300">
                                    {/* Step Number */}
                                    <div className="text-5xl font-bold text-gray-100 mb-2">
                                        {step.number}
                                    </div>

                                    {/* Icon */}
                                    <div className="w-12 h-12 bg-purple-50 rounded-xl flex items-center justify-center mb-4 border border-purple-100">
                                        <Icon size={24} className="text-purple-600" />
                                    </div>

                                    {/* Content */}
                                    <h3 className="text-xl font-bold mb-3 text-gray-900">
                                        {step.title}
                                    </h3>
                                    <p className="text-sm text-gray-600 leading-relaxed">
                                        {step.description}
                                    </p>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Key Messages */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    className="flex flex-wrap justify-center gap-6"
                >
                    {HOW_LABS_WORKS.keyMessages.map((message, index) => (
                        <div
                            key={index}
                            className="px-6 py-3 bg-purple-50 border border-purple-100 rounded-full text-purple-700 font-medium"
                        >
                            ✓ {message}
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
