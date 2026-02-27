'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from '@studio-freight/lenis';
import { ScrollVelocity } from '@/components/ScrollVelocity';

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
    const overlayRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);
    const lenisRef = useRef<Lenis | null>(null);

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
            // Image zoom animation
            gsap.fromTo(
                imageContainerRef.current,
                {
                    scale: 0.5,
                },
                {
                    scale: 1,
                    ease: 'none',
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: 'top top',
                        end: 'bottom bottom',
                        scrub: 1,
                        pin: true,
                        anticipatePin: 1,
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
                        },
                        onRefresh: () => {
                            // Ensure pin spacing is calculated correctly
                        }
                    },
                }
            );

            // Dark overlay fade in
            gsap.fromTo(
                overlayRef.current,
                {
                    opacity: 0,
                },
                {
                    opacity: 0.8,
                    ease: 'none',
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: 'top top',
                        end: 'bottom bottom',
                        scrub: 1,
                    },
                }
            );

            // Content fade in
            gsap.fromTo(
                contentRef.current,
                {
                    opacity: 0,
                    y: 30,
                },
                {
                    opacity: 1,
                    y: 0,
                    ease: 'power2.out',
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: 'top top',
                        end: 'center center',
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
            className="relative h-[150vh] bg-white"
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
                            className="text-4xl md:text-6xl lg:text-8xl font-black uppercase tracking-tighter text-gray-900 whitespace-nowrap font-serif italic opacity-30 px-4"
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
                    {/* Background Image */}
                    <div
                        className="absolute inset-0 bg-cover bg-center"
                        style={{
                            backgroundImage: 'url(/assets/model/Kyra.jpg)',
                        }}
                    />

                    {/* Complex Gradient Overlay - Targeted Darkening */}
                    <div
                        ref={overlayRef}
                        className="absolute inset-0"
                        style={{ opacity: 0 }}
                    >
                        {/* Heavy Top-Left Radial Gradient for Headline */}
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_0%_0%,rgba(0,0,0,0.95)_0%,rgba(0,0,0,0.8)_20%,rgba(0,0,0,0.4)_40%,transparent_70%)]" />

                        {/* Heavy Bottom-Right Radial Gradient for Meta/CTA */}
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_100%_100%,rgba(0,0,0,0.95)_0%,rgba(0,0,0,0.8)_20%,rgba(0,0,0,0.4)_40%,transparent_70%)]" />

                        {/* Subtle overall vignette to connect them gently without covering face */}
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,transparent_30%,rgba(0,0,0,0.3)_100%)] opacity-60" />
                    </div>

                    {/* Content Overlay - Fades in during scroll */}
                    <div
                        ref={contentRef}
                        className="absolute inset-0 w-full h-full p-6 md:p-12 lg:p-16 text-white"
                        style={{ opacity: 0 }}
                    >
                        <div className="relative w-full h-full max-w-[1600px] mx-auto flex flex-col md:block">

                            {/* ZONE 1: PRIMARY STATEMENT (Top Left) */}
                            <div className="md:absolute md:top-[6%] md:left-0 max-w-[460px] z-10">
                                <p className="text-[12px] md:text-[13px] uppercase tracking-[0.12em] mb-4 opacity-70 font-medium text-white/80">
                                    FEATURED EXPLORATION
                                </p>
                                {/* Gradient Text Headline */}
                                <h2 className="text-4xl md:text-5xl font-semibold leading-[1.05] -ml-[2px] bg-gradient-to-b from-white via-white/90 to-white/60 bg-clip-text text-transparent pb-2">
                                    Meet <span className="font-normal text-[1.2em] relative top-1 text-white px-2" style={{ fontFamily: "'Great Vibes', cursive" }}>Kyra.</span>
                                </h2>
                            </div>

                            {/* ZONE 2: CONTEXT & MEANING (Mid-Left) */}
                            <div className="md:absolute md:top-[38%] md:left-0 max-w-[420px] mt-12 md:mt-0 z-10">
                                <h3 className="text-base md:text-lg font-normal leading-[1.3] text-white/90">
                                    An AI-native creative exploration by Mergex Labs.
                                </h3>
                            </div>

                            {/* ZONE 3: META + ACTION (Bottom Right) */}
                            <div className="md:absolute md:bottom-[6%] md:right-0 flex flex-col items-center md:items-end gap-10 mt-auto md:mt-0 z-10">
                                {/* Moved Description */}
                                <p className="text-base md:text-[17px] leading-[1.6] text-white/75 max-w-[420px] text-center md:text-right">
                                    Kyra represents how we experiment with generative AI blending visuals, motion, and narrative to create content that feels intentional, not synthetic.
                                </p>

                                {/* Meta Row */}
                                <div className="flex flex-row gap-8 md:gap-12 border-t border-white/20 pt-6 md:border-none md:pt-0">
                                    <div className="text-center md:text-right">
                                        <p className="text-[11px] uppercase tracking-[0.1em] opacity-50 mb-1.5 font-medium">
                                            Identity
                                        </p>
                                        <p className="text-[14px] font-medium opacity-90">
                                            Kyra
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
        </section >
    );
}
