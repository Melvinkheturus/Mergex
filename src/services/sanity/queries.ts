/**
 * Sanity Service Layer
 * 
 * Query functions for fetching content from Sanity.
 * Each function includes error handling and returns null on failure
 * to allow components to fallback to hardcoded content.
 */

import { client } from '@/sanity/lib/client'
import type { QueryParams } from 'sanity'

// Base query executor with error handling
async function executeQuery<T>(
    query: string,
    params?: QueryParams
): Promise<T | null> {
    try {
        const result = await client.fetch<T>(query, params || {})
        return result
    } catch (error) {
        console.error('Sanity query error:', error)
        return null
    }
}

// Blog Posts
export async function getAllPosts() {
    const query = `*[_type == "post"] | order(publishedAt desc) {
    _id,
    title,
    slug,
    excerpt,
    publishedAt,
    coverImage,
    categories,
    tags,
    author,
    featured,
    "imageUrl": coverImage.asset->url
  }`
    return executeQuery<any[]>(query)
}

export async function getFeaturedPosts(limit = 3) {
    const query = `*[_type == "post" && featured == true] | order(publishedAt desc) [0...${limit}] {
    _id,
    title,
    slug,
    excerpt,
    publishedAt,
    coverImage,
    categories,
    author,
    "imageUrl": coverImage.asset->url
  }`
    return executeQuery<any[]>(query)
}

export async function getPostBySlug(slug: string) {
    const query = `*[_type == "post" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    excerpt,
    publishedAt,
    body,
    coverImage,
    categories,
    tags,
    author,
    seo,
    "imageUrl": coverImage.asset->url
  }`
    return executeQuery<any>(query, { slug })
}

// Case Studies
export async function getAllCaseStudies() {
    const query = `*[_type == "caseStudy"] | order(publishedAt desc) {
    _id,
    title,
    slug,
    client,
    industry,
    division,
    featuredImage,
    metrics,
    featured,
    "imageUrl": featuredImage.asset->url
  }`
    return executeQuery<any[]>(query)
}

export async function getCaseStudiesByDivision(division: string) {
    const query = `*[_type == "caseStudy" && division == $division] | order(publishedAt desc) {
    _id,
    title,
    slug,
    client,
    industry,
    problem,
    outcome,
    featuredImage,
    "imageUrl": featuredImage.asset->url
  }`
    return executeQuery<any[]>(query, { division })
}

// Labs Work
export async function getAllLabsWork() {
    const query = `*[_type == "labWork"] | order(displayOrder asc, publishedAt desc) {
    _id,
    title,
    slug,
    shortDescription,
    category,
    mediaType,
    videoUrl,
    image,
    thumbnail,
    featured,
    "imageUrl": thumbnail.asset->url ?? image.asset->url
  }`
    return executeQuery<any[]>(query)
}

export async function getFeaturedLabsWork(limit = 6) {
    const query = `*[_type == "labWork" && featured == true] | order(displayOrder asc) [0...${limit}] {
    _id,
    title,
    shortDescription,
    category,
    mediaType,
    videoUrl,
    thumbnail,
    "imageUrl": thumbnail.asset->url
  }`
    return executeQuery<any[]>(query)
}

// Resources
export async function getAllResources() {
    const query = `*[_type == "resource"] | order(publishedAt desc) {
    _id,
    title,
    slug,
    description,
    resourceType,
    category,
    coverImage,
    gated,
    featured,
    "imageUrl": coverImage.asset->url
  }`
    return executeQuery<any[]>(query)
}

// Testimonials
export async function getTestimonialsByContext(context: string) {
    const query = `*[_type == "testimonial" && visible == true && $context in divisionContext] | order(displayOrder asc) {
    _id,
    quote,
    authorName,
    authorRole,
    company,
    authorImage,
    rating,
    "imageUrl": authorImage.asset->url
  }`
    return executeQuery<any[]>(query, { context })
}

export async function getAllTestimonials() {
    const query = `*[_type == "testimonial" && visible == true] | order(displayOrder asc) {
    _id,
    quote,
    authorName,
    authorRole,
    company,
    authorImage,
    divisionContext,
    rating,
    "imageUrl": authorImage.asset->url
  }`
    return executeQuery<any[]>(query)
}

// FAQs
export async function getFAQsByPage(pageContext: string) {
    const query = `*[_type == "faq" && visible == true && ($pageContext in pageContext || "all" in pageContext)] | order(displayOrder asc) {
    _id,
    question,
    answer,
    category
  }`
    return executeQuery<any[]>(query, { pageContext })
}

// Pricing Blocks
export async function getAllPricingBlocks() {
    const query = `*[_type == "pricingBlock" && visible == true] | order(position asc) {
    _id,
    tierName,
    slug,
    description,
    engagementModel,
    featureHighlights,
    idealFor,
    ctaText,
    ctaLink,
    highlighted
  }`
    return executeQuery<any[]>(query)
}

// Partner Types
export async function getAllPartnerTypes() {
    const query = `*[_type == "partnerType" && visible == true] | order(position asc) {
    _id,
    typeName,
    slug,
    description,
    benefits,
    requirements,
    ctaText,
    applicationProcess,
    icon,
    "iconUrl": icon.asset->url
  }`
    return executeQuery<any[]>(query)
}

// Career Roles
export async function getOpenCareerRoles() {
    const query = `*[_type == "careerRole" && status == "open"] | order(postedAt desc) {
    _id,
    roleTitle,
    slug,
    roleType,
    division,
    description,
    responsibilities,
    requirements,
    location,
    applicationUrl
  }`
    return executeQuery<any[]>(query)
}

export async function getCareerRolesByDivision(division: string) {
    const query = `*[_type == "careerRole" && status == "open" && division == $division] {
    _id,
    roleTitle,
    slug,
    roleType,
    description,
    location
  }`
    return executeQuery<any[]>(query, { division })
}
