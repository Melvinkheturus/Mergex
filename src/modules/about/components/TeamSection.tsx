'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { RadialIntro, type OrbitItem } from '@/components/animate-ui/components/community/radial-intro';
import { CLOUDINARY_ASSETS } from '@/lib/cloudinary';

/**
 * Note: Add team images to /public/images/team/
 * Images should be natural, candid working moments:
 * - Studio shots
 * - Whiteboards
 * - Laptops + discussions
 * NO stiff portraits or "arms crossed" poses
 */
interface TeamMember {
    id: string;
    image: string;
    fallback?: string;
    alt: string;
    name: string;
    role: string;
}

const TEAM_MEMBERS: TeamMember[] = [
    {
        id: '1',
        name: 'Manikandan',
        role: 'Founder & CEO',
        image: CLOUDINARY_ASSETS.teamManikandan,
        fallback: '/team/Manikandan.jpeg',
        alt: 'Manikandan, Founder & CEO'
    },
    {
        id: '2',
        name: 'Sharukesh',
        role: 'Co-founder & CSO',
        image: CLOUDINARY_ASSETS.teamSharukesh,
        fallback: '/team/Sharukesh.jpeg',
        alt: 'Sharukesh, Co-founder & CSO'
    },
    {
        id: '3',
        name: 'John Peter',
        role: 'CRO',
        image: CLOUDINARY_ASSETS.teamJohn,
        fallback: '/team/John.jpeg',
        alt: 'John Peter, CRO'
    },
    {
        id: '4',
        name: 'Muralidharan',
        role: 'MD of Mergex Labs',
        image: CLOUDINARY_ASSETS.teamMuralidharan,
        fallback: '/team/Muralidharan.jpeg',
        alt: 'Muralidharan, MD of Mergex Labs'
    },
    {
        id: '5',
        name: 'Yasshwanth',
        role: 'CPO',
        image: CLOUDINARY_ASSETS.teamYasshwanth,
        fallback: '/team/yasshwanth.jpeg',
        alt: 'Yasshwanth, CPO'
    }
];

const LOGO_ITEM: OrbitItem = {
    id: 'logo',
    name: 'Mergex Logo',
    src: '/logo/1.png'
};

// Map for Radial Intro - 8 items total (Logo + 7 Team Members)
// We take the first 7 items from a doubled list to ensure we have enough
const TEAM_DOUBLED = [...TEAM_MEMBERS, ...TEAM_MEMBERS];
const ORBIT_ITEMS: OrbitItem[] = [
    LOGO_ITEM,
    ...TEAM_DOUBLED.slice(0, 7).map((member, index) => ({
        id: `orbit-${index}`,
        name: member.alt,
        src: member.image
    }))
];

/**
 * TeamSection - Human Proof & Mergex Minds
 * 
 * Flow:
 * 1. User scrolls into view
 * 2. RadialIntro animation plays (showing connection/system)
 * 3. Transforms into grid view with copy
 */
export function TeamSection() {
    const [viewState, setViewState] = useState<'intro' | 'content'>('intro');
    const [hasEnteredView, setHasEnteredView] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);
    const scrollRef = useRef<HTMLDivElement>(null);
    const isPausedRef = useRef(false);
    const currentIndexRef = useRef(0);

    const handleIntroComplete = () => {
        setHasEnteredView(true);
        const timer = setTimeout(() => {
            setViewState('content');
        }, 3500);
        return () => clearTimeout(timer);
    };

    // Smooth eased scroll to a target position
    const smoothScrollTo = (el: HTMLDivElement, target: number, duration: number) => {
        const start = el.scrollLeft;
        const diff = target - start;
        let startTime: number | null = null;

        const step = (timestamp: number) => {
            if (!startTime) startTime = timestamp;
            const elapsed = timestamp - startTime;
            const progress = Math.min(elapsed / duration, 1);
            // Cubic ease in-out for premium feel
            const ease = progress < 0.5
                ? 4 * progress * progress * progress
                : 1 - Math.pow(-2 * progress + 2, 3) / 2;
            el.scrollLeft = start + diff * ease;
            if (elapsed < duration) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
    };

    // Auto-scroll effect: mobile only, starts 3s after content appears, scrolls every 5s
    useEffect(() => {
        if (viewState !== 'content') return;
        const el = scrollRef.current;
        if (!el) return;

        const isMobile = window.innerWidth < 768;
        if (!isMobile) return;

        const CARD_WIDTH = 280;
        const GAP = 16;
        const STEP = CARD_WIDTH + GAP; // 296px per card

        const handleTouchStart = () => { isPausedRef.current = true; };
        const handleTouchEnd = () => {
            isPausedRef.current = false;
            // Sync index after manual swipe
            currentIndexRef.current = Math.round(el.scrollLeft / STEP);
        };

        el.addEventListener('touchstart', handleTouchStart, { passive: true });
        el.addEventListener('touchend', handleTouchEnd, { passive: true });

        const interval = setInterval(() => {
            if (isPausedRef.current || !scrollRef.current) return;
            const el = scrollRef.current;
            const maxIndex = TEAM_MEMBERS.length - 1;

            currentIndexRef.current = (currentIndexRef.current + 1) % (maxIndex + 1);
            const target = currentIndexRef.current * STEP;

            // If back to 0, jump instantly then animate first card in
            if (currentIndexRef.current === 0) {
                el.scrollLeft = 0;
            } else {
                smoothScrollTo(el, target, 2500); // 2.5 second smooth scroll
            }
        }, 5000); // Every 5 seconds

        const startTimer = setTimeout(() => { }, 3000);

        return () => {
            clearInterval(interval);
            clearTimeout(startTimer);
            el.removeEventListener('touchstart', handleTouchStart);
            el.removeEventListener('touchend', handleTouchEnd);
        };
    }, [viewState]);

    return (
        <section
            ref={containerRef}
            className="relative bg-white py-20 md:py-32 min-h-[90vh] flex flex-col justify-center overflow-hidden"
        >
            <div className="container mx-auto px-6 md:px-12 lg:px-16 max-w-[1400px] relative z-10 w-full overflow-hidden">

                <AnimatePresence mode="wait">
                    {/* View 1: Radial Intro Animation */}
                    {viewState === 'intro' && (
                        <motion.div
                            key="intro"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            exit={{ opacity: 0, scale: 0.95, filter: 'blur(10px)' }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8 }}
                            className="flex flex-col items-center justify-center min-h-[60vh] w-full"
                            onViewportEnter={handleIntroComplete}
                        >
                            <div className="mb-8">
                                <span className="block text-violet-600 font-medium tracking-widest text-sm md:text-base uppercase text-center">
                                    Mergex Minds
                                </span>
                            </div>

                            <div className="relative w-full max-w-[600px] aspect-square flex items-center justify-center">
                                {hasEnteredView && (
                                    <RadialIntro
                                        orbitItems={ORBIT_ITEMS}
                                        stageSize={500}
                                        imageSize={80}
                                    />
                                )}
                            </div>

                            <motion.p
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 1, duration: 1 }}
                                className="mt-8 text-xl text-gray-500 font-light"
                            >
                                Synchronizing intelligence...
                            </motion.p>
                        </motion.div>
                    )}

                    {/* View 2: Main Content & Horizontal Layout */}
                    {viewState === 'content' && (
                        <motion.div
                            key="content"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1 }}
                            className="flex flex-col items-center text-center w-full"
                        >
                            {/* Centered Copy */}
                            <div className="max-w-3xl mb-16">
                                <motion.span
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6 }}
                                    className="block text-violet-600 font-medium tracking-widest text-sm md:text-base mb-4 uppercase"
                                >
                                    Mergex Minds
                                </motion.span>

                                <motion.h2
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: 0.1 }}
                                    className="text-4xl md:text-5xl lg:text-6xl text-gray-900 mb-6 leading-tight italic"
                                    style={{ fontFamily: 'var(--font-playfair)' }}
                                >
                                    Minds Behind The Architects of Mergex
                                </motion.h2>

                                <motion.p
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: 0.2 }}
                                    className="text-lg md:text-xl text-gray-600 leading-relaxed mx-auto max-w-2xl px-4"
                                >
                                    A team of builders designing systems, ideas, and technologies that power the Mergex ecosystem.
                                </motion.p>
                            </div>

                            {/* Horizontal Image Scroll/Grid */}
                            <div className="w-full mt-8">
                                <div
                                    ref={scrollRef}
                                    className="flex gap-4 md:gap-6 px-6 md:px-0 w-full overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-8 justify-start md:justify-center"
                                >
                                    {TEAM_MEMBERS.map((member, index) => (
                                        <motion.div
                                            key={member.id}
                                            initial={{ opacity: 0, y: 30 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.6, delay: 0.4 + (index * 0.1) }}
                                            className="relative w-[280px] shrink-0 snap-center md:w-full md:max-w-[220px] aspect-[4/5] md:aspect-[3/4] rounded-2xl overflow-hidden shadow-sm border border-gray-100 group"
                                        >
                                            <Image
                                                src={member.image}
                                                alt={member.alt}
                                                fill
                                                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                                            />
                                            {/* Bottom gradient overlay - always visible */}
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

                                            {/* Name and Role - always visible at bottom */}
                                            <div className="absolute bottom-0 left-0 right-0 p-4 text-left">
                                                <h3 className="text-white font-semibold text-base leading-tight">{member.name}</h3>
                                                <p className="text-violet-300 text-xs font-medium mt-0.5">{member.role}</p>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>

                        </motion.div>
                    )}
                </AnimatePresence>

            </div>
        </section>
    );
}
