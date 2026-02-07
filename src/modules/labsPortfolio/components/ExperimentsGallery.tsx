'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import { LABS_EXPERIMENTS } from '../content/experiments';
import gsap from 'gsap';

export function ExperimentsGallery() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [windowWidth, setWindowWidth] = useState(1920);
    const containerRef = useRef<HTMLDivElement>(null);
    const trackRef = useRef<HTMLDivElement>(null);
    const autoPlayRef = useRef<NodeJS.Timeout | null>(null);

    // Handle window resize and initial width
    useEffect(() => {
        setWindowWidth(window.innerWidth);
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Create infinite loop - 3 copies
    const infiniteExperiments = [
        ...LABS_EXPERIMENTS,
        ...LABS_EXPERIMENTS,
        ...LABS_EXPERIMENTS,
    ];

    const centerCard = LABS_EXPERIMENTS[currentIndex % LABS_EXPERIMENTS.length];

    // Card width + gap
    const cardWidth = 340;
    const gap = 24;
    const cardWithGap = cardWidth + gap;

    // Get container width
    const containerWidth = containerRef.current?.offsetWidth || windowWidth;

    // GSAP infinite carousel animation
    useEffect(() => {
        if (!trackRef.current) return;

        const totalCards = LABS_EXPERIMENTS.length;
        const startPosition = totalCards; // Start at middle copy

        // Set initial position
        const initialOffset = -(startPosition * cardWithGap) + (containerWidth / 2) - (cardWidth / 2);
        gsap.set(trackRef.current, { x: initialOffset });

        // Auto-play function
        const nextSlide = () => {
            setCurrentIndex((prev) => {
                const nextIndex = (prev + 1) % totalCards;
                const targetPosition = startPosition + nextIndex;
                const targetOffset = -(targetPosition * cardWithGap) + (containerWidth / 2) - (cardWidth / 2);

                // Animate to next position
                gsap.to(trackRef.current, {
                    x: targetOffset,
                    duration: 0.8,
                    ease: 'power2.out',
                    onComplete: () => {
                        // If we've reached the end of the second copy, instantly reset to middle copy
                        if (targetPosition >= totalCards * 2 - 1) {
                            const resetOffset = -(totalCards * cardWithGap) + (containerWidth / 2) - (cardWidth / 2);
                            gsap.set(trackRef.current, { x: resetOffset });
                        }
                    }
                });

                return nextIndex;
            });
        };

        // Start auto-play
        autoPlayRef.current = setInterval(nextSlide, 4000);

        return () => {
            if (autoPlayRef.current) {
                clearInterval(autoPlayRef.current);
            }
        };
    }, [containerWidth, cardWidth, cardWithGap]);

    // Update card states based on position
    const getCardState = (index: number) => {
        const currentPosition = LABS_EXPERIMENTS.length + (currentIndex % LABS_EXPERIMENTS.length);
        const isCenterCard = index === currentPosition;
        const distance = Math.abs(index - currentPosition);

        return {
            isCenterCard,
            scale: isCenterCard ? 1 : Math.max(0.85, 1 - (distance * 0.05)),
            opacity: isCenterCard ? 1 : Math.max(0.4, 1 - (distance * 0.15)),
            y: isCenterCard ? 0 : 20
        };
    };

    return (
        <section className="relative bg-white py-32 overflow-hidden">
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

                {/* Carousel Container with Edge Fading */}
                <div className="relative">
                    {/* Left Fade */}
                    <div className="absolute left-0 top-0 bottom-0 w-48 bg-gradient-to-r from-white via-white to-transparent z-10 pointer-events-none" />

                    {/* Right Fade */}
                    <div className="absolute right-0 top-0 bottom-0 w-48 bg-gradient-to-l from-white via-white to-transparent z-10 pointer-events-none" />

                    {/* Carousel Track - GSAP Horizontal Sliding */}
                    <div ref={containerRef} className="overflow-hidden py-8">
                        <div
                            ref={trackRef}
                            className="flex gap-6"
                        >
                            {infiniteExperiments.map((experiment, index) => {
                                const { isCenterCard, scale, opacity, y } = getCardState(index);

                                return (
                                    <motion.div
                                        key={`${experiment.id}-${index}`}
                                        className="flex-shrink-0"
                                        style={{
                                            transformOrigin: 'center center'
                                        }}
                                        animate={{
                                            scale,
                                            opacity,
                                            y
                                        }}
                                        transition={{
                                            duration: 0.6,
                                            ease: 'easeInOut'
                                        }}
                                    >
                                        <ExperimentCard
                                            experiment={experiment}
                                            isFeatured={isCenterCard}
                                        />
                                    </motion.div>
                                );
                            })}
                        </div>
                    </div>
                </div>

                {/* Card Title & Description (Below Carousel) */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentIndex}
                        className="mt-12 text-center max-w-2xl mx-auto"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.4 }}
                    >
                        <h3 className="text-3xl font-bold text-gray-900 mb-4">
                            {centerCard.title}
                        </h3>
                        <p className="text-lg text-gray-600 leading-relaxed">
                            {centerCard.shortDescription}
                        </p>

                        {/* Category Badge */}
                        <div className="mt-6 inline-flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-full">
                            <span className="text-sm font-medium text-gray-700">
                                {centerCard.category}
                            </span>
                        </div>
                    </motion.div>
                </AnimatePresence>

                {/* Dot Indicators */}
                <div className="flex justify-center gap-3 mt-12">
                    {LABS_EXPERIMENTS.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentIndex(index)}
                            className={`transition-all duration-300 rounded-full ${index === (currentIndex % LABS_EXPERIMENTS.length)
                                    ? 'w-12 h-3 bg-purple-600'
                                    : 'w-3 h-3 bg-gray-300 hover:bg-gray-400'
                                }`}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

// Experiment Card Component
interface ExperimentCardProps {
    experiment: typeof LABS_EXPERIMENTS[0];
    isFeatured: boolean;
}

function ExperimentCard({ experiment, isFeatured }: ExperimentCardProps) {
    // Category color mapping
    const categoryColors: Record<string, string> = {
        'visual': 'from-purple-500 to-pink-500',
        'video': 'from-blue-500 to-cyan-500',
        'audio': 'from-orange-500 to-red-500',
        'concept': 'from-green-500 to-emerald-500',
    };

    const gradient = categoryColors[experiment.category] || 'from-gray-500 to-gray-700';

    return (
        <div
            className="relative rounded-3xl overflow-hidden shadow-2xl transition-all duration-500 w-[340px] h-[450px]"
            style={{
                aspectRatio: '1080 / 1350' // Portrait ratio
            }}
        >
            {/* Background Image */}
            <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200">
                {experiment.heroImage && (
                    <img
                        src={experiment.heroImage}
                        alt={experiment.title}
                        className="w-full h-full object-cover"
                    />
                )}
            </div>

            {/* Light Gradient Overlay - Top only */}
            <div className={`absolute inset-0 bg-gradient-to-b ${gradient} opacity-10`} />

            {/* Featured Badge */}
            {isFeatured && experiment.featured && (
                <div className="absolute top-6 right-6 z-10">
                    <div className="px-4 py-2 bg-white/95 backdrop-blur-sm rounded-full shadow-lg">
                        <span className="text-xs font-bold text-gray-900 uppercase tracking-wide flex items-center gap-1">
                            <Sparkles className="h-3 w-3" />
                            Featured
                        </span>
                    </div>
                </div>
            )}

        </div>
    );
}
