'use client';

import React from 'react';
import { motion } from 'framer-motion';

/**
 * MarqueeStrip - Overlay marquee that floats on top of the
 * boundary between ArchitectureSection and ProblemFragmentation.
 *
 * No separate background - uses a frosted glass overlay so the
 * two sections underneath bleed through subtly.
 *
 * Specs:
 * - Height: 36px
 * - Background: transparent with backdrop-blur
 * - Font: mono / semi-mono, semibold
 * - Scroll: Left to Right (even slower - 70s)
 * - Slant: -1deg rotation
 */
export function MarqueeStrip() {
    const phrases = [
        "REPLACE FRAGMENTED VENDORS",
        "BUILD ONE SCALABLE SYSTEM",
        "AUTOMATE OPERATIONS WITH AI",
        "ENGINEER YOUR DIGITAL INFRASTRUCTURE",
        "SCALE WITHOUT FRICTION"
    ];

    const content = phrases.join("   •   ");
    const repetitions = [0, 1, 2, 3, 4];

    return (
        <div
            className="relative z-50 w-full overflow-hidden py-8 -rotate-[0.8deg] scale-[1.02]"
        >
            {/* Solid white strip */}
            <div
                className="h-[20px] flex items-center"
                style={{ background: '#ebebed' }}
            >
                <motion.div
                    className="flex whitespace-nowrap"
                    initial={{ x: "-50%" }}
                    animate={{ x: "0%" }}
                    transition={{
                        duration: 180,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                    style={{ willChange: 'transform' }}
                >
                    {repetitions.map((i) => (
                        <span
                            key={i}
                            className="font-mono font-semibold uppercase text-zinc-500 px-6"
                            style={{
                                fontSize: '10.5px',
                                letterSpacing: '0.12em',
                            }}
                        >
                            {content}
                        </span>
                    ))}
                </motion.div>
            </div>
        </div>
    );
}
