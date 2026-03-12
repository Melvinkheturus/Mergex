/**
 * Sanity Content Integration - Usage Examples
 * 
 * This file demonstrates how to fetch content from Sanity CMS
 * using the centralized query system with fallback support.
 * 
 * All queries are in: @/sanity/lib/queries
 * All types are in: @/sanity/lib/types
 */

import { fetchWithFallback, getHomepage, getAllPosts, getAllTestimonials, getAllFAQs, getAllPricingBlocks } from '@/sanity/lib/queries';
import type { Post, Testimonial, FAQ, PricingBlock, HomepageData } from '@/sanity/lib/types';

// ============================================================================
// Example 1: Homepage Data (Singleton)
// ============================================================================

const HOMEPAGE_QUERY = `
  *[_type == "homepage"][0] {
    heroHeadline,
    heroSubheadline,
    heroCta { text, link },
    showFAQ,
    featuredTestimonials[]-> {
      quote,
      authorName,
      authorRole,
      company
    }
  }
`;

const HOMEPAGE_FALLBACK: HomepageData = {
  _id: 'fallback',
  _type: 'homepage',
  heroHeadline: 'Welcome to Mergex',
  heroSubheadline: 'Building the future of technology',
  heroCta: { text: 'Get Started', link: '/contact' },
  showFAQ: true,
};

export async function HomepageHero() {
  // Use the query with fallback data
  const content = await fetchWithFallback<HomepageData>(
    HOMEPAGE_QUERY,
    HOMEPAGE_FALLBACK,
    'homepage'
  );

  return (
    <section>
      <h1>{content.heroHeadline}</h1>
      <p>{content.heroSubheadline}</p>
      {content.heroCta && (
        <a href={content.heroCta.link}>{content.heroCta.text}</a>
      )}
    </section>
  );
}


// ============================================================================
// Example 2: Blog Posts List (Collection)
// ============================================================================

const POSTS_QUERY = `
  *[_type == "post" && status == "published"] | order(publishedAt desc) {
    _id,
    title,
    slug,
    excerpt,
    publishedAt,
    "coverImage": coverImage.asset->url,
    "author": author->{ name }
  }
`;

const POSTS_FALLBACK: Post[] = [
  {
    _id: 'fallback-1',
    _type: 'post',
    title: 'Welcome to Our Blog',
    slug: { _type: 'slug', current: 'welcome' },
    excerpt: 'Check back soon for updates.',
  },
];

export async function BlogSection() {
  const posts = await fetchWithFallback<Post[]>(
    POSTS_QUERY,
    POSTS_FALLBACK,
    'posts'
  );

  return (
    <div>
      {posts.map((post) => (
        <article key={post._id}>
          <h2>{post.title}</h2>
          <p>{post.excerpt}</p>
        </article>
      ))}
    </div>
  );
}


// ============================================================================
// Example 3: Using Pre-built Query Functions
// ============================================================================

export async function TestimonialsSection() {
  const testimonials = await getAllTestimonials([
    {
      _id',
: 'fallback      _type: 'testimonial',
      quote: 'Great service!',
      authorName: 'Jane Doe',
      authorRole: 'CEO',
      company: 'Example Corp',
    },
  ]);

  return (
    <div>
      {testimonials.map((t) => (
        <blockquote key={t._id}>
          <p>"{t.quote}"</p>
          <cite>— {t.authorName}, {t.authorRole}</cite>
        </blockquote>
      ))}
    </div>
  );
}


// ============================================================================
// Example 4: FAQs by Page Context
// ============================================================================

const FAQS_BY_PAGE_QUERY = `
  *[_type == "faq" && visible == true && ($pageContext in pageContext || "all" in pageContext)] 
  | order(displayOrder asc) {
    _id,
    question,
    answer,
    category
  }
`;

const FAQS_FALLBACK: FAQ[] = [
  {
    _id: 'fallback-faq',
    _type: 'faq',
    question: 'What services do you offer?',
    answer: [{ _type: 'block', children: [{ _type: 'span', text: 'We offer software development, AI solutions, and more.' }] }],
  },
];

export async function PricingFAQs() {
  const faqs = await fetchWithFallback<FAQ[]>(
    FAQS_BY_PAGE_QUERY,
    FAQS_FALLBACK,
    'pricingFaqs',
    { pageContext: 'pricing' }
  );

  return (
    <div>
      {faqs.map((faq) => (
        <details key={faq._id}>
          <summary>{faq.question}</summary>
          <div>{faq.answer}</div>
        </details>
      ))}
    </div>
  );
}


// ============================================================================
// Example 5: Custom Query with Type Safety
// ============================================================================

import type { PricingBlock } from '@/sanity/lib/types';

const PRICING_QUERY = `
  *[_type == "pricingBlock" && visible == true] | order(position asc) {
    _id,
    tierName,
    description,
    featureHighlights,
    highlighted,
    ctaText,
    ctaLink
  }
`;

const PRICING_FALLBACK: PricingBlock[] = [
  {
    _id: 'fallback-tier',
    _type: 'pricingBlock',
    tierName: 'Standard',
    description: 'Great for small teams',
    featureHighlights: ['Feature 1', 'Feature 2'],
    highlighted: false,
  },
];

export async function PricingCards() {
  const tiers = await fetchWithFallback<PricingBlock[]>(
    PRICING_QUERY,
    PRICING_FALLBACK,
    'pricingTiers'
  );

  return (
    <div className="pricing-grid">
      {tiers.map((tier) => (
        <div key={tier._id} className={tier.highlighted ? 'highlighted' : ''}>
          <h3>{tier.tierName}</h3>
          <p>{tier.description}</p>
          <ul>
            {tier.featureHighlights?.map((feature, i) => (
              <li key={i}>{feature}</li>
            ))}
          </ul>
          {tier.ctaText && <a href={tier.ctaLink}>{tier.ctaText}</a>}
        </div>
      ))}
    </div>
  );
}


// ============================================================================
// Best Practices
// ============================================================================

/**
 * 1. Always provide fallback data
 * 
 * The fetchWithFallback function guarantees your site works even if
 * Sanity is down or returns null. Provide hardcoded fallback data
 * that matches your UI requirements.
 */

/**
 * 2. Use type-safe queries
 * 
 * Import types from @/sanity/lib/types for full TypeScript support:
 * - Post, CaseStudy, LabWork, Resource
 * - Testimonial, FAQ, PricingBlock
 * - HomepageData, AboutPageContent, etc.
 */

/**
 * 3. Query structure tips
 * 
 * - Use projections like "field": otherField.asset->url
 * - Filter by status: _type == "post" && status == "published"
 * - Sort with | order(field asc)
 * - Limit results: [0...10]
 */

/**
 * 4. For client components
 * 
 * If you need client-side fetching, use the same functions in
 * a useEffect or useTransition. The caching works the same way.
 */
