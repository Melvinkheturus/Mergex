"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Twitter, Linkedin, Link2, ArrowRight } from "lucide-react";

// Social Share Component
export const SocialShare = ({ url = "", title = "" }) => {
  const encodedUrl = encodeURIComponent(url || typeof window !== 'undefined' ? window.location.href : '');
  const encodedTitle = encodeURIComponent(title);

  const copyToClipboard = () => {
    if (typeof navigator !== 'undefined') {
      navigator.clipboard.writeText(url || window.location.href);
      // You could add a toast notification here
    }
  };

  return (
    <motion.div 
      className="fixed bottom-0 left-0 z-10 flex w-full items-center justify-center gap-3 border-t border-gray-800 bg-black/80 p-3 backdrop-blur-sm md:bottom-auto md:left-auto md:right-8 md:top-1/3 md:w-auto md:flex-col md:rounded-full md:border md:p-2"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <a 
        href={`https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex h-10 w-10 items-center justify-center rounded-full bg-black/40 text-gray-300 transition-colors duration-300 hover:bg-blue-600 hover:text-white"
        aria-label="Share on Twitter"
      >
        <Twitter size={18} />
      </a>
      <a 
        href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex h-10 w-10 items-center justify-center rounded-full bg-black/40 text-gray-300 transition-colors duration-300 hover:bg-blue-700 hover:text-white"
        aria-label="Share on LinkedIn"
      >
        <Linkedin size={18} />
      </a>
      <button 
        onClick={copyToClipboard}
        className="flex h-10 w-10 items-center justify-center rounded-full bg-black/40 text-gray-300 transition-colors duration-300 hover:bg-purple-600 hover:text-white"
        aria-label="Copy link"
      >
        <Link2 size={18} />
      </button>
    </motion.div>
  );
};

// Highlight Box Component
type HighlightBoxProps = {
  title?: string;
  content: string;
};

export const HighlightBox = ({ 
  title = "Key Insight", 
  content 
}: HighlightBoxProps) => {
  return (
    <motion.div 
      className="my-8 rounded-xl border border-purple-500/30 bg-purple-900/20 p-6"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      {title && (
        <h4 className="mb-3 text-lg font-bold text-purple-400">{title}</h4>
      )}
      <p className="text-gray-200">{content}</p>
    </motion.div>
  );
};

// Inline CTA Component
type InlineCTAProps = {
  title?: string;
  buttonText?: string;
  buttonLink?: string;
};

export const InlineCTA = ({ 
  title = "Ready to apply this strategy?", 
  buttonText = "🚀 Partner with Mergex", 
  buttonLink = "/Contact" 
}: InlineCTAProps) => {
  return (
    <motion.div 
      className="my-10 rounded-xl border border-gray-800 bg-gradient-to-r from-purple-900/20 to-black/40 p-6 text-center"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <h4 className="mb-4 text-xl font-bold text-white">{title}</h4>
      <Link 
        href={buttonLink}
        className="group inline-flex items-center rounded-full bg-purple-600 px-5 py-2 font-medium text-white transition-all duration-300 hover:bg-purple-700"
      >
        <span>{buttonText}</span>
        <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
      </Link>
    </motion.div>
  );
};

// Progress Bar Component
export const ReadingProgressBar = () => {
  // This would be implemented with useEffect to track scroll position
  // For now, we'll just show a static component
  return (
    <div className="fixed top-0 left-0 z-50 h-1 w-full bg-gray-800">
      <div className="h-full w-[45%] bg-purple-600" />
    </div>
  );
};

// Export a combined component for convenience
type BlogPostEnhancementsProps = {
  url?: string;
  title?: string;
  showSocialShare?: boolean;
  showProgressBar?: boolean;
};

const BlogPostEnhancements = ({
  url = "",
  title = "",
  showSocialShare = true,
  showProgressBar = true
}: BlogPostEnhancementsProps) => {
  return (
    <>
      {showSocialShare && <SocialShare url={url} title={title} />}
      {showProgressBar && <ReadingProgressBar />}
    </>
  );
};

export default BlogPostEnhancements;