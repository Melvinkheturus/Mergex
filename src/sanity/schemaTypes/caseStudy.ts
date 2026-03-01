import { defineField, defineType } from 'sanity'
import { CaseIcon } from '@sanity/icons'

export const caseStudyType = defineType({
    name: 'caseStudy',
    title: 'Case Study',
    type: 'document',
    icon: CaseIcon,
    groups: [
        { name: 'client', title: '🏢 Client Info', default: true },
        { name: 'story', title: '📖 Story' },
        { name: 'media', title: '🖼️ Media' },
        { name: 'meta', title: '⚙️ Settings' },
    ],
    fields: [
        // ── Client Info ──
        defineField({
            name: 'title',
            title: 'Case Study Title',
            type: 'string',
            group: 'client',
            description: 'Headline for this case study (e.g., "E-Commerce AI Evolution")',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            group: 'client',
            options: { source: 'title', maxLength: 96 },
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'client',
            title: 'Client Name',
            type: 'string',
            group: 'client',
            description: 'Company or brand name',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'industry',
            title: 'Industry',
            type: 'string',
            group: 'client',
            description: 'What sector does the client operate in?',
            options: {
                list: [
                    { title: 'Technology', value: 'technology' },
                    { title: 'E-commerce', value: 'ecommerce' },
                    { title: 'Healthcare', value: 'healthcare' },
                    { title: 'Finance', value: 'finance' },
                    { title: 'Education', value: 'education' },
                    { title: 'Media & Entertainment', value: 'media' },
                    { title: 'Other', value: 'other' },
                ],
            },
        }),
        defineField({
            name: 'division',
            title: 'Mergex Division',
            type: 'string',
            group: 'client',
            description: 'Which Mergex team handled this project?',
            options: {
                list: [
                    { title: 'Software', value: 'software' },
                    { title: 'Labs', value: 'labs' },
                    { title: 'Systems', value: 'systems' },
                ],
                layout: 'radio',
            },
            validation: (Rule) => Rule.required(),
        }),

        // ── Story ──
        defineField({
            name: 'problem',
            title: 'Problem Statement',
            type: 'array',
            of: [{ type: 'block' }],
            group: 'story',
            description: 'What challenge did the client face? Tell the story of their pain.',
        }),
        defineField({
            name: 'approach',
            title: 'Approach / Methodology',
            type: 'array',
            of: [{ type: 'block' }],
            group: 'story',
            description: 'How did Mergex solve it? Describe the strategy and process.',
        }),
        defineField({
            name: 'outcome',
            title: 'Outcome / Results',
            type: 'array',
            of: [{ type: 'block' }],
            group: 'story',
            description: 'What were the measurable results?',
        }),
        defineField({
            name: 'metrics',
            title: 'Key Metrics',
            type: 'array',
            group: 'story',
            description: 'Add impressive stats (e.g., "Revenue Growth: +150%")',
            of: [
                {
                    type: 'object',
                    fields: [
                        {
                            name: 'label',
                            type: 'string',
                            title: 'Metric Label',
                            description: 'e.g., "Revenue Growth"',
                        },
                        {
                            name: 'value',
                            type: 'string',
                            title: 'Metric Value',
                            description: 'e.g., "+150%"',
                        },
                    ],
                    preview: {
                        select: { title: 'label', subtitle: 'value' },
                    },
                },
            ],
        }),
        defineField({
            name: 'timeline',
            title: 'Timeline',
            type: 'object',
            group: 'story',
            description: 'How long did the project take?',
            fields: [
                { name: 'startDate', type: 'date', title: 'Start Date' },
                { name: 'endDate', type: 'date', title: 'End Date' },
                {
                    name: 'duration',
                    type: 'string',
                    title: 'Duration',
                    description: 'Human-readable (e.g., "3 months")',
                },
            ],
        }),

        // ── Media ──
        defineField({
            name: 'featuredImage',
            title: 'Featured Image',
            type: 'image',
            group: 'media',
            description: 'Main visual for this case study — used in cards and hero sections',
            options: { hotspot: true },
            fields: [
                { name: 'alt', type: 'string', title: 'Alt Text' },
            ],
        }),
        defineField({
            name: 'gallery',
            title: 'Gallery',
            type: 'array',
            group: 'media',
            description: 'Additional project screenshots and visuals',
            of: [
                {
                    type: 'image',
                    options: { hotspot: true },
                    fields: [
                        { name: 'alt', type: 'string', title: 'Alt Text' },
                        { name: 'caption', type: 'string', title: 'Caption' },
                    ],
                },
            ],
        }),

        // ── Settings ──
        defineField({
            name: 'ctaContext',
            title: 'CTA Section',
            type: 'object',
            group: 'meta',
            description: 'Custom call-to-action at the end of this case study',
            fields: [
                { name: 'heading', type: 'string', title: 'Heading' },
                { name: 'buttonText', type: 'string', title: 'Button Text' },
                { name: 'buttonLink', type: 'string', title: 'Button Link' },
            ],
        }),
        defineField({
            name: 'relatedPosts',
            title: 'Related Blog Posts',
            type: 'array',
            group: 'meta',
            description: 'Link to relevant blog articles',
            of: [{ type: 'reference', to: [{ type: 'post' }] }],
        }),
        defineField({
            name: 'featured',
            title: 'Featured',
            type: 'boolean',
            group: 'meta',
            description: 'Show this case study in prominent homepage sections',
            initialValue: false,
        }),
        defineField({
            name: 'publishedAt',
            title: 'Published At',
            type: 'datetime',
            group: 'meta',
            initialValue: () => new Date().toISOString(),
        }),
    ],
    preview: {
        select: {
            title: 'title',
            client: 'client',
            division: 'division',
            media: 'featuredImage',
        },
        prepare({ title, client, division, media }) {
            return {
                title,
                subtitle: `${client || 'Unknown client'} · ${division || 'No division'}`,
                media,
            }
        },
    },
})
