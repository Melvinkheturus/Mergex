'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectCoverflow, Pagination } from 'swiper/modules';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from 'gsap';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

gsap.registerPlugin(ScrollTrigger);

// Media items for the carousel
const CAROUSEL_MEDIA = [
    { src: '/assets/mockups/ABC MIX.mp4', alt: 'ABC Mix Video', type: 'video' },
    { src: '/assets/mockups/ad.mp4', alt: 'Advertisement Video', type: 'video' },
    { src: '/assets/mockups/Banana Choco Mix.mp4', alt: 'Banana Choco Mix Video', type: 'video' },
    { src: '/assets/mockups/Gemini_Generated_Image_6mmg1y6mmg1y6mmg.png', alt: 'AI Generated Image', type: 'image' },
    { src: '/assets/mockups/Influencer Video.mp4', alt: 'Influencer Video', type: 'video' },
    { src: '/assets/mockups/Jewellery Video.mp4', alt: 'Jewellery Video', type: 'video' },
    { src: '/assets/mockups/V3 Rose petals.mp4', alt: 'Rose Petals Video', type: 'video' },
] as const;

export function ExperimentsGallery() {
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const section = sectionRef.current;
        if (!section) return;

        // Everything that needs to transition color
        const allTextEls = Array.from(section.querySelectorAll<HTMLElement>('h2, p, span'));
        const TRANSITION = 'background-color 0.4s ease, color 0.4s ease';

        const applyLight = () => {
            document.body.style.transition = TRANSITION;
            document.body.style.backgroundColor = '#ffffff';
            section.style.transition = TRANSITION;
            section.style.backgroundColor = '#ffffff';

            // Handle edge fades
            const leftFade = section.querySelector<HTMLElement>('.fade-left');
            const rightFade = section.querySelector<HTMLElement>('.fade-right');
            if (leftFade) {
                leftFade.style.transition = TRANSITION;
                leftFade.style.background = 'linear-gradient(to right, #ffffff, rgba(255, 255, 255, 0.8), transparent)';
            }
            if (rightFade) {
                rightFade.style.transition = TRANSITION;
                rightFade.style.background = 'linear-gradient(to left, #ffffff, rgba(255, 255, 255, 0.8), transparent)';
            }

            allTextEls.forEach(el => {
                el.style.transition = TRANSITION;
                if (el.tagName === 'H2') el.style.color = '#111827';
                else if (el.classList.contains('text-xl')) el.style.color = '#4b5563';
                else if (!el.classList.contains('text-purple-400') && !el.classList.contains('text-purple-600')) {
                    el.style.color = '#6b7280';
                }
            });
        };

        const applyDark = () => {
            document.body.style.transition = TRANSITION;
            document.body.style.backgroundColor = '#000000';
            section.style.transition = TRANSITION;
            section.style.backgroundColor = '#000000';

            // Handle edge fades
            const leftFade = section.querySelector<HTMLElement>('.fade-left');
            const rightFade = section.querySelector<HTMLElement>('.fade-right');
            if (leftFade) {
                leftFade.style.transition = TRANSITION;
                leftFade.style.background = 'linear-gradient(to right, #000000, rgba(0, 0, 0, 0.8), transparent)';
            }
            if (rightFade) {
                rightFade.style.transition = TRANSITION;
                rightFade.style.background = 'linear-gradient(to left, #000000, rgba(0, 0, 0, 0.8), transparent)';
            }

            allTextEls.forEach(el => {
                el.style.transition = TRANSITION;
                el.style.color = '#ffffff';
            });
        };

        const trigger = ScrollTrigger.create({
            trigger: section,
            start: 'top top',     // delay transition until it fills viewport
            onEnter: applyLight,    // down into section → white
            onLeaveBack: applyDark, // back up out of section → black (WorkGallery)
        });

        return () => {
            trigger.kill();
            document.body.style.transition = '';
            document.body.style.backgroundColor = '';
            section.style.transition = '';
            section.style.backgroundColor = '';

            const fades = section.querySelectorAll<HTMLElement>('.fade-left, .fade-right');
            fades.forEach(f => {
                f.style.transition = '';
                f.style.background = '';
            });

            allTextEls.forEach(el => {
                el.style.transition = '';
                el.style.color = '';
            });
        };
    }, []);

    const swiperStyles = `
        .experiments-swiper {
            width: 100%;
            padding-bottom: 50px;
        }
        
        .experiments-swiper .swiper-slide {
            background-position: center;
            background-size: cover;
            width: 300px;
            overflow: visible !important;
        }
        
        .experiments-swiper .swiper-slide > div {
            transform-style: preserve-3d;
            backface-visibility: hidden;
            isolation: isolate;
            will-change: transform;
            clip-path: inset(0 round 1.5rem);
        }
        
        .experiments-swiper .swiper-slide video,
        .experiments-swiper .swiper-slide img {
            border-radius: 1.5rem;
        }
        
        .video-zoom-rose {
            transform: scale(1.15);
            transform-origin: center;
        }
        
        .experiments-swiper .swiper-3d .swiper-slide-shadow-left,
        .experiments-swiper .swiper-3d .swiper-slide-shadow-right {
            background-image: none;
        }

        .experiments-swiper .swiper-pagination-bullet {
            background: #9333ea;
            opacity: 0.4;
        }

        .experiments-swiper .swiper-pagination-bullet-active {
            opacity: 1;
            width: 24px;
            border-radius: 4px;
        }
    `;

    return (
        <section ref={sectionRef} className="relative bg-white py-32 overflow-hidden" style={{ willChange: 'background-color' }}>
            <style>{swiperStyles}</style>
            <div className="container mx-auto max-w-7xl px-2 text-gray-900 transition-colors duration-300">
                {/* Section Header */}
                <motion.div
                    className="mb-20 text-center"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-purple-50 rounded-full border border-purple-100">
                        <Sparkles className="h-4 w-4 text-purple-600" />
                        <span className="text-sm font-semibold text-purple-600 uppercase tracking-wide">
                            Labs Portfolio
                        </span>
                    </div>
                    <h2 className="text-5xl md:text-6xl font-bold mb-6">
                        Experiments & Explorations
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        Pushing the boundaries of what's possible with AI and creative technology.
                    </p>
                    <p className="text-base text-gray-500 max-w-2xl mx-auto mt-4">
                        Every experiment is a question. Every exploration is a discovery. This is where Kyra and the Labs team explore the edge of creativity, technology, and possibility.
                    </p>
                </motion.div>

                {/* Swiper Coverflow Carousel with Edge Fades */}
                <div className="relative w-full">
                    {/* Left Fade Overlay */}
                    <div className="fade-left absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none" />

                    {/* Right Fade Overlay */}
                    <div className="fade-right absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none" />

                    <Swiper
                        className="experiments-swiper"
                        spaceBetween={50}
                        autoplay={{
                            delay: 2000,
                            disableOnInteraction: false,
                        }}
                        effect="coverflow"
                        grabCursor={true}
                        centeredSlides={true}
                        loop={true}
                        slidesPerView="auto"
                        coverflowEffect={{
                            rotate: 0,
                            stretch: 0,
                            depth: 80,
                            modifier: 2.0,
                        }}
                        pagination={{ clickable: true }}
                        modules={[EffectCoverflow, Autoplay, Pagination]}
                    >
                        {/* Swiper slides mapping... */}
                        {CAROUSEL_MEDIA.map((media, index) => (
                            <SwiperSlide key={`slide-${index}`}>
                                <div className="w-[300px] h-[400px] rounded-3xl overflow-hidden shadow-2xl">
                                    {media.type === 'video' ? (
                                        <video
                                            src={media.src}
                                            className="w-full h-full object-cover"
                                            autoPlay
                                            muted
                                            loop
                                            playsInline
                                        />
                                    ) : (
                                        <Image
                                            src={media.src}
                                            width={300}
                                            height={400}
                                            className="w-full h-full object-cover"
                                            alt={media.alt}
                                            unoptimized
                                        />
                                    )}
                                </div>
                            </SwiperSlide>
                        ))}
                        {/* Duplicate Slides for Looping */}
                        {CAROUSEL_MEDIA.map((media, index) => (
                            <SwiperSlide key={`slide-dup-${index}`}>
                                <div className="w-[300px] h-[400px] rounded-3xl overflow-hidden shadow-2xl">
                                    {media.type === 'video' ? (
                                        <video
                                            src={media.src}
                                            className="w-full h-full object-cover"
                                            autoPlay
                                            muted
                                            loop
                                            playsInline
                                        />
                                    ) : (
                                        <Image
                                            src={media.src}
                                            width={300}
                                            height={400}
                                            className="w-full h-full object-cover"
                                            alt={media.alt}
                                            unoptimized
                                        />
                                    )}
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>
    );
}
