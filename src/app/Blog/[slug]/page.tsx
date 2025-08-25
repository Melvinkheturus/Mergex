"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

// Import Blog Post Components
import BlogPostHero from "@/components/sections/Blog/BlogPost/BlogPostHero";
import BlogPostContent from "@/components/sections/Blog/BlogPost/BlogPostContent";
import BlogPostEnhancements from "@/components/sections/Blog/BlogPost/BlogPostEnhancements";
import AuthorBio from "@/components/sections/Blog/BlogPost/AuthorBio";
import RelatedPosts from "@/components/sections/Blog/BlogPost/RelatedPosts";
import BlogPostCTA from "@/components/sections/Blog/BlogPost/BlogPostCTA";
import EmptyState from "@/components/sections/Blog/BlogPost/EmptyState";

// Mock data for blog posts
const blogPosts = [
  {
    slug: "startup-design-mistakes",
    title: "5 Startup Design Mistakes to Avoid",
    content: (
      <>
        <h2>The Problem with Most Startup Designs</h2>
        <p>
          When launching a startup, design often takes a backseat to functionality. This is understandable—you want to get your product to market quickly. However, neglecting design can severely impact your ability to attract and retain users.
        </p>
        
        <p>
          In our experience working with over 50 startups, we've identified five common design mistakes that can sabotage your growth potential before you even get started.
        </p>
        
        <h3>1. Prioritizing Aesthetics Over Usability</h3>
        <p>
          Many startups fall into the trap of creating visually stunning interfaces that fail to deliver on basic usability principles. While a beautiful design might attract initial attention, users will quickly abandon your product if they can't figure out how to use it.
        </p>
        
        <blockquote>
          <p>"Users don't care how pretty your interface is if they can't accomplish their goals. Design should remove friction, not create it."</p>
        </blockquote>
        
        <h3>2. Inconsistent Visual Language</h3>
        <p>
          Another common mistake is failing to establish a consistent visual language across your product. This includes everything from color schemes and typography to button styles and iconography.
        </p>
        
        <h3>3. Neglecting Mobile Responsiveness</h3>
        <p>
          In 2025, over 70% of web traffic comes from mobile devices. Yet many startups still design for desktop first, treating mobile as an afterthought. This approach inevitably leads to compromised mobile experiences that frustrate users.
        </p>
        
        <h3>4. Overlooking Accessibility</h3>
        <p>
          Accessibility is not just a nice-to-have—it's essential for reaching the widest possible audience. Many startups ignore basic accessibility principles, effectively excluding millions of potential users with disabilities.
        </p>
        
        <h3>5. Designing in a Vacuum</h3>
        <p>
          Perhaps the most dangerous mistake is designing without user feedback. Many founders fall in love with their own ideas and fail to validate them with real users until it's too late.
        </p>
      </>
    ),
    author: {
      name: "Alex Morgan",
      bio: "UX Design Lead at Mergex with 10+ years of experience helping startups build user-centered products.",
      image: "/images/authors/alex-morgan.jpg",
      socialLinks: [
        { platform: "twitter", url: "https://twitter.com/alexmorgan" },
        { platform: "linkedin", url: "https://linkedin.com/in/alexmorgan" },
        { platform: "website", url: "https://alexmorgan.design" }
      ]
    },
    publishDate: "Aug 16, 2025",
    readTime: "6 min read",
    category: "Startups",
    featuredImage: "/images/blog/startup-mistakes.jpg",
    relatedPosts: [
      {
        id: "2",
        title: "Building scalable SaaS products",
        slug: "building-scalable-saas",
        category: "Startups",
        image: "/images/blog/saas-products.jpg",
        date: "Aug 10, 2025"
      },
      {
        id: "3",
        title: "The rise of purple-black branding",
        slug: "purple-black-branding-trend",
        category: "Design",
        image: "/images/blog/purple-black.jpg",
        date: "Aug 5, 2025"
      },
      {
        id: "4",
        title: "How we increased conversion by 200%",
        slug: "conversion-case-study",
        category: "Case Studies",
        image: "/images/blog/conversion.jpg",
        date: "July 28, 2025"
      }
    ]
  },
  {
    slug: "building-scalable-saas",
    title: "Building Scalable SaaS Products",
    content: (
      <>
        <h2>Architecting for Growth</h2>
        <p>
          Building a SaaS product that can scale effectively is one of the most challenging aspects of modern software development. Many startups begin with a monolithic architecture that works well for their MVP but quickly becomes a bottleneck as they grow.
        </p>
        
        <p>
          In this article, we'll explore the key architectural decisions that can set your SaaS product up for long-term success and scalability.
        </p>
        
        <h3>1. Microservices vs. Monolith</h3>
        <p>
          The debate between microservices and monolithic architectures continues to rage in the development community. While microservices offer better scalability and team autonomy, they also introduce complexity in deployment, monitoring, and inter-service communication.
        </p>
        
        <blockquote>
          <p>"Don't start with microservices. Start with a well-structured monolith that's designed for eventual decomposition into services when needed."</p>
        </blockquote>
        
        <h3>2. Database Considerations</h3>
        <p>
          Your database choice and design can make or break your SaaS application's scalability. Consider these factors when making your decision:
        </p>
        
        <ul>
          <li>Read vs. write optimization needs</li>
          <li>Data consistency requirements</li>
          <li>Multi-tenancy approach</li>
          <li>Horizontal scaling capabilities</li>
        </ul>
      </>
    ),
    author: {
      name: "Jordan Chen",
      bio: "Lead Cloud Architect at Mergex specializing in scalable infrastructure for high-growth startups.",
      image: "/images/authors/jordan-chen.jpg",
      socialLinks: [
        { platform: "twitter", url: "https://twitter.com/jordanchen" },
        { platform: "linkedin", url: "https://linkedin.com/in/jordanchen" }
      ]
    },
    publishDate: "Aug 10, 2025",
    readTime: "8 min read",
    category: "Development",
    featuredImage: "/images/blog/saas-architecture.jpg",
    relatedPosts: [
      {
        id: "1",
        title: "5 Startup Design Mistakes to Avoid",
        slug: "startup-design-mistakes",
        category: "Startups",
        image: "/images/blog/startup-mistakes.jpg",
        date: "Aug 16, 2025"
      },
      {
        id: "5",
        title: "The future of AI in creative workflows",
        slug: "ai-creative-workflows",
        category: "AI",
        image: "/images/blog/ai-creative.jpg",
        date: "July 22, 2025"
      }
    ]
  },
  {
    slug: "how-ai-reshaping-design-workflows",
    title: "How AI is Reshaping Design Workflows",
    content: (
      <>
        <h2>The AI Revolution in Design</h2>
        <p>
          Artificial intelligence is transforming the way designers work, from automating repetitive tasks to generating creative concepts and streamlining collaboration. This shift is not just about efficiency—it's fundamentally changing what's possible in design.
        </p>
        
        <p>
          In this article, we'll explore how AI is being integrated into design workflows and what this means for the future of creative professionals.
        </p>
        
        <h3>1. Automated Design Systems</h3>
        <p>
          AI-powered design systems can now generate consistent UI components, layouts, and even entire pages based on brand guidelines and design principles. This allows designers to focus on higher-level creative decisions while ensuring consistency across products.
        </p>
        
        <blockquote>
          <p>"AI won't replace designers, but designers who use AI will replace those who don't."</p>
        </blockquote>
        
        <h3>2. Generative Design</h3>
        <p>
          Generative AI tools can now produce countless design variations based on initial parameters, helping designers explore a wider range of possibilities than would be feasible manually. This is particularly valuable in logo design, typography, and pattern creation.
        </p>
      </>
    ),
    author: {
      name: "Maya Patel",
      bio: "AI & Design Innovation Lead at Mergex, exploring the intersection of artificial intelligence and creative processes.",
      image: "/images/authors/maya-patel.jpg",
      socialLinks: [
        { platform: "twitter", url: "https://twitter.com/mayapatel" },
        { platform: "linkedin", url: "https://linkedin.com/in/mayapatel" },
        { platform: "website", url: "https://mayapatel.ai" }
      ]
    },
    publishDate: "Aug 15, 2025",
    readTime: "7 min read",
    category: "AI",
    featuredImage: "/images/blog/ai-design.jpg",
    relatedPosts: [
      {
        id: "5",
        title: "The future of AI in creative workflows",
        slug: "ai-creative-workflows",
        category: "AI",
        image: "/images/blog/ai-creative.jpg",
        date: "July 22, 2025"
      },
      {
        id: "3",
        title: "The rise of purple-black branding",
        slug: "purple-black-branding-trend",
        category: "Design",
        image: "/images/blog/purple-black.jpg",
        date: "Aug 5, 2025"
      }
    ]
  }
];

export default function BlogPostPage() {
  const router = useRouter();
  const params = useParams();
  const slug = params?.slug as string;
  
  const [post, setPost] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // In a real application, this would be an API call
    // For now, we'll simulate loading and find the post by slug
    const timer = setTimeout(() => {
      const foundPost = blogPosts.find(p => p.slug === slug);
      setPost(foundPost || null);
      setLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, [slug]);

  // Handle loading state
  if (loading) {
    return (
      <main className="min-h-screen bg-black">
        <Navbar />
        <div className="container mx-auto flex min-h-[60vh] items-center justify-center px-4">
          <div className="h-16 w-16 animate-spin rounded-full border-4 border-purple-600 border-t-transparent"></div>
        </div>
        <Footer />
      </main>
    );
  }

  // Handle post not found
  if (!post) {
    return (
      <main className="min-h-screen bg-black">
        <Navbar />
        <EmptyState 
          title="Blog post not found"
          subtitle="The article you're looking for doesn't exist or has been moved."
          buttons={[
            { text: "📚 Back to Blog", href: "/Blog", primary: true },
            { text: "🔍 Browse Portfolio", href: "/Portfolio", primary: false }
          ]}
        />
        <Footer />
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-black">
      <Navbar />
      
      {/* Reading Progress Bar and Social Share */}
      <BlogPostEnhancements 
        url={`https://mergex.com/Blog/${post.slug}`}
        title={post.title}
        showSocialShare={true}
        showProgressBar={true}
      />
      
      {/* Hero Section */}
      <BlogPostHero 
        title={post.title}
        author={post.author.name}
        date={post.publishDate}
        readTime={post.readTime}
        category={post.category}
        featuredImage={post.featuredImage}
      />
      
      {/* Blog Content */}
      <BlogPostContent>
        {post.content}
      </BlogPostContent>
      
      {/* Author Bio */}
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl">
          <AuthorBio 
            name={post.author.name}
            bio={post.author.bio}
            image={post.author.image}
            socialLinks={post.author.socialLinks}
          />
        </div>
      </div>
      
      {/* Related Posts */}
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-5xl">
          <RelatedPosts 
            posts={post.relatedPosts}
            title="You might also like"
          />
        </div>
      </div>
      
      {/* CTA Section */}
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl">
          <BlogPostCTA 
            title="Got an idea worth merging with innovation?"
            subtitle="Your story could be the next big case study. Let's create it together."
            buttons={[
              { text: "🚀 Start a Project", href: "/Contact", primary: true },
              { text: "🤝 Partner With Us", href: "/Partner", primary: false }
            ]}
          />
        </div>
      </div>
      
      <Footer />
    </main>
  );
}