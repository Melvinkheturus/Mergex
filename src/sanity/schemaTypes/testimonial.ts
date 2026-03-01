import { defineField, defineType } from 'sanity'
import { CommentIcon } from '@sanity/icons'

export const testimonialType = defineType({
    name: 'testimonial',
    title: 'Testimonial',
    type: 'document',
    icon: CommentIcon,
    description: 'Client quotes and social proof — the most powerful trust builder',
    groups: [
        { name: 'quote', title: '💬 Quote', default: true },
        { name: 'context', title: '🏢 Context' },
        { name: 'settings', title: '⚙️ Settings' },
    ],
    fields: [
        // ── Quote ──
        defineField({
            name: 'quote',
            title: 'Quote',
            type: 'text',
            rows: 4,
            group: 'quote',
            description: 'The actual testimonial text — keep it authentic and impactful',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'authorName',
            title: 'Person\'s Name',
            type: 'string',
            group: 'quote',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'authorRole',
            title: 'Their Role',
            type: 'string',
            group: 'quote',
            description: 'e.g., "CTO", "Marketing Director"',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'company',
            title: 'Company',
            type: 'string',
            group: 'quote',
        }),
        defineField({
            name: 'authorImage',
            title: 'Photo',
            type: 'image',
            group: 'quote',
            description: 'Headshot of the person giving the testimonial',
            options: { hotspot: true },
            fields: [
                { name: 'alt', type: 'string', title: 'Alt Text' },
            ],
        }),
        defineField({
            name: 'rating',
            title: 'Rating',
            type: 'number',
            group: 'quote',
            description: 'Optional star rating (1-5)',
            validation: (Rule) => Rule.min(1).max(5),
        }),

        // ── Context ──
        defineField({
            name: 'divisionContext',
            title: 'Show on Division Pages',
            type: 'array',
            of: [{ type: 'string' }],
            group: 'context',
            description: 'Which division pages should this testimonial appear on?',
            options: {
                list: [
                    { title: 'Software', value: 'software' },
                    { title: 'Labs', value: 'labs' },
                    { title: 'Systems', value: 'systems' },
                    { title: 'All Divisions', value: 'all' },
                ],
            },
        }),
        defineField({
            name: 'projectType',
            title: 'Project Type',
            type: 'string',
            group: 'context',
            description: 'What kind of project was this testimonial about?',
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

        // ── Settings ──
        defineField({
            name: 'featured',
            title: 'Featured',
            type: 'boolean',
            group: 'settings',
            description: 'Show in primary testimonial spots (homepage, etc.)',
            initialValue: false,
        }),
        defineField({
            name: 'visible',
            title: 'Visible on Site',
            type: 'boolean',
            group: 'settings',
            description: 'Toggle off to hide without deleting',
            initialValue: true,
        }),
        defineField({
            name: 'displayOrder',
            title: 'Display Order',
            type: 'number',
            group: 'settings',
            description: 'Lower numbers appear first',
            validation: (Rule) => Rule.min(0),
        }),
        defineField({
            name: 'createdAt',
            title: 'Created At',
            type: 'datetime',
            group: 'settings',
            initialValue: () => new Date().toISOString(),
        }),
    ],
    preview: {
        select: {
            title: 'authorName',
            role: 'authorRole',
            company: 'company',
            media: 'authorImage',
            featured: 'featured',
            visible: 'visible',
        },
        prepare({ title, role, company, media, featured, visible }) {
            const prefix = !visible ? '🔴 ' : featured ? '⭐ ' : ''
            const subtitle = [role, company].filter(Boolean).join(' at ')
            return {
                title: `${prefix}${title}`,
                subtitle,
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
    ],
})
