import Link from "next/link";
import { profile } from "@/content/profile";
import { formatMonthYearFromDate } from "@/lib/format";

/**
 * Das Datum im Footer ist der Build-Zeitpunkt, nicht der Notenstand aus `grades.ts` —
 * sonst bleibt die Angabe bei jeder Änderung stehen, die keine Note betrifft.
 * `output: "export"` friert `new Date()` beim Build ein; der Deploy-Workflow baut
 * bei jedem Push und zusätzlich monatlich per Cron neu.
 */
export function Footer() {
  const build = new Date();

  return (
    <footer className="border-t border-slate-800/60 px-6 py-10 pb-24 text-center text-sm text-slate-600 md:pb-10">
      <p>
        © {build.getFullYear()} {profile.fullName}
      </p>
      <p className="mt-1">Erstellt mit Next.js · Stand: {formatMonthYearFromDate(build)}</p>
      <p className="mt-3">
        <Link
          href="/datenschutz/"
          className="underline underline-offset-4 transition-colors hover:text-cyan-300"
        >
          Datenschutzerklärung
        </Link>
      </p>
    </footer>
  );
}
