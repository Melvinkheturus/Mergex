import { client, previewClient, getClient } from '../../sanity/lib/client';

/**
 * Fetches data from Sanity with proper revalidation and caching
 * @param query GROQ query
 * @param params Query parameters
 * @param options Additional options for fetching data
 * @returns Fetched data
 */
export async function fetchSanityData(
  query: string, 
  params?: Record<string, any>,
  options?: {
    preview?: boolean;
    revalidate?: number;
  }
) {
  const { preview = false, revalidate = 60 } = options || {};
  
  try {
    // Use the appropriate client based on preview mode
    const sanityClient = getClient(preview);
    
    return await sanityClient.fetch(query, params, {
      // Use caching with revalidation for better performance
      next: { revalidate }
    });
  } catch (error) {
    console.error('Error fetching Sanity data:', error);
    throw error;
  }
}