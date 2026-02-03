'use client';

import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { RadialIntro, type OrbitItem } from '@/components/animate-ui/components/community/radial-intro';
import type { TeamMember } from '../types';

/**
 * Note: Add team images to /public/images/team/
 * Images should be natural, candid working moments:
 * - Studio shots
 * - Whiteboards
 * - Laptops + discussions
 * NO stiff portraits or "arms crossed" poses
 */
const TEAM_MEMBERS: TeamMember[] = [
    {
        id: '1',
        image: '/images/team/5978fb22-a765-47f0-a5c5-bad576ed2a60.png',
        alt: 'Team member working on design'
    },
    {
        id: '2',
        image: '/images/team/WhatsApp Image 2025-10-22 at 15.33.59_47f92291.jpg',
        alt: 'Team collaboration session'
    },
    {
        id: '3',
        image: '/images/team/5978fb22-a765-47f0-a5c5-bad576ed2a60.png',
        alt: 'Team member coding'
    },
    {
        id: '4',
        image: '/images/team/WhatsApp Image 2025-10-22 at 15.33.59_47f92291.jpg',
        alt: 'Team discussion'
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

    const handleIntroComplete = () => {
        setHasEnteredView(true);
        // Automatically switch after animation sequence time (approx 3.5s)
        const timer = setTimeout(() => {
            setViewState('content');
        }, 3500);
        return () => clearTimeout(timer);
    };

    return (
        <section
            ref={containerRef}
            className="relative bg-gray-50 py-20 md:py-32 min-h-[90vh] flex flex-col justify-center overflow-hidden"
        >
            <div className="container mx-auto px-6 md:px-12 lg:px-16 max-w-[1400px] relative z-10">

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

                    {/* View 2: Main Content & Grid */}
                    {viewState === 'content' && (
                        <motion.div
                            key="content"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1 }}
                        >
                            <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">
                                {/* Left: Copy */}
                                <div className="flex-1 lg:max-w-xl">
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
                                        className="text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-900 mb-8 leading-tight"
                                    >
                                        Not just hands on keyboards.<br />
                                        People who think in systems.
                                    </motion.h2>

                                    <div className="space-y-6 text-lg md:text-xl text-gray-700 leading-relaxed">
                                        <motion.p
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.6, delay: 0.2 }}
                                        >
                                            Scale isn't about headcount; it's about alignment.
                                            We are a unified collective of designers, engineers, and strategists who prefer
                                            solving complex problems over shipping noise.
                                        </motion.p>

                                        <motion.p
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.6, delay: 0.3 }}
                                        >
                                            When you work with Mergex, you aren't managing a scattered roster of freelancers.
                                            You're plugging into a synchronized intelligence engine committed to the long game.
                                        </motion.p>
                                    </div>
                                </div>

                                {/* Right: Image Grid */}
                                <div className="flex-1 w-full">
                                    {/* Mobile: Horizontal scroll */}
                                    <div className="md:hidden overflow-x-auto -mx-6 px-6 scrollbar-hide pb-4">
                                        <div className="flex gap-4">
                                            {TEAM_MEMBERS.map((member) => (
                                                <div
                                                    key={member.id}
                                                    className="flex-shrink-0 w-[280px] h-[400px] relative rounded-xl overflow-hidden shadow-lg"
                                                >
                                                    <Image
                                                        src={member.image}
                                                        alt={member.alt}
                                                        fill
                                                        className="object-cover"
                                                    />
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Desktop: Staggered grid */}
                                    <div className="hidden md:grid md:grid-cols-2 gap-6">
                                        {TEAM_MEMBERS.map((member, index) => (
                                            <motion.div
                                                key={member.id}
                                                initial={{ opacity: 0, y: 50 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ duration: 0.6, delay: 0.4 + (index * 0.1) }}
                                                className={`relative rounded-xl overflow-hidden shadow-lg ${index % 2 === 0 ? 'h-[400px]' : 'h-[350px] mt-12'
                                                    }`}
                                            >
                                                <Image
                                                    src={member.image}
                                                    alt={member.alt}
                                                    fill
                                                    className="object-cover hover:scale-105 transition-transform duration-500"
                                                />
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>

            </div>
        </section>
    );
}
