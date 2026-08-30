/**
 * Hobbys — Quelle: about-me.md (Interessen).
 * Jedes Hobby hat eine eigene Unterseite (/hobbys/<slug>/) mit Bildergalerie.
 * Bilder hinzufügen: Datei in public/assets/images/ legen und hier im images-Array eintragen.
 * Solange images leer ist, zeigt die Unterseite Platzhalter.
 */
import type { IconName } from "@/components/Icon";

export type HobbyImage = { src: string; alt: string; caption?: string; width: number; height: number };
export type Hobby = { slug: string; name: string; icon: IconName; note: string; images: HobbyImage[] };

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
 * Reisen — Quelle für die Reisekarte (Sektion "Reisen").
 *
 * Eine Reise pro Eintrag, Fotos als Array: eine Station kann mehrere Bilder haben.
 * Neue Reise = Bild nach public/assets/images/ legen und hier einen Eintrag ergänzen.
 * lat/lon grob auf Orts- oder Regionsebene — die Karte zeigt Länder, keine Hausnummern,
 * und private Aufenthaltsorte gehören nicht auf eine öffentliche Seite.
 * width/height = echte Pixelmaße des Bildes (verhindert Layout-Springen beim Laden).
 * Reihenfolge = Aufnahmedatum absteigend (neueste Reise zuerst).
 */
export type TravelPhoto = { src: string; alt: string; caption?: string; width: number; height: number };

export type TravelTrip = {
  slug: string;
  /** Ort oder Region, wie er im Dialog steht. */
  ort: string;
  land: string;
  jahr: number;
  lat: number;
  lon: number;
  photos: TravelPhoto[];
};

export const travelTrips: TravelTrip[] = [
  {
    slug: "aegypten-2026",
    ort: "Rotes Meer",
    land: "Ägypten",
    jahr: 2026,
    lat: 27.2,
    lon: 33.8,
    photos: [
      {
        src: "/assets/images/travel_egypt_2026_dive.webp",
        alt: "Tauchgang im Roten Meer, Ägypten 2026",
        caption: "Tauchgang im Roten Meer",
        width: 1600,
        height: 1599,
      },
    ],
  },
  {
    slug: "kreta-2025",
    ort: "Kreta",
    land: "Griechenland",
    jahr: 2025,
    lat: 35.3,
    lon: 24.0,
    photos: [
      {
        src: "/assets/images/Kreta_canyon_2025.webp",
        alt: "Schlucht auf Kreta, 2025",
        caption: "Wanderung durch die Schlucht",
        width: 768,
        height: 1364,
      },
    ],
  },
  {
    slug: "danzig-2025",
    ort: "Danzig",
    land: "Polen",
    jahr: 2025,
    lat: 54.35,
    lon: 18.65,
    photos: [
      {
        src: "/assets/images/Danzig.webp",
        alt: "Danzig, 2025",
        width: 1364,
        height: 768,
      },
    ],
  },
  {
    slug: "djerba-2023",
    ort: "Djerba",
    land: "Tunesien",
    jahr: 2023,
    lat: 33.8,
    lon: 10.9,
    photos: [
      {
        src: "/assets/images/Quadtour_Djerba_2023.webp",
        alt: "Quadtour auf Djerba, 2023",
        caption: "Quadtour durch die Insel",
        width: 1600,
        height: 901,
      },
    ],
  },
  {
    slug: "london-2023",
    ort: "London",
    land: "Vereinigtes Königreich",
    jahr: 2023,
    lat: 51.5,
    lon: -0.08,
    photos: [
      {
        src: "/assets/images/London_towerbridge_2023.webp",
        alt: "Tower Bridge in London, 2023",
        caption: "Tower Bridge",
        width: 1524,
        height: 704,
      },
    ],
  },
  {
    slug: "sevilla-2022",
    ort: "Sevilla",
    land: "Spanien",
    jahr: 2022,
    lat: 37.39,
    lon: -5.99,
    photos: [
      {
        src: "/assets/images/Sevilla.webp",
        alt: "Plaza de España in Sevilla, 2022",
        caption: "Plaza de España",
        width: 1600,
        height: 721,
      },
      {
        src: "/assets/images/Sevilla_Kathedrale.webp",
        alt: "Kathedrale von Sevilla, 2022",
        caption: "Kathedrale von Sevilla",
        width: 1600,
        height: 721,
      },
    ],
  },
  {
    slug: "thailand-2019",
    ort: "Thailand",
    land: "Thailand",
    jahr: 2019,
    lat: 13.75,
    lon: 100.5,
    photos: [
      {
        src: "/assets/images/Thailand_2019.webp",
        alt: "Thailand, 2019",
        width: 757,
        height: 1600,
      },
    ],
  },
  {
    slug: "new-york-2017",
    ort: "New York",
    land: "USA",
    jahr: 2017,
    lat: 40.71,
    lon: -74.0,
    photos: [
      {
        src: "/assets/images/New_York_Nacht.webp",
        alt: "New York bei Nacht, 2017",
        caption: "Skyline bei Nacht",
        width: 1600,
        height: 1200,
      },
      {
        src: "/assets/images/New_York.webp",
        alt: "New York, 2017",
        width: 1024,
        height: 768,
      },
    ],
  },
  {
    slug: "mount-rushmore-2016",
    ort: "Mount Rushmore",
    land: "USA",
    jahr: 2016,
    lat: 43.88,
    lon: -103.46,
    photos: [
      {
        src: "/assets/images/MountRushmore.webp",
        alt: "Mount Rushmore, 2016",
        width: 896,
        height: 1195,
      },
    ],
  },
];

export const travelSection = {
  title: "Reisen",
  message:
    "Neun Stationen, acht Länder, vier Kontinente. Pin auf der Karte antippen oder einen Ort aus der Liste wählen — dann kommen die Bilder dazu.",
} as const;
