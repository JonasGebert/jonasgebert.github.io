/**
 * Zentrale Personendaten — Quelle: ../../about-me.md (Root des AboutMe-Ordners).
 * Alle Studien-Zahlen kommen aus content/grades.ts, nicht hier hartkodieren.
 */
import { gradeSummary, studium } from "./grades";
import { kontaktEmail } from "./kontakt";
import { formatGrade } from "@/lib/format";

export const profile = {
  name: "Jonas Gebert",
  fullName: "Jonas Gebert",
  role: "Mechatroniker · Maschinenbau-Student",
  tagline: `Mechatroniker (IHK, Note 1,0) und Maschinenbau-Student (${studium.hochschule}, ${studium.semester}. Semester, Ø ${formatGrade(gradeSummary.gesamt.grade)}) mit praktischer Erfahrung in Hochpräzisionsfertigung, Elektronik und Systemintegration aus der Grundlagenforschung.`,
  github: "https://github.com/JonasGebert",
  linkedin: "https://www.linkedin.com/in/jonas-gebert-0a8482382/",
  location: "Hamburg",
  /** Kontaktadresse für die Datenschutzerklärung — gepflegt in ./kontakt.ts. */
  kontaktEmail,
  languages: [
    { name: "Deutsch", level: "Muttersprache" },
    {
      name: "Englisch",
      level:
        "Fließend — unter anderem durch die Arbeit in einer englischsprachigen Forschungsgruppe",
    },
  ],
  interests: ["Elektronik", "Automobil", "Motorrad", "3D-Druck"],
} as const;
