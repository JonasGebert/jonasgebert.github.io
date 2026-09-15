/**
 * Kontaktadresse des Verantwortlichen für die Datenschutzerklärung
 * (Art. 13 Abs. 1 lit. a DSGVO). Muss eine Adresse sein, unter der du
 * unmittelbar erreichbar bist — einzige Stelle dafür im Projekt.
 *
 * Solange hier der Platzhalter steht, bricht der Build ab (siehe legal.check.ts).
 *
 * Bewusst eine eigene Datei ohne jeden Import: `legal.check.ts` läuft aus
 * next.config.ts heraus, und dort löst der Config-Transpiler den Pfad-Alias `@/`
 * nicht auf — ein Import von profile.ts (das `@/lib/format` zieht) bricht den Build.
 */
export const kontaktEmail = "jgebert0203@gmail.com";
