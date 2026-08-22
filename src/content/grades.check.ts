/**
 * Build-Zeit-Prüfung der publizierten Durchschnitte.
 *
 * Wird ausschließlich von next.config.ts importiert und läuft damit im Node-Prozess
 * des Builds — nichts davon landet im Client-Bundle.
 *
 * Geprüft wird: das mit CP gewichtete Mittel der `modules` je Bereich, auf zwei
 * Stellen ABGESCHNITTEN (nicht gerundet — so weist die HAW den Schnitt aus), muss
 * den Werten in gradeSummary.kern bzw. gradeSummary.richtung entsprechen.
 */
import { gradeSummary, modules, type Module } from "./grades";

/** Auf zwei Nachkommastellen abschneiden (kein Runden). */
function truncate2(value: number): number {
  return Math.trunc(value * 100) / 100;
}

/** CP-gewichtetes Mittel über alle Module eines Bereichs. */
function weightedAverage(area: Module["area"]): { grade: number; cp: number } {
  const rows = modules.filter((m) => m.area === area);
  const cp = rows.reduce((sum, m) => sum + m.cp, 0);
  const weighted = rows.reduce((sum, m) => sum + m.grade * m.cp, 0);
  return { grade: truncate2(weighted / cp), cp };
}

const checks = [
  { area: "Kernstudium" as const, published: gradeSummary.kern, key: "gradeSummary.kern" },
  { area: "Studienrichtung" as const, published: gradeSummary.richtung, key: "gradeSummary.richtung" },
];

const fehler: string[] = [];

for (const { area, published, key } of checks) {
  const { grade, cp } = weightedAverage(area);
  if (grade !== published.grade) {
    fehler.push(
      `${key}: publiziert ${published.grade.toFixed(2)}, aus modules berechnet ${grade.toFixed(2)} ` +
        `(CP-gewichtet über ${area}, abgeschnitten auf 2 Stellen)`
    );
  }
  if (cp !== published.cp) {
    fehler.push(`${key}: publizierte CP ${published.cp}, Summe aus modules ${cp}`);
  }
}

if (fehler.length > 0) {
  throw new Error(
    "Notenschnitte in src/content/grades.ts stimmen nicht mit den Modulen überein:\n  - " +
      fehler.join("\n  - ") +
      "\nEntweder die Modulliste oder gradeSummary korrigieren — grades.ts ist die einzige Quelle."
  );
}
