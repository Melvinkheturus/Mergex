"use client";

import { motion } from "framer-motion";
import { AnimatedBatchText } from "@/components/ui/AnimatedBatch";

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
          className="mx-auto mb-6 inline-flex items-center rounded-full border border-border bg-background/80 px-3 py-1 text-sm backdrop-blur-sm"
        >
          <AnimatedBatchText speed={1} colorFrom="#ffaa40" colorTo="#9c40ff">
            {badge}
          </AnimatedBatchText>
        </motion.div>
      )}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: badge ? 0.1 : 0 }}
        className="from-primary/10 via-foreground/85 to-foreground/50 bg-linear-to-tl bg-clip-text text-center text-2xl font-bold tracking-tighter text-transparent sm:text-3xl md:text-4xl lg:text-5xl"
      >
        <span className="bg-gradient-to-t from-primary/10 via-foreground/85 to-foreground/50 bg-clip-text text-transparent leading-[1.5]">
        {title}
        </span>
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