"use client";

import { motion } from "framer-motion";
import Link from "next/link";

type NextStepsProps = {
  title?: string;
  description?: string;
  ctaButtons?: {
    text: string;
    href: string;
    primary?: boolean;
  }[];
};

const NextSteps = ({
  title = "Want results like this? Let's make it happen.",
  description = "Ready to transform your digital presence and achieve similar results? Our team is ready to help you reach your goals.",
  ctaButtons = [
    { text: "🚀 Partner With Us", href: "/contact", primary: true },
    { text: "👨‍💻 Join as Freelancer", href: "/join" },
    { text: "📩 Contact Us", href: "/contact" },
  ],
}: NextStepsProps) => {
  return (
    <section className="w-full py-20">
      <div className="container mx-auto px-4">
        <motion.div
          className="mx-auto max-w-4xl rounded-2xl border border-gray-800 bg-gradient-to-b from-black/60 to-purple-900/20 p-8 text-center backdrop-blur-sm md:p-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div 
            className="mb-6 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="mb-2 inline-block text-sm font-medium uppercase tracking-wider text-purple-400">Next Steps</span>
            <h2 className="text-3xl font-bold text-white md:text-4xl">
              ✨ {title}
            </h2>
          </motion.div>
          
          <motion.p
            className="mx-auto mb-8 max-w-2xl text-gray-300"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {description}
          </motion.p>
          
          <motion.div
            className="flex flex-col flex-wrap justify-center gap-4 sm:flex-row"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {ctaButtons.map((button, index) => (
              <Link
                key={index}
                href={button.href}
                className={`rounded-full px-6 py-3 font-medium transition-all duration-300 ${button.primary
                  ? 'bg-purple-600 text-white hover:bg-purple-700'
                  : 'border border-gray-700 bg-black/40 text-white hover:border-purple-500 hover:bg-black/60'
                }`}
              >
                {button.text}
              </Link>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default NextSteps;