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
            const show = showRef.current;
            const reel = reelRef.current;
            const bgTitle = bgTitleRef.current;

            if (!section || !card || !inner || !show || !reel || !bgTitle) return;

            const mm = gsap.matchMedia();

            // Card expansion animation logic
            const expansionRange = {
                trigger: section,
                start: 'top top',
                end: 'bottom bottom',
                scrub: 1.2,
            } as const;

            // Calculate initial square scale based on viewport aspect ratio
            const vw = window.innerWidth;
            const vh = window.innerHeight;
            const initialScaleX = 0.2;
            // To make it square: initialWidth(vw * 0.2) = initialHeight(vh * scaleY)
            // scaleY = (vw * 0.2) / vh
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
                        end: '75% bottom',
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
                        end: '75% bottom',
                    },
                }
            );

            gsap.to(bgTitle, {
                opacity: 0,
                ease: 'none',
                scrollTrigger: {
                    ...expansionRange,
                    end: '40% bottom',
                }
            });

            // MatchMedia for Text entry animations
            mm.add({
                isDesktop: "(min-width: 640px)",
                isMobile: "(max-width: 639px)"
            }, (context) => {
                const { isDesktop } = context.conditions as any;
                const textStart = 'top+=35% top';
                const textEnd = 'bottom-=5% bottom';

                if (isDesktop) {
                    // Desktop: Horizontal entry
                    gsap.fromTo(show,
                        { x: '-150vw', opacity: 0 },
                        {
                            x: '0%',
                            opacity: 1,
                            ease: 'power2.out',
                            scrollTrigger: {
                                trigger: section,
                                start: textStart,
                                end: textEnd,
                                scrub: 1.5,
                            },
                        }
                    );

                    gsap.fromTo(reel,
                        { x: '150vw', opacity: 0 },
                        {
                            x: '0%',
                            opacity: 1,
                            ease: 'power2.out',
                            scrollTrigger: {
                                trigger: section,
                                start: textStart,
                                end: textEnd,
                                scrub: 1.5,
                            },
                        }
                    );
                } else {
                    // Mobile: Vertical entry
                    gsap.fromTo(show,
                        { y: '-150vh', opacity: 0 },
                        {
                            y: '0%',
                            opacity: 1,
                            ease: 'power2.out',
                            scrollTrigger: {
                                trigger: section,
                                start: textStart,
                                end: textEnd,
                                scrub: 1.5,
                            },
                        }
                    );

                    gsap.fromTo(reel,
                        { y: '150vh', opacity: 0 },
                        {
                            y: '0%',
                            opacity: 1,
                            ease: 'power2.out',
                            scrollTrigger: {
                                trigger: section,
                                start: textStart,
                                end: textEnd,
                                scrub: 1.5,
                            },
                        }
                    );
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
        <section
            ref={wrapperRef}
            className="relative bg-white"
            style={{ height: '300vh' }}
        >
            <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center">

                {/* Background Title - Sits behind the card initially */}
                <div
                    ref={bgTitleRef}
                    className="absolute inset-0 flex items-center justify-center pointer-events-none z-0 px-4"
                >
                    <span
                        className="text-black/[0.05] font-bold uppercase tracking-[0.1em] text-center"
                        style={{
                            fontSize: 'clamp(3.5rem, 15vw, 15rem)',
                            fontFamily: 'var(--font-outfit), system-ui',
                            lineHeight: 0.9,
                        }}
                    >
                        {/* On mobile, title stacks vertically to match showreel animation */}
                        <span className="block sm:inline">SHOW</span>
                        <span className="block sm:inline sm:ml-[0.2em]">REEL</span>
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

                {/* SHOWREEL Text Overlay - Glassmorphism White Text (Frontmost) */}
                <div className="absolute inset-0 flex flex-col sm:flex-row items-center justify-center pointer-events-none z-20 gap-[0.02em] px-4 md:px-0">
                    {/* "SHOW" segment - Staggered Left on Mobile */}
                    <div
                        ref={showRef}
                        className="flex items-center justify-center will-change-transform w-full sm:w-auto -translate-x-[15%] sm:translate-x-0"
                    >
                        <span
                            className="text-white font-bold uppercase tracking-[0.06em] backdrop-blur-[4px]"
                            style={{
                                fontSize: 'clamp(4rem, 14vw, 14rem)',
                                fontFamily: 'var(--font-outfit), system-ui',
                                WebkitTextFillColor: 'rgba(255, 255, 255, 0.65)',
                                WebkitTextStroke: '1px rgba(255, 255, 255, 0.2)',
                                textShadow: '0 0 30px rgba(0, 0, 0, 0.1)',
                            }}
                        >
                            SHOW
                        </span>
                    </div>

                    {/* "REEL" segment - Staggered Right on Mobile */}
                    <div
                        ref={reelRef}
                        className="flex items-center justify-center will-change-transform w-full sm:w-auto translate-x-[15%] sm:translate-x-0 mt-[-0.5rem] sm:mt-0"
                    >
                        <span
                            className="text-white font-bold uppercase tracking-[0.06em] backdrop-blur-[4px]"
                            style={{
                                fontSize: 'clamp(4rem, 14vw, 14rem)',
                                fontFamily: 'var(--font-outfit), system-ui',
                                WebkitTextFillColor: 'rgba(255, 255, 255, 0.65)',
                                WebkitTextStroke: '1px rgba(255, 255, 255, 0.2)',
                                textShadow: '0 0 30px rgba(0, 0, 0, 0.1)',
                            }}
                        >
                            REEL
                        </span>
                    </div>
                </div>

            </div>
        </section>
    );
}
