'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Inter, Playfair_Display } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], weight: ['400', '500', '600', '700', '800'] });
const playfair = Playfair_Display({ subsets: ['latin'], style: ['italic'], weight: ['600', '700'] });

export function SystemsHero() {
    return (
        <section className={`relative min-h-screen flex items-center justify-center pt-32 pb-20 overflow-hidden bg-[#fafafa] ${inter.className}`}>

            {/* --- Background Image & Light Overlays --- */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                className="absolute inset-0 z-0"
            >
                <Image
                    src="/assets/background/SYSTEM_BG_Vega.png"
                    alt="Futuristic Portal Background"
                    fill
                    className="object-cover"
                    style={{ objectPosition: 'center 20%' }}
                    priority
                    quality={100}
                />

                {/* Light Overlay: Top-to-bottom transparent to white (40%) */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white/60" />

                {/* --- New: Soft Top-Left Light Source near Mergex Logo --- */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.9)_0%,rgba(243,239,255,0.5)_15%,transparent_40%)] mix-blend-screen" />

                {/* Soft Lavender Tint Overlay (15%) */}
                <div className="absolute inset-0 bg-[#f3efff]/20 mix-blend-overlay" />

                {/* Extra White Gradient at the bottom to transition smoothly to the next section - Reduced intensity */}
                <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white via-white/50 to-transparent" />
            </motion.div>

            {/* --- Main Centered Content --- */}
            <div className="relative z-10 w-full max-w-5xl mx-auto px-6 text-center flex flex-col items-center justify-center mt-[-4vh]">

                {/* 
                  Text sits directly on the background with no solid card.
                */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="relative px-6 py-12 md:px-0 md:py-0 flex flex-col items-center w-full"
                >
                    {/* Subtle Radial Glow purely behind the text block for readability */}
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.85)_0%,rgba(255,255,255,0.3)_40%,transparent_70%)] pointer-events-none -z-10 blur-xl scale-125 md:scale-150" />

                    {/* Eyebrow Label */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                        className="mb-8 px-4 py-1.5 rounded-full bg-white/80 backdrop-blur-sm border border-gray-200/50 shadow-sm"
                    >
                        <span className="text-[9px] md:text-[10px] font-bold tracking-[0.15em] uppercase text-gray-500">
                            MERGEX SYSTEMS · SOFTWARE, AUTOMATION & DIGITAL INFRASTRUCTURE
                        </span>
                    </motion.div>

                    {/* Main Headline */}
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
                        className="text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight text-gray-900 mb-6 drop-shadow-sm"
                    >
                        Architect Systems That <span className={`${playfair.className} text-violet-600`}>Scale</span>.
                    </motion.h1>

                    {/* Subheadline */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
                        className="text-base md:text-lg text-gray-800 max-w-2xl mx-auto mb-6 font-medium leading-relaxed drop-shadow-sm"
                    >
                        Unify software, automation, and infrastructure into one system — built to scale without chaos.
                    </motion.p>

                    {/* Support Line */}
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
                        className="text-sm text-gray-600 italic mb-10 drop-shadow-sm"
                    >
                        Built for founders moving from chaos to structured scale.
                    </motion.p>

                    {/* Custom CTAs */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-10 sm:gap-[60px] w-full"
                    >
                        {/* Primary Button */}
                        <Link
                            href="#solutions"
                            className="group flex items-center justify-center gap-2 w-full sm:w-auto px-7 py-3.5 bg-gray-900 hover:bg-black text-white rounded-lg text-sm font-semibold transition-all duration-300 shadow-md hover:shadow-[0_0_20px_rgba(139,92,246,0.5)] hover:ring-1 hover:ring-violet-400/30 active:scale-95"
                        >
                            Explore Our Systems
                            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                        </Link>

                        {/* Secondary Button */}
                        <Link
                            href="/contact"
                            className="flex items-center justify-center w-full sm:w-auto px-7 py-3.5 bg-white/90 hover:bg-white backdrop-blur-sm text-gray-900 border border-gray-300 rounded-lg text-sm font-semibold transition-all duration-300 shadow-sm hover:shadow-[0_0_20px_rgba(139,92,246,0.3)] hover:border-violet-300 active:scale-95"
                        >
                            Book a Discovery Call
                        </Link>
                    </motion.div>
                </motion.div>
            </div>

        </section>
    );
}