/**
 * Hobbys — Quelle: about-me.md (Interessen).
 * Jedes Hobby hat eine eigene Unterseite (/hobbys/<slug>/) mit Bildergalerie.
 * Bilder hinzufügen: Datei in public/assets/images/ legen und hier im images-Array eintragen.
 * Solange images leer ist, zeigt die Unterseite Platzhalter.
 */
export type HobbyImage = { src: string; alt: string; caption?: string; width: number; height: number };
export type Hobby = { slug: string; name: string; icon: string; note: string; images: HobbyImage[] };

export const hobbies: Hobby[] = [
  {
    slug: "elektronik",
    name: "Elektronik",
    icon: "zap",
    note: "Vom Beruf ins Hobby — Schaltungen, Löten, Basteln.",
    images: [
      {
        src: "/assets/images/PCB_TikTakToe.png",
        alt: "PCB TikTakToe-Spiel",
        caption: "PCB Tik Tak Toe",
        width: 1774,
        height: 887,
      },
      {
        src: "/assets/images/PCB_TikTakToeLAyout.png",
        alt: "PCB TikTakToe-Platinenlayout",
        caption: "PCB Tik Tak Toe Layout",
        width: 1011,
        height: 841,
      },
    ],
  },
  {
    slug: "automobil",
    name: "Automobil",
    icon: "car",
    note: "Technik, die bewegt.",
    images: [],
  },
  {
    slug: "motorrad",
    name: "Motorrad",
    icon: "bike",
    note: "Zwei Räder, volle Konzentration.",
    images: [
      {
        src: "/assets/images/Motorrad_offroad.png",
        alt: "Motorrad im Gelände",
        caption: "Offroad unterwegs",
        width: 768,
        height: 1364,
      },
      {
        src: "/assets/images/Motorrad_Feld.png",
        alt: "Motorrad auf einem Feld",
        caption: "Feldfahrt",
        width: 1194,
        height: 896,
      },
      {
        src: "/assets/images/Motorrad_Müllberg.png",
        alt: "Motorrad auf dem Müllberg",
        caption: "Müllbergfahrt",
        width: 1194,
        height: 896,
      },
    ],
  },
  {
    slug: "3d-druck",
    name: "3D-Druck",
    icon: "printer",
    note: "Vom CAD-Modell zum fertigen Teil — auch privat.",
    images: [],
  },
  {
    slug: "tennis",
    name: "Tennis",
    icon: "tennis",
    note: "Ein Spiel, das Körper und Geist fordert.",
    images: [],
  },
  {
    slug: "golf",
    name: "Golf",
    icon: "golf",
    note: "Präzision, Geduld und Konzentration — auf dem Platz statt an der Werkbank.",
    images: [
      {
        src: "/assets/images/Golf_Driving_range.jpg",
        alt: "Golf auf der Driving Range",
        caption: "Auf der Driving Range",
        width: 2336,
        height: 1080,
      },
    ],
  },
  {
    slug: "tauchen",
    name: "Tauchen",
    icon: "diving",
    note: "Tauchschein — die Ruhe und Welt unter Wasser.",
    images: [
      {
        src: "/assets/images/Arabischer_Doktorfisch.png",
        alt: "Arabischer Doktorfisch",
        caption: "Arabischer Doktorfisch",
        width: 1376,
        height: 768,
      },
      {
        src: "/assets/images/Australischer_Tüpfelrochen.png",
        alt: "Australischer Tüpfelrochen",
        caption: "Australischer Tüpfelrochen",
        width: 1376,
        height: 768,
      },
      {
        src: "/assets/images/Blaupunktrochen.png",
        alt: "Blaupunktrochen",
        caption: "Blaupunktrochen",
        width: 1376,
        height: 768,
      },
      {
        src: "/assets/images/Gestreifter_Halbschnäbler.png",
        alt: "Gestreifter Halbschnäbler",
        caption: "Gestreifter Halbschnäbler",
        width: 1376,
        height: 768,
      },
      {
        src: "/assets/images/Meeräschen.png",
        alt: "Meeräschen",
        caption: "Meeräschen",
        width: 1364,
        height: 768,
      },
      {
        src: "/assets/images/Meeräschen2.png",
        alt: "Meeräschen",
        caption: "Meeräschen",
        width: 1132,
        height: 944,
      },
      {
        src: "/assets/images/Scherenschwanz_Sergeant.png",
        alt: "Scherenschwanz-Sergeant",
        caption: "Scherenschwanz-Sergeant",
        width: 1364,
        height: 768,
      },
      {
        src: "/assets/images/Weißfleckenkugelfisch.png",
        alt: "Weißfleckenkugelfisch",
        caption: "Weißfleckenkugelfisch",
        width: 1376,
        height: 768,
      },
    ],
  },
  {
    slug: "segeln",
    name: "Segeln",
    icon: "sailing",
    note: "Katamaranschein — Wind, Wasser und volle Kontrolle über zwei Rümpfe.",
    images: [],
  },
];

/** Noch keine Projekt-Markdown-Dateien vorhanden — Platzhalter, bis content/projekte/*.md existiert. */
export const projectsComingSoon = {
  title: "Freizeitprojekte",
  message:
    "Hier entstehen Projekt-Case-Studies (GitHub-Projekte, Coding-Experimente, Side Projects). Inhalte folgen.",
  placeholderCount: 3,
} as const;

/**
 * Reise-Galerie: Bild in public/assets/images/ ablegen und hier eine Zeile ergänzen.
 * width/height = echte Pixelmaße des Bildes (verhindert Layout-Springen beim Laden).
 */
export type TravelPhoto = { src: string; alt: string; caption: string; width: number; height: number };

export const travelPhotos: TravelPhoto[] = [
  {
    src: "/assets/images/travel_egypt_2026_dive.jpg",
    alt: "Tauchgang in Ägypten, 2026",
    caption: "Ägypten 2026 — Tauchgang",
    width: 2161,
    height: 2160,
  },
  {
    src: "/assets/images/Kreta_canyon_2025.png",
    alt: "Kreta, Canyon, 2025",
    caption: "Kreta 2025 — Canyon",
    width: 768,
    height: 1364,
  },
  {
    src: "/assets/images/London_towerbridge_2023.png",
    alt: "London, Tower Bridge, 2023",
    caption: "London 2023 — Tower Bridge",
    width: 1524,
    height: 704,
  },
  {
    src: "/assets/images/Quadtour_Djerba_2023.jpg",
    alt: "Quadtour auf Djerba, 2023",
    caption: "Djerba 2023 — Quadtour",
    width: 4000,
    height: 2252,
  },
  {
    src: "/assets/images/Thailand_2019.jpg",
    alt: "Thailand, 2019",
    caption: "Thailand 2019",
    width: 4032,
    height: 1908,
  },
];

export const travelSection = {
  title: "Reisen",
  message: "Eindrücke von unterwegs — die Galerie wächst mit jeder Reise.",
} as const;
