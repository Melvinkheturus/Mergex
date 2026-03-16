'use client';

import React, { useRef, useState, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Playfair_Display } from 'next/font/google';

const playfair = Playfair_Display({
    subsets: ['latin'],
    style: ['italic', 'normal'],
    weight: ['400', '500', '600', '700'],
});

gsap.registerPlugin(ScrollTrigger);

const PROCESS_STEPS = [
    {
        number: '01.',
        title: 'Diagnose',
        description: 'We analyze your current ecosystem, tools, vendors, and workflows to understand where complexity slows growth.',
    },
    {
        number: '02.',
        title: 'Architect',
        description: 'We design a unified system connecting strategy, software, automation, and intelligence.',
    },
    {
        number: '03.',
        title: 'Build',
        description: 'We implement the infrastructure, platforms, workflows, and AI automation.',
    },
    {
        number: '04.',
        title: 'Scale',
        description: 'We optimize operations and enable sustainable growth through automation and system intelligence.',
    }
];

const TEAM_AVATARS = [
    '/team/Manikandan.jpg',
    '/team/Muralidharan.jpg',
    '/team/johnpeter.jpg',
    '/team/sharukesh.jpg',
    '/team/yasshwanth.jpg',
];

export function ProcessSection() {
    const sectionRef = useRef<HTMLElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        if (!sectionRef.current) return;

        gsap.from(".process-card", {
            y: 50,
            opacity: 0,
            duration: 0.8,
            stagger: 0.2,
            ease: "power2.out",
            scrollTrigger: {
                trigger: sectionRef.current,
                start: "top 70%",
            }
        });

        gsap.from(".process-header", {
            x: -30,
            opacity: 0,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
                trigger: sectionRef.current,
                start: "top 80%",
            }
        });

        gsap.from(".alignment-bar", {
            y: 30,
            opacity: 0,
            duration: 1,
            delay: 1,
            ease: "power2.out",
            scrollTrigger: {
                trigger: sectionRef.current,
                start: "top 60%",
            }
        });

    }, { scope: sectionRef });

    return (
        <section
            ref={sectionRef}
            className="relative py-24 md:py-32 bg-white text-neutral-900 overflow-hidden"
        >
            {/* Background Accents - Subtle light gradients */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-violet-50/50 rounded-full blur-[120px] -z-10" />
                <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-violet-50/30 rounded-full blur-[100px] -z-10" />
            </div>

            <div className="container mx-auto px-6 max-w-7xl">
                {/* Header Section */}
                <div className="process-header flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-24 gap-8">
                    <div className="max-w-xl">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-2.5 h-2.5 rounded-full bg-violet-600 shadow-[0_0_10px_rgba(124,58,237,0.2)]" />
                            <span className="text-xs md:text-sm font-semibold uppercase tracking-wider text-neutral-500">
                                4 SIMPLE STEPS
                            </span>
                        </div>
                        <h2
                            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-neutral-900 leading-[1.1]"
                            style={{ fontFamily: 'var(--font-manrope)' }}
                        >
                            Effortless Process,<br />
                            Continuous Supply
                        </h2>
                    </div>
                    <div className="hidden md:block h-[1px] flex-1 bg-neutral-100 ml-12 mb-6" />
                </div>

                <div className="flex overflow-x-auto snap-x snap-mandatory md:grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10 mb-16 md:mb-24 pb-20 -mx-6 px-6 md:mx-0 md:px-0 scrollbar-hide md:overflow-visible relative z-10">
                    {PROCESS_STEPS.map((step, i) => (
                        <div
                            key={i}
                            className="process-card min-w-[85vw] md:min-w-0 snap-center group relative p-7 md:p-8 bg-white rounded-3xl transition-all duration-500 hover:-translate-y-2 cursor-default border border-neutral-100 shadow-[20px_20px_60px_rgba(139,92,246,0.08)] hover:shadow-[30px_30px_80px_rgba(139,92,246,0.15)]"
                        >
                            <div className="absolute inset-0 rounded-3xl pointer-events-none shadow-[inset_1px_1px_2px_rgba(255,255,255,0.8),inset_-1px_-1px_2px_rgba(139,92,246,0.02)]" />

                            <span className={`${playfair.className} relative text-xl font-bold text-violet-600/80 mb-6 block transition-colors group-hover:text-violet-600 italic`}>
                                {step.number}
                            </span>

                            <h3 className={`${playfair.className} relative text-xl md:text-2xl font-bold mb-4 tracking-tight text-neutral-800 transition-colors group-hover:text-neutral-950`}>
                                {step.title}
                            </h3>

                            <p className="relative text-neutral-500 text-sm md:text-base leading-relaxed font-light mt-auto transition-colors group-hover:text-neutral-600">
                                {step.description}
                            </p>

                            {/* Subtler Hover Glow & 3D Inner Polish */}
                            <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none shadow-[inset_0_0_20px_rgba(139,92,246,0.02),inset_0_0_0_1px_rgba(255,255,255,0.8)]" />
                        </div>
                    ))}
                </div>

                {/* Alignment Bar - Moved even further upwards */}
                <div className="alignment-bar w-full p-4 md:p-6 bg-neutral-950 text-white rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6 md:gap-12 shadow-2xl shadow-violet-900/10 relative -mt-16 md:-mt-22 z-20">
                    <div className="flex flex-col md:flex-row items-center gap-6">
                        {/* Avatars */}
                        <div className="flex -space-x-3 items-center">
                            {TEAM_AVATARS.map((avatar, i) => (
                                <div
                                    key={i}
                                    className="w-10 h-10 rounded-full border-2 border-neutral-900 overflow-hidden relative"
                                >
                                    <Image
                                        src={avatar}
                                        alt="Team member"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            ))}
                        </div>
                        <p className="text-white/70 text-base md:text-lg font-medium text-center md:text-left">
                            Align with Businesses that <span className="text-white font-bold">Choose Quality</span>
                        </p>
                    </div>

                    <Link
                        href="/contact"
                        className="group flex items-center gap-3 bg-white text-neutral-950 py-3.5 px-8 rounded-full font-bold text-lg hover:bg-violet-50 transition-all duration-300 shadow-lg shadow-white/5"
                    >
                        <div className="w-6 h-6 rounded-full bg-violet-600 flex items-center justify-center text-white group-hover:bg-violet-700 transition-colors">
                            <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
                        </div>
                        Start Now
                    </Link>
                </div>
            </div>

            {/* Hide scrollbar globally for this section */}
            <style jsx global>{`
                .scrollbar-hide {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }
                .scrollbar-hide::-webkit-scrollbar {
                    display: none;
                }
            `}</style>
        </section>
    );
}
