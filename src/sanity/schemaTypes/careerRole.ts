import { defineField, defineType } from 'sanity'

export const careerRoleType = defineType({
    name: 'careerRole',
    title: 'Career Role',
    type: 'document',
    fields: [
        defineField({
            name: 'roleTitle',
            title: 'Role Title',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'roleTitle',
                maxLength: 96,
            },
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'roleType',
            title: 'Role Type',
            type: 'string',
            options: {
                list: [
                    { title: 'Internship', value: 'internship' },
                    { title: 'Full-time', value: 'fulltime' },
                    { title: 'Part-time', value: 'parttime' },
                    { title: 'Contract', value: 'contract' },
                ],
            },
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'division',
            title: 'Division',
            type: 'string',
            options: {
                list: [
                    { title: 'Software', value: 'software' },
                    { title: 'Labs', value: 'labs' },
                    { title: 'Systems', value: 'systems' },
                    { title: 'Media', value: 'media' },
                    { title: 'Academy', value: 'academy' },
                    { title: 'General/All', value: 'general' },
                ],
            },
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'description',
            title: 'Description',
            type: 'array',
            of: [{ type: 'block' }],
            description: 'Overview of the role',
        }),
        defineField({
            name: 'responsibilities',
            title: 'Responsibilities',
            type: 'array',
            of: [{ type: 'string' }],
        }),
        defineField({
            name: 'requirements',
            title: 'Requirements',
            type: 'array',
            of: [{ type: 'string' }],
        }),
        defineField({
            name: 'niceToHave',
            title: 'Nice to Have',
            type: 'array',
            of: [{ type: 'string' }],
            description: 'Preferred but not required skills',
        }),
        defineField({
            name: 'applicationInstructions',
            title: 'Application Instructions',
            type: 'text',
            rows: 3,
            description: 'How to apply for this role',
        }),
        defineField({
            name: 'applicationUrl',
            title: 'Application URL',
            type: 'url',
            description: 'External application form link (Notion, Tally, etc.)',
        }),
        defineField({
            name: 'location',
            title: 'Location',
            type: 'string',
            description: 'e.g., Remote, Chennai, Hybrid',
        }),
        defineField({
            name: 'status',
            title: 'Status',
            type: 'string',
            options: {
                list: [
                    { title: 'Open', value: 'open' },
                    { title: 'Closed', value: 'closed' },
                    { title: 'On Hold', value: 'hold' },
                ],
            },
            initialValue: 'open',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'postedAt',
            title: 'Posted At',
            type: 'datetime',
            initialValue: () => new Date().toISOString(),
        }),
    ],
    preview: {
        select: {
            title: 'roleTitle',
            subtitle: 'division',
        },
    },
})
