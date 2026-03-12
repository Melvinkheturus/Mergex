import { createClient } from 'next-sanity'
import { apiVersion, dataset, projectId } from '../env'

/**
 * A server-side only client for writing to Sanity.
 * Requires SANITY_WRITE_TOKEN in .env.local
 */
export const writeClient = createClient({
    projectId,
    dataset,
    apiVersion,
    useCdn: false, // Must be false for mutations
    token: process.env.SANITY_WRITE_TOKEN,
})
