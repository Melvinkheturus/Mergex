'use client';

import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

const showcaseData = [
    {
        place: 'AI Product Photography',
        title: 'E-COMMERCE',
        title2: 'VISUALS',
        description: 'Generated 500+ product lifestyle shots in 3 days using AI. Traditional photoshoot would take 2 weeks and $15K. AI solution: 3 days, <$2K cost.',
        image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200&auto=format&fit=crop&q=80',
    },
    {
        place: 'AI Video Production',
        title: 'BRAND',
        title2: 'CAMPAIGNS',
        description: 'Created dynamic video content for social media campaigns using AI tools. From concept to final edit in hours, not weeks.',
        image: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=1200&auto=format&fit=crop&q=80',
    },
    {
        place: 'Generative Design',
        title: 'UI/UX',
        title2: 'CONCEPTS',
        description: 'Rapid prototyping of user interfaces using AI-assisted design tools. Explore 10 variations in the time it takes to manually create one.',
        image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?w=1200&auto=format&fit=crop&q=80',
    },
    {
        place: 'AI Content Creation',
        title: 'SOCIAL',
        title2: 'MEDIA',
        description: 'Automated content generation for multi-platform social media presence. Consistent quality, on-brand messaging, infinite variations.',
        image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=1200&auto=format&fit=crop&q=80',
    },
    {
        place: 'AI Animation',
        title: 'MOTION',
        title2: 'GRAPHICS',
        description: 'Transform static designs into engaging animations using AI-powered motion tools. Bring brand stories to life faster than ever.',
        image: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?w=1200&auto=format&fit=crop&q=80',
    },
    {
        place: 'AI Marketing Assets',
        title: 'CAMPAIGN',
        title2: 'MATERIALS',
        description: 'Complete marketing asset libraries generated in days. Banners, ads, social posts—all on-brand, all optimized, all AI-enhanced.',
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&auto=format&fit=crop&q=80',
    },
];

export function WorkGallery() {
    const containerRef = useRef<HTMLDivElement>(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const intervalRef = useRef<NodeJS.Timeout | null>(null);

    useEffect(() => {
        if (!containerRef.current) return;

        const currentItem = showcaseData[currentIndex];
        const nextIndex = (currentIndex + 1) % showcaseData.length;

        const ctx = gsap.context(() => {
            // Fade in background image
            gsap.fromTo(
                '.bg-image',
                { opacity: 0 },
                { opacity: 1, duration: 1, ease: 'power2.inOut' }
            );

            // Animate text in
            gsap.fromTo(
                '.content-text',
                { opacity: 0, y: 30 },
                { opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: 'power2.out' }
            );

            // Animate progress bar
            gsap.fromTo(
                '.progress-bar',
                { scaleX: 0 },
                { scaleX: 1, duration: 4, ease: 'none' }
            );
        }, containerRef);

        // Auto-advance to next slide
        intervalRef.current = setTimeout(() => {
            // Fade out current content
            gsap.to('.content-text', {
                opacity: 0,
                y: -20,
                duration: 0.5,
                ease: 'power2.in',
                onComplete: () => {
                    setCurrentIndex(nextIndex);
                },
            });

            gsap.to('.bg-image', {
                opacity: 0,
                duration: 0.5,
                ease: 'power2.in',
            });
        }, 4000);

        return () => {
            ctx.revert();
            if (intervalRef.current) clearTimeout(intervalRef.current);
        };
    }, [currentIndex]);

    const currentItem = showcaseData[currentIndex];

    return (
        <section ref={containerRef} className="relative min-h-screen bg-white overflow-hidden">
            {/* Section Heading */}
            <div className="relative z-20 container mx-auto px-6 md:px-12 pt-20 pb-12">
                <div className="max-w-3xl">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
                        Our Work in Action
                    </h2>
                    <p className="text-lg md:text-xl text-gray-600">
                        Real projects, real results. See how we leverage AI to deliver exceptional creative content at unprecedented speed.
                    </p>
                </div>
            </div>

            {/* Main Content Area */}
            <div className="relative h-[600px] md:h-[700px]">
                {/* Background Image */}
                <div
                    className="bg-image absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage: `url(${currentItem.image})`,
                    }}
                />

                {/* Dark Overlay for Text Contrast */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />

                {/* Content - Left Aligned */}
                <div className="relative z-10 h-full flex items-center">
                    <div className="container mx-auto px-6 md:px-12">
                        <div className="max-w-2xl">
                            {/* Category Label */}
                            <div className="content-text mb-4">
                                <span className="inline-block px-4 py-1.5 bg-white/10 backdrop-blur-sm rounded-full text-xs md:text-sm font-medium text-white uppercase tracking-wider">
                                    {currentItem.place}
                                </span>
                            </div>

                            {/* Main Title */}
                            <div className="content-text mb-3">
                                <h3 className="font-['Oswald',sans-serif] text-5xl md:text-7xl lg:text-8xl font-bold text-black leading-none">
                                    {currentItem.title}
                                </h3>
                            </div>

                            {/* Secondary Title */}
                            <div className="content-text mb-8">
                                <h3 className="font-['Oswald',sans-serif] text-5xl md:text-7xl lg:text-8xl font-bold text-black leading-none">
                                    {currentItem.title2}
                                </h3>
                            </div>

                            {/* Description */}
                            <div className="content-text mb-8">
                                <p className="text-base md:text-lg lg:text-xl text-black leading-relaxed max-w-xl font-medium">
                                    {currentItem.description}
                                </p>
                            </div>

                            {/* View Project Button */}
                            <div className="content-text">
                                <button className="group px-8 py-3 bg-black text-white rounded-full font-medium hover:bg-gray-900 transition-all duration-300 flex items-center gap-2">
                                    <span>View Project</span>
                                    <svg
                                        className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Progress Indicator */}
                <div className="absolute bottom-8 left-6 md:left-12 right-6 md:right-auto md:w-96 z-20">
                    <div className="flex items-center gap-4 mb-3">
                        <span className="text-sm font-medium text-white">
                            {String(currentIndex + 1).padStart(2, '0')}
                        </span>
                        <div className="h-px bg-white/30 flex-1 relative overflow-hidden rounded-full">
                            <div className="progress-bar absolute inset-0 bg-white origin-left" />
                        </div>
                        <span className="text-sm font-medium text-white/60">
                            {String(showcaseData.length).padStart(2, '0')}
                        </span>
                    </div>

                    {/* Navigation Dots */}
                    <div className="flex gap-2">
                        {showcaseData.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentIndex(index)}
                                className={`h-1.5 rounded-full transition-all duration-300 ${index === currentIndex
                                        ? 'w-8 bg-white'
                                        : 'w-1.5 bg-white/30 hover:bg-white/50'
                                    }`}
                                aria-label={`Go to slide ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
