import { defineField, defineType } from 'sanity'

export const partnerTypeType = defineType({
    name: 'partnerType',
    title: 'Partner Type',
    type: 'document',
    fields: [
        defineField({
            name: 'typeName',
            title: 'Type Name',
            type: 'string',
            description: 'e.g., Strategic Partners, Referral Partners',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'typeName',
                maxLength: 96,
            },
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
            description: 'Benefits for this type of partner',
        }),
        defineField({
            name: 'requirements',
            title: 'Requirements',
            type: 'array',
            of: [{ type: 'string' }],
            description: 'What we look for in partners',
        }),
        defineField({
            name: 'ctaText',
            title: 'CTA Text',
            type: 'string',
            description: 'Apply/Join button text',
        }),
        defineField({
            name: 'applicationProcess',
            title: 'Application Process',
            type: 'text',
            rows: 3,
            description: 'How to become this type of partner',
        }),
        defineField({
            name: 'icon',
            title: 'Icon',
            type: 'image',
            description: 'Visual icon for this partnership type',
            options: {
                hotspot: true,
            },
        }),
        defineField({
            name: 'position',
            title: 'Position',
            type: 'number',
            description: 'Display order',
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
            subtitle: 'description',
            media: 'icon',
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
