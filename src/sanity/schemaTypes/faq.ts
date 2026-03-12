import { defineField, defineType } from 'sanity'
import { HelpCircleIcon } from '@sanity/icons'

export const faqType = defineType({
    name: 'faq',
    title: 'FAQ',
    type: 'document',
    icon: HelpCircleIcon,
    description: 'Frequently asked questions — shown on relevant pages across the site',
    groups: [
        { name: 'content', title: '❓ Q&A', default: true },
        { name: 'targeting', title: '🎯 Where to Show' },
    ],
    fields: [
        // ── Q&A ──
        defineField({
            name: 'question',
            title: 'Question',
            type: 'string',
            group: 'content',
            description: 'Write the question as a visitor would ask it',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'answer',
            title: 'Answer',
            type: 'array',
            group: 'content',
            description: 'Clear, helpful answer — you can use bold, links, and lists',
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
                                    { name: 'href', type: 'url', title: 'URL' },
                                ],
                            },
                        ],
                    },
                },
            ],
            validation: (Rule) => Rule.required(),
        }),

        // ── Targeting ──
        defineField({
            name: 'pageContext',
            title: 'Show on Pages',
            type: 'array',
            of: [{ type: 'string' }],
            group: 'targeting',
            description: 'Which pages should display this FAQ?',
            options: {
                list: [
                    { title: '🏠 Homepage', value: 'parent' },
                    { title: '💻 Software', value: 'software' },
                    { title: '🧪 Labs', value: 'labs' },
                    { title: '⚙️ Systems', value: 'systems' },
                    { title: '💰 Pricing', value: 'pricing' },
                    { title: '🤝 Partner With Us', value: 'partner' },
                    { title: '🌐 All Pages', value: 'all' },
                ],
            },
            validation: (Rule) => Rule.required().min(1),
        }),
        defineField({
            name: 'category',
            title: 'Category',
            type: 'string',
            group: 'targeting',
            description: 'Group related FAQs together',
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
            group: 'targeting',
            description: 'Lower numbers appear first (0 = top of the list)',
            validation: (Rule) => Rule.min(0),
            initialValue: 0,
        }),
        defineField({
            name: 'visible',
            title: 'Visible',
            type: 'boolean',
            group: 'targeting',
            description: 'Turn off to hide without deleting',
            initialValue: true,
        }),
    ],
    preview: {
        select: {
            title: 'question',
            category: 'category',
            visible: 'visible',
        },
        prepare({ title, category, visible }) {
            return {
                title: `${visible === false ? '🔴 ' : ''}${title}`,
                subtitle: category ? `Category: ${category}` : 'Uncategorized',
            }
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
