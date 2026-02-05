'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollVelocity } from '@/components/ScrollVelocity';

gsap.registerPlugin(ScrollTrigger);

const galleryImages = [
    '/assets/mockups/WhatsApp Image 2026-02-05 at 12.12.28 AM.jpeg',
    '/assets/mockups/Gemini_Generated_Image_m6ev2fm6ev2fm6ev.png',
];

export function WorkGallery() {
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        if (!sectionRef.current) return;

        const section = sectionRef.current;

        ScrollTrigger.create({
            trigger: section,
            start: 'top 80%', // Start fading to black before section is fully in view
            end: 'bottom top',
            onEnter: () => {
                document.body.style.background = '#000';
                document.body.style.transition = 'background 0.5s ease';
            },
            onLeaveBack: () => {
                document.body.style.background = '#fff';
                document.body.style.transition = 'background 0.5s ease';
            }
        });

        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);

    return (
        <section
            ref={sectionRef}
            className="relative min-h-screen flex items-center overflow-hidden"
            style={{
                background: 'radial-gradient(circle at center, #111 0%, #000 70%)',
            }}
        >
            {/* Noise Texture Overlay */}
            <div
                className="absolute inset-0 opacity-[0.06] mix-blend-overlay pointer-events-none z-10"
                style={{
                    backgroundImage: 'url("/noise.png")',
                    backgroundRepeat: 'repeat',
                }}
            />

            {/* Text Overlay - Left Side */}
            <div className="absolute left-0 top-1/2 -translate-y-1/2 z-30 pl-4 md:pl-8 lg:pl-12 max-w-xl pointer-events-none">
                <h2
                    className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.1] mb-6 drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]"
                    style={{
                        fontFamily: 'var(--font-manrope)',
                        letterSpacing: '-0.02em',
                    }}
                >
                    EXPLORE MORE{' '}
                    <span className="block mt-1">MASTERPIECES</span>
                    <span className="block mt-1">IN THE GALLERY</span>
                </h2>

                <button className="group text-white font-semibold transition-all duration-300 inline-flex items-center gap-2 pointer-events-auto hover:opacity-80">
                    <span className="text-sm md:text-base uppercase tracking-wider drop-shadow-md">BROWSE GALLERY</span>
                    <svg className="w-5 h-5 drop-shadow-md group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" viewBox="0 0 430 430" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="18">
                            <path stroke="#fff" d="M365 225v130c0 11.046-8.954 20-20 20H75c-11.046 0-20-8.954-20-20V85c0-11.046 8.954-20 20-20h130" />
                            <path stroke="#e5d1fa" d="M375 55H250m125 0v125m0-125L215 215" />
                        </g>
                    </svg>
                </button>
            </div>

            {/* Image Marquee Rows Container */}
            <div className="relative w-full z-20">
                {/* Top Blur Fade */}
                <div
                    className="absolute top-0 left-0 right-0 h-32 z-40 pointer-events-none"
                    style={{
                        background: 'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0.8) 30%, transparent 100%)',
                    }}
                />

                {/* Bottom Blur Fade */}
                <div
                    className="absolute bottom-0 left-0 right-0 h-32 z-40 pointer-events-none"
                    style={{
                        background: 'linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,0.8) 30%, transparent 100%)',
                    }}
                />

                {/* 3 Rows of Scrolling Images */}
                <div className="py-12 space-y-4">
                    {/* Row 1 - Moving Right: Image1, Image2, Image1, Image2... */}
                    <ScrollVelocity
                        images={[
                            galleryImages[0],
                            galleryImages[1],
                            galleryImages[0],
                            galleryImages[1],
                        ] as string[]}
                        velocity={50}
                        imageClassName="gallery-image inline-block mx-3"
                        imageWidth={400}
                        imageHeight={280}
                        numCopies={3}
                        parallaxClassName="overflow-hidden"
                        scrollerClassName="flex items-center"
                    />

                    {/* Row 2 - Moving Left: Image1, Image2, Image1, Image2... */}
                    <ScrollVelocity
                        images={[
                            galleryImages[0],
                            galleryImages[1],
                            galleryImages[0],
                            galleryImages[1],
                        ] as string[]}
                        velocity={-45}
                        imageClassName="gallery-image inline-block mx-3"
                        imageWidth={420}
                        imageHeight={300}
                        numCopies={3}
                        parallaxClassName="overflow-hidden"
                        scrollerClassName="flex items-center"
                    />

                    {/* Row 3 - Moving Right: Image1, Image2, Image1, Image2... */}
                    <ScrollVelocity
                        images={[
                            galleryImages[0],
                            galleryImages[1],
                            galleryImages[0],
                            galleryImages[1],
                        ] as string[]}
                        velocity={55}
                        imageClassName="gallery-image inline-block mx-3"
                        imageWidth={380}
                        imageHeight={270}
                        numCopies={3}
                        parallaxClassName="overflow-hidden"
                        scrollerClassName="flex items-center"
                    />
                </div>
            </div>

            {/* Strong Dark Vignette Effect - All Edges */}
            <div
                className="absolute inset-0 pointer-events-none z-25"
                style={{
                    background: `
                        radial-gradient(ellipse at center, transparent 20%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0.9) 90%),
                        linear-gradient(to right, rgba(0,0,0,0.8) 0%, transparent 15%, transparent 85%, rgba(0,0,0,0.8) 100%),
                        linear-gradient(to bottom, rgba(0,0,0,0.8) 0%, transparent 20%, transparent 80%, rgba(0,0,0,0.8) 100%)
                    `,
                }}
            />
        </section >
    );
}
