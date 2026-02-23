'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import Link from 'next/link';
import { CASE_STUDIES } from '@/modules/caseStudies';

gsap.registerPlugin(ScrollTrigger);

export function CaseStudySection() {
    const containerRef = useRef<HTMLDivElement>(null);
    const cardsContainerRef = useRef<HTMLDivElement>(null);
    const cardRefs = useRef<(HTMLAnchorElement | null)[]>([]);

    useEffect(() => {
        if (!cardsContainerRef.current) return;

        const cardElements = cardRefs.current.filter(Boolean) as HTMLAnchorElement[];
        const totalCards = cardElements.length;

        if (totalCards < 2) return;

        const ctx = gsap.context(() => {
            // Set initial card positions
            gsap.set(cardElements[0], { y: '0%', scale: 1, rotation: 0 });
            for (let i = 1; i < totalCards; i++) {
                gsap.set(cardElements[i], { y: '100%', scale: 1, rotation: 0 });
            }

            const scrollTimeline = gsap.timeline({
                scrollTrigger: {
                    trigger: cardsContainerRef.current,
                    start: 'top top',
                    end: `+=${window.innerHeight * (totalCards - 1)}`,
                    pin: true,
                    pinType: 'transform',
                    scrub: 0.5,
                    pinSpacing: true,
                },
            });

            for (let i = 0; i < totalCards - 1; i++) {
                const currentCard = cardElements[i];
                const nextCard = cardElements[i + 1];

                // Current card shrinks and rotates away
                scrollTimeline.to(
                    currentCard,
                    { scale: 0.7, rotation: 5, duration: 1, ease: 'none' },
                    i,
                );

                // Next card slides up into view
                scrollTimeline.to(
                    nextCard,
                    { y: '0%', duration: 1, ease: 'none' },
                    i,
                );
            }
        }, containerRef);

        // Delayed refresh to ensure layout is settled after page shell animations
        const refreshTimer = setTimeout(() => {
            ScrollTrigger.refresh();
        }, 500);

        return () => {
            clearTimeout(refreshTimer);
            ctx.revert();
        };
    }, []);

    return (
        <div ref={containerRef}>
            {/* Header — outside the pinned area */}
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

            {/* Sticky Card Animation — pinned by ScrollTrigger */}
            <div
                ref={cardsContainerRef}
                className="relative flex h-screen w-full items-center justify-center overflow-hidden p-3 lg:p-8"
            >
                <div className="relative h-[85%] w-full max-w-sm overflow-hidden rounded-2xl sm:max-w-md md:max-w-lg lg:max-w-3xl xl:max-w-5xl 2xl:max-w-6xl">
                    {CASE_STUDIES.map((study, i) => (
                        <Link
                            href={`/case-studies/${study.slug}`}
                            key={study.id}
                            className="absolute inset-0 block cursor-pointer group"
                            ref={(el) => {
                                cardRefs.current[i] = el;
                            }}
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
            </div>
        </div>
    );
}
