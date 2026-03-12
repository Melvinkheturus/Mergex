/**
 * Homepage GROQ Queries
 * 
 * Centralized queries for all homepage content sections.
 * Used by the server-side page component to fetch data from Sanity.
 */

// Fetch the full homepage singleton with all section data
export const HOMEPAGE_QUERY = `*[_type == "homepage" && _id == "homepage"][0]{
    // Hero Section
    heroHeadline,
    heroSubheadline,
    heroCta,
    heroSecondaryCtaText,
    heroSecondaryCtaLink,
    
    // Section Visibility
    showProblemContext,
    showProblemFragmentation,
    showEcosystem,
    showTestimonials,
    showFAQ,
    
    // Featured Content
    featuredCaseStudies[]->{
        _id,
        title,
        slug,
        client,
        division,
        heroImage
    },
    featuredPosts[]->{
        _id,
        title,
        slug,
        excerpt,
        mainImage,
        publishedAt
    },
    featuredTestimonials[]->{
        _id,
        clientName,
        role,
        company,
        quote,
        avatar
    },
    
    // SEO
    seo
}`;

// Individual section queries (for granular fetching if needed)
export const HOMEPAGE_HERO_QUERY = `*[_type == "homepage" && _id == "homepage"][0]{
    heroHeadline,
    heroSubheadline,
    heroCta,
    heroSecondaryCtaText,
    heroSecondaryCtaLink
}`;

export const HOMEPAGE_VISIBILITY_QUERY = `*[_type == "homepage" && _id == "homepage"][0]{
    showProblemContext,
    showProblemFragmentation,
    showEcosystem,
    showTestimonials,
    showFAQ
}`;
