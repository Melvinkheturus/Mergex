'use client';

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

interface VideoPortalCardProps {
    title: string;
    tagline: string;
    description: string;
    videoSrc: string;
    videoPoster: string;
    colorTone: 'purple' | 'blue' | 'green';
    href: string;
}

const colorGradients = {
    purple: 'from-purple-600/20 via-purple-500/10 to-transparent',
    blue: 'from-blue-600/20 via-blue-500/10 to-transparent',
    green: 'from-green-600/20 via-green-500/10 to-transparent',
};

const colorAccents = {
    purple: 'text-purple-400',
    blue: 'text-blue-400',
    green: 'text-green-400',
};

export default function VideoPortalCard({
    title,
    tagline,
    description,
    videoSrc,
    videoPoster,
    colorTone,
    href,
}: VideoPortalCardProps) {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [isHovered, setIsHovered] = useState(false);
    const [videoError, setVideoError] = useState(false);
    const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

    useEffect(() => {
        // Check for reduced motion preference
        const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
        setPrefersReducedMotion(mediaQuery.matches);

        const handleChange = (e: MediaQueryListEvent) => {
            setPrefersReducedMotion(e.matches);
        };

        mediaQuery.addEventListener('change', handleChange);
        return () => mediaQuery.removeEventListener('change', handleChange);
    }, []);

    useEffect(() => {
        if (!videoRef.current || videoError || prefersReducedMotion) return;

        if (isHovered) {
            videoRef.current.play().catch(() => {
                // Silently handle autoplay errors
            });
        } else {
            videoRef.current.pause();
        }
    }, [isHovered, videoError, prefersReducedMotion]);

    return (
        <Link
            href={href}
            className="group relative block rounded-3xl overflow-hidden aspect-[3/4] min-w-[85vw] md:min-w-0 snap-center"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Video/Gradient Background */}
            <div className="absolute inset-0">
                {!videoError && !prefersReducedMotion ? (
                    <video
                        ref={videoRef}
                        className={`w-full h-full object-cover transition-all duration-700 ${isHovered ? 'scale-105 blur-0' : 'scale-100 blur-sm'
                            }`}
                        poster={videoPoster}
                        muted
                        loop
                        playsInline
                        onError={() => setVideoError(true)}
                    >
                        <source src={videoSrc} type="video/mp4" />
                    </video>
                ) : (
                    // Fallback: Animated gradient background
                    <div className="relative w-full h-full">
                        <div
                            className="absolute inset-0 bg-cover bg-center"
                            style={{ backgroundImage: `url(${videoPoster})` }}
                        />
                        <div
                            className={`absolute inset-0 bg-gradient-to-br ${colorGradients[colorTone]} animate-gradient`}
                        />
                    </div>
                )}
            </div>

            {/* Dark Overlay */}
            <div
                className={`absolute inset-0 bg-black transition-opacity duration-500 ${isHovered ? 'opacity-50' : 'opacity-70'
                    }`}
            />

            {/* Content */}
            <div className="relative h-full flex flex-col justify-end p-8 md:p-10">
                {/* Division Icon (optional) */}
                <div className="mb-6">
                    <div
                        className={`w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center ${colorAccents[colorTone]}`}
                    >
                        <span className="material-symbols-outlined text-2xl">
                            {colorTone === 'purple' ? 'science' : colorTone === 'blue' ? 'terminal' : 'rocket_launch'}
                        </span>
                    </div>
                </div>

                {/* Title */}
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-2">{title}</h3>

                {/* Tagline */}
                <p className={`text-lg md:text-xl ${colorAccents[colorTone]} mb-4`}>{tagline}</p>

                {/* Description */}
                <p className="text-gray-300 text-sm md:text-base mb-6 opacity-90">{description}</p>

                {/* Divider */}
                <div className="w-full h-px bg-white/20 mb-6" />

                {/* CTA */}
                <div
                    className={`flex items-center gap-2 text-white font-semibold transition-all duration-300 ${isHovered ? 'gap-3' : 'gap-2'
                        }`}
                >
                    <span>Enter Portal</span>
                    <span className="material-symbols-outlined">arrow_forward</span>
                </div>
            </div>

            {/* Hover Glow Effect */}
            <div
                className={`absolute inset-0 pointer-events-none transition-opacity duration-500 ${isHovered ? 'opacity-100' : 'opacity-0'
                    }`}
            >
                <div className={`absolute inset-0 bg-gradient-to-t ${colorGradients[colorTone]}`} />
            </div>
        </Link>
    );
}
