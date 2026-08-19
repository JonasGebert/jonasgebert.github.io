# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Projekt

Persönliche Portfolio-Website von Jonas Gebert (https://jonasgebert.github.io). Next.js 15 (App Router) · React 19 · TypeScript · Tailwind CSS v4. Statischer Export, deployed via GitHub Actions bei jedem Push auf `main`. Sprache der Inhalte, Commits und Code-Kommentare: **Deutsch**.

## Befehle

```bash
npm install
npm run dev      # Dev-Server auf http://localhost:3000
npm run build    # Produktions-Build → statischer Export nach out/
```

Es gibt keine Tests und keinen Lint-Task. `npm run build` ist die einzige Verifikation — vor jedem Commit ausführen; TypeScript-Fehler und fehlende Markdown-Dateien brechen den Build.

## Harte Constraints (statischer Export)

`next.config.ts` setzt `output: "export"`, `trailingSlash: true`, `images: { unoptimized: true }`. Daraus folgt:

- Keine API-Routes, keine Server Actions, kein SSR/ISR, kein Middleware.
- Dynamische Routen brauchen `generateStaticParams()` und haben `dynamicParams = false` — ein Slug ohne zugehörige Datei ist ein Build-Fehler, kein 404 zur Laufzeit.
- `next/image` optimiert nicht; Bildgrößen (`width`/`height`) werden manuell in den Content-Modulen gepflegt.

## Architektur: Zwei Content-Ebenen

Der gesamte Inhalt der Seite ist von den Komponenten getrennt. Es gibt zwei Quellen, die zusammenspielen:

1. **`src/content/*.ts`** — typisierte Datenmodule (profile, timeline, grades, skills, zeugnisse, extras). Sie steuern, WAS auf der Hauptseite erscheint. Komponenten importieren diese Module und rendern sie; für reine Inhaltsänderungen müssen Komponenten fast nie angefasst werden.
2. **`content/*.md`** — Markdown-Langtexte (Ziel, zeugnisse/*.md). Werden zur **Build-Zeit** über `src/lib/markdown.ts` (`marked`) zu HTML gerendert und via `dangerouslySetInnerHTML` mit der Klasse `prose-doc` ausgegeben.

### Studien-Zahlen: `src/content/grades.ts` ist die einzige Quelle

Schnitt, CP, Semester, Datumsstand und Modulnoten stehen **ausschließlich** in `src/content/grades.ts` (`studium` + `gradeSummary` + `modules`). Alles andere leitet sich per Import daraus ab:

- `profile.ts` (Tagline), `timeline.ts` (HAW-Station inkl. Bestleistungen-Bullets), `zeugnisse.ts` (HAW-Highlights + Datum)
- `Hero.tsx`, `About.tsx`, `Grades.tsx`

Deutsche Notenformatierung läuft über `formatGrade()` aus `src/lib/format.ts` — nie `.toFixed().replace(".", ",")` neu schreiben.

**Neue Noten eintragen = nur `grades.ts` ändern.** Wird eine Zahl irgendwo als Literal in Prosa geschrieben, läuft sie beim nächsten Notenspiegel auseinander — genau das ist schon einmal passiert (Hero und About standen monatelang auf einem alten Schnitt).

### Zeugnis-System (Dreiklang — muss synchron bleiben)

Ein Zeugnis besteht aus drei verknüpften Teilen; wer eins hinzufügt, muss alle drei anlegen:

1. Eintrag in `src/content/zeugnisse.ts` (`zeugnisse`- oder `zertifikate`-Array): slug, title, issuer, date, category, highlight, pdf-Pfad
2. `content/zeugnisse/<slug>.md` — transkribierter Zeugnistext (Slug muss exakt dem Eintrag entsprechen, sonst Build-Fehler durch `dynamicParams = false`)
3. `public/documents/<name>.pdf` — die herunterladbare PDF

`listZeugnisSlugs()` in `src/lib/markdown.ts` generiert die statischen Routen aus dem Ordnerinhalt von `content/zeugnisse/`.

### Hobby-System

`src/content/extras.ts` definiert Hobbys inkl. `images`-Array. Jedes Hobby bekommt automatisch eine Unterseite `/hobbys/<slug>/`. Leeres `images`-Array → Platzhalter. Bilder: Datei nach `public/assets/images/`, dann im Array mit `width`/`height` eintragen.

### Hauptseite

`src/app/page.tsx` komponiert die Single-Page aus Sektions-Komponenten (Hero, About, Timeline, Grades, Skills, Certificates, …). Die Sidebar navigiert über Anker-IDs der Sektionen — neue Sektion heißt: Komponente + Anker-ID + Sidebar-Eintrag.

## Styling-Konventionen

- Design-Tokens als CSS-Variablen in `src/app/globals.css` (`--color-base`, `--color-accent` etc.) — Farben dort ändern, nicht hart in Komponenten codieren.
- Wiederkehrende Utility-Klassen ebenfalls in `globals.css`: `.card`, `.glass`, `.accent-text`, `.accent-bg`, `.reveal`, `.fade-up*`, `.prose-doc`. Diese verwenden statt neue Tailwind-Kombinationen zu erfinden, wenn ein bestehendes Muster passt.
- Nur Dark-Mode; es gibt keinen Light-Mode-Pfad.
- Animationen bewusst über CSS + IntersectionObserver (`Reveal`-Komponente) — **keine Animations-Library hinzufügen** (Bundle-Größe ist eine bewusste Design-Entscheidung).
- Tailwind v4 via `@tailwindcss/postcss` — es gibt keine `tailwind.config.js`; Theme-Anpassungen laufen über `@theme` in `globals.css`.

## Datenschutz (nicht verhandelbar)

Personenbezogene Daten — Adresse, Geburtsdatum, Matrikelnummer, private E-Mail-Adresse, Unterschrift — dürfen **nicht** in Inhalte, Quellcode oder PDFs dieses Repos gelangen. Das Repo ist öffentlich. Neue PDFs vor dem Ablegen in `public/documents/` auf solche Daten prüfen und schwärzen. Kontakt läuft ausschließlich über die dafür vorgesehenen öffentlichen Kanäle (GitHub, LinkedIn).

## Datenquelle

Die inhaltliche Quelle der Website ist der übergeordnete Ordner `AboutMe/` (lokal, nicht Teil des Repos): `about-me.md` ist der Master-Lebenslauf, die Original-PDFs liegen in den Zeugnis-Ordnern. Bei Widersprüchen zwischen Website-Content und `about-me.md` gilt `about-me.md`.

Im Repo liegt **bewusst keine Kopie** von `about-me.md`. Es gab eine (`content/about-me.md`), sie wurde von keiner Komponente importiert und war veraltet — Kopien nicht wieder anlegen.
