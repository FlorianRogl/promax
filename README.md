# PROMAX Project Management – Next.js 15 Website

Dieses Projekt ist eine Next.js 15 App Router Anwendung (TypeScript, React 18, Tailwind CSS), migriert vom alten Vite/React SPA unter `../PromaxHost`.

## Deployment auf Vercel

### Framework-Erkennung
Vercel erkennt das Projekt automatisch als **Next.js**-Projekt (Framework Preset: Next.js). Keine `vercel.json` mit Rewrites notwendig – SPA-Catch-all-Rewrites würden das Next.js-Routing brechen und müssen **nicht** vorhanden sein.

### Produktionsdomain
Die Domains `www.promax.at` und `promax.at` dürfen **erst nach visuellem Abnahme-Check** auf die neue Vercel-Deployment-URL umgezogen werden.

Die kanonische `BASE_URL` in `lib/seo-config.ts` ist `https://www.promax.at` und muss mit der eingesetzten Produktionsdomain übereinstimmen. Vor dem Go-Live ggf. anpassen.

### i18n / Routen
- Routen: `/de/...` und `/en/...`
- `/` (Root) leitet per Middleware auf `/de` weiter
- Alte kapitalisierte URLs (`/Leistungen`, `/Unternehmen` etc.) werden per 301 auf `/de/...` weitergeleitet

### Seiten (8 Routen, je DE + EN)
| Route | DE | EN |
|-------|----|----|
| `/[locale]` | Startseite | Home |
| `/[locale]/unternehmen` | Unternehmen | Company |
| `/[locale]/leistungen` | Leistungen | Services |
| `/[locale]/technologien` | Technologien | Technologies |
| `/[locale]/karriere` | Karriere | Career |
| `/[locale]/kontakt` | Kontakt | Contact |
| `/[locale]/projektberichte` | Projektberichte | Project Reports |
| `/[locale]/rechtliches` | Impressum & Datenschutz | Legal Notice & Privacy |

### Drittanbieter-Integrationen
- **Sanity CMS** – Projekt-ID `8er2mgl5` (in `lib/sanity.ts` konfiguriert)
- **Microsoft Clarity** – ID `vapan0juwg` (in `components/ClarityInit.tsx`)
- Analytics und Clarity werden **erst nach Cookie-Consent** geladen

### OG Images
OG-Bilder liegen unter `public/og/` und basieren aktuell auf vorhandenen Markenfotos (Placeholder-Qualität). Sie können später durch dedizierte 1200×630 px Bilder ersetzt werden.

## Lokale Entwicklung

```bash
npm run dev      # Entwicklungsserver (http://localhost:3000)
npm run build    # Produktions-Build
npm run start    # Produktions-Server lokal vorschauen
```

## Hinweise für Go-Live

1. Visuellen Vergleich mit `../PromaxHost` (altes SPA) durchführen
2. `BASE_URL` in `lib/seo-config.ts` auf `https://www.promax.at` prüfen (bereits gesetzt)
3. DNS/Domain auf Vercel-Deployment-URL umstellen
4. Sitemap unter `https://www.promax.at/sitemap.xml` und robots.txt prüfen
5. Google Search Console mit neuer Property einrichten
