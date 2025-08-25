"use client";

import { motion } from "framer-motion";
import { Rocket } from "lucide-react";
import Image from 'next/image';
import { Button } from "@/components/ui/button";

const EmptyState = () => {
  return (
    <div className="container mx-auto px-4 py-16 text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Abstract Illustration */}
          <div className="mb-6 flex justify-center">
            <Image
              src="/SVG/undraw_taken_mshk.svg"
              alt="No projects illustration"
              width={200}
              height={200}
              className="h-40 w-40"
            />
          </div>
          
          <motion.h2 
            className="mb-3 text-2xl font-bold text-white md:text-3xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            No case studies yet but your project could be the first!
          </motion.h2>
          
          <motion.p 
            className="mb-6 text-gray-400"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            At Mergex, we focus on creating impactful projects. Our portfolio will be updated soon with amazing work that demonstrates our capabilities.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <Button 
              className="group bg-purple-600 hover:bg-purple-700"
              size="lg"
            >
            <span className="relative z-10 flex items-center">
              Start a Project with Us
              <Rocket className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </span>
            </Button>
          </motion.div>
        </motion.div>
    </div>
  );
};

export default EmptyState;