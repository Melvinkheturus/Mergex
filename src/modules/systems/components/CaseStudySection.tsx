'use client';

import Image from 'next/image';
import { useState } from 'react';
import Link from 'next/link';
import { CASE_STUDIES } from '@/modules/caseStudies';

export function CaseStudySection() {
    const [tooltipText, setTooltipText] = useState('');
    const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });
    const [showTooltip, setShowTooltip] = useState(false);

    const handleMouseEnter = () => {
        setTooltipText('View Case Study');
        setShowTooltip(true);
    };

    const handleMouseLeave = () => {
        setShowTooltip(false);
    };

    const handleMouseMove = (e: React.MouseEvent) => {
        setTooltipPosition({ x: e.clientX, y: e.clientY });
    };

    return (
        <section className="relative py-24 lg:py-32 bg-slate-50 overflow-hidden">
            <div className="container mx-auto px-6 md:px-12 max-w-7xl">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-violet-600 mb-4" style={{ fontFamily: "var(--font-manrope)" }}>
                        Selected Work
                    </h2>
                    <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4" style={{ fontFamily: "var(--font-manrope)" }}>
                        Case Studies
                    </h3>
                    <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto" style={{ fontFamily: "var(--font-manrope)" }}>
                        Explore our portfolio of successful projects and transformative solutions
                    </p>
                </div>

                {/* Horizontal Scroll Gallery */}
                <div className="relative">
                    <div className="overflow-x-auto scrollbar-hide pb-8">
                        <div className="flex gap-6 min-w-max px-4">
                            {CASE_STUDIES.map((study) => (
                                <Link
                                    href={`/case-studies/${study.slug}`}
                                    key={study.id}
                                    className="cursor-none group relative w-[400px] md:w-[500px] lg:w-[600px] h-[300px] md:h-[400px] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 flex-shrink-0 block"
                                    onMouseEnter={handleMouseEnter}
                                    onMouseLeave={handleMouseLeave}
                                    onMouseMove={handleMouseMove}
                                >
                                    <div className="relative w-full h-full">
                                        <Image
                                            src={study.heroImage}
                                            alt={study.heroImageAlt}
                                            fill
                                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                                        />

                                        {/* Overlay Gradient & Content */}
                                        <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex flex-col justify-end p-8 md:p-10">
                                            <div className="transform transition-all duration-300 translate-y-0 group-hover:translate-y-[-8px]">
                                                <h3 className="text-2xl md:text-3xl font-bold text-white mb-3" style={{ fontFamily: "var(--font-manrope)" }}>
                                                    {study.title}
                                                </h3>
                                                <p className="text-white/80 text-base md:text-lg leading-relaxed line-clamp-2" style={{ fontFamily: "var(--font-manrope)" }}>
                                                    {study.outcome}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Scroll Hint */}
                    <div className="flex justify-center mt-8">
                        <div className="flex items-center gap-2 text-gray-500 text-sm">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
                            </svg>
                            <span style={{ fontFamily: "var(--font-manrope)" }}>Scroll to explore more</span>
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>

            {/* Custom Cursor Tooltip */}
            {showTooltip && (
                <div
                    className="fixed pointer-events-none z-[9998] transition-opacity duration-200"
                    style={{
                        left: `${tooltipPosition.x}px`,
                        top: `${tooltipPosition.y}px`,
                        transform: 'translate(20px, -50%)'
                    }}
                >
                    <div className="bg-black text-white px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap shadow-xl" style={{ fontFamily: "var(--font-manrope)" }}>
                        {tooltipText}
                    </div>
                </div>
            )}

            <style jsx>{`
                .scrollbar-hide::-webkit-scrollbar {
                    display: none;
                }
                .scrollbar-hide {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }
            `}</style>
        </section>
    );
}
