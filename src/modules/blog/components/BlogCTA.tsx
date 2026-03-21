import React from "react";
import { MoveRight } from "lucide-react";

export const BlogCTA = () => {
    return (
        <section className="relative mt-24 overflow-hidden rounded-[2.5rem] bg-black p-12 text-center md:mt-32 md:p-24 lg:p-32">
            {/* Mesh Gradient Blobs */}
            <div className="pointer-events-none absolute -top-24 -right-24 h-[600px] w-[600px] rounded-full bg-purple-600/20 blur-[120px]" />
            <div className="pointer-events-none absolute -bottom-32 -left-32 h-[500px] w-[500px] rounded-full bg-indigo-500/15 blur-[100px]" />
            <div className="pointer-events-none absolute top-1/2 left-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-950/20 blur-[140px]" />

            {/* Background Noise Texture */}
            <svg 
                className="pointer-events-none absolute inset-0 z-10 h-full w-full opacity-30 mix-blend-soft-light"
                xmlns="http://www.w3.org/2000/svg"
            >
                <filter id="noiseFilter">
                    <feTurbulence 
                        type="fractalNoise" 
                        baseFrequency="0.65" 
                        numOctaves="3" 
                        stitchTiles="stitch" 
                    />
                </filter>
                <rect width="100%" height="100%" filter="url(#noiseFilter)" />
            </svg>

            {/* Subtle mask to pull it all together */}
            <div className="absolute inset-0 z-1 pointer-events-none bg-black/10 mask-[radial-gradient(ellipse_60%_50%_at_50%_50%,transparent_0%,#000_100%)]" />

            {/* Bottom Glow Effect */}
            <div className="pointer-events-none absolute bottom-0 left-1/2 h-[300px] w-full max-w-[800px] -translate-x-1/2 rounded-full bg-purple-500/10 blur-[120px] -mb-40" />

            {/* Content Container */}
            <div className="relative z-10 flex flex-col items-center">
                <span className="mb-6 text-[10px] font-medium tracking-[0.3em] text-purple-400/90 uppercase">
                    Let's think together
                </span>
                
                <h2 className="max-w-4xl text-4xl font-semibold text-white md:text-5xl lg:text-7xl leading-[1.15]">
                    If an idea here resonates, <span className="italic font-serif text-purple-200/90 pr-2">let's discuss it.</span>
                </h2>
                
                <p className="mx-auto mt-8 max-w-2xl text-lg text-gray-400/90 leading-relaxed md:text-xl">
                    Every insight here came from a real problem. If you're looking at one 
                    and seeing your business, that's probably not a coincidence.
                </p>

                <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
                    <button className="flex w-full items-center justify-center gap-2 rounded-xl bg-white px-8 py-4 text-md font-semibold text-gray-950 transition-all hover:bg-gray-100 sm:w-auto">
                        Start a Conversation <MoveRight className="size-4" />
                    </button>
                    <button className="w-full rounded-xl border border-white/10 bg-white/5 px-8 py-4 text-md font-semibold text-white backdrop-blur-md transition-all hover:bg-white/10 shadow-2xl sm:w-auto">
                        Explore Mergex Systems
                    </button>
                </div>
            </div>
        </section>
    );
};
