"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

type ProjectHeroProps = {
  clientName: string;
  clientLogo?: string;
  headline: string;
  subtext: string;
};

const ProjectHero = ({
  clientName = "SaaS Client",
  clientLogo = "/placeholder-logo.svg",
  headline = "Redefining Growth for a SaaS Startup – 3x Revenue in 6 Months",
  subtext = "A complete digital transformation that exceeded client expectations",
}: ProjectHeroProps) => {
  const gradientRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Animate words
    const words = document.querySelectorAll<HTMLElement>('.hero-word');
    words.forEach((word) => {
      const delay = parseInt(word.getAttribute('data-delay') || '0', 10);
      setTimeout(() => {
        word.style.animation = 'word-appear 0.8s ease-out forwards';
      }, delay);
    });

    // Mouse gradient
    const gradient = gradientRef.current;
    function onMouseMove(e: MouseEvent) {
      if (gradient) {
        gradient.style.left = e.clientX - 192 + 'px';
        gradient.style.top = e.clientY - 192 + 'px';
        gradient.style.opacity = '1';
      }
    }
    function onMouseLeave() {
      if (gradient) gradient.style.opacity = '0';
    }
    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseleave', onMouseLeave);

    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseleave', onMouseLeave);
    };
  }, []);

  // Split headline into words for animation
  const headlineWords = headline.split(' ');

  return (
    <section className="relative w-full overflow-hidden py-24 md:py-32">
      {/* Mouse gradient */}
      <div 
        ref={gradientRef} 
        className="pointer-events-none fixed h-96 w-96 rounded-full opacity-0 blur-3xl transition-all duration-500 ease-out" 
        style={{ 
          background: `radial-gradient(circle, rgba(168,85,247,0.15) 0%, transparent 70%)`, 
        }} 
      ></div>
      
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-6 text-center">
            <span className="inline-block text-sm font-medium uppercase tracking-wider text-purple-400">Project Showcase</span>
          </div>
          {/* Client Logo & Name */}
          <motion.div 
            className="mb-8 flex flex-col items-center justify-center"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {clientLogo && (
              <div className="mb-4 h-16 w-16 overflow-hidden rounded-full bg-gray-800 p-2">
                <Image 
                  src={clientLogo} 
                  alt={clientName} 
                  width={64} 
                  height={64} 
                  className="h-full w-full object-contain"
                />
              </div>
            )}
            <span className="text-sm font-medium uppercase tracking-wider text-purple-400">
              {clientName}
            </span>
          </motion.div>
          
          {/* Headline */}
          <motion.h1 
            className="mb-6 text-4xl font-bold leading-tight md:text-5xl lg:text-6xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {headlineWords.map((word, index) => (
              <span 
                key={index}
                className="hero-word inline-block opacity-0" 
                data-delay={100 + (index * 100)}
                style={{
                  color: word.includes('3x') || word.includes('Revenue') ? 'rgb(168, 85, 247)' : 'inherit'
                }}
              >
                {word}{' '}
              </span>
            ))}
          </motion.h1>
          
          {/* Subtext */}
          <motion.p 
            className="mb-8 text-lg text-gray-300 md:text-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {subtext}
          </motion.p>
          
          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <Button 
              className="group bg-purple-600 hover:bg-purple-700"
              size="lg"
            >
              Work With Us
              <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
          </motion.div>
        </div>
      </div>
      
      {/* Background grid pattern */}
      <div className="absolute inset-0 -z-10 opacity-20">
        <div className="h-full w-full" 
          style={{
            backgroundImage: `radial-gradient(rgba(168, 85, 247, 0.1) 1px, transparent 1px)`,
            backgroundSize: `40px 40px`,
          }}
        ></div>
      </div>

      {/* Add CSS for word animation */}
      <style jsx global>{`
        @keyframes word-appear {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
};

export default ProjectHero;