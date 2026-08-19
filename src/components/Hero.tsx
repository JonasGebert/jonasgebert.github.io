import Image from "next/image";
import { profile } from "@/content/profile";
import { gradeSummary } from "@/content/grades";
import { formatGrade } from "@/lib/format";
import { Icon } from "./Icon";

export function Hero() {
  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden">
      {/* Hintergrund-Glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 right-0 h-[36rem] w-[36rem] rounded-full bg-cyan-500/10 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-40 left-0 h-[30rem] w-[30rem] rounded-full bg-blue-600/10 blur-3xl"
      />

      <div className="mx-auto grid w-full max-w-6xl items-center gap-12 px-6 py-24 md:grid-cols-[3fr_2fr]">
        <div>
          <p className="fade-up mb-4 text-sm font-semibold uppercase tracking-[0.25em] accent-text">
            Portfolio · Hamburg
          </p>
          <h1 className="fade-up text-4xl font-bold leading-tight tracking-tight text-slate-50 sm:text-6xl">
            {profile.name}
          </h1>
          <p className="fade-up-1 mt-3 text-xl font-medium text-slate-300 sm:text-2xl">
            {profile.role}
          </p>
          <p className="fade-up-2 mt-6 max-w-xl leading-relaxed text-slate-400">
            {profile.tagline}
          </p>
          <div className="fade-up-3 mt-9 flex flex-wrap gap-3">
            <a
              href="#lebenslauf"
              className="accent-bg rounded-xl px-6 py-3 text-sm font-semibold text-slate-950 transition-transform hover:scale-[1.03]"
            >
              CV ansehen
            </a>
            <a
              href="#kontakt"
              className="rounded-xl px-6 py-3 text-sm font-semibold text-slate-400 transition-colors hover:text-cyan-300"
            >
              Kontakt →
            </a>
          </div>
          <div className="fade-up-3 mt-10 flex flex-wrap items-center gap-5 text-sm text-slate-500">
            <span className="flex items-center gap-2">
              <Icon name="award" className="h-4 w-4 text-cyan-400" /> IHK-Abschluss 1,0
            </span>
            <span className="flex items-center gap-2">
              <Icon name="chart" className="h-4 w-4 text-cyan-400" /> Studium Ø{" "}
              {formatGrade(gradeSummary.gesamt.grade)}
            </span>
            <span className="flex items-center gap-2">
              <Icon name="cpu" className="h-4 w-4 text-cyan-400" /> 4 Jahre DESY
            </span>
          </div>
        </div>

        <div className="fade-up-2 mx-auto w-full max-w-xs md:max-w-sm">
          <div className="portrait-frame relative overflow-hidden rounded-3xl border border-cyan-400/30">
            <Image
              src="/assets/images/portrait.jpg"
              alt="Bewerbungsfoto von Jonas Gebert"
              width={896}
              height={1195}
              priority
              className="h-auto w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
