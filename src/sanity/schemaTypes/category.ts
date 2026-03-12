import { defineField, defineType } from 'sanity'
import { TagIcon } from '@sanity/icons'

export const categoryType = defineType({
    name: 'category',
    title: 'Category',
    type: 'document',
    icon: TagIcon,
    description: 'Content categories — used to organize blog posts, case studies, and resources',
    fields: [
        defineField({
            name: 'title',
            title: 'Category Name',
            type: 'string',
            description: 'e.g., "Software", "Labs", "AI", "Case Study"',
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
            description: 'Auto-generated URL path segment',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'description',
            title: 'Description',
            type: 'text',
            rows: 2,
            description: 'Brief explanation of what this category covers (shown on filter pages)',
            validation: (Rule) => Rule.max(200),
        }),
        defineField({
            name: 'color',
            title: 'Brand Color',
            type: 'string',
            description: 'Hex color for UI badges/pills (e.g., #6B4EFF)',
            validation: (Rule) =>
                Rule.regex(/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/, {
                    name: 'hex color',
                    invert: false,
                }).error('Must be a valid hex color (e.g., #FF5733)'),
        }),
    ],
    preview: {
        select: {
            title: 'title',
            subtitle: 'description',
        },
    },
    orderings: [
        {
            title: 'Name A-Z',
            name: 'titleAsc',
            by: [{ field: 'title', direction: 'asc' }],
        },
    ],
})
