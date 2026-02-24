'use client';

import { useEffect, useRef, useState, useCallback } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import Link from 'next/link';
import { CASE_STUDIES } from '@/modules/caseStudies';

if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
}

/**
 * CaseStudySection — Sticky card stack animation
 * Follows the same GSAP pin pattern that works in OurSolutions.
 */
export function CaseStudySection() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const cardRefs = useRef<(HTMLAnchorElement | null)[]>([]);
    const scrollTriggerRef = useRef<ScrollTrigger | null>(null);
    const cursorRef = useRef<HTMLDivElement>(null);
    const [isClient, setIsClient] = useState(false);
    const [cursorVisible, setCursorVisible] = useState(false);

    const totalCards = CASE_STUDIES.length;

    // Custom cursor follow logic
    const handleMouseMove = useCallback((e: React.MouseEvent) => {
        if (!cursorRef.current) return;
        cursorRef.current.style.left = `${e.clientX}px`;
        cursorRef.current.style.top = `${e.clientY}px`;
    }, []);

    const handleMouseEnter = useCallback(() => setCursorVisible(true), []);
    const handleMouseLeave = useCallback(() => setCursorVisible(false), []);

    // Hydration guard
    useEffect(() => {
        setIsClient(true);
    }, []);

    // ScrollTrigger setup — deferred by 500ms like OurSolutions
    useEffect(() => {
        if (!isClient || !sectionRef.current) return;

        const initTimer = setTimeout(() => {
            ScrollTrigger.getAll().forEach((st) => {
                if (st.vars.trigger === sectionRef.current) {
                    st.kill();
                }
            });

            const cardElements = cardRefs.current.filter(Boolean) as HTMLAnchorElement[];

            if (cardElements.length < 2) return;

            // Set initial card positions
            gsap.set(cardElements[0], { y: '0%', scale: 1, rotation: 0 });
            for (let i = 1; i < totalCards; i++) {
                if (cardElements[i]) {
                    gsap.set(cardElements[i], { y: '100%', scale: 1, rotation: 0 });
                }
            }

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top top',
                    end: `+=${window.innerHeight * (totalCards - 1)}`,
                    pin: true,
                    pinSpacing: true,
                    scrub: 0.5,
                },
            });

            scrollTriggerRef.current = tl.scrollTrigger ?? null;

            for (let i = 0; i < totalCards - 1; i++) {
                const currentCard = cardElements[i];
                const nextCard = cardElements[i + 1];

                if (!currentCard || !nextCard) continue;

                tl.to(
                    currentCard,
                    { scale: 0.7, rotation: 5, duration: 1, ease: 'none' },
                    i,
                );

                tl.to(
                    nextCard,
                    { y: '0%', duration: 1, ease: 'none' },
                    i,
                );
            }

            ScrollTrigger.refresh();
        }, 500);

        return () => {
            clearTimeout(initTimer);
            if (scrollTriggerRef.current) {
                scrollTriggerRef.current.kill();
            }
        };
    }, [isClient, totalCards]);

    // SSR fallback
    if (!isClient) {
        return (
            <section className="relative bg-slate-50 h-screen flex items-center justify-center">
                <div className="text-center">
                    <h2
                        className="text-sm font-bold uppercase tracking-[0.2em] text-violet-600 mb-4"
                        style={{ fontFamily: 'var(--font-manrope)' }}
                    >
                        Selected Work
                    </h2>
                    <h3
                        className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4"
                        style={{ fontFamily: 'var(--font-manrope)' }}
                    >
                        Case Studies
                    </h3>
                </div>
            </section>
        );
    }

    return (
        <>
            {/* Section Header — outside the pinned area */}
            <div className="bg-slate-50 pt-24 lg:pt-32 pb-12">
                <div className="container mx-auto px-6 md:px-12 max-w-7xl">
                    <div className="text-center">
                        <h2
                            className="text-sm font-bold uppercase tracking-[0.2em] text-violet-600 mb-4"
                            style={{ fontFamily: 'var(--font-manrope)' }}
                        >
                            Selected Work
                        </h2>
                        <h3
                            className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4"
                            style={{ fontFamily: 'var(--font-manrope)' }}
                        >
                            Case Studies
                        </h3>
                        <p
                            className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto"
                            style={{ fontFamily: 'var(--font-manrope)' }}
                        >
                            Explore our portfolio of successful projects and transformative solutions
                        </p>
                    </div>
                </div>
            </div>

            {/* Pinned Card Stack */}
            <section
                ref={sectionRef}
                className="relative h-screen flex items-center justify-center overflow-hidden p-3 lg:p-8"
                onMouseMove={handleMouseMove}
                style={{ cursor: 'none' }}
            >
                {/* Card Container — increased height to 90% */}
                <div className="relative h-[90%] w-full max-w-sm overflow-hidden rounded-2xl sm:max-w-md md:max-w-lg lg:max-w-3xl xl:max-w-5xl 2xl:max-w-6xl">
                    {CASE_STUDIES.map((study, i) => (
                        <Link
                            href={`/case-studies/${study.slug}`}
                            key={study.id}
                            className="absolute inset-0 block group"
                            style={{ cursor: 'none' }}
                            ref={(el) => {
                                cardRefs.current[i] = el;
                            }}
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                        >
                            <img
                                src={study.heroImage}
                                alt={study.heroImageAlt}
                                className="h-full w-full rounded-2xl object-cover"
                            />

                            {/* Overlay with case study info */}
                            <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-black/80 via-black/30 to-transparent flex flex-col justify-end p-8 md:p-12 lg:p-16 transition-opacity duration-300">
                                <div className="transform transition-all duration-300 group-hover:translate-y-[-8px]">
                                    <span
                                        className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-violet-400 mb-3"
                                        style={{ fontFamily: 'var(--font-manrope)' }}
                                    >
                                        {study.client.industry}
                                    </span>
                                    <h4
                                        className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-3"
                                        style={{ fontFamily: 'var(--font-manrope)' }}
                                    >
                                        {study.title}
                                    </h4>
                                    <p
                                        className="text-white/80 text-base md:text-lg lg:text-xl leading-relaxed max-w-2xl"
                                        style={{ fontFamily: 'var(--font-manrope)' }}
                                    >
                                        {study.outcome}
                                    </p>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>

                {/* Custom Cursor — "View Case Study" label */}
                <div
                    ref={cursorRef}
                    className="pointer-events-none fixed z-[9999] flex items-center gap-2 transition-opacity duration-200"
                    style={{
                        opacity: cursorVisible ? 1 : 0,
                        transform: 'translate(-50%, -50%)',
                    }}
                >
                    {/* Outer ring with label */}
                    <div
                        className="flex items-center justify-center rounded-full bg-white/95 backdrop-blur-sm shadow-lg px-5 py-3"
                        style={{
                            fontFamily: 'var(--font-manrope)',
                        }}
                    >
                        {/* Small arrow icon */}
                        <svg
                            width="14"
                            height="14"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="text-violet-600 mr-2 flex-shrink-0"
                        >
                            <path d="M7 17L17 7" />
                            <path d="M7 7h10v10" />
                        </svg>
                        <span className="text-sm font-semibold text-gray-900 whitespace-nowrap tracking-wide uppercase">
                            View Case Study
                        </span>
                    </div>
                </div>
            </section>
        </>
    );
}
