'use client';

import { useRef, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { HeroScene } from './HeroScene';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Playfair_Display } from 'next/font/google';

const playfair = Playfair_Display({
    subsets: ['latin'],
    style: ['italic'],
    weight: ['400', '500', '600']
});

if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
}

/**
 * HeroSection - Scroll-Driven Typography Transformation
 * 
 * Scroll Sequence:
 * 1. Start: Large editorial typography (light background)
 * 2. Mid: Text fades out sequentially
 * 3. Transition: Black layer rises from bottom
 * 4. End: 3D scene appears on dark background
 * 
 * Inspired by Urbix Studio typography + Coda scroll progression
 */
export function HeroSection() {
    const heroRef = useRef<HTMLDivElement>(null);

    const headlineRef = useRef<HTMLDivElement>(null);
    const supportingRef = useRef<HTMLParagraphElement>(null);
    const authorityRef = useRef<HTMLParagraphElement>(null);
    const ctaRef = useRef<HTMLDivElement>(null);
    const blackLayerRef = useRef<HTMLDivElement>(null);
    const sceneWrapperRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!heroRef.current) return;

        const ctx = gsap.context(() => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: heroRef.current,
                    start: 'top top',
                    end: '+=300%',
                    pin: true,
                    scrub: 1,
                    // markers: true, // Enable for debugging
                }
            });

            // Sequential text fade out
            tl.to(supportingRef.current, { opacity: 0, y: -50, duration: 0.3 }, 0.35)
                .to(authorityRef.current, { opacity: 0, y: -50, duration: 0.3 }, 0.45)
                .to(ctaRef.current, { opacity: 0, y: -50, duration: 0.3 }, 0.55)

                // Black layer rising from bottom
                .to(blackLayerRef.current, {
                    clipPath: 'inset(0 0 0% 0)',
                    duration: 0.5,
                }, 0.5)

                // Headline fades last
                .to(headlineRef.current, { opacity: 0, y: -100, duration: 0.4 }, 0.6)

                // 3D scene reveal
                .to(sceneWrapperRef.current, { opacity: 1, duration: 0.4 }, 0.75);
        }, heroRef);

        return () => {
            ctx.revert();
        };
    }, []);

    return (
        <section
            ref={heroRef}
            className="relative min-h-screen bg-[#f8f7ff] overflow-hidden"
        >
            {/* Black Overlay Layer - Rises from bottom */}
            <div
                ref={blackLayerRef}
                className="absolute inset-0 bg-[#0a0a0a] z-[2]"
                style={{ clipPath: 'inset(100% 0 0 0)' }}
            />

            {/* 3D Scene - Hidden initially, appears on black */}
            <div
                ref={sceneWrapperRef}
                className="absolute inset-0 z-[3] opacity-0"
            >
                <HeroScene />
            </div>

            {/* Typography Content Layer */}
            <div className="relative z-[4] min-h-screen flex items-center pt-16 md:pt-24">
                <div className="container mx-auto px-6 md:px-12 lg:px-16 max-w-[1400px]">

                    {/* Editorial Headline - Mixed Typography */}
                    <h1
                        ref={headlineRef}
                        className="mb-12 md:mb-16 leading-[0.95] tracking-tight"
                    >
                        {/* Line 1: Where ideas merge */}
                        <div className="mb-2 md:mb-4">
                            <span className="font-sans font-semibold text-[clamp(2.5rem,8vw,6rem)] text-gray-900">
                                Where ideas{' '}
                            </span>
                            <span className={`${playfair.className} text-[clamp(2.25rem,7.5vw,5.5rem)] text-gray-900`}>
                                merge
                            </span>
                        </div>

                        {/* Line 2: with intelligence */}
                        <div className="mb-2 md:mb-4">
                            <span className="font-sans font-semibold text-[clamp(2.5rem,8vw,6rem)] text-gray-900">
                                with{' '}
                            </span>
                            <span className="font-sans font-semibold text-[clamp(2.5rem,8vw,6rem)] bg-gradient-to-b from-violet-400 to-violet-900 bg-clip-text text-transparent">
                                intelligence.
                            </span>
                        </div>
                    </h1>

                    {/* Supporting Text */}
                    <p
                        ref={supportingRef}
                        className="text-base md:text-xl text-gray-700 max-w-2xl mb-6 leading-relaxed"
                    >
                        We design and build scalable digital products that support complex workflows and business-critical systems.
                    </p>

                    {/* Authority Reinforcer */}
                    <p
                        ref={authorityRef}
                        className="text-sm md:text-base text-gray-500 max-w-xl mb-10 leading-relaxed"
                    >
                        From early ideas to production-ready systems — we help you move fast without breaking things.
                    </p>

                    {/* CTAs */}
                    <div ref={ctaRef} className="flex flex-col sm:flex-row items-start gap-4 mb-4">
                        <Link
                            href="/contact"
                            className="inline-flex items-center gap-2 px-8 py-4 bg-[#1a1a2e] text-white rounded-full text-base md:text-lg font-medium transition-all hover:scale-105 hover:shadow-xl shadow-lg"
                        >
                            Let's talk
                            <ArrowRight size={18} />
                        </Link>

                        <Link
                            href="#what-we-build"
                            className="inline-flex items-center gap-2 px-8 py-4 bg-white/80 backdrop-blur-sm text-gray-900 border border-gray-300 rounded-full text-base md:text-lg font-medium transition-all hover:bg-white hover:shadow-md"
                        >
                            Explore the ecosystem
                        </Link>
                    </div>

                    {/* Microcopy */}
                    <p className="text-xs md:text-sm text-gray-400">
                        No commitment. Just clarity.
                    </p>
                </div>
            </div>
        </section>
    );
}
