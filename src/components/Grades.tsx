import { gradeSummary, ihkResults, modules, studium } from "@/content/grades";
import { formatGrade } from "@/lib/format";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";

/** Note (0,7–5,0) → Balkenbreite: 0,7 = 100 %, 4,0 = ~9 % */
function gradeToWidth(grade: number): string {
  const pct = Math.max(0, Math.min(100, ((4.0 - grade) / 3.3) * 91 + 9));
  return `${pct.toFixed(0)}%`;
}

function gradeColor(grade: number): string {
  if (grade <= 1.5) return "text-cyan-300";
  if (grade <= 2.5) return "text-blue-300";
  if (grade <= 3.5) return "text-slate-300";
  return "text-slate-400";
}

export function Grades() {
  return (
    <section id="noten" className="mx-auto max-w-6xl px-6 py-24">
      <SectionHeading
        kicker="Noten"
        title="Leistungen im Detail"
        intro={`Alle Modulnoten des Studiums (${studium.hochschule}, Stand ${studium.stand}) und das IHK-Prüfungsergebnis — vollständig und im Erstversuch.`}
      />

      {/* Summary Cards */}
      <div className="mb-12 grid gap-4 sm:grid-cols-3">
        {[gradeSummary.gesamt, gradeSummary.kern, gradeSummary.richtung].map((s) => (
          <Reveal key={s.label} className="card p-6 text-center">
            <p className="text-4xl font-bold accent-text">{formatGrade(s.grade)}</p>
            <p className="mt-2 text-sm font-medium text-slate-300">{s.label}</p>
            <p className="mt-1 text-xs text-slate-500">
              {"of" in s ? `${s.cp} von ${(s as { of: number }).of} CP` : `${s.cp} CP`}
            </p>
          </Reveal>
        ))}
      </div>

      {/* Modulnoten */}
      <div className="grid gap-10 lg:grid-cols-2">
        {(["Kernstudium", "Studienrichtung"] as const).map((area) => (
          <Reveal key={area}>
            <h3 className="mb-5 text-lg font-semibold text-slate-100">
              {area === "Studienrichtung" ? "Studienrichtung Digital Engineering and Mobility" : area}
            </h3>
            <ul className="space-y-3.5">
              {modules
                .filter((m) => m.area === area)
                .map((m) => (
                  <li key={m.nr}>
                    <div className="mb-1 flex items-baseline justify-between gap-4 text-sm">
                      <span className="text-slate-300">{m.name}</span>
                      <span className={`font-semibold tabular-nums ${gradeColor(m.grade)}`}>
                        {formatGrade(m.grade, 1)}
                        <span className="ml-2 text-xs font-normal text-slate-600">{m.cp} CP</span>
                      </span>
                    </div>
                    <div className="h-1.5 overflow-hidden rounded-full bg-slate-800">
                      <div
                        className="bar-fill accent-bg h-full rounded-full"
                        style={{ "--w": gradeToWidth(m.grade) } as React.CSSProperties}
                      />
                    </div>
                  </li>
                ))}
            </ul>
          </Reveal>
        ))}
      </div>

      {/* IHK */}
      <Reveal className="card mt-14 p-7">
        <div className="mb-5 flex flex-wrap items-baseline justify-between gap-3">
          <h3 className="text-lg font-semibold text-slate-100">
            IHK-Abschlussprüfung Mechatroniker (2023)
          </h3>
          <p className="rounded-lg bg-cyan-400/10 px-3 py-1 text-sm font-semibold text-cyan-300">
            {ihkResults.gesamt.label}: {ihkResults.gesamt.note} ({ihkResults.gesamt.punkte} Punkte)
          </p>
        </div>
        <ul className="grid gap-x-8 gap-y-3 sm:grid-cols-2">
          {ihkResults.teile.map((t) => (
            <li key={t.label} className="flex items-baseline justify-between gap-4 text-sm">
              <span className="text-slate-400">{t.label}</span>
              <span className="whitespace-nowrap font-semibold tabular-nums text-slate-200">
                {t.punkte} P. · {t.note}
              </span>
            </li>
          ))}
        </ul>
      </Reveal>
    </section>
  );
}
