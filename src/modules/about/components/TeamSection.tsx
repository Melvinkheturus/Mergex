'use client';

import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { RadialIntro, type OrbitItem } from '@/components/animate-ui/components/community/radial-intro';

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
    alt: string;
    name: string;
    role: string;
}

const TEAM_MEMBERS: TeamMember[] = [
    {
        id: '1',
        name: 'Manikandan',
        role: 'Founder & CEO',
        image: '/images/team/hf_20260304_161027_64d35ebe-b943-4b2e-b8ed-9297c5604487.jpeg',
        alt: 'Manikandan, Founder & CEO'
    },
    {
        id: '2',
        name: 'Sharukesh',
        role: 'Co-founder & CSO',
        image: '/images/team/WhatsApp Image 2026-03-01 at 5.51.48 PM.jpeg',
        alt: 'Sharukesh, Co-founder & CSO'
    },
    {
        id: '3',
        name: 'John Peter',
        role: 'CRO',
        image: '/images/team/WhatsApp Image 2026-03-01 at 5.37.18 PM.jpeg',
        alt: 'John Peter, CRO'
    },
    {
        id: '4',
        name: 'Muralidharan',
        role: 'MD of Mergex Labs',
        image: '/images/team/WhatsApp Image 2026-03-01 at 5.35.20 PM.jpeg',
        alt: 'Muralidharan, MD of Mergex Labs'
    },
    {
        id: '5',
        name: 'Yasshwanth',
        role: 'CPO',
        image: '/images/team/WhatsApp Image 2026-03-01 at 5.43.01 PM.jpeg',
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
                                    className="text-lg md:text-xl text-gray-600 leading-relaxed mx-auto max-w-2xl"
                                >
                                    A team of builders designing systems, ideas, and technologies that power the Mergex ecosystem.
                                </motion.p>
                            </div>

                            {/* Horizontal Image Scroll/Grid */}
                            <div className="w-full relative mt-8 flex justify-center">
                                <div className="flex gap-4 md:gap-6 px-4 md:px-0 w-full max-w-6xl justify-center items-center">
                                    {TEAM_MEMBERS.map((member, index) => (
                                        <motion.div
                                            key={member.id}
                                            initial={{ opacity: 0, y: 30 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.6, delay: 0.4 + (index * 0.1) }}
                                            className="relative w-full max-w-[220px] aspect-[3/4] rounded-2xl overflow-hidden shadow-sm border border-gray-100 group"
                                        >
                                            <Image
                                                src={member.image}
                                                alt={member.alt}
                                                fill
                                                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                                            />
                                            {/* Gradient overlay to make text readable */}
                                            <div className="absolute inset-0 bg-gradient-to-t from-gray-950/80 via-gray-950/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500" />

                                            {/* Name and Role text box */}
                                            <div className="absolute bottom-0 left-0 right-0 p-5 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                                                <h3 className="text-white font-semibold text-lg">{member.name}</h3>
                                                <p className="text-violet-200 text-sm font-medium">{member.role}</p>
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
