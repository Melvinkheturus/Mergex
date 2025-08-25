"use client";

import React from "react";
import { motion } from "framer-motion";
import { BackgroundRippleEffect } from "@/components/ui/background-grid";
import { Button } from "@/components/ui/button";

const ComingSoonTeaser = () => {
  return (
    <section className="py-20 container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="relative overflow-hidden rounded-2xl bg-linear-to-br from-black to-black backdrop-blur-lg border border-neutral-800 p-8 md:p-12"
      >
        <div className="absolute inset-0 opacity-30 pointer-events-none">
          <BackgroundRippleEffect

          />
        </div>
        
        <div className="relative z-20 w-full text-center mb-6 text-white text-4xl font-bold">
            Coming Soon
        </div>
        
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-purple-600"
          >
            We're building more than websites...
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-lg text-neutral-300 mb-8"
          >
            Our upcoming AI and brand services will transform how you connect with your audience. 
            Stay ahead of the curve with Mergex's innovative solutions.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <div className="relative w-full sm:w-[65%] flex-1 max-w-xl">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="w-full px-4 py-3 bg-neutral-800/50 border border-neutral-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50"
              />
            </div>
            <Button 
              className="w-full sm:w-[35%] py-3 text-base rounded-xl bg-linear-to-tl from-purple-400 to-purple-600 text-white font-semibold hover:scale-105 hover:translate-y-[-2px] transition-all duration-300 mt-auto"
            >
              Be the First to Know
            </Button>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default ComingSoonTeaser;