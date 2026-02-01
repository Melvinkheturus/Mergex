import { defineField, defineType } from 'sanity'

export const caseStudyType = defineType({
    name: 'caseStudy',
    title: 'Case Study',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'title',
                maxLength: 96,
            },
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'client',
            title: 'Client Name',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'industry',
            title: 'Industry',
            type: 'string',
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
            title: 'Division',
            type: 'string',
            description: 'Which Mergex division handled this project',
            options: {
                list: [
                    { title: 'Software', value: 'software' },
                    { title: 'Labs', value: 'labs' },
                    { title: 'Systems', value: 'systems' },
                ],
            },
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'problem',
            title: 'Problem Statement',
            type: 'array',
            of: [{ type: 'block' }],
            description: 'What challenge did the client face?',
        }),
        defineField({
            name: 'approach',
            title: 'Approach / Methodology',
            type: 'array',
            of: [{ type: 'block' }],
            description: 'How did we solve it?',
        }),
        defineField({
            name: 'outcome',
            title: 'Outcome / Results',
            type: 'array',
            of: [{ type: 'block' }],
            description: 'What were the results?',
        }),
        defineField({
            name: 'metrics',
            title: 'Key Metrics',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        { name: 'label', type: 'string', title: 'Label' },
                        { name: 'value', type: 'string', title: 'Value' },
                    ],
                },
            ],
        }),
        defineField({
            name: 'timeline',
            title: 'Timeline',
            type: 'object',
            fields: [
                { name: 'startDate', type: 'date', title: 'Start Date' },
                { name: 'endDate', type: 'date', title: 'End Date' },
                { name: 'duration', type: 'string', title: 'Duration (e.g., "3 months")' },
            ],
        }),
        defineField({
            name: 'featuredImage',
            title: 'Featured Image',
            type: 'image',
            options: {
                hotspot: true,
            },
            fields: [
                {
                    name: 'alt',
                    type: 'string',
                    title: 'Alternative text',
                },
            ],
        }),
        defineField({
            name: 'gallery',
            title: 'Gallery',
            type: 'array',
            of: [
                {
                    type: 'image',
                    options: { hotspot: true },
                    fields: [
                        {
                            name: 'alt',
                            type: 'string',
                            title: 'Alternative text',
                        },
                        {
                            name: 'caption',
                            type: 'string',
                            title: 'Caption',
                        },
                    ],
                },
            ],
        }),
        defineField({
            name: 'ctaContext',
            title: 'CTA Context',
            type: 'object',
            description: 'Custom call-to-action for this case study',
            fields: [
                { name: 'heading', type: 'string', title: 'Heading' },
                { name: 'buttonText', type: 'string', title: 'Button Text' },
                { name: 'buttonLink', type: 'string', title: 'Button Link' },
            ],
        }),
        defineField({
            name: 'relatedPosts',
            title: 'Related Posts',
            type: 'array',
            of: [{ type: 'reference', to: [{ type: 'post' }] }],
        }),
        defineField({
            name: 'featured',
            title: 'Featured',
            type: 'boolean',
            description: 'Show this case study in featured sections',
            initialValue: false,
        }),
        defineField({
            name: 'publishedAt',
            title: 'Published At',
            type: 'datetime',
            initialValue: () => new Date().toISOString(),
        }),
    ],
    preview: {
        select: {
            title: 'title',
            subtitle: 'client',
            media: 'featuredImage',
        },
    },
})
