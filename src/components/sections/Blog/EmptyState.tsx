"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

type EmptyStateProps = {
  title?: string;
  subtitle?: string;
  ctaText?: string;
  ctaLink?: string;
  secondaryCtaText?: string;
  secondaryCtaLink?: string;
};

const EmptyState = ({
  title = "Our ideas are still brewing ☕",
  subtitle = "We're working on insightful content that helps you grow. Stay tuned for updates.",
  ctaText = "🚀 Start a Project with Us",
  ctaLink = "/Contact",
  secondaryCtaText = "🔔 Get Notified When We Publish",
  secondaryCtaLink = "/Subscribe",
}: EmptyStateProps) => {
  return (
    <section className="w-full py-20">
      <div className="container mx-auto px-4">
        <motion.div 
          className="mx-auto flex max-w-3xl flex-col items-center justify-center rounded-2xl border border-gray-800 bg-black/40 p-8 text-center backdrop-blur-sm md:p-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Abstract Illustration */}
          <motion.div 
            className="mb-8 h-48 w-48 rounded-full bg-gradient-to-br from-purple-600/20 to-blue-600/20 p-6"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="flex h-full w-full items-center justify-center rounded-full border border-purple-500/30 bg-black/40">
              <svg
                width="80"
                height="80"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-purple-400"
              >
                <path
                  d="M19 5H5C3.89543 5 3 5.89543 3 7V17C3 18.1046 3.89543 19 5 19H19C20.1046 19 21 18.1046 21 17V7C21 5.89543 20.1046 5 19 5Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M3 7L12 13L21 7"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </motion.div>
          
          <motion.h2 
            className="mb-4 text-3xl font-bold text-white md:text-4xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {title}
          </motion.h2>
          
          <motion.p 
            className="mb-8 text-lg text-gray-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {subtitle}
          </motion.p>
          
          <motion.div 
            className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <Link
              href={ctaLink}
              className="group inline-flex items-center rounded-full bg-purple-600 px-6 py-3 font-medium text-white transition-all duration-300 hover:bg-purple-700"
            >
              <span>{ctaText}</span>
              <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
            
            <Link
              href={secondaryCtaLink}
              className="group inline-flex items-center rounded-full border border-gray-700 bg-black/40 px-6 py-3 font-medium text-white transition-all duration-300 hover:border-purple-500 hover:bg-black/60"
            >
              <span>{secondaryCtaText}</span>
              <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default EmptyState;