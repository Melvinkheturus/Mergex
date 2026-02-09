'use client';

import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectCoverflow, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

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
        <section className="relative bg-white py-32 overflow-hidden">
            <style>{swiperStyles}</style>
            <div className="container mx-auto max-w-7xl px-2">
                {/* Section Header */}
                <motion.div
                    className="mb-20 text-center"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-purple-50 rounded-full">
                        <Sparkles className="h-4 w-4 text-purple-600" />
                        <span className="text-sm font-semibold text-purple-600 uppercase tracking-wide">
                            Labs Portfolio
                        </span>
                    </div>
                    <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
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
                    <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none" />

                    {/* Right Fade Overlay */}
                    <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none" />

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
                        {/* First set of slides */}
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
                        {/* Duplicate slides for smoother looping */}
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
