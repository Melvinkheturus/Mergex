import type { SanityImageSource } from "@sanity/image-url/lib/types/types";

export interface SanityImage {
  _type: "image";
  asset: {
    _ref: string;
    _type: "reference";
  };
  alt?: string;
}

export interface SanityFile {
  _type: "file";
  asset: {
    _ref: string;
    _type: "reference";
  };
}

export interface SanitySlug {
  _type: "slug";
  current: string;
}

export interface SanityReference {
  _ref: string;
  _type: "reference";
}

export interface SanityBlock {
  _type: "block";
  children: Array<{
    _type: "span";
    text: string;
    [key: string]: unknown;
  }>;
  style: "normal" | "h1" | "h2" | "h3" | "h4" | "blockquote";
  [key: string]: unknown;
}

export interface SanityPortableText {
  _type: "block";
  children: Array<{
    _type: "span";
    text: string;
    marks?: string[];
  }>;
  style?: "normal" | "h1" | "h2" | "h3" | "h4" | "blockquote";
  list?: "bullet" | "number";
}

export interface Author {
  _id: string;
  _type: "author";
  name: string;
  bio?: string;
  image?: SanityImage;
  role?: string;
}

export interface Category {
  _id: string;
  _type: "category";
  title: string;
  description?: string;
}

export interface Post {
  _id: string;
  _type: "post";
  title: string;
  slug: SanitySlug;
  excerpt?: string;
  publishedAt?: string;
  coverImage?: SanityImage;
  body?: SanityBlock[];
  author?: SanityReference;
  categories?: SanityReference[];
  tags?: string[];
  featured?: boolean;
  status?: "draft" | "review" | "published";
  seo?: {
    metaTitle?: string;
    metaDescription?: string;
    ogImage?: SanityImage;
  };
}

export interface CaseStudy {
  _id: string;
  _type: "caseStudy";
  title: string;
  slug: SanitySlug;
  client?: string;
  industry?: string;
  division?: "software" | "labs" | "systems";
  problem?: string;
  approach?: string;
  outcome?: string;
  featuredImage?: SanityImage;
  gallery?: SanityImage[];
  metrics?: Array<{
    label: string;
    value: string;
  }>;
  featured?: boolean;
  publishedAt?: string;
}

export interface LabWork {
  _id: string;
  _type: "labWork";
  title: string;
  slug: SanitySlug;
  shortDescription?: string;
  category?: "experiment" | "content" | "campaign" | "product";
  mediaType?: "video" | "image" | "external";
  videoUrl?: string;
  image?: SanityImage;
  thumbnail?: SanityImage;
  featured?: boolean;
  displayOrder?: number;
  publishedAt?: string;
}

export interface Resource {
  _id: string;
  _type: "resource";
  title: string;
  slug: SanitySlug;
  description?: string;
  resourceType?: "guide" | "template" | "pdf" | "tool";
  category?: string;
  coverImage?: SanityImage;
  file?: SanityFile;
  externalUrl?: string;
  previewContent?: SanityBlock[];
  gated?: boolean;
  featured?: boolean;
  publishedAt?: string;
}

export interface Testimonial {
  _id: string;
  _type: "testimonial";
  quote: string;
  authorName: string;
  authorRole?: string;
  company?: string;
  authorImage?: SanityImage;
  rating?: number;
  divisionContext?: Array<"software" | "labs" | "systems" | "all">;
  projectType?: "web" | "mobile" | "strategy" | "experiment" | "ecosystem";
  featured?: boolean;
  visible?: boolean;
  displayOrder?: number;
  createdAt?: string;
}

export interface FAQ {
  _id: string;
  _type: "faq";
  question: string;
  answer: SanityBlock[];
  pageContext?: Array<"parent" | "software" | "labs" | "systems" | "pricing" | "partner" | "all">;
  category?: "general" | "pricing" | "services" | "process" | "partnership" | "technical";
  displayOrder?: number;
  visible?: boolean;
}

export interface PricingBlock {
  _id: string;
  _type: "pricingBlock";
  tierName: string;
  slug: SanitySlug;
  description?: string;
  engagementModel?: string;
  featureHighlights?: string[];
  idealFor?: string;
  ctaText?: string;
  ctaLink?: string;
  highlighted?: boolean;
  position?: number;
  visible?: boolean;
}

export interface PartnerType {
  _id: string;
  _type: "partnerType";
  typeName: string;
  slug: SanitySlug;
  description?: string;
  benefits?: string[];
  requirements?: string[];
  ctaText?: string;
  applicationProcess?: string;
  icon?: SanityImage;
  position?: number;
  visible?: boolean;
}

export interface CareerRole {
  _id: string;
  _type: "careerRole";
  roleTitle: string;
  slug: SanitySlug;
  roleType?: "full-time" | "part-time" | "contract" | "internship";
  division?: "software" | "labs" | "systems" | "marketing" | "operations";
  description?: string;
  responsibilities?: string[];
  requirements?: string[];
  location?: string;
  applicationUrl?: string;
  status?: "open" | "hold" | "closed";
  postedAt?: string;
}

export interface Announcement {
  _id: string;
  _type: "announcement";
  title: string;
  message: string;
  type?: "info" | "success" | "warning" | "error";
  link?: string;
  active?: boolean;
  startDate?: string;
  endDate?: string;
}

export interface SiteSettings {
  _id: string;
  _type: "siteSettings";
  siteName?: string;
  logo?: SanityImage;
  favicon?: SanityImage;
  defaultSeo?: {
    metaTitle?: string;
    metaDescription?: string;
    ogImage?: SanityImage;
  };
  socialLinks?: {
    twitter?: string;
    linkedin?: string;
    github?: string;
    instagram?: string;
  };
  contactEmail?: string;
}

export interface Navigation {
  _id: string;
  _type: "navigation";
  mainLinks?: Array<{
    label: string;
    href: string;
    children?: Array<{
      label: string;
      href: string;
    }>;
  }>;
  ctaButton?: {
    label: string;
    href: string;
  };
}

export interface HomepageData {
  _id: string;
  _type: "homepage";
  heroTagline?: string;
  heroHeadline?: string;
  heroSubheadline?: string;
  heroCta?: {
    text: string;
    link: string;
  };
  heroSecondaryCtaText?: string;
  heroSecondaryCtaLink?: string;
  showProblemContext?: boolean;
  showProblemFragmentation?: boolean;
  showEcosystem?: boolean;
  showTestimonials?: boolean;
  showFAQ?: boolean;
  problemContextHeadline?: string;
  problemContextSubheadline?: string;
  problemContextProblems?: Array<{
    title: string;
    description?: string;
    icon?: string;
  }>;
  problemContextClosing?: string;
  problemFragmentationHeadline?: string;
  problemFragmentationSubheadline?: string;
  problemFragmentationProblems?: Array<{
    title: string;
    description?: string;
    icon?: string;
  }>;
  problemFragmentationClosing?: string;
  ecosystemLabsCard?: {
    title?: string;
    tagline?: string;
    description?: string;
    image?: string;
  };
  ecosystemSystemsCard?: {
    title?: string;
    tagline?: string;
    description?: string;
    image?: string;
  };
  faqHeadline?: string;
  faqSubheadline?: string;
  faqDescription?: string;
  faqQuestions?: Array<{
    question: string;
    answer: string;
  }>;
  faqCtaText?: string;
  faqCtaSubtext?: string;
  faqButtonText?: string;
  featuredCaseStudies?: SanityReference[];
  featuredPosts?: SanityReference[];
  featuredTestimonials?: Testimonial[];
  seo?: {
    metaTitle?: string;
    metaDescription?: string;
    ogImage?: SanityImage;
  };
}

export interface AboutPageContent {
  _id: string;
  _type: "aboutPage";
  heroHeadlineLine1?: string;
  heroHeadlineLine2?: string;
  heroSupportShort?: string;
  heroSupportLong1?: string;
  heroSupportLong2?: string;
  teamEyebrow?: string;
  teamHeadline?: string;
  teamBody1?: string;
  teamBody2?: string;
  ecosystemHeadline?: string;
  ecosystemCards?: Array<{
    title?: string;
    description?: string;
    href?: string;
    ctaText?: string;
  }>;
  principlesHeadline?: string;
  principles?: Array<{
    text?: string;
  }>;
  whyHeadline?: string;
  whyLine1?: string;
  whyLine2?: string;
  whyClosing?: string;
  ctaHeadline?: string;
  ctaGuidanceLine1?: string;
  ctaGuidanceLine2?: string;
  ctaPrimaryText?: string;
  ctaSecondaryText?: string;
}

export interface SystemsPageData {
  _id: string;
  _type: "systemsPage";
  heroHeadline?: string;
  heroSubheadline?: string;
  services?: Array<{
    title: string;
    description: string;
    features: string[];
    icon?: string;
  }>;
}

export interface LabsPageData {
  _id: string;
  _type: "labsPage";
  heroHeadline?: string;
  heroSubheadline?: string;
}

export interface PricingPageData {
  _id: string;
  _type: "pricingPage";
  heroHeadline?: string;
  heroSubheadline?: string;
}

export interface CareersPageData {
  _id: string;
  _type: "careersPage";
  heroHeadline?: string;
  heroSubheadline?: string;
}

export interface PartnerPageData {
  _id: string;
  _type: "partnerPage";
  heroHeadline?: string;
  heroSubheadline?: string;
}

export interface ProductsPageData {
  _id: string;
  _type: "productsPage";
  heroHeadline?: string;
  heroSubheadline?: string;
}

export interface BlogPageData {
  _id: string;
  _type: "blogPage";
  heroHeadline?: string;
  heroSubheadline?: string;
}

export interface ResourcesPageData {
  _id: string;
  _type: "resourcesPage";
  heroHeadline?: string;
  heroSubheadline?: string;
}
