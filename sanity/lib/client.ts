import { createClient } from "next-sanity";

// Public client with CDN enabled for better performance
export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: "2025-08-18",
  useCdn: true, // Enable CDN for better performance
  token: process.env.SANITY_VIEWER_TOKEN,
  stega: {
    studioUrl: process.env.NEXT_PUBLIC_SANITY_STUDIO_URL,
  },
});

// Preview client with CDN disabled and draft perspective for preview mode
export const previewClient = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: "2025-08-18",
  useCdn: false, // Disable CDN for preview mode
  token: process.env.SANITY_VIEWER_TOKEN,
  perspective: "previewDrafts", // Show draft content
  stega: {
    studioUrl: process.env.NEXT_PUBLIC_SANITY_STUDIO_URL,
  },
});

// Helper function to get the appropriate client based on preview mode
export const getClient = (preview = false) => {
  return preview ? previewClient : client;
};
