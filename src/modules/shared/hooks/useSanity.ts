/**
 * Sanity React Hooks with Fallback Support
 * 
 * These hooks fetch content from Sanity and automatically
 * fallback to provided default content if Sanity data is unavailable.
 */

import { useEffect, useState } from 'react'
import * as sanityQueries from '@/services/sanity/queries'

type LoadingState = 'idle' | 'loading' | 'success' | 'error'

interface UseContentOptions<T> {
    fallback?: T
    enabled?: boolean
}

function useContent<T>(
    queryFn: () => Promise<T | null>,
    options: UseContentOptions<T> = {}
) {
    const { fallback, enabled = true } = options
    const [data, setData] = useState<T | undefined>(fallback)
    const [status, setStatus] = useState<LoadingState>('idle')

    useEffect(() => {
        if (!enabled) return

        let cancelled = false

        const fetchData = async () => {
            setStatus('loading')

            try {
                const result = await queryFn()

                if (cancelled) return

                if (result) {
                    setData(result)
                    setStatus('success')
                } else {
                    // Sanity returned null, use fallback
                    setData(fallback)
                    setStatus('error')
                }
            } catch (error) {
                if (cancelled) return
                console.error('Content fetch error:', error)
                setData(fallback)
                setStatus('error')
            }
        }

        fetchData()

        return () => {
            cancelled = true
        }
    }, [enabled])

    return {
        data,
        isLoading: status === 'loading',
        isError: status === 'error',
        isSuccess: status === 'success',
        // True if using fallback content
        isFallback: status === 'error' || (!data && fallback),
    }
}

// Blog Posts Hooks
export function useAllPosts(fallback?: any[]) {
    return useContent(() => sanityQueries.getAllPosts(), { fallback })
}

export function useFeaturedPosts(limit = 3, fallback?: any[]) {
    return useContent(() => sanityQueries.getFeaturedPosts(limit), { fallback })
}

export function usePostBySlug(slug: string, fallback?: any) {
    return useContent(() => sanityQueries.getPostBySlug(slug), { fallback })
}

// Case Studies Hooks
export function useAllCaseStudies(fallback?: any[]) {
    return useContent(() => sanityQueries.getAllCaseStudies(), { fallback })
}

export function useCaseStudiesByDivision(division: string, fallback?: any[]) {
    return useContent(
        () => sanityQueries.getCaseStudiesByDivision(division),
        { fallback }
    )
}

// Labs Work Hooks
export function useAllLabsWork(fallback?: any[]) {
    return useContent(() => sanityQueries.getAllLabsWork(), { fallback })
}

export function useFeaturedLabsWork(limit = 6, fallback?: any[]) {
    return useContent(() => sanityQueries.getFeaturedLabsWork(limit), { fallback })
}

// Resources Hooks
export function useAllResources(fallback?: any[]) {
    return useContent(() => sanityQueries.getAllResources(), { fallback })
}

// Testimonials Hooks
export function useTestimonialsByContext(context: string, fallback?: any[]) {
    return useContent(
        () => sanityQueries.getTestimonialsByContext(context),
        { fallback }
    )
}

export function useAllTestimonials(fallback?: any[]) {
    return useContent(() => sanityQueries.getAllTestimonials(), { fallback })
}

// FAQs Hooks
export function useFAQsByPage(pageContext: string, fallback?: any[]) {
    return useContent(
        () => sanityQueries.getFAQsByPage(pageContext),
        { fallback }
    )
}

// Pricing Blocks Hook
export function useAllPricingBlocks(fallback?: any[]) {
    return useContent(() => sanityQueries.getAllPricingBlocks(), { fallback })
}

// Partner Types Hook
export function useAllPartnerTypes(fallback?: any[]) {
    return useContent(() => sanityQueries.getAllPartnerTypes(), { fallback })
}

// Career Roles Hooks
export function useOpenCareerRoles(fallback?: any[]) {
    return useContent(() => sanityQueries.getOpenCareerRoles(), { fallback })
}

export function useCareerRolesByDivision(division: string, fallback?: any[]) {
    return useContent(
        () => sanityQueries.getCareerRolesByDivision(division),
        { fallback }
    )
}
