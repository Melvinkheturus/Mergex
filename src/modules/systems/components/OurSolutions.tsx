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

const PILLAR_IMAGES = [
    '/assets/systems/development.png',
    '/assets/systems/automation.png',
    '/assets/systems/branding.png',
    '/assets/systems/ui-ux.png',
    '/assets/systems/marketing.png',
];

export function OurSolutions() {
    const [activeIndex, setActiveIndex] = useState(0);
    const containerRef = useRef<HTMLDivElement>(null);

    // ✅ ADD THESE TWO REFS
    const leftColRef = useRef<HTMLDivElement>(null);
    const rightColRef = useRef<HTMLDivElement>(null);

    useGSAP(
        () => {
            // ✅ ADD THIS PIN (desktop only)
            if (leftColRef.current && rightColRef.current) {
                ScrollTrigger.create({
                    id: 'solutions-left-pin',
                    trigger: rightColRef.current,
                    start: 'top top',
                    end: 'bottom bottom',
                    pin: leftColRef.current,
                    pinSpacing: false,
                    invalidateOnRefresh: true,
                });
            }

            OUR_SOLUTIONS.pillars.forEach((_, index) => {
                const card = document.getElementById(`solution-item-${index}`);
                if (!card) return;

                ScrollTrigger.create({
                    trigger: card,
                    start: 'top center',
                    end: 'bottom center',
                    onEnter: () => setActiveIndex(index),
                    onEnterBack: () => setActiveIndex(index),
                });

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

            // ✅ IMPORTANT: refresh after setup so pin math is correct
            ScrollTrigger.refresh();
        },
        { scope: containerRef }
    );

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
        <section ref={containerRef} className="bg-white w-full relative">
            <div className="flex flex-col md:flex-row max-w-[1440px] mx-auto">

                {/* ✅ ADD ref HERE */}
                <div
                    ref={leftColRef}
                    className="hidden md:flex flex-col justify-center w-[28%] h-screen px-8 lg:px-12 border-r border-gray-100"
                >
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

                {/* ✅ ADD ref HERE */}
                <div ref={rightColRef} className="w-full md:w-[72%]">
                    {OUR_SOLUTIONS.pillars.map((pillar, index) => (
                        <div
                            key={index}
                            id={`solution-item-${index}`}
                            className="relative flex flex-col justify-center px-6 md:px-14 lg:px-20 py-8 md:py-16 border-b border-gray-100 last:border-b-0"
                        >
                            <div className="relative w-full aspect-video overflow-hidden rounded-sm bg-gray-900 z-0">
                                <Image
                                    src={PILLAR_IMAGES[index]}
                                    alt={pillar.title}
                                    fill
                                    className="parallax-img object-cover scale-110"
                                />
                                <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black/70 to-transparent" />
                            </div>

                            <div className="text-overlap relative z-10 w-full bg-white pt-10 -mt-4">
                                <div className="border-t border-gray-200 pt-10">
                                    <div className="flex flex-col gap-8">
                                        <div>
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

                                        <div>
                                            <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-6">
                                                Categories
                                            </p>
                                            <div className="flex flex-wrap gap-2 md:gap-3">
                                                {pillar.capabilities.map((cap, i) => (
                                                    <span
                                                        key={i}
                                                        className="inline-flex items-center justify-center border border-gray-200 text-gray-700 text-[10px] md:text-xs font-medium px-3 py-1.5 rounded-sm bg-white whitespace-nowrap"
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