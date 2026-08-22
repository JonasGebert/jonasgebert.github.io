import { profile } from "@/content/profile";
import { studium } from "@/content/grades";
import { formatMonthYear } from "@/lib/format";

export function Footer() {
  return (
    <footer className="border-t border-slate-800/60 px-6 py-10 pb-24 text-center text-sm text-slate-600 md:pb-10">
      <p>
        © {new Date().getFullYear()} {profile.fullName}
      </p>
      <p className="mt-1">Erstellt mit Next.js · Inhalte zuletzt aktualisiert: {formatMonthYear(studium.stand)}</p>
    </footer>
  );
}
