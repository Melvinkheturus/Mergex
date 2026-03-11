'use client';

import { useCallback, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, X } from 'lucide-react';
import { cloudinaryVideo, cloudinaryImage } from '@/lib/cloudinary';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import type { Swiper as SwiperType } from 'swiper';
import { Autoplay, EffectCoverflow, Pagination } from 'swiper/modules';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from 'gsap';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

gsap.registerPlugin(ScrollTrigger);

// Media items for the carousel
const CAROUSEL_MEDIA = [
    { id: 'mockups/labs/Portfolio/abc_mix_visual', alt: 'ABC Mix Visual', type: 'video' },
    { id: 'mockups/labs/Portfolio/act_popcorn_reel', alt: 'ACT Popcorn Reel', type: 'video' },
    { id: 'mockups/labs/Portfolio/jewelry_ai_model', alt: 'AI Generated Jewelry Model', type: 'image' },
    { id: 'mockups/labs/Portfolio/ai_influencer_demo', alt: 'AI Influencer Demo', type: 'video' },
    { id: 'mockups/labs/Portfolio/jewelry_marketing_motion', alt: 'Jewelry Marketing Motion', type: 'video' },
    { id: 'mockups/labs/Portfolio/kfc_social_ad', alt: 'KFC Social Ad', type: 'video' },
    { id: 'mockups/labs/Portfolio/mountain_dew_dynamic', alt: 'Mountain Dew Dynamic', type: 'video' },
    { id: 'mockups/labs/Portfolio/park_avenue_campaign', alt: 'Park Avenue Campaign', type: 'video' },
    { id: 'mockups/labs/Portfolio/facewash_ad_promo', alt: 'Facewash Ad Promo', type: 'video' },
] as const;

export function ExperimentsGallery() {
    const sectionRef = useRef<HTMLElement>(null);
    const swiperRef = useRef<SwiperType | null>(null);

    const handleSwiper = useCallback((swiper: SwiperType) => {
        swiperRef.current = swiper;
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
        <section ref={sectionRef} className="relative py-32 overflow-hidden bg-white">
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
                            >
                                EXPLORATIONS
                            </span>
                        </div>
                        <h2
                            className="text-4xl md:text-5xl lg:text-[3.5rem] tracking-tighter leading-[1] whitespace-nowrap flex flex-row items-baseline font-bold"
                        >
                            Applied Creative Intelligence
                        </h2>
                    </div>

                    {/* Right Side - Description */}
                    <div className="xl:flex-1 flex justify-end text-right w-full pt-4 xl:pt-8 min-w-0">
                        <p
                            className="text-base md:text-lg lg:text-xl text-gray-600 leading-[1.6] font-serif italic max-w-xs md:max-w-sm xl:max-w-[420px]"
                        >
                            From concept to campaign-ready assets, these projects demonstrate how structured AI experimentation becomes measurable creative advantage.
                        </p>
                    </div>
                </motion.div>
            </div>

            {/* Swiper Coverflow Carousel */}
            <div className="relative w-full">
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
                    onSwiper={handleSwiper}
                >
                    {/* Swiper slides mapping... */}
                    {CAROUSEL_MEDIA.map((item, index) => {
                        const cloudinarySrc = item.type === 'video' 
                            ? cloudinaryVideo(item.id, 'q_auto:eco') 
                            : cloudinaryImage(item.id, 'q_auto');
                        const localSrc = item.type === 'video' 
                            ? `/${item.id}.mp4` 
                            : `/${item.id}.webp`;

                        return (
                            <SwiperSlide key={`slide-${index}`}>
                                <div className="w-[300px] h-[400px] rounded-3xl overflow-hidden shadow-2xl bg-gray-100">
                                    {item.type === 'video' ? (
                                        <video
                                            className="w-full h-full object-cover"
                                            autoPlay
                                            muted
                                            loop
                                            playsInline
                                        >
                                            <source src={cloudinarySrc} type="video/mp4" />
                                            <source src={localSrc} type="video/mp4" />
                                        </video>
                                    ) : (
                                        <Image
                                            src={cloudinarySrc}
                                            width={300}
                                            height={400}
                                            className="w-full h-full object-cover"
                                            alt={item.alt}
                                            unoptimized
                                            onError={(e) => {
                                                const target = e.target as HTMLImageElement;
                                                if (target.src !== localSrc) {
                                                    target.src = localSrc;
                                                }
                                            }}
                                        />
                                    )}
                                </div>
                            </SwiperSlide>
                        );
                    })}
                    {/* Duplicate Slides for Looping */}
                    {CAROUSEL_MEDIA.map((item, index) => {
                        const cloudinarySrc = item.type === 'video' 
                            ? cloudinaryVideo(item.id, 'q_auto:eco') 
                            : cloudinaryImage(item.id, 'q_auto');
                        const localSrc = item.type === 'video' 
                            ? `/${item.id}.mp4` 
                            : `/${item.id}.webp`;

                        return (
                            <SwiperSlide key={`slide-dup-${index}`}>
                                <div className="w-[300px] h-[400px] rounded-3xl overflow-hidden shadow-2xl bg-gray-100">
                                    {item.type === 'video' ? (
                                        <video
                                            className="w-full h-full object-cover"
                                            autoPlay
                                            muted
                                            loop
                                            playsInline
                                        >
                                            <source src={cloudinarySrc} type="video/mp4" />
                                            <source src={localSrc} type="video/mp4" />
                                        </video>
                                    ) : (
                                        <Image
                                            src={cloudinarySrc}
                                            width={300}
                                            height={400}
                                            className="w-full h-full object-cover"
                                            alt={item.alt}
                                            unoptimized
                                            onError={(e) => {
                                                const target = e.target as HTMLImageElement;
                                                if (target.src !== localSrc) {
                                                    target.src = localSrc;
                                                }
                                            }}
                                        />
                                    )}
                                </div>
                            </SwiperSlide>
                        );
                    })}
                </Swiper>
            </div>
        </section>
    );
}
