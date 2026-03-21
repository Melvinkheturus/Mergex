import React, { useState } from "react";
import { Search } from "lucide-react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { TypingAnimation } from "@/components/ui/typing-animation";

export const BlogSearchBar = () => {
    const [query, setQuery] = useState("");
    const [isFocused, setIsFocused] = useState(false);
    const router = useRouter();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (query.trim()) {
            router.push(`/blog/search?q=${encodeURIComponent(query.trim())}`);
        }
    };

    const placeholders = [
        "Ask Mergex...",
        "Search for insights...",
        "Digital transformation...",
        "AI automation tips...",
        "Scalable architecture..."
    ];

    return (
        <section className="mt-8 md:mt-12 w-full">
            <div className="mx-auto max-w-4xl">
                <form onSubmit={handleSubmit} className="relative group">
                    {/* Logo at the start */}
                    <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none z-10">
                        <Image
                            src="/logo/mergex-logo.png"
                            alt="Mergex"
                            width={32}
                            height={32}
                            className="object-contain opacity-80"
                        />
                    </div>

                    <div className="relative">
                        <input
                            type="text"
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                            onFocus={() => setIsFocused(true)}
                            onBlur={() => setIsFocused(false)}
                            className="w-full bg-gray-50 border border-gray-200 rounded-2xl py-4 pl-16 pr-32 text-base md:text-lg text-gray-900 placeholder:text-transparent focus:outline-none focus:ring-2 focus:ring-purple-500/10 focus:bg-white focus:border-purple-500/30 transition-all shadow-sm group-hover:shadow-md"
                        />
                        
                        {/* Typing Animation Placeholder */}
                        {!query && (
                            <div className="absolute inset-y-0 left-16 flex items-center pointer-events-none">
                                <TypingAnimation
                                    words={placeholders}
                                    className="text-gray-400 font-normal text-base md:text-lg"
                                    duration={50}
                                    delay={100}
                                    loop
                                />
                            </div>
                        )}
                    </div>

                    <div className="absolute right-2 inset-y-0 flex items-center">
                        <button
                            type="submit"
                            className="bg-gray-900 text-white rounded-xl px-5 py-2.5 text-sm font-bold hover:bg-gray-800 transition-all active:scale-95 shadow-lg flex items-center gap-2"
                        >
                            <Search className="size-4" />
                            <span>Search</span>
                        </button>
                    </div>
                </form>
                <div className="mt-4 flex flex-wrap items-center justify-center gap-3">
                    <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Trending:</span>
                    {["AI Automation", "Product Design", "Scalability", "SEO Strategy"].map((tag) => (
                        <button
                            key={tag}
                            onClick={() => {
                                setQuery(tag);
                                router.push(`/blog/search?q=${encodeURIComponent(tag)}`);
                            }}
                            className="text-xs text-gray-500 hover:text-gray-900 hover:underline decoration-gray-300 transition-colors"
                        >
                            {tag}
                        </button>
                    ))}
                </div>
            </div>
        </section>
    );
};
