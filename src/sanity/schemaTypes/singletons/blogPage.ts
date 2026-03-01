import { defineField, defineType } from 'sanity'
import { BookIcon } from '@sanity/icons'

/**
 * Blog Page Singleton
 * Maps to: src/app/blog/page.tsx (hero text only; posts are separate documents)
 */
export const blogPageType = defineType({
    name: 'blogPage',
    title: 'Blog Page',
    type: 'document',
    icon: BookIcon,
    description: 'Manage the Blog landing page hero text',
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
            return { title: 'Blog Page', subtitle: 'Hero text & SEO' }
        },
    },
})
