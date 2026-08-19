import { profile } from "@/content/profile";
import { gradeSummary, studium } from "@/content/grades";
import { formatGrade } from "@/lib/format";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";

export function About() {
  return (
    <section id="ueber-mich" className="mx-auto max-w-6xl px-6 py-24">
      <SectionHeading kicker="Über mich" title="Präzision aus der Grundlagenforschung" />
      <div className="grid gap-6 md:grid-cols-2">
        <Reveal className="card p-7 md:col-span-2">
          <h3 className="mb-3 text-lg font-semibold text-slate-100">Mein Weg</h3>
          <p className="leading-relaxed text-slate-400">
            Vier Jahre beim Deutschen Elektronen-Synchrotron DESY — erst als Auszubildender zum
            Mechatroniker (IHK-Abschluss mit Note 1,0), dann als Mechatroniker in der
            Detektorentwicklung der Gruppe FS-DS. Hochpräzisionsfertigung, Elektronik und
            Systemintegration in einer internationalen, englischsprachigen Forschungsumgebung.
            Seit April 2024 studiere ich {studium.studiengang} an der {studium.hochschule}{" "}
            (Schwerpunkt {studium.schwerpunkt}) — aktuell im {studium.semester}. Semester mit einem
            Schnitt von {formatGrade(gradeSummary.gesamt.grade)}.
          </p>
        </Reveal>
        <Reveal className="card p-7">
          <h3 className="mb-3 text-lg font-semibold text-slate-100">Sprachen</h3>
          <ul className="space-y-3">
            {profile.languages.map((l) => (
              <li key={l.name}>
                <span className="font-medium text-slate-200">{l.name}</span>
                <span className="block text-sm text-slate-500">{l.level}</span>
              </li>
            ))}
          </ul>
        </Reveal>
        <Reveal className="card p-7">
          <h3 className="mb-3 text-lg font-semibold text-slate-100">Nebentätigkeit & Ehrenamt</h3>
          <p className="leading-relaxed text-slate-400">
            <span className="font-medium text-slate-200">Mathematiktutor</span> für Erstsemester
            (Maschinenbau, HAW Hamburg): Seit dem 2. Semester Tutor für Mathematik 1 und verantwortlich für den Vorkurs Mathematik für Erstsemester.
          </p>
          <p className="mt-4 leading-relaxed text-slate-400">
            <span className="font-medium text-slate-200">Kommunalpolitiker in Norderstedt</span> für
            die{" "}
            <a
              href="https://www.win-norderstedt.de/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-300 transition-colors hover:text-cyan-200"
            >
              WiN — Wir in Norderstedt
            </a>{" "}
            (WiN-FW): Politik für Norderstedt, keine Landes- und Bundespolitik.{" "}
            <a
              href="https://buergerinfo.norderstedt.de/ratsinfo/sessionnet/buergerinfo/kp0050.php?__kpenr=3007"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-300 transition-colors hover:text-cyan-200"
            >
              Mein Profil im Ratsinformationssystem →
            </a>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
