/**
 * Lebenslauf-Stationen — Quellen: ../../about-me.md + Zeugnis-Markdown-Dateien.
 * Studien-Zahlen (Schnitt, CP, Semester, Modulnoten) kommen aus grades.ts.
 */
import { gradeSummary, modules, studium } from "./grades";
import { formatGrade } from "@/lib/format";

/** Module mit Bestnote (≤ 1,0), aufsteigend — für den Bestleistungen-Bullet. */
const bestleistungen = modules
  .filter((m) => m.grade <= 1.0)
  .sort((a, b) => a.grade - b.grade)
  .map((m) => `${m.name} (${formatGrade(m.grade, 1)})`)
  .join(", ");

/** Module der Studienrichtung ohne die bereits oben genannten Bestnoten. */
const studienrichtungsmodule = modules
  .filter((m) => m.area === "Studienrichtung" && m.grade > 1.0)
  .sort((a, b) => a.grade - b.grade)
  .map((m) => `${m.name} (${formatGrade(m.grade, 1)})`)
  .join(", ");

export type TimelineItem = {
  id: string;
  period: string;
  title: string;
  org: string;
  kind: "Schule" | "Ausbildung" | "Beruf" | "Studium" | "Nebentätigkeit";
  highlight?: string;
  description: string;
  bullets?: string[];
  zeugnisSlugs?: string[];
};

export const timeline: TimelineItem[] = [
  {
    id: "abitur",
    period: "bis Jun. 2020",
    title: "Allgemeine Hochschulreife (Abitur)",
    org: "Willy-Brandt-Schule, Norderstedt",
    kind: "Schule",
    highlight: "Note 2,3",
    description:
      "Abschluss mit 596 Punkten. Prüfungsfächer: Deutsch (eA), Englisch (eA), Wirtschaft/Politik, Chemie. Englisch-Niveau B2/C1.",
    zeugnisSlugs: ["abitur-wbs"],
  },
  {
    id: "ausbildung-desy",
    period: "Sep. 2020 – Jun. 2023",
    title: "Ausbildung zum Mechatroniker",
    org: "Deutsches Elektronen-Synchrotron DESY, Hamburg",
    kind: "Ausbildung",
    highlight: "IHK-Abschluss: sehr gut (94 Punkte) · Berufsschule: 1,0",
    description:
      "Ausbildung in einem der weltweit führenden Forschungszentren — von der elektronischen und mechanischen Grundausbildung bis zum Einsatz in den Forschungsabteilungen ZM5, MEA3 und FS-DS.",
    bullets: [
      "Mechanik: Fräsen, Drehen, Schweißen (WIG/MAG/MIG), Feinmechanik",
      "Elektronik: SMD-/THT-Löten, Leiterplattenfertigung, Prüfen nach VDE",
      "SPS-Steuerungen aufbauen und programmieren",
      "Detektorkomponenten für AGIPD, PERCIVAL und TEMPUS gefertigt und vermessen",
      "Berufsschule mit Durchschnitt 1,0 und 0 Fehlstunden abgeschlossen",
      "Stellvertretender Vorsitzender der Jugend- und Auszubildendenvertretung (JAV) bei DESY",
    ],
    zeugnisSlugs: [
      "pruefungszeugnis-mechatroniker",
      "ausbildungszeugnis-desy",
      "berufsschulzeugnis-bs19",
      "zert-ifb-jav2",
    ],
  },
  {
    id: "fsds",
    period: "Jul. 2023 – Mai 2024",
    title: "Mechatroniker in der Detektorentwicklung",
    org: "DESY — Gruppe FS-DS, Hamburg",
    kind: "Beruf",
    highlight: "Arbeitszeugnis: „vollste Anerkennung“",
    description:
      "Die Gruppe FS-DS entwickelt Röntgen-Detektoren für Photonenstrahlungsquellen bei DESY und dem European XFEL — von der ersten Idee bis zur Inbetriebnahme fertiger Experimentierstationen.",
    bullets: [
      "Bearbeitung von Hochpräzisionsteilen",
      "3D-Druck von Komponenten",
      "Löten fortschrittlicher elektronischer Platinen",
      "Testen von Baugruppen und Montage kompletter Detektorsysteme",
      "Internationale, englischsprachige Arbeitsumgebung",
      "Abschluss auf eigenen Wunsch (Mai 2024)",
    ],
    zeugnisSlugs: ["arbeitszeugnis-fsds"],
  },
  {
    id: "haw",
    period: "seit Apr. 2024",
    title: "B.Sc. Maschinenbau und Produktion",
    org: "HAW Hamburg, Berliner Tor",
    kind: "Studium",
    highlight: `Aktueller Schnitt: ${formatGrade(gradeSummary.gesamt.grade)} · ${studium.semester}. Semester`,
    description: `Schwerpunkt: ${studium.schwerpunkt}, ${gradeSummary.richtung.label} (Schnitt ${formatGrade(gradeSummary.richtung.grade)}). ${gradeSummary.gesamt.cp} von ${gradeSummary.gesamt.of} CP abgeschlossen, Hauptpraktikum absolviert.`,
    bullets: [
      `Bestleistungen: ${bestleistungen}`,
      `Studienrichtung: ${studienrichtungsmodule}`,
    ],
    zeugnisSlugs: ["notenspiegel-haw", "notenkonto-haw"],
  },
  {
    id: "tutor",
    period: "parallel zum Studium",
    title: "Mathematiktutor für Erstsemester",
    org: "HAW Hamburg (Maschinenbau)",
    kind: "Nebentätigkeit",
    description:
      "Seit dem 2. Semester Tutor für Mathematik 1 und verantwortlich für den Vorkurs Mathematik für Erstsemester.",
  },
];
