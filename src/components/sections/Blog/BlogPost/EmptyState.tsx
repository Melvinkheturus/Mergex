"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

type EmptyStateProps = {
  title?: string;
  subtitle?: string;
  buttons?: Array<{
    text: string;
    href: string;
    primary?: boolean;
  }>;
  imageSrc?: string;
};

const EmptyState = ({
  title = "This story hasn't been written yet.",
  subtitle = "We're still shaping content to inspire you. Meanwhile, check out our portfolio or start a project with us.",
  buttons = [
    { text: "📂 Explore Portfolio", href: "/Portfolio", primary: true },
    { text: "🚀 Start a Project", href: "/Contact", primary: false }
  ],
  imageSrc = "/images/illustrations/empty-blog.svg" // This would be a placeholder SVG
}: EmptyStateProps) => {
  return (
    <motion.div
      className="flex min-h-[60vh] flex-col items-center justify-center py-16 px-4 text-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="relative mb-8 h-48 w-48 md:h-64 md:w-64"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {/* Fallback div with styled content if image is not available */}
        <div className="flex h-full w-full items-center justify-center rounded-full bg-purple-900/20 text-6xl text-purple-400">
          📝
        </div>
        
        {/* If an image source is provided, display it */}
        {imageSrc && (
          <Image
            src={imageSrc}
            alt="Empty state illustration"
            fill
            className="object-contain"
          />
        )}
      </motion.div>
      
      <motion.h1
        className="mb-4 text-2xl font-bold text-white md:text-3xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        {title}
      </motion.h1>
      
      <motion.p
        className="mb-8 max-w-md text-gray-400"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        {subtitle}
      </motion.p>
      
      <motion.div
        className="flex flex-col gap-4 sm:flex-row"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
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
      <div className="absolute top-1/4 left-1/4 -z-10 h-64 w-64 rounded-full bg-purple-600/5 blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 -z-10 h-64 w-64 rounded-full bg-purple-600/5 blur-3xl" />
    </motion.div>
  );
};

export default EmptyState;