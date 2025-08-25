'use client'

/**
 * This configuration is used to for the Sanity Studio that’s mounted on the `\src\app\studio\[[...tool]]\page.tsx` route
 */

import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {media} from 'sanity-plugin-media'
import { dashboardTool } from "@sanity/dashboard";

// Go to https://www.sanity.io/docs/api-versioning to learn how API versioning works
import {apiVersion, dataset, projectId} from './sanity/env'
import {schema} from './sanity/schemaTypes'
import {structure} from './sanity/structure'

export default defineConfig({
  basePath: '/studio',
  projectId,
  dataset,
  // Add and edit the content schema in the './sanity/schemaTypes' folder
  schema,
  plugins: [
    dashboardTool({ widgets: []}),
    structureTool({structure}),
    media(),
  ],
  document: {
    // For production, you would use your actual deployment URL
    productionUrl: async (prev, context) => {
      const { document } = context;
      
      // Define a type for documents with slug
      interface DocumentWithSlug {
        _type: string;
        _id: string;
        slug?: { current: string };
      }
      
      // Cast document to the appropriate type
      const typedDocument = document as DocumentWithSlug;
      
      if (typedDocument._type && typedDocument._id) {
        const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';
        
        // Create preview URL for the document
        const previewUrl = new URL('/api/preview', baseUrl);
        previewUrl.searchParams.append('secret', process.env.SANITY_PREVIEW_SECRET || '');
        
        // Add document-specific path based on type
        if (typedDocument._type === 'home') {
          previewUrl.searchParams.append('slug', '/');
        } else if (typedDocument._type === 'service' && typedDocument.slug?.current) {
          previewUrl.searchParams.append('slug', `/services/${typedDocument.slug.current}`);
        } else if (typedDocument._type === 'caseStudy' && typedDocument.slug?.current) {
          previewUrl.searchParams.append('slug', `/portfolio/${typedDocument.slug.current}`);
        } else {
          // Default to homepage for other document types
          previewUrl.searchParams.append('slug', '/');
        }
        
        // Revalidation is now handled by webhooks
        // We don't need to manually trigger revalidation here anymore
        // The webhook will be triggered automatically when content is published
        
        return previewUrl.toString();
      }
      return prev;
    },
  },
})
