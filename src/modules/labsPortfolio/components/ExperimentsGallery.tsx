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
    { src: '/assets/labs portfolio/ABC MIX.mp4', alt: 'ABC Mix Video', type: 'video' },
    { src: '/assets/labs portfolio/ad.mp4', alt: 'Advertisement Video', type: 'video' },
    { src: '/assets/labs portfolio/Banana Choco Mix.mp4', alt: 'Banana Choco Mix Video', type: 'video' },
    { src: '/assets/labs portfolio/Gemini_Generated_Image_6mmg1y6mmg1y6mmg.png', alt: 'AI Generated Image', type: 'image' },
    { src: '/assets/labs portfolio/Influencer Video.mp4', alt: 'Influencer Video', type: 'video' },
    { src: '/assets/labs portfolio/Jewellery Video.mp4', alt: 'Jewellery Video', type: 'video' },
    { src: '/assets/labs portfolio/V3 Rose petals.mp4', alt: 'Rose Petals Video', type: 'video' },
    { src: '/assets/labs portfolio/WhatsApp Video 2026-02-28 at 2.16.34 PM.mp4', alt: 'New Portfolio Video', type: 'video' },
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
                const lightColor = el.getAttribute('data-light-color');
                if (lightColor) {
                    el.style.color = lightColor;
                } else {
                    if (el.tagName === 'H2') el.style.color = '#111827';
                    else if (el.classList.contains('text-xl')) el.style.color = '#4b5563';
                    else if (!el.classList.contains('text-purple-400') && !el.classList.contains('text-purple-600')) {
                        el.style.color = '#6b7280';
                    }
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
                const darkColor = el.getAttribute('data-dark-color');
                el.style.color = darkColor ? darkColor : '#ffffff';
            });
        };

        // Set initial state to match WorkGallery (dark)
        applyDark();

        const trigger = ScrollTrigger.create({
            trigger: section,
            start: 'top 55%',       // transition when section enters mid-viewport
            onEnter: applyLight,    // scrolling down into section → white
            onLeaveBack: applyDark, // scrolling back up → black (WorkGallery)
            // Ensure transitions catch up if scrolling fast
            onScrubComplete: () => ScrollTrigger.refresh()
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
        <section ref={sectionRef} className="relative py-32 overflow-hidden" style={{ willChange: 'background-color' }}>
            <style>{swiperStyles}</style>
            <div className="container mx-auto max-w-7xl px-2 text-gray-900">
                {/* Section Header */}
                <motion.div
                    className="mb-24 flex flex-col xl:flex-row justify-between items-start gap-12 xl:gap-8 w-full px-4 md:px-8 xl:px-12 2xl:px-20"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    {/* Left Side - Headlines */}
                    <div className="xl:w-auto flex flex-col justify-start text-left">
                        <div className="mb-4">
                            <span
                                className="text-xs md:text-sm font-semibold text-purple-600 uppercase tracking-[0.25em]"
                                data-light-color="#9333ea"
                                data-dark-color="#d8b4fe"
                            >
                                EXPLORATIONS
                            </span>
                        </div>
                        <h2
                            className="text-4xl md:text-5xl lg:text-[3.5rem] tracking-tighter leading-[1] whitespace-nowrap flex flex-row items-baseline font-bold"
                            data-light-color="#111827"
                            data-dark-color="#ffffff"
                        >
                            Applied Creative Intelligence
                        </h2>
                    </div>

                    {/* Right Side - Description */}
                    <div className="xl:flex-1 flex justify-end text-right w-full pt-4 xl:pt-8 min-w-0">
                        <p
                            className="text-base md:text-lg lg:text-xl text-gray-600 leading-[1.6] font-serif italic max-w-xs md:max-w-sm xl:max-w-[420px]"
                            data-light-color="#4b5563"
                            data-dark-color="#d1d5db"
                        >
                            From concept to campaign-ready assets, these projects demonstrate how structured AI experimentation becomes measurable creative advantage.
                        </p>
                    </div>
                </motion.div>

                {/* Swiper Coverflow Carousel with Edge Fades */}
                <div className="relative w-full">
                    {/* Left Fade Overlay */}
                    <div className="fade-left absolute left-0 top-0 bottom-0 w-20 z-10 pointer-events-none" />

                    {/* Right Fade Overlay */}
                    <div className="fade-right absolute right-0 top-0 bottom-0 w-20 z-10 pointer-events-none" />

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
