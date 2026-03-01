import { defineField, defineType } from 'sanity'
import { UsersIcon } from '@sanity/icons'

export const partnerTypeType = defineType({
    name: 'partnerType',
    title: 'Partner Type',
    type: 'document',
    icon: UsersIcon,
    description: 'Partnership offerings — the different ways people can partner with Mergex',
    fields: [
        defineField({
            name: 'typeName',
            title: 'Partnership Type Name',
            type: 'string',
            description: 'e.g., "Strategic Partners", "Referral Partners"',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: { source: 'typeName', maxLength: 96 },
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'description',
            title: 'Description',
            type: 'array',
            of: [{ type: 'block' }],
            description: 'What this partnership type entails',
        }),
        defineField({
            name: 'benefits',
            title: 'Benefits',
            type: 'array',
            of: [{ type: 'string' }],
            description: 'Why should someone become this type of partner?',
        }),
        defineField({
            name: 'requirements',
            title: 'Requirements',
            type: 'array',
            of: [{ type: 'string' }],
            description: 'What Mergex looks for in this type of partner',
        }),
        defineField({
            name: 'ctaText',
            title: 'CTA Button Text',
            type: 'string',
            description: 'e.g., "Become a Strategic Partner"',
        }),
        defineField({
            name: 'applicationProcess',
            title: 'Application Process',
            type: 'text',
            rows: 3,
            description: 'How someone becomes this type of partner',
        }),
        defineField({
            name: 'icon',
            title: 'Icon',
            type: 'image',
            description: 'Visual icon for this partnership type',
            options: { hotspot: true },
        }),
        defineField({
            name: 'position',
            title: 'Display Order',
            type: 'number',
            validation: (Rule) => Rule.min(0),
        }),
        defineField({
            name: 'visible',
            title: 'Visible',
            type: 'boolean',
            initialValue: true,
        }),
    ],
    preview: {
        select: {
            title: 'typeName',
            media: 'icon',
            visible: 'visible',
        },
        prepare({ title, media, visible }) {
            return {
                title: `${visible === false ? '🔴 ' : ''}${title}`,
                subtitle: 'Partnership Type',
                media,
            }
        },
    },
    orderings: [
        {
            title: 'Position',
            name: 'position',
            by: [{ field: 'position', direction: 'asc' }],
        },
    ],
})
