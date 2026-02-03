'use client';

import { useEffect } from 'react';
import { motion } from 'framer-motion';

/**
 * SystemsHero - Dark hero with animated flowing gradient lines
 * Matches reference: Black background, flowing lines, centered text
 */
export function SystemsHero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center bg-black text-white overflow-hidden">
            {/* Animated Flowing Lines Background */}
            <div className="absolute inset-0 z-0">
                <svg
                    className="absolute inset-0 w-full h-full"
                    viewBox="0 0 1440 800"
                    preserveAspectRatio="xMidYMid slice"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <defs>
                        {/* Gradient Definitions */}
                        <linearGradient id="lineGradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#ff6b35" stopOpacity="0.8" />
                            <stop offset="50%" stopColor="#8b5cf6" stopOpacity="0.8" />
                            <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.8" />
                        </linearGradient>

                        <linearGradient id="lineGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.6" />
                            <stop offset="50%" stopColor="#8b5cf6" stopOpacity="0.6" />
                            <stop offset="100%" stopColor="#ec4899" stopOpacity="0.6" />
                        </linearGradient>
                    </defs>

                    {/* Flowing Line 1 - Top */}
                    <motion.path
                        d="M-100,150 Q360,100 720,180 T1540,150"
                        fill="none"
                        stroke="url(#lineGradient1)"
                        strokeWidth="2"
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{
                            pathLength: 1,
                            opacity: [0, 1, 1, 0.8],
                            d: [
                                "M-100,150 Q360,100 720,180 T1540,150",
                                "M-100,180 Q360,120 720,200 T1540,180",
                                "M-100,150 Q360,100 720,180 T1540,150"
                            ]
                        }}
                        transition={{
                            pathLength: { duration: 2, ease: "easeInOut" },
                            opacity: { duration: 2 },
                            d: { duration: 8, repeat: Infinity, ease: "easeInOut" }
                        }}
                    />

                    {/* Flowing Line 2 - Middle */}
                    <motion.path
                        d="M-100,400 Q360,350 720,420 T1540,380"
                        fill="none"
                        stroke="url(#lineGradient2)"
                        strokeWidth="3"
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{
                            pathLength: 1,
                            opacity: [0, 0.8, 0.8, 0.6],
                            d: [
                                "M-100,400 Q360,350 720,420 T1540,380",
                                "M-100,420 Q360,380 720,450 T1540,400",
                                "M-100,400 Q360,350 720,420 T1540,380"
                            ]
                        }}
                        transition={{
                            pathLength: { duration: 2.5, ease: "easeInOut", delay: 0.3 },
                            opacity: { duration: 2.5, delay: 0.3 },
                            d: { duration: 10, repeat: Infinity, ease: "easeInOut", delay: 0.3 }
                        }}
                    />

                    {/* Flowing Line 3 - Bottom */}
                    <motion.path
                        d="M-100,650 Q360,600 720,670 T1540,630"
                        fill="none"
                        stroke="url(#lineGradient1)"
                        strokeWidth="2"
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{
                            pathLength: 1,
                            opacity: [0, 0.7, 0.7, 0.5],
                            d: [
                                "M-100,650 Q360,600 720,670 T1540,630",
                                "M-100,670 Q360,630 720,700 T1540,660",
                                "M-100,650 Q360,600 720,670 T1540,630"
                            ]
                        }}
                        transition={{
                            pathLength: { duration: 3, ease: "easeInOut", delay: 0.6 },
                            opacity: { duration: 3, delay: 0.6 },
                            d: { duration: 12, repeat: Infinity, ease: "easeInOut", delay: 0.6 }
                        }}
                    />
                </svg>
            </div>

            {/* Content */}
            <div className="relative z-10 text-center px-6 md:px-12 max-w-5xl mx-auto">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="text-5xl md:text-7xl lg:text-8xl font-light tracking-tight mb-6"
                    style={{ fontFamily: 'var(--font-playfair)' }}
                >
                    Clarity. Focus. Impact.
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.8 }}
                    className="text-lg md:text-xl text-gray-400 font-light tracking-wide"
                >
                    We turn complex ideas into effortless experiences
                </motion.p>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1.5 }}
                className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10"
            >
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2"
                >
                    <div className="w-1 h-2 bg-white/50 rounded-full" />
                </motion.div>
            </motion.div>
        </section>
    );
}
