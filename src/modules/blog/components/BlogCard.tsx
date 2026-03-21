import React from "react";
import { ArrowUpRight } from "lucide-react";
import { type Article } from "../types";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";

interface BlogCardProps {
    article: Article;
    isFeatured?: boolean;
}

export const BlogCard = ({ article, isFeatured }: BlogCardProps) => {
    return (
        <div className={cn("group flex flex-col gap-6", isFeatured && "md:grid md:grid-cols-2 lg:gap-12")}>
            <a href={article.href} className="relative block aspect-video overflow-hidden rounded-2xl">
                <img
                    src={article.thumbnailUrl}
                    alt={article.title}
                    className="absolute inset-0 size-full object-cover transition-transform duration-500"
                />
            </a>

            <div className="flex flex-col">
                <div className="flex items-center gap-3">
                    <span className="text-sm text-gray-500">{article.readingTime}</span>
                </div>

                <div className="mt-3 flex items-start justify-between gap-4">
                    <a href={article.href} className="flex-1">
                        <h3 className="text-xl font-semibold text-gray-900 md:text-2xl">
                            {article.title}
                        </h3>
                    </a>
                    <ArrowUpRight className="size-6 shrink-0 text-gray-400" />
                </div>

                <p className="mt-3 line-clamp-2 text-md text-gray-600">
                    {article.summary}
                </p>

                <div className="mt-6 flex items-center gap-3">
                    <div className="size-10 overflow-hidden rounded-full ring-1 ring-gray-200">
                        <img src={article.author.avatarUrl} alt={article.author.name} className="size-full object-cover" />
                    </div>
                    <div className="flex flex-col">
                        <span className="text-sm font-semibold text-gray-900">{article.author.name}</span>
                        <span className="text-sm text-gray-500">{article.publishedAt}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};
