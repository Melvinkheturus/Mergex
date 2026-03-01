import { defineField, defineType } from 'sanity'
import { TrendUpwardIcon } from '@sanity/icons'

export const leadType = defineType({
    name: 'lead',
    title: 'Lead',
    type: 'document',
    icon: TrendUpwardIcon,
    description: 'General lead tracking from website forms and outreach',
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
            title: 'Lead Source',
            type: 'string',
            description: 'Where did this lead come from?',
            options: {
                list: [
                    { title: '🌐 Website Form', value: 'website' },
                    { title: '🔗 Referral', value: 'referral' },
                    { title: '📱 Social Media', value: 'social' },
                    { title: '📧 Direct Outreach', value: 'outreach' },
                    { title: '📋 Other', value: 'other' },
                ],
            },
        }),
        defineField({
            name: 'interestedIn',
            title: 'Interested In',
            type: 'array',
            of: [{ type: 'string' }],
            description: 'What services caught their attention?',
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
            title: 'Pipeline Status',
            type: 'string',
            description: 'Track where this lead is in your sales pipeline',
            options: {
                list: [
                    { title: '🆕 New', value: 'new' },
                    { title: '📞 Contacted', value: 'contacted' },
                    { title: '✅ Qualified', value: 'qualified' },
                    { title: '📄 Proposal Sent', value: 'proposal' },
                    { title: '🎉 Won', value: 'won' },
                    { title: '❌ Lost', value: 'lost' },
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
            description: '🔒 Only visible to your team',
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
            company: 'company',
            status: 'status',
            source: 'source',
        },
        prepare({ title, company, status, source }) {
            const statusEmoji: Record<string, string> = {
                new: '🆕', contacted: '📞', qualified: '✅',
                proposal: '📄', won: '🎉', lost: '❌',
            }
            return {
                title: `${statusEmoji[status] || ''} ${title}`,
                subtitle: `${company || 'No company'} · via ${source || 'unknown'}`,
            }
        },
    },
})
