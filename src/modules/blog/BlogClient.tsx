"use client";

import React, { useState } from "react";
import { FeaturedPost } from "./components/FeaturedPost";
import { BlogGrid } from "./components/BlogGrid";
import { BlogSearchBar } from "./components/BlogSearchBar";
import { BlogPagination } from "./components/BlogPagination";
import { BlogCTA } from "./components/BlogCTA";
import { articles, featuredArticles } from "./constants";

const ITEMS_PER_PAGE = 6;

export default function BlogClient() {
    const [currentPage, setCurrentPage] = useState(1);
    
    const totalPages = Math.ceil(articles.length / ITEMS_PER_PAGE);
    const paginatedArticles = articles.slice(
        (currentPage - 1) * ITEMS_PER_PAGE,
        currentPage * ITEMS_PER_PAGE
    );

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <div className="min-h-screen bg-white pt-20 md:pt-24">
            <main className="container mx-auto max-w-[1720px] px-4 pb-24 md:px-8">
                {featuredArticles.length > 0 && <FeaturedPost articles={featuredArticles} />}
                
                <div className={featuredArticles.length > 0 ? "" : "pt-8"}>
                    <BlogSearchBar />
                </div>
                
                <div className="mt-20 md:mt-32">
                    <div className="mb-8 flex flex-col gap-4">
                        <div className="flex items-center gap-2">
                            <div className="size-1.5 rounded-full bg-gray-900" />
                            <span className="text-sm font-medium text-gray-500">Blog and articles</span>
                        </div>
                        <h2 className="text-4xl font-bold tracking-tight text-gray-900 md:text-5xl lg:text-6xl">
                            Latest insights and trends
                        </h2>
                    </div>
                    
                    {articles.length > 0 ? (
                        <>
                            <BlogGrid articles={paginatedArticles} />

                            {totalPages > 1 && (
                                <div className="mt-12 pb-16 border-b border-gray-100">
                                    <BlogPagination 
                                        currentPage={currentPage}
                                        totalPages={totalPages}
                                        onPageChange={handlePageChange}
                                    />
                                </div>
                            )}
                        </>
                    ) : (
                        <div className="py-24 flex flex-col items-center justify-center text-center border-2 border-dashed border-purple-100 rounded-3xl bg-purple-50/20 my-12 px-6">
                            <div className="w-full max-w-[280px] mb-8 drop-shadow-[0_0_20px_rgba(167,139,250,0.15)]">
                                <img 
                                    src="/icons/undraw_taken_mshk.svg" 
                                    alt="No articles" 
                                    className="w-full h-auto brightness-[0.9] saturate-[1.2]"
                                />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 tracking-tight mb-3">No articles published yet</h3>
                            <p className="text-gray-500 max-w-sm mx-auto text-lg leading-relaxed">
                                We're brewing some amazing content. Check back soon for deep dives into AI and product strategy.
                            </p>
                        </div>
                    )}
                </div>
                
                <BlogCTA />
            </main>
        </div>
    );
}
