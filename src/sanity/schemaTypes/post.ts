import { defineField, defineType } from 'sanity'

export const postType = defineType({
    name: 'post',
    title: 'Blog Post',
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
            name: 'publishedAt',
            title: 'Published At',
            type: 'datetime',
            initialValue: () => new Date().toISOString(),
        }),
        defineField({
            name: 'excerpt',
            title: 'Excerpt',
            type: 'text',
            rows: 3,
            description: 'Short description for previews and SEO',
            validation: (Rule) => Rule.max(200),
        }),
        defineField({
            name: 'body',
            title: 'Body',
            type: 'array',
            of: [
                {
                    type: 'block',
                    styles: [
                        { title: 'Normal', value: 'normal' },
                        { title: 'H2', value: 'h2' },
                        { title: 'H3', value: 'h3' },
                        { title: 'H4', value: 'h4' },
                        { title: 'Quote', value: 'blockquote' },
                    ],
                    marks: {
                        decorators: [
                            { title: 'Strong', value: 'strong' },
                            { title: 'Emphasis', value: 'em' },
                            { title: 'Code', value: 'code' },
                        ],
                        annotations: [
                            {
                                name: 'link',
                                type: 'object',
                                title: 'URL',
                                fields: [
                                    {
                                        name: 'href',
                                        type: 'url',
                                        title: 'URL',
                                    },
                                ],
                            },
                        ],
                    },
                },
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
            name: 'coverImage',
            title: 'Cover Image',
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
            name: 'insightFormat',
            title: 'Insight Format',
            type: 'string',
            description: 'The type of insight - determines display category on the Insights page',
            options: {
                list: [
                    { title: 'Framework', value: 'framework' },
                    { title: 'Case Insight', value: 'case-insight' },
                    { title: 'Experiment', value: 'experiment' },
                    { title: 'Strategic Note', value: 'strategic-note' },
                ],
                layout: 'radio',
            },
        }),
        defineField({
            name: 'tldr',
            title: 'TL;DR',
            type: 'string',
            description: 'One-sentence summary for quick scanning and LLM context',
            validation: (Rule) => Rule.max(160),
        }),
        defineField({
            name: 'keyTakeaway',
            title: 'Key Takeaway',
            type: 'text',
            rows: 2,
            description: 'The single most important lesson from this insight',
        }),
        defineField({
            name: 'keyConcepts',
            title: 'Key Concepts',
            type: 'array',
            of: [{ type: 'string' }],
            description: 'Structured concept tags - helps LLMs understand this content',
        }),
        defineField({
            name: 'relatedTopics',
            title: 'Related Topics',
            type: 'array',
            of: [{ type: 'string' }],
            description: 'Connect ideas across insights for the knowledge graph',
        }),
        defineField({
            name: 'categories',
            title: 'Categories',
            type: 'array',
            of: [{ type: 'string' }],
            options: {
                list: [
                    { title: 'Systems', value: 'systems' },
                    { title: 'AI', value: 'ai' },
                    { title: 'Automation', value: 'automation' },
                    { title: 'Creative', value: 'creative' },
                    { title: 'Scaling', value: 'scaling' },
                    { title: 'Software', value: 'software' },
                    { title: 'Labs', value: 'labs' },
                    { title: 'Media', value: 'media' },
                ],
            },
        }),
        defineField({
            name: 'tags',
            title: 'Tags',
            type: 'array',
            of: [{ type: 'string' }],
        }),
        defineField({
            name: 'author',
            title: 'Author',
            type: 'object',
            fields: [
                { name: 'name', type: 'string', title: 'Name' },
                { name: 'role', type: 'string', title: 'Role' },
                {
                    name: 'image',
                    type: 'image',
                    title: 'Image',
                    options: { hotspot: true },
                },
            ],
        }),
        defineField({
            name: 'featured',
            title: 'Featured',
            type: 'boolean',
            description: 'Show this post in featured sections',
            initialValue: false,
        }),
        // SEO Fields
        defineField({
            name: 'seo',
            title: 'SEO',
            type: 'object',
            fields: [
                {
                    name: 'metaTitle',
                    type: 'string',
                    title: 'Meta Title',
                    validation: (Rule) => Rule.max(60),
                },
                {
                    name: 'metaDescription',
                    type: 'text',
                    title: 'Meta Description',
                    rows: 3,
                    validation: (Rule) => Rule.max(160),
                },
                {
                    name: 'ogImage',
                    type: 'image',
                    title: 'Open Graph Image',
                    description: 'Image for social media sharing',
                },
            ],
        }),
    ],
    preview: {
        select: {
            title: 'title',
            subtitle: 'publishedAt',
            media: 'coverImage',
        },
    },
})
