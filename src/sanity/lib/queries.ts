import { cache } from 'react';
import { sanityFetch } from './live';
import type {
  Post,
  CaseStudy,
  LabWork,
  Resource,
  Testimonial,
  FAQ,
  PricingBlock,
  PartnerType,
  CareerRole,
  HomepageData,
  AboutPageContent,
} from './types';

export const fetchWithFallback = cache(async <T>(
  query: string,
  fallbackData: T,
  label: string,
  params: Record<string, unknown> = {}
): Promise<T> => {
  try {
    const { data } = await sanityFetch({
      query,
      params
    }) as { data: unknown };

    if (data !== null && data !== undefined) {
      if (Array.isArray(data) && data.length === 0 && Array.isArray(fallbackData) && fallbackData.length > 0) {
        console.warn(`[Mergex CMS] Sanity returned empty array for ${label}. Falling back to hardcoded data.`);
        return fallbackData;
      }
      return data as T;
    }
  } catch (error) {
    if (process.env.NODE_ENV === 'development') {
      console.error(`[Mergex CMS Error] Fetch failed for ${label}:`, error);
    }
  }

  console.log(`[Mergex CMS] Using fallback content for: ${label}`);
  return fallbackData;
});

const HOMEPAGE_QUERY = `
  *[_type == "homepage"][0] {
    _id,
    heroTagline,
    heroHeadline,
    heroSubheadline,
    heroCta { text, link },
    heroSecondaryCtaText,
    heroSecondaryCtaLink,
    showProblemContext,
    showProblemFragmentation,
    showEcosystem,
    showTestimonials,
    showFAQ,
    problemContextHeadline,
    problemContextSubheadline,
    problemContextProblems[] { title, description, icon },
    problemContextClosing,
    problemFragmentationHeadline,
    problemFragmentationSubheadline,
    problemFragmentationProblems[] { title, description, icon },
    problemFragmentationClosing,
    ecosystemLabsCard { title, tagline, description, "image": image.asset->url },
    ecosystemSystemsCard { title, tagline, description, "image": image.asset->url },
    faqHeadline,
    faqSubheadline,
    faqDescription,
    faqQuestions[] { question, answer },
    faqCtaText,
    faqCtaSubtext,
    faqButtonText,
    featuredTestimonials[]-> {
      _id,
      quote,
      authorName,
      authorRole,
      company,
      "authorImage": authorImage.asset->url,
      rating
    },
    featuredCaseStudies[]-> {
      _id,
      title,
      slug,
      client,
      industry,
      "featuredImage": featuredImage.asset->url
    },
    featuredPosts[]-> {
      _id,
      title,
      slug,
      excerpt,
      "coverImage": coverImage.asset->url
    }
  }
`;

export const getHomepage = cache(async (fallback: HomepageData) => 
  fetchWithFallback(HOMEPAGE_QUERY, fallback, 'homepage')
);

const ABOUT_PAGE_QUERY = `
  *[_type == "aboutPage"][0] {
    _id,
    heroHeadlineLine1,
    heroHeadlineLine2,
    heroSupportShort,
    heroSupportLong1,
    heroSupportLong2,
    teamEyebrow,
    teamHeadline,
    teamBody1,
    teamBody2,
    ecosystemHeadline,
    ecosystemCards[] { title, description, href, ctaText },
    principlesHeadline,
    principles[] { text },
    whyHeadline,
    whyLine1,
    whyLine2,
    whyClosing,
    ctaHeadline,
    ctaGuidanceLine1,
    ctaGuidanceLine2,
    ctaPrimaryText,
    ctaSecondaryText
  }
`;

export const getAboutPage = cache(async (fallback: AboutPageContent | null) => 
  fetchWithFallback(ABOUT_PAGE_QUERY, fallback, 'aboutPage')
);

const POSTS_QUERY = `
  *[_type == "post" && status == "published"] | order(publishedAt desc) {
    _id,
    title,
    slug,
    excerpt,
    publishedAt,
    "coverImage": coverImage.asset->url,
    "author": author->{ name, "image": image.asset->url },
    "categories": categories[]->{ title },
    tags,
    featured
  }
`;

export const getAllPosts = cache(async (fallback: Post[] = []) => 
  fetchWithFallback(POSTS_QUERY, fallback, 'posts')
);

const FEATURED_POSTS_QUERY = `
  *[_type == "post" && status == "published" && featured == true] | order(publishedAt desc)[0...$limit] {
    _id,
    title,
    slug,
    excerpt,
    publishedAt,
    "coverImage": coverImage.asset->url,
    "author": author->{ name }
  }
`;

export const getFeaturedPosts = cache(async (limit = 3, fallback: Post[] = []) => 
  fetchWithFallback(FEATURED_POSTS_QUERY, fallback, 'featuredPosts', { limit })
);

const POST_BY_SLUG_QUERY = `
  *[_type == "post" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    excerpt,
    publishedAt,
    body,
    "coverImage": coverImage.asset->url,
    "author": author->{ name, bio, "image": image.asset->url },
    "categories": categories[]->{ title },
    tags,
    seo
  }
`;

export const getPostBySlug = cache(async (slug: string, fallback: Post | null = null) => 
  fetchWithFallback(POST_BY_SLUG_QUERY, fallback, 'post', { slug })
);

const CASE_STUDIES_QUERY = `
  *[_type == "caseStudy"] | order(publishedAt desc) {
    _id,
    title,
    slug,
    client,
    industry,
    division,
    problem,
    approach,
    outcome,
    "featuredImage": featuredImage.asset->url,
    metrics[] { label, value },
    featured,
    publishedAt
  }
`;

export const getAllCaseStudies = cache(async (fallback: CaseStudy[] = []) => 
  fetchWithFallback(CASE_STUDIES_QUERY, fallback, 'caseStudies')
);

const CASE_STUDY_BY_SLUG_QUERY = `
  *[_type == "caseStudy" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    client,
    industry,
    division,
    problem,
    approach,
    outcome,
    "featuredImage": featuredImage.asset->url,
    gallery[] { "url": asset->url, alt },
    metrics[] { label, value },
    featured,
    publishedAt
  }
`;

export const getCaseStudyBySlug = cache(async (slug: string, fallback: CaseStudy | null = null) => 
  fetchWithFallback(CASE_STUDY_BY_SLUG_QUERY, fallback, 'caseStudy', { slug })
);

const CASE_STUDY_SLUGS_QUERY = `
  *[_type == "caseStudy"]{ "slug": slug.current }
`;

export const getCaseStudySlugs = cache(async () => 
  fetchWithFallback(CASE_STUDY_SLUGS_QUERY, [], 'caseStudySlugs')
);

const TESTIMONIALS_QUERY = `
  *[_type == "testimonial" && visible == true] | order(displayOrder asc) {
    _id,
    quote,
    authorName,
    authorRole,
    company,
    "authorImage": authorImage.asset->url,
    rating,
    divisionContext,
    featured
  }
`;

export const getAllTestimonials = cache(async (fallback: Testimonial[] = []) => 
  fetchWithFallback(TESTIMONIALS_QUERY, fallback, 'testimonials')
);

const TESTIMONIALS_BY_CONTEXT_QUERY = `
  *[_type == "testimonial" && visible == true && $context in divisionContext] | order(displayOrder asc) {
    _id,
    quote,
    authorName,
    authorRole,
    company,
    "authorImage": authorImage.asset->url,
    rating
  }
`;

export const getTestimonialsByContext = cache(async (context: string, fallback: Testimonial[] = []) => 
  fetchWithFallback(TESTIMONIALS_BY_CONTEXT_QUERY, fallback, 'testimonialsByContext', { context })
);

const FAQS_QUERY = `
  *[_type == "faq" && visible == true] | order(displayOrder asc) {
    _id,
    question,
    answer,
    pageContext,
    category
  }
`;

export const getAllFAQs = cache(async (fallback: FAQ[] = []) => 
  fetchWithFallback(FAQS_QUERY, fallback, 'faqs')
);

const FAQS_BY_PAGE_QUERY = `
  *[_type == "faq" && visible == true && (count((pageContext[])[@ == $pageContext || @ == "all"]) > 0)] | order(displayOrder asc) {
    _id,
    question,
    answer,
    category
  }
`;

export const getFAQsByPage = cache(async (pageContext: string, fallback: FAQ[] = []) => 
  fetchWithFallback(FAQS_BY_PAGE_QUERY, fallback, 'faqsByPage', { pageContext })
);

const PRICING_BLOCKS_QUERY = `
  *[_type == "pricingBlock" && visible == true] | order(position asc) {
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
  }
`;

export const getAllPricingBlocks = cache(async (fallback: PricingBlock[] = []) => 
  fetchWithFallback(PRICING_BLOCKS_QUERY, fallback, 'pricingBlocks')
);

const PARTNER_TYPES_QUERY = `
  *[_type == "partnerType" && visible == true] | order(position asc) {
    _id,
    typeName,
    slug,
    description,
    benefits,
    requirements,
    ctaText,
    applicationProcess,
    "iconUrl": icon.asset->url
  }
`;

export const getAllPartnerTypes = cache(async (fallback: PartnerType[] = []) => 
  fetchWithFallback(PARTNER_TYPES_QUERY, fallback, 'partnerTypes')
);

const CAREER_ROLES_QUERY = `
  *[_type == "careerRole" && status == "open"] | order(postedAt desc) {
    _id,
    roleTitle,
    slug,
    roleType,
    division,
    description,
    location,
    applicationUrl
  }
`;

export const getOpenCareerRoles = cache(async (fallback: CareerRole[] = []) => 
  fetchWithFallback(CAREER_ROLES_QUERY, fallback, 'careerRoles')
);

const LABS_WORK_QUERY = `
  *[_type == "labWork"] | order(displayOrder asc, publishedAt desc) {
    _id,
    title,
    slug,
    shortDescription,
    category,
    mediaType,
    videoUrl,
    "thumbnailUrl": thumbnail.asset->url ?? image.asset->url,
    featured,
    displayOrder
  }
`;

export const getAllLabsWork = cache(async (fallback: LabWork[] = []) => 
  fetchWithFallback(LABS_WORK_QUERY, fallback, 'labsWork')
);

const FEATURED_LABS_WORK_QUERY = `
  *[_type == "labWork" && featured == true] | order(displayOrder asc)[0...$limit] {
    _id,
    title,
    slug,
    shortDescription,
    category,
    mediaType,
    videoUrl,
    "thumbnailUrl": thumbnail.asset->url
  }
`;

export const getFeaturedLabsWork = cache(async (limit = 6, fallback: LabWork[] = []) => 
  fetchWithFallback(FEATURED_LABS_WORK_QUERY, fallback, 'featuredLabsWork', { limit })
);

const RESOURCES_QUERY = `
  *[_type == "resource"] | order(publishedAt desc) {
    _id,
    title,
    slug,
    description,
    resourceType,
    category,
    "coverImage": coverImage.asset->url,
    gated,
    featured
  }
`;

export const getAllResources = cache(async (fallback: Resource[] = []) => 
  fetchWithFallback(RESOURCES_QUERY, fallback, 'resources')
);
