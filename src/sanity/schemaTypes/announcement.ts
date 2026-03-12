import { defineField, defineType } from 'sanity'
import { BellIcon } from '@sanity/icons'

export const announcementType = defineType({
    name: 'announcement',
    title: 'Announcement',
    type: 'document',
    icon: BellIcon,
    description: 'Site-wide banners and promotional alerts — set them to auto-expire',
    fields: [
        defineField({
            name: 'message',
            title: 'Message',
            type: 'string',
            description: 'Short banner text (keep under 100 characters for mobile)',
            validation: (Rule) => Rule.required().max(120),
        }),
        defineField({
            name: 'link',
            title: 'Link',
            type: 'string',
            description: 'Optional: clicking the banner goes here (e.g., /pricing or https://...)',
        }),
        defineField({
            name: 'linkText',
            title: 'Link Text',
            type: 'string',
            description: 'Text for the clickable part (e.g., "Learn More →")',
            hidden: ({ parent }) => !parent?.link,
        }),
        defineField({
            name: 'type',
            title: 'Banner Type',
            type: 'string',
            description: 'Controls the visual style of the banner',
            options: {
                list: [
                    { title: '🔵 Info (neutral)', value: 'info' },
                    { title: '🟡 Warning (attention)', value: 'warning' },
                    { title: '🟢 Promo (exciting)', value: 'promo' },
                    { title: '🔴 Urgent (critical)', value: 'urgent' },
                ],
            },
            initialValue: 'info',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'active',
            title: 'Active',
            type: 'boolean',
            description: 'Turn this announcement on/off instantly',
            initialValue: true,
        }),
        defineField({
            name: 'startDate',
            title: 'Start Date',
            type: 'datetime',
            description: 'When this announcement becomes visible (leave empty = immediately)',
        }),
        defineField({
            name: 'endDate',
            title: 'End Date',
            type: 'datetime',
            description: 'When this announcement automatically disappears (leave empty = never)',
        }),
        defineField({
            name: 'pageTargeting',
            title: 'Show On Pages',
            type: 'array',
            of: [{ type: 'string' }],
            description: 'Which pages should display this banner? Leave empty = all pages.',
            options: {
                list: [
                    { title: 'All Pages', value: 'all' },
                    { title: 'Homepage', value: 'home' },
                    { title: 'Pricing', value: 'pricing' },
                    { title: 'Labs', value: 'labs' },
                    { title: 'Blog', value: 'blog' },
                    { title: 'Careers', value: 'careers' },
                    { title: 'Partner', value: 'partner' },
                ],
            },
        }),
        defineField({
            name: 'dismissible',
            title: 'Can Be Dismissed',
            type: 'boolean',
            description: 'Allow users to close/dismiss this banner',
            initialValue: true,
        }),
    ],
    preview: {
        select: {
            title: 'message',
            subtitle: 'type',
            active: 'active',
        },
        prepare({ title, subtitle, active }) {
            return {
                title: `${active ? '🟢' : '🔴'} ${title}`,
                subtitle: subtitle ? `Type: ${subtitle}` : 'No type set',
            }
        },
    },
    orderings: [
        {
            title: 'Newest First',
            name: 'startDateDesc',
            by: [{ field: 'startDate', direction: 'desc' }],
        },
    ],
})
