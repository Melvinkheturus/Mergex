"use client";

import React, { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { MergexIntelligence } from "@/modules/blog/components/MergexIntelligence";
import { BlogGrid } from "@/modules/blog/components/BlogGrid";
import { BlogSearchBar } from "@/modules/blog/components/BlogSearchBar";
import { type Article } from "@/modules/blog/types";

export default function BlogSearchPage() {
    const searchParams = useSearchParams();
    const query = searchParams.get("q") || "";
    
    const [aiData, setAiData] = useState<{ summary: string; keyPoints: string[]; intent: string; cta: { label: string; link: string } } | null>(null);
    const [blogs, setBlogs] = useState<Article[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        if (!query) return;

        const fetchData = async () => {
            setIsLoading(true);
            try {
                // Fetch AI Insights
                const aiRes = await fetch(`/api/search?q=${encodeURIComponent(query)}`);
                const aiResult = await aiRes.json();
                setAiData(aiResult);

                // Fetch Related Blogs
                const blogRes = await fetch(`/api/blog-search?q=${encodeURIComponent(query)}`);
                const blogResult = await blogRes.json();
                setBlogs(blogResult);
            } catch (error) {
                console.error("Search fetch error:", error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchData();
    }, [query]);

    return (
        <div className="min-h-screen bg-white">
            {/* Search Header - Not fixed anymore */}
            <div className="border-b border-gray-100 px-4 md:px-8 py-8 transition-colors duration-500">
                <div className="container mx-auto max-w-[1720px]">
                    <BlogSearchBar />
                </div>
            </div>

            <main className="container mx-auto max-w-[1720px] px-4 py-16 md:px-8 md:py-24">
                {isLoading ? (
                    <div className="flex flex-col items-center justify-center py-24 space-y-6">
                        <div className="size-14 border-4 border-purple-100 border-t-purple-600 rounded-full animate-spin" />
                        <p className="text-gray-500 font-medium animate-pulse tracking-wide">Synthesizing Mergex Intelligence...</p>
                    </div>
                ) : (
                    <>
                        {aiData && (
                            <div className="mb-24 animate-in fade-in slide-in-from-bottom-6 duration-1000">
                                <MergexIntelligence 
                                    query={query} 
                                    summary={aiData.summary} 
                                    keyPoints={aiData.keyPoints} 
                                />
                            </div>
                        )}

                        <div className="space-y-12">
                            <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">
                                Insights related to <span className="bg-linear-to-b from-purple-400 to-purple-800 bg-clip-text text-transparent capitalize">"{query}"</span>
                            </h2>
                            
                            {blogs.length > 0 ? (
                                <BlogGrid articles={blogs} />
                            ) : (
                                <div className="py-24 text-center border-2 border-dashed border-gray-100 rounded-3xl">
                                    <p className="text-gray-400 text-lg italic">
                                        No specific articles found, but the Mergex Intelligence insights above can guide your next steps.
                                    </p>
                                </div>
                            )}
                        </div>
                    </>
                )}
            </main>
        </div>
    );
}
