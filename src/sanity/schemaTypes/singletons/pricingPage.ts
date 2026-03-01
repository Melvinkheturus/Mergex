import { defineField, defineType } from 'sanity'
import { CreditCardIcon } from '@sanity/icons'

/**
 * Pricing Page Singleton
 * Maps to: src/modules/pricing/content/pricing.ts
 * Contains all section content for the Pricing page
 */
export const pricingPageType = defineType({
    name: 'pricingPage',
    title: 'Pricing Page',
    type: 'document',
    icon: CreditCardIcon,
    description: 'Manage all content sections for the Pricing page',
    groups: [
        { name: 'hero', title: '🦸 Hero', default: true },
        { name: 'tiers', title: '💰 Engagement Tiers' },
        { name: 'factors', title: '📊 Pricing Factors' },
        { name: 'noPay', title: '🚫 What You Don\'t Pay For' },
        { name: 'faq', title: '❓ FAQ' },
        { name: 'cta', title: '📣 CTA' },
        { name: 'seo', title: '🔍 SEO' },
    ],
    fields: [
        // ── Hero ──
        defineField({
            name: 'heroHeadline',
            title: 'Headline',
            type: 'string',
            group: 'hero',
            validation: (Rule) => Rule.max(100),
        }),
        defineField({
            name: 'heroSubheadline',
            title: 'Subheadline',
            type: 'text',
            rows: 2,
            group: 'hero',
        }),

        // ── Engagement Tiers ──
        defineField({
            name: 'tiersHeadline',
            title: 'Headline',
            type: 'string',
            group: 'tiers',
        }),
        defineField({
            name: 'tiersSubheadline',
            title: 'Subheadline',
            type: 'string',
            group: 'tiers',
        }),
        defineField({
            name: 'tiers',
            title: 'Engagement Tiers',
            type: 'array',
            group: 'tiers',
            of: [
                {
                    type: 'object',
                    fields: [
                        { name: 'name', type: 'string', title: 'Tier Name' },
                        { name: 'tagline', type: 'string', title: 'Tagline' },
                        { name: 'bestFor', type: 'string', title: 'Best For' },
                        { name: 'includes', type: 'array', title: 'Includes', of: [{ type: 'string' }] },
                        { name: 'priceFraming', type: 'text', title: 'Price Framing', description: 'How pricing is communicated (no exact numbers)' },
                        { name: 'icon', type: 'string', title: 'Icon Key' },
                        { name: 'recommended', type: 'boolean', title: 'Recommended?', initialValue: false },
                    ],
                    preview: {
                        select: { title: 'name', subtitle: 'tagline', recommended: 'recommended' },
                        prepare({ title, subtitle, recommended }) {
                            return { title: `${recommended ? '⭐ ' : ''}${title}`, subtitle }
                        },
                    },
                },
            ],
        }),

        // ── Pricing Factors ──
        defineField({
            name: 'factorsHeadline',
            title: 'Headline',
            type: 'string',
            group: 'factors',
        }),
        defineField({
            name: 'factorsSubheadline',
            title: 'Subheadline',
            type: 'string',
            group: 'factors',
        }),
        defineField({
            name: 'factors',
            title: 'Pricing Factors',
            type: 'array',
            group: 'factors',
            of: [
                {
                    type: 'object',
                    fields: [
                        { name: 'title', type: 'string', title: 'Title' },
                        { name: 'description', type: 'text', title: 'Description' },
                    ],
                    preview: {
                        select: { title: 'title' },
                    },
                },
            ],
        }),
        defineField({
            name: 'factorsClosingStatement',
            title: 'Closing Statement',
            type: 'text',
            rows: 2,
            group: 'factors',
        }),
        defineField({
            name: 'factorsLabsClarification',
            title: 'Labs Clarification',
            type: 'text',
            rows: 2,
            group: 'factors',
            description: 'Note about Labs engagement scoping',
        }),

        // ── What You Don't Pay For ──
        defineField({
            name: 'noPayHeadline',
            title: 'Headline',
            type: 'string',
            group: 'noPay',
        }),
        defineField({
            name: 'noPaySubheadline',
            title: 'Subheadline',
            type: 'string',
            group: 'noPay',
        }),
        defineField({
            name: 'noPayItems',
            title: 'Items',
            type: 'array',
            group: 'noPay',
            of: [
                {
                    type: 'object',
                    fields: [
                        { name: 'title', type: 'string', title: 'Title' },
                        { name: 'description', type: 'text', title: 'Description' },
                    ],
                    preview: {
                        select: { title: 'title' },
                    },
                },
            ],
        }),

        // ── FAQ ──
        defineField({
            name: 'faqHeadline',
            title: 'FAQ Section Headline',
            type: 'string',
            group: 'faq',
        }),
        defineField({
            name: 'faqQuestions',
            title: 'FAQ Questions',
            type: 'array',
            group: 'faq',
            description: 'Pricing-specific FAQ questions',
            of: [
                {
                    type: 'object',
                    fields: [
                        { name: 'question', type: 'string', title: 'Question' },
                        { name: 'answer', type: 'text', title: 'Answer', rows: 3 },
                    ],
                    preview: {
                        select: { title: 'question' },
                    },
                },
            ],
        }),

        // ── CTA ──
        defineField({
            name: 'ctaHeadline',
            title: 'CTA Headline',
            type: 'string',
            group: 'cta',
        }),
        defineField({
            name: 'ctaSubheadline',
            title: 'CTA Subheadline',
            type: 'string',
            group: 'cta',
        }),
        defineField({
            name: 'ctaPrimaryCTA',
            title: 'Primary CTA Text',
            type: 'string',
            group: 'cta',
        }),
        defineField({
            name: 'ctaSecondaryCTA',
            title: 'Secondary CTA Text',
            type: 'string',
            group: 'cta',
        }),
        defineField({
            name: 'ctaReassurance',
            title: 'Reassurance Text',
            type: 'text',
            rows: 2,
            group: 'cta',
        }),
        defineField({
            name: 'ctaFinalReassurance',
            title: 'Final Reassurance',
            type: 'text',
            rows: 2,
            group: 'cta',
        }),

        // ── SEO ──
        defineField({
            name: 'seo',
            title: 'SEO Settings',
            type: 'object',
            group: 'seo',
            fields: [
                { name: 'metaTitle', type: 'string', title: 'Meta Title', validation: (Rule) => Rule.max(60) },
                { name: 'metaDescription', type: 'text', title: 'Meta Description', rows: 3, validation: (Rule) => Rule.max(160) },
                { name: 'ogImage', type: 'image', title: 'Social Share Image' },
            ],
        }),
    ],
    preview: {
        prepare() {
            return {
                title: 'Pricing Page',
                subtitle: 'Engagement tiers, factors & FAQ',
            }
        },
    },
})
