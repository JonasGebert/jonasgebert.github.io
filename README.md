# Portfolio — Jonas Gebert

Persönliche Portfolio-Website. Ein Ort für Werdegang, Qualifikationen und Zeugnisse —
als schlanke, statisch ausgelieferte Single-Page-App.

**Live:** https://jonasgebert.github.io

## Features

- **Interaktive Lebenslauf-Timeline** — Stationen aus Ausbildung, Studium und Beruf
- **Vollständiger Notenspiegel** — Studien- und Ausbildungsnoten auf einen Blick
- **Zeugnis-Detailseiten** — jedes Zeugnis als eigene Seite (SSG) mit PDF-Download
- **Skills & Zertifikate** — thematisch gruppiert
- **Dark-Mode-Design** — Glassmorphism-Sidebar, dezente Scroll-Animationen

## Tech-Stack

Next.js 15 (App Router) · React 19 · TypeScript · Tailwind CSS v4 · `marked` für
Markdown → HTML zur Build-Zeit. Ausgeliefert als statischer Export, deployed über
GitHub Actions bei jedem Push auf `main`.

Animationen laufen bewusst über CSS + IntersectionObserver statt einer Animations-Library,
um Bundle-Größe und Abhängigkeiten klein zu halten.

## Projektstruktur

```
content/              Markdown-Quelldateien (about-me, Ziel, zeugnisse/*.md)
src/content/          Typisierte Content-Module (Profil, Timeline, Noten, Skills)
src/lib/markdown.ts   Markdown → HTML zur Build-Zeit
src/components/       Wiederverwendbare UI-Komponenten
src/app/              App Router: Hauptseite + /zeugnisse/[slug]/ (SSG)
public/documents/     Zeugnis-PDFs
public/assets/        Bilder
```

## Lokal starten

```bash
npm install
npm run dev      # Entwicklungsserver auf http://localhost:3000
npm run build    # Produktions-Build (statischer Export)
```

## Datenschutz

Personenbezogene Daten (Adresse, Geburtsdatum, Matrikelnummer, private E-Mail)
wurden aus Inhalten, Quellcode und PDFs entfernt bzw. geschwärzt.
