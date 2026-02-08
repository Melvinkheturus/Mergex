'use client';

import { useEffect, useRef, useState, useCallback } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { OUR_SOLUTIONS } from '../content/systems';

if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
}

/**
 * OurSolutions - Sticky scroll with animated card transitions
 * Section pins, cards animate in/out based on scroll
 */
export function OurSolutions() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const cardsContainerRef = useRef<HTMLDivElement>(null);
    const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
    const [activeIndex, setActiveIndex] = useState(0);
    const [isClient, setIsClient] = useState(false);
    const totalCards = OUR_SOLUTIONS.pillars.length;
    const scrollTriggerRef = useRef<ScrollTrigger | null>(null);
    const prevIndexRef = useRef(0);

    // Pre-calculate SVG line coordinates to avoid hydration mismatch
    const svgLines = Array.from({ length: 12 }).map((_, i) => {
        const angle = (i * 30 * Math.PI) / 180;
        const x1 = 60;
        const y1 = 60;
        const x2 = Math.round((60 + Math.cos(angle) * 40) * 100) / 100;
        const y2 = Math.round((60 + Math.sin(angle) * 40) * 100) / 100;
        return { x1, y1, x2, y2 };
    });

    // Handle navigation click
    const handleNavClick = useCallback((index: number) => {
        if (scrollTriggerRef.current && sectionRef.current) {
            const progress = index / totalCards;
            const scrollPosition = scrollTriggerRef.current.start +
                (scrollTriggerRef.current.end - scrollTriggerRef.current.start) * progress;

            window.scrollTo({
                top: scrollPosition,
                behavior: 'smooth'
            });
        }
    }, [totalCards]);

    // Animate card transitions
    useEffect(() => {
        if (!isClient || !cardsContainerRef.current) return;

        const prevCard = cardRefs.current[prevIndexRef.current];
        const nextCard = cardRefs.current[activeIndex];

        if (prevCard && nextCard && prevIndexRef.current !== activeIndex) {
            const direction = activeIndex > prevIndexRef.current ? 1 : -1;

            gsap.to(prevCard, {
                opacity: 0,
                y: -30 * direction,
                scale: 0.95,
                duration: 0.4,
                ease: 'power2.out',
            });

            gsap.fromTo(nextCard,
                {
                    opacity: 0,
                    y: 30 * direction,
                    scale: 0.95,
                },
                {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    duration: 0.5,
                    ease: 'power2.out',
                }
            );
        }

        prevIndexRef.current = activeIndex;
    }, [activeIndex, isClient]);

    useEffect(() => {
        setIsClient(true);
    }, []);

    useEffect(() => {
        if (!isClient || !sectionRef.current) return;

        const initTimer = setTimeout(() => {
            ScrollTrigger.getAll().forEach(st => {
                if (st.vars.trigger === sectionRef.current) {
                    st.kill();
                }
            });

            scrollTriggerRef.current = ScrollTrigger.create({
                trigger: sectionRef.current,
                pin: true,
                pinSpacing: true,
                start: 'top top',
                end: () => `+=${window.innerHeight * totalCards}`,
                scrub: 0.5,
                onUpdate: (self) => {
                    const progress = self.progress;
                    const newIndex = Math.min(
                        Math.floor(progress * totalCards),
                        totalCards - 1
                    );
                    setActiveIndex(newIndex);
                },
            });

            ScrollTrigger.refresh();
        }, 500);

        return () => {
            clearTimeout(initTimer);
            if (scrollTriggerRef.current) {
                scrollTriggerRef.current.kill();
            }
        };
    }, [isClient, totalCards]);

    if (!isClient) {
        return (
            <section className="relative bg-white h-screen flex items-center justify-center">
                <div className="container mx-auto px-6 md:px-12">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-[#1A1A1A]">
                            {OUR_SOLUTIONS.headline}
                        </h2>
                        <p className="text-lg md:text-xl text-[#666666] max-w-2xl mx-auto">
                            {OUR_SOLUTIONS.subheadline}
                        </p>
                    </div>
                </div>
            </section>
        );
    }

    return (
        <section ref={sectionRef} className="relative bg-white h-screen pt-26 md:pt-30">
            <div className="container mx-auto px-6 md:px-12">
                {/* Header */}
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-[#1A1A1A]">
                        {OUR_SOLUTIONS.headline}
                    </h2>
                    <p className="text-lg md:text-xl text-[#666666] max-w-2xl mx-auto">
                        {OUR_SOLUTIONS.subheadline}
                    </p>
                </div>

                {/* Two Column Layout - Centered */}
                <div className="grid lg:grid-cols-12 gap-12 max-w-6xl mx-auto items-center">
                    {/* Left: Clickable Navigation */}
                    <div className="lg:col-span-4">
                        <nav className="space-y-3">
                            {OUR_SOLUTIONS.pillars.map((pillar, index) => (
                                <button
                                    key={index}
                                    onClick={() => handleNavClick(index)}
                                    className={`
                                        text-left w-full transition-all duration-500 cursor-pointer
                                        text-3xl md:text-4xl lg:text-5xl font-normal
                                        hover:text-violet-600
                                        ${activeIndex === index
                                            ? 'text-[#1A1A1A] opacity-100'
                                            : 'text-[#999999] opacity-60'
                                        }
                                    `}
                                    style={{ fontFamily: 'var(--font-geist-sans)' }}
                                >
                                    {pillar.navLabel}
                                </button>
                            ))}
                        </nav>
                    </div>

                    {/* Right: Animated Cards */}
                    <div ref={cardsContainerRef} className="lg:col-span-8 relative min-h-[350px]">
                        {OUR_SOLUTIONS.pillars.map((pillar, index) => (
                            <div
                                key={index}
                                ref={(el) => { cardRefs.current[index] = el; }}
                                className={`
                                    ${activeIndex === index
                                        ? 'relative z-10'
                                        : 'absolute inset-0 pointer-events-none z-0 opacity-0'
                                    }
                                `}
                            >
                                {/* Numbered Card - Brand Color */}
                                <div className="bg-gradient-to-br from-violet-500 to-violet-700 rounded-3xl p-8 md:p-10 relative overflow-hidden shadow-xl">
                                    {/* Decorative Pattern */}
                                    <div className="absolute top-6 right-6 opacity-20">
                                        <svg width="100" height="100" viewBox="0 0 120 120" fill="none">
                                            {svgLines.map((line, i) => (
                                                <line
                                                    key={i}
                                                    x1={line.x1}
                                                    y1={line.y1}
                                                    x2={line.x2}
                                                    y2={line.y2}
                                                    stroke="white"
                                                    strokeWidth="2"
                                                />
                                            ))}
                                        </svg>
                                    </div>

                                    {/* Number */}
                                    <div className="text-white/30 text-6xl md:text-7xl font-bold mb-4">
                                        {String(index + 1).padStart(2, '0')}
                                    </div>

                                    {/* Title */}
                                    <h3 className="text-2xl md:text-3xl font-semibold text-white mb-3">
                                        {pillar.title}
                                    </h3>

                                    {/* Description */}
                                    <p className="text-white/90 text-base md:text-lg leading-relaxed max-w-xl">
                                        {pillar.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
