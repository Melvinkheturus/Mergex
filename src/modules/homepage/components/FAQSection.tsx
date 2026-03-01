'use client';

import { useState, useRef } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, Mail } from 'lucide-react';
import { PARENT_FAQ_DATA, SYSTEMS_FAQ_DATA } from '../content/faq';

interface FAQSectionProps {
    variant?: 'parent' | 'systems';
}

export function FAQSection({ variant = 'parent' }: FAQSectionProps) {
    const [openIndex, setOpenIndex] = useState<number | null>(0);
    const sectionRef = useRef<HTMLElement>(null);

    // Select FAQ data based on variant
    const FAQ_DATA = variant === 'systems' ? SYSTEMS_FAQ_DATA : PARENT_FAQ_DATA;

    const toggleQuestion = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section
            ref={sectionRef}
            className="relative overflow-hidden bg-white pt-24 md:pt-32 pb-24 md:pb-32"
        >
            {/* ✅ Content */}
            <div
                className="container mx-auto px-6 md:px-12 relative z-10 text-gray-900"
            >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
                    {/* Left Column - Hero Content */}
                    <div className="lg:col-span-5">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="-ml-4 md:-ml-8"
                        >
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-[family-name:var(--font-manrope)] font-semibold mb-2 leading-tight" style={{ color: 'inherit' }}>
                                {FAQ_DATA.headline}
                            </h2>
                            <h3 className="text-3xl md:text-4xl lg:text-5xl font-[family-name:var(--font-manrope)] font-semibold mb-6 leading-tight" style={{ color: 'inherit' }}>
                                {FAQ_DATA.subheadline}{' '}
                                <span className="italic font-serif font-light block mt-1 pb-1 bg-gradient-to-b from-violet-300 to-purple-600 bg-clip-text text-transparent">
                                    {FAQ_DATA.subheadlineItalic}
                                </span>
                            </h3>

                            <p className="mb-12 text-base md:text-lg leading-relaxed opacity-80" style={{ color: 'inherit' }}>
                                {FAQ_DATA.description}
                            </p>

                            {/* CTA Area */}
                            <div className="space-y-6">
                                <div>
                                    <p className="font-semibold text-lg mb-2" style={{ color: 'inherit' }}>
                                        {FAQ_DATA.ctaText}
                                    </p>
                                    <p className="text-sm opacity-70" style={{ color: 'inherit' }}>
                                        {FAQ_DATA.ctaSubtext}
                                    </p>
                                </div>

                                <div className="flex flex-col sm:flex-row gap-4">
                                    <Link
                                        href="/contact"
                                        className="
                                            group relative px-6 py-3 rounded-full overflow-hidden 
                                            bg-gradient-to-b from-violet-400 to-violet-900
                                            text-white font-medium
                                            shadow-lg shadow-violet-900/30
                                            transition-all duration-200 ease-out
                                            hover:brightness-110 hover:-translate-y-0.5
                                            active:scale-95
                                            flex items-center gap-2
                                            inline-flex
                                        "
                                    >
                                        <lord-icon
                                            src="https://cdn.lordicon.com/fpvaxfly.json"
                                            trigger="loop-on-hover"
                                            state="morph-phone-ring"
                                            colors="primary:#ffffff"
                                            style={{ width: '24px', height: '24px' }}
                                        />
                                        <span>{FAQ_DATA.buttonText}</span>
                                    </Link>

                                    <a
                                        href={`mailto:${FAQ_DATA.email}`}
                                        className="inline-flex items-center gap-2 px-6 py-3 border border-current rounded-full hover:opacity-80 transition-opacity"
                                        style={{ borderColor: 'inherit', color: 'inherit' }}
                                    >
                                        <Mail size={18} />
                                        {FAQ_DATA.email}
                                    </a>
                                </div>

                                <p className="text-sm italic opacity-70">
                                    {FAQ_DATA.microcopy}
                                </p>
                            </div>
                        </motion.div>
                    </div>

                    {/* Right Column - FAQ Accordion */}
                    <div className="lg:col-span-7 mt-8 lg:mt-0">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="space-y-0"
                        >
                            {FAQ_DATA.questions.map((faq, index) => (
                                <div
                                    key={index}
                                    className="border-b border-gray-200/20 last:border-0"
                                >
                                    <button
                                        onClick={() => toggleQuestion(index)}
                                        className="w-full flex items-center justify-between gap-6 py-8 text-left group transition-all"
                                    >
                                        <span className="text-xl font-[family-name:var(--font-manrope)] font-medium transition-all pr-8 leading-snug group-hover:bg-gradient-to-b group-hover:from-violet-300 group-hover:to-purple-600 group-hover:bg-clip-text group-hover:!text-transparent" style={{ color: 'inherit' }}>
                                            {faq.question}
                                        </span>
                                        <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center transition-colors" style={{ color: 'inherit' }}>
                                            <AnimatePresence mode='wait' initial={false}>
                                                {openIndex === index ? (
                                                    <motion.div
                                                        key="minus"
                                                        initial={{ opacity: 0, rotate: -90 }}
                                                        animate={{ opacity: 1, rotate: 0 }}
                                                        exit={{ opacity: 0, rotate: 90 }}
                                                        transition={{ duration: 0.2 }}
                                                    >
                                                        <Minus size={24} strokeWidth={1.5} />
                                                    </motion.div>
                                                ) : (
                                                    <motion.div
                                                        key="plus"
                                                        initial={{ opacity: 0, rotate: 90 }}
                                                        animate={{ opacity: 1, rotate: 0 }}
                                                        exit={{ opacity: 0, rotate: -90 }}
                                                        transition={{ duration: 0.2 }}
                                                    >
                                                        <Plus size={24} strokeWidth={1.5} />
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>
                                        </span>
                                    </button>

                                    <AnimatePresence>
                                        {openIndex === index && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0, marginBottom: 0 }}
                                                animate={{ height: 'auto', opacity: 1, marginBottom: 32 }}
                                                exit={{ height: 0, opacity: 0, marginBottom: 0 }}
                                                transition={{ duration: 0.3, ease: 'easeInOut' }}
                                                className="overflow-hidden"
                                            >
                                                <div className="pr-12">
                                                    <p className="text-lg leading-relaxed font-light font-[family-name:var(--font-manrope)] opacity-80" style={{ color: 'inherit' }}>
                                                        {faq.answer}
                                                    </p>
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </div>

        </section>
    );
}
