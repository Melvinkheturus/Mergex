'use client';

import Link from 'next/link';
import { FORMAT_META } from '../content/insights';

interface InsightCardProps {
    _id: string;
    title: string;
    slug: { current: string };
    excerpt?: string;
    insightFormat?: string;
    categories?: string[];
    publishedAt?: string;
    tldr?: string;
    author?: { name: string; role?: string };
    readTime?: string;
    featured?: boolean;
}

function formatDate(dateStr: string) {
    return new Date(dateStr).toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
    });
}

export function InsightCard({
    title,
    slug,
    excerpt,
    insightFormat,
    categories,
    publishedAt,
    tldr,
    author,
    readTime,
}: InsightCardProps) {
    const fmt = insightFormat ? FORMAT_META[insightFormat] : null;
    const categoryLabel = categories?.[0]
        ? categories[0].charAt(0).toUpperCase() + categories[0].slice(1)
        : null;

    return (
        <Link href={`/blog/${slug.current}`} className="block group">
            <article className="relative h-full bg-white border border-gray-100 rounded-2xl p-6 flex flex-col gap-4 transition-all duration-300 hover:border-violet-200 hover:shadow-lg hover:-translate-y-1 hover:shadow-violet-100/60">

                {/* Format badge + category */}
                <div className="flex items-center gap-2 flex-wrap">
                    {fmt && (
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-semibold border ${fmt.color} ${fmt.bg} ${fmt.border}`}>
                            {fmt.label}
                        </span>
                    )}
                    {categoryLabel && (
                        <span className="text-[11px] font-medium text-gray-400 uppercase tracking-wider">
                            {categoryLabel}
                        </span>
                    )}
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-gray-900 leading-snug group-hover:text-violet-700 transition-colors duration-200 line-clamp-2">
                    {title}
                </h3>

                {/* TL;DR or Excerpt */}
                {tldr ? (
                    <p className="text-sm text-gray-500 leading-relaxed line-clamp-2 flex-1">
                        <span className="font-semibold text-gray-700">TL;DR: </span>
                        {tldr}
                    </p>
                ) : excerpt ? (
                    <p className="text-sm text-gray-500 leading-relaxed line-clamp-2 flex-1">
                        {excerpt}
                    </p>
                ) : null}

                {/* Footer */}
                <div className="flex items-center justify-between pt-2 border-t border-gray-50 mt-auto">
                    <div className="flex flex-col">
                        {author?.name && (
                            <span className="text-xs font-semibold text-gray-700">{author.name}</span>
                        )}
                        {author?.role && (
                            <span className="text-[11px] text-gray-400">{author.role}</span>
                        )}
                    </div>
                    <div className="flex items-center gap-2 text-xs text-gray-400">
                        {readTime && <span>{readTime}</span>}
                        {publishedAt && readTime && <span>·</span>}
                        {publishedAt && <span>{formatDate(publishedAt)}</span>}
                    </div>
                </div>

                {/* Hover glow corner */}
                <div className="absolute top-0 right-0 w-24 h-24 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{ background: 'radial-gradient(circle at 100% 0%, rgba(139,92,246,0.08) 0%, transparent 70%)' }}
                />
            </article>
        </Link>
    );
}
