'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SHOWREEL_CONTENT } from '../content';

// Register GSAP plugin
if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
}

/**
 * ShowreelSection — Cinematic scroll-driven reveal
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
            // They start apart by 100vw, joining in the center.
            const textJoinRange = {
                trigger: section,
                start: 'top 40%',     // Start closing when the top of the section reaches near the center (40% from top)
                end: 'top 0%',        // Finish closing when the top of the section hits the very top of the window
                scrub: 1.5,           // Slower scrub value for smoother, slower join
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
                start: 'top -10%',    // Wait until scrolling past the top (where text finishes joining) to start expanding
                end: 'bottom bottom',
                scrub: 1.5,           // Slower expansion
            } as const;

            const vw = window.innerWidth;
            const vh = window.innerHeight;
            const initialScaleX = 0.2;
            const initialScaleY = (vw * initialScaleX) / vh;

            gsap.fromTo(card,
                { scaleX: initialScaleX, scaleY: initialScaleY, borderRadius: '24px' },
                {
                    scaleX: 1,
                    scaleY: 1,
                    borderRadius: '0px',
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
                    scaleX: 1,
                    scaleY: 1,
                    ease: 'power1.inOut',
                    scrollTrigger: {
                        ...expansionRange,
                        end: '55% bottom',
                    },
                }
            );

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
            <section className="w-full bg-white px-6 md:px-12 pt-12 pb-2 md:pt-20 md:pb-4">
                <div className="max-w-[1300px] mx-auto flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
                    {/* Left SideTitle */}
                    <div>
                        <p className="text-xl md:text-2xl font-medium mb-4 bg-gradient-to-b from-violet-300 to-violet-800 bg-clip-text text-transparent inline-block">
                            Introducing Mergex
                        </p>
                        <h2
                            className="text-3xl md:text-4xl lg:text-5xl font-medium text-neutral-900 tracking-tight"
                            style={{ fontFamily: 'var(--font-manrope)' }}
                        >
                            The Architecture Behind Modern Businesses.
                        </h2>
                    </div>

                    {/* Right Side Description */}
                    <div className="max-w-[340px] md:pb-6">
                        <p className="text-sm md:text-base text-neutral-500 leading-relaxed font-medium">
                            A quick look at how Mergex brings strategy, systems, and intelligence together to build businesses that scale.
                        </p>
                    </div>
                </div>
            </section>

            <section
                ref={wrapperRef}
                className="relative bg-white"
                style={{ height: '400vh' }}
            >
                <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center">

                    {/* Background Title - Sits behind the card initially */}
                    <div
                        ref={bgTitleRef}
                        className="absolute inset-0 flex items-center justify-center pointer-events-none z-0 px-4"
                    >
                        <span
                            className="font-medium uppercase text-neutral-950 tracking-[-0.02em] text-center flex items-center justify-center"
                            style={{
                                fontSize: 'clamp(4rem, 11vw, 12rem)', // Reduced to fit "ORCHESTRATION"
                                fontFamily: '"Outfit", system-ui, sans-serif',
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
                            <video
                                src={SHOWREEL_CONTENT.videoSrc}
                                poster={SHOWREEL_CONTENT.videoPoster}
                                className="absolute inset-0 w-full h-full object-cover"
                                autoPlay
                                muted
                                loop
                                playsInline
                            />
                        </div>
                    </div>



                </div>
            </section>
        </>
    );
}
