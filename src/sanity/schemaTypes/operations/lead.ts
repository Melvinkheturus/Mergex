import { defineField, defineType } from 'sanity'

export const leadType = defineType({
    name: 'lead',
    title: 'Lead',
    type: 'document',
    description: 'General lead tracking',
    fields: [
        defineField({
            name: 'name',
            title: 'Name',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'email',
            title: 'Email',
            type: 'string',
            validation: (Rule) => Rule.required().email(),
        }),
        defineField({
            name: 'company',
            title: 'Company',
            type: 'string',
        }),
        defineField({
            name: 'source',
            title: 'Source',
            type: 'string',
            options: {
                list: [
                    { title: 'Website Form', value: 'website' },
                    { title: 'Referral', value: 'referral' },
                    { title: 'Social Media', value: 'social' },
                    { title: 'Direct Outreach', value: 'outreach' },
                    { title: 'Other', value: 'other' },
                ],
            },
        }),
        defineField({
            name: 'interestedIn',
            title: 'Interested In',
            type: 'array',
            of: [{ type: 'string' }],
            options: {
                list: [
                    { title: 'Software Development', value: 'software' },
                    { title: 'Labs', value: 'labs' },
                    { title: 'Systems Consulting', value: 'systems' },
                    { title: 'Partnership', value: 'partnership' },
                ],
            },
        }),
        defineField({
            name: 'message',
            title: 'Message',
            type: 'text',
            rows: 4,
        }),
        defineField({
            name: 'status',
            title: 'Status',
            type: 'string',
            options: {
                list: [
                    { title: 'New', value: 'new' },
                    { title: 'Contacted', value: 'contacted' },
                    { title: 'Qualified', value: 'qualified' },
                    { title: 'Proposal Sent', value: 'proposal' },
                    { title: 'Won', value: 'won' },
                    { title: 'Lost', value: 'lost' },
                ],
            },
            initialValue: 'new',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'notes',
            title: 'Internal Notes',
            type: 'text',
            rows: 3,
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
            title: 'name',
            subtitle: 'company',
        },
    },
})
