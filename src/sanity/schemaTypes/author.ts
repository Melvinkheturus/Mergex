import { defineField, defineType } from 'sanity'
import { UsersIcon } from '@sanity/icons'

export const authorType = defineType({
    name: 'author',
    title: 'Author',
    type: 'document',
    icon: UsersIcon,
    description: 'Team members who write blog posts or are credited on case studies',
    fields: [
        defineField({
            name: 'name',
            title: 'Full Name',
            type: 'string',
            description: 'Display name (e.g., "Santhosh M K")',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'name',
                maxLength: 96,
            },
            description: 'Auto-generated URL-friendly name',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'role',
            title: 'Role / Title',
            type: 'string',
            description: 'Their title at Mergex (e.g., "Lead Developer", "Content Strategist")',
        }),
        defineField({
            name: 'division',
            title: 'Division',
            type: 'string',
            description: 'Which Mergex division they belong to',
            options: {
                list: [
                    { title: 'Software', value: 'software' },
                    { title: 'Labs', value: 'labs' },
                    { title: 'Systems', value: 'systems' },
                    { title: 'Media', value: 'media' },
                    { title: 'Academy', value: 'academy' },
                    { title: 'Leadership', value: 'leadership' },
                ],
            },
        }),
        defineField({
            name: 'image',
            title: 'Profile Photo',
            type: 'image',
            description: 'Square headshot works best (at least 400×400)',
            options: { hotspot: true },
            fields: [
                {
                    name: 'alt',
                    type: 'string',
                    title: 'Alt Text',
                },
            ],
        }),
        defineField({
            name: 'bio',
            title: 'Short Bio',
            type: 'text',
            rows: 3,
            description: 'Brief description shown on author cards (max 200 chars)',
            validation: (Rule) => Rule.max(200),
        }),
        defineField({
            name: 'socialLinks',
            title: 'Social Links',
            type: 'object',
            description: 'Optional personal social profiles',
            fields: [
                { name: 'linkedin', type: 'url', title: 'LinkedIn' },
                { name: 'twitter', type: 'url', title: 'Twitter / X' },
                { name: 'github', type: 'url', title: 'GitHub' },
                { name: 'website', type: 'url', title: 'Personal Website' },
            ],
        }),
    ],
    preview: {
        select: {
            title: 'name',
            subtitle: 'role',
            media: 'image',
        },
    },
})
