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
            question: "What does it mean to partner with Mergex?",
            answer: "Partnering with Mergex means having a single team responsible for building and evolving your business systems over time. Instead of coordinating multiple vendors, you work with Mergex as a unified technology and growth partner - one system, one team, aligned to your long-term goals.",
            chatPrompt: "Are you looking for a technology partner or a growth partner? Let's discuss how we can align."
        },
        {
            question: "Who is the partnership model designed for?",
            answer: "The partnership model is designed for businesses that need continuous system development and infrastructure support - not a one-time build. This includes startups scaling their first real system, companies replacing fragmented vendor ecosystems, and established businesses that want to automate and grow with structure.",
            chatPrompt: "What is the biggest technical challenge currently blocking your growth?"
        },
        {
            question: "How does the venture partnership model work?",
            answer: "In select cases, Mergex works as a long-term venture partner - helping build and operate the digital infrastructure of a business while staying aligned with the company's growth trajectory. The exact structure depends on the business model, stage, and goals. These partnerships are scoped through a dedicated conversation.",
            chatPrompt: "Tell me about your business model. I'll explain how our venture partnership structure works."
        },
        {
            question: "How do we start a partnership conversation with Mergex?",
            answer: "Start by reaching out through the website or emailing hello@mergex.in. The first step is a focused conversation where Mergex learns about your business, your current systems, and where growth is being blocked. From there, the team recommends the clearest way forward. No pitch. Just clarity.",
            chatPrompt: "Ready to simplify your systems? What's the best way for us to learn about your current setup?"
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
                                    <div className="mt-4 flex">
                                        <button
                                            onClick={() => {
                                                const event = new CustomEvent('mergex-open-chat', {
                                                    detail: {
                                                        question: faq.question,
                                                        chatPrompt: faq.chatPrompt
                                                    }
                                                });

                                                window.dispatchEvent(event);
                                            }}
                                            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-violet-50 text-violet-700 border border-violet-100 hover:bg-violet-100 hover:text-violet-800 transition-all text-xs font-semibold"
                                        >
                                            <MessageCircle className="w-3.5 h-3.5" />
                                            Ask Mergex about this
                                        </button>
                                    </div>
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
