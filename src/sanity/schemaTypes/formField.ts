import { defineField, defineType } from 'sanity'

export const formField = defineType({
    name: 'formField',
    title: 'Form Field',
    type: 'object',
    fields: [
        defineField({
            name: 'label',
            title: 'Field Label',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'fieldName',
            title: 'Field Name (API ID)',
            type: 'string',
            description: 'The internal key for this field (e.g., "linkedinUrl", "businessType"). Use camelCase.',
            validation: (Rule) => Rule.required().regex(/^[a-z][a-zA-Z0-9]*$/, {
                name: 'camelCase',
                invert: false,
            }),
        }),
        defineField({
            name: 'placeholder',
            title: 'Placeholder',
            type: 'string',
        }),
        defineField({
            name: 'fieldType',
            title: 'Field Type',
            type: 'string',
            options: {
                list: [
                    { title: 'Text', value: 'text' },
                    { title: 'Email', value: 'email' },
                    { title: 'Phone', value: 'tel' },
                    { title: 'Dropdown', value: 'select' },
                    { title: 'Text Area', value: 'textarea' },
                ],
            },
            initialValue: 'text',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'required',
            title: 'Required',
            type: 'boolean',
            initialValue: true,
        }),
        defineField({
            name: 'options',
            title: 'Dropdown Options',
            type: 'array',
            of: [{ type: 'string' }],
            hidden: ({ parent }) => parent?.fieldType !== 'select',
            description: 'Only required if Field Type is Dropdown',
        }),
    ],
})
