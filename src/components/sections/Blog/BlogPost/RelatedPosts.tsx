"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

type Post = {
  id: string;
  title: string;
  slug: string;
  excerpt?: string;
  category: string;
  image?: string;
  date?: string;
};

type RelatedPostsProps = {
  posts: Post[];
  title?: string;
};

const RelatedPosts = ({
  posts = [],
  title = "Continue Reading"
}: RelatedPostsProps) => {
  // Default mock data if no posts are provided
  const defaultPosts: Post[] = [
    {
      id: "1",
      title: "How AI is reshaping SaaS workflows",
      slug: "how-ai-is-reshaping-saas-workflows",
      excerpt: "Discover how artificial intelligence is transforming the way SaaS products operate and deliver value.",
      category: "AI",
      image: "/images/blog/placeholder-1.jpg",
      date: "Aug 10, 2025"
    },
    {
      id: "2",
      title: "The future of purple-black branding",
      slug: "future-of-purple-black-branding",
      excerpt: "Explore why the purple-black color scheme is becoming increasingly popular in modern tech branding.",
      category: "Design",
      image: "/images/blog/placeholder-2.jpg",
      date: "Aug 12, 2025"
    },
    {
      id: "3",
      title: "Scaling your MVP to a SaaS product",
      slug: "scaling-mvp-to-saas-product",
      excerpt: "Learn the essential steps to transform your minimum viable product into a full-fledged SaaS solution.",
      category: "Startups",
      image: "/images/blog/placeholder-3.jpg",
      date: "Aug 15, 2025"
    }
  ];

  // Use provided posts or default to mock data if empty
  const displayPosts = posts.length > 0 ? posts : defaultPosts;

  // Animation variants for staggered animations
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section className="my-16">
      <motion.h2 
        className="mb-8 text-center text-2xl font-bold text-white md:text-3xl"
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        {title}
      </motion.h2>

      <motion.div 
        className="grid gap-6 md:grid-cols-3"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {displayPosts.map((post) => (
          <motion.div 
            key={post.id}
            className="group overflow-hidden rounded-xl border border-gray-800 bg-black/30 transition-all duration-300 hover:border-purple-500/50 hover:shadow-lg hover:shadow-purple-500/10"
            variants={item}
          >
            <Link href={`/Blog/${post.slug}`} className="block">
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src={post.image || "/images/blog/placeholder-1.jpg"}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 rounded-full bg-purple-600 px-3 py-1 text-xs font-medium text-white">
                  {post.category}
                </div>
              </div>
              
              <div className="p-5">
                <h3 className="mb-2 text-lg font-bold text-white transition-colors group-hover:text-purple-400">
                  {post.title}
                </h3>
                
                {post.excerpt && (
                  <p className="mb-4 text-sm text-gray-400">
                    {post.excerpt.length > 100 ? `${post.excerpt.substring(0, 100)}...` : post.excerpt}
                  </p>
                )}
                
                <div className="flex items-center justify-between">
                  {post.date && (
                    <span className="text-xs text-gray-500">{post.date}</span>
                  )}
                  
                  <span className="flex items-center text-sm font-medium text-purple-400 transition-all group-hover:translate-x-1">
                    Read more
                    <ArrowRight className="ml-1 h-3 w-3" />
                  </span>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default RelatedPosts;