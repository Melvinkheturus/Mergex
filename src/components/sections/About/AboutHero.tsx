"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sparkles } from '@/components/ui/sparkles';
import Image from 'next/image';


const AboutHero = () => {

  return (
    <section className="min-h-screen overflow-hidden bg-black">
      <div className='relative h-80 w-screen overflow-hidden [mask-image:radial-gradient(50%_50%,white,transparent)] before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_bottom_center,#8A2BE2,transparent_90%)] before:opacity-100 after:absolute after:border-2 after:-left-1/2 after:top-1/2 after:aspect-[1/1.8] after:w-[200%] after:rounded-[50%] after:border-b after:border-[#7876c566] after:bg-zinc-900'>
        <div className='absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#ffffff2c_1px,transparent_1px),linear-gradient(to_bottom,#3a3a3a01_1px,transparent_1px)] bg-[size:70px_80px] '></div>
        <Sparkles
          density={400}
          size={1.4}
          className='absolute inset-x-0 top-0 h-full w-full [mask-image:radial-gradient(50%_50%,white,transparent_85%)]'
        />
      </div>
      <div className='mx-auto -mt-52 max-w-2xl relative z-10'>
        <div className='relative w-[7.25rem] h-[7.25rem] mx-auto grid place-content-center rounded-full overflow-hidden'>
          <div className="absolute inset-0 block h-full w-full animate-gradient rounded-[inherit] bg-gradient-to-r from-[#ffaa40]/50 via-[#9c40ff]/50 to-[#ffaa40]/50 bg-[length:300%_300%] p-[2px]"></div>
          <div className='bg-black backdrop-blur-lg border border-gray-800 p-4 w-28 h-28 mx-auto grid place-content-center rounded-full'>
            <div className='relative w-24 h-24 mx-auto'>
            <Image
              src="/Logo/Mergex.png"
              alt="Mergex Logo"
              fill
              className="object-contain"
            />
            </div>
          </div>
        </div>
      </div>

      <motion.div
        className="text-white pt-2 w-2/3 mx-auto block text-center z-10 relative"
      >
        <motion.h1 
          className="from-primary/10 via-foreground/85 to-foreground/50 bg-linear-to-tl bg-clip-text text-center text-4xl tracking-tighter text-balance text-transparent sm:text-5xl md:text-6xl lg:text-7xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Driven by Vision. United by Innovation.
        </motion.h1>

        <motion.p 
          className="mx-auto mt-4 mb-8 max-w-3xl text-lg text-gray-300 md:text-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          At Mergex, we do more than build digital solutions. combining creativity and technical expertise to fuel bold growth for businesses and creators.
        </motion.p>

        <motion.div
          className="flex justify-center space-x-4 mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Button
            size="lg"
            className="group rounded-xl bg-linear-to-tl from-purple-400 to-purple-600 text-white font-semibold relative overflow-hidden px-6 transition-all duration-300 hover:scale-105 hover:translate-y-[-2px] hover:shadow-lg hover:shadow-purple-500/20"
          >
            <span className="relative z-10 flex items-center">
              Discover Our Journey
              <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </span>
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default AboutHero;