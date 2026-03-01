'use client';

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from '@studio-freight/lenis';
import { ScrollVelocity } from '@/components/ScrollVelocity';
import { Skiper67, VideoPopOver } from '@/components/ui/skiper-ui/skiper67';
import { cn } from '@/lib/utils';
import { AnimatePresence } from 'framer-motion';

// Register GSAP plugin
if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
}

/**
 * ScrollZoomShowcase - Scroll-driven image zoom animation
 * Progressively zooms from small image to full-screen with overlay content
 */
export function ScrollZoomShowcase() {
    const containerRef = useRef<HTMLDivElement>(null);
    const imageContainerRef = useRef<HTMLDivElement>(null);
    const imageRef = useRef<HTMLDivElement>(null);
    const overlayRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);
    const videoCardRef = useRef<HTMLDivElement>(null);
    const lenisRef = useRef<Lenis | null>(null);
    const [isVideoOpen, setIsVideoOpen] = useState(false);

    useEffect(() => {
        // Initialize Lenis smooth scroll
        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            smoothWheel: true,
        });

        lenisRef.current = lenis;

        function raf(time: number) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }
        requestAnimationFrame(raf);

        // Update ScrollTrigger on Lenis scroll
        lenis.on('scroll', ScrollTrigger.update);

        return () => {
            lenis.destroy();
        };
    }, []);

    useEffect(() => {
        if (!containerRef.current || !imageContainerRef.current || !contentRef.current || !overlayRef.current) return;

        const ctx = gsap.context(() => {
            // Image zoom animation with a "hold" duration at the end
            gsap.fromTo(
                imageContainerRef.current,
                {
                    scale: 0.5,
                },
                {
                    keyframes: [
                        { scale: 1, duration: 0.5 }, // Finish growth at 50% scroll
                        { scale: 1, duration: 0.5 }  // Hold for the last 50%
                    ],
                    ease: 'none',
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: 'top top',
                        end: 'bottom bottom',
                        scrub: 1,
                        onEnter: () => {
                            window.dispatchEvent(new CustomEvent('mergex:toggle-navbar', { detail: { hidden: true } }));
                        },
                        onLeave: () => {
                            window.dispatchEvent(new CustomEvent('mergex:toggle-navbar', { detail: { hidden: false } }));
                        },
                        onEnterBack: () => {
                            window.dispatchEvent(new CustomEvent('mergex:toggle-navbar', { detail: { hidden: true } }));
                        },
                        onLeaveBack: () => {
                            window.dispatchEvent(new CustomEvent('mergex:toggle-navbar', { detail: { hidden: false } }));
                        }
                    },
                }
            );

            // Inner Image scale-down (pull-away effect) with hold
            gsap.fromTo(
                imageRef.current,
                {
                    scale: 1.2, // Start zoomed in
                },
                {
                    keyframes: [
                        { scale: 1, duration: 0.5 }, // Reach normal scale at 50%
                        { scale: 1, duration: 0.5 }  // Hold until end
                    ],
                    ease: 'none',
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: 'top top',
                        end: 'bottom bottom',
                        scrub: 1,
                    },
                }
            );

            // Video Card scale-up with hold
            gsap.fromTo(
                videoCardRef.current,
                {
                    scale: 0.8,
                },
                {
                    keyframes: [
                        { scale: 1, duration: 0.5 },
                        { scale: 1, duration: 0.5 }
                    ],
                    ease: 'none',
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: 'top top',
                        end: 'bottom bottom',
                        scrub: 1,
                    },
                }
            );

            // Dark overlay fade in with hold
            gsap.fromTo(
                overlayRef.current,
                {
                    opacity: 0,
                },
                {
                    keyframes: [
                        { opacity: 0.85, duration: 0.5 },
                        { opacity: 0.85, duration: 0.5 }
                    ],
                    ease: 'none',
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: 'top top',
                        end: 'bottom bottom',
                        scrub: 1,
                    },
                }
            );

            // Content fade in with hold
            gsap.fromTo(
                contentRef.current,
                {
                    opacity: 0,
                    y: 30,
                },
                {
                    keyframes: [
                        { opacity: 1, y: 0, duration: 0.5 },
                        { opacity: 1, y: 0, duration: 0.5 }
                    ],
                    ease: 'power2.out',
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: 'top top',
                        end: 'bottom bottom',
                        scrub: 1,
                    },
                }
            );
        });

        // Force refresh after a short delay to ensure layout is settled
        const timer = setTimeout(() => {
            ScrollTrigger.refresh();
        }, 500);

        return () => {
            ctx.revert();
            clearTimeout(timer);
        };
    }, []);

    return (
        <section
            ref={containerRef}
            className="relative h-[250vh] bg-white"
        >
            <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center">
                {/* Background Text Marquee - Sits behind the image */}
                <div className="absolute inset-0 z-0 flex items-center justify-center opacity-70">
                    <div className="w-full">
                        <ScrollVelocity
                            texts={[
                                "HUMAN STRATEGY · AI ACCELERATION · STRUCTURED CREATIVITY ·",
                                "GENERATIVE SYSTEMS · VISUAL INTELLIGENCE · ENGINEERED EXPERIMENTATION ·"
                            ]}
                            velocity={50}
                            className="text-4xl md:text-6xl lg:text-8xl font-serif italic font-light tracking-wide text-gray-900 whitespace-nowrap opacity-30 px-4"
                        />
                    </div>
                </div>

                {/* Image Container */}
                <div
                    ref={imageContainerRef}
                    className="relative w-full h-full will-change-transform z-10"
                    style={{
                        transformOrigin: 'center center',
                    }}
                >
                    {/* Main Scaling Container (Dolly Zoom) */}
                    <div
                        ref={imageRef}
                        className="absolute inset-0"
                    >
                        {/* Background Image Layer */}
                        <div
                            className="absolute inset-0 bg-cover bg-center"
                            style={{
                                backgroundImage: 'url(/assets/model/Madonna.jpg)',
                            }}
                        />
                        {/* Complex Gradient Overlay - Targeted Darkening */}
                        <div
                            ref={overlayRef}
                            className="absolute inset-0"
                            style={{ opacity: 0 }}
                        >
                            {/* Heavy Top-Left Radial Gradient for Headline */}
                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_0%_0%,rgba(0,0,0,0.85)_0%,rgba(0,0,0,0.6)_20%,rgba(0,0,0,0.2)_40%,transparent_70%)]" />

                            {/* Heavy Bottom-Right Radial Gradient for Meta/CTA */}
                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_100%_100%,rgba(0,0,0,0.85)_0%,rgba(0,0,0,0.6)_20%,rgba(0,0,0,0.2)_40%,transparent_70%)]" />

                            {/* Subtle overall vignette to connect them gently without covering face */}
                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,transparent_30%,rgba(0,0,0,0.2)_100%)] opacity-40" />
                        </div>
                        {/* Content Overlay - Fades in during scroll */}
                        <div
                            ref={contentRef}
                            className="absolute inset-0 w-full h-full p-6 md:p-12 lg:p-16 text-white"
                            style={{ opacity: 0 }}
                        >
                            <div className="relative w-full h-full max-w-[1600px] mx-auto flex flex-col md:block">

                                {/* ZONE 1: PRIMARY STATEMENT (Top Left) */}
                                <div className={cn(
                                    "md:absolute md:top-[6%] md:left-0 max-w-[460px] z-10 drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)] transition-opacity duration-300",
                                    isVideoOpen ? "opacity-0 pointer-events-none" : "opacity-100"
                                )}>
                                    <p className="text-[12px] md:text-[13px] uppercase tracking-[0.12em] mb-4 opacity-70 font-medium text-white/80">
                                        FEATURED EXPLORATION
                                    </p>
                                    {/* Headline with Image */}
                                    <h2 className="text-4xl md:text-6xl font-semibold leading-[1.05] -ml-[2px] bg-gradient-to-b from-white via-white/90 to-white/60 bg-clip-text text-transparent pb-2 whitespace-nowrap flex items-center">
                                        Meet
                                        <img
                                            src="/assets/model/Madonna_Calligraphy.png"
                                            alt="Madonna"
                                            className="inline-block object-contain ml-3 mt-1 h-14 md:h-20 filter brightness-0 invert opacity-90 translate-y-2 md:translate-y-3"
                                        />
                                    </h2>
                                </div>

                                {/* ZONE 2: CONTEXT & MEANING (Mid-Left) */}
                                <div className={cn(
                                    "md:absolute md:top-[33%] md:left-0 max-w-[420px] mt-8 md:mt-0 z-10 flex flex-col gap-6 drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)] transition-opacity duration-300",
                                    isVideoOpen ? "opacity-0 pointer-events-none" : "opacity-100"
                                )}>
                                    <h3 className="text-base md:text-lg font-normal leading-[1.3] text-white/90">
                                        An AI-native creative exploration by Mergex Labs.
                                    </h3>
                                    {/* Instagram Link */}
                                    <div className="flex flex-col gap-1.5">
                                        <span className="text-[11px] md:text-[12px] uppercase tracking-[0.1em] text-white/50 font-medium">
                                            Follow her journey:
                                        </span>
                                        <a
                                            href="https://instagram.com/madonna.ai"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-sm md:text-base font-medium text-white/80 hover:text-white transition-colors duration-300 w-fit border-b border-white/20 hover:border-white/60 pb-0.5"
                                        >
                                            @madonna.ai
                                        </a>
                                    </div>
                                </div>

                                {/* ZONE 2.5: VIDEO CARD (Top Right) */}
                                <div
                                    ref={videoCardRef}
                                    className="hidden md:block absolute top-[12%] right-[3%] w-[260px] z-[20]"
                                >
                                    <Skiper67 onOpenChange={setIsVideoOpen} isOpen={isVideoOpen} />
                                </div>

                                {/* ZONE 3: META + ACTION (Bottom Right) */}
                                <div className={cn(
                                    "md:absolute md:bottom-[6%] md:right-0 flex flex-col items-center md:items-end gap-10 mt-auto md:mt-0 z-10 drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)] transition-opacity duration-300",
                                    isVideoOpen ? "opacity-0 pointer-events-none" : "opacity-100"
                                )}>
                                    {/* Moved Description */}
                                    <p className="text-base md:text-[17px] leading-[1.6] text-white/75 max-w-[420px] text-center md:text-right">
                                        Madonna represents how we experiment with generative AI blending visuals, motion, and narrative to create content that feels intentional, not synthetic.
                                    </p>

                                    {/* Meta Row */}
                                    <div className="flex flex-row gap-8 md:gap-12 border-t border-white/20 pt-6 md:border-none md:pt-0">
                                        <div className="text-center md:text-right">
                                            <p className="text-[11px] uppercase tracking-[0.1em] opacity-50 mb-1.5 font-medium">
                                                Identity
                                            </p>
                                            <p className="text-[14px] font-medium opacity-90">
                                                Madonna
                                            </p>
                                        </div>
                                        <div className="text-center md:text-right">
                                            <p className="text-[11px] uppercase tracking-[0.1em] opacity-50 mb-1.5 font-medium">
                                                Created by
                                            </p>
                                            <p className="text-[14px] font-medium opacity-90">
                                                Mergex Labs
                                            </p>
                                        </div>
                                        <div className="text-center md:text-right">
                                            <p className="text-[11px] uppercase tracking-[0.1em] opacity-50 mb-1.5 font-medium">
                                                Focus
                                            </p>
                                            <p className="text-[14px] font-medium opacity-90">
                                                Visual storytelling
                                            </p>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Fullscreen Video Portal Replacement - Outside all transforms */}
            <AnimatePresence>
                {isVideoOpen && (
                    <VideoPopOver setShowVideoPopOver={setIsVideoOpen} />
                )}
            </AnimatePresence>
        </section >
    );
}
