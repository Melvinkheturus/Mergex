'use client';

import React, { useState, useEffect } from 'react';
import { motion, useScroll, useSpring, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { CaseStudy } from '../types';
import { CaseChapter } from './showcase/CaseChapter';
import { ArrowRight } from 'lucide-react';

interface ShowcaseViewProps {
    studies: CaseStudy[];
}

const CATEGORIES = [
    { name: 'Growth & Innovation', entrySlug: 'scaling-brand-awareness' },
    { name: 'Web Engineering', entrySlug: 'pixeldraft-media-launch' },
    { name: 'Digital E-commerce', entrySlug: 'e-commerce-platform' },
    { name: 'Complete Transformation', entrySlug: 'mic-and-mac-digital-overhaul' },
];

export const ShowcaseView: React.FC<ShowcaseViewProps> = ({ studies }) => {
    const [activeSection, setActiveSection] = useState(0);
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    useEffect(() => {
        const handleScroll = () => {
            const intro = document.getElementById('intro');
            const introHeight = intro?.offsetHeight || 0;

            if (window.scrollY < introHeight * 0.45) {
                setActiveSection(0);
                return;
            }

            // Detect which case study is currently most visible
            const scrollCenter = window.scrollY + window.innerHeight / 2;
            let activeStudyIdx = -1;

            studies.forEach((study, idx) => {
                const el = document.getElementById(study.slug);
                if (el) {
                    const rect = el.getBoundingClientRect();
                    const absoluteTop = rect.top + window.scrollY;
                    if (scrollCenter >= absoluteTop) {
                        activeStudyIdx = idx;
                    }
                }
            });

            if (activeStudyIdx === -1) {
                setActiveSection(1);
                return;
            }

            // Map study index to Category index (1-4)
            // Growth: 0,1,2 -> 1
            // Web: 3,4,5 -> 2
            // Ecomm: 6,7,8 -> 3
            // Transformation: 9 -> 4
            let categoryIdx = 1;
            if (activeStudyIdx >= 9) categoryIdx = 4;
            else if (activeStudyIdx >= 6) categoryIdx = 3;
            else if (activeStudyIdx >= 3) categoryIdx = 2;
            else categoryIdx = 1;

            const finalCta = document.getElementById('final-cta');
            const isAtBottom = (window.innerHeight + window.scrollY) >= document.documentElement.scrollHeight - 100;

            if (finalCta) {
                const rect = finalCta.getBoundingClientRect();
                if (rect.top < window.innerHeight * 0.8 || isAtBottom) {
                    setActiveSection(0);
                    return;
                }
            }

            setActiveSection(categoryIdx);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, [studies]);

    return (
        <div className="bg-gray-50/50 selection:bg-violet-100 min-h-screen">
            <style jsx global>{`
                body {
                    overflow-y: auto !important;
                }
                ::-webkit-scrollbar {
                    width: 10px;
                    background: #f1f1f1;
                }
                ::-webkit-scrollbar-thumb {
                    background: #d1d1d1;
                    border-radius: 5px;
                }
                ::-webkit-scrollbar-thumb:hover {
                    background: #bbbbbb;
                }
            `}</style>

            {/* Progress Bar */}
            <motion.div
                className="fixed top-0 left-0 right-0 h-1.5 bg-violet-600 z-[100] origin-left"
                style={{ scaleX }}
            />

            {/* Sticky Navigation - Now grouped by category */}
            <AnimatePresence>
                {activeSection > 0 && (
                    <motion.nav
                        initial={{ opacity: 0, x: -25 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -25 }}
                        transition={{ duration: 0.5, ease: "circOut" }}
                        className="fixed left-0 top-0 bottom-0 w-72 hidden xl:flex flex-col items-start justify-center pl-10 z-50 pointer-events-none"
                    >
                        <div className="relative pointer-events-auto">
                            {/* Vertical Connecting Line */}
                            <div className="absolute left-[9px] top-2 bottom-2 w-[1px] bg-gray-200" />

                            <div className="space-y-12 relative z-10">
                                {CATEGORIES.map((cat, idx) => {
                                    const navIdx = idx + 1;
                                    return (
                                        <button
                                            key={cat.name}
                                            onClick={() => document.getElementById(cat.entrySlug)?.scrollIntoView({ behavior: 'smooth' })}
                                            className="group relative flex items-center gap-6 transition-all duration-300"
                                        >
                                            {/* The Dot */}
                                            <div className="relative flex items-center justify-center w-5 h-5">
                                                <div className={`w-2.5 h-2.5 rounded-full transition-all duration-500 
                                                    ${activeSection === navIdx
                                                        ? 'w-5 h-5 bg-violet-600 shadow-[0_0_20px_rgba(124,58,237,0.4)]'
                                                        : 'bg-gray-300 group-hover:bg-gray-400 group-hover:scale-125'}`}
                                                />
                                            </div>

                                            {/* Persistent Label */}
                                            <span
                                                className={`text-[14px] font-bold uppercase tracking-[0.25em] transition-all duration-500 text-left leading-tight max-w-[150px] font-iceberg
                                                    ${activeSection === navIdx
                                                        ? 'text-gray-950 opacity-100 translate-x-3'
                                                        : 'text-gray-400 opacity-25 group-hover:opacity-100 group-hover:translate-x-3'}`}
                                            >
                                                {cat.name}
                                            </span>
                                        </button>
                                    );
                                })}
                            </div>
                        </div>
                    </motion.nav>
                )}
            </AnimatePresence>

            {/* Intro Hero */}
            <section id="intro" className="relative h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden" style={{ background: '#050505' }}>
                {/* SVG Background — Circuit Board / Tech Topology */}
                <svg
                    className="absolute inset-0 w-full h-full pointer-events-none"
                    viewBox="0 0 1440 900"
                    preserveAspectRatio="xMidYMid slice"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <defs>
                        <linearGradient id="trace1" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#6366f1" stopOpacity="0" />
                            <stop offset="30%" stopColor="#6366f1" stopOpacity="0.4" />
                            <stop offset="70%" stopColor="#818cf8" stopOpacity="0.4" />
                            <stop offset="100%" stopColor="#6366f1" stopOpacity="0" />
                        </linearGradient>
                        <linearGradient id="trace2" x1="0%" y1="0%" x2="0%" y2="100%">
                            <stop offset="0%" stopColor="#a78bfa" stopOpacity="0" />
                            <stop offset="40%" stopColor="#8b5cf6" stopOpacity="0.3" />
                            <stop offset="100%" stopColor="#a78bfa" stopOpacity="0" />
                        </linearGradient>
                        <linearGradient id="trace3" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#4f46e5" stopOpacity="0.35" />
                            <stop offset="100%" stopColor="#6366f1" stopOpacity="0" />
                        </linearGradient>
                        <filter id="padGlow" x="-100%" y="-100%" width="300%" height="300%">
                            <feGaussianBlur stdDeviation="4" result="blur" />
                            <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
                        </filter>
                        <filter id="chipGlow" x="-50%" y="-50%" width="200%" height="200%">
                            <feGaussianBlur stdDeviation="8" />
                        </filter>
                    </defs>

                    {/* === CIRCUIT TRACES — Right-angle PCB routing === */}
                    {/* Horizontal bus lines */}
                    <polyline points="0,180 400,180 400,280 700,280" stroke="url(#trace1)" strokeWidth="1" fill="none" opacity="0.35" />
                    <polyline points="700,280 700,180 1100,180 1100,280 1440,280" stroke="url(#trace1)" strokeWidth="1" fill="none" opacity="0.25" />
                    <polyline points="0,620 300,620 300,520 650,520" stroke="url(#trace1)" strokeWidth="1" fill="none" opacity="0.3" />
                    <polyline points="650,520 650,620 1050,620 1050,520 1440,520" stroke="url(#trace1)" strokeWidth="1" fill="none" opacity="0.2" />

                    {/* Vertical bus lines */}
                    <polyline points="350,0 350,180 450,180 450,400" stroke="url(#trace2)" strokeWidth="0.8" fill="none" opacity="0.25" />
                    <polyline points="1050,0 1050,180 950,180 950,400" stroke="url(#trace2)" strokeWidth="0.8" fill="none" opacity="0.2" />
                    <polyline points="200,500 200,620 300,620 300,900" stroke="url(#trace2)" strokeWidth="0.8" fill="none" opacity="0.22" />
                    <polyline points="1200,400 1200,520 1100,520 1100,900" stroke="url(#trace2)" strokeWidth="0.8" fill="none" opacity="0.18" />

                    {/* Diagonal data paths (dashed) */}
                    <line x1="450" y1="400" x2="650" y2="520" stroke="#6366f1" strokeWidth="0.6" strokeDasharray="8 6" opacity="0.2" />
                    <line x1="950" y1="400" x2="1050" y2="520" stroke="#818cf8" strokeWidth="0.6" strokeDasharray="8 6" opacity="0.15" />
                    <line x1="150" y1="100" x2="350" y2="180" stroke="#a78bfa" strokeWidth="0.5" strokeDasharray="6 8" opacity="0.15" />
                    <line x1="1200" y1="200" x2="1050" y2="180" stroke="#6366f1" strokeWidth="0.5" strokeDasharray="6 8" opacity="0.12" />

                    {/* === IC CHIP OUTLINES === */}
                    {/* Chip 1 — top-left area */}
                    <g opacity="0.2">
                        <rect x="60" y="120" width="80" height="120" rx="4" fill="none" stroke="#6366f1" strokeWidth="1" />
                        {/* Pins left */}
                        <line x1="60" y1="145" x2="40" y2="145" stroke="#6366f1" strokeWidth="0.8" />
                        <line x1="60" y1="165" x2="40" y2="165" stroke="#6366f1" strokeWidth="0.8" />
                        <line x1="60" y1="185" x2="40" y2="185" stroke="#6366f1" strokeWidth="0.8" />
                        <line x1="60" y1="205" x2="40" y2="205" stroke="#6366f1" strokeWidth="0.8" />
                        {/* Pins right */}
                        <line x1="140" y1="145" x2="160" y2="145" stroke="#6366f1" strokeWidth="0.8" />
                        <line x1="140" y1="165" x2="160" y2="165" stroke="#6366f1" strokeWidth="0.8" />
                        <line x1="140" y1="185" x2="160" y2="185" stroke="#6366f1" strokeWidth="0.8" />
                        <line x1="140" y1="205" x2="160" y2="205" stroke="#6366f1" strokeWidth="0.8" />
                        {/* Orientation notch */}
                        <circle cx="80" cy="135" r="3" fill="none" stroke="#6366f1" strokeWidth="0.6" />
                    </g>

                    {/* Chip 2 — bottom-right area */}
                    <g opacity="0.15">
                        <rect x="1250" y="600" width="100" height="80" rx="4" fill="none" stroke="#818cf8" strokeWidth="1" />
                        <line x1="1270" y1="600" x2="1270" y2="580" stroke="#818cf8" strokeWidth="0.8" />
                        <line x1="1290" y1="600" x2="1290" y2="580" stroke="#818cf8" strokeWidth="0.8" />
                        <line x1="1310" y1="600" x2="1310" y2="580" stroke="#818cf8" strokeWidth="0.8" />
                        <line x1="1330" y1="600" x2="1330" y2="580" stroke="#818cf8" strokeWidth="0.8" />
                        <line x1="1270" y1="680" x2="1270" y2="700" stroke="#818cf8" strokeWidth="0.8" />
                        <line x1="1290" y1="680" x2="1290" y2="700" stroke="#818cf8" strokeWidth="0.8" />
                        <line x1="1310" y1="680" x2="1310" y2="700" stroke="#818cf8" strokeWidth="0.8" />
                        <line x1="1330" y1="680" x2="1330" y2="700" stroke="#818cf8" strokeWidth="0.8" />
                        <circle cx="1268" cy="615" r="3" fill="none" stroke="#818cf8" strokeWidth="0.6" />
                    </g>

                    {/* Chip 3 — small, bottom-left */}
                    <g opacity="0.12">
                        <rect x="80" y="700" width="60" height="50" rx="3" fill="none" stroke="#a78bfa" strokeWidth="0.8" />
                        <line x1="95" y1="700" x2="95" y2="688" stroke="#a78bfa" strokeWidth="0.6" />
                        <line x1="110" y1="700" x2="110" y2="688" stroke="#a78bfa" strokeWidth="0.6" />
                        <line x1="125" y1="700" x2="125" y2="688" stroke="#a78bfa" strokeWidth="0.6" />
                        <line x1="95" y1="750" x2="95" y2="762" stroke="#a78bfa" strokeWidth="0.6" />
                        <line x1="110" y1="750" x2="110" y2="762" stroke="#a78bfa" strokeWidth="0.6" />
                        <line x1="125" y1="750" x2="125" y2="762" stroke="#a78bfa" strokeWidth="0.6" />
                    </g>

                    {/* === SOLDER PADS at junctions === */}
                    {/* Filled pads */}
                    <circle cx="400" cy="180" r="4" fill="#6366f1" opacity="0.5" filter="url(#padGlow)" />
                    <circle cx="700" cy="280" r="4" fill="#818cf8" opacity="0.45" filter="url(#padGlow)" />
                    <circle cx="1100" cy="180" r="3.5" fill="#6366f1" opacity="0.35" filter="url(#padGlow)" />
                    <circle cx="1100" cy="280" r="3.5" fill="#a78bfa" opacity="0.3" filter="url(#padGlow)" />
                    <circle cx="300" cy="620" r="4" fill="#6366f1" opacity="0.4" filter="url(#padGlow)" />
                    <circle cx="650" cy="520" r="4" fill="#818cf8" opacity="0.45" filter="url(#padGlow)" />
                    <circle cx="1050" cy="620" r="3.5" fill="#a78bfa" opacity="0.3" filter="url(#padGlow)" />
                    <circle cx="1050" cy="520" r="3.5" fill="#6366f1" opacity="0.35" filter="url(#padGlow)" />
                    <circle cx="350" cy="180" r="3" fill="#818cf8" opacity="0.3" filter="url(#padGlow)" />
                    <circle cx="450" cy="400" r="3.5" fill="#a78bfa" opacity="0.35" filter="url(#padGlow)" />
                    <circle cx="950" cy="400" r="3.5" fill="#6366f1" opacity="0.3" filter="url(#padGlow)" />

                    {/* Ring pads (via holes) */}
                    <circle cx="700" cy="180" r="5" fill="none" stroke="#6366f1" strokeWidth="1" opacity="0.2" />
                    <circle cx="650" cy="620" r="5" fill="none" stroke="#818cf8" strokeWidth="1" opacity="0.18" />
                    <circle cx="200" cy="500" r="4" fill="none" stroke="#a78bfa" strokeWidth="0.8" opacity="0.15" />
                    <circle cx="1200" cy="400" r="4" fill="none" stroke="#6366f1" strokeWidth="0.8" opacity="0.15" />

                    {/* === CROSSHAIR ALIGNMENT MARKS === */}
                    <g stroke="#6366f1" strokeWidth="0.5" opacity="0.12">
                        <line x1="55" y1="50" x2="75" y2="50" /><line x1="65" y1="40" x2="65" y2="60" />
                        <circle cx="65" cy="50" r="8" fill="none" />
                    </g>
                    <g stroke="#818cf8" strokeWidth="0.5" opacity="0.1">
                        <line x1="1365" y1="830" x2="1385" y2="830" /><line x1="1375" y1="820" x2="1375" y2="840" />
                        <circle cx="1375" cy="830" r="8" fill="none" />
                    </g>
                    <g stroke="#a78bfa" strokeWidth="0.5" opacity="0.08">
                        <line x1="1355" y1="100" x2="1375" y2="100" /><line x1="1365" y1="90" x2="1365" y2="110" />
                        <circle cx="1365" cy="100" r="8" fill="none" />
                    </g>

                    {/* === FAINT AMBIENT GLOW behind center === */}
                    <circle cx="720" cy="450" r="300" fill="#6366f1" filter="url(#chipGlow)" opacity="0.06" />
                    <circle cx="300" cy="200" r="200" fill="#4f46e5" filter="url(#chipGlow)" opacity="0.04" />
                    <circle cx="1200" cy="300" r="180" fill="#8b5cf6" filter="url(#chipGlow)" opacity="0.04" />
                </svg>

                {/* Grain/Noise Texture Overlay */}
                <div className="absolute inset-0 pointer-events-none opacity-[0.3] mix-blend-soft-light">
                    <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                        <filter id="hero-noise">
                            <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
                            <feColorMatrix type="saturate" values="0" />
                        </filter>
                        <rect width="100%" height="100%" filter="url(#hero-noise)" />
                    </svg>
                </div>

                {/* Content */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="relative z-10"
                >
                    <h1 className="text-6xl lg:text-8xl font-bold text-white tracking-tighter leading-[0.95] mb-12 font-satoshi max-w-4xl mx-auto">
                        Engineering Growth Through <br /> <span className="bg-gradient-to-r from-indigo-400 via-violet-400 to-purple-400 bg-clip-text text-transparent">Digital Excellence</span>
                    </h1>
                    <p className="text-xl text-white/50 max-w-2xl mx-auto font-normal leading-relaxed font-satoshi mb-16">
                        From complex business transformations to AI-powered marketing, see how we build the tools that define industry leaders.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                        <button
                            onClick={() => document.getElementById(studies[0]?.slug)?.scrollIntoView({ behavior: 'smooth' })}
                            className="group bg-indigo-500 hover:bg-indigo-400 text-white px-10 py-5 rounded-full text-lg font-bold transition-all duration-300 flex items-center gap-3 shadow-2xl shadow-indigo-500/30 hover:-translate-y-1 font-satoshi cursor-pointer"
                        >
                            View Case Studies
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </button>
                        <Link
                            href="/contact"
                            className="px-10 py-5 rounded-full text-lg font-bold border border-white/10 text-white/80 hover:text-white hover:border-white/25 hover:bg-white/5 transition-all duration-300 font-satoshi"
                        >
                            Partner With Us
                        </Link>
                    </div>
                </motion.div>

            </section>

            {/* Chapters */}
            <div className="space-y-0">
                {studies.map((study, idx) => (
                    <CaseChapter key={study.id} study={study} index={idx} />
                ))}
            </div>

            {/* Final CTA */}
            <section id="final-cta" className="py-48 bg-white text-center relative overflow-hidden border-t border-gray-100">
                <div className="absolute inset-0 bg-gray-50/50" />
                <div className="container mx-auto px-6 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="bg-gray-950 rounded-[64px] p-24 lg:p-32 relative overflow-hidden shadow-2xl"
                    >
                        <div className="absolute top-0 right-0 -m-20 w-80 h-80 bg-violet-600/10 blur-[100px]" />
                        <div className="absolute bottom-0 left-0 -m-20 w-80 h-80 bg-violet-600/5 blur-[100px]" />

                        <h2 className="text-5xl lg:text-7xl font-bold text-white mb-12 tracking-tighter leading-none font-satoshi">
                            Ready for your <br /> <span className="text-violet-500">Breakthrough?</span>
                        </h2>
                        <button className="group bg-white hover:bg-gray-50 text-gray-950 px-14 py-7 rounded-full text-xl font-bold transition-all duration-300 flex items-center gap-4 mx-auto shadow-xl font-satoshi">
                            Start Your Transformation
                            <ArrowRightIcon className="group-hover:translate-x-2 transition-transform text-violet-600" />
                        </button>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

const ArrowRightIcon = ({ className }: { className?: string }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
    >
        <path d="M5 12h14" />
        <path d="m12 5 7 7-7 7" />
    </svg>
);
