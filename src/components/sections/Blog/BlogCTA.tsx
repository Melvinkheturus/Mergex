"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

type BlogCTAProps = {
  title?: string;
  buttons?: {
    text: string;
    href: string;
    primary?: boolean;
  }[];
};

const BlogCTA = ({
  title = "Ready to turn insights into action?",
  buttons = [
    { text: "🚀 Start a Project", href: "/Contact", primary: true },
    { text: "🤝 Partner With Us", href: "/Partner" },
  ],
}: BlogCTAProps) => {
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
          <motion.h2
            className="mb-8 text-3xl font-bold text-white md:text-4xl"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            ✨ {title}
          </motion.h2>
          
          <motion.div
            className="flex flex-col flex-wrap justify-center gap-4 sm:flex-row"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {buttons.map((button, index) => (
              <Link
                key={index}
                href={button.href}
                className={`group inline-flex items-center rounded-full px-6 py-3 font-medium transition-all duration-300 ${button.primary
                  ? 'bg-purple-600 text-white hover:bg-purple-700'
                  : 'border border-gray-700 bg-black/40 text-white hover:border-purple-500 hover:bg-black/60'
                }`}
              >
                <span>{button.text}</span>
                <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default BlogCTA;