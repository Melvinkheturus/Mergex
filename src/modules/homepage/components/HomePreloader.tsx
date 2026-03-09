'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const wordsSequence = [
    "Chaos",
    "Complexity",
    "Fragmentation",
    "Systems",
    "Intelligence",
    "Automation",
    "Architecture",
    "Leverage",
    "Scale",
    "Structure."
];

export function HomePreloader() {
    const [index, setIndex] = useState(0);
    // Start with isComplete true by default on the server, then check on client
    const [isComplete, setIsComplete] = useState(true);

    useEffect(() => {
        // Only run check on client side
        const hasSeenPreloader = sessionStorage.getItem('has-seen-preloader');
        if (!hasSeenPreloader) {
            setIsComplete(false);
            sessionStorage.setItem('has-seen-preloader', 'true');
        }
    }, []);

    useEffect(() => {
        if (isComplete) return;

        // Prevent scrolling while preloader is active
        document.body.style.overflow = 'hidden';

        // Hide navbar
        window.dispatchEvent(new CustomEvent('mergex:toggle-navbar', { detail: { hidden: true } }));

        return () => {
            document.body.style.overflow = '';
            window.dispatchEvent(new CustomEvent('mergex:toggle-navbar', { detail: { hidden: false } }));
        };
    }, []); // Removed isComplete from array. We use empty dependency array to run only once on mount.

    useEffect(() => {
        if (isComplete) return;

        if (index >= wordsSequence.length - 1) {
            // Hold on the last word slightly longer before animating out the preloader
            const timeout1 = setTimeout(() => {
                document.body.style.overflow = '';
                window.dispatchEvent(new CustomEvent('mergex:toggle-navbar', { detail: { hidden: false } }));
            }, 1200);

            const timeout2 = setTimeout(() => {
                setIsComplete(true); // Fades out the background
            }, 1500);

            return () => { clearTimeout(timeout1); clearTimeout(timeout2); };
        }

        // Flashing timing: Starts a bit slower (400ms), accelerates towards 250ms
        const delay = Math.max(250, 400 - index * 25);
        const timeout = setTimeout(() => {
            setIndex((prev) => prev + 1);
        }, delay);

        return () => clearTimeout(timeout);
    }, [index]); // Removed isComplete from array to keep array size consistent between renders

    return (
        <AnimatePresence>
            {!isComplete && (
                <motion.div
                    key="preloader"
                    className="fixed inset-0 z-[100] bg-black flex items-center justify-center pointer-events-none"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1, ease: [0.65, 0, 0.35, 1] }}
                >
                    {/* Subtle glow in the background that pulses slightly */}
                    <motion.div
                        className="absolute inset-0 bg-white/5 opacity-50"
                        style={{ filter: 'blur(100px)' }}
                        animate={{ opacity: [0.1, 0.3, 0.1] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    />

                    <AnimatePresence mode="wait">
                        <motion.h2
                            key={index}
                            className={`text-white text-3xl md:text-5xl lg:text-7xl font-semibold tracking-tight absolute text-center ${index === wordsSequence.length - 1 ? 'z-50' : ''}`}
                            initial={{
                                opacity: 0,
                                filter: `blur(${Math.max(0, 20 - index * 2.5)}px)`,
                                y: 10,
                                scale: index === 0 ? 0.95 : 1
                            }}
                            animate={{
                                opacity: 1,
                                filter: `blur(${Math.max(0, 10 - index * 2)}px)`,
                                y: 0,
                                scale: 1
                            }}
                            exit={{
                                opacity: 0,
                                filter: `blur(${Math.max(0, 10 - index * 2)}px)`,
                            }}
                            transition={{
                                duration: index === wordsSequence.length - 1 ? 0.8 : 0.15,
                                ease: "easeOut"
                            }}
                        >
                            {wordsSequence[index]}
                        </motion.h2>
                    </AnimatePresence>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
