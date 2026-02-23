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
            className="relative min-h-screen bg-black overflow-hidden"
            style={{ fontFamily: 'var(--font-manrope)' }}
        >
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/assets/background/footer.png"
                    alt=""
                    fill
                    className="object-cover opacity-80"
                    priority
                />
            </div>



            {/* Bottom Fade - Shifted lower (larger height but starts lower) */}
            <div className="absolute bottom-0 left-0 right-0 h-[250px] z-[1] pointer-events-none"
                style={{ background: 'linear-gradient(to bottom, transparent 0%, white 100%)' }}
            />





            {/* Typography Content Layer - fills full viewport height */}
            <div className="relative z-[4] h-screen flex flex-col">
                <div className="container mx-auto px-6 md:px-12 lg:px-16 max-w-[1400px] flex-1 flex">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 w-full">
                        {/* Left Column: Tagline + Headline pinned to top */}
                        <div className="lg:pr-12 pt-36 md:pt-44 flex flex-col">
                            {/* Tagline */}
                            <div className="mb-6">
                                <span className="text-[10px] md:text-xs font-medium text-white/50 uppercase tracking-[0.3em]">
                                    From Chaos to Clarity . Mergex
                                </span>
                            </div>

                            <h1 className="leading-[0.95] tracking-tight mb-0">
                                {/* Line 1: Scale Is Not Luck */}
                                <div className="mb-1 md:mb-2">
                                    <span className="font-semibold text-[clamp(2rem,5vw,4.2rem)] text-white">
                                        Scale Is Not{' '}
                                    </span>
                                    <span className={`${playfair.className} font-normal text-[clamp(2rem,5vw,4.2rem)] text-white italic`}>
                                        Luck.
                                    </span>
                                </div>

                                {/* Line 2: It's Structure */}
                                <div className="mb-1 md:mb-2">
                                    <span className="font-semibold text-[clamp(2rem,5vw,4.2rem)] text-white">
                                        It’s{' '}
                                    </span>
                                    <span className="font-semibold text-[clamp(2rem,5vw,4.2rem)] bg-gradient-to-b from-violet-300 to-violet-800 bg-clip-text text-transparent">
                                        Structure.
                                    </span>
                                </div>
                            </h1>
                        </div>

                        {/* Right Column: Copy + CTAs pinned to bottom */}
                        <div className="lg:pl-12 flex flex-col items-start justify-end pb-16 md:pb-20">
                            {/* Subheadline */}
                            <p className="text-base md:text-xl text-white/95 max-w-xl mb-4 leading-relaxed font-medium">
                                Mergex designs the architecture behind ambitious businesses — integrating systems, AI, and growth into one engineered foundation.
                            </p>

                            {/* Supporting Line */}
                            <p className="text-sm md:text-base text-white/70 max-w-lg mb-10 leading-relaxed italic">
                                Replace fragmented vendors with a single engineered ecosystem.
                            </p>

                            {/* CTAs */}
                            <div className="flex flex-col sm:flex-row items-start gap-4">
                                <Link
                                    href="/systems"
                                    className="inline-flex items-center gap-2 px-6 py-2.5 bg-white text-black rounded-lg text-sm md:text-base font-medium transition-all hover:bg-gray-100 hover:shadow-xl shadow-lg"
                                >
                                    Explore Systems
                                    <ArrowRight size={16} />
                                </Link>

                                <Link
                                    href="/labs"
                                    className="inline-flex items-center gap-2 px-6 py-2.5 bg-transparent border border-black rounded-lg text-sm md:text-base font-medium text-black transition-all hover:bg-black/5"
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
