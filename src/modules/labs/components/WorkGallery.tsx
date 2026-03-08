'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ScrollVelocity } from '@/components/ScrollVelocity';

const galleryImages = [
    '/mockups/labs/Gallery/WhatsApp Image 2026-02-05 at 12.12.28 AM.jpeg',
    '/mockups/labs/Gallery/Kyra-hero.png',
    '/mockups/labs/Gallery/Gemini_Generated_Image_vvlwccvvlwccvvlw.png',
    '/mockups/labs/Gallery/Gemini_Generated_Image_rh4aggrh4aggrh4a.png',
    '/mockups/labs/Gallery/Gemini_Generated_Image_qx4kj5qx4kj5qx4k.png',
    '/mockups/labs/Gallery/Gemini_Generated_Image_q305hxq305hxq305.png',
    '/mockups/labs/Gallery/Gemini_Generated_Image_m6ev2fm6ev2fm6ev.png',
    '/mockups/labs/Gallery/Gemini_Generated_Image_9ashti9ashti9ash.png',
    '/mockups/labs/Gallery/Gemini_Generated_Image_7mmyde7mmyde7mmy.png',
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
            className="relative overflow-hidden"
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
                    className="text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-[1.1] mb-6 drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]"
                    style={{
                        fontFamily: 'var(--font-manrope)',
                        letterSpacing: '-0.02em',
                    }}
                >
                    Discover Intelligence{' '}
                    <span className="block mt-1">Shaped Into</span>
                    <span className="block mt-1">Visuals</span>
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

                {/* 6 Rows of Scrolling Images (Optimized for Mobile) */}
                <div className="space-y-4">
                    {/* Row 1 */}
                    <ScrollVelocity
                        images={galleryImages.slice(0, 3)}
                        velocity={40}
                        imageClassName="gallery-image inline-block mx-2 rounded-xl"
                        imageWidth={380}
                        imageHeight={240}
                        numCopies={4}
                        parallaxClassName="overflow-hidden"
                        scrollerClassName="flex items-center"
                    />

                    {/* Row 2 */}
                    <ScrollVelocity
                        images={galleryImages.slice(3, 6)}
                        velocity={-35}
                        imageClassName="gallery-image inline-block mx-2 rounded-xl"
                        imageWidth={370}
                        imageHeight={250}
                        numCopies={4}
                        parallaxClassName="overflow-hidden"
                        scrollerClassName="flex items-center"
                    />

                    {/* Row 3 */}
                    <ScrollVelocity
                        images={galleryImages.slice(6, 9)}
                        velocity={45}
                        imageClassName="gallery-image inline-block mx-2 rounded-xl"
                        imageWidth={330}
                        imageHeight={225}
                        numCopies={4}
                        parallaxClassName="overflow-hidden"
                        scrollerClassName="flex items-center"
                    />

                    {/* Additional Rows for Mobile Density */}
                    <div className="md:hidden space-y-4">
                        <ScrollVelocity
                            images={galleryImages.slice(0, 3).reverse()}
                            velocity={-30}
                            imageClassName="gallery-image inline-block mx-2 rounded-xl"
                            imageWidth={310}
                            imageHeight={215}
                            numCopies={4}
                            parallaxClassName="overflow-hidden"
                            scrollerClassName="flex items-center"
                        />
                        <ScrollVelocity
                            images={galleryImages.slice(3, 6).reverse()}
                            velocity={35}
                            imageClassName="gallery-image inline-block mx-2 rounded-xl"
                            imageWidth={340}
                            imageHeight={230}
                            numCopies={4}
                            parallaxClassName="overflow-hidden"
                            scrollerClassName="flex items-center"
                        />
                        <ScrollVelocity
                            images={galleryImages.slice(6, 9).reverse()}
                            velocity={-40}
                            imageClassName="gallery-image inline-block mx-2 rounded-xl"
                            imageWidth={325}
                            imageHeight={220}
                            numCopies={4}
                            parallaxClassName="overflow-hidden"
                            scrollerClassName="flex items-center"
                        />
                    </div>
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
        </motion.section >
    );
}
