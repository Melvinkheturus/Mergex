import { defineField, defineType } from 'sanity'
import { DownloadIcon } from '@sanity/icons'

export const resourceType = defineType({
    name: 'resource',
    title: 'Resource',
    type: 'document',
    icon: DownloadIcon,
    description: 'Downloadable guides, templates, playbooks, and tools',
    groups: [
        { name: 'content', title: '📖 Content', default: true },
        { name: 'access', title: '🔐 Access & Delivery' },
        { name: 'meta', title: '⚙️ Settings' },
    ],
    fields: [
        // ── Content ──
        defineField({
            name: 'title',
            title: 'Resource Title',
            type: 'string',
            group: 'content',
            description: 'Clear, descriptive name (e.g., "SaaS Launch Playbook")',
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
            name: 'description',
            title: 'Description',
            type: 'text',
            rows: 3,
            group: 'content',
            description: 'What does this resource help with? (shown in listings)',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'resourceType',
            title: 'Resource Type',
            type: 'string',
            group: 'content',
            description: 'What format is this resource?',
            options: {
                list: [
                    { title: '📘 Guide', value: 'guide' },
                    { title: '📋 Template', value: 'template' },
                    { title: '📕 Playbook', value: 'playbook' },
                    { title: '📄 PDF Document', value: 'pdf' },
                    { title: '🎥 Video Tutorial', value: 'video' },
                    { title: '🔧 Tool/Script', value: 'tool' },
                ],
            },
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'category',
            title: 'Category',
            type: 'string',
            group: 'content',
            options: {
                list: [
                    { title: 'Software Development', value: 'software' },
                    { title: 'Labs', value: 'labs' },
                    { title: 'Systems & Strategy', value: 'systems' },
                    { title: 'Marketing', value: 'marketing' },
                    { title: 'General', value: 'general' },
                ],
            },
        }),
        defineField({
            name: 'coverImage',
            title: 'Cover Image',
            type: 'image',
            group: 'content',
            description: 'Thumbnail shown on resource cards',
            options: { hotspot: true },
            fields: [
                { name: 'alt', type: 'string', title: 'Alt Text' },
            ],
        }),
        defineField({
            name: 'previewContent',
            title: 'Preview Content',
            type: 'array',
            of: [{ type: 'block' }],
            group: 'content',
            description: 'Teaser content shown before downloading (optional)',
        }),

        // ── Access & Delivery ──
        defineField({
            name: 'fileUpload',
            title: 'File Upload',
            type: 'file',
            group: 'access',
            description: 'Upload the actual file (PDF, ZIP, etc.)',
        }),
        defineField({
            name: 'externalUrl',
            title: 'External URL',
            type: 'url',
            group: 'access',
            description: 'Or link to an external resource (GitHub, Notion, Drive)',
        }),
        defineField({
            name: 'gated',
            title: 'Require Email to Access',
            type: 'boolean',
            group: 'access',
            description: 'Turn on email gating to capture leads before download',
            initialValue: false,
        }),
        defineField({
            name: 'gateMessage',
            title: 'Gate Message',
            type: 'text',
            rows: 2,
            group: 'access',
            description: 'Message shown before the email form (e.g., "Get instant access…")',
            hidden: ({ parent }) => !parent?.gated,
        }),

        // ── Settings ──
        defineField({
            name: 'relatedResources',
            title: 'Related Resources',
            type: 'array',
            group: 'meta',
            description: 'Link to other resources readers might find useful',
            of: [{ type: 'reference', to: [{ type: 'resource' }] }],
        }),
        defineField({
            name: 'featured',
            title: 'Featured',
            type: 'boolean',
            group: 'meta',
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
            subtitle: 'resourceType',
            media: 'coverImage',
            gated: 'gated',
        },
        prepare({ title, subtitle, media, gated }) {
            return {
                title: `${gated ? '🔒 ' : ''}${title}`,
                subtitle: subtitle || 'Unknown type',
                media,
            }
        },
    },
})
