"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";

type BlogPost = {
  id: string;
  title: string;
  excerpt: string;
  image: string;
  slug: string;
  date: string;
  readTime: string;
  category: string;
};

type BlogGridProps = {
  posts?: BlogPost[];
  activeCategory?: string;
};

// Mock data for blog posts
const mockPosts: BlogPost[] = [
  {
    id: "1",
    title: "5 startup design mistakes to avoid",
    excerpt: "Learn the common design pitfalls that can hurt your startup's growth and how to avoid them.",
    image: "/blog-1.jpg",
    slug: "startup-design-mistakes",
    date: "May 15, 2023",
    readTime: "5 min read",
    category: "Design"
  },
  {
    id: "2",
    title: "Building scalable SaaS products",
    excerpt: "Discover the architecture and design principles behind highly scalable SaaS applications.",
    image: "/blog-2.jpg",
    slug: "building-scalable-saas",
    date: "June 2, 2023",
    readTime: "8 min read",
    category: "Startups"
  },
  {
    id: "3",
    title: "The rise of purple-black branding in 2025",
    excerpt: "Explore why the purple-black color scheme is dominating tech and startup branding.",
    image: "/blog-3.jpg",
    slug: "purple-black-branding-trend",
    date: "June 18, 2023",
    readTime: "4 min read",
    category: "Design"
  },
  {
    id: "4",
    title: "How we increased conversion by 200%",
    excerpt: "A case study on how we transformed a client's website to dramatically boost conversions.",
    image: "/blog-4.jpg",
    slug: "conversion-case-study",
    date: "July 5, 2023",
    readTime: "6 min read",
    category: "Case Studies"
  },
  {
    id: "5",
    title: "The future of AI in creative workflows",
    excerpt: "How artificial intelligence is changing the game for designers and creative professionals.",
    image: "/blog-5.jpg",
    slug: "ai-creative-workflows",
    date: "July 22, 2023",
    readTime: "7 min read",
    category: "AI"
  },
  {
    id: "6",
    title: "Designing for accessibility: A complete guide",
    excerpt: "Learn how to make your digital products accessible to everyone without sacrificing aesthetics.",
    image: "/blog-6.jpg",
    slug: "accessibility-design-guide",
    date: "August 10, 2023",
    readTime: "9 min read",
    category: "Design"
  }
];

const BlogGrid = ({ 
  posts = mockPosts,
  activeCategory = "All"
}: BlogGridProps) => {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  // Filter posts by category if needed
  const filteredPosts = activeCategory === "All" 
    ? posts 
    : posts.filter(post => post.category === activeCategory);

  return (
    <section className="w-full py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredPosts.map((post, index) => (
            <motion.div
              key={post.id}
              className="group overflow-hidden rounded-xl border border-gray-800 bg-black/40 backdrop-blur-sm transition-all duration-300 hover:border-purple-500/50"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              onHoverStart={() => setHoveredId(post.id)}
              onHoverEnd={() => setHoveredId(null)}
              whileHover={{ y: -5 }}
            >
              <Link href={`/Blog/${post.slug}`}>
                <div className="relative h-48 w-full overflow-hidden">
                  <div className="h-full w-full bg-gray-800">
                    {/* Placeholder for actual image */}
                    <div className="flex h-full w-full items-center justify-center text-gray-600">
                      Blog Image
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="mb-3 flex items-center text-sm text-gray-400">
                    <span>{post.date}</span>
                    <span className="mx-2">•</span>
                    <span className="flex items-center">
                      <Clock className="mr-1 h-3 w-3" />
                      {post.readTime}
                    </span>
                  </div>
                  
                  <h3 className="mb-2 text-xl font-bold text-white transition-colors duration-300 group-hover:text-purple-400">
                    {post.title}
                  </h3>
                  
                  <p className="mb-4 text-gray-300">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center text-purple-400 transition-all duration-300 group-hover:translate-x-2">
                    <span className="font-medium">Read More</span>
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
        
        {filteredPosts.length === 0 && (
          <div className="flex h-40 w-full items-center justify-center rounded-lg border border-gray-800 bg-black/20">
            <p className="text-gray-400">No posts found in this category.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default BlogGrid;