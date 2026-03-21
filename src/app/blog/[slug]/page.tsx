import React from "react";
import { articles } from "@/modules/blog/constants";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

interface PageProps {
    params: {
        slug: string;
    };
}

export default async function BlogPostPage({ params }: PageProps) {
    const { slug } = await params;
    // In a real app, we'd fetch from Sanity or similar.
    // For now, we'll try to match the slug to one of our articles.
    const article = articles.find((a) => a.id === slug || a.title.toLowerCase().replace(/ /g, "-") === slug);

    if (!article) {
        notFound();
    }

    return (
        <main className="container mx-auto max-w-4xl px-4 py-16 md:py-24">
            <Link 
                href="/blog" 
                className="inline-flex items-center gap-2 text-sm font-semibold text-gray-500 hover:text-blue-600 transition-colors mb-12"
            >
                <ArrowLeft className="size-4" />
                Back to all posts
            </Link>

            <article className="prose prose-lg prose-blue mx-auto">
                <div className="flex flex-col gap-4 mb-8">
                    <span className="text-sm font-bold text-blue-600 uppercase tracking-widest">
                        {article.category.name}
                    </span>
                    <h1 className="text-4xl font-bold text-gray-900 md:text-5xl lg:text-6xl tracking-tight leading-tight">
                        {article.title}
                    </h1>
                    <p className="text-xl text-gray-600 leading-relaxed">
                        {article.summary}
                    </p>
                </div>

                <div className="flex items-center gap-4 mb-12 py-8 border-y border-gray-100">
                    <div className="size-14 overflow-hidden rounded-full ring-2 ring-gray-100">
                        <img src={article.author.avatarUrl} alt={article.author.name} className="size-full object-cover" />
                    </div>
                    <div className="flex flex-col">
                        <span className="text-lg font-semibold text-gray-900">{article.author.name}</span>
                        <div className="flex items-center gap-2 text-sm text-gray-500">
                            <span>{article.publishedAt}</span>
                            <span>•</span>
                            <span>{article.readingTime}</span>
                        </div>
                    </div>
                </div>

                <div className="aspect-16/9 overflow-hidden rounded-3xl mb-12 shadow-xl">
                    <img src={article.thumbnailUrl} alt={article.title} className="size-full object-cover" />
                </div>

                <div className="text-gray-700 leading-8 text-lg space-y-6">
                    <p>
                        This is a placeholder for the full blog post content. In a real application, 
                        this would be rich text content fetched from a CMS like Sanity.
                    </p>
                    <p>
                        Leveraging modular components allowed us to build this page quickly and maintainably, 
                        ensuring a consistent design across the entire blog experience.
                    </p>
                </div>
            </article>
        </main>
    );
}
