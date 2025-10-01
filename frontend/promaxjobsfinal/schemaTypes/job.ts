import { defineType, defineField } from 'sanity'

export default defineType({
    name: 'job',
    title: 'Stellenanzeige',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Stellentitel',
            type: 'string',
            validation: Rule => Rule.required()
        }),
        defineField({
            name: 'department',
            title: 'Abteilung',
            type: 'string',
            options: {
                list: [
                    {title: 'Engineering', value: 'Engineering'},
                    {title: 'Design', value: 'Design'},
                    {title: 'Projektmanagement', value: 'Projektmanagement'},
                    {title: 'Automatisierung', value: 'Automatisierung'},
                    {title: 'Management', value: 'Management'}
                ]
            },
            validation: Rule => Rule.required()
        }),
        defineField({
            name: 'location',
            title: 'Standort',
            type: 'string',
            initialValue: 'Graz',
            validation: Rule => Rule.required()
        }),
        defineField({
            name: 'type',
            title: 'Beschäftigungsart',
            type: 'string',
            options: {
                list: [
                    {title: 'Vollzeit', value: 'Vollzeit'},
                    {title: 'Teilzeit', value: 'Teilzeit'},
                    {title: 'Praktikum', value: 'Praktikum'},
                    {title: 'Werkstudent', value: 'Werkstudent'}
                ]
            },
            validation: Rule => Rule.required()
        }),
        defineField({
            name: 'experience',
            title: 'Erforderliche Erfahrung',
            type: 'string'
        }),
        defineField({
            name: 'teamSize',
            title: 'Teamgröße',
            type: 'string'
        }),
        defineField({
            name: 'description',
            title: 'Beschreibung',
            type: 'text',
            validation: Rule => Rule.required()
        }),
        defineField({
            name: 'responsibilities',
            title: 'Aufgabenbereiche',
            type: 'array',
            of: [{type: 'string'}],
            validation: Rule => Rule.required()
        }),
        defineField({
            name: 'requirements',
            title: 'Anforderungen',
            type: 'array',
            of: [{type: 'string'}],
            validation: Rule => Rule.required()
        }),
        defineField({
            name: 'benefits',
            title: 'Wir bieten',
            type: 'array',
            of: [{type: 'string'}],
            validation: Rule => Rule.required()
        }),
        defineField({
            name: 'isActive',
            title: 'Aktiv',
            type: 'boolean',
            description: 'Ist diese Stelle aktuell ausgeschrieben?',
            initialValue: true
        }),
        defineField({
            name: 'publishedAt',
            title: 'Veröffentlichungsdatum',
            type: 'datetime',
            initialValue: () => new Date().toISOString()
        }),
        defineField({
            name: 'orderRank',
            title: 'Sortierung',
            type: 'number',
            description: 'Niedrigere Zahlen werden zuerst angezeigt',
            initialValue: 100
        })
    ],
    preview: {
        select: {
            title: 'title',
            department: 'department',
            active: 'isActive'
        },
        prepare(selection) {
            const {title, department, active} = selection
            return {
                title: title || 'Ohne Titel',
                subtitle: `${department || 'Keine Abteilung'} ${active ? '✅ Aktiv' : '❌ Inaktiv'}`
            }
        }
    }
})