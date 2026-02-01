import { type SchemaTypeDefinition } from 'sanity'

// Core Content Schemas
import { postType } from './post'
import { caseStudyType } from './caseStudy'
import { labWorkType } from './labWork'
import { resourceType } from './resource'
import { testimonialType } from './testimonial'
import { faqType } from './faq'

// Marketing Content Schemas
import { pricingBlockType } from './pricingBlock'
import { partnerTypeType } from './partnerType'
import { careerRoleType } from './careerRole'

// Operational Schemas
import { partnerType } from './operations/partner'
import { referralType } from './operations/referral'
import { leadType } from './operations/lead'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    // Core Content
    postType,
    caseStudyType,
    labWorkType,
    resourceType,
    testimonialType,
    faqType,
    // Marketing
    pricingBlockType,
    partnerTypeType,
    careerRoleType,
    // Operations
    partnerType,
    referralType,
    leadType,
  ],
}
