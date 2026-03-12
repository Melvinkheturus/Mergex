import { defineField, defineType } from 'sanity'
import { DocumentTextIcon } from '@sanity/icons'

export const postType = defineType({
    name: 'post',
    title: 'Blog Post',
    type: 'document',
    icon: DocumentTextIcon,
    groups: [
        { name: 'content', title: '✍️ Content', default: true },
        { name: 'metadata', title: '🏷️ Metadata' },
        { name: 'seo', title: '🔍 SEO' },
    ],
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
            group: 'content',
            description: 'The blog post headline — make it compelling!',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            group: 'content',
            description: 'URL path for this post (auto-generated from title)',
            options: {
                source: 'title',
                maxLength: 96,
            },
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'excerpt',
            title: 'Excerpt',
            type: 'text',
            rows: 3,
            group: 'content',
            description: 'Short summary shown in previews and search results (max 200 chars)',
            validation: (Rule) => Rule.max(200),
        }),
        defineField({
            name: 'coverImage',
            title: 'Cover Image',
            type: 'image',
            group: 'content',
            description: 'Main image for the post — displayed at the top and in previews',
            options: {
                hotspot: true,
            },
            fields: [
                {
                    name: 'alt',
                    type: 'string',
                    title: 'Alt Text',
                    description: 'Describe the image for accessibility',
                },
            ],
        }),
        defineField({
            name: 'body',
            title: 'Body',
            type: 'array',
            group: 'content',
            description: 'Write your article here — use headings, links, images, and quotes',
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
                            title: 'Alt Text',
                            description: 'Describe the image for screen readers',
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

        // ── Metadata ──
        defineField({
            name: 'author',
            title: 'Author',
            type: 'reference',
            to: [{ type: 'author' }],
            group: 'metadata',
            description: 'Who wrote this post? Select from the team directory.',
        }),
        defineField({
            name: 'categories',
            title: 'Categories',
            type: 'array',
            of: [{ type: 'reference', to: [{ type: 'category' }] }],
            group: 'metadata',
            description: 'Assign categories to help readers find related content',
        }),
        defineField({
            name: 'tags',
            title: 'Tags',
            type: 'array',
            of: [{ type: 'string' }],
            group: 'metadata',
            description: 'Add freeform tags for additional filtering (e.g., "AI", "react")',
            options: {
                layout: 'tags',
            },
        }),
        defineField({
            name: 'publishedAt',
            title: 'Publish Date',
            type: 'datetime',
            group: 'metadata',
            description: 'When this post goes live — future dates allow scheduling',
            initialValue: () => new Date().toISOString(),
        }),
        defineField({
            name: 'featured',
            title: 'Featured',
            type: 'boolean',
            group: 'metadata',
            description: 'Show this post in featured/hero sections on the site',
            initialValue: false,
        }),
        defineField({
            name: 'status',
            title: 'Status',
            type: 'string',
            group: 'metadata',
            description: 'Track the editorial workflow stage of this post',
            options: {
                list: [
                    { title: '📝 Draft', value: 'draft' },
                    { title: '👀 In Review', value: 'review' },
                    { title: '✅ Published', value: 'published' },
                ],
                layout: 'radio',
            },
            initialValue: 'draft',
        }),

        // ── SEO ──
        defineField({
            name: 'seo',
            title: 'SEO Settings',
            type: 'object',
            group: 'seo',
            description: 'Customize how this post appears in search engines and social media',
            fields: [
                {
                    name: 'metaTitle',
                    type: 'string',
                    title: 'Meta Title',
                    description: 'Title shown in Google results (50-60 chars)',
                    validation: (Rule) => Rule.max(60),
                },
                {
                    name: 'metaDescription',
                    type: 'text',
                    title: 'Meta Description',
                    rows: 3,
                    description: 'Description in search results (150-160 chars)',
                    validation: (Rule) => Rule.max(160),
                },
                {
                    name: 'ogImage',
                    type: 'image',
                    title: 'Social Share Image',
                    description: 'Image shown when shared on LinkedIn/Twitter (1200×630)',
                },
            ],
        }),
    ],
    preview: {
        select: {
            title: 'title',
            authorName: 'author.name',
            media: 'coverImage',
            status: 'status',
            publishedAt: 'publishedAt',
        },
        prepare({ title, authorName, media, status, publishedAt }) {
            const statusEmoji = status === 'published' ? '✅' : status === 'review' ? '👀' : '📝'
            const date = publishedAt ? new Date(publishedAt).toLocaleDateString() : 'No date'
            return {
                title: `${statusEmoji} ${title}`,
                subtitle: `${authorName || 'No author'} · ${date}`,
                media,
            }
        },
    },
    orderings: [
        {
            title: 'Published Date, New',
            name: 'publishedDateDesc',
            by: [{ field: 'publishedAt', direction: 'desc' }],
        },
    ],
})
