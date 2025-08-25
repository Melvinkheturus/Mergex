"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

type SidebarProps = {
  recentPosts?: {
    title: string;
    slug: string;
  }[];
  popularPosts?: {
    title: string;
    slug: string;
  }[];
  tags?: string[];
};

const Sidebar = ({
  recentPosts = [
    { title: "How AI is reshaping design workflows", slug: "ai-design-workflows" },
    { title: "5 startup design mistakes to avoid", slug: "startup-design-mistakes" },
    { title: "Building scalable SaaS products", slug: "building-scalable-saas" },
  ],
  popularPosts = [
    { title: "The rise of purple-black branding in 2025", slug: "purple-black-branding-trend" },
    { title: "How we increased conversion by 200%", slug: "conversion-case-study" },
    { title: "The future of AI in creative workflows", slug: "ai-creative-workflows" },
  ],
  tags = ["Design", "Startups", "AI", "Development", "Case Studies", "Growth", "UX"],
}: SidebarProps) => {
  return (
    <div className="space-y-8">
      {/* Recent Posts */}
      <motion.div
        className="rounded-xl border border-gray-800 bg-black/40 p-6 backdrop-blur-sm"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h3 className="mb-4 text-xl font-bold text-white">Recent Posts</h3>
        <ul className="space-y-3">
          {recentPosts.map((post, index) => (
            <li key={index}>
              <Link 
                href={`/Blog/${post.slug}`}
                className="block text-gray-300 transition-colors duration-300 hover:text-purple-400"
              >
                {post.title}
              </Link>
            </li>
          ))}
        </ul>
      </motion.div>

      {/* Popular Posts */}
      <motion.div
        className="rounded-xl border border-gray-800 bg-black/40 p-6 backdrop-blur-sm"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <h3 className="mb-4 text-xl font-bold text-white">Popular Posts</h3>
        <ul className="space-y-3">
          {popularPosts.map((post, index) => (
            <li key={index}>
              <Link 
                href={`/Blog/${post.slug}`}
                className="block text-gray-300 transition-colors duration-300 hover:text-purple-400"
              >
                {post.title}
              </Link>
            </li>
          ))}
        </ul>
      </motion.div>

      {/* Tags */}
      <motion.div
        className="rounded-xl border border-gray-800 bg-black/40 p-6 backdrop-blur-sm"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <h3 className="mb-4 text-xl font-bold text-white">Tags</h3>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <Link 
              key={index} 
              href={`/Blog?tag=${tag.toLowerCase()}`}
              className="rounded-full border border-gray-700 bg-black/20 px-3 py-1 text-sm text-gray-300 transition-colors duration-300 hover:border-purple-500 hover:text-white"
            >
              {tag}
            </Link>
          ))}
        </div>
      </motion.div>

      {/* CTA */}
      <motion.div
        className="rounded-xl border border-gray-800 bg-gradient-to-b from-purple-900/20 to-black/40 p-6 text-center backdrop-blur-sm"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <h3 className="mb-3 text-xl font-bold text-white">Ready to grow?</h3>
        <p className="mb-4 text-gray-300">Let's turn these insights into action for your business.</p>
        <Link 
          href="/Contact"
          className="group inline-flex items-center rounded-full bg-purple-600 px-4 py-2 font-medium text-white transition-all duration-300 hover:bg-purple-700"
        >
          <span>🚀 Partner With Us</span>
          <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      </motion.div>
    </div>
  );
};

export default Sidebar;