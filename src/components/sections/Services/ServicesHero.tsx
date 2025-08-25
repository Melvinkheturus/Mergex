"use client";


import { motion } from "framer-motion";
 import { FlickeringGrid } from "@/components/ui/flickering-grid";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";


const ServicesHero = () => {




  return (
    <section
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-background py-20 md:py-32"

    >
      <div className="absolute inset-0 z-0">
        <FlickeringGrid 
          className="relative inset-0 z-0 [mask-image:radial-gradient(450px_circle_at_center,white,transparent)]"
          squareSize={8}
          gridGap={6}
          color="#A855F7" // Purple color
          maxOpacity={0.2}
          flickerChance={0.1}
          height={window.innerHeight}
          width={window.innerWidth}
        />
      </div>

      <motion.div
        className="container relative z-10 mx-auto px-4 text-center"
      >
          <motion.h1 
              className="from-primary/10 via-foreground/85 to-foreground/50 bg-linear-to-tl bg-clip-text text-center text-4xl tracking-tighter text-balance text-transparent sm:text-5xl md:text-6xl lg:text-7xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Smart Digital Solutions That Grow with Your Business.
            </motion.h1>
          
          <motion.p 
            className="mx-auto mb-8 max-w-3xl text-lg text-gray-300 md:text-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            From modern, high-performing websites to tomorrow’s AI-powered experiences, Mergex builds the digital foundation your business needs now, and prepares you for what’s next.
          </motion.p>
          
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
                Explore Our Services
                <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </span>
            </Button>
            <Button
              size="lg"
              className="group border border-purple-400 text-purple-400 font-semibold relative overflow-hidden px-6 transition-all duration-300 hover:scale-105 hover:translate-y-[-2px] hover:shadow-lg hover:shadow-purple-500/20"
            >
              Get a Free Consultation
            </Button>
          </motion.div>
        </motion.div>
    </section>
  );
};


export default ServicesHero;