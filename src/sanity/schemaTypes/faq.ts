import { defineField, defineType } from 'sanity'

export const faqType = defineType({
    name: 'faq',
    title: 'FAQ',
    type: 'document',
    fields: [
        defineField({
            name: 'question',
            title: 'Question',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'answer',
            title: 'Answer',
            type: 'array',
            of: [
                {
                    type: 'block',
                    styles: [{ title: 'Normal', value: 'normal' }],
                    marks: {
                        decorators: [
                            { title: 'Strong', value: 'strong' },
                            { title: 'Emphasis', value: 'em' },
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
            ],
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'pageContext',
            title: 'Page Context',
            type: 'array',
            of: [{ type: 'string' }],
            description: 'Which pages should this FAQ appear on?',
            options: {
                list: [
                    { title: 'Parent Site (Homepage)', value: 'parent' },
                    { title: 'Software', value: 'software' },
                    { title: 'Labs', value: 'labs' },
                    { title: 'Systems', value: 'systems' },
                    { title: 'Pricing', value: 'pricing' },
                    { title: 'Partner With Us', value: 'partner' },
                    { title: 'All Pages', value: 'all' },
                ],
            },
            validation: (Rule) => Rule.required().min(1),
        }),
        defineField({
            name: 'category',
            title: 'Category',
            type: 'string',
            options: {
                list: [
                    { title: 'General', value: 'general' },
                    { title: 'Pricing', value: 'pricing' },
                    { title: 'Services', value: 'services' },
                    { title: 'Process', value: 'process' },
                    { title: 'Partnership', value: 'partnership' },
                    { title: 'Technical', value: 'technical' },
                ],
            },
        }),
        defineField({
            name: 'displayOrder',
            title: 'Display Order',
            type: 'number',
            description: 'Lower numbers appear first',
            validation: (Rule) => Rule.min(0),
            initialValue: 0,
        }),
        defineField({
            name: 'visible',
            title: 'Visible',
            type: 'boolean',
            description: 'Toggle visibility on the site',
            initialValue: true,
        }),
    ],
    preview: {
        select: {
            title: 'question',
            subtitle: 'category',
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
