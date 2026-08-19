/** Formatierung deutscher Notenwerte — eine Stelle für Komma statt Punkt. */
export function formatGrade(grade: number, digits: 1 | 2 = 2): string {
  return grade.toFixed(digits).replace(".", ",");
}
