import { defineField, defineType } from 'sanity'
import { RocketIcon } from '@sanity/icons'

/**
 * Products Page Singleton
 * Maps to: src/app/products/page.tsx
 * Contains all content for the Products page
 */
export const productsPageType = defineType({
    name: 'productsPage',
    title: 'Products Page',
    type: 'document',
    icon: RocketIcon,
    description: 'Manage all content for the Products page',
    groups: [
        { name: 'hero', title: '🦸 Hero', default: true },
        { name: 'products', title: '📦 Products' },
        { name: 'whyWeBuild', title: '💡 Why We Build' },
        { name: 'cta', title: '📣 CTAs' },
        { name: 'seo', title: '🔍 SEO' },
    ],
    fields: [
        // ── Hero ──
        defineField({
            name: 'heroHeadlinePart1',
            title: 'Headline Part 1',
            type: 'string',
            group: 'hero',
            description: 'e.g. "Building Tools from"',
        }),
        defineField({
            name: 'heroHeadlinePart2',
            title: 'Headline Part 2 (Gradient)',
            type: 'string',
            group: 'hero',
            description: 'e.g. "Real Problems"',
        }),
        defineField({
            name: 'heroSubheadline',
            title: 'Subheadline',
            type: 'text',
            rows: 2,
            group: 'hero',
        }),
        defineField({
            name: 'heroSupportText',
            title: 'Support Text',
            type: 'text',
            rows: 2,
            group: 'hero',
        }),

        // ── Products ──
        defineField({
            name: 'products',
            title: 'Product Cards',
            type: 'array',
            group: 'products',
            of: [
                {
                    type: 'object',
                    fields: [
                        { name: 'name', type: 'string', title: 'Product Name' },
                        { name: 'tagline', type: 'string', title: 'Tagline' },
                        { name: 'description', type: 'text', title: 'Description' },
                        {
                            name: 'status',
                            type: 'string',
                            title: 'Status',
                            options: {
                                list: [
                                    { title: 'Alpha', value: 'Alpha' },
                                    { title: 'Beta', value: 'Beta' },
                                    { title: 'Coming Soon', value: 'Coming Soon' },
                                    { title: 'Live', value: 'Live' },
                                ],
                            },
                        },
                        {
                            name: 'features',
                            type: 'array',
                            title: 'Features',
                            of: [{ type: 'string' }],
                        },
                    ],
                    preview: {
                        select: { title: 'name', subtitle: 'status' },
                    },
                },
            ],
        }),

        // ── Why We Build ──
        defineField({
            name: 'whyHeadline',
            title: 'Headline',
            type: 'string',
            group: 'whyWeBuild',
        }),
        defineField({
            name: 'whyParagraphs',
            title: 'Paragraphs',
            type: 'array',
            group: 'whyWeBuild',
            of: [{ type: 'text' }],
        }),

        // ── CTAs ──
        defineField({
            name: 'waitlistHeadline',
            title: 'Waitlist Headline',
            type: 'string',
            group: 'cta',
        }),
        defineField({
            name: 'waitlistSubheadline',
            title: 'Waitlist Subheadline',
            type: 'text',
            rows: 2,
            group: 'cta',
        }),
        defineField({
            name: 'waitlistButtonText',
            title: 'Waitlist Button Text',
            type: 'string',
            group: 'cta',
        }),
        defineField({
            name: 'serviceCtaHeadline',
            title: 'Service CTA Headline',
            type: 'string',
            group: 'cta',
        }),
        defineField({
            name: 'serviceCtaSubheadline',
            title: 'Service CTA Subheadline',
            type: 'text',
            rows: 2,
            group: 'cta',
        }),
        defineField({
            name: 'serviceCtaButtonText',
            title: 'Service CTA Button Text',
            type: 'string',
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
                title: 'Products Page',
                subtitle: 'Product cards, waitlist & CTAs',
            }
        },
    },
})
