/** Zentrale Personendaten — Quelle: content/about-me.md */
export const profile = {
  name: "Jonas Gebert",
  fullName: "Jonas Gebert",
  role: "Mechatroniker · Maschinenbau-Student",
  tagline:
    "Mechatroniker (IHK, Note 1,0) und Maschinenbau-Student (HAW Hamburg, 5. Semester, Ø 1,74) mit praktischer Erfahrung in Hochpräzisionsfertigung, Elektronik und Systemintegration aus der Grundlagenforschung.",
  github: "https://github.com/JonasGebert",
  linkedin: "https://www.linkedin.com/in/jonas-gebert-0a8482382/",
  location: "Hamburg",
  languages: [
    { name: "Deutsch", level: "Muttersprache" },
    {
      name: "Englisch",
      level:
        "Fließend durch die Arbeit in englischsprachiger Forschungsgruppe",
    },
  ],
  interests: ["Elektronik", "Automobil", "Motorrad", "3D-Druck"],
} as const;
