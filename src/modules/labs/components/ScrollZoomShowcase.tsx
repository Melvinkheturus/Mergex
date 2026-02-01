'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from '@studio-freight/lenis';

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

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={containerRef}
            className="relative h-[300vh] bg-white"
        >
            <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center">
                {/* Image Container */}
                <div
                    ref={imageContainerRef}
                    className="relative w-full h-full will-change-transform"
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

                    {/* Complex Gradient Overlay - Radial + Linear for Asymmetry */}
                    <div
                        ref={overlayRef}
                        className="absolute inset-0"
                        style={{ opacity: 0 }}
                    >
                        {/* Base darkening */}
                        <div className="absolute inset-0 bg-black/10" />

                        {/* Headline Zone Darkening (Top Left) */}
                        <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-transparent to-transparent opacity-90" />

                        {/* Vignette at bottom */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80" />

                        {/* Radial to keep face clear */}
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_60%_40%,transparent_0%,rgba(0,0,0,0.4)_50%,rgba(0,0,0,0.9)_100%)] opacity-60" />
                    </div>

                    {/* Content Overlay - Fades in during scroll */}
                    <div
                        ref={contentRef}
                        className="absolute inset-0 w-full h-full p-6 md:p-12 lg:p-16 text-white"
                        style={{ opacity: 0 }}
                    >
                        <div className="relative w-full h-full max-w-[1600px] mx-auto flex flex-col md:block">

                            {/* ZONE 1: PRIMARY STATEMENT (Top Left) */}
                            <div className="md:absolute md:top-[12%] md:left-0 max-w-[460px] z-10">
                                <p className="text-[12px] md:text-[13px] uppercase tracking-[0.12em] mb-4 opacity-70 font-medium text-white/80">
                                    FEATURED EXPLORATION
                                </p>
                                {/* Gradient Text Headline */}
                                <h2 className="text-5xl md:text-[clamp(52px,6vw,76px)] font-semibold leading-[1.05] -ml-[2px] bg-gradient-to-b from-white via-white/90 to-white/60 bg-clip-text text-transparent pb-2">
                                    Meet Kyra.
                                </h2>
                            </div>

                            {/* ZONE 2: CONTEXT & MEANING (Mid-Lower Right) */}
                            <div className="md:absolute md:top-[38%] md:right-[5%] lg:right-[10%] max-w-[420px] md:text-right mt-12 md:mt-0 z-10">
                                <h3 className="text-xl md:text-[24px] font-normal leading-[1.3] text-white/90 mb-6">
                                    An AI-native creative exploration by Mergex Labs.
                                </h3>
                                <p className="text-base md:text-[17px] leading-[1.6] text-white/75">
                                    Kyra represents how we experiment with generative AI — blending visuals, motion, and narrative to create content that feels intentional, not synthetic.
                                </p>
                            </div>

                            {/* ZONE 3: META + ACTION (Bottom Center-Right) */}
                            <div className="md:absolute md:bottom-[10%] md:right-[15%] lg:right-[20%] flex flex-col items-center md:items-end gap-10 mt-auto md:mt-0 z-10">
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

                                {/* CTA Button */}
                                <button className="group h-12 px-8 bg-white text-[#111] rounded-full hover:bg-[#e6e6e6] transition-colors duration-300 flex items-center gap-2.5 shadow-lg shadow-black/20">
                                    <span className="font-medium text-[15px]">Explore Kyra's creation</span>
                                    <svg
                                        className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-300"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M17 8l4 4m0 0l-4 4m4-4H3"
                                        />
                                    </svg>
                                </button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section >
    );
}
