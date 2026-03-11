'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { AskMergex } from '@/modules/shared/components/AskMergex';
import { Plus, Minus, MessageCircle } from 'lucide-react';
import { useState } from 'react';
import { cn } from '@/lib/utils';

const PARTNER_FAQ_DATA = {
    headline: "Partnering With Mergex",
    subheadline: "Common Questions About",
    subheadlineItalic: "Our Ecosystem",
    description: "Everything you need to know about working together as strategic or referral partners.",
    questions: [
        {
            question: "Who is the ideal Mergex partner?",
            answer: "We partner with agencies, consultants, individual connectors, and platform owners who work with businesses needing technology, AI, or content systems. If you have clients who need to move faster or simplify their vendor stack, we're likely a good fit."
        },
        {
            question: "Is the referral program purely revenue-based?",
            answer: "While we offer competitive referral commissions, we prioritize value alignment. We want partners who believe in our 'Unified Growth' philosophy. We're looking for quality connections where Mergex can truly move the needle for the client."
        },
        {
            question: "Do you offer white-label services for agencies?",
            answer: "Yes, for select strategic partners. We can function as your 'AI & Systems' extension, allowing you to offer advanced technical and creative capabilities under your own brand while we handle the execution architecture."
        },
        {
            question: "What is the first step to becoming a partner?",
            answer: "Start by filling out the partnership form or asking our AI assistant below. We'll then schedule a brief conversation to understand your network, how you work, and where we can create the most mutual value."
        }
    ],
    aiSuggestions: [
        "What are the referral commission rates?",
        "Do you provide marketing materials for partners?",
        "How do you handle client conflict between partners?",
        "Can we do a co-branded event?"
    ]
};

export function PartnerFAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section className="py-24 bg-white relative overflow-hidden">
            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-4xl mx-auto mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-4">FAQ</h2>
                        <h3 className="text-4xl md:text-5xl font-[family-name:var(--font-manrope)] font-bold mb-6 tracking-tight">
                            {PARTNER_FAQ_DATA.headline}
                        </h3>
                        <p className="text-xl text-gray-600 max-w-2xl font-light leading-relaxed">
                            {PARTNER_FAQ_DATA.description}
                        </p>
                    </motion.div>
                </div>

                <div className="max-w-4xl mx-auto space-y-4 mb-24">
                    {PARTNER_FAQ_DATA.questions.map((faq, index) => (
                        <div 
                            key={index} 
                            className={cn(
                                "group rounded-2xl border transition-all duration-300",
                                openIndex === index 
                                    ? "bg-gray-50 border-violet-100 shadow-sm" 
                                    : "border-gray-100 hover:border-gray-200"
                            )}
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="w-full flex items-center justify-between p-6 text-left"
                            >
                                <span className={cn(
                                    "text-lg font-semibold transition-colors",
                                    openIndex === index ? "text-violet-700" : "text-gray-900"
                                )}>
                                    {faq.question}
                                </span>
                                {openIndex === index ? (
                                    <Minus className="w-5 h-5 text-violet-500" />
                                ) : (
                                    <Plus className="w-5 h-5 text-gray-400 group-hover:text-gray-600" />
                                )}
                            </button>
                            <div className={cn(
                                "overflow-hidden transition-all duration-300",
                                openIndex === index ? "max-h-96" : "max-h-0"
                            )}>
                                <div className="p-6 pt-0 text-gray-600 leading-relaxed font-light text-lg">
                                    {faq.answer}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-20 border-t border-gray-100 pt-20">
                    <div className="text-center mb-12">
                        <h3 className="text-2xl font-[family-name:var(--font-manrope)] font-bold mb-4">
                            Still curious about partnerships?
                        </h3>
                        <p className="text-gray-600 max-w-xl mx-auto">
                            Ask our AI assistant about specifics, or book a call to discuss a formal collaboration.
                        </p>
                    </div>
                    <AskMergex
                        variant="minimal"
                        suggestions={PARTNER_FAQ_DATA.aiSuggestions}
                        introTitle="Ask about Partnership"
                        introDescription="Curious about referral rates, strategic alignment, or white-label options? Ask away."
                    />
                </div>
            </div>
        </section>
    );
}
