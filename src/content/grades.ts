/**
 * Uni-Noten — SINGLE SOURCE OF TRUTH für alle Zahlen rund ums Studium.
 * Quelle: content/zeugnisse/notenspiegel-haw.md
 *
 * WICHTIG: Bei neuen Noten NUR diese Datei anfassen (studium.stand,
 * studium.semester, gradeSummary, modules). Alles andere — Hero, About,
 * Timeline, Profil-Tagline, Zeugnis-Highlights — leitet sich hieraus ab.
 */
export type Module = { nr: string; name: string; grade: number; cp: number; area: "Kernstudium" | "Studienrichtung" };

/** Studienstand — Semester und Datumsstand des Notenspiegels. */
export const studium = {
  hochschule: "HAW Hamburg",
  studiengang: "Maschinenbau und Produktion",
  schwerpunkt: "Digitale Produktion",
  semester: 6,
  /** Ausstellungsdatum des zugrunde liegenden Notenspiegels (dd.mm.yyyy). */
  stand: "18.08.2026",
} as const;

export const gradeSummary = {
  gesamt: { label: "Gesamtkonto", grade: 1.69, cp: 159, of: 210 },
  kern: { label: "Kernstudium", grade: 1.96, cp: 102 },
  richtung: { label: "Studienrichtung Digital Engineering and Mobility", grade: 1.42, cp: 35 },
} as const;

export const modules: Module[] = [
  { nr: "M-20010", name: "Mathematik 1", grade: 1.0, cp: 8, area: "Kernstudium" },
  { nr: "M-20020", name: "Mathematik 2", grade: 0.7, cp: 5, area: "Kernstudium" },
  { nr: "M-20030", name: "Technische Mechanik 1", grade: 1.7, cp: 4, area: "Kernstudium" },
  { nr: "M-20040", name: "Technische Mechanik 2", grade: 1.0, cp: 5, area: "Kernstudium" },
  { nr: "M-20050", name: "Technische Mechanik 3", grade: 2.3, cp: 5, area: "Kernstudium" },
  { nr: "M-20060", name: "Industriebetriebslehre", grade: 1.7, cp: 3, area: "Kernstudium" },
  { nr: "M-20070", name: "Kostenrechnung", grade: 2.0, cp: 3, area: "Kernstudium" },
  { nr: "M-20080", name: "Experimentalphysik", grade: 4.0, cp: 6, area: "Kernstudium" },
  { nr: "M-20090", name: "Maschinenzeichnen und CAD", grade: 1.7, cp: 6, area: "Kernstudium" },
  { nr: "M-20100", name: "Konstruktion A", grade: 3.0, cp: 6, area: "Kernstudium" },
  { nr: "M-20110", name: "Konstruktion B", grade: 1.7, cp: 6, area: "Kernstudium" },
  { nr: "M-20120", name: "Werkstoffkunde", grade: 2.7, cp: 7, area: "Kernstudium" },
  { nr: "M-20140", name: "Fertigungstechnik", grade: 1.0, cp: 6, area: "Kernstudium" },
  { nr: "M-20150", name: "Angewandte Informatik", grade: 1.0, cp: 6, area: "Kernstudium" },
  { nr: "M-20160", name: "Technische Thermodynamik 1", grade: 3.3, cp: 5, area: "Kernstudium" },
  { nr: "M-20170", name: "Strömungslehre 1", grade: 3.3, cp: 3, area: "Kernstudium" },
  { nr: "M-20180", name: "Grundlagen Elektrotechnik", grade: 3.7, cp: 4, area: "Kernstudium" },
  { nr: "M-20190", name: "Elektrische Antriebstechnik", grade: 2.3, cp: 5, area: "Kernstudium" },
  { nr: "M-20210", name: "Mess-, Steuer- und Regelungstechnik", grade: 1.0, cp: 9, area: "Kernstudium" },
  { nr: "M-20310", name: "Methodische Produktentwicklung", grade: 1.0, cp: 5, area: "Studienrichtung" },
  { nr: "M-20320", name: "Softwareanwendungen im Maschinenbau", grade: 1.0, cp: 5, area: "Studienrichtung" },
  { nr: "M-20340", name: "Autonome mobile Systeme", grade: 1.3, cp: 5, area: "Studienrichtung" },
  { nr: "M-20400", name: "Urbane Mobilität und Elektromobilität", grade: 1.3, cp: 5, area: "Studienrichtung" },
  { nr: "M-20410", name: "Fügetechnik", grade: 2.0, cp: 5, area: "Studienrichtung" },
  { nr: "M-20440", name: "Roboterbasierte Fertigung", grade: 1.7, cp: 5, area: "Studienrichtung" },
  { nr: "M-21030", name: "Produktionsplanung und -steuerung", grade: 1.7, cp: 5, area: "Studienrichtung" },
];

/** IHK-Abschlussprüfung Mechatroniker — Quelle: pruefungszeugnis-mechatroniker.md */
export const ihkResults = {
  gesamt: { label: "Gesamtergebnis", note: "sehr gut", punkte: 94 },
  teile: [
    { label: "Arbeiten an einem mechatronischen Teilsystem (Teil 1)", note: "gut", punkte: 91 },
    { label: "Arbeitsauftrag / Arbeitsaufgabe (Teil 2)", note: "sehr gut", punkte: 100 },
    { label: "Arbeitsplanung (Teil 2)", note: "gut", punkte: 88 },
    { label: "Funktionsanalyse (Teil 2)", note: "gut", punkte: 90 },
    { label: "Wirtschafts- und Sozialkunde (Teil 2)", note: "sehr gut", punkte: 96 },
  ],
} as const;
