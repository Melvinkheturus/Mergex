'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Manrope, Playfair_Display } from 'next/font/google';

const manrope = Manrope({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700'],
});

const playfair = Playfair_Display({
    subsets: ['latin'],
    style: ['italic'],
    weight: ['400', '500', '600'],
});

export function SystemsHero() {
    return (
        <section className={`relative min-h-screen overflow-hidden bg-[#fafafa] ${manrope.className}`}>
            {/* Background */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.5, ease: 'easeOut' }}
                className="absolute inset-0 z-0"
            >
                <Image
                    src="/assets/background/SYSTEM_BG_Vega.png"
                    alt="Futuristic Portal Background"
                    fill
                    className="object-cover object-[50%_20%] md:object-[35%_20%]"
                    priority
                    quality={100}
                />

                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white/60" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.9)_0%,rgba(243,239,255,0.5)_15%,transparent_40%)] mix-blend-screen" />
                <div className="absolute inset-0 bg-[#f3efff]/20 mix-blend-overlay" />
                <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#fafafa] via-white/80 to-transparent" />
            </motion.div>

            {/* Content */}
            <div className="relative z-10 min-h-screen w-full flex items-center justify-center px-6 py-14">
                <div className="w-full max-w-4xl mx-auto flex flex-col items-center text-center gap-10">
                    <div className="relative w-full">
                        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.85)_0%,rgba(255,255,255,0.3)_40%,transparent_70%)] pointer-events-none -z-10 blur-xl scale-125 md:scale-150" />

                        <motion.p
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
                            className="mb-6 text-[10px] md:text-xs font-medium text-black/50 uppercase tracking-[0.3em] drop-shadow-sm"
                        >
                            MERGEX SYSTEMS · SOFTWARE, AUTOMATION & DIGITAL INFRASTRUCTURE
                        </motion.p>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.3, ease: 'easeOut' }}
                            className="leading-[0.95] tracking-tight"
                        >
                            <span className="font-semibold text-[clamp(2rem,6vw,5rem)] text-black drop-shadow-sm leading-tight">
                                Architect Systems That{' '}
                            </span>
                            <span
                                className={`${playfair.className} font-normal text-[clamp(2rem,6vw,5rem)] text-violet-600 italic drop-shadow-sm leading-tight`}
                            >
                                Scale.
                            </span>
                        </motion.h1>
                    </div>

                    <div className="absolute bottom-24 left-6 right-6 sm:static flex flex-col items-center sm:w-full max-w-2xl gap-3 sm:gap-4 z-20">
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.4, ease: 'easeOut' }}
                            className="text-sm md:text-xl text-black/95 leading-relaxed font-medium drop-shadow-sm"
                        >
                            Unify software, automation, and infrastructure into one system — built to scale without chaos.
                        </motion.p>

                        <motion.p
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.5, ease: 'easeOut' }}
                            className="text-[10px] md:text-base text-black/70 leading-relaxed italic drop-shadow-sm"
                        >
                            Built for founders moving from chaos to structured scale.
                        </motion.p>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.6, ease: 'easeOut' }}
                        className="absolute bottom-10 left-6 right-6 sm:static flex flex-row justify-center items-center gap-3 sm:gap-8 md:gap-[80px] lg:gap-[110px] xl:gap-[130px] w-auto sm:mt-8 md:-mt-4 lg:-mt-8"
                    >
                        <Link
                            href="#solutions"
                            className="group flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-black text-white rounded-lg text-xs md:text-sm font-medium transition-all hover:bg-neutral-800 hover:shadow-xl shadow-lg whitespace-nowrap sm:w-[190px]"
                        >
                            Explore Systems
                            <ArrowRight size={14} className="hidden sm:block group-hover:translate-x-1 transition-transform" />
                        </Link>

                        <Link
                            href="/contact"
                            className="flex-1 sm:flex-none inline-flex items-center justify-center px-4 py-2.5 bg-transparent border border-black rounded-lg text-xs md:text-sm font-medium text-black transition-all hover:bg-black/5 whitespace-nowrap sm:w-[190px] bg-white/50 backdrop-blur-sm sm:backdrop-blur-none sm:bg-transparent"
                        >
                            Book a Discovery Call
                        </Link>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}