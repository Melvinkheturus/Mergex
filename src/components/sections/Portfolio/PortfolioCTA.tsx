"use client";

import { motion } from "framer-motion";
import { Rocket, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

const PortfolioCTA = () => {
  return (
    <section className="w-full py-20">
      <div className="container mx-auto px-4">
        <motion.div 
          className="mx-auto max-w-4xl rounded-xl border border-purple-500/30 bg-black/50 p-8 text-center backdrop-blur-sm md:p-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          {/* Sparkle effect in background */}
          <div className="absolute inset-0 -z-10">
            <div className="h-full w-full"
              style={{
                backgroundImage: `radial-gradient(circle at 20% 30%, rgba(168, 85, 247, 0.15) 0%, transparent 70%), radial-gradient(circle at 80% 70%, rgba(139, 92, 246, 0.1) 0%, transparent 70%)`,
              }}
            ></div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            <span className="mb-2 inline-block rounded-full bg-purple-500/20 px-4 py-1 text-sm font-medium text-purple-400">
              ✨ Ready to collaborate?
            </span>
          </motion.div>
          
          <motion.h2 
            className="mb-6 text-3xl font-bold text-white md:text-4xl"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
          >
            Want results like these? Let's build yours.
          </motion.h2>
          
          <motion.div 
            className="flex flex-col items-center justify-center gap-4 md:flex-row"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Button 
              className="group bg-purple-600 hover:bg-purple-700"
              size="lg"
            >
            <span className="relative z-10 flex items-center">
              Start Your Project
              <Rocket className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </span>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default PortfolioCTA;