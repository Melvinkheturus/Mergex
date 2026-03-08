import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { Playfair_Display } from 'next/font/google';

const playfair = Playfair_Display({
    subsets: ['latin'],
    style: ['italic'],
    weight: ['400', '500', '600']
});

/**
 * HeroSection - Simple Hero Section
 * 
 * Clean hero section with editorial typography on light background.
 * No animations - just simple scroll behavior.
 */
export function HeroSection() {

    return (
        <section
            className="relative min-h-screen overflow-hidden"
            style={{ fontFamily: 'var(--font-manrope)' }}
        >
            {/* Background Images */}
            <div className="absolute inset-0 z-0">
                {/* Desktop Background */}
                <Image
                    src="/assets/background/parent-hero.jpeg"
                    alt=""
                    fill
                    className="object-cover hidden md:block"
                    priority
                />
                {/* Mobile Background */}
                <Image
                    src="/assets/background/parent hero mobile.jpeg"
                    alt=""
                    fill
                    className="object-cover md:hidden"
                    priority
                />
            </div>



            {/* Bottom Fade - Shifted lower (larger height but starts lower) */}
            <div className="absolute bottom-0 left-0 right-0 h-[250px] z-[1] pointer-events-none"
                style={{ background: 'linear-gradient(to bottom, transparent 0%, white 100%)' }}
            />





            {/* Typography Content Layer - fills full viewport height */}
            <div className="relative z-[4] h-screen flex flex-col">
                {/* Center Headline Section */}
                <div className="container mx-auto px-6 md:px-12 lg:px-16 max-w-[1400px] flex-1 flex items-center justify-center">
                    <div className="flex flex-col items-center text-center w-full max-w-4xl mx-auto pt-12 md:pt-20 -mt-64 md:-mt-24">
                        {/* Tagline */}
                        <div className="mb-6">
                            <span className="text-[10px] md:text-xs font-medium text-black/50 uppercase tracking-[0.3em]">
                                Clarity from Chaos • Mergex
                            </span>
                        </div>

                        {/* Headline */}
                        <h1 className="leading-[0.95] tracking-tight">
                            {/* Line 1: Scale Is Not Luck */}
                            <div className="mb-1 md:mb-2">
                                <span className="font-semibold text-[clamp(2rem,6vw,5rem)] text-black">
                                    Scale Is Not{' '}
                                </span>
                                <span className={`${playfair.className} font-normal text-[clamp(2rem,6vw,5rem)] text-black italic`}>
                                    Luck.
                                </span>
                            </div>

                            {/* Line 2: It's Structure */}
                            <div className="mb-1 md:mb-2">
                                <span className="font-semibold text-[clamp(2rem,6vw,5rem)] text-black">
                                    It’s{' '}
                                </span>
                                <span className="font-semibold text-[clamp(2rem,6vw,5rem)] bg-gradient-to-b from-violet-300 to-violet-800 bg-clip-text text-transparent">
                                    Structure.
                                </span>
                            </div>
                        </h1>
                    </div>
                </div>

                {/* Bottom Row: Subheadline and CTAs */}
                <div className="container mx-auto px-6 md:px-12 lg:px-16 max-w-[1400px] pb-8 md:pb-12">
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-10 md:gap-16 w-full">
                        {/* Subheadline (Bottom Left) - Hidden on mobile, moved above */}
                        <div className="hidden md:block max-w-xl text-left">
                            <p className="text-base md:text-xl text-black/95 leading-relaxed font-medium mb-3">
                                Mergex designs the architecture behind ambitious businesses integrating systems, AI, and growth into one engineered foundation.
                            </p>
                            <p className="text-sm md:text-base text-black/70 leading-relaxed italic">
                                Replace a complex vendor ecosystem with a single engineered foundation.
                            </p>
                        </div>

                        {/* CTAs (Bottom Right) */}
                        <div className="flex flex-col items-center md:items-end gap-6 w-full md:w-auto">
                            {/* Mobile Description (Above Fragmented Line on mobile) */}
                            <div className="md:hidden text-center max-w-lg mb-2">
                                <p className="text-sm text-black/95 leading-relaxed font-medium">
                                    Mergex designs the architecture behind ambitious businesses integrating systems, AI, and growth into one engineered foundation.
                                </p>
                            </div>

                            {/* Fragmented Vendor line - Above buttons on mobile only */}
                            <p className="md:hidden text-[10px] text-black/70 leading-relaxed italic text-center px-4">
                                Replace a complex vendor ecosystem with a single engineered foundation.
                            </p>

                            <div className="flex flex-row items-center justify-center gap-3 w-full sm:w-auto">
                                <Link
                                    href="/systems"
                                    className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-5 py-3 bg-black text-white rounded-lg text-xs md:text-base font-medium transition-all hover:bg-neutral-800 hover:shadow-xl shadow-lg whitespace-nowrap"
                                >
                                    Explore Systems
                                    <ArrowRight size={14} className="hidden sm:block" />
                                </Link>

                                <Link
                                    href="/labs"
                                    className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-5 py-3 bg-transparent border border-black rounded-lg text-xs md:text-base font-medium text-black transition-all hover:bg-black/5 whitespace-nowrap"
                                >
                                    Discover Labs
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
