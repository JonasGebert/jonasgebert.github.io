/**
 * Build-Zeit-Prüfung der Pflichtangaben.
 *
 * Wird ausschließlich von next.config.ts importiert und läuft damit im
 * Node-Prozess des Builds — nichts davon landet im Client-Bundle.
 *
 * Zweck: Die Datenschutzerklärung nennt nach Art. 13 Abs. 1 lit. a DSGVO die
 * Kontaktdaten des Verantwortlichen. Eine veröffentlichte Seite mit
 * Platzhalter-Adresse ist schlechter als gar keine Erklärung — deshalb bricht der
 * Build ab, solange die Adresse nicht gesetzt ist.
 *
 * Importiert bewusst `./kontakt` und nicht `./profile`: der Config-Transpiler von
 * Next löst den Pfad-Alias `@/` hier nicht auf, und profile.ts importiert `@/lib/format`.
 */
import { kontaktEmail } from "./kontakt";

// Bewusst als `string` typisiert und nicht als Literal: sonst hält TypeScript den
// Vergleich für "hat keine Überschneidung", sobald die echte Adresse eingetragen ist.
const PLATZHALTER: string = "BITTE-EINTRAGEN@example.com";
const EMAIL_MUSTER = /^[^@\s]+@[^@\s]+\.[^@\s]{2,}$/;

const email: string = kontaktEmail;

if (email === PLATZHALTER) {
  throw new Error(
    "src/content/kontakt.ts steht noch auf der Platzhalter-Adresse.\n" +
      "Die Datenschutzerklärung unter /datenschutz/ muss eine Adresse nennen, unter der du\n" +
      "unmittelbar erreichbar bist (Art. 13 Abs. 1 lit. a DSGVO).\n" +
      "Trage sie in src/content/kontakt.ts ein — das ist die einzige Stelle dafür."
  );
}

if (!EMAIL_MUSTER.test(email)) {
  throw new Error(`kontaktEmail ist keine gültige E-Mail-Adresse: "${email}"`);
}
