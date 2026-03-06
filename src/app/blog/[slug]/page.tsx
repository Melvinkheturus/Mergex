import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { client } from '@/sanity/lib/client';
import { FORMAT_META } from '@/modules/insights/content/insights';
import { PortableText, PortableTextComponents } from '@portabletext/react';

interface PostBody {
    _type: string;
    [key: string]: unknown;
}

interface Post {
    _id: string;
    title: string;
    slug: { current: string };
    excerpt?: string;
    body?: PostBody[];
    insightFormat?: string;
    categories?: string[];
    publishedAt?: string;
    tldr?: string;
    keyTakeaway?: string;
    keyConcepts?: string[];
    relatedTopics?: string[];
    author?: { name: string; role?: string };
    tags?: string[];
    featured?: boolean;
}

async function getPost(slug: string): Promise<Post | null> {
    try {
        const post = await client.fetch<Post | null>(
            `*[_type == "post" && slug.current == $slug][0] {
                _id,
                title,
                slug,
                excerpt,
                body,
                insightFormat,
                categories,
                publishedAt,
                tldr,
                keyTakeaway,
                keyConcepts,
                relatedTopics,
                tags,
                featured,
                "author": author { name, role }
            }`,
            { slug }
        );
        return post;
    } catch {
        return null;
    }
}

export async function generateMetadata({
    params,
}: {
    params: Promise<{ slug: string }>;
}): Promise<Metadata> {
    const { slug } = await params;
    const post = await getPost(slug);
    if (!post) return { title: 'Insight Not Found | Mergex' };

    return {
        title: `${post.title} | Mergex Intelligence`,
        description: post.tldr ?? post.excerpt ?? '',
        openGraph: {
            title: post.title,
            description: post.tldr ?? post.excerpt ?? '',
            type: 'article',
        },
    };
}

function formatDate(dateStr: string) {
    return new Date(dateStr).toLocaleDateString('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric',
    });
}

const ptComponents: PortableTextComponents = {
    block: {
        normal: ({ children }) => (
            <p className="text-gray-700 leading-relaxed text-base md:text-lg mb-5">{children}</p>
        ),
        h2: ({ children }) => (
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-10 mb-4 leading-snug">{children}</h2>
        ),
        h3: ({ children }) => (
            <h3 className="text-xl font-bold text-gray-900 mt-8 mb-3 leading-snug">{children}</h3>
        ),
        h4: ({ children }) => (
            <h4 className="text-lg font-semibold text-gray-800 mt-6 mb-2">{children}</h4>
        ),
        blockquote: ({ children }) => (
            <blockquote className="border-l-4 border-violet-400 pl-5 py-1 my-6 italic text-gray-600 text-lg">
                {children}
            </blockquote>
        ),
    },
    marks: {
        strong: ({ children }) => <strong className="font-bold text-gray-900">{children}</strong>,
        em: ({ children }) => <em className="italic">{children}</em>,
        code: ({ children }) => (
            <code className="bg-gray-100 rounded px-1.5 py-0.5 text-sm font-mono text-violet-700">{children}</code>
        ),
        link: ({ children, value }) => (
            <a
                href={value?.href}
                className="text-violet-600 underline underline-offset-2 hover:text-violet-800 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
            >
                {children}
            </a>
        ),
    },
};

export default async function InsightPostPage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;
    const post = await getPost(slug);

    if (!post) notFound();

    const fmt = post.insightFormat ? FORMAT_META[post.insightFormat] : null;

    return (
        <main className="min-h-screen pt-24 pb-20">
            {/* Hero */}
            <div className="relative overflow-hidden">
                {/* Purple gradient */}
                <div
                    className="pointer-events-none absolute inset-x-0 top-0 h-[400px]"
                    style={{
                        background:
                            'radial-gradient(ellipse 80% 60% at 50% -10%, rgba(139, 92, 246, 0.18) 0%, rgba(196,181,253,0.08) 50%, transparent 80%)',
                    }}
                />

                <div className="relative max-w-3xl mx-auto px-6 md:px-10 pt-10 pb-12">
                    {/* Back link */}
                    <Link
                        href="/blog"
                        className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-gray-700 transition-colors mb-8"
                    >
                        ← Back to Insights
                    </Link>

                    {/* Format badge */}
                    {fmt && (
                        <div className="mb-5">
                            <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold border ${fmt.color} ${fmt.bg} ${fmt.border}`}>
                                {fmt.label}
                            </span>
                        </div>
                    )}

                    {/* Title */}
                    <h1 className="text-3xl md:text-5xl font-bold text-gray-950 leading-tight mb-5">
                        {post.title}
                    </h1>

                    {/* TL;DR */}
                    {post.tldr && (
                        <p className="text-lg text-violet-700 font-medium mb-6 leading-relaxed">
                            {post.tldr}
                        </p>
                    )}

                    {/* Meta row */}
                    <div className="flex flex-wrap items-center gap-3 text-sm text-gray-400 border-t border-gray-100 pt-5">
                        {post.author?.name && (
                            <span className="flex items-center gap-1.5">
                                <span className="w-6 h-6 rounded-full bg-violet-100 text-violet-700 flex items-center justify-center text-[10px] font-bold">
                                    {post.author.name.charAt(0)}
                                </span>
                                <span className="font-medium text-gray-700">{post.author.name}</span>
                                {post.author.role && <span>· {post.author.role}</span>}
                            </span>
                        )}
                        {post.publishedAt && <span>{formatDate(post.publishedAt)}</span>}
                        {post.categories && post.categories.length > 0 && (
                            <span className="flex gap-1.5">
                                {post.categories.map((c) => (
                                    <span key={c} className="px-2 py-0.5 bg-gray-100 rounded-full text-[11px] font-medium text-gray-500">
                                        {c}
                                    </span>
                                ))}
                            </span>
                        )}
                    </div>
                </div>
            </div>

            {/* Divider */}
            <div className="max-w-3xl mx-auto px-6 md:px-10">
                <div className="h-px bg-gray-100" />
            </div>

            <div className="max-w-3xl mx-auto px-6 md:px-10 mt-10">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                    {/* Main body */}
                    <div className="lg:col-span-2">
                        {post.body && post.body.length > 0 ? (
                            <PortableText value={post.body} components={ptComponents} />
                        ) : (
                            <div className="py-16 text-center">
                                <p className="text-gray-400 text-lg">Full article coming soon.</p>
                                <p className="text-gray-300 text-sm mt-2">
                                    This insight is being written. Check back shortly.
                                </p>
                            </div>
                        )}
                    </div>

                    {/* Sidebar — LLM-friendly structured sections */}
                    <div className="flex flex-col gap-6 lg:sticky lg:top-28 self-start">
                        {/* Key Takeaway */}
                        {post.keyTakeaway && (
                            <div className="bg-violet-50 border border-violet-100 rounded-2xl p-5">
                                <p className="text-[10px] font-bold text-violet-500 uppercase tracking-wider mb-2">
                                    Key Takeaway
                                </p>
                                <p className="text-sm text-gray-800 leading-relaxed font-medium">
                                    {post.keyTakeaway}
                                </p>
                            </div>
                        )}

                        {/* Key Concepts */}
                        {post.keyConcepts && post.keyConcepts.length > 0 && (
                            <div className="bg-gray-50 border border-gray-100 rounded-2xl p-5">
                                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-3">
                                    Key Concepts
                                </p>
                                <div className="flex flex-wrap gap-1.5">
                                    {post.keyConcepts.map((concept) => (
                                        <span
                                            key={concept}
                                            className="px-2.5 py-1 bg-white border border-gray-200 rounded-lg text-xs text-gray-600 font-medium"
                                        >
                                            {concept}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Related Topics */}
                        {post.relatedTopics && post.relatedTopics.length > 0 && (
                            <div className="bg-gray-50 border border-gray-100 rounded-2xl p-5">
                                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-3">
                                    Related Topics
                                </p>
                                <ul className="flex flex-col gap-1.5">
                                    {post.relatedTopics.map((topic) => (
                                        <li key={topic} className="text-sm text-gray-600 flex items-center gap-2">
                                            <span className="text-violet-400">→</span> {topic}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}

                        {/* Tags */}
                        {post.tags && post.tags.length > 0 && (
                            <div className="bg-gray-50 border border-gray-100 rounded-2xl p-5">
                                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-3">
                                    Tags
                                </p>
                                <div className="flex flex-wrap gap-1.5">
                                    {post.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="px-2.5 py-1 bg-white border border-gray-200 rounded-lg text-xs text-gray-500"
                                        >
                                            #{tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                {/* Post footer CTA */}
                <div className="mt-16 pt-10 border-t border-gray-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                    <div>
                        <p className="text-gray-500 text-sm leading-relaxed max-w-md">
                            If this idea resonates with your business, let&apos;s discuss it.
                        </p>
                    </div>
                    <Link
                        href="/contact"
                        className="shrink-0 inline-flex items-center gap-2 px-6 py-3 bg-gray-950 text-white rounded-xl font-semibold text-sm hover:bg-violet-700 transition-colors duration-200"
                    >
                        Start a Conversation →
                    </Link>
                </div>
            </div>
        </main>
    );
}
