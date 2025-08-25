import { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { Plus, Minus } from "lucide-react";

type FAQItemProps = {
  question: string;
  answer: string;
  isOpen: boolean;
  toggleOpen: () => void;
  delay?: number;
};

const FAQItem = ({ question, answer, isOpen, toggleOpen, delay = 0 }: FAQItemProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className="border-b border-gray-800"
    >
      <button
        onClick={toggleOpen}
        className="flex w-full items-center justify-between py-6 text-left text-lg font-medium text-white focus:outline-none"
      >
        <span>{question}</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="flex h-6 w-6 items-center justify-center rounded-full bg-purple-900/50"
        >
          {isOpen ? <Minus className="h-4 w-4 text-purple-300" /> : <Plus className="h-4 w-4 text-purple-300" />}
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="pb-6 text-gray-300">{answer}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const faqs = [
    {
      question: "Do your prices include hosting & domain?",
      answer: "Hosting, domain, and email services are available as add-ons. We can recommend and set up the best options based on your specific needs and budget."
    },
    {
      question: "Can I upgrade later?",
      answer: "Yes, you can upgrade your plan anytime. Our modular approach means we can build on your existing site rather than starting from scratch, saving you time and money."
    },
    {
      question: "How long will my website take?",
      answer: "Most sites launch within 2–6 weeks, depending on complexity. Starter websites can be completed in as little as 1-2 weeks, while e-commerce sites typically take 4-6 weeks for a full implementation."
    },
    {
      question: "Do you offer ongoing support?",
      answer: "Yes, we offer various maintenance plans to keep your site secure, updated, and performing optimally. You can choose the level of support that best fits your needs and budget."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept bank transfers, UPI payments, and major credit/debit cards. For larger projects, we typically work with a 50% upfront payment and the remainder upon completion."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative py-16 lg:py-24" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="mx-auto mb-12 max-w-3xl text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-lg text-gray-300">
            Have questions? We&apos;ve got answers. If you don&apos;t see what you&apos;re looking for, feel free to contact us.
          </p>
        </motion.div>

        <div className="mx-auto max-w-3xl divide-y divide-gray-800 border-t border-gray-800">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              toggleOpen={() => toggleFAQ(index)}
              delay={0.1 * index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;