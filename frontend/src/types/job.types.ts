// Mehrsprachige Feldtypen
export interface LocalizedString {
    de: string
    en: string
}

export interface LocalizedText {
    de: string
    en: string
}

export interface LocalizedArray {
    de: string[]
    en: string[]
}

// Sanity Job mit mehrsprachigen Feldern
export interface SanityJob {
    _id: string
    _type: 'job'
    title: LocalizedString
    department: 'Engineering' | 'Design' | 'Projektmanagement' | 'Automatisierung' | 'Management'
    location: LocalizedString
    type: LocalizedString
    experience?: LocalizedString
    teamSize?: LocalizedString
    description: LocalizedText
    responsibilities: LocalizedArray
    requirements: LocalizedArray
    benefits: LocalizedArray
    isActive: boolean
    publishedAt: string
    orderRank: number
}

// Formatierter Job (einsprachig, basierend auf aktueller Sprache)
export interface FormattedJob {
    id: string
    title: string
    department: string
    location: string
    type: string
    experience: string
    teamSize: string
    description: string
    responsibilities: string[]
    requirements: string[]
    benefits: string[]
    posted: string
}