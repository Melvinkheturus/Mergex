"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

type FeaturedPostProps = {
  post?: {
    id: string;
    title: string;
    excerpt: string;
    image: string;
    slug: string;
  } | null;
};

const FeaturedPost = ({
  post = {
    id: "featured-1",
    title: "How AI is reshaping design workflows",
    excerpt: "Discover how artificial intelligence is transforming the way designers work, from automating repetitive tasks to generating creative concepts and streamlining collaboration.",
    image: "/blog-placeholder.jpg",
    slug: "how-ai-reshaping-design-workflows",
  },
}: FeaturedPostProps) => {
  if (!post) return null;

  return (
    <section className="w-full py-12">
      <div className="container mx-auto px-4">
        <motion.div
          className="mb-8 flex items-center justify-between"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-bold text-white">Featured Post</h2>
          <div className="h-[1px] flex-1 bg-gray-800 mx-4"></div>
          <Link 
            href="/Blog" 
            className="text-purple-400 hover:text-purple-300 transition-colors duration-300"
          >
            View All
          </Link>
        </motion.div>

        <motion.div
          className="overflow-hidden rounded-2xl border border-gray-800 bg-black/40 backdrop-blur-sm"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          whileHover={{ y: -5 }}
        >
          <Link href={`/Blog/${post.slug}`} className="group block">
            <div className="relative h-64 w-full overflow-hidden sm:h-80 md:h-96">
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10" />
              <div className="relative h-full w-full bg-gray-900">
                {/* Placeholder for actual image */}
                <div className="flex h-full w-full items-center justify-center bg-gray-800 text-gray-600">
                  Featured Image
                </div>
              </div>
              
              <div className="absolute bottom-0 left-0 z-20 p-6 sm:p-8">
                <h3 className="mb-3 text-2xl font-bold text-white transition-colors duration-300 group-hover:text-purple-400 md:text-3xl">
                  {post.title}
                </h3>
                <p className="mb-4 max-w-2xl text-gray-300">
                  {post.excerpt}
                </p>
                <div className="flex items-center text-purple-400 transition-all duration-300 group-hover:translate-x-2">
                  <span className="font-medium">Read More</span>
                  <ArrowRight className="ml-2 h-4 w-4" />
                </div>
              </div>
            </div>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedPost;