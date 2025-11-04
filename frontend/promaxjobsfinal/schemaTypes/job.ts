
import { defineType, defineField } from 'sanity'

// Helper für mehrsprachige Textfelder
const localizedString = (name, title) => ({
    name,
    title,
    type: 'object',
    fields: [
        {
            name: 'de',
            title: 'Deutsch',
            type: 'string'
        },
        {
            name: 'en',
            title: 'English',
            type: 'string'
        }
    ]
})

// Helper für mehrsprachige Text-Felder (mehrzeilig)
const localizedText = (name, title) => ({
    name,
    title,
    type: 'object',
    fields: [
        {
            name: 'de',
            title: 'Deutsch',
            type: 'text'
        },
        {
            name: 'en',
            title: 'English',
            type: 'text'
        }
    ]
})

// Helper für mehrsprachige Array-Felder
const localizedArray = (name, title) => ({
    name,
    title,
    type: 'object',
    fields: [
        {
            name: 'de',
            title: 'Deutsch',
            type: 'array',
            of: [{ type: 'string' }]
        },
        {
            name: 'en',
            title: 'English',
            type: 'array',
            of: [{ type: 'string' }]
        }
    ]
})

export default defineType({
    name: 'job',
    title: 'Stellenanzeige / Job Posting',
    type: 'document',
    fields: [
        defineField({
            ...localizedString('title', 'Stellentitel / Job Title')
        }),
        defineField({
            name: 'department',
            title: 'Abteilung / Department',
            type: 'string',
            options: {
                list: [
                    {title: 'Engineering', value: 'Engineering'},
                    {title: 'Design', value: 'Design'},
                    {title: 'Projektmanagement / Project Management', value: 'Projektmanagement'},
                    {title: 'Automatisierung / Automation', value: 'Automatisierung'},
                    {title: 'Management', value: 'Management'}
                ]
            }
        }),
        defineField({
            ...localizedString('location', 'Standort / Location')
        }),
        defineField({
            ...localizedString('type', 'Beschäftigungsart / Employment Type')
        }),
        defineField({
            ...localizedString('experience', 'Erforderliche Erfahrung / Required Experience')
        }),
        defineField({
            ...localizedString('teamSize', 'Teamgröße / Team Size')
        }),
        defineField({
            ...localizedText('description', 'Beschreibung / Description')
        }),
        defineField({
            ...localizedArray('responsibilities', 'Aufgabenbereiche / Responsibilities')
        }),
        defineField({
            ...localizedArray('requirements', 'Anforderungen / Requirements')
        }),
        defineField({
            ...localizedArray('benefits', 'Wir bieten / Benefits')
        }),
        defineField({
            name: 'isActive',
            title: 'Aktiv / Active',
            type: 'boolean',
            description: 'Ist diese Stelle aktuell ausgeschrieben? / Is this position currently open?',
            initialValue: true
        }),
        defineField({
            name: 'publishedAt',
            title: 'Veröffentlichungsdatum / Publication Date',
            type: 'datetime',
            initialValue: () => new Date().toISOString()
        }),
        defineField({
            name: 'orderRank',
            title: 'Sortierung / Order',
            type: 'number',
            description: 'Niedrigere Zahlen werden zuerst angezeigt / Lower numbers are displayed first',
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
            const displayTitle = title?.de || 'Ohne Titel'
            return {
                title: displayTitle,
                subtitle: `${department || 'Keine Abteilung'} ${active ? '✅ Aktiv' : '❌ Inaktiv'}`
            }
        }
    }
})