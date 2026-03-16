'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Outfit } from 'next/font/google';
import Image from 'next/image';
import { CLOUDINARY_ASSETS } from '@/lib/cloudinary';

const outfit = Outfit({
    subsets: ['latin'],
    display: 'swap',
});

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

const TEAM_MEMBERS_DATA = [
    {
        id: '1',
        name: 'Manikandan',
        role: 'Founder & CEO',
        image: CLOUDINARY_ASSETS.teamManikandan,
        fallback: '/team/Manikandan.jpg',
        alt: 'Manikandan, Founder & CEO'
    },
    {
        id: '2',
        name: 'Sharukesh',
        role: 'Co-founder & CSO',
        image: CLOUDINARY_ASSETS.teamSharukesh,
        fallback: '/team/sharukesh.jpg',
        alt: 'Sharukesh, Co-founder & CSO'
    },
    {
        id: '3',
        name: 'John Peter',
        role: 'CRO',
        image: CLOUDINARY_ASSETS.teamJohn,
        fallback: '/team/johnpeter.jpg',
        alt: 'John Peter, CRO'
    },
    {
        id: '4',
        name: 'Muralidharan',
        role: 'MD of Mergex Labs',
        image: CLOUDINARY_ASSETS.teamMuralidharan,
        fallback: '/team/Muralidharan.jpg',
        alt: 'Muralidharan, MD of Mergex Labs'
    },
    {
        id: '5',
        name: 'Yasshwanth',
        role: 'CPO',
        image: CLOUDINARY_ASSETS.teamYasshwanth,
        fallback: '/team/yasshwanth.jpg',
        alt: 'Yasshwanth, CPO'
    }
];


/**
 * TeamSection - Human Proof & Mergex Minds
 * 
 * Flow:
 * 1. User scrolls into view
 * 2. Grid view with copy animate in
 */
export function TeamSection() {
    const [teamImages, setTeamImages] = useState<Record<string, string>>(
        Object.fromEntries(TEAM_MEMBERS_DATA.map(m => [m.id, m.image]))
    );
    
    const handleImageError = (id: string, fallback: string) => {
        setTeamImages(prev => ({ ...prev, [id]: fallback }));
    };
 
    const containerRef = useRef<HTMLDivElement>(null);
    const scrollRef = useRef<HTMLDivElement>(null);
    const isPausedRef = useRef(false);
    const currentIndexRef = useRef(0);
 
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });
 
    const yTransform = useTransform(scrollYProgress, [0, 1], [-50, 50]);
 
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
 
    // Auto-scroll effect: mobile only, scrolls every 5s
    useEffect(() => {
        const el = scrollRef.current;
        if (!el) return;
 
        const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
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
            const maxIndex = TEAM_MEMBERS_DATA.length - 1;
 
            currentIndexRef.current = (currentIndexRef.current + 1) % (maxIndex + 1);
            const target = currentIndexRef.current * STEP;
 
            // If back to 0, jump instantly then animate first card in
            if (currentIndexRef.current === 0) {
                el.scrollLeft = 0;
            } else {
                smoothScrollTo(el, target, 2500); // 2.5 second smooth scroll
            }
        }, 5000); // Every 5 seconds
 
        return () => {
            clearInterval(interval);
            el.removeEventListener('touchstart', handleTouchStart);
            el.removeEventListener('touchend', handleTouchEnd);
        };
    }, []);
 
    return (
        <section
            ref={containerRef}
            className="relative min-h-screen bg-white flex flex-col justify-center overflow-hidden py-24"
        >
            {/* Background Ghost Word */}
            <motion.div
                style={{ 
                    y: yTransform,
                    fontFamily: outfit.style.fontFamily,

                }}
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-[25vh] font-black text-neutral-900 opacity-[0.02] select-none pointer-events-none z-0 tracking-[-0.05em] leading-none whitespace-nowrap uppercase"
            >
                ARCHITECTS
            </motion.div>
 
            <div className="container mx-auto px-6 md:px-12 lg:px-16 max-w-[1400px] relative z-10 w-full">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                    className="flex flex-col items-center text-center w-full"
                >
                    {/* Centered Copy */}
                    <div className="max-w-4xl mb-24 md:mb-32">
                        <motion.span
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="block text-violet-600 font-bold tracking-[0.2em] text-xs uppercase mb-8"
                        >
                            The Collective
                        </motion.span>
 
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="text-5xl md:text-7xl lg:text-8xl mb-10 leading-[0.9] tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-indigo-900 via-blue-600 to-indigo-400"
                        >
                            Builders of the <br />
                            <span className="italic font-medium" style={{ fontFamily: 'var(--font-playfair)' }}>Systemic Future.</span>
                        </motion.h2>
 
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.5 }}
                            className="text-xl md:text-2xl text-gray-500 leading-relaxed mx-auto max-w-3xl font-light"
                        >
                            A multidisciplinary team designing the technologies, models, and systems that define the Mergex ecosystem.
                        </motion.p>
                    </div>
 
                    <div
                        ref={scrollRef}
                        className="flex gap-6 md:gap-8 px-6 md:px-0 w-full overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-12 justify-start lg:justify-center no-scrollbar"
                    >
                        {TEAM_MEMBERS_DATA.map((member, index) => (
                            <motion.div
                                key={member.id}
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: 0.6 + (index * 0.1) }}
                                className="relative w-[300px] md:w-[280px] lg:w-[240px] shrink-0 snap-center aspect-[4/5] rounded-[2.5rem] overflow-hidden group shadow-2xl shadow-gray-200/50"
                            >
                                <Image
                                    src={teamImages[member.id]}
                                    alt={member.alt}
                                    fill
                                    className="object-cover transition-transform duration-1000 ease-[0.16, 1, 0.3, 1] group-hover:scale-110"
                                    onError={() => handleImageError(member.id, member.fallback)}
                                />
                                
                                {/* Overlays */}
                                <div className="absolute inset-0 bg-neutral-900/10 group-hover:bg-neutral-900/0 transition-colors duration-700" />
                                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-700" />
                                
                                {/* Content */}
                                <div className="absolute inset-0 p-8 flex flex-col justify-end text-left translate-y-2 group-hover:translate-y-0 transition-transform duration-700">
                                    <div className="overflow-hidden">
                                        <motion.p 
                                            initial={{ y: 20, opacity: 0 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: 1 + (index * 0.1) }}
                                            className="text-violet-400 text-xs font-bold tracking-widest uppercase mb-2"
                                        >
                                            {member.role}
                                        </motion.p>
                                    </div>
                                    <div className="overflow-hidden">
                                        <motion.h3 
                                            initial={{ y: 30, opacity: 0 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: 1.1 + (index * 0.1) }}
                                            className="text-white text-2xl md:text-3xl font-semibold tracking-tight"
                                        >
                                            {member.name}
                                        </motion.h3>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
