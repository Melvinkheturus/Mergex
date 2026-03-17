'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SHOWREEL_CONTENT } from '../content';
import { BlurVignette } from '@/components/ui/BlurVignette';
import { Outfit } from 'next/font/google';

const outfit = Outfit({
    subsets: ['latin'],
    display: 'swap',
});


// Register GSAP plugin
if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
}

/**
 * ShowreelSection - Cinematic scroll-driven reveal
 *
 * Animation behaviour:
 *   • Card begins in a narrower, smaller state (further reduced width).
 *   • A background title "SHOWREEL" sits behind the card initially.
 *   • As user scrolls, the card expands to fill the screen, covering the background title.
 *   • The animated "SHOW" and "REEL" glassmorphism text then enter from viewport edges.
 *   • Mobile: Text stacks vertically and staggers. "SHOW" from top, "REEL" from bottom.
 *   • Desktop: Text stays horizontal. "SHOW" from left, "REEL" from right.
 *   • Background of the section is explicitly WHITE.
 */
export function ShowreelSection() {
    const wrapperRef = useRef<HTMLDivElement>(null);
    const cardRef = useRef<HTMLDivElement>(null);
    const innerRef = useRef<HTMLDivElement>(null);
    const showRef = useRef<HTMLDivElement>(null);
    const reelRef = useRef<HTMLDivElement>(null);
    const bgTitleRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const section = wrapperRef.current;
            const card = cardRef.current;
            const inner = innerRef.current;
            const bgTitle = bgTitleRef.current;
            const bgShow = showRef.current;
            const bgReel = reelRef.current;

            if (!section || !card || !inner || !bgTitle || !bgShow || !bgReel) return;

            const mm = gsap.matchMedia();

            // 1. SHOW and REEL slide in to join behind the video
            const textJoinRange = {
                trigger: section,
                start: 'top 40%',
                end: 'top 0%',
                scrub: 1.5,
            } as const;

            gsap.fromTo(bgShow,
                { x: '-100vw', opacity: 0 },
                {
                    x: '0%',
                    opacity: 1,
                    ease: 'power2.out',
                    scrollTrigger: textJoinRange,
                }
            );

            gsap.fromTo(bgReel,
                { x: '100vw', opacity: 0 },
                {
                    x: '0%',
                    opacity: 1,
                    ease: 'power2.out',
                    scrollTrigger: textJoinRange,
                }
            );

            const expansionRange = {
                trigger: section,
                start: 'top -10%',
                end: 'bottom bottom',
                scrub: 1.5,
            } as const;

            mm.add({
                isMobile: "(max-width: 768px)",
                isDesktop: "(min-width: 769px)"
            }, (context) => {
                const { isMobile } = context.conditions as any;

                const vw = window.innerWidth;
                const vh = window.innerHeight;
                const initialScaleX = 0.2;
                const initialScaleY = (vw * initialScaleX) / vh;

                // On mobile, we want a tighter, square-ish cinematic look that expands but doesn't fill
                // We use scale to maintain a consistent aspect ratio around 16:9 or similar
                const targetScaleY = isMobile ? 0.5 : 1;
                const targetScaleX = isMobile ? 0.9 : 1;
                const targetBorderRadius = isMobile ? '16px' : '0px';

                gsap.fromTo(card,
                    { scaleX: initialScaleX, scaleY: initialScaleY, borderRadius: '24px' },
                    {
                        scaleX: targetScaleX,
                        scaleY: targetScaleY,
                        borderRadius: targetBorderRadius,
                        ease: 'power1.inOut',
                        scrollTrigger: {
                            ...expansionRange,
                            end: '55% bottom',
                        },
                    }
                );

                gsap.fromTo(inner,
                    { scaleX: 1 / initialScaleX, scaleY: 1 / initialScaleY },
                    {
                        scaleX: 1 / targetScaleX,
                        scaleY: 1 / targetScaleY,
                        ease: 'power1.inOut',
                        scrollTrigger: {
                            ...expansionRange,
                            end: '55% bottom',
                        },
                    }
                );
            });

            // 3. Fade out the background text as the video expands
            gsap.to(bgTitle, {
                opacity: 0,
                ease: 'none',
                scrollTrigger: {
                    trigger: section,
                    start: '25% top', // Start fading out as video really gets bigger
                    end: '50% bottom',
                    scrub: true,
                }
            });

            // 4. Final Parallax Exit - as architecture section enters
            gsap.to(cardRef.current, {
                y: -150,
                opacity: 0.9,
                ease: "none",
                scrollTrigger: {
                    trigger: section,
                    start: "bottom bottom-=10%", // When the section bottom starts entering the view
                    end: "bottom bottom",
                    scrub: true,
                }
            });
        });

        const timer = setTimeout(() => ScrollTrigger.refresh(), 500);

        return () => {
            ctx.revert();
            clearTimeout(timer);
        };
    }, []);

    return (
        <>
            {/* ── Pre-Showreel Editorial Header ── */}
            <section className="w-full bg-white px-6 md:px-12 pt-4 pb-0 md:pt-20 md:pb-4">
                <div className="max-w-[1300px] mx-auto flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
                    {/* Left SideTitle */}
                    <div>
                        <p className="text-xl md:text-2xl font-medium mb-4 bg-gradient-to-b from-violet-300 to-violet-800 bg-clip-text text-transparent inline-block">
                            Introducing Mergex
                        </p>
                        <h2
                            className="text-3xl md:text-4xl lg:text-5xl font-medium text-neutral-900 tracking-tight leading-[1.3] md:leading-[1.4]"
                            style={{ fontFamily: 'var(--font-manrope)' }}
                        >
                            The Architecture Behind <br className="hidden md:block" />
                            <span className="block mt-1 md:mt-1">
                                Modern <span className="italic" style={{ fontFamily: 'var(--font-playfair)' }}>Businesses.</span>
                            </span>
                        </h2>
                        <p className="text-[10px] md:text-xs font-bold text-neutral-400 uppercase tracking-[0.2em] mt-6">
                            Trusted by ambitious brands
                        </p>
                    </div>

                    {/* Right Side Description */}
                    <div className="max-w-[340px] md:pb-6">
                        <p className="text-sm md:text-base text-neutral-500 leading-relaxed font-medium">
                            A quick look at how Mergex brings strategy, systems, and intelligence together to build businesses that scale.
                        </p>
                    </div>
                </div>
                {/* Brand Logos - Marquee Loop */}
                <div className="w-full mt-4 md:mt-24 overflow-hidden py-5 md:py-8 border-y border-neutral-100 relative">
                    <div className="flex w-max animate-marquee space-x-16 md:space-x-24 items-center opacity-40 grayscale contrast-125 transition-opacity hover:opacity-100">
                        {/* First Set */}
                        <div className="flex space-x-16 md:space-x-24 items-center">
                            <img src="/logo/brand logo/Cinn Astra.png" alt="Cinn Astra" className="h-6 md:h-9 w-auto object-contain" />
                            <img src="/logo/brand logo/MicandMac.png" alt="MicandMac" className="h-8 md:h-12 w-auto object-contain" />
                            <img src="/logo/brand logo/cedarelevators.png" alt="Cedar Elevators" className="h-8 md:h-12 w-auto object-contain" />
                        </div>
                        {/* Second Set (Loop) */}
                        <div className="flex space-x-16 md:space-x-24 items-center" aria-hidden="true">
                            <img src="/logo/brand logo/Cinn Astra.png" alt="Cinn Astra" className="h-6 md:h-9 w-auto object-contain" />
                            <img src="/logo/brand logo/MicandMac.png" alt="MicandMac" className="h-8 md:h-12 w-auto object-contain" />
                            <img src="/logo/brand logo/cedarelevators.png" alt="Cedar Elevators" className="h-8 md:h-12 w-auto object-contain" />
                        </div>
                        {/* Third Set (Loop) */}
                        <div className="flex space-x-16 md:space-x-24 items-center" aria-hidden="true">
                            <img src="/logo/brand logo/Cinn Astra.png" alt="Cinn Astra" className="h-6 md:h-9 w-auto object-contain" />
                            <img src="/logo/brand logo/MicandMac.png" alt="MicandMac" className="h-8 md:h-12 w-auto object-contain" />
                            <img src="/logo/brand logo/cedarelevators.png" alt="Cedar Elevators" className="h-8 md:h-12 w-auto object-contain" />
                        </div>
                    </div>
                </div>

                <style jsx>{`
                    @keyframes marquee {
                        0% { transform: translateX(0); }
                        100% { transform: translateX(-33.333%); }
                    }
                    .animate-marquee {
                        animation: marquee 30s linear infinite;
                        display: flex;
                        white-space: nowrap;
                    }
                `}</style>
            </section>

            <section
                ref={wrapperRef}
                className="relative bg-white"
                style={{ height: '280vh' }}
            >
                <div className="sticky top-[15vh] md:top-0 h-[60vh] md:h-screen w-full overflow-hidden flex items-center justify-center">

                    {/* Background Title - Sits behind the card initially */}
                    <div
                        ref={bgTitleRef}
                        className="absolute inset-0 flex items-center justify-center pointer-events-none z-0 px-4"
                    >
                        <span
                            className="font-medium uppercase text-neutral-950 tracking-[-0.02em] text-center flex items-center justify-center"
                            style={{
                                fontSize: 'clamp(3rem, 9vw, 12rem)', // Reduced for mobile to prevent cropping
                                fontFamily: outfit.style.fontFamily,

                                lineHeight: 0.9,
                            }}
                        >
                            <span ref={showRef} className="block will-change-transform">INFRAST</span>
                            <span ref={reelRef} className="block will-change-transform">RUCTURE</span>
                        </span>
                    </div>

                    {/* Main Card */}
                    <div
                        ref={cardRef}
                        className="absolute inset-0 will-change-transform overflow-hidden z-10 shadow-[0_20px_50px_rgba(0,0,0,0.1)]"
                        style={{ transformOrigin: 'center center' }}
                    >
                        <div
                            ref={innerRef}
                            className="absolute inset-0 will-change-transform"
                            style={{ transformOrigin: 'center center' }}
                        >
                            <BlurVignette
                                radius="0px"
                                inset="0px"
                                transitionLength="150px"
                                blur="12px"
                                className="w-full h-full"
                            >
                                <video
                                    src={SHOWREEL_CONTENT.videoSrc}
                                    poster={SHOWREEL_CONTENT.videoPoster}
                                    className="absolute inset-0 w-full h-full object-cover"
                                    autoPlay
                                    muted
                                    loop
                                    playsInline
                                />
                            </BlurVignette>
                        </div>
                    </div>



                </div>
            </section>
        </>
    );
}
