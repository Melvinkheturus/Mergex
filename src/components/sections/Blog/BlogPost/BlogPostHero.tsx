"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

type BlogPostHeroProps = {
  title: string;
  author?: string;
  date?: string;
  readTime?: string;
  category?: string;
  featuredImage?: string;
};

const BlogPostHero = ({
  title = "5 Startup Design Mistakes to Avoid",
  author = "Mergex Team",
  date = "Aug 16, 2025",
  readTime = "6 min read",
  category = "Startups",
  featuredImage = "/images/blog/startup-mistakes.jpg",
}: BlogPostHeroProps) => {
  return (
    <section className="w-full py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl">
          {/* Category Tag */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6"
          >
            <Link
              href={`/Blog?tag=${category.toLowerCase()}`}
              className="inline-block rounded-full bg-purple-600/20 px-4 py-1 text-sm font-medium text-purple-400 transition-colors duration-300 hover:bg-purple-600/30"
            >
              {category}
            </Link>
          </motion.div>

          {/* Title */}
          <motion.h1
            className="mb-6 text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {title}
          </motion.h1>

          {/* Metadata */}
          <motion.div
            className="mb-10 flex flex-wrap items-center gap-3 text-gray-400"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <span>By: {author}</span>
            <span className="text-gray-600">•</span>
            <span>{date}</span>
            <span className="text-gray-600">•</span>
            <span>{readTime}</span>
          </motion.div>

          {/* Featured Image */}
          {featuredImage && (
            <motion.div
              className="relative mb-10 h-[300px] w-full overflow-hidden rounded-xl md:h-[400px] lg:h-[500px]"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Image
                src={featuredImage}
                alt={title}
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};

export default BlogPostHero;