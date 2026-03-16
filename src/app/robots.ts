import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        // Allow all crawlers full access to public pages
        userAgent: '*',
        allow: '/',
        disallow: [
          '/studio/',   // CMS — never index
          '/api/',      // API routes — never index
          '/_next/',    // Next.js internals — never index
          '/admin/',    // Admin routes if any
        ],
      },
      {
        // Block AI training crawlers from scraping your content
        // These bots scrape for LLM training, not for search ranking
        userAgent: 'GPTBot',
        disallow: '/',
      },
      {
        userAgent: 'Google-Extended',
        disallow: '/',
      },
      {
        userAgent: 'CCBot',
        disallow: '/',
      },
      {
        userAgent: 'anthropic-ai',
        disallow: '/',
      },
      {
        userAgent: 'Claude-Web',
        disallow: '/',
      },
    ],
    sitemap: 'https://mergex.in/sitemap.xml',
    host: 'https://mergex.in',
  }
}
