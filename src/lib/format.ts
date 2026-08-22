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
