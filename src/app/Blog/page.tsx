"use client";

import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import BlogHero from "@/components/sections/Blog/BlogHero";
import FeaturedPost from "@/components/sections/Blog/FeaturedPost";
import BlogGrid from "@/components/sections/Blog/BlogGrid";
import Categories from "@/components/sections/Blog/Categories";
import Sidebar from "@/components/sections/Blog/Sidebar";
import BlogCTA from "@/components/sections/Blog/BlogCTA";
import EmptyState from "@/components/sections/Blog/EmptyState";

// Mock data for blog posts
const mockPosts = [
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

// Featured post data
const featuredPost = {
  id: "featured-1",
  title: "How AI is reshaping design workflows",
  excerpt: "Discover how artificial intelligence is transforming the way designers work, from automating repetitive tasks to generating creative concepts and streamlining collaboration.",
  image: "/blog-featured.jpg",
  slug: "how-ai-reshaping-design-workflows",
  date: "August 15, 2023",
  readTime: "8 min read",
  category: "AI"
};

// Blog categories
const categories = ["All", "Startups", "Design", "AI", "Case Studies", "Growth"];

export default function BlogPage() {
  // State for active category filter
  const [activeCategory, setActiveCategory] = useState("All");
  
  // Filter posts by category
  const filteredPosts = activeCategory === "All" 
    ? mockPosts 
    : mockPosts.filter(post => post.category === activeCategory);

  // Handle category change
  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
  };

  // Pagination state (for future implementation)
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;

  // Calculate pagination
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);

  // Handle page change
  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <main className="min-h-screen bg-black">
      <Navbar />
      
      {/* Hero Section */}
      <BlogHero 
        headline="Insights that Inspire Innovation."
        subtext="Explore the latest trends, stories, and strategies in design, AI, and business growth from the Mergex team."
        showSubscribe={true}
      />
      
      {/* Featured Post */}
      <FeaturedPost post={featuredPost} />
      
      {/* Categories Filter */}
      <Categories 
        categories={categories}
        activeCategory={activeCategory}
        onCategoryChange={handleCategoryChange}
      />
      
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {/* Blog Grid - Main Content */}
          <div className="lg:col-span-2">
            {currentPosts.length > 0 ? (
              <>
                <BlogGrid posts={currentPosts} activeCategory={activeCategory} />
                
                {/* Pagination */}
                {totalPages > 1 && (
                  <div className="mt-10 flex justify-center">
                    <div className="flex space-x-2">
                      {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                        <button
                          key={page}
                          onClick={() => handlePageChange(page)}
                          className={`h-10 w-10 rounded-full ${currentPage === page
                            ? 'bg-purple-600 text-white'
                            : 'border border-gray-700 bg-black/40 text-gray-300 hover:border-purple-500 hover:text-white'
                          }`}
                        >
                          {page}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </>
            ) : (
              <EmptyState 
                title="No posts found in this category"
                subtitle="Try selecting a different category or check back later for new content."
                ctaText="View All Posts"
                ctaLink="/Blog"
              />
            )}
          </div>
          
          {/* Sidebar */}
          <div className="mt-10 lg:mt-0">
            <Sidebar />
          </div>
        </div>
      </div>
      
      {/* CTA Section */}
      <BlogCTA 
        title="Ready to turn insights into action?"
        buttons={[
          { text: "🚀 Start a Project", href: "/Contact", primary: true },
          { text: "🤝 Partner With Us", href: "/Partner" }
        ]}
      />
      
      <Footer />
    </main>
  );
}