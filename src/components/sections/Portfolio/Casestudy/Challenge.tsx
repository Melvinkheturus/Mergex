"use client";

import { motion } from "framer-motion";

type ChallengeProps = {
  challengeText: string;
};

const Challenge = ({
  challengeText = "The client needed to stand out in a competitive SaaS market but lacked a strong digital presence and conversion-focused website. Their existing platform had poor user experience, confusing navigation, and wasn't effectively communicating their value proposition to potential enterprise clients.",
}: ChallengeProps) => {
  return (
    <section className="w-full py-16">
      <div className="container mx-auto px-4">
        <motion.div 
          className="mx-auto max-w-4xl"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-8 text-center">
            <span className="mb-2 inline-block text-sm font-medium uppercase tracking-wider text-purple-400">Client Challenge</span>
            <h2 className="text-2xl font-bold text-white md:text-3xl">
              The Challenge
            </h2>
          </div>
          
          <motion.div 
            className="relative rounded-2xl border border-gray-800 bg-black/40 p-8 backdrop-blur-sm"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Decorative elements */}
            <div className="absolute -left-3 -top-3 h-6 w-6 rounded-full bg-purple-600/30 blur-md"></div>
            <div className="absolute -bottom-3 -right-3 h-6 w-6 rounded-full bg-purple-600/30 blur-md"></div>
            
            <p className="text-lg leading-relaxed text-gray-300">
              {challengeText}
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Challenge;