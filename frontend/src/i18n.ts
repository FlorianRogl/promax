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
                statsProjects: "500+",
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
                engineering3DText: "Schwerpunkte unserer Planungsaktivitäten bilden das Basic Engineering der klassischen Anlagenplanung (Layout, Schemata, Leitpläne für Bau, Stahlbau und Rohrleitungstechnik) sowie das komplette Detail-Engineering für die Rohrleitungstechnik und die Berechnungen.",
                engineeringLaserTitle: "LaserScan-Technologie",
                engineeringLaserText: "Wir bedienen uns aktueller Planungstools im 3D-Bereich und der Laservermessungstechnik.",
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

                // Planungssoftware
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

                // Berechnungssoftware
                calculationTitle: "Berechnungssoftware",
                calculationIntro: "Für statische und dynamische Berechnungen setzen wir auf spezialisierte Software, die höchste Genauigkeit und Zuverlässigkeit gewährleistet.",
                calculationFeaturesTitle: "Funktionen:",
                calculationFeature1: "Statische und dynamische Analysen",
                calculationFeature2: "Spannungs- und Verformungsberechnungen",
                calculationFeature3: "Festigkeitsnachweise nach gültigen Normen",
                calculationFeature4: "Integration mit CAD-Systemen",

                // 3D-Laserscanning
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

                // Virtual & Augmented Reality
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
                headquartersTitle: "Hauptsitz Raaba-Grambach",
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
                statsProjects: "500+",
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

                // Planning Software
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

                // Calculation Software
                calculationTitle: "Calculation Software",
                calculationIntro: "For static and dynamic calculations, we rely on specialized software that ensures the highest accuracy and reliability.",
                calculationFeaturesTitle: "Features:",
                calculationFeature1: "Static and Dynamic Analysis",
                calculationFeature2: "Stress and Deformation Calculations",
                calculationFeature3: "Strength Verification According to Valid Standards",
                calculationFeature4: "Integration with CAD Systems",

                // 3D Laser Scanning
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

                // Virtual & Augmented Reality
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
                contactTitle: "Contact",
                legalInfo: "Legal Details",
                companyNumber: "Company Number:",
                uid: "VAT Number:",
                dvr: "DVR:",
                court: "Company Court:",
                authority: "Authority acc. to ECG:",
                disclaimer: "Disclaimer",
                disclaimerText: "Despite careful content control, we assume no liability for the content of external links. The operators of the linked pages are solely responsible for their content.",
                copyright: "Copyright",
                copyrightText: "© 2024 PROMAX Project Management GesmbH. All rights reserved. The content and works on this website are subject to Austrian copyright law.",
                imageCredits: "Image Credits",
                privacyTitle: "Privacy Policy",
                privacySubtitle: "Information on Processing Your Personal Data",
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