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
        src: "/assets/images/PCB_TikTakToe.webp",
        alt: "PCB TikTakToe-Spiel",
        caption: "PCB Tik Tak Toe",
        width: 1600,
        height: 800,
      },
      {
        src: "/assets/images/PCB_TikTakToeLAyout.webp",
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
        src: "/assets/images/Motorrad_offroad.webp",
        alt: "Motorrad im Gelände",
        caption: "Offroad unterwegs",
        width: 768,
        height: 1364,
      },
      {
        src: "/assets/images/Motorrad_Feld.webp",
        alt: "Motorrad auf einem Feld",
        caption: "Feldfahrt",
        width: 1194,
        height: 896,
      },
      {
        src: "/assets/images/Motorrad_Muellberg.webp",
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
        src: "/assets/images/Golf_Driving_range.webp",
        alt: "Golf auf der Driving Range",
        caption: "Auf der Driving Range",
        width: 1600,
        height: 740,
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
        src: "/assets/images/Arabischer_Doktorfisch.webp",
        alt: "Arabischer Doktorfisch",
        caption: "Arabischer Doktorfisch",
        width: 1376,
        height: 768,
      },
      {
        src: "/assets/images/Australischer_Tuepfelrochen.webp",
        alt: "Australischer Tüpfelrochen",
        caption: "Australischer Tüpfelrochen",
        width: 1376,
        height: 768,
      },
      {
        src: "/assets/images/Blaupunktrochen.webp",
        alt: "Blaupunktrochen",
        caption: "Blaupunktrochen",
        width: 1376,
        height: 768,
      },
      {
        src: "/assets/images/Gestreifter_Halbschnaebler.webp",
        alt: "Gestreifter Halbschnäbler",
        caption: "Gestreifter Halbschnäbler",
        width: 1376,
        height: 768,
      },
      {
        src: "/assets/images/Meeraeschen.webp",
        alt: "Meeräschen",
        caption: "Meeräschen",
        width: 1364,
        height: 768,
      },
      {
        src: "/assets/images/Meeraeschen2.webp",
        alt: "Meeräschen",
        caption: "Meeräschen",
        width: 1132,
        height: 944,
      },
      {
        src: "/assets/images/Scherenschwanz_Sergeant.webp",
        alt: "Scherenschwanz-Sergeant",
        caption: "Scherenschwanz-Sergeant",
        width: 1364,
        height: 768,
      },
      {
        src: "/assets/images/Weissfleckenkugelfisch.webp",
        alt: "Weißfleckenkugelfisch",
        caption: "Weißfleckenkugelfisch",
        width: 1376,
        height: 768,
      },
      {
        src: "/assets/images/Anemonenfisch.webp",
        alt: "Anemonenfisch",
        caption: "Anemonenfisch",
        width: 976,
        height: 1076,
      },
      {
        src: "/assets/images/Papageifisch.webp",
        alt: "Papageifisch",
        caption: "Papageifisch",
        width: 896,
        height: 1164,
      },
      {
        src: "/assets/images/Schwarztupfen-Suesslippe.webp",
        alt: "Schwarztupfen-Süßlippe",
        caption: "Schwarztupfen-Süßlippe",
        width: 896,
        height: 1164,
      },
      {
        src: "/assets/images/Sparren-Falterfisch.webp",
        alt: "Sparren-Falterfisch",
        caption: "Sparren-Falterfisch",
        width: 1364,
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

/**
 * Reise-Galerie: Bild in public/assets/images/ ablegen und hier eine Zeile ergänzen.
 * width/height = echte Pixelmaße des Bildes (verhindert Layout-Springen beim Laden).
 */
export type TravelPhoto = { src: string; alt: string; caption: string; width: number; height: number };

export const travelPhotos: TravelPhoto[] = [
  {
    src: "/assets/images/travel_egypt_2026_dive.webp",
    alt: "Tauchgang in Ägypten, 2026",
    caption: "Ägypten 2026 — Tauchgang",
    width: 1600,
    height: 1599,
  },
  {
    src: "/assets/images/Kreta_canyon_2025.webp",
    alt: "Kreta, Canyon, 2025",
    caption: "Kreta 2025 — Canyon",
    width: 768,
    height: 1364,
  },
  {
    src: "/assets/images/London_towerbridge_2023.webp",
    alt: "London, Tower Bridge, 2023",
    caption: "London 2023 — Tower Bridge",
    width: 1524,
    height: 704,
  },
  {
    src: "/assets/images/Quadtour_Djerba_2023.webp",
    alt: "Quadtour auf Djerba, 2023",
    caption: "Djerba 2023 — Quadtour",
    width: 1600,
    height: 901,
  },
  {
    src: "/assets/images/Thailand_2019.webp",
    alt: "Thailand, 2019",
    caption: "Thailand 2019",
    width: 757,
    height: 1600,
  },
  {
    src: "/assets/images/Danzig.webp",
    alt: "Danzig, 2025",
    caption: "Danzig 2025",
    width: 1364,
    height: 768,
  },
  {
    src: "/assets/images/MountRushmore.webp",
    alt: "Mount Rushmore, 2016",
    caption: "Mount Rushmore 2016",
    width: 896,
    height: 1195,
  },
  {
    src: "/assets/images/Sevilla_Kathedrale.webp",
    alt: "Sevilla, Kathedrale, 2022",
    caption: "Sevilla 2022 — Kathedrale",
    width: 1600,
    height: 721,
  },
  {
    src: "/assets/images/Sevilla.webp",
    alt: "Sevilla, 2022",
    caption: "Sevilla 2022",
    width: 1600,
    height: 721,
  },
  {
    src: "/assets/images/New_York_Nacht.webp",
    alt: "New York bei Nacht, 2017",
    caption: "New York 2017 — bei Nacht",
    width: 1600,
    height: 1200,
  },
];

export const travelSection = {
  title: "Reisen",
  message: "Eindrücke von unterwegs — die Galerie wächst mit jeder Reise.",
} as const;
