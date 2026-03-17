'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ScrollVelocity } from '@/components/ScrollVelocity';

import { cloudinaryImage } from '@/lib/cloudinary';

const galleryImages = [
    cloudinaryImage('mockups/labs/Gallery/sara_digital_persona_1'),
    cloudinaryImage('mockups/labs/Gallery/sara_digital_persona_2'),
    cloudinaryImage('mockups/labs/Gallery/sara_digital_persona_3'),
    cloudinaryImage('mockups/labs/Gallery/sara_digital_persona_4'),
    cloudinaryImage('mockups/labs/Gallery/sara_digital_persona_5'),
    cloudinaryImage('mockups/labs/Gallery/sara_digital_persona_6'),
    cloudinaryImage('mockups/labs/Gallery/sara_digital_persona_7'),
    cloudinaryImage('mockups/labs/Gallery/sara_digital_persona_8'),
    cloudinaryImage('mockups/labs/Gallery/sara_digital_persona_9'),
];

/**
 * WorkGallery - Scroll-driven image marquee gallery
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
            <div className="absolute left-0 top-[55%] -translate-y-1/2 z-30 pl-4 md:pl-8 lg:pl-12 max-w-xl pointer-events-none">
                <h2
                    className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-[1.1] mb-6 drop-shadow-[0_4px_20px_rgba(0,0,0,0.9)]"
                    style={{
                        fontFamily: 'var(--font-manrope)',
                        letterSpacing: '-0.02em',
                    }}
                >
                    The New Standard in
                    <span className="block mt-1 text-white/90">Digital Identity &</span>
                    <span className="block mt-1 text-white/90">Commercial Muses</span>
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
