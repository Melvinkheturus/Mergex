'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';

/**
 * SystemsHero - Minimal hero with kinetic line animation
 */
export function SystemsHero() {
    const lineRef = useRef<HTMLDivElement | null>(null);
    const headingRef = useRef<HTMLHeadingElement | null>(null);
    const copyRef = useRef<HTMLParagraphElement | null>(null);
    const ctaRef = useRef<HTMLButtonElement | null>(null);

    useEffect(() => {
        const tl = gsap.timeline();
        if (headingRef.current && copyRef.current && ctaRef.current) {
            tl.fromTo(
                headingRef.current,
                { autoAlpha: 0, y: 24 },
                { autoAlpha: 1, y: 0, duration: 1, ease: 'power3.out' }
            )
                .fromTo(
                    copyRef.current,
                    { autoAlpha: 0, y: 20 },
                    { autoAlpha: 1, y: 0, duration: 0.9, ease: 'power3.out' },
                    '-=0.6'
                )
                .fromTo(
                    ctaRef.current,
                    { autoAlpha: 0, y: 16 },
                    { autoAlpha: 1, y: 0, duration: 0.8, ease: 'power3.out' },
                    '-=0.5'
                );
        }

        if (lineRef.current) {
            gsap.fromTo(
                lineRef.current,
                { scaleX: 0, transformOrigin: 'left center' },
                { scaleX: 1, duration: 1.6, ease: 'power3.inOut', delay: 0.2 }
            );
        }
    }, []);

    const handleExplore = () => {
        const lenis = (window as any).lenis;
        if (lenis) {
            lenis.scrollTo('#pain-points', { offset: -40, duration: 1.2 });
        } else {
            document.querySelector('#pain-points')?.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
            <div className="absolute inset-0">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.08),_transparent_55%)]" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,_rgba(59,130,246,0.18),_transparent_60%)]" />
            </div>

            <div className="relative z-10 flex flex-col items-center text-center px-6 md:px-12 max-w-3xl">
                <p className="text-xs uppercase tracking-[0.35em] text-gray-500 mb-6">Mergex Systems</p>
                <h1
                    ref={headingRef}
                    className="text-4xl md:text-6xl lg:text-7xl font-light tracking-tight text-white"
                >
                    Minimal systems that move fast.
                </h1>
                <div
                    ref={lineRef}
                    className="mt-6 h-px w-24 bg-gradient-to-r from-blue-400 via-indigo-400 to-violet-400"
                />
                <p ref={copyRef} className="mt-6 text-base md:text-lg text-gray-400 leading-relaxed">
                    We strip away noise and build precise software, automation, and AI workflows that scale with your
                    business.
                </p>
                <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
                    <button
                        ref={ctaRef}
                        onClick={handleExplore}
                        className="rounded-full border border-white/20 px-6 py-3 text-sm uppercase tracking-[0.2em] text-white transition hover:border-white/60"
                    >
                        Explore the system
                    </button>
                    <span className="text-xs uppercase tracking-[0.3em] text-gray-600">Weeks to launch</span>
                </div>
            </div>
        </section>
    );
}
