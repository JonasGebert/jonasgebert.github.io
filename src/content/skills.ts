/**
 * Technische Kenntnisse — Quelle: about-me.md (Tabelle „Technische Kenntnisse“).
 * `level` ist eine visuelle Einordnung (0–100) mit textlichem Beleg statt erfundener Prozentwerte.
 */
import type { IconName } from "@/components/Icon";

export type Skill = { name: string; level: number; evidence: string };
export type SkillGroup = { title: string; icon: IconName; skills: Skill[] };

export const skillGroups: SkillGroup[] = [
  {
    title: "Fertigung",
    icon: "wrench",
    skills: [
      { name: "Feinmechanik / Hochpräzisionsfertigung", level: 95, evidence: "4 Jahre DESY: Detektorbau" },
      { name: "Elektronik (Löten, Prüfen)", level: 90, evidence: "SMD-/THT-Löten unter dem Mikroskop, VDE-Prüfungen" },
      { name: "3D-Druck", level: 85, evidence: "Prototypen & Serienteile für Detektorsysteme, privates Hobby" },
    ],
  },
  {
    title: "Programmierung",
    icon: "code",
    skills: [
      { name: "MATLAB", level: 75, evidence: "Angewandte Informatik: Note 1,0" },
      { name: "Python", level: 70, evidence: "Softwareanwendungen im Maschinenbau: Note 1,0" },
    ],
  },
  {
    title: "SPS & Automatisierung",
    icon: "cpu",
    skills: [
      { name: "Siemens SPS", level: 70, evidence: "Aufbau & Programmierung in der Ausbildung" },
      { name: "Phoenix Contact", level: 65, evidence: "Steuerungsbau im Rahmen einer Studienarbeit" },
    ],
  },
  {
    title: "CAD & Konstruktion",
    icon: "box",
    skills: [
      { name: "Autodesk Inventor", level: 80, evidence: "Kühlungs-Prototypen & HV-Einhausungen bei DESY entwickelt" },
      { name: "PTC Creo", level: 70, evidence: "Maschinenzeichnen und CAD: Note 1,7" },
    ],
  },
  {
    title: "Office & Methoden",
    icon: "file",
    skills: [
      { name: "Word / Excel / PowerPoint", level: 80, evidence: "Studium & Berufsalltag" },
    ],
  },
];

/**
 * Soft Skills — jeder Punkt ist durch ein Zeugnis-Zitat oder einen dokumentierten Fakt belegt.
 * Quellen: Arbeitszeugnis FS-DS (2024), Ausbildungszeugnis DESY (2023), Berufsschulzeugnis (2023).
 */
export type SoftSkill = { name: string; icon: IconName; evidence: string; source: string };

export const softSkills: SoftSkill[] = [
  {
    name: "Analytisches Denkvermögen",
    icon: "chart",
    evidence: "„Besonders bemerkenswert sind durchweg seine ausgesprochen schnelle Auffassungsgabe und sein analytisches Denkvermögen.“",
    source: "Arbeitszeugnis DESY FS-DS",
  },
  {
    name: "Lösungsorientiertes Arbeiten",
    icon: "wrench",
    evidence: "„Auch für schwierigste Problemstellungen fand er bereits nach kurzer Ausbildungszeit sehr gute Lösungen.“",
    source: "Ausbildungszeugnis DESY",
  },
  {
    name: "Eigeninitiative",
    icon: "zap",
    evidence: "„Er zeigte ein sehr hohes Maß an Eigeninitiative und Eigenmotivation … und ging oft über das hinaus, was erwartet wurde.“",
    source: "Arbeitszeugnis DESY FS-DS",
  },
  {
    name: "Zuverlässigkeit & Sorgfalt",
    icon: "award",
    evidence: "„Auf seine absolut zuverlässige, sehr umsichtige und äußerst gewissenhafte Arbeitsweise war auch in schwierigsten Situationen jederzeit Verlass.“ — dazu: 0 Fehlstunden in drei Jahren Berufsschule.",
    source: "Arbeitszeugnis DESY FS-DS · Berufsschulzeugnis",
  },
  {
    name: "Kommunikationsfähigkeit",
    icon: "user",
    evidence: "Als Mathematiktutor erkläre ich Erstsemestern komplexe Inhalte unter Zeitdruck — verständlich zu sein ist dabei die halbe Arbeit.",
    source: "Nebentätigkeit HAW Hamburg",
  },
  {
    name: "Teamarbeit im internationalen Umfeld",
    icon: "globe",
    evidence: "Mehrjährige Mitarbeit in einer englischsprachigen Forschungsgruppe; „er integrierte sich sehr gut in das Team.“",
    source: "Arbeitszeugnis DESY FS-DS",
  },
];
