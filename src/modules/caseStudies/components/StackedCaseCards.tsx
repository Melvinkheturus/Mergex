'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import Image from 'next/image';

gsap.registerPlugin(ScrollTrigger);

interface CaseCardData {
    id: string;
    thumbnail: string;
    title: string;
    description: string;
    subtext: string;
    metrics: Array<{
        value: string;
        label: string;
    }>;
}

interface StackedCaseCardsProps {
    cards: CaseCardData[];
    sectionTitle?: string;
    sectionSubtitle?: string;
}

export function StackedCaseCards({ cards, sectionTitle, sectionSubtitle }: StackedCaseCardsProps) {
    const sectionRef = useRef<HTMLDivElement>(null);
    const cardsRef = useRef<HTMLDivElement[]>([]);

    useEffect(() => {
        if (!sectionRef.current || cardsRef.current.length === 0) return;

        const ctx = gsap.context(() => {
            cardsRef.current.forEach((card, index) => {
                if (!card) return;

                // Initial stacked position
                gsap.set(card, {
                    y: index * 40,
                    scale: 1 - index * 0.05,
                    zIndex: cards.length - index,
                });

                // Scroll animation
                ScrollTrigger.create({
                    trigger: card,
                    start: 'top center',
                    end: 'bottom top',
                    scrub: true,
                    onUpdate: (self) => {
                        const progress = self.progress;
                        const yOffset = index * 40 * (1 - progress);
                        const scaleOffset = 1 - index * 0.05 + progress * index * 0.05;

                        gsap.to(card, {
                            y: yOffset,
                            scale: scaleOffset,
                            duration: 0.3,
                            ease: 'power2.out',
                        });
                    },
                });
            });
        }, sectionRef);

        return () => ctx.revert();
    }, [cards.length]);

    return (
        <section ref={sectionRef} className="py-20 md:py-28 bg-white">
            <div className="container mx-auto px-6 md:px-12">
                {/* Header */}
                {(sectionTitle || sectionSubtitle) && (
                    <div className="text-center mb-16">
                        {sectionTitle && (
                            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1A1A1A] mb-4">
                                {sectionTitle}
                            </h2>
                        )}
                        {sectionSubtitle && (
                            <p className="text-lg text-[#666666] max-w-2xl mx-auto">
                                {sectionSubtitle}
                            </p>
                        )}
                    </div>
                )}

                {/* Stacked Cards Container */}
                <div className="relative max-w-4xl mx-auto" style={{ minHeight: `${cards.length * 600}px` }}>
                    {cards.map((card, index) => (
                        <div
                            key={card.id}
                            ref={(el) => {
                                if (el) cardsRef.current[index] = el;
                            }}
                            className="sticky top-24 bg-[#FAFAFA] rounded-3xl shadow-lg border border-[#E5E5E5] overflow-hidden mb-8"
                        >
                            <div className="grid md:grid-cols-2 gap-6 p-8 md:p-12">
                                {/* Left: Thumbnail */}
                                <div className="relative h-64 md:h-full rounded-2xl overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
                                    {card.thumbnail ? (
                                        <Image
                                            src={card.thumbnail}
                                            alt={card.title}
                                            fill
                                            className="object-cover"
                                        />
                                    ) : (
                                        <div className="w-full h-full flex items-center justify-center text-gray-400">
                                            <span className="text-6xl">🎨</span>
                                        </div>
                                    )}
                                </div>

                                {/* Right: Content */}
                                <div className="flex flex-col justify-between">
                                    {/* Title & Description */}
                                    <div className="mb-6">
                                        <h3 className="text-2xl md:text-3xl font-bold text-[#1A1A1A] mb-4">
                                            {card.title}
                                        </h3>
                                        <p className="text-[#666666] leading-relaxed mb-4">
                                            {card.description}
                                        </p>
                                        <p className="text-sm text-[#999999]">
                                            {card.subtext}
                                        </p>
                                    </div>

                                    {/* Metrics */}
                                    <div className="grid grid-cols-2 gap-4">
                                        {card.metrics.map((metric, idx) => (
                                            <div key={idx} className="p-4 bg-white rounded-xl border border-[#E5E5E5]">
                                                <div className="text-3xl font-bold text-[#1A1A1A] mb-1">
                                                    {metric.value}
                                                </div>
                                                <div className="text-xs text-[#666666] uppercase tracking-wide">
                                                    {metric.label}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
