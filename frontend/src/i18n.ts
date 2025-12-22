import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
    de: {
        translation: {
            // Navigation
            nav: {
                home: "Startseite",
                company: "Unternehmen",
                services: "Leistungen",
                technologies: "Technologien",
                career: "Karriere",
                contact: "Kontakt"
            },

            // Video Section (Hero)
            videoSection: {
                title: "Wir gestalten Zukunft im",
                titleHighlight: "Industrieanlagenbau",
                years: "Jahre",
                experience: "Erfahrung"
            },

            // Homepage
            homepage: {
                servicesTitle: "Unsere Leistungen",
                engineeringTitle: "Ingenieurplanung",
                engineeringDesc: "Umfassende Planung und Konzeptentwicklung für Ihre Industrieanlagen mit modernsten Methoden und Tools.",
                engineeringFeature1: "Anlagenkonzeption & Design",
                engineeringFeature2: "3D-Modellierung & Berechnung",
                engineeringFeature3: "Laserscantechnologie",
                operativeTitle: "Operative Projektunterstützung",
                operativeDesc: "Individuelle Projektunterstützung von der Planung bis zur praktischen Umsetzung.",
                operativeFeature1: "Projektabwicklung",
                operativeFeature2: "Ausschreibung und Beschaffung",
                operativeFeature3: "Fachbauüberwachung",
                industriesTitle: "Unsere Branchen",
                industriesSubtitle: "Mit jahrzehntelanger Expertise bedienen wir anspruchsvolle Industrien und setzen höchste Standards in Qualität und Sicherheit.",
                industry: {
                    chemistry: "Chemie",
                    energy: "Energie & Umwelt",
                    pharma: "Pharma",
                    paper: "Papier & Zellstoff",
                    food: "Lebensmittel",
                    steel: "Stahl",
                    nuclear: "Nuklear",
                    other: "Weitere Branchen"
                },
                ctaTitle: "Ihr Partner für anspruchsvollen Industrieanlagenbau",
                ctaButton: "Projekt anfragen"
            },

            // Company (Unternehmen)
            company: {
                heroTitle: "Know-how und Leidenschaft für Ihre Projekte",
                heroSubtitle: "Seit 1999",
                statsYears: "25+",
                statsYearsLabel: "Jahre Erfahrung",
                statsExperts: "35",
                statsExpertsLabel: "Experten",
                statsProjects: "1000+",
                statsProjectsLabel: "Projekte",
                statsCert: "ISO",
                statsCertLabel: "Zertifiziert",
                aboutTitle: "Kompetenz trifft",
                aboutTitleHighlight: "Innovation",
                aboutText1: "PROMAX steht seit 1999 für professionelle Projektumsetzung im Industrieanlagenbau. Mit unserem 35-köpfigen Team aus erfahrenen Experten begleiten wir komplexe Projekte in den unterschiedlichsten Branchen – von der Planung bis zur Inbetriebnahme.",
                aboutFeature1Title: "International tätig",
                aboutFeature1Text: "Projekte weltweit",
                aboutFeature2Title: "ISO 9001:2015",
                aboutFeature2Text: "Zertifizierte Qualität",
                teamTitle: "Ihre",
                teamTitleHighlight: "Ansprechpartner",
                teamSubtitle: "Erfahrene Experten für Ihre Projekte",
                teamCEO: "Geschäftsführer",
                teamBranchManager: "Niederlassungsleitung",
                teamHeadquarters: "Zentrale Grambach",
                teamBranchVienna: "Niederlassung Wien",
                cultureTitle: "Wofür",
                cultureTitleMiddle: "PROMAX",
                cultureSubtitle: "steht",
                cultureHeading: "Unsere Unternehmenskultur",
                cultureText1: "Bei PROMAX Project Management GesmbH verbinden wir Teamgeist, offene Kommunikation und Vertrauen mit gezielter Gesundheitsförderung. Flache Hierarchien, ein kooperatives Arbeitsumfeld und Programme für das körperliche und geistige Wohlbefinden unserer Mitarbeiter schaffen Raum für Innovation, Motivation und nachhaltigen Erfolg.",
                cultureText2: "So entsteht eine Unternehmenskultur, die soziale Kompetenz, Wertschätzung und partnerschaftliche Zusammenarbeit in den Mittelpunkt stellt – für unsere Teams, Kunden und Partner.",
                cultureFeature1: "Teamgeist & Zusammenarbeit",
                cultureFeature2: "Offene Kommunikation",
                cultureFeature3: "Innovation & nachhaltiger Erfolg",
                certTitle: "Zertifizierte",
                certTitleHighlight: "Qualität",
                certText: "PROMAX Project Management GesmbH ist nach ISO 9001:2015 zertifiziert und gewährleistet damit höchste Qualitätsstandards in allen Bereichen unserer Dienstleistungen.",
                certFeature1Title: "Qualitätsmanagementsystem",
                certFeature1Text: "Systematische Prozesse für konstante Qualität und kontinuierliche Verbesserung",
                certFeature2Title: "Kundenorientierung",
                certFeature2Text: "Fokus auf Kundenzufriedenheit und Erfüllung von Kundenanforderungen",
                certFeature3Title: "Prozessverbesserung",
                certFeature3Text: "Regelmäßige Bewertung und Optimierung aller Geschäftsprozesse",
                resourcesTitle: "Wichtige Dokumente und Informationen zum",
                resourcesTitleHighlight: "Download",
                resourceISOCert: "ISO 9001:2015 Zertifikat",
                resourceAGB: "AGB Ingenieurbüros",
                resourceTypePDF: "PDF",
                resourceDownload: "Download",
                ctaTitle: "Bereit für Ihr nächstes",
                ctaTitleHighlight: "Projekt?",
                ctaText: "Lassen Sie uns gemeinsam Ihre Vision in die Realität umsetzen. Kontaktieren Sie uns für ein unverbindliches Beratungsgespräch.",
                ctaButton: "Projekt besprechen"
            },

            // Services (Leistungen)
            services: {
                heroTitle: "Leistungen",
                heroSubtitle: "Umfassende Lösungen für komplexe Industrieanlagenprojekte",
                engineeringTitle: "Ingenieurplanung",
                engineeringConceptTitle: "Anlagenkonzeption und Design",
                engineeringConceptText: "Investitionsentscheidungen bedürfen umsetzbarer Basisplanungen, realistischer Terminpläne und belastbarer Projektbudgets. Nicht zuletzt deshalb ist die, dem Realisierungsprojekt vorgelagerte Projektierung ein wichtiger Faktor für die richtigen Weichenstellungen am Weg zum Projekterfolg.",
                engineering3DTitle: "3D-Modellierung und Berechnung",
                engineering3DText: "Schwerpunkte unserer Planungsaktivitäten bilden das Basic Engineering der klassischen Anlagenplanung (Layout, Schemata, Leitpläne für Bau, Stahlbau und Rohrleitungstechnik) sowie das komplette Detail-Engineering für die Rohrleitungstechnik, Maschinen, Apparate und Sonderteile samt Berechnungen. Durch unsere Erfahrung berücksichtigen wir bereits in der Planungsphase Betriebs-, Wartungs- und Instandhaltungsanforderungen. Mit moderner Software erstellen wir präzise Konstruktionen und unsere 3D-Modelle optimieren Planung, Visualisierung und Projektgenauigkeit.",
                engineeringLaserTitle: "3D-Laserscanner",
                engineeringLaserText: "Für Anlagenerweiterungen, Umbauten oder As-Built-Aufnahmen setzen wir auf die Laserscantechnik. Über die Schnittstelle zu unserer 3D-Planungssoftware lassen sich aus den Punktwolken intelligente 3D-Modelle erstellen, die direkt für die weitere Planung genutzt werden können. Die präzise Maßaufnahme sorgt für eine lückenlose und exakte Abbildung bestehender Anlagen inklusive aller Störkanten im 3D-Modell.",
                projectSupportTitle: "Operative Projektunterstützung",
                projectExecutionTitle: "Projektabwicklung",
                projectExecutionText1: "In der Realisierungsphase von Projekten kommt es wesentlich darauf an, vordefinierte Zielsetzungen hinsichtlich Qualität-Termine-Kosten - etwa aus Verträgen - zu erfüllen oder im positiven Sinne zu übertreffen.",
                projectExecutionText2: "Wir begegnen dieser Herausforderung mit professionellen Projektingenieuren, die operativ in den Bereichen Projektmanagement und technischer Projektabwicklung unterstützen.",
                tenderingTitle: "Ausschreibung und Beschaffung",
                tenderingText: "Wir übernehmen die professionelle Planung und Durchführung von Ausschreibungen von Materialien, Dienstleistungen und Anlagen. Dazu gehören die Definition von Anforderungen, die Betreuung von Lieferanten, die Prüfung und Bewertung von Angeboten sowie die Verhandlung von Konditionen.",
                supervisionTitle: "Fachbauüberwachung",
                supervisionText: "Vor dem Hintergrund der ganzheitlichen Projektbetrachtung und einer der Planung entsprechenden Umsetzung vor Ort bieten wir insbesondere für Equipments und Rohrleitungstechnik, Leistungen der Ausführungsüberwachung. Alle der in diesem Bereich eingesetzten Mitarbeiter verfügen über umfangreiche Projekt- und Baustellenerfahrung und führen ein SCC-Zertifikat."
            },

            // Technologies
            technologies: {
                heroTitle: "Technologien",
                heroSubtitle: "Innovative Lösungen für präzise Planung und effiziente Projektabwicklung",
                planningTitle: "Planungssoftware",
                planningIntro: "Bei der Umsetzung unserer Planungsleistungen setzen wir auf modernste Softwarelösungen, die eine exakte Bearbeitung unserer Projekte ermöglichen.",
                planningFeaturesTitle: "Leistungsmerkmale:",
                planningFeature1: "3D-Modellierung und Simulation",
                planningFeature2: "Parametrische Konstruktion",
                planningFeature3: "Kollisionsprüfungen und Optimierung",
                planningFeature4: "Automatisierte Zeichnungsableitung",
                planningFeature5: "Material- und Mengenermittlung",
                planningFeature6: "Umfassende Strukturanalysen und Berechnungen",
                planningProgramsTitle: "Programme und Systeme:",
                scanningTitle: "3D-Laserscanning",
                scanningDesc1: "Mit moderner Laserscan-Technologie erfassen wir Gebäude und Anlagen präzise und detailgetreu. Die daraus entstehenden Punktwolken bilden eine verlässliche Grundlage für unsere 3D-Planung und ermöglichen eine sichere Dokumentation des Bestands.",
                scanningDesc2: "So stellen wir höchste Genauigkeit, Transparenz und Nachvollziehbarkeit in jedem Projekt sicher.",
                scanningSpecsTitle: "Leistungsspezifikationen:",
                scanningSpec1: "Reichweite 0,5-200m",
                scanningSpec2: "Entfernungsmessung: +/-1mm auf 10m",
                scanningSpec3: "Winkelgenauigkeit: 19 Bogensek.",
                scanningSpec4: "LaserHDR: Ja",
                scanningSpec5: "Max. Geschwindigkeit: Bis zu 2 MPts/Sek.",
                scanningSpec6: "Farbauflösung: Bis zu 266 MPx Farbe",
                vrTitle: "Virtual & Augmented Reality",
                vrIntro: "Als technisches Büro nutzen wir modernste Technologien, um Planungen noch verständlicher und erlebbarer zu machen. Mit Virtual Reality (VR) und Augmented Reality (AR) können unsere Kunden Projekte bereits vor der Umsetzung realitätsnah erleben.",
                vrSubtitle: "Virtual Reality (VR):",
                vrDesc: "Begehung von 3D-Modellen in einer virtuellen Umgebung – ideal für Präsentationen, Abstimmungen und Entscheidungsprozesse.",
                arSubtitle: "Augmented Reality (AR):",
                arDesc: "Integration von 3D-Planungen direkt in die reale Umgebung – für ein präzises Verständnis von Dimensionen und Zusammenhängen.",
                vrConclusion: "Damit ermöglichen wir transparente Abläufe, verlässliche Planungen und eine optimale Kommunikation zwischen allen Beteiligten."
            },

            // Contact
            contact: {
                heroTitle: "Kontakt",
                heroSubtitle: "Wir freuen uns auf Ihre Nachricht",
                reachUsTitle: "So erreichen Sie",
                reachUsTitleHighlight: "uns",
                phoneGraz: "Telefon Graz",
                phoneVienna: "Telefon Wien",
                email: "E-Mail",
                locationsTitle: "Unsere",
                locationsTitleHighlight: "Standorte",
                headquartersTitle: "Zentrale Raaba-Grambach",
                branchViennaTitle: "Zweigstelle Wien",
                routeTitle: "Anfahrt zu unseren",
                routeTitleHighlight: "Standorten",
                ctaTitle: "Bereit für Ihr nächstes",
                ctaTitleHighlight: "Projekt?",
                ctaText: "Lassen Sie uns gemeinsam Ihre Vision in die Realität umsetzen.",
                ctaButton: "Jetzt Kontakt aufnehmen"
            },

            // Career (Karriere)
            career: {
                heroTitle: "Karriere bei PROMAX",
                heroSubtitle: "Ihre Zukunft im Industrieanlagenbau",
                hiring: "Wir stellen ein",
                introTitle: "Unsere Projekte. Ihre Ideen. Gemeinsame Erfolge.",
                introText1: "Als erfahrenes Ingenieurbüro im Industrieanlagenbau sind wir seit mehr als 25 Jahren ein verlässlicher Partner für namhafte Kunden aus verschiedenen Branchen. Unsere Arbeit verbindet technisches Know-how mit praxisnahen Lösungen. Dabei stehen Qualität, Sicherheit und Nachhaltigkeit stets im Mittelpunkt.",
                introText2: "Was uns besonders macht? Unser Team. Bei PROMAX arbeiten Ingenieurinnen und Ingenieure, Techniker*innen und Projektmanager*innen mit Leidenschaft, Präzision und Teamgeist an anspruchsvollen Aufgaben. Wir glauben: Nur gemeinsam können wir Spitzenleistungen erbringen.",
                whyTitle: "Warum PROMAX?",
                whyFeature1Title: "Abwechslungsreiche Projekte",
                whyFeature1Text: "in unterschiedlichsten Industrien – vom Mittelstand bis zum Großkonzern",
                whyFeature2Title: "Ein kollegiales Miteinander",
                whyFeature2Text: "das auf Vertrauen, Offenheit und gegenseitiger Unterstützung basiert",
                whyFeature3Title: "Weiterentwicklung:",
                whyFeature3Text: "Fachliche und persönliche Weiterbildung ist bei uns keine Floskel, sondern gelebter Alltag.",
                whyFeature4Title: "Modernes Arbeitsumfeld:",
                whyFeature4Text: "Flexible Arbeitszeiten, moderne Tools und eine offene Unternehmenskultur.",
                whyFeature5Title: "Sicherheit & Perspektive:",
                whyFeature5Text: "Als etabliertes Unternehmen bieten wir langfristige Perspektiven und einen sicheren Arbeitsplatz.",
                jobsTitle: "Offene Stellen",
                jobsSubtitle: "Finden Sie Ihre perfekte Position in unserem wachsenden Unternehmen",
                jobsLoading: "Jobs werden geladen...",
                jobsError: "Jobs konnten nicht geladen werden. Bitte versuchen Sie es später erneut.",
                jobsReload: "Seite neu laden",
                jobsEmpty: "Momentan sind keine offenen Stellen verfügbar.",
                jobsEmptyText: "Wir freuen uns aber jederzeit über Initiativbewerbungen!",
                jobsMorePositions: "Weitere Positionen",
                jobsSwipeHint: "← Wischen Sie für weitere Stellen →",
                jobLocation: "Standort",
                jobType: "Arbeitszeit",
                jobTeam: "Team",
                jobTeamPersons: "Personen",
                jobPosted: "Veröffentlicht",
                jobExperience: "Erfahrung",
                jobDetailsToggle: "Job-Details",
                jobDetailsShow: "anzeigen",
                jobDetailsHide: "ausblenden",
                jobDirectContact: "Direkter Kontakt",
                jobContactQuestion: "Haben Sie Fragen zu dieser Position?",
                jobHRTeam: "HR-Team:",
                jobAboutPosition: "Über diese Position",
                jobResponsibilities: "Ihre Aufgaben",
                jobRequirements: "Ihr Profil",
                jobBenefits: "Was wir bieten",
                jobInterested: "Interesse an dieser Position?",
                jobInterestedText: "Senden Sie Ihre Bewerbungsunterlagen an unser HR-Team.",
                jobAttachments: "Bitte fügen Sie Lebenslauf, Anschreiben und relevante Zeugnisse bei.",
                ctaTitle: "Jetzt bewerben – Werden Sie Teil unseres Teams",
                ctaText: "Sie möchten mit uns die Industrie von morgen gestalten? Dann freuen wir uns auf Ihre Bewerbung! Entdecken Sie unsere aktuellen Stellenangebote oder senden Sie uns Ihre",
                ctaTextHighlight: "Initiativbewerbung",
                ctaEmailTitle: "E-Mail Bewerbung"
            },

            // Legal
            legal: {
                imprint: "Impressum",
                privacy: "Datenschutz",
                terms: "AGB",
                imprintTitle: "Impressum",
                imprintSubtitle: "Rechtliche Informationen gemäß § 5 TMG",
                companyInfo: "Firmeninformationen",
                contactTitle: "Kontakt",
                legalInfo: "Rechtliche Angaben",
                companyNumber: "Firmenbuchnummer:",
                uid: "UID-Nummer:",
                dvr: "DVR:",
                court: "Firmengericht:",
                authority: "Behörde gem. ECG:",
                disclaimer: "Haftungsausschluss",
                disclaimerText: "Trotz sorgfältiger inhaltlicher Kontrolle übernehmen wir keine Haftung für die Inhalte externer Links. Für den Inhalt der verlinkten Seiten sind ausschließlich deren Betreiber verantwortlich.",
                copyright: "Urheberrecht",
                copyrightText: "© 2024 PROMAX Project Management GesmbH. Alle Rechte vorbehalten. Die Inhalte und Werke auf dieser Website unterliegen dem österreichischen Urheberrecht.",
                imageCredits: "Bildnachweis",
                privacyTitle: "Datenschutzerklärung",
                privacySubtitle: "Informationen zur Verarbeitung Ihrer personenbezogenen Daten",
                termsTitle: "Allgemeine Geschäftsbedingungen",
                termsSubtitle: "Geltungsbereich und Vertragsschluss",
                copyrightYear: "2025"
            },

            // Footer
            footer: {
                contactUs: "Kontaktieren Sie uns",
                legal: "Rechtliches",
                certifications: "Zertifizierungen",
                copyright: "© 2025 PROMAX Project Management GesmbH. Alle Rechte vorbehalten."
            },

            // Common
            common: {
                readMore: "Mehr erfahren",
                learnMore: "Erfahren Sie mehr",
                scrollDown: "Nach unten scrollen",
                backToTop: "Nach oben",
                persons: "Personen"
            }
        }
    },

    en: {
        translation: {
            // Navigation
            nav: {
                home: "Home",
                company: "Company",
                services: "Services",
                technologies: "Technologies",
                career: "Career",
                contact: "Contact"
            },

            // Video Section (Hero)
            videoSection: {
                title: "We Shape the Future of",
                titleHighlight: "Industrial Plant Construction",
                years: "Years",
                experience: "Experience"
            },

            // Homepage
            homepage: {
                servicesTitle: "Our Services",
                engineeringTitle: "Engineering Planning",
                engineeringDesc: "Comprehensive planning and concept development for your industrial facilities using state-of-the-art methods and tools.",
                engineeringFeature1: "Plant Conception & Design",
                engineeringFeature2: "3D Modeling & Calculation",
                engineeringFeature3: "Laser Scanning Technology",
                operativeTitle: "Operational Project Support",
                operativeDesc: "Individual project support from planning to practical implementation.",
                operativeFeature1: "Project Execution",
                operativeFeature2: "Tendering and Procurement",
                operativeFeature3: "Technical Construction Supervision",
                industriesTitle: "Our Industries",
                industriesSubtitle: "With decades of expertise, we serve demanding industries and set the highest standards in quality and safety.",
                industry: {
                    chemistry: "Chemistry",
                    energy: "Energy & Environment",
                    pharma: "Pharma",
                    paper: "Paper & Pulp",
                    food: "Food",
                    steel: "Steel",
                    nuclear: "Nuclear",
                    other: "Other Industries"
                },
                ctaTitle: "Your Partner for Demanding Industrial Plant Construction",
                ctaButton: "Request Project"
            },

            // Company
            company: {
                heroTitle: "Know-how and Passion for Your Projects",
                heroSubtitle: "Since 1999",
                statsYears: "25+",
                statsYearsLabel: "Years of Experience",
                statsExperts: "35",
                statsExpertsLabel: "Experts",
                statsProjects: "1000+",
                statsProjectsLabel: "Projects",
                statsCert: "ISO",
                statsCertLabel: "Certified",
                aboutTitle: "Competence meets",
                aboutTitleHighlight: "Innovation",
                aboutText1: "PROMAX has stood for professional project implementation in industrial plant construction since 1999. With our team of 35 experienced experts, we support complex projects in a wide variety of industries – from planning to commissioning.",
                aboutFeature1Title: "Internationally Active",
                aboutFeature1Text: "Projects Worldwide",
                aboutFeature2Title: "ISO 9001:2015",
                aboutFeature2Text: "Certified Quality",
                teamTitle: "Your",
                teamTitleHighlight: "Contact Persons",
                teamSubtitle: "Experienced Experts for Your Projects",
                teamCEO: "Managing Director",
                teamBranchManager: "Branch Manager",
                teamHeadquarters: "Headquarters Grambach",
                teamBranchVienna: "Vienna Branch",
                cultureTitle: "What",
                cultureTitleMiddle: "PROMAX",
                cultureSubtitle: "Stands For",
                cultureHeading: "Our Corporate Culture",
                cultureText1: "At PROMAX Project Management GesmbH, we combine team spirit, open communication, and trust with targeted health promotion. Flat hierarchies, a cooperative work environment, and programs for the physical and mental well-being of our employees create space for innovation, motivation, and sustainable success.",
                cultureText2: "This creates a corporate culture that focuses on social competence, appreciation, and collaborative cooperation – for our teams, customers, and partners.",
                cultureFeature1: "Team Spirit & Collaboration",
                cultureFeature2: "Open Communication",
                cultureFeature3: "Innovation & Sustainable Success",
                certTitle: "Certified",
                certTitleHighlight: "Quality",
                certText: "PROMAX Project Management GesmbH is certified according to ISO 9001:2015, thus ensuring the highest quality standards in all areas of our services.",
                certFeature1Title: "Quality Management System",
                certFeature1Text: "Systematic processes for consistent quality and continuous improvement",
                certFeature2Title: "Customer Orientation",
                certFeature2Text: "Focus on customer satisfaction and meeting customer requirements",
                certFeature3Title: "Process Improvement",
                certFeature3Text: "Regular evaluation and optimization of all business processes",
                resourcesTitle: "Important Documents and Information for",
                resourcesTitleHighlight: "Download",
                resourceISOCert: "ISO 9001:2015 Certificate",
                resourceAGB: "General Terms and Conditions for Engineering Offices",
                resourceTypePDF: "PDF",
                resourceDownload: "Download",
                ctaTitle: "Ready for Your Next",
                ctaTitleHighlight: "Project?",
                ctaText: "Let's bring your vision to reality together. Contact us for a non-binding consultation.",
                ctaButton: "Discuss Project"
            },

            // Services
            services: {
                heroTitle: "Services",
                heroSubtitle: "Comprehensive Solutions for Complex Industrial Plant Projects",
                engineeringTitle: "Engineering Planning",
                engineeringConceptTitle: "Plant Conception and Design",
                engineeringConceptText: "Investment decisions require feasible basic planning, realistic schedules, and reliable project budgets. Not least for this reason, the project planning that precedes the realization project is an important factor for setting the right course on the path to project success.",
                engineering3DTitle: "3D Modeling and Calculation",
                engineering3DText: "The focus of our planning activities is the basic engineering of classical plant planning (layout, diagrams, master plans for construction, steel construction, and piping technology) as well as complete detail engineering for piping technology and calculations.",
                engineeringLaserTitle: "Laser Scan Technology",
                engineeringLaserText: "We use current planning tools in the 3D area and laser surveying technology.",
                projectSupportTitle: "Operational Project Support",
                projectExecutionTitle: "Project Execution",
                projectExecutionText1: "In the realization phase of projects, it is essential to meet or positively exceed predefined objectives regarding quality-deadlines-costs - for example from contracts.",
                projectExecutionText2: "We meet this challenge with professional project engineers who provide operational support in the areas of project management and technical project execution.",
                tenderingTitle: "Tendering and Procurement",
                tenderingText: "We take over the professional planning and execution of tenders for materials, services, and plants. This includes the definition of requirements, support of suppliers, review and evaluation of offers, as well as negotiation of conditions.",
                supervisionTitle: "Technical Construction Supervision",
                supervisionText: "Against the background of holistic project consideration and on-site implementation corresponding to the planning, we offer services for execution supervision, particularly for equipment and piping technology. All employees deployed in this area have extensive project and construction site experience and hold an SCC certificate."
            },

            // Technologies
            technologies: {
                heroTitle: "Technologies",
                heroSubtitle: "Innovative Solutions for Precise Planning and Efficient Project Execution",
                planningTitle: "Planning Software",
                planningIntro: "In implementing our planning services, we rely on state-of-the-art software solutions that enable precise processing of our projects.",
                planningFeaturesTitle: "Key Features:",
                planningFeature1: "3D Modeling and Simulation",
                planningFeature2: "Parametric Design",
                planningFeature3: "Collision Detection and Optimization",
                planningFeature4: "Automated Drawing Derivation",
                planningFeature5: "Material and Quantity Calculation",
                planningFeature6: "Comprehensive Structural Analysis and Calculations",
                planningProgramsTitle: "Programs and Systems:",
                scanningTitle: "3D Laser Scanning",
                scanningDesc1: "Using modern laser scanning technology, we capture buildings and facilities precisely and true to detail. The resulting point clouds provide a reliable foundation for our 3D planning and enable secure documentation of existing conditions.",
                scanningDesc2: "This ensures the highest accuracy, transparency, and traceability in every project.",
                scanningSpecsTitle: "Performance Specifications:",
                scanningSpec1: "Range 0.5-200m",
                scanningSpec2: "Distance Measurement: +/-1mm at 10m",
                scanningSpec3: "Angular Accuracy: 19 arcsec.",
                scanningSpec4: "LaserHDR: Yes",
                scanningSpec5: "Max. Speed: Up to 2 MPts/sec.",
                scanningSpec6: "Color Resolution: Up to 266 MPx Color",
                vrTitle: "Virtual & Augmented Reality",
                vrIntro: "As an engineering firm, we use cutting-edge technologies to make planning more understandable and experiential. With Virtual Reality (VR) and Augmented Reality (AR), our clients can experience projects realistically before implementation.",
                vrSubtitle: "Virtual Reality (VR):",
                vrDesc: "Walk through 3D models in a virtual environment – ideal for presentations, coordination, and decision-making processes.",
                arSubtitle: "Augmented Reality (AR):",
                arDesc: "Integration of 3D planning directly into the real environment – for a precise understanding of dimensions and relationships.",
                vrConclusion: "This enables transparent processes, reliable planning, and optimal communication between all parties involved."
            },

            // Contact
            contact: {
                heroTitle: "Contact",
                heroSubtitle: "We look forward to hearing from you",
                reachUsTitle: "How to reach",
                reachUsTitleHighlight: "us",
                phoneGraz: "Phone Graz",
                phoneVienna: "Phone Vienna",
                email: "Email",
                locationsTitle: "Our",
                locationsTitleHighlight: "Locations",
                headquartersTitle: "Headquarters Raaba-Grambach",
                branchViennaTitle: "Vienna Branch Office",
                routeTitle: "Directions to our",
                routeTitleHighlight: "Locations",
                ctaTitle: "Ready for your next",
                ctaTitleHighlight: "Project?",
                ctaText: "Let's bring your vision to reality together.",
                ctaButton: "Contact Us Now"
            },

            // Career
            career: {
                heroTitle: "Career at PROMAX",
                heroSubtitle: "Your Future in Industrial Plant Construction",
                hiring: "We're Hiring",
                introTitle: "Our Projects. Your Ideas. Shared Success.",
                introText1: "As an experienced engineering firm in industrial plant construction, we have been a reliable partner for renowned clients from various industries for more than 25 years. Our work combines technical expertise with practical solutions. Quality, safety, and sustainability are always at the forefront.",
                introText2: "What makes us special? Our team. At PROMAX, engineers, technicians, and project managers work with passion, precision, and team spirit on demanding tasks. We believe: Only together can we achieve top performance.",
                whyTitle: "Why PROMAX?",
                whyFeature1Title: "Diverse Projects",
                whyFeature1Text: "in various industries – from medium-sized companies to large corporations",
                whyFeature2Title: "A Collegial Environment",
                whyFeature2Text: "based on trust, openness, and mutual support",
                whyFeature3Title: "Development:",
                whyFeature3Text: "Professional and personal development is not just a phrase with us, but everyday practice.",
                whyFeature4Title: "Modern Work Environment:",
                whyFeature4Text: "Flexible working hours, modern tools, and an open corporate culture.",
                whyFeature5Title: "Security & Perspective:",
                whyFeature5Text: "As an established company, we offer long-term perspectives and a secure workplace.",
                jobsTitle: "Open Positions",
                jobsSubtitle: "Find your perfect position in our growing company",
                jobsLoading: "Loading jobs...",
                jobsError: "Jobs could not be loaded. Please try again later.",
                jobsReload: "Reload Page",
                jobsEmpty: "Currently no open positions available.",
                jobsEmptyText: "However, we welcome unsolicited applications at any time!",
                jobsMorePositions: "More Positions",
                jobsSwipeHint: "← Swipe for more positions →",
                jobLocation: "Location",
                jobType: "Working Hours",
                jobTeam: "Team",
                jobTeamPersons: "People",
                jobPosted: "Posted",
                jobExperience: "Experience",
                jobDetailsToggle: "Job Details",
                jobDetailsShow: "show",
                jobDetailsHide: "hide",
                jobDirectContact: "Direct Contact",
                jobContactQuestion: "Do you have questions about this position?",
                jobHRTeam: "HR Team:",
                jobAboutPosition: "About This Position",
                jobResponsibilities: "Your Responsibilities",
                jobRequirements: "Your Profile",
                jobBenefits: "What We Offer",
                jobInterested: "Interested in this position?",
                jobInterestedText: "Send your application documents to our HR team.",
                jobAttachments: "Please attach your CV, cover letter, and relevant certificates.",
                ctaTitle: "Apply Now – Become Part of Our Team",
                ctaText: "Would you like to shape the industry of tomorrow with us? Then we look forward to receiving your application! Discover our current job openings or send us your",
                ctaTextHighlight: "unsolicited application",
                ctaEmailTitle: "Email Application"
            },

            // Legal
            legal: {
                imprint: "Imprint",
                privacy: "Privacy Policy",
                terms: "Terms",
                imprintTitle: "Imprint",
                imprintSubtitle: "Legal Information according to § 5 TMG",
                companyInfo: "Company Information",
                companyName: "PROMAX Project Management GesmbH",
                companyAddress: "Parkring 18/F",
                companyCity: "8074 Raaba-Grambach",
                companyCountry: "Austria",
                contactTitle: "Contact",
                phone: "Phone",
                fax: "Fax",
                email: "Email",
                website: "Website",
                legalInfo: "Legal Details",
                companyNumber: "Company Number:",
                uid: "VAT Number:",
                dvr: "DVR:",
                court: "Company Court:",
                courtName: "Regional Court for ZRS Graz",
                authority: "Authority acc. to ECG:",
                authorityName: "District Authority Graz-Umgebung",
                disclaimer: "Disclaimer",
                disclaimerText: "Despite careful content control, we assume no liability for the content of external links. The operators of the linked pages are solely responsible for their content.",
                copyright: "Copyright",
                copyrightText: "All rights reserved. The content and works on this website are subject to Austrian copyright law.",
                imageCredits: "Image Credits",

                // Privacy Policy
                privacyTitle: "Privacy Policy",
                privacySubtitle: "Information on Processing Your Personal Data",
                legalBasisTitle: "Legal Basis",
                legalBasisText1: "The EU General Data Protection Regulation, the Data Protection Act 2000, and the Data Protection Adaptation Act 2018 serve the right to protection of personal data. We process your data exclusively on the basis of legal regulations (GDPR, DSG 2018, TKG 2003).",
                legalBasisText2: "It is particularly important to us to protect and securely store all personal data that you entrust to us. In this document, you will learn more about how we use and process your personal data.",
                legalBasisText3: "The legal bases for the processing of your personal data are, on the one hand, contract fulfillment, legitimate interests, the fulfillment of our legal or contractual obligations, and, on the other hand, your consent (e.g., contact form, cookies).",

                responsibleTitle: "Controller",
                responsibleText: "Controller within the meaning of the GDPR:",

                purposeTitle: "Purpose Limitation",
                purposeText: "We also process data that we have legitimately received from customers and suppliers for the purpose of contract fulfillment. This includes basic personal data such as: names, titles, professional position, email address, company address, company telephone number",

                storageDurationTitle: "Storage Duration",
                storageDurationText: "We process your personal data (names, titles, professional position, email address, company address, company telephone number) as far as necessary, for the duration of the entire business relationship (from initiation, processing to termination of a contract), and beyond in accordance with the legal retention and documentation obligations, which arise, among other things, from the Austrian Commercial Code (UGB), the Federal Fiscal Code (BAO), as well as until the end of any legal dispute, ongoing warranty and guarantee periods.",

                processingTitle: "Order Processing",
                processingText: "Our commissioned software service provider, who may gain access to your personal data in the course of their activities, insofar as this data is required to fulfill their respective service, has committed to us to comply with the applicable data protection regulations. Order processing agreements according to Art 28 GDPR have been concluded.",

                websiteDataTitle: "Data Processing on This Website",
                generalInfoTitle: "Collection of General Information",
                generalInfoText: "When you access our website, information of a general nature is automatically collected. This information (server log files) includes, for example, the type of web browser, the operating system used, the domain name of your Internet service provider, and the like. This is exclusively information that does not allow conclusions about your person. This information is technically necessary to correctly deliver content from websites that you have requested and is inevitably incurred when using the Internet. Anonymous information of this kind is statistically evaluated by us to optimize our Internet presence and the technology behind it.",

                contactFormTitle: "Contact Form",
                contactFormText1: "Your information, including personal data from our contact form, is transmitted to us for processing your request via our own mail server, further processed, and stored with us. This data is not collected or passed on without your consent. Without this data, we cannot process your inquiries.",
                contactFormText2: "If you contact us by email or contact form, the information you provide will be stored for the purpose of processing the inquiry and for possible follow-up questions.",

                sslTitle: "SSL Encryption",
                sslText: "To protect the security of your data during transmission, we use encryption methods (e.g., SSL) via HTTPS that correspond to the current state of the art.",

                paidServicesTitle: "Provision of Paid Services",
                paidServicesText: "For the provision of paid services, we request additional data, such as payment information.",

                consentTitle: "Consent and Right of Withdrawal",
                consentText: "If your consent is necessary for the processing of your data, we process it only after your express consent. You can revoke your consent at any time at the following email address: office@promax.at. The revocation of consent does not affect the lawfulness of processing based on consent before its withdrawal.",

                dataSecurityTitle: "Data Security",
                dataSecurityText: "PROMAX Project GesmbH employs technical and organizational security measures to protect stored personal data against accidental or intentional manipulation, loss, or destruction and against access by unauthorized persons. Our security measures are continuously improved in accordance with technological progress.",

                deletionTitle: "Deletion or Blocking of Data",
                deletionText: "We adhere to the principles of data avoidance and data minimization. We therefore store your personal data only for as long as is necessary to achieve the purposes mentioned here or as provided for by the various storage periods provided by the legislator. After the respective purpose ceases to apply or after these periods expire, the corresponding data is routinely blocked or deleted in accordance with legal regulations.",

                newsletterTitle: "Newsletter",
                newsletterText1: "When you register to receive our newsletter, the data you provide will be used exclusively for this purpose. Subscribers can also be informed by email about circumstances relevant to the service or registration (for example, changes to the newsletter offer or technical circumstances).",
                newsletterText2: "For effective registration, we need a valid email address. To verify that a registration is actually made by the owner of an email address, we use the 'double opt-in' procedure. For this purpose, we log the order of the newsletter, the sending of a confirmation email, and the receipt of the response requested hereby. No further data is collected. The data is used exclusively for sending the newsletter and is not passed on to third parties.",
                newsletterText3: "You can revoke your consent to the storage of your personal data and their use for sending the newsletter at any time. Every newsletter contains a corresponding link. You can also unsubscribe directly on this website at any time or inform us of your corresponding request via the contact option provided at the end of these data protection notices.",

                googleAnalyticsTitle: "Use of Google Analytics",
                googleAnalyticsText1: "This website uses Google Analytics, a web analysis service provided by Google Inc. (hereinafter: Google). Google Analytics uses so-called 'cookies', text files that are stored on your computer and that enable an analysis of your use of the website. The information generated by the cookie about your use of this website is usually transmitted to a Google server in the USA and stored there. However, due to the activation of IP anonymization on these websites, your IP address is shortened by Google beforehand within member states of the European Union or in other contracting states of the Agreement on the European Economic Area. Only in exceptional cases is the full IP address transmitted to a Google server in the USA and shortened there. On behalf of the operator of this website, Google will use this information to evaluate your use of the website, to compile reports on website activity, and to provide other services related to website activity and internet usage to the website operator. The IP address transmitted by your browser within the framework of Google Analytics is not merged with other data from Google.",
                googleAnalyticsText2: "You can prevent the storage of cookies by an appropriate setting of your browser software; however, we point out that in this case you may not be able to use all functions of this website in full. You can also prevent Google from collecting the data generated by the cookie and related to your use of the website (including your IP address) and from processing this data by downloading and installing the browser plugin available at the following link:",
                googleAnalyticsText3: "In addition or as an alternative to the browser add-on, you can prevent tracking by Google Analytics on our pages by clicking the following link (stop tracking). An opt-out cookie will be installed on your device. This prevents collection by Google Analytics for this website and for this browser in the future, as long as the cookie remains installed in your browser.",

                googleMapsTitle: "Use of Google Maps",
                googleMapsText: "This website uses Google Maps API to visually display geographical information. When using Google Maps, Google also collects, processes, and uses data about the use of map functions by visitors. You can find more information about data processing by Google in the Google Privacy Policy. There you can also change your personal privacy settings in the privacy center. Detailed instructions for managing your own data in connection with Google products can be found at the following link:",

                youtubeTitle: "Embedded YouTube Videos",
                youtubeText1: "On some of our web pages, we embed YouTube videos. The operator of the corresponding plugins is YouTube, LLC, 901 Cherry Ave., San Bruno, CA 94066, USA. When you visit a page with the YouTube plugin, a connection to YouTube servers is established. YouTube is informed which pages you visit. If you are logged into your YouTube account, YouTube can assign your surfing behavior to you personally. You can prevent this by logging out of your YouTube account beforehand.",
                youtubeText2: "When a YouTube video is started, the provider uses cookies that collect information about user behavior.",
                youtubeText3: "Anyone who has deactivated the storage of cookies for the Google Ad program will not have to expect such cookies when watching YouTube videos. However, YouTube also stores non-personal usage information in other cookies. If you want to prevent this, you must block the storage of cookies in the browser.",
                youtubeText4: "Further information on data protection at 'YouTube' can be found in the provider's privacy policy at:",

                socialPluginsTitle: "Social Plugins",
                socialPluginsText1: "We offer you the possibility of using so-called 'social media buttons' on our website. To protect your data, we rely on the 'Shariff' solution for implementation. This means that these buttons are embedded on the website merely as graphics that contain a link to the corresponding website of the button provider. By clicking on the graphic, you are thus redirected to the services of the respective providers. Only then is your data sent to the respective providers. If you do not click on the graphic, no exchange takes place between you and the providers of the social media buttons. Information about the collection and use of your data in social networks can be found in the respective terms of use of the corresponding providers. More information about the Shariff solution can be found here:",
                socialPluginsText2: "We have embedded social media buttons from the following companies on our website: Facebook Inc. (1601 S. California Ave - Palo Alto - CA 94304 - USA)",

                googleAdWordsTitle: "Google AdWords",
                googleAdWordsText1: "Our website uses Google conversion tracking. If you reached our website via an ad placed by Google, Google AdWords sets a cookie on your computer. The cookie for conversion tracking is set when a user clicks on an ad placed by Google. These cookies lose their validity after 30 days and are not used for personal identification. If the user visits certain pages of our website and the cookie has not yet expired, we and Google can recognize that the user clicked on the ad and was redirected to this page. Each Google AdWords customer receives a different cookie. Cookies can therefore not be tracked across the websites of AdWords customers. The information obtained with the help of the conversion cookie serves to create conversion statistics for AdWords customers who have opted for conversion tracking. Customers learn the total number of users who clicked on their ad and were redirected to a page with a conversion tracking tag. However, they do not receive any information with which users can be personally identified.",
                googleAdWordsText2: "If you do not want to participate in tracking, you can refuse the necessary setting of a cookie - for example, via browser settings that generally deactivate the automatic setting of cookies or set your browser so that cookies from the domain 'googleleadservices.com' are blocked.",
                googleAdWordsText3: "Please note that you must not delete the opt-out cookies as long as you do not want any recording of measurement data. If you have deleted all your cookies in the browser, you must set the respective opt-out cookie again.",

                yourRightsTitle: "Your Rights",
                yourRightsText1: "You have the right at any time to receive information from the controller mentioned above about the personal data concerned. If there is no legal retention obligation, you have the right to delete this data and to object to the processing. You also have the right to rectify the data and to restrict processing, to data portability, and to lodge a complaint with the Austrian Data Protection Authority (Wickenburggasse 8-10, 1080 Vienna, email: dsb@dsb.gv.at).",
                rightInfoTitle: "Right to Information",
                rightInfoText: "You have the right to receive information about the personal data we process.",
                rightCorrectionTitle: "Rectification",
                rightCorrectionText: "You have the right to rectify incorrect data.",
                rightDeletionTitle: "Deletion",
                rightDeletionText: "You have the right to delete your personal data.",
                rightObjectionTitle: "Objection",
                rightObjectionText: "You have the right to object to the processing of your data.",
                yourRightsText2: "You have the right to receive information about your personal data stored with us at any time. You also have the right to rectification, blocking, or, apart from the prescribed data storage for business transactions, deletion of your personal data. Please contact our data protection officer at office@promax.at.",
                yourRightsText3: "So that a blocking of data can be taken into account at any time, this data must be kept in a blocking file for control purposes. You can also request the deletion of the data, unless there is a legal archiving obligation. If such an obligation exists, we block your data upon request.",
                yourRightsText4: "You can make changes or withdraw consent by appropriate notification to us with effect for the future.",

                changesTitle: "Changes to Our Privacy Policy",
                changesText: "We reserve the right to occasionally adjust this privacy policy so that it always complies with current legal requirements or to implement changes to our services in the privacy policy, e.g., when introducing new services. The new privacy policy will then apply to your next visit.",

                questionsTitle: "Questions About Data Protection",
                questionsText: "If you have questions about data protection, please write us an email or contact our controller / contact person directly at office@promax.at",

                termsTitle: "General Terms and Conditions",
                termsSubtitle: "Scope and Contract Conclusion",
                copyrightYear: "2025"
            },

            // Footer
            footer: {
                contactUs: "Contact Us",
                legal: "Legal",
                certifications: "Certifications",
                copyright: "© 2025 PROMAX Project Management GesmbH. All rights reserved."
            },

            // Common
            common: {
                readMore: "Read More",
                learnMore: "Learn More",
                scrollDown: "Scroll Down",
                backToTop: "Back to Top",
                persons: "People"
            }
        }
    }
};

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources,
        fallbackLng: 'de',
        lng: 'de',
        interpolation: {
            escapeValue: false
        },
        detection: {
            order: ['localStorage', 'navigator'],
            caches: ['localStorage']
        }
    });

export default i18n;