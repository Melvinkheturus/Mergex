"use client";

import { motion } from "framer-motion";
import React from "react";

const textBlock = (
  <span className="flex items-center gap-x-4 from-primary/10 via-foreground/85 to-foreground/50 bg-linear-to-tl bg-clip-text text-transparent text-7xl font-bold whitespace-nowrap uppercase px-8 hover:bg-linear-to-tl hover:from-purple-400 hover:to-purple-600 hover:bg-clip-text hover:text-transparent transition-all duration-300">
    <span>
      Build<span className="text-purple-500 text-xs align-base ml-1">■</span>
    </span>
    <span>
      Scale<span className="text-purple-500 text-xs align-base ml-1">■</span>
    </span>
    <span>
      Innovate<span className="text-purple-500 text-xs align-base ml-1">■</span>
    </span>
    <span>
      Mergex<span className="text-purple-500 text-xs align-base ml-1">■</span>
    </span>
  </span>
);

const Marquee: React.FC = () => {
  return (
    <div className="relative w-full overflow-hidden py-4">
      <motion.div
        className="flex whitespace-nowrap"
        animate={{ x: ["0%", "-100%"] }}
        transition={{
          repeat: Infinity,
          repeatType: "loop",
          duration: 15,
          ease: "linear",
        }}
      >
        {/* Two copies back-to-back */}
        <div className="flex">{textBlock}{textBlock}</div>
        <div className="flex">{textBlock}{textBlock}</div>
      </motion.div>
    </div>
  );
};

export default Marquee;