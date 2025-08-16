"use client";

import { motion } from "framer-motion";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  badge?: string;
  className?: string;
}

const SectionHeader = ({ title, subtitle, badge, className }: SectionHeaderProps) => {
  return (
    <div className={`text-center mb-12 ${className}`}>
      {badge && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mx-auto mb-4 inline-flex items-center rounded-full border border-border bg-background/80 px-3 py-1 text-sm backdrop-blur-sm"
        >
          <span className="text-purple-300">{badge}</span>
        </motion.div>
      )}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: badge ? 0.1 : 0 }}
        className="from-primary/10 via-foreground/85 to-foreground/50 bg-gradient-to-tl bg-clip-text text-center text-3xl font-bold tracking-tighter text-transparent sm:text-4xl md:text-5xl lg:text-6xl"
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: badge ? 0.2 : 0.1 }}
          className="text-purple-300 mx-auto mt-4 max-w-2xl text-center text-lg"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
};

export default SectionHeader;