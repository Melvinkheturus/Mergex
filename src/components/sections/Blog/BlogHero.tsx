"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from 'next/image';
import { Sparkles } from '@/components/ui/sparkles';
import { Button } from "@/components/ui/button";


type BlogHeroProps = {
  headline?: string;
  subtext?: string;
  showSubscribe?: boolean;
};

const BlogHero = ({
  headline = "Insights that Inspire Innovation.",
  subtext = "Explore the latest trends, stories, and strategies in design, AI, and business growth from the Mergex team.",
  showSubscribe = true,
}: BlogHeroProps) => {


  return (
    <section
      className="relative flex min-h-screen items-center justify-center overflow-hidden"

    >
      <div className="absolute inset-0 z-0 opacity-30">
         <svg className="absolute inset-0 h-full w-full" xmlns="http://www.w3.org/2000/svg">
           <defs>
             <pattern id="grid" width="80" height="80" patternUnits="userSpaceOnUse">
               <path d="M 80 0 L 0 0 0 80" fill="none" stroke="#333" strokeWidth="1"></path>
             </pattern>
           </defs>
           <rect width="100%" height="100%" fill="url(#grid)" mask="url(#fade)"></rect>
           <mask id="fade">
             <linearGradient id="fade-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
               <stop offset="0%" stopColor="#fff" stopOpacity="0"></stop>
               <stop offset="20%" stopColor="#fff" stopOpacity="1"></stop>
               <stop offset="80%" stopColor="#fff" stopOpacity="1"></stop>
               <stop offset="100%" stopColor="#fff" stopOpacity="0"></stop>
             </linearGradient>
             <rect x="0" y="0" width="100%" height="100%" fill="url(#fade-gradient)"></rect>
           </mask>
         </svg>
       </div>
      <div className='absolute bottom-0 z-[2] h-[400px] w-screen overflow-hidden [mask-image:radial-gradient(100%_50%,white,transparent)] before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_bottom_center,#8A2BE2,transparent_90%)] before:opacity-40 after:absolute'>
        <Sparkles opacity={0.5}
          density={1800}
          speed={1.2}
          color='#8A2BE2'          className='absolute inset-x-0 bottom-0 h-full w-full '
        />
      </div>

      <motion.div
        className="relative z-10 mx-auto px-4 text-center"

      >
          <motion.h1 
            className="from-primary/10 via-foreground/85 to-foreground/50 bg-linear-to-tl bg-clip-text text-center text-4xl tracking-tighter text-balance text-transparent sm:text-5xl md:text-6xl lg:text-7xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {headline}
          </motion.h1>
          
          <motion.p 
            className="mx-auto mb-8 max-w-3xl text-lg text-gray-300 md:text-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {subtext}
          </motion.p>
          
          {showSubscribe && (
            <motion.div
              className="flex justify-center space-x-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Button
                size="lg"
                className="group rounded-xl bg-linear-to-tl from-purple-400 to-purple-600 text-white font-semibold relative overflow-hidden px-6 transition-all duration-300 hover:scale-105 hover:translate-y-[-2px] hover:shadow-lg hover:shadow-purple-500/20"
              >
                <span className="relative z-10 flex items-center">
                  Subscribe for Updates
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </Button>
            </motion.div>
          )}
        </motion.div>
    </section>
  );
};

export default BlogHero;