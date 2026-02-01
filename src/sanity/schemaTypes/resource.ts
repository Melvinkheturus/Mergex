import { defineField, defineType } from 'sanity'

export const resourceType = defineType({
    name: 'resource',
    title: 'Resource',
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
            name: 'description',
            title: 'Description',
            type: 'text',
            rows: 3,
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'resourceType',
            title: 'Resource Type',
            type: 'string',
            options: {
                list: [
                    { title: 'Guide', value: 'guide' },
                    { title: 'Template', value: 'template' },
                    { title: 'Playbook', value: 'playbook' },
                    { title: 'PDF Document', value: 'pdf' },
                    { title: 'Video Tutorial', value: 'video' },
                    { title: 'Tool/Script', value: 'tool' },
                ],
            },
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'category',
            title: 'Category',
            type: 'string',
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
            name: 'fileUpload',
            title: 'File Upload',
            type: 'file',
            description: 'Upload PDF, ZIP, or other downloadable files',
        }),
        defineField({
            name: 'externalUrl',
            title: 'External URL',
            type: 'url',
            description: 'Link to external resource (GitHub, Notion, etc.)',
        }),
        defineField({
            name: 'previewContent',
            title: 'Preview Content',
            type: 'array',
            of: [{ type: 'block' }],
            description: 'Content visible before download/access',
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
            name: 'gated',
            title: 'Gated',
            type: 'boolean',
            description: 'Require email capture before access',
            initialValue: false,
        }),
        defineField({
            name: 'gateMessage',
            title: 'Gate Message',
            type: 'text',
            rows: 2,
            description: 'Message shown on gated content',
            hidden: ({ parent }) => !parent?.gated,
        }),
        defineField({
            name: 'relatedResources',
            title: 'Related Resources',
            type: 'array',
            of: [{ type: 'reference', to: [{ type: 'resource' }] }],
        }),
        defineField({
            name: 'featured',
            title: 'Featured',
            type: 'boolean',
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
            subtitle: 'resourceType',
            media: 'coverImage',
        },
    },
})
