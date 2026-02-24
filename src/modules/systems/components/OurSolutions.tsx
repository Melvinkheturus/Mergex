'use client';

import { useRef, useState } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { OUR_SOLUTIONS } from '../content/systems';
import { FlipText } from '../../../components/ui/text-effect-flipper';

if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
}

/* Images mapped to each pillar (index-matched) */
const PILLAR_IMAGES = [
    '/assets/mockups/e.png',
    '/assets/mockups/Gemini_Generated_Image_7mmyde7mmyde7mmy.png',
    '/assets/mockups/Gemini_Generated_Image_q305hxq305hxq305.png',
    '/assets/mockups/Gemini_Generated_Image_rh4aggrh4aggrh4a.png',
    '/assets/mockups/Gemini_Generated_Image_vvlwccvvlwccvvlw.png',
];

/**
 * OurSolutions — Sticky Sidebar ScrollSpy + Parallax Text-Over-Image
 *
 * Left column: sticky nav that stays pinned.
 * Right column: scrolling cards where the text content slides UP over the
 * image during scroll (parallax overlap), creating a premium agency feel.
 */
export function OurSolutions() {
    const [activeIndex, setActiveIndex] = useState(0);
    const containerRef = useRef<HTMLDivElement>(null);

    useGSAP(
        () => {
            OUR_SOLUTIONS.pillars.forEach((_, index) => {
                const card = document.getElementById(`solution-item-${index}`);
                if (!card) return;

                // ScrollSpy — update active nav item
                ScrollTrigger.create({
                    trigger: card,
                    start: 'top center',
                    end: 'bottom center',
                    onEnter: () => setActiveIndex(index),
                    onEnterBack: () => setActiveIndex(index),
                });

                // Parallax — image moves slower (creates depth)
                const img = card.querySelector('.parallax-img');
                if (img) {
                    gsap.fromTo(
                        img,
                        { y: '-15%' },
                        {
                            y: '15%',
                            ease: 'none',
                            scrollTrigger: {
                                trigger: card,
                                start: 'top bottom',
                                end: 'bottom top',
                                scrub: true,
                            },
                        }
                    );
                }

                // Text overlap — text slides UP over the image
                const textContent = card.querySelector('.text-overlap');
                if (textContent) {
                    gsap.fromTo(
                        textContent,
                        { y: 0 },
                        {
                            y: -120,
                            ease: 'none',
                            scrollTrigger: {
                                trigger: card,
                                start: 'top center',
                                end: 'bottom top',
                                scrub: 1,
                            },
                        }
                    );
                }
            });
        },
        { scope: containerRef }
    );

    // Scroll via Lenis so smooth-scroll stays consistent
    const scrollToItem = (index: number) => {
        const target = document.getElementById(`solution-item-${index}`);
        if (!target) return;
        const lenis = (window as { lenis?: { scrollTo: (el: HTMLElement, opts: { offset: number; duration: number }) => void } }).lenis;
        if (lenis) {
            lenis.scrollTo(target, { offset: -80, duration: 1.2 });
        } else {
            const y = target.getBoundingClientRect().top + window.scrollY - 80;
            window.scrollTo({ top: y, behavior: 'smooth' });
        }
    };

    return (
        <section
            ref={containerRef}
            className="bg-white w-full relative"
        >
            <div className="flex flex-col md:flex-row max-w-[1440px] mx-auto">

                {/* ── LEFT COLUMN — sticky nav ──
                     self-start is CRITICAL: prevents flex from stretching this
                     column to the parent height, which would kill sticky range. */}
                <div className="hidden md:flex flex-col justify-center w-[28%] h-screen sticky top-0 self-start px-8 lg:px-12 border-r border-gray-100">
                    {/* Section label */}
                    <p className="text-xs font-medium text-gray-400 uppercase tracking-widest mb-10">
                        Our Solutions
                    </p>

                    <nav className="flex flex-col gap-5">
                        {OUR_SOLUTIONS.pillars.map((pillar, index) => (
                            <button
                                key={index}
                                onClick={() => scrollToItem(index)}
                                className="text-left w-fit group cursor-pointer"
                            >
                                <FlipText
                                    active={activeIndex === index}
                                    className={`
                                        text-2xl lg:text-3xl xl:text-4xl font-normal transition-colors duration-300
                                        ${activeIndex === index
                                            ? 'text-[#1A1A1A]'
                                            : 'text-[#CCCCCC] group-hover:text-violet-500'
                                        }
                                    `}
                                >
                                    {pillar.navLabel}
                                </FlipText>
                            </button>
                        ))}
                    </nav>
                </div>

                {/* ── RIGHT COLUMN — scrolling cards ── */}
                <div className="w-full md:w-[72%]">
                    {OUR_SOLUTIONS.pillars.map((pillar, index) => (
                        <div
                            key={index}
                            id={`solution-item-${index}`}
                            className="relative min-h-screen flex flex-col justify-center px-8 md:px-14 lg:px-20 py-24 border-b border-gray-100 last:border-b-0"
                        >
                            {/* ── IMAGE LAYER (z-0) ── */}
                            <div className="relative w-full aspect-video overflow-hidden rounded-sm bg-gray-900 z-0">
                                <Image
                                    src={PILLAR_IMAGES[index]}
                                    alt={pillar.title}
                                    fill
                                    className="parallax-img object-cover scale-110"
                                />
                                {/* Bottom gradient so overlapping text stays readable */}
                                <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black/70 to-transparent" />
                            </div>

                            {/* ── TEXT LAYER (z-10) — slides UP over the image on scroll ── */}
                            <div className="text-overlap relative z-10 w-full bg-white pt-10 -mt-4">
                                <div className="border-t border-gray-200 pt-10">
                                    <div className="grid md:grid-cols-12 gap-8 lg:gap-16">
                                        {/* Left Side: Info */}
                                        <div className="md:col-span-7 lg:col-span-8">
                                            <div className="flex items-center gap-4 mb-8">
                                                <span className="text-sm font-mono text-gray-400">
                                                    [{String(index + 1).padStart(2, '0')}]
                                                </span>
                                                <h3 className="text-xl md:text-2xl lg:text-2xl font-bold text-[#1A1A1A] whitespace-nowrap">
                                                    {pillar.title}
                                                </h3>
                                            </div>
                                            <p className="text-sm md:text-base text-gray-500 leading-relaxed max-w-xl">
                                                {pillar.description}
                                            </p>
                                        </div>

                                        {/* Right Side: Categories */}
                                        <div className="md:col-span-5 lg:col-span-4">
                                            <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-6">
                                                Categories
                                            </p>
                                            <div className="grid grid-cols-2 gap-2">
                                                {pillar.capabilities.map((cap, i) => (
                                                    <span
                                                        key={i}
                                                        className="flex items-center justify-center border border-gray-200 text-gray-700 text-[10px] md:text-xs font-medium px-3 py-2 rounded-sm bg-white text-center"
                                                    >
                                                        {cap}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
