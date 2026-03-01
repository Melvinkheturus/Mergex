'use client'

/**
 * Mergex Sanity Studio Configuration
 *
 * Mounted at `/studio` route via `src/app/studio/[[...tool]]/page.tsx`
 *
 * Features:
 * - Role-based sidebar structure (7 team groups)
 * - Singleton protection (Settings, Navigation, Homepage)
 * - GROQ Vision tool for dev queries
 */

import { visionTool } from '@sanity/vision'
import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'

import { apiVersion, dataset, projectId } from './src/sanity/env'
import { schema, singletonTypes } from './src/sanity/schemaTypes'
import { structure } from './src/sanity/structure'

export default defineConfig({
  basePath: '/studio',
  projectId,
  dataset,

  schema,

  plugins: [
    structureTool({ structure }),
    // Vision is for querying with GROQ from inside the Studio
    visionTool({ defaultApiVersion: apiVersion }),
  ],

  document: {
    // Prevent creating new documents for singleton types
    newDocumentOptions: (prev, { creationContext }) => {
      // Filter out singletons from the "Create New" global menu
      if (creationContext.type === 'global') {
        return prev.filter(
          (templateItem) => !singletonTypes.includes(templateItem.templateId)
        )
      }
      return prev
    },

    // Prevent deleting/duplicating singleton documents
    actions: (prev, { schemaType }) => {
      if (singletonTypes.includes(schemaType)) {
        // Singletons can only be edited — no delete, duplicate, or unpublish
        return prev.filter(
          ({ action }) =>
            action !== undefined &&
            !['delete', 'duplicate', 'unpublish'].includes(action)
        )
      }
      return prev
    },
  },
})
