import { type SchemaTypeDefinition } from 'sanity'

// Singleton schemas
import home from './Singleton/home'

// Dynamic schemas
import service from './Dynamic/service'
import feature from './Dynamic/feature'
import testimonial from './Dynamic/testimonial'
import caseStudy from './Dynamic/caseStudy'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    // Singleton schemas
    home,
    
    // Dynamic schemas
    service,
    feature,
    testimonial,
    caseStudy,
  ],
}
