"use client";

import { motion, MotionValue, useScroll, useTransform, useSpring } from "framer-motion";
import Lenis from "lenis";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const images = [
  "https://res.cloudinary.com/mergex/image/upload/v1773281817/hf_20260311_173240_a7233f48-61c4-4ad4-a1ec-2b000c241b56_omhw0f.jpg",
  "https://res.cloudinary.com/mergex/image/upload/v1773281599/Cedar_Site_ymyqdv.jpg",
  "https://res.cloudinary.com/mergex/image/upload/v1773281670/hf_20260311_172622_d1cffd0d-e7d9-4d24-b60a-f7797d787fd6_1_d79bs4.jpg",
  "https://res.cloudinary.com/mergex/image/upload/v1773281774/hf_20260311_172919_09959383-6564-4937-9ff3-d180abd51c28_mmug9q.jpg",
  "https://res.cloudinary.com/mergex/image/upload/v1773282284/hf_20260311_180959_052a5135-58c6-4512-8bb7-093adee7607c_zytaws.jpg",
  "https://res.cloudinary.com/mergex/image/upload/v1773282262/hf_20260311_181330_2607b912-951d-4b27-b0eb-76d202b26a1e_qaqk3i.jpg",
  "https://res.cloudinary.com/mergex/image/upload/v1773282121/hf_20260311_180625_ea8ef4bb-5e63-40c8-bcbf-0dc48b075244_itpy0o.png",
  "https://res.cloudinary.com/mergex/image/upload/v1773282637/hf_20260311_183152_66ca9663-fe80-4b3a-bcaa-870994c9a4cf_wrhaaw.png",
  "https://res.cloudinary.com/mergex/image/upload/v1773282428/hf_20260311_182054_4e13daf1-1c00-4fea-b505-c5cd62604f80_xhcjdq.png",
  "https://res.cloudinary.com/mergex/image/upload/v1773282588/hf_20260311_183005_95996d0c-20cb-4de4-9f94-752894ae80c5_1_mwv0uy.png",
  "https://res.cloudinary.com/mergex/image/upload/v1773204343/mockups/labs/Portfolio/jewelry_ai_model.png",
  "/mockups/labs/Gallery/Sara 1.png",
  "/mockups/labs/Gallery/Sara 2.png",
  "/mockups/labs/Gallery/Sara 3.jpg",
  "/mockups/labs/Gallery/Sara 4.png",
  "/mockups/labs/Gallery/Sara 5.jpg",
  "/mockups/labs/Gallery/Sara 6.png",
  "/mockups/labs/Gallery/Sara 7.jpg",
  "/mockups/labs/Gallery/Sara 8.jpg",
  "/mockups/labs/Gallery/Sara 9.jpg",
  "/mockups/labs/Gallery/Sara 10.png",
  "/mockups/labs/Gallery/Sara 11.jpg",
  "/mockups/labs/Gallery/Sara 12.jpg",
];

const SkiperShowcase = () => {
  const gallery = useRef<HTMLDivElement>(null);
  const [dimension, setDimension] = useState({ width: 0, height: 0 });

  const { scrollYProgress } = useScroll({
    target: gallery,
    offset: ["start end", "end start"],
  });

  // Apply spring physics for "even more smooth" feeling
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 40,
    restDelta: 0.001
  });

  const { height } = dimension;
  // Use smoothProgress instead of scrollYProgress
  const y = useTransform(smoothProgress, [0, 1], [0, height * 2]);
  const y2 = useTransform(smoothProgress, [0, 1], [0, height * 3.3]);
  const y3 = useTransform(smoothProgress, [0, 1], [0, height * 1.25]);
  const y4 = useTransform(smoothProgress, [0, 1], [0, height * 3]);

  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.1,
      duration: 1.2,
      smoothWheel: true,
    });
    const raf = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    const resize = () => {
      setDimension({ width: window.innerWidth, height: window.innerHeight });
    };

    window.addEventListener("resize", resize);
    requestAnimationFrame(raf);
    resize();

    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <main className="relative w-full overflow-hidden bg-white text-black">
      {/* Header Section */}
      <section className="relative flex flex-col items-center justify-center bg-white px-6 py-24 text-center md:py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl space-y-8"
        >
          <div className="space-y-4">
            <h4 className="font-geist text-xs font-medium uppercase tracking-[0.2em] bg-gradient-to-b from-purple-400 to-purple-800 bg-clip-text text-transparent">
              Selected Work
            </h4>
            <h2 className="font-geist text-4xl font-bold tracking-tight text-black sm:text-5xl md:text-6xl">
              Built Across the <br className="hidden md:block" /> Mergex <span className="font-playfair font-normal italic">Ecosystem</span>
            </h2>
          </div>
        </motion.div>
      </section>

      <div
        ref={gallery}
        className="relative box-border flex h-[180vh] sm:h-[150vh] gap-[2vw] overflow-hidden bg-white px-[2vw] items-start"
      >
        <Column 
          images={[images[0], images[1], images[2], images[11], images[12], images[13], images[20], images[22]]} 
          y={y} 
          className="w-1/2 md:w-1/4 -top-[45%]" 
        />
        <Column 
          images={[images[3], images[4], images[5], images[14], images[15], images[16], images[21], images[2]]} 
          y={y2} 
          className="w-1/2 md:w-1/4 -top-[95%]" 
        />
        <Column 
          images={[images[6], images[7], images[8], images[17], images[18], images[19], images[22]]} 
          y={y3} 
          className="hidden md:flex md:w-1/4 -top-[45%]" 
        />
        <Column 
          images={[images[9], images[10], images[0], images[1], images[2], images[3]]} 
          y={y4} 
          className="hidden md:flex md:w-1/4 -top-[75%]" 
        />
      </div>

      <section className="relative flex flex-col items-center justify-center bg-white px-6 py-24 text-center md:py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl space-y-8"
        >
          <p className="mx-auto max-w-2xl font-geist text-lg leading-relaxed text-neutral-500 md:text-xl">
            A glimpse into what happens when strategy, systems, and creative intelligence work together under one architecture.
          </p>

          <div className="flex flex-row items-center justify-center gap-3 pt-4 sm:gap-4">
            <Link href="/systems#case-overview" className="w-full max-w-[180px] sm:max-w-none">
              <button className="h-12 w-full rounded-lg bg-black font-geist text-[13px] font-medium text-white transition-all hover:bg-neutral-800 sm:px-8">
                View Systems Projects
              </button>
            </Link>
            <Link href="/labs#experiments" className="w-full max-w-[180px] sm:max-w-none">
              <button className="h-12 w-full rounded-lg border border-neutral-200 bg-white font-geist text-[13px] font-medium text-black transition-all hover:bg-neutral-50 sm:px-8">
                View Labs Work
              </button>
            </Link>
          </div>
        </motion.div>
      </section>
    </main>
  );
};

type ColumnProps = {
  images: string[];
  y: MotionValue<number>;
  className?: string;
};

const Column = ({ images, y, className }: ColumnProps) => {
  return (
    <motion.div
      className={`relative flex flex-col gap-[2vw] will-change-transform ${className}`}
      style={{ y }}
    >
      {images.map((src, i) => (
        <div key={i} className="relative h-auto w-full overflow-hidden rounded-xl bg-neutral-50 shadow-sm border border-neutral-100 transform-gpu">
          <img
            src={`${src}`}
            alt="showcase-image"
            className="pointer-events-none w-full h-auto block transition-transform duration-700 ease-out transform-gpu"
            loading="lazy"
          />
        </div>
      ))}
    </motion.div>
  );
};

export { SkiperShowcase };
