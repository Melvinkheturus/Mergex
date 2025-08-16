"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const CallToAction = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-20 text-white" style={{
        background: "radial-gradient(circle at center, rgba(43, 11, 69, 0.2) 0%, rgba(26, 11, 46, 0.1) 30%, rgba(10, 10, 10, 1) 80%)"
      }}>
      <div className="container mx-auto px-4 text-center">
        <motion.h2
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="from-primary/10 via-foreground/85 to-foreground/50 bg-gradient-to-tl bg-clip-text text-center text-3xl font-bold tracking-tighter text-transparent sm:text-4xl md:text-5xl lg:text-6xl"
        >
          Ready to Merge Your Ideas with Real Innovation?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-purple-300 mx-auto mt-4 max-w-2xl text-center text-lg"
        >
          Book a free consultation or start your project today—let’s shape the future together.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <Button
            size="lg"
            className="group rounded-xl bg-gradient-to-tl from-purple-400 to-purple-600 text-white font-semibold relative overflow-hidden px-6 transition-all duration-300 hover:scale-105 hover:translate-y-[-2px] hover:shadow-lg hover:shadow-purple-500/20"
          >
            <span className="relative z-10 flex items-center">
              Start Your Project
              <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </span>
          </Button>

          <Button
            size="lg"
            className="group border border-purple-400 text-purple-400 font-semibold relative overflow-hidden px-6 transition-all duration-300 hover:scale-105 hover:translate-y-[-2px] hover:shadow-lg hover:shadow-purple-500/20"
          >
            View Our Work
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default CallToAction;