import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { type Article } from "../types";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

interface FeaturedPostProps {
    articles: Article[];
}

export const FeaturedPost = ({ articles }: FeaturedPostProps) => {
    return (
        <section className="mx-auto w-full max-w-[1720px] relative">
            <Swiper
                modules={[Pagination, Autoplay]}
                spaceBetween={0}
                slidesPerView={1}
                pagination={{ 
                    clickable: true,
                    bulletClass: "swiper-pagination-bullet !bg-white/30 !w-8 !h-1 !rounded-none !m-0 transition-all duration-300",
                    bulletActiveClass: "!bg-white !w-12"
                }}
                autoplay={{ delay: 10000, disableOnInteraction: false }}
                loop={true}
                className="featured-swiper w-full rounded-3xl overflow-hidden shadow-2xl group"
            >
                {articles.map((article) => (
                    <SwiperSlide key={article.id}>
                        <div
                            className="relative block w-full h-[500px] md:h-[600px] lg:h-[680px] bg-gray-900 overflow-hidden"
                        >
                            <img 
                                src={article.thumbnailUrl} 
                                alt={article.title} 
                                className="absolute inset-0 size-full object-cover transition-transform duration-1000" 
                            />
                            
                            {/* Subtle bottom overlay */}
                            <div className="absolute inset-0 bg-linear-to-t from-black/95 via-black/30 to-transparent opacity-90" />

                            <div className="absolute inset-x-0 bottom-0 w-full p-8 md:p-12 lg:p-16">
                                <div className="flex flex-col gap-4 max-w-4xl">
                                    <div className="flex flex-col gap-2">
                                        <span className="text-xs font-bold uppercase tracking-[0.2em] text-white/70">
                                            Featured
                                        </span>
                                        <h2 className="text-2xl font-bold text-white md:text-3xl lg:text-4xl tracking-tight leading-tight">
                                            {article.title}
                                        </h2>
                                    </div>
                                    <p className="text-sm text-white/60 line-clamp-2 md:text-base font-light leading-relaxed max-w-2xl">
                                        {article.summary}
                                    </p>

                                    {/* Refined CTAs */}
                                    <div className="mt-6 flex flex-wrap items-center gap-4">
                                        <a
                                            href={article.href}
                                            className="px-8 py-3 bg-white text-black hover:bg-gray-100 rounded-xl font-semibold text-sm transition-all duration-300 shadow-lg"
                                        >
                                            Read Insight
                                        </a>
                                        <button
                                            onClick={() => window.alert('AI Insight Agent Triggered')}
                                            className="px-8 py-3 bg-white/10 hover:bg-white/20 rounded-xl border border-white/20 text-white font-semibold text-sm backdrop-blur-md transition-all duration-300 shadow-lg"
                                        >
                                            Ask About This
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
            
            <style jsx global>{`
                .featured-swiper .swiper-pagination {
                    bottom: 2.5rem !important;
                    left: auto !important;
                    right: 4rem !important;
                    width: auto !important;
                    display: flex !important;
                    gap: 0.5rem !important;
                }
                @media (max-width: 768px) {
                    .featured-swiper .swiper-pagination {
                        bottom: 1.5rem !important;
                        right: 0 !important;
                        left: 0 !important;
                        justify-content: center !important;
                    }
                }
            `}</style>
        </section>
    );
};
