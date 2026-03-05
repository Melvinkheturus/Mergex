"use client";
import { ThreeDMarquee } from "@/components/ui/3d-marquee";
import Link from "next/link";

export function ThreeDMarqueeDemo() {
    const baseImages = [
        "/assets/mockups/Screenshot%202025-12-26%20223532.png",
        "/assets/mockups/ACT%20Popcorn%20(online-video-cutter.com).mp4",
        "/assets/mockups/Screenshot%202025-12-27%20120524.png",
        "/assets/labs%20portfolio/Banana%20Choco%20Mix.mp4",
        "/assets/mockups/Screenshot%202026-01-26%20180500.png",
        "/assets/background/Mountain%20Dew%20(online-video-cutter.com).mp4",
        "/assets/mockups/Screenshot%202026-02-17%20125316.png",
        "/assets/mockups/Screenshot%202026-02-17%20130943.png",
        "/assets/mockups/Screenshot%202026-02-17%20131341.png",
        "/assets/mockups/KFC%20(online-video-cutter.com).mp4",
        "/assets/mockups/Kyra-hero.png",
    ];

    // Expanded the array further so every column gets exactly 9 items, covering the empty top edge
    const images = [...baseImages, ...baseImages, ...baseImages, ...baseImages, baseImages[0]];

    return (
        <section className="py-24 md:py-40 bg-[#FAFAFA]">
            <div className="container mx-auto px-6 md:px-12 lg:px-16 max-w-[1400px]">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 md:mb-24">
                    <div className="max-w-3xl">
                        <span className="text-xs font-bold text-violet-600 uppercase tracking-widest block mb-4">
                            The Showcase
                        </span>
                        <h2 className="text-4xl md:text-6xl font-bold font-display tracking-tight text-neutral-900 mb-6">
                            Work Across the <span className="text-neutral-400 italic font-medium">Mergex Ecosystem</span>
                        </h2>
                        <p className="text-lg md:text-xl text-neutral-600 max-w-2xl leading-relaxed">
                            From scalable business systems to experimental AI visuals, these projects reflect how Mergex turns ideas into structured execution.
                        </p>
                    </div>
                </div>
                <div className="relative mx-auto my-10 max-w-7xl rounded-2xl overflow-hidden group">
                    {/* Marquee Container */}
                    <div className="relative">
                        <ThreeDMarquee images={images} className="h-[700px] max-sm:h-[600px]" />

                        {/* Gradient Overlay for Fade Effect */}
                        <div className="absolute inset-0 bg-gradient-to-t from-[#FAFAFA] via-[#FAFAFA]/70 to-transparent pointer-events-none z-10 h-[700px] max-sm:h-[600px]"></div>

                        {/* Content Overlay */}
                        <div className="absolute inset-0 z-20 flex flex-col items-center justify-end text-center pb-16 px-6 sm:px-12 pointer-events-none">
                            <h3 className="text-3xl md:text-5xl font-bold font-display tracking-tight text-neutral-900 mb-4 max-w-3xl pointer-events-auto">
                                Behind Every Visual Is a System
                            </h3>
                            <p className="text-lg md:text-xl text-neutral-800 max-w-2xl mb-10 leading-relaxed font-medium pointer-events-auto">
                                Explore how strategy, technology, and creative intelligence come together inside Mergex.
                            </p>
                            <div className="flex flex-col sm:flex-row items-center gap-4 pointer-events-auto">
                                <Link
                                    href="/systems-case-studies"
                                    className="px-8 py-4 bg-gradient-to-br from-neutral-900 to-neutral-700 text-white font-medium rounded-md hover:from-neutral-800 hover:to-neutral-600 active:scale-95 transition-all shadow-lg hover:shadow-xl w-full sm:w-auto"
                                >
                                    View Systems Case Studies
                                </Link>
                                <Link
                                    href="/labs-portfolio"
                                    className="px-8 py-4 bg-gradient-to-br from-white to-neutral-100 text-neutral-900 border border-neutral-200 font-medium rounded-md hover:from-neutral-50 hover:to-neutral-200 active:scale-95 transition-all shadow-sm hover:shadow-md w-full sm:w-auto"
                                >
                                    Explore Labs Portfolio
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
