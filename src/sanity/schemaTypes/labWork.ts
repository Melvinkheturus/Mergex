import { defineField, defineType } from 'sanity'
import { PlayIcon } from '@sanity/icons'

export const labWorkType = defineType({
    name: 'labWork',
    title: 'Labs Work',
    type: 'document',
    icon: PlayIcon,
    description: 'Experiments, reels, and creative work from the Labs team',
    groups: [
        { name: 'content', title: '🎬 Content', default: true },
        { name: 'media', title: '📁 Media Files' },
        { name: 'settings', title: '⚙️ Settings' },
    ],
    fields: [
        // ── Content ──
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
            group: 'content',
            description: 'Name of this lab work piece',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            group: 'content',
            options: { source: 'title', maxLength: 96 },
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'shortDescription',
            title: 'Short Description',
            type: 'text',
            rows: 2,
            group: 'content',
            description: 'One-liner that appears on cards (max 150 chars)',
            validation: (Rule) => Rule.max(150).required(),
        }),
        defineField({
            name: 'category',
            title: 'Category',
            type: 'string',
            group: 'content',
            description: 'What type of creative work is this?',
            options: {
                list: [
                    { title: '🧪 Experiment', value: 'experiment' },
                    { title: '🎬 Content', value: 'content' },
                    { title: '📢 Campaign', value: 'campaign' },
                    { title: '🚀 Product', value: 'product' },
                ],
                layout: 'radio',
            },
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'tags',
            title: 'Tags',
            type: 'array',
            of: [{ type: 'string' }],
            group: 'content',
            description: 'Add tags for filtering (e.g., "AI", "video", "branding")',
            options: { layout: 'tags' },
        }),

        // ── Media Files ──
        defineField({
            name: 'mediaType',
            title: 'Media Type',
            type: 'string',
            group: 'media',
            description: 'What kind of media is the main asset?',
            options: {
                list: [
                    { title: '🎥 Video/Reel', value: 'video' },
                    { title: '🖼️ Image', value: 'image' },
                    { title: '🔗 External Link', value: 'link' },
                ],
            },
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'videoFile',
            title: 'Video File',
            type: 'file',
            group: 'media',
            description: 'Upload directly (MP4 recommended, max 100MB)',
            options: { accept: 'video/*' },
            hidden: ({ parent }) => parent?.mediaType !== 'video',
        }),
        defineField({
            name: 'videoUrl',
            title: 'Video URL',
            type: 'url',
            group: 'media',
            description: 'YouTube, Vimeo, or Instagram reel URL',
            hidden: ({ parent }) => parent?.mediaType !== 'video',
        }),
        defineField({
            name: 'image',
            title: 'Image',
            type: 'image',
            group: 'media',
            options: { hotspot: true },
            fields: [
                { name: 'alt', type: 'string', title: 'Alt Text' },
            ],
            hidden: ({ parent }) => parent?.mediaType !== 'image',
        }),
        defineField({
            name: 'externalLink',
            title: 'External Link',
            type: 'url',
            group: 'media',
            description: 'Link to external platform (Behance, Dribbble, etc.)',
            hidden: ({ parent }) => parent?.mediaType !== 'link',
        }),
        defineField({
            name: 'thumbnail',
            title: 'Thumbnail',
            type: 'image',
            group: 'media',
            description: 'Preview image shown on cards (required for videos)',
            options: { hotspot: true },
            fields: [
                { name: 'alt', type: 'string', title: 'Alt Text' },
            ],
        }),

        // ── Settings ──
        defineField({
            name: 'featured',
            title: 'Featured',
            type: 'boolean',
            group: 'settings',
            description: 'Show in hero/featured carousel sections',
            initialValue: false,
        }),
        defineField({
            name: 'displayOrder',
            title: 'Display Order',
            type: 'number',
            group: 'settings',
            description: 'Lower numbers appear first (0 = top priority)',
            validation: (Rule) => Rule.min(0),
        }),
        defineField({
            name: 'publishedAt',
            title: 'Published At',
            type: 'datetime',
            group: 'settings',
            initialValue: () => new Date().toISOString(),
        }),
    ],
    preview: {
        select: {
            title: 'title',
            subtitle: 'category',
            media: 'thumbnail',
            featured: 'featured',
        },
        prepare({ title, subtitle, media, featured }) {
            const categoryEmoji: Record<string, string> = {
                experiment: '🧪',
                content: '🎬',
                campaign: '📢',
                product: '🚀',
            }
            return {
                title: `${featured ? '⭐ ' : ''}${title}`,
                subtitle: `${categoryEmoji[subtitle] || ''} ${subtitle || 'Uncategorized'}`,
                media,
            }
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
