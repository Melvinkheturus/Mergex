"use client";

import { motion } from "framer-motion";
import Link from "next/link";

type ButtonProps = {
  text: string;
  href: string;
  primary?: boolean;
};

type BlogPostCTAProps = {
  title?: string;
  subtitle?: string;
  buttons?: ButtonProps[];
};

const BlogPostCTA = ({
  title = "Got an idea worth merging with innovation?",
  subtitle = "Your story could be the next big case study. Let's create it together.",
  buttons = [
    { text: "🚀 Start a Project", href: "/Contact", primary: true },
    { text: "🤝 Partner With Us", href: "/About", primary: false }
  ]
}: BlogPostCTAProps) => {
  return (
    <motion.section
      className="my-16 overflow-hidden rounded-2xl border border-gray-800 bg-gradient-to-br from-purple-900/20 to-black py-12 px-6 text-center md:px-12"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <motion.h2
        className="mx-auto mb-4 max-w-2xl text-2xl font-bold text-white md:text-3xl"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        {title}
      </motion.h2>
      
      <motion.p
        className="mx-auto mb-8 max-w-2xl text-gray-400"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {subtitle}
      </motion.p>
      
      <motion.div
        className="flex flex-col items-center justify-center gap-4 sm:flex-row"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        {buttons.map((button, index) => (
          <Link
            key={index}
            href={button.href}
            className={`inline-flex items-center justify-center rounded-full px-6 py-3 font-medium transition-all duration-300 ${button.primary ? 'bg-purple-600 text-white hover:bg-purple-700' : 'border border-gray-700 bg-black/30 text-white hover:border-purple-500 hover:bg-black/50'}`}
          >
            {button.text}
          </Link>
        ))}
      </motion.div>
      
      {/* Background decoration */}
      <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-purple-600/10 blur-3xl" />
      <div className="absolute -bottom-32 -left-32 h-64 w-64 rounded-full bg-purple-600/10 blur-3xl" />
    </motion.section>
  );
};

export default BlogPostCTA;