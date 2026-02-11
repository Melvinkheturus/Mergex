'use client';

import React from 'react';
import { CaseStudy } from '../../types';
import Image from 'next/image';

interface HeroSectionProps {
    study: CaseStudy;
}

export function HeroSection({ study }: HeroSectionProps) {
    return (
        <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 overflow-hidden">
            <div className="container mx-auto max-w-7xl">
                <div className="max-w-4xl mx-auto text-center mb-12">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-100 text-violet-700 text-xs font-bold uppercase tracking-wider mb-6">
                        <span className="w-2 h-2 rounded-full bg-violet-600 animate-pulse"></span>
                        Live Project
                    </div>
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight font-manrope">
                        {study.outcome}
                    </h1>
                    <p className="text-xl text-gray-500 max-w-2xl mx-auto font-manrope">
                        {study.subtitle}
                    </p>
                </div>

                <div className="relative aspect-[16/9] w-full max-w-5xl mx-auto rounded-2xl overflow-hidden shadow-2xl">
                    <Image
                        src={study.heroImage}
                        alt={study.heroImageAlt}
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
            </div>
        </section>
    );
}
