'use client';

import { useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { OUR_SOLUTIONS } from '../content/systems';
import { FlipText } from '../../../components/ui/text-effect-flipper';

if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
}

/**
 * OurSolutions — Sticky Sidebar ScrollSpy layout
 *
 * Left column: sticky nav that stays pinned while the right panel scrolls.
 * GSAP ScrollTrigger detects which right-side section is in the viewport
 * center and updates the active nav item accordingly (no pinned section).
 */
export function OurSolutions() {
    const [activeIndex, setActiveIndex] = useState(0);
    const containerRef = useRef<HTMLDivElement>(null);

    // Bind ScrollTrigger to each right-side section
    useGSAP(
        () => {
            OUR_SOLUTIONS.pillars.forEach((_, index) => {
                ScrollTrigger.create({
                    trigger: `#solution-item-${index}`,
                    start: 'top center',
                    end: 'bottom center',
                    onEnter: () => setActiveIndex(index),
                    onEnterBack: () => setActiveIndex(index),
                });
            });
        },
        { scope: containerRef }
    );

    // Scroll via Lenis so smooth-scroll stays consistent throughout the page
    const scrollToItem = (index: number) => {
        const target = document.getElementById(`solution-item-${index}`);
        if (!target) return;
        const lenis = (window as { lenis?: { scrollTo: (el: HTMLElement, opts: { offset: number; duration: number }) => void } }).lenis;
        if (lenis) {
            lenis.scrollTo(target, { offset: -80, duration: 1.2 });
        } else {
            // Fallback for SSR or when Lenis isn't ready
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
                            className="min-h-screen flex flex-col justify-center px-8 md:px-14 lg:px-20 py-24 border-b border-gray-100 last:border-b-0"
                        >
                            {/* Visual area */}
                            <div className="relative w-full aspect-video mb-12 overflow-hidden rounded-2xl bg-gray-50">
                                {/* Large number watermark */}
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <span className="text-[120px] font-bold text-gray-100 select-none leading-none">
                                        {String(index + 1).padStart(2, '0')}
                                    </span>
                                </div>
                                {/* Violet gradient accent */}
                                <div className="absolute inset-0 bg-gradient-to-br from-violet-50/80 via-transparent to-transparent" />
                            </div>

                            {/* Content Grid */}
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
                    ))}
                </div>
            </div>
        </section>
    );
}
