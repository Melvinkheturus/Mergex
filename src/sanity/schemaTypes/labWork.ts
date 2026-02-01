import { defineField, defineType } from 'sanity'

export const labWorkType = defineType({
    name: 'labWork',
    title: 'Labs Work',
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
            name: 'shortDescription',
            title: 'Short Description',
            type: 'text',
            rows: 2,
            validation: (Rule) => Rule.max(150).required(),
        }),
        defineField({
            name: 'category',
            title: 'Category',
            type: 'string',
            options: {
                list: [
                    { title: 'Experiment', value: 'experiment' },
                    { title: 'Content', value: 'content' },
                    { title: 'Campaign', value: 'campaign' },
                    { title: 'Product', value: 'product' },
                ],
            },
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'mediaType',
            title: 'Media Type',
            type: 'string',
            options: {
                list: [
                    { title: 'Video/Reel', value: 'video' },
                    { title: 'Image', value: 'image' },
                    { title: 'External Link', value: 'link' },
                ],
            },
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'videoFile',
            title: 'Video File',
            type: 'file',
            options: {
                accept: 'video/*',
            },
            hidden: ({ parent }) => parent?.mediaType !== 'video',
        }),
        defineField({
            name: 'videoUrl',
            title: 'Video URL',
            type: 'url',
            description: 'YouTube, Vimeo, or other video URL',
            hidden: ({ parent }) => parent?.mediaType !== 'video',
        }),
        defineField({
            name: 'image',
            title: 'Image',
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
            hidden: ({ parent }) => parent?.mediaType !== 'image',
        }),
        defineField({
            name: 'externalLink',
            title: 'External Link',
            type: 'url',
            hidden: ({ parent }) => parent?.mediaType !== 'link',
        }),
        defineField({
            name: 'thumbnail',
            title: 'Thumbnail',
            type: 'image',
            description: 'Preview image for video content',
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
            name: 'tags',
            title: 'Tags',
            type: 'array',
            of: [{ type: 'string' }],
        }),
        defineField({
            name: 'featured',
            title: 'Featured',
            type: 'boolean',
            description: 'Show in featured/hero sections',
            initialValue: false,
        }),
        defineField({
            name: 'displayOrder',
            title: 'Display Order',
            type: 'number',
            description: 'Lower numbers appear first',
            validation: (Rule) => Rule.min(0),
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
            subtitle: 'category',
            media: 'thumbnail',
        },
    },
    orderings: [
        {
            title: 'Display Order',
            name: 'displayOrder',
            by: [{ field: 'displayOrder', direction: 'asc' }],
        },
        {
            title: 'Published Date, New',
            name: 'publishedDateDesc',
            by: [{ field: 'publishedAt', direction: 'desc' }],
        },
    ],
})
