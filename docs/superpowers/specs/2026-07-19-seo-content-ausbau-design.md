# Design: SEO-Content-Ausbau promax.at

**Datum:** 2026-07-19 · **Branch:** `seo-content-ausbau` (von `origin/main`, Next.js-App)
**Status:** Vom Nutzer freigegeben (mit Änderung: Jobs bleiben hartcodiert, kein Sanity)

## Kontext

Die Website ist seit ~05.07.2026 als Next.js-App live (App Router, next-intl, `/de`+`/en`).
Technisches SEO ist in Ordnung (SSR, Canonicals, hreflang, Sitemap, Legacy-Redirects), aber es
existieren nur 7 Inhaltsseiten – zu wenig, um für die Keywords aus `SEO-Keywords.txt` zu ranken.
Die alte CMS-Website hatte eigene Seiten für Branchen (Chemie, Pharma, Papier, Energie) und
Technologien (AutoCAD Plant 3D, PDMS, 3D-Laserscanning), auf die weiterhin alte URLs und
Linksignale zeigen; deren Redirects landen derzeit pauschal auf `/de/leistungen` bzw.
`/de/technologien`.

**Ziel:** 13 neue, fokussierte Landingpages (je de+en), die die Keyword-Gruppen 4, 5, 6 und 8
abdecken, plus JobPosting-Schema für Google for Jobs. Nichts geht live: Arbeit nur auf diesem
Branch, Review über Vercel-Preview, Merge macht der Nutzer.

## Neue Seiten

### 1. Branchen (Keyword-Gruppen 5+6)

| URL (de) | Haupt-Keyword (H1-Richtung) |
|---|---|
| `/de/branchen` | Übersicht „Branchen im Industrieanlagenbau" |
| `/de/branchen/chemie` | Anlagenbau Chemieindustrie |
| `/de/branchen/pharma` | Anlagenbau Pharmaindustrie |
| `/de/branchen/energie-umwelt` | Anlagenbau Energietechnik & Umwelttechnik |
| `/de/branchen/papier-zellstoff` | Anlagenbau Papier- & Zellstoffindustrie |
| `/de/branchen/lebensmittel` | Anlagenbau Lebensmittelindustrie |
| `/de/branchen/stahl` | Anlagenbau Stahlindustrie |
| `/de/branchen/nuklear` | Anlagenbau Nukleartechnik |

Aufbau je Seite: Hero (H1 mit Keyword + kurzer Subline) → Intro-Absatz (Branchenkontext,
lokaler Bezug Graz/Steiermark/Wien/Österreich) → PROMAX-Leistungen im Branchenkontext
(Ingenieurplanung, 3D-Planung, Projektabwicklung, Fachbauüberwachung – mit internen Links)
→ Vertrauensblock (ISO 9001:2015, seit 1999, 35 Experten) → Kontakt-CTA.
Umfang ~400–600 Wörter echter Text pro Seite. Schema: `BreadcrumbList` + `Service`
(serviceType je Branche, `areaServed` Austria).

### 2. Technologie-Unterseiten (Keyword-Gruppe 4)

| URL (de) | Haupt-Keywords |
|---|---|
| `/de/technologien/3d-laserscanning` | 3D Laserscanning, Laserscan Industrieanlage, Punktwolke, Scan to BIM |
| `/de/technologien/planungssoftware` | AutoCAD Plant 3D, AVEVA PDMS/E3D, Intergraph Smart 3D |
| `/de/technologien/rohrleitungsberechnung` | ROHR2 Berechnung, Rohrstatik |
| `/de/technologien/virtual-augmented-reality` | VR Anlagenbegehung, Augmented Reality Industrie |

Gleicher Seitenaufbau wie Branchen; die bestehende Seite `/technologien` verlinkt prominent
auf die vier Unterseiten.

### 3. FAQ (Keyword-Gruppe 8)

`/de/faq`: 12–14 Fragen aus der Long-Tail-Liste (z. B. „Was kostet 3D-Laserscanning einer
Industrieanlage?", „Unterschied Basic und Detail Engineering?") mit je 3–6 Sätzen Antwort und
internen Links auf die passenden Seiten. Schema: `FAQPage`. Antworten bleiben faktisch
(keine erfundenen Preise – bei Kostenfragen: Einflussfaktoren + „unverbindliches Angebot").

### 4. JobPosting-Schema auf Karriere

Die hartcodierten Jobdaten (kein Sanity – Nutzervorgabe) werden zusätzlich als
`JobPosting`-JSON-LD gerendert (Titel, Beschreibung, Standort, Beschäftigungsart,
`hiringOrganization` PROMAX, `datePosted`/`validThrough`), damit die Stellen in
Google for Jobs erscheinen. Die Jobdaten werden dazu in ein von Server-Code importierbares
Modul gelegt (z. B. `lib/jobs.ts`), aus dem sowohl die Karriere-Komponente als auch das
Schema lesen – eine Quelle, keine Duplikation.

## Inhalte / Texte

Ich (Claude) schreibe alle Texte de+en auf Basis des vorhandenen Website-Materials und der
Keyword-Liste. Harte Regel: **keine erfundenen Referenzprojekte, Kundennamen oder Zahlen** –
nur belegbare Fakten der bestehenden Site (ISO 9001:2015, seit 1999, 35 Experten, Standorte,
Leistungsspektrum, Softwareliste). Die Firma reviewt die Texte vor dem Merge und kann echte
Projektbeispiele ergänzen.

## Interne Verlinkung & Navigation

- Navbar: neuer Menüpunkt „Branchen" (zwischen Leistungen und Technologien).
- Footer: Spalte mit Branchen-Links + FAQ.
- Homepage: die 8 Branchen-Kacheln werden zu Links auf die jeweilige Branchenseite
  („Weitere Branchen" → `/branchen`).
- Leistungen-Seite: Querverweise auf Branchen; Technologien-Seite: Karten zu den 4 Unterseiten.

## Technische Umsetzung (bestehende Muster wiederverwenden)

- Je Route eine `app/[locale]/<pfad>/page.tsx` nach dem Muster der bestehenden Seiten
  (`generateMetadata` via `buildMetadata`, `setRequestLocale`, `StructuredData`).
- SEO-Einträge (title ≤60 Zeichen, description ≤155, canonical, structuredData) in
  `lib/seo-config.ts`; `buildMetadata` bleibt unverändert.
- Texte in `messages/de.json` + `messages/en.json` (vollständige en-Parität wegen hreflang).
- `app/sitemap.ts`: Routen-Liste um die 13 neuen Routen erweitern (20 Routen × 2 Sprachen = 40 URLs).
- Optik: bestehende Komponenten-/Styling-Muster der Seiten (CSS-Module/Styled Components
  wie im jeweiligen Umfeld); keine neuen Design-Systeme.

## Redirect-Retargeting (`next.config.ts`)

Alte CMS-IDs von der Pauschal-Weiterleitung auf die neue, thematisch exakte Seite umhängen:

| Alte ID(s) | Neu |
|---|---|
| `_00613`, `_00629`, `_00674` (en), `_00667` (en) | `/{locale}/branchen/chemie` |
| `_00615`, `_00631` | `/de/branchen/pharma` |
| `_00614`, `_00630`, `_00675` (en) | `/{locale}/branchen/energie-umwelt` |
| `_00616`, `_00632`, `_00671` (en), `_00677` (en) | `/{locale}/branchen/papier-zellstoff` |
| `_00641`, `_00662` (en), `_00587`, `_00635`, `_00660` (en) | `/{locale}/technologien/planungssoftware` |
| `_00644` | `/de/technologien/3d-laserscanning` |
| `_00588`, `_00661` (en) | `/{locale}/technologien/rohrleitungsberechnung` |
| Regel `/branchen/:path*` → `/de/leistungen` | ersetzen durch `/branchen/:slug` → `/de/branchen/:slug` (Fallback unbekannter Slugs: `/de/branchen`) |

Alle übrigen bestehenden Redirects bleiben unverändert.

## Sonstiges

- `sameAs` im Organization-Schema: Umstellung auf die LinkedIn-Unternehmensseite, sobald der
  Nutzer die URL liefert. Liegt sie beim Implementieren nicht vor, bleibt der bestehende
  Eintrag unverändert (bewusst kein Platzhalter).

## Out of Scope

Projektberichte-Einzelseiten (braucht echtes Firmenmaterial), Blog, Änderung der
Root-/Locale-URL-Struktur, Sanity-Anbindung, Google Business Profile (separater Leitfaden
in `docs/google-business-profile-checkliste.md`).

## Verifikation / Abnahme

1. `npm run build` fehlerfrei; alle neuen Routen werden statisch generiert (de+en).
2. `sitemap.xml` enthält alle neuen URLs mit hreflang-Alternates.
3. Stichprobe im gebauten HTML: Title, Description, Canonical, H1, JSON-LD pro neuer Seite.
4. FAQ-/JobPosting-/Service-Schemas durch den Google-Rich-Results-Test (macht der Nutzer über
   die Vercel-Preview-URL, alternativ Schema-Validierung lokal).
5. Nutzer prüft Texte + Optik über die Vercel-Preview; Merge in `main` erfolgt ausschließlich
   durch den Nutzer nach Firmen-Review der Texte.
