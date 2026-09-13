/** Formatierung deutscher Notenwerte — eine Stelle für Komma statt Punkt. */
export function formatGrade(grade: number, digits: 1 | 2 = 2): string {
  return grade.toFixed(digits).replace(".", ",");
}

const MONATE = [
  "Januar", "Februar", "März", "April", "Mai", "Juni",
  "Juli", "August", "September", "Oktober", "November", "Dezember",
] as const;

/** "18.08.2026" -> "August 2026". Eine Stelle für Monat+Jahr aus dd.mm.yyyy. */
export function formatMonthYear(ddmmyyyy: string): string {
  const [, mm, yyyy] = ddmmyyyy.split(".");
  return `${MONATE[Number(mm) - 1]} ${yyyy}`;
}

/** Date -> "September 2026". Für Angaben, die aus dem Build-Zeitpunkt kommen. */
export function formatMonthYearFromDate(date: Date): string {
  return `${MONATE[date.getMonth()]} ${date.getFullYear()}`;
}

/**
 * Besuchsjahre einer Reisestation für die Anzeige: absteigend, mit Mittelpunkt getrennt.
 * "2024 · 2022 · 2020". Für aria-Labels stattdessen `jahre.join(", ")` verwenden —
 * Screenreader lesen den Mittelpunkt sonst als Wort vor.
 */
export function formatJahre(jahre: readonly number[]): string {
  return [...jahre].sort((a, b) => b - a).join(" · ");
}
