'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import Image from 'next/image';

/**
 * SystemsFAQ - FAQ accordion section
 * Minimal white design with purple gradient accents
 */

interface FAQItem {
    question: string;
    answer: string;
}

const FAQ_DATA: FAQItem[] = [
    {
        question: 'What is the incubation program?',
        answer: 'Our incubation program provides early-stage startups with comprehensive support including technical development, strategic guidance, and resources to help transform ideas into successful products.'
    },
    {
        question: 'What is the acceleration program?',
        answer: 'The acceleration program is designed for startups that have achieved product-market fit and are ready to scale. We provide intensive support to accelerate growth through technology, marketing, and strategic partnerships.'
    },
    {
        question: 'Which verticals are you investing in?',
        answer: 'We focus on technology-driven startups across SaaS, AI/ML, fintech, healthtech, and enterprise software. We look for innovative solutions that solve real problems with scalable business models.'
    },
    {
        question: 'What is your investment thesis?',
        answer: 'We invest in pre-seed and seed stage startups with strong technical teams, clear market opportunities, and the potential for rapid growth. We typically take equity positions in exchange for comprehensive technical and strategic support.'
    },
    {
        question: 'In which stages are you investing?',
        answer: 'We primarily focus on pre-seed and seed stage investments, where we can have the most impact through our technical expertise and strategic guidance. We offer extensive resources and guidance to help startups achieve a successful launch and sustainable growth.'
    },
    {
        question: 'Who should apply for the acceleration and incubation programs?',
        answer: 'Early-stage founders with innovative ideas (incubation) or startups with validated products seeking to scale (acceleration). Ideal candidates are committed teams with clear vision and willingness to collaborate closely with our experts.'
    },
    {
        question: 'How does Chainlink Labs differentiate itself from other investment firms?',
        answer: 'Unlike traditional investment firms, we provide hands-on technical development, design, and go-to-market support. We\'re not just investors—we\'re your technical co-founders and strategic partners committed to building your success.'
    },
];

export function SystemsFAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="py-16 md:py-24 bg-white w-full">
            <div className="container mx-auto px-6 md:px-12">
                <div className="max-w-4xl mx-auto">
                    {/* Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mb-12"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#1A1A1A]"
                            style={{ fontFamily: 'var(--font-geist-sans)' }}
                        >
                            FAQ
                        </h2>
                        <p className="text-lg text-[#666666]">
                            Most Common Questions
                        </p>
                        <p className="text-sm text-[#999999] mt-1">
                            We compiled these are the FAQ all the answers
                        </p>
                    </motion.div>

                    {/* FAQ List */}
                    <div className="space-y-4">
                        {FAQ_DATA.map((faq, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.05 }}
                                className="bg-white border border-[#F0F0F0] rounded-xl overflow-hidden"
                            >
                                {/* Question */}
                                <button
                                    onClick={() => toggleFAQ(index)}
                                    className="w-full flex items-center justify-between p-6 text-left hover:bg-[#FAFAFA] transition-colors"
                                >
                                    <span className="text-[#1A1A1A] font-medium pr-4">
                                        {faq.question}
                                    </span>
                                    <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-purple-600 to-purple-400 rounded-md flex items-center justify-center">
                                        {openIndex === index ? (
                                            <Minus size={16} className="text-white" />
                                        ) : (
                                            <Plus size={16} className="text-white" />
                                        )}
                                    </div>
                                </button>

                                {/* Answer */}
                                <motion.div
                                    initial={false}
                                    animate={{
                                        height: openIndex === index ? 'auto' : 0,
                                        opacity: openIndex === index ? 1 : 0,
                                    }}
                                    transition={{ duration: 0.3 }}
                                    className="overflow-hidden"
                                >
                                    <div className="px-6 pb-6 text-[#666666] text-sm leading-relaxed">
                                        {faq.answer}
                                    </div>
                                </motion.div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
