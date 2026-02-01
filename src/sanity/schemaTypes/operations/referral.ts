import { defineField, defineType } from 'sanity'

export const referralType = defineType({
    name: 'referral',
    title: 'Referral Submission',
    type: 'document',
    description: 'Referral tracking (Phase 1 - Simple)',
    fields: [
        defineField({
            name: 'referrerName',
            title: 'Referrer Name',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'referrerEmail',
            title: 'Referrer Email',
            type: 'string',
            validation: (Rule) => Rule.required().email(),
        }),
        defineField({
            name: 'referredName',
            title: 'Referred Client Name',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'referredEmail',
            title: 'Referred Client Email',
            type: 'string',
            validation: (Rule) => Rule.email(),
        }),
        defineField({
            name: 'referredCompany',
            title: 'Referred Company',
            type: 'string',
        }),
        defineField({
            name: 'projectDetails',
            title: 'Project Details',
            type: 'text',
            rows: 4,
            description: 'What does the referred client need?',
        }),
        defineField({
            name: 'status',
            title: 'Status',
            type: 'string',
            options: {
                list: [
                    { title: 'Pending', value: 'pending' },
                    { title: 'Contacted', value: 'contacted' },
                    { title: 'Qualified', value: 'qualified' },
                    { title: 'Converted', value: 'converted' },
                    { title: 'Not Qualified', value: 'not-qualified' },
                ],
            },
            initialValue: 'pending',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'notes',
            title: 'Internal Notes',
            type: 'text',
            rows: 3,
        }),
        defineField({
            name: 'submittedAt',
            title: 'Submitted At',
            type: 'datetime',
            initialValue: () => new Date().toISOString(),
        }),
    ],
    preview: {
        select: {
            title: 'referredName',
            subtitle: 'referrerName',
        },
    },
})
