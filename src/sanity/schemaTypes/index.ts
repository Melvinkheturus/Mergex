import { type SchemaTypeDefinition } from 'sanity'

// ── Singleton Schemas ──
import { siteSettingsType } from './singletons/siteSettings'
import { navigationType } from './singletons/navigation'
import { homepageType } from './singletons/homepage'
import { systemsPageType } from './singletons/systemsPage'
import { labsPageType } from './singletons/labsPage'
import { pricingPageType } from './singletons/pricingPage'
import { careersPageType } from './singletons/careersPage'
import { partnerPageType } from './singletons/partnerPage'
import { aboutPageType } from './singletons/aboutPage'
import { productsPageType } from './singletons/productsPage'
import { blogPageType } from './singletons/blogPage'
import { resourcesPageType } from './singletons/resourcesPage'

// ── Taxonomy & Reference Schemas ──
import { authorType } from './author'
import { categoryType } from './category'

// ── Core Content Schemas ──
import { postType } from './post'
import { caseStudyType } from './caseStudy'
import { labWorkType } from './labWork'
import { resourceType } from './resource'
import { testimonialType } from './testimonial'
import { faqType } from './faq'
import { announcementType } from './announcement'

// ── Marketing Content Schemas ──
import { pricingBlockType } from './pricingBlock'
import { partnerTypeType } from './partnerType'
import { careerRoleType } from './careerRole'

// ── Form Configuration Schemas ──
import { formConfig } from './formConfig'
import { formField } from './formField'

// ── Operational Schemas (Phase 1 — will migrate to Supabase) ──
import { partnerType } from './operations/partner'
import { referralType } from './operations/referral'
import { leadType } from './operations/lead'

// All singleton type names — used by structure.ts and sanity.config.ts
export const singletonTypes = [
  'siteSettings',
  'navigation',
  'homepage',
  'systemsPage',
  'labsPage',
  'pricingPage',
  'careersPage',
  'partnerPage',
  'aboutPage',
  'productsPage',
  'blogPage',
  'resourcesPage',
]

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    // Singletons
    siteSettingsType,
    navigationType,
    homepageType,
    systemsPageType,
    labsPageType,
    pricingPageType,
    careersPageType,
    partnerPageType,
    aboutPageType,
    productsPageType,
    blogPageType,
    resourcesPageType,

    // Taxonomy
    authorType,
    categoryType,

    // Core Content
    postType,
    caseStudyType,
    labWorkType,
    resourceType,
    testimonialType,
    faqType,
    announcementType,

    // Marketing
    pricingBlockType,
    partnerTypeType,
    careerRoleType,

    // Form Configuration
    formConfig,
    formField,

    // Operations
    partnerType,
    referralType,
    leadType,
  ],
}
