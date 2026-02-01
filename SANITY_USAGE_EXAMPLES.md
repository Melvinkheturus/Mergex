/**
 * Example: Using Sanity Hooks with Fallback Content
 * 
 * This file demonstrates how to use Sanity hooks in components
 * while maintaining your existing hardcoded content as fallback.
 */

import { useFeaturedPosts, useFAQsByPage, useTestimonialsByContext } from '@/modules/shared/hooks/useSanity'

// Example 1: Blog Posts with Fallback
export function FeaturedBlogSection() {
  // Define fallback content (your existing hardcoded data)
  const fallbackPosts = [
    {
      title: "Building Modular Ecosystems",
      excerpt: "How we structure multi-division tech companies...",
      slug: { current: "building-modular-ecosystems" },
      imageUrl: "/blog/post1.jpg",
    },
    // ... more fallback posts
  ]

  // Use the hook - if Sanity fails, it will use fallbackPosts
  const { data: posts, isLoading, isFallback } = useFeaturedPosts(3, fallbackPosts)

  // Optional: Log when using fallback
  if (isFallback) {
    console.log('Using fallback content for blog posts')
  }

  if (isLoading) {
    return <div>Loading...</div>
  }

  return (
    <div>
      {posts?.map((post) => (
        <article key={post._id || post.slug.current}>
          <h2>{post.title}</h2>
          <p>{post.excerpt}</p>
        </article>
      ))}
    </div>
  )
}

// Example 2: FAQs by Page Context
export function PricingFAQ() {
  const fallbackFAQs = [
    {
      question: "How does your pricing work?",
      answer: "We offer flexible engagement models...",
    },
    // ... more fallback FAQs
  ]

  const { data: faqs } = useFAQsByPage('pricing', fallbackFAQs)

  return (
    <div>
      {faqs?.map((faq, index) => (
        <div key={faq._id || index}>
          <h3>{faq.question}</h3>
          <div>{faq.answer}</div>
        </div>
      ))}
    </div>
  )
}

// Example 3: Testimonials by Division
export function LabsTestimonials() {
  const fallbackTestimonials = [
    {
      quote: "The Labs team brought incredible creativity to our campaign",
      authorName: "Jane Doe",
      authorRole: "Marketing Director",
      company: "Example Corp",
    },
  ]

  const { data: testimonials } = useTestimonialsByContext('labs', fallbackTestimonials)

  return (
    <div>
      {testimonials?.map((testimonial, index) => (
        <blockquote key={testimonial._id || index}>
          <p>{testimonial.quote}</p>
          <cite>
            {testimonial.authorName}, {testimonial.authorRole}
            {testimonial.company && ` at ${testimonial.company}`}
          </cite>
        </blockquote>
      ))}
    </div>
  )
}

// Example 4: Server Component Usage (Next.js App Router)
import * as sanityQueries from '@/services/sanity/queries'

export async function ServerSideBlogList() {
  // In server components, call queries directly
  const posts = await sanityQueries.getAllPosts()

  // Fallback to hardcoded if null
  const displayPosts = posts || [
    {
      title: "Fallback Post",
      excerpt: "This is fallback content",
    }
  ]

  return (
    <div>
      {displayPosts.map((post) => (
        <article key={post._id || post.title}>
          <h2>{post.title}</h2>
        </article>
      ))}
    </div>
  )
}

/**
 * Migration Strategy:
 * 
 * 1. Keep existing components as-is initially
 * 2. Gradually wrap sections with Sanity hooks
 * 3. Pass existing hardcoded data as fallback
 * 4. Add content to Sanity Studio
 * 5. Once content is in Sanity, remove fallback (optional)
 * 
 * Benefits:
 * - Zero downtime during migration
 * - Can test Sanity incrementally
 * - Site works even if Sanity is down
 * - No rush to migrate all content at once
 */
