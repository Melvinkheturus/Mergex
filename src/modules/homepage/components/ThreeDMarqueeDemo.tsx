"use client";
import React from "react";
import { ThreeDMarquee } from "@/components/ui/3d-marquee";
import Link from "next/link";


const baseAssets = [
    "https://res.cloudinary.com/mergex/image/upload/v1773281817/hf_20260311_173240_a7233f48-61c4-4ad4-a1ec-2b000c241b56_omhw0f.jpg",
    "https://res.cloudinary.com/mergex/image/upload/v1773281599/Cedar_Site_ymyqdv.jpg",
    "https://res.cloudinary.com/mergex/image/upload/v1773281670/hf_20260311_172622_d1cffd0d-e7d9-4d24-b60a-f7797d787fd6_1_d79bs4.jpg",
    "https://res.cloudinary.com/mergex/image/upload/v1773281774/hf_20260311_172919_09959383-6564-4937-9ff3-d180abd51c28_mmug9q.jpg",
    "https://res.cloudinary.com/mergex/image/upload/v1773282284/hf_20260311_180959_052a5135-58c6-4512-8bb7-093adee7607c_zytaws.jpg",
    "https://res.cloudinary.com/mergex/image/upload/v1773282262/hf_20260311_181330_2607b912-951d-4b27-b0eb-76d202b26a1e_qaqk3i.jpg",
    "https://res.cloudinary.com/mergex/image/upload/v1773282121/hf_20260311_180625_ea8ef4bb-5e63-40c8-bcbf-0dc48b075244_itpy0o.png",
    "https://res.cloudinary.com/mergex/image/upload/v1773282637/hf_20260311_183152_66ca9663-fe80-4b3a-bcaa-870994c9a4cf_wrhaaw.png",
    "https://res.cloudinary.com/mergex/image/upload/v1773282428/hf_20260311_182054_4e13daf1-1c00-4fea-b505-c5cd62604f80_xhcjdq.png",
    "https://res.cloudinary.com/mergex/image/upload/v1773282588/hf_20260311_183005_95996d0c-20cb-4de4-9f94-752894ae80c5_1_mwv0uy.png",
    "https://res.cloudinary.com/mergex/video/upload/v1773204384/mockups/labs/Portfolio/jewelry_marketing_motion.mp4",
    "https://res.cloudinary.com/mergex/image/upload/v1773204343/mockups/labs/Portfolio/jewelry_ai_model.png",
    "https://res.cloudinary.com/mergex/video/upload/v1773203116/mockups/labs/Portfolio/ai_influencer_demo.mp4",
    "https://res.cloudinary.com/mergex/video/upload/v1773204735/mockups/labs/Portfolio/park_avenue_campaign.mp4",
];

export function ThreeDMarqueeDemo() {
    const [images, setImages] = React.useState<string[]>([]);

    React.useEffect(() => {
        const shuffledAssets = [...baseAssets].sort(() => Math.random() - 0.5);
        const generatedImages = Array.from({ length: 40 }, (_, i) => shuffledAssets[i % shuffledAssets.length]);
        setImages(generatedImages);
    }, []);

    if (images.length === 0) {
        return <div className="py-24 md:py-40 bg-[#FAFAFA] h-[800px]" />;
    }

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
                            Work Across the <span className="text-neutral-400 italic font-serif">Mergex Ecosystem</span>
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
                                    href="/systems#case-overview"
                                    className="px-8 py-4 bg-gradient-to-br from-neutral-900 to-neutral-700 text-white font-medium rounded-md hover:from-neutral-800 hover:to-neutral-600 active:scale-95 transition-all shadow-lg hover:shadow-xl w-full sm:w-auto text-center"
                                >
                                    View Systems Case Studies
                                </Link>
                                <Link
                                    href="/labs#work"
                                    className="px-8 py-4 bg-gradient-to-br from-white to-neutral-100 text-neutral-900 border border-neutral-200 font-medium rounded-md hover:from-neutral-50 hover:to-neutral-200 active:scale-95 transition-all shadow-sm hover:shadow-md w-full sm:w-auto text-center"
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
