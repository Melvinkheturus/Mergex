import { defineField, defineType } from 'sanity'

export const pricingBlockType = defineType({
    name: 'pricingBlock',
    title: 'Pricing Block',
    type: 'document',
    description: 'Pricing content blocks (NOT price data)',
    fields: [
        defineField({
            name: 'tierName',
            title: 'Tier Name',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'tierName',
                maxLength: 96,
            },
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'description',
            title: 'Description',
            type: 'text',
            rows: 3,
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'engagementModel',
            title: 'Engagement Model Explanation',
            type: 'array',
            of: [{ type: 'block' }],
            description: 'Explain how this engagement works',
        }),
        defineField({
            name: 'featureHighlights',
            title: 'Feature Highlights',
            type: 'array',
            of: [{ type: 'string' }],
            description: 'Key features/benefits (bullet points)',
        }),
        defineField({
            name: 'idealFor',
            title: 'Ideal For',
            type: 'text',
            rows: 2,
            description: 'Who is this pricing tier ideal for?',
        }),
        defineField({
            name: 'ctaText',
            title: 'CTA Text',
            type: 'string',
            description: 'Call-to-action button text',
        }),
        defineField({
            name: 'ctaLink',
            title: 'CTA Link',
            type: 'string',
            description: 'Where the CTA leads',
        }),
        defineField({
            name: 'position',
            title: 'Position',
            type: 'number',
            description: 'Display order (lower appears first)',
            validation: (Rule) => Rule.min(0),
        }),
        defineField({
            name: 'highlighted',
            title: 'Highlighted',
            type: 'boolean',
            description: 'Mark as recommended/popular',
            initialValue: false,
        }),
        defineField({
            name: 'visible',
            title: 'Visible',
            type: 'boolean',
            initialValue: true,
        }),
    ],
    preview: {
        select: {
            title: 'tierName',
            subtitle: 'description',
        },
    },
    orderings: [
        {
            title: 'Position',
            name: 'position',
            by: [{ field: 'position', direction: 'asc' }],
        },
    ],
})
