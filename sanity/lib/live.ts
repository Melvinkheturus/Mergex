import { createClient, type QueryParams } from 'next-sanity';
import { draftMode } from 'next/headers';
import { client } from './client';

// Define the type for the query function
type QueryFunction<T> = (params?: QueryParams) => string;

// Define the type for the sanityFetch options
interface SanityFetchOptions {
  query: string | QueryFunction<any>;
  params?: QueryParams;
  tags?: string[];
  revalidate?: number;
}

/**
 * Fetch data from Sanity with automatic draft mode support
 * This function automatically detects if draft mode is enabled and fetches draft content accordingly
 */
export async function sanityFetch<T>({ 
  query, 
  params = {}, 
  tags = [], 
  revalidate = 60 
}: SanityFetchOptions): Promise<{ data: T }> {
  const draftModeData = await draftMode();
  const isDraftMode = draftModeData.isEnabled;
  
  // Create a preview client when in draft mode
  const fetchClient = isDraftMode
    ? createClient({
        ...client.config(),
        useCdn: false,
        token: process.env.SANITY_VIEWER_TOKEN,
        perspective: 'previewDrafts',
      })
    : client;

  try {
    // Handle both string queries and query functions
    const queryString = typeof query === 'function' ? query(params) : query;
    
    const data = await fetchClient.fetch<T>(queryString, params, {
      // Use cache with revalidation in production, disable cache in draft mode
      next: {
        revalidate: isDraftMode ? 0 : revalidate,
        tags: [...tags],
      },
    });

    return { data };
  } catch (error) {
    console.error('Error fetching Sanity data:', error);
    throw error;
  }
}

/**
 * Define a type-safe query function
 * This is a helper to create strongly-typed queries
 */
export function defineQuery<T>(query: string) {
  return (params?: QueryParams) => query;
}