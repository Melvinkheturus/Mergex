'use client';

import React, { useRef, useState } from 'react';
import { ReactLenis } from 'lenis/react';
import { motion, useScroll, useTransform, useMotionValueEvent } from 'framer-motion';
import DecryptedText from '@/components/DecryptedText';

/**
 * HowLabsWorks - Simplified to Stacking Cards with a refined title
 * Styled after WhyLabsExists with a clean white aesthetic.
 */
export function HowLabsWorks() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [0.95, 1, 1, 0.95]);
  const y = useTransform(scrollYProgress, [0, 0.1], [40, 0]);

  // Dynamic Headline Content — Reflecting the Creative Transformation
  const headlinePart = useTransform(
    scrollYProgress,
    [0.1, 0.35, 0.6, 0.85],
    ["Spark", "Build", "Craft", "Outcome"]
  );

  const [currentHeadline, setCurrentHeadline] = React.useState("Spark");

  // Sync state with motion value to trigger DecryptedText
  useMotionValueEvent(headlinePart, "change", (latest) => {
    if (latest !== currentHeadline) {
      setCurrentHeadline(latest);
    }
  });

  return (
    <ReactLenis root>
      <main ref={containerRef} className='bg-white'>
        <motion.section 
          style={{ opacity, scale, y }}
          className='text-black w-full bg-white pb-32 pt-24'
        >
          {/* Refined Title styled after WhyLabsExists */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.19, 1, 0.22, 1] }}
            className="text-center mb-12 px-6"
          >
            <h2 
              className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-neutral-900"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              Where Ideas <em>Become</em> Reality.
            </h2>
            <div className="mt-6 h-px w-12 bg-black/10 mx-auto" />
          </motion.div>

          <div className='flex flex-col lg:flex-row justify-between px-6 md:px-16 gap-12 lg:gap-0 mt-8'>
            <div className='grid gap-0 flex-1'>
              <figure className='sticky top-0 h-screen grid place-content-center'>
                <article className='bg-[#f8f9fa] border border-black/5 h-80 w-full max-w-lg rounded-2xl rotate-3 p-8 shadow-xl flex flex-col justify-center gap-6'>
                  <h1 className='text-3xl font-bold text-black'>I. Curiosity</h1>
                  <p className='text-gray-600 text-lg leading-relaxed'>
                    Every experiment begins with a question.
                    What happens if we push creativity further?
                  </p>
                  <div className='w-fit border border-black/10 px-6 py-2 rounded-full text-sm font-medium'>
                    The Spark
                  </div>
                </article>
              </figure>
              <figure className='sticky top-0 h-screen grid place-content-center'>
                <article className='bg-[#f1f3f5] border border-black/5 h-80 w-full max-w-lg rounded-2xl p-8 shadow-xl flex flex-col justify-center gap-6'>
                  <h1 className='text-3xl font-bold text-black'>
                    II. Generation
                  </h1>
                  <p className='text-gray-600 text-lg leading-relaxed'>
                    Using AI and creative systems, 
                    ideas quickly become visuals, motion, and prototypes.
                  </p>
                  <div className='w-fit border border-black/10 px-6 py-2 rounded-full text-sm font-medium'>
                    The Build
                  </div>
                </article>
              </figure>
              <figure className='sticky top-0 h-screen grid place-content-center'>
                <article className='bg-[#e9ecef] border border-black/5 h-80 w-full max-w-lg rounded-2xl -rotate-3 p-8 shadow-xl flex flex-col justify-center gap-6'>
                  <h1 className='text-3xl font-bold text-black'>III. Evolution</h1>
                  <p className='text-gray-600 text-lg leading-relaxed'>
                    The strongest concepts are refined, 
                    shaped into something precise and production-ready.
                  </p>
                  <div className='w-fit border border-black/10 px-6 py-2 rounded-full text-sm font-medium'>
                    The Craft
                  </div>
                </article>
              </figure>
              <figure className='sticky top-0 h-screen grid place-content-center'>
                <article className='bg-[#dee2e6] border border-black/5 h-80 w-full max-w-lg rounded-2xl p-8 shadow-xl flex flex-col justify-center gap-6'>
                  <h1 className='text-3xl font-bold text-black'>IV. Emergence</h1>
                  <p className='text-gray-600 text-lg leading-relaxed'>
                    What began as an experiment becomes something real — 
                    assets, visuals, and experiences ready for the world.
                  </p>
                  <div className='w-fit bg-black text-white px-6 py-3 rounded-full text-sm font-bold uppercase tracking-widest'>
                    The Outcome
                  </div>
                </article>
              </figure>
            </div>
            <div className='sticky top-0 h-screen grid place-content-center flex-1'>
              <div className='max-w-md'>
                <span className='text-xs font-mono text-black/40 uppercase tracking-[0.3em] mb-4 block'>THE LAB PROCESS</span>
                <h2 className='text-5xl md:text-6xl font-bold text-black leading-tight'>
                  The <DecryptedText 
                    key={currentHeadline}
                    text={currentHeadline} 
                    animateOn="view"
                    revealDirection="center"
                    speed={40}
                  /> <br /> to Reality.
                </h2>
                <p className='mt-8 text-xl text-gray-500 font-light leading-relaxed'>
                  In the Lab, ideas aren’t just explored — they evolve. 
                  Through rapid experimentation and creative intelligence, 
                  concepts transform into visuals, systems, and experiences 
                  ready for the real world.
                </p>
              </div>
            </div>
          </div>
        </motion.section>
      </main>
    </ReactLenis>
  );
}
