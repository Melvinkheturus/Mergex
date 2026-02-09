'use client';

import { PORTAL_CARDS, ECOSYSTEM_CONTENT } from '../content';
import VideoPortalCard from './VideoPortalCard';

export default function EcosystemSnapshot() {
    const cards = Object.values(PORTAL_CARDS);

    return (
        <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
            <div className="max-w-7xl mx-auto px-4 md:px-10">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        {ECOSYSTEM_CONTENT.headline}
                    </h2>
                    <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto">
                        {ECOSYSTEM_CONTENT.subheadline}
                    </p>
                </div>

                {/* Portal Cards Container */}
                {/* Mobile: Horizontal Scroll | Desktop: 3-Column Grid */}
                <div className="relative">
                    {/* Mobile Horizontal Scroll */}
                    <div className="lg:hidden flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-4 -mx-4 px-4">
                        {cards.map((card) => (
                            <VideoPortalCard
                                key={card.title}
                                title={card.title}
                                tagline={card.tagline}
                                description={card.description}
                                videoSrc={card.videoSrc}
                                videoPoster={card.videoPoster}
                                colorTone={card.colorTone}
                                href={card.href}
                            />
                        ))}
                    </div>

                    {/* Desktop 2-Column Grid */}
                    <div className="hidden lg:grid lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        {cards.map((card) => (
                            <VideoPortalCard
                                key={card.title}
                                title={card.title}
                                tagline={card.tagline}
                                description={card.description}
                                videoSrc={card.videoSrc}
                                videoPoster={card.videoPoster}
                                colorTone={card.colorTone}
                                href={card.href}
                            />
                        ))}
                    </div>
                </div>

                {/* Scroll Indicator for Mobile */}
                <div className="lg:hidden flex justify-center gap-2 mt-8">
                    {cards.map((card, index) => (
                        <div
                            key={index}
                            className="w-2 h-2 rounded-full bg-gray-300"
                            aria-label={`Card ${index + 1}`}
                        />
                    ))}
                </div>
            </div>

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
