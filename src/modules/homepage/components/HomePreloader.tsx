'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const WORDS = [
    "Chaos",
    "Complexity",
    "Fragmentation",
    "Systems",
    "Intelligence",
    "Automation",
    "Architecture",
    "Leverage",
    "Scale",
    "Structure.",
];

// Per-word display duration (ms): starts at 400ms, accelerates to 250ms
const getDelay = (i: number) => Math.max(250, 400 - i * 20);

// How long to hold the final word before fading out
const FINAL_HOLD_MS = 900;
// Fade-out duration (must match framer-motion transition below)
const FADE_OUT_MS = 800;

function hideNavbar() {
    window.dispatchEvent(new CustomEvent('mergex:toggle-navbar', { detail: { hidden: true } }));
}
function showNavbar() {
    window.dispatchEvent(new CustomEvent('mergex:toggle-navbar', { detail: { hidden: false } }));
}

export function HomePreloader() {
    // On the server — and for returning visitors — preloader never shows.
    const [active, setActive] = useState(false);
    const [wordIndex, setWordIndex] = useState(0);
    const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

    // ── 1. Client-side bootstrap ────────────────────────────────────────────
    useEffect(() => {
        const seen = sessionStorage.getItem('has-seen-preloader');
        if (seen) return; // skip on revisit

        sessionStorage.setItem('has-seen-preloader', 'true');

        // Lock scroll & hide navbar immediately
        document.body.style.overflow = 'hidden';
        hideNavbar();
        setActive(true);
    }, []);

    // ── 2. Word cycling ─────────────────────────────────────────────────────
    useEffect(() => {
        if (!active) return;

        const isLast = wordIndex >= WORDS.length - 1;

        if (isLast) {
            // Hold the final word, then start the fade
            timerRef.current = setTimeout(() => {
                document.body.style.overflow = '';
                // Trigger framer-motion exit
                setActive(false);

                // Show navbar only AFTER the preloader has fully faded out
                // + 200ms grace so the hero has time to paint first
                timerRef.current = setTimeout(() => {
                    showNavbar();
                }, FADE_OUT_MS + 200);
            }, FINAL_HOLD_MS);
        } else {
            timerRef.current = setTimeout(() => {
                setWordIndex((prev) => prev + 1);
            }, getDelay(wordIndex));
        }

        return () => {
            if (timerRef.current) clearTimeout(timerRef.current);
        };
    }, [active, wordIndex]);

    // ── 3. Safety cleanup (e.g. unmount before completion) ─────────────────
    useEffect(() => {
        return () => {
            document.body.style.overflow = '';
            showNavbar();
        };
    }, []);

    return (
        <AnimatePresence>
            {active && (
                <motion.div
                    key="preloader"
                    className="fixed inset-0 z-[200] bg-black flex items-center justify-center pointer-events-none"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: FADE_OUT_MS / 1000, ease: [0.65, 0, 0.35, 1] }}
                >
                    {/* Subtle ambient pulse */}
                    <motion.div
                        className="absolute inset-0 pointer-events-none"
                        style={{
                            background: 'radial-gradient(circle at 50% 50%, rgba(255,255,255,0.04) 0%, transparent 70%)',
                        }}
                        animate={{ opacity: [0.4, 1, 0.4] }}
                        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                    />

                    {/* Word flip */}
                    <AnimatePresence mode="wait">
                        <motion.span
                            key={wordIndex}
                            className="text-white text-4xl md:text-6xl lg:text-7xl font-semibold tracking-tight select-none"
                            style={{ fontFamily: '"Outfit", system-ui, sans-serif' }}
                            initial={{ opacity: 0, y: 8, filter: 'blur(6px)' }}
                            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                            exit={{ opacity: 0, y: -6, filter: 'blur(4px)' }}
                            transition={{
                                duration: wordIndex === WORDS.length - 1 ? 0.6 : 0.12,
                                ease: 'easeOut',
                            }}
                        >
                            {WORDS[wordIndex]}
                        </motion.span>
                    </AnimatePresence>

                    {/* Subtle progress bar */}
                    <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-24 h-px bg-white/10 overflow-hidden rounded-full">
                        <motion.div
                            className="h-full bg-white/40 rounded-full"
                            initial={{ width: '0%' }}
                            animate={{ width: `${((wordIndex + 1) / WORDS.length) * 100}%` }}
                            transition={{ duration: 0.3, ease: 'easeOut' }}
                        />
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
