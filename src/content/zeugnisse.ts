/** Zeugnis-Metadaten — verknüpft Markdown-Detailseiten mit PDF-Downloads */
export type Zeugnis = {
  slug: string;
  title: string;
  issuer: string;
  date: string;
  category: "Schule" | "Ausbildung" | "Beruf" | "Studium" | "Zertifikat";
  highlight: string;
  pdf: string;
};

export const zeugnisse: Zeugnis[] = [
  {
    slug: "pruefungszeugnis-mechatroniker",
    title: "IHK-Prüfungszeugnis Mechatroniker",
    issuer: "Handelskammer Hamburg",
    date: "29.06.2023",
    category: "Ausbildung",
    highlight: "Gesamtergebnis: sehr gut (94 Punkte)",
    pdf: "/documents/Pruefungszeugnis_Mechatroniker.pdf",
  },
  {
    slug: "berufsschulzeugnis-bs19",
    title: "Berufsschul-Abschlusszeugnis",
    issuer: "Berufliche Schule Farmsen Medien Technik",
    date: "29.06.2023",
    category: "Ausbildung",
    highlight: "Durchschnittsnote 1,0 · 0 Fehlstunden",
    pdf: "/documents/Berufsschulzeugnis_JG_BS19.pdf",
  },
  {
    slug: "ausbildungszeugnis-desy",
    title: "Ausbildungszeugnis DESY",
    issuer: "Deutsches Elektronen-Synchrotron DESY",
    date: "29.06.2023",
    category: "Ausbildung",
    highlight: "„stets zu unserer vollsten Zufriedenheit“",
    pdf: "/documents/Ausbildungszeugnis_JG_DESY.pdf",
  },
  {
    slug: "arbeitszeugnis-fsds",
    title: "Arbeitszeugnis DESY FS-DS",
    issuer: "Deutsches Elektronen-Synchrotron DESY",
    date: "31.05.2024",
    category: "Beruf",
    highlight: "„ausnahmslos und in jeder Beziehung unsere vollste Anerkennung“",
    pdf: "/documents/Arbeitszeugnis_JG_FSDS.pdf",
  },
  {
    slug: "notenspiegel-haw",
    title: "Leistungsübersicht HAW Hamburg",
    issuer: "HAW Hamburg",
    date: "18.08.2026",
    category: "Studium",
    highlight: "Gesamtkonto 1,69 · 159 von 210 CP",
    pdf: "/documents/Notenspiegel_HAW.pdf",
  },
  {
    slug: "notenkonto-haw",
    title: "Notenkonto HAW Hamburg",
    issuer: "HAW Hamburg",
    date: "18.08.2026",
    category: "Studium",
    highlight: "Alle Prüfungen im Erstversuch bestanden",
    pdf: "/documents/Notenkonto_HAW.pdf",
  },
  {
    slug: "abitur-wbs",
    title: "Zeugnis der allgemeinen Hochschulreife",
    issuer: "Willy-Brandt-Schule Norderstedt",
    date: "15.06.2020",
    category: "Schule",
    highlight: "Durchschnittsnote 2,3 · 596 Punkte",
    pdf: "/documents/Abiturzeugnis_WBS.pdf",
  },
];

/** Zertifikate & Bescheinigungen — eigene Sektion unterhalb der Zeugnisse */
export const zertifikate: Zeugnis[] = [
  {
    slug: "zert-elbcampus-inventor",
    title: "Autodesk Inventor für Azubis — Praxisseminar",
    issuer: "Elbcampus, Kompetenzzentrum der Handwerkskammer Hamburg",
    date: "06.08.2021",
    category: "Zertifikat",
    highlight: "40 Unterrichtsstunden: 3D-Bauteilkonstruktion, Baugruppen, Zeichnungsableitung",
    pdf: "/documents/Elbcampus_Inventor_Praxisseminar.pdf",
  },
  {
    slug: "zert-desy-schweissen",
    title: "Lehrgang „Ausbildung Wärmebehandlung“ (Schweißen)",
    issuer: "DESY, Schweißwerkstatt ZM5",
    date: "20.08.2021",
    category: "Zertifikat",
    highlight: "Theorie & Praxis: Lichtbogenhand-, MAG-, WIG-, Autogenschweißen, Flammhartlöten",
    pdf: "/documents/DESY_Schweissen_Waermebehandlung.pdf",
  },
  {
    slug: "zert-ifb-jav2",
    title: "Seminar JAV Teil II",
    issuer: "ifb Institut zur Fortbildung von Betriebsräten",
    date: "15.09.2023",
    category: "Zertifikat",
    highlight: "Rechte & Pflichten Auszubildender, Ausbildungsqualität, Berufsausbildungsrecht",
    pdf: "/documents/IFB_JAV2_Zertifikat.pdf",
  },
];

export function getZeugnis(slug: string): Zeugnis | undefined {
  return [...zeugnisse, ...zertifikate].find((z) => z.slug === slug);
}
