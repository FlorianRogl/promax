import { client } from './sanityClient'
import type { FormattedJob, SanityJob } from './job.types'

interface JobServiceInterface {
    getActiveJobs(language?: 'de' | 'en'): Promise<FormattedJob[]>
    formatDate(dateString: string, language?: 'de' | 'en'): string
    testConnection(): Promise<void>
}

export const jobService: JobServiceInterface = {
    async getActiveJobs(language: 'de' | 'en' = 'de'): Promise<FormattedJob[]> {
        console.log(`🔍 Starting to fetch jobs from Sanity (Language: ${language})...`);

        const query = `*[_type == "job" && isActive == true] | order(orderRank asc, publishedAt desc) {
      _id,
      title,
      department,
      location,
      type,
      experience,
      teamSize,
      description,
      responsibilities,
      requirements,
      benefits,
      publishedAt,
      isActive,
      orderRank
    }`

        try {
            console.log('📡 Executing query:', query);

            const jobs: SanityJob[] = await client.fetch(query)

            console.log(`✅ Received ${jobs.length} jobs from Sanity:`, jobs);

            if (jobs.length === 0) {
                console.warn('⚠️ No active jobs found. Check if:');
                console.warn('1. Jobs are published (not draft)');
                console.warn('2. isActive field is set to true');
                console.warn('3. Jobs exist in Sanity Studio');

                // Zusätzlicher Debug-Query
                const allJobs = await client.fetch(`*[_type == "job"]`);
                console.log(`📊 Total jobs in database (including inactive): ${allJobs.length}`, allJobs);
            }

            const formatted = jobs.map((job, index): FormattedJob => {
                console.log(`📄 Formatting job ${index + 1}:`, job.title);

                // Helper-Funktion für sichere Extraktion lokalisierter Strings
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                const getLocalizedString = (field: any, fallback: string): string => {
                    if (!field) return fallback;
                    // Wenn es ein mehrsprachiges Objekt ist
                    if (typeof field === 'object' && field[language]) {
                        return field[language];
                    }
                    // Fallback auf Deutsch wenn gewählte Sprache nicht verfügbar
                    if (typeof field === 'object' && field.de) {
                        console.warn(`⚠️ Language ${language} not available, falling back to 'de'`);
                        return field.de;
                    }
                    // Wenn es ein direkter String ist (alte Datenstruktur)
                    if (typeof field === 'string') {
                        return field;
                    }
                    return fallback;
                };

                // Helper-Funktion für Arrays
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                const getLocalizedArray = (field: any, fallback: string[]): string[] => {
                    if (!field) return fallback;
                    // Wenn es ein mehrsprachiges Objekt ist
                    if (typeof field === 'object' && Array.isArray(field[language])) {
                        return field[language];
                    }
                    // Fallback auf Deutsch
                    if (typeof field === 'object' && Array.isArray(field.de)) {
                        console.warn(`⚠️ Language ${language} not available for array, falling back to 'de'`);
                        return field.de;
                    }
                    // Wenn es direkt ein Array ist (alte Datenstruktur)
                    if (Array.isArray(field)) {
                        return field;
                    }
                    return fallback;
                };

                return {
                    id: job._id,
                    title: getLocalizedString(job.title, 'Ohne Titel'),
                    department: job.department || 'Keine Abteilung',
                    location: getLocalizedString(job.location, 'Standort nicht angegeben'),
                    type: getLocalizedString(job.type, 'Vollzeit'),
                    experience: getLocalizedString(job.experience, language === 'de' ? 'Nach Vereinbarung' : 'By arrangement'),
                    teamSize: getLocalizedString(job.teamSize, language === 'de' ? 'Flexibel' : 'Flexible'),
                    description: getLocalizedString(job.description, language === 'de' ? 'Keine Beschreibung verfügbar' : 'No description available'),
                    responsibilities: getLocalizedArray(job.responsibilities, []),
                    requirements: getLocalizedArray(job.requirements, []),
                    benefits: getLocalizedArray(job.benefits, []),
                    posted: this.formatDate(job.publishedAt, language)
                }
            });

            console.log('✨ Formatted jobs ready:', formatted);
            return formatted;

        } catch (error) {
            console.error('❌ Error fetching jobs from Sanity:', error);

            if (error instanceof Error) {
                console.error('Error details:', {
                    message: error.message,
                    stack: error.stack
                });

                // Spezifische Fehlerbehandlung
                if (error.message.includes('projectId')) {
                    console.error('🔴 Project ID not configured correctly!');
                    console.error('Check your sanityClient.ts configuration');
                }
                if (error.message.includes('CORS')) {
                    console.error('🔴 CORS error detected!');
                    console.error('Add http://localhost:3000 to CORS origins in Sanity dashboard');
                }
                if (error.message.includes('dataset')) {
                    console.error('🔴 Dataset configuration error!');
                    console.error('Make sure dataset is set to "production"');
                }
            }

            throw new Error('Failed to fetch jobs from Sanity');
        }
    },

    formatDate(dateString: string, language: 'de' | 'en' = 'de'): string {
        if (!dateString) {
            console.warn('⚠️ No date string provided for formatting');
            return language === 'de' ? 'Datum unbekannt' : 'Date unknown';
        }

        try {
            const date = new Date(dateString)
            const now = new Date()
            const diffTime = Math.abs(now.getTime() - date.getTime())
            const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))

            if (language === 'de') {
                if (diffDays === 0) return 'heute'
                if (diffDays === 1) return 'gestern'
                if (diffDays < 7) return `vor ${diffDays} Tagen`
                if (diffDays < 30) return `vor ${Math.floor(diffDays / 7)} Woche${diffDays >= 14 ? 'n' : ''}`
                if (diffDays < 365) return `vor ${Math.floor(diffDays / 30)} Monat${diffDays >= 60 ? 'en' : ''}`
                return `vor ${Math.floor(diffDays / 365)} Jahr${diffDays >= 730 ? 'en' : ''}`
            } else {
                if (diffDays === 0) return 'today'
                if (diffDays === 1) return 'yesterday'
                if (diffDays < 7) return `${diffDays} day${diffDays > 1 ? 's' : ''} ago`
                if (diffDays < 30) return `${Math.floor(diffDays / 7)} week${diffDays >= 14 ? 's' : ''} ago`
                if (diffDays < 365) return `${Math.floor(diffDays / 30)} month${diffDays >= 60 ? 's' : ''} ago`
                return `${Math.floor(diffDays / 365)} year${diffDays >= 730 ? 's' : ''} ago`
            }
        } catch (error) {
            console.error('Error formatting date:', error);
            return language === 'de' ? 'Datum unbekannt' : 'Date unknown';
        }
    },

    // Test-Funktion zur Verbindungsprüfung
    async testConnection(): Promise<void> {
        console.log('🧪 Testing Sanity connection...');

        try {
            // Test 1: Einfacher Ping
            const ping = await client.fetch(`*[_type == "job"][0...1]`);
            console.log('✅ Connection test successful:', ping);

            // Test 2: Prüfe alle Jobs (inkl. Drafts)
            const allJobs = await client.fetch(`*[_type == "job"]`);
            console.log(`📊 Total jobs in database: ${allJobs.length}`);

            // Test 3: Prüfe aktive Jobs
            const activeJobs = await client.fetch(`*[_type == "job" && isActive == true]`);
            console.log(`✅ Active jobs: ${activeJobs.length}`);

            // Test 4: Prüfe published Jobs
            const publishedJobs = await client.fetch(`*[_type == "job" && !(_id in path("drafts.**"))]`);
            console.log(`📝 Published jobs: ${publishedJobs.length}`);

            if (allJobs.length > 0) {
                console.log('📋 Sample job structure:', allJobs[0]);
            }

        } catch (error) {
            console.error('❌ Connection test failed:', error);
            throw error;
        }
    }
}

// Auto-Test beim Import (nur in Development)
if (process.env.NODE_ENV === 'development') {
    console.log('🚀 JobService loaded, running connection test...');
    jobService.testConnection().catch(console.error);
}
