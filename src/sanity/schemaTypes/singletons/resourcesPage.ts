import { defineField, defineType } from 'sanity'
import { DocumentsIcon } from '@sanity/icons'

/**
 * Resources Page Singleton
 * Maps to: src/app/resources/page.tsx
 */
export const resourcesPageType = defineType({
    name: 'resourcesPage',
    title: 'Resources Page',
    type: 'document',
    icon: DocumentsIcon,
    description: 'Manage the Resources hub page content',
    fields: [
        defineField({
            name: 'headline',
            title: 'Headline',
            type: 'string',
            validation: (Rule) => Rule.max(80),
        }),
        defineField({
            name: 'subheadline',
            title: 'Subheadline',
            type: 'text',
            rows: 2,
        }),
        defineField({
            name: 'categories',
            title: 'Resource Categories',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        { name: 'title', type: 'string', title: 'Title' },
                        { name: 'description', type: 'text', title: 'Description' },
                        { name: 'status', type: 'string', title: 'Status', description: 'e.g. "Coming soon"' },
                    ],
                    preview: {
                        select: { title: 'title' },
                    },
                },
            ],
        }),
        defineField({
            name: 'seo',
            title: 'SEO Settings',
            type: 'object',
            fields: [
                { name: 'metaTitle', type: 'string', title: 'Meta Title', validation: (Rule) => Rule.max(60) },
                { name: 'metaDescription', type: 'text', title: 'Meta Description', rows: 3, validation: (Rule) => Rule.max(160) },
            ],
        }),
    ],
    preview: {
        prepare() {
            return { title: 'Resources Page', subtitle: 'Resource hub content' }
        },
    },
})
