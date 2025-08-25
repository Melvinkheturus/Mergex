"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown, ChevronRight } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import Link from "next/link";

type FAQItem = {
  question: string;
  answer: string;
};

const faqs: FAQItem[] = [
  {
    question: "How quickly do you respond?",
    answer: "We typically respond to all inquiries within 24 hours during business days. For urgent matters, we prioritize responses and aim to get back to you even faster."
  },
  {
    question: "Do you work with startups?",
    answer: "Absolutely! We love working with startups and have special packages designed for early-stage companies. Our flexible approach allows us to scale our services based on your current needs and growth trajectory."
  },
  {
    question: "Can we schedule a free consultation?",
    answer: "Yes, we offer a complimentary 30-minute consultation to discuss your project needs and how we might be able to help. You can book a time directly through our contact form or by sending us an email."
  },
  {
    question: "What is your typical project timeline?",
    answer: "Project timelines vary based on scope and complexity. A simple website might take 2-4 weeks, while more complex applications can take 2-6 months. We'll provide a detailed timeline during our initial consultation."
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <SectionHeader
            title="Frequently Asked Questions"
            subtitle="Find answers to common questions about our services."
          />
          
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index}
                className="border border-purple-500/20 rounded-lg overflow-hidden bg-black/30 backdrop-blur-sm"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between p-4 md:p-5 text-left focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:ring-inset transition-all duration-200"
                >
                  <span className="font-medium text-white">{faq.question}</span>
                  <span className="ml-6 shrink-0">
                    {openIndex === index ? (
                      <ChevronDown className="h-5 w-5 text-purple-400" />
                    ) : (
                      <ChevronRight className="h-5 w-5 text-purple-400" />
                    )}
                  </span>
                </button>
                
                <motion.div 
                  initial={false}
                  animate={{ 
                    height: openIndex === index ? 'auto' : 0,
                    opacity: openIndex === index ? 1 : 0
                  }}
                  transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
                  className="overflow-hidden"
                >
                  <div className="p-4 md:p-5 pt-0 text-gray-300 text-sm md:text-base">
                    {faq.answer}
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;