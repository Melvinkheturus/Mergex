import React from "react";
import { BlogCard } from "./BlogCard";
import { type Article } from "../types";

interface BlogGridProps {
    articles: Article[];
}

export const BlogGrid = ({ articles }: BlogGridProps) => {
    return (
        <section className="py-12 md:py-16">
            <div className="grid grid-cols-1 gap-x-12 gap-y-16 md:grid-cols-2">
                {articles.map((article) => (
                    <BlogCard key={article.id} article={article} />
                ))}
            </div>
        </section>
    );
};
