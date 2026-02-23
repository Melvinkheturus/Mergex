'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ScrollVelocity } from '@/components/ScrollVelocity';

const galleryImages = [
    '/assets/mockups/Gemini_Generated_Image_7mmyde7mmyde7mmy.png',
    '/assets/mockups/Gemini_Generated_Image_vvlwccvvlwccvvlw.png',
    '/assets/mockups/Gemini_Generated_Image_rh4aggrh4aggrh4a.png',
];

/**
 * WorkGallery — Scroll-driven image marquee gallery
 *
 * The section has its own dark radial-gradient background (self-contained
 * dark island). The LabsPageWrapper transitions the page background to dark
 * before this section enters, creating a seamless blend.
 *
 * framer-motion useScroll drives a subtle scale+opacity on entry/exit
 * so the gallery feels like it emerges from and dissolves back into the
 * surrounding dark canvas.
 */
export function WorkGallery() {
    const sectionRef = useRef<HTMLElement>(null);

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ['start end', 'end start'],
    });

    // We've removed the fade-in opacity/scale because it was causing 
    // the underlying white body background to show through before
    // the section was fully transitioned.
    const opacity = 1;
    const scale = 1;

    return (
        <motion.section
            ref={sectionRef}
            className="relative min-h-screen flex items-center overflow-hidden"
            style={{
                background: '#000000',
                opacity,
                scale,
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
            <div className="absolute left-0 top-[52%] -translate-y-1/2 z-30 pl-4 md:pl-8 lg:pl-12 max-w-xl pointer-events-none">
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
                    {/* Row 1 - Moving Right */}
                    <ScrollVelocity
                        images={galleryImages}
                        velocity={50}
                        imageClassName="gallery-image inline-block mx-3"
                        imageWidth={400}
                        imageHeight={280}
                        numCopies={3}
                        parallaxClassName="overflow-hidden"
                        scrollerClassName="flex items-center"
                    />

                    {/* Row 2 - Moving Left */}
                    <ScrollVelocity
                        images={galleryImages}
                        velocity={-45}
                        imageClassName="gallery-image inline-block mx-3"
                        imageWidth={420}
                        imageHeight={300}
                        numCopies={3}
                        parallaxClassName="overflow-hidden"
                        scrollerClassName="flex items-center"
                    />

                    {/* Row 3 - Moving Right */}
                    <ScrollVelocity
                        images={galleryImages}
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
        </motion.section>
    );
}
