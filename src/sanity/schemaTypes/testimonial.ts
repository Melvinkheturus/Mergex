import { defineField, defineType } from 'sanity'

export const testimonialType = defineType({
    name: 'testimonial',
    title: 'Testimonial',
    type: 'document',
    fields: [
        defineField({
            name: 'quote',
            title: 'Quote',
            type: 'text',
            rows: 4,
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'authorName',
            title: 'Author Name',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'authorRole',
            title: 'Author Role',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'company',
            title: 'Company',
            type: 'string',
        }),
        defineField({
            name: 'authorImage',
            title: 'Author Image',
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
            name: 'divisionContext',
            title: 'Division Context',
            type: 'array',
            of: [{ type: 'string' }],
            description: 'Which Mergex divisions this testimonial relates to',
            options: {
                list: [
                    { title: 'Software', value: 'software' },
                    { title: 'Labs', value: 'labs' },
                    { title: 'Systems', value: 'systems' },
                    { title: 'All', value: 'all' },
                ],
            },
        }),
        defineField({
            name: 'projectType',
            title: 'Project Type',
            type: 'string',
            description: 'Type of project this testimonial is about',
            options: {
                list: [
                    { title: 'Web Development', value: 'web' },
                    { title: 'Mobile App', value: 'mobile' },
                    { title: 'Strategy Consulting', value: 'strategy' },
                    { title: 'Labs Experiment', value: 'experiment' },
                    { title: 'Full Ecosystem', value: 'ecosystem' },
                ],
            },
        }),
        defineField({
            name: 'rating',
            title: 'Rating',
            type: 'number',
            validation: (Rule) => Rule.min(1).max(5),
            description: 'Optional star rating (1-5)',
        }),
        defineField({
            name: 'featured',
            title: 'Featured',
            type: 'boolean',
            description: 'Show in featured/hero sections',
            initialValue: false,
        }),
        defineField({
            name: 'visible',
            title: 'Visible',
            type: 'boolean',
            description: 'Toggle visibility on the site',
            initialValue: true,
        }),
        defineField({
            name: 'displayOrder',
            title: 'Display Order',
            type: 'number',
            description: 'Lower numbers appear first',
            validation: (Rule) => Rule.min(0),
        }),
        defineField({
            name: 'createdAt',
            title: 'Created At',
            type: 'datetime',
            initialValue: () => new Date().toISOString(),
        }),
    ],
    preview: {
        select: {
            title: 'authorName',
            subtitle: 'authorRole',
            media: 'authorImage',
        },
    },
    orderings: [
        {
            title: 'Display Order',
            name: 'displayOrder',
            by: [{ field: 'displayOrder', direction: 'asc' }],
        },
    ],
})
