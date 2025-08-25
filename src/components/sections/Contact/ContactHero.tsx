"use client";

import { motion, useMotionValue, useTransform } from "framer-motion";
import { Sparkles } from '@/components/ui/sparkles';
import { Sparkle } from "lucide-react";


const ContactHero = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = ({ clientX, clientY, currentTarget }: React.MouseEvent) => {
    mouseX.set(clientX);
    mouseY.set(clientY);
  };

  const x = useTransform(mouseX, (val) => val - 200);
  const y = useTransform(mouseY, (val) => val - 200);

  return (
    <section className="relative flex flex-col h-screen overflow-hidden pt-32 md:pt-40 items-center justify-start">
      <motion.div
            className="w-full relative z-10 mx-auto px-4 text-center"
            onMouseMove={handleMouseMove}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
              <motion.h1
                className="from-primary/10 via-foreground/85 to-foreground/50 bg-linear-to-tl bg-clip-text text-center text-4xl tracking-tighter text-balance text-transparent sm:text-5xl md:text-6xl lg:text-7xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                Let's Merge Ideas into Innovation.
              </motion.h1>
              <motion.p
                className="mx-auto mb-8 max-w-3xl text-lg text-gray-300 md:text-xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                Reach out to start your next project, partnership, or collaboration with Mergex.
              </motion.p>
              <motion.button
                className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-gradient-to-r from-primary to-secondary px-8 py-3 font-medium text-white shadow-lg transition-all duration-300 ease-out hover:from-primary/90 hover:to-secondary/90 hover:shadow-xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
              </motion.button>
            </motion.div>

      <div className='relative mt-0 h-96 w-screen overflow-hidden [mask-image:radial-gradient(50%_50%,white,transparent)] before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_bottom_center,#8A2BE2,transparent_80%)] before:opacity-100 after:absolute after:-left-1/2 after:top-1/2 after:aspect-[1/0.7] after:w-[200%] after:rounded-[100%] after:border-t after:border-[#7876c566] after:bg-zinc-900'>
           <div className='absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#ffffff2c_1px,transparent_1px),linear-gradient(to_bottom,#3a3a3a01_1px,transparent_1px)] bg-[size:70px_80px] '></div>
  
           <Sparkles 
             density={800} 
             speed={1} 
             size={1.1} 
             color='#FFFFFF' 
             className='absolute inset-x-0 bottom-0 h-full w-full [mask-image:radial-gradient(50%_50%,white,transparent_85%)]' 
           /> 
         </div>


    </section>
  );
};

export default ContactHero;