import { defineField, defineType } from 'sanity'

export const partnerType = defineType({
    name: 'partner',
    title: 'Partner Application',
    type: 'document',
    description: 'Partner applications and records (Phase 1 - Simple)',
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
            name: 'partnershipType',
            title: 'Partnership Type',
            type: 'string',
            options: {
                list: [
                    { title: 'Strategic Partner', value: 'strategic' },
                    { title: 'Referral Partner', value: 'referral' },
                ],
            },
            validation: (Rule) => Rule.required(),
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
                    { title: 'Reviewing', value: 'reviewing' },
                    { title: 'Accepted', value: 'accepted' },
                    { title: 'Declined', value: 'declined' },
                    { title: 'On Hold', value: 'hold' },
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
            description: 'Notes for internal use only',
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
            title: 'name',
            subtitle: 'partnershipType',
        },
    },
})
