"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Rocket, Users, Handshake } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";

const JoinUsCTA = () => {
  return (
    <section className="py-20 w-full overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div 
          className="relative max-w-4xl mx-auto rounded-[5px] overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="relative w-full overflow-hidden rounded-[40px] bg-gradient-to-r from-purple-800 to-purple-600 p-6 sm:p-8 md:p-10">
            <div className="absolute inset-0 hidden h-full w-full overflow-hidden md:block">
              <div className="absolute top-1/2 right-[-45%] aspect-square h-[800px] w-[800px] -translate-y-1/2">
                <div className="absolute inset-0 rounded-full bg-purple-500 opacity-30"></div>
                <div className="absolute inset-0 scale-[0.8] rounded-full bg-purple-400 opacity-30"></div>
                <div className="absolute inset-0 scale-[0.6] rounded-full bg-purple-300 opacity-30"></div>
                <div className="absolute inset-0 scale-[0.4] rounded-full bg-purple-200 opacity-30"></div>
                <div className="absolute inset-0 scale-[0.2] rounded-full bg-purple-100 opacity-30"></div>
                <div className="absolute inset-0 scale-[0.1] rounded-full bg-white/50 opacity-30"></div>
              </div>
            </div>

            <div className="relative z-10">
              <div className="text-left">
                <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                  Ready to Elevate Your Business?
                </h2>
                <p className="mt-4 text-lg leading-8 text-gray-300">
                  Whether you’re ready to build innovative solutions or explore strategic partnerships
                  <br />
                  we’re here to make it happen.
                </p>
              </div>
              
              <div className="mt-8">
              <motion.div 
                className="flex flex-col gap-4 sm:flex-row sm:gap-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <Button 
                  className="group relative flex w-full items-center justify-between rounded-md bg-white px-5 py-3 text-purple-800 sm:w-[240px]"
                  size="lg"
                >
                  <span className="font-medium">Get Our Services ➔</span>
                  <span className="h-5 w-5 flex-shrink-0 rounded-md bg-purple-800"></span>
                </Button>
                
                <Button 
                  className="group relative flex w-full items-center justify-between rounded-md bg-white px-5 py-3 text-purple-800 sm:w-[240px]"
                  size="lg"
                >
                  <span className="font-medium">Partner With Us ➔</span>
                  <span className="h-5 w-5 flex-shrink-0 rounded-md bg-purple-800"></span>
                </Button>
              </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default JoinUsCTA;