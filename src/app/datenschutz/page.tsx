import Link from "next/link";
import type { Metadata } from "next";
import { profile } from "@/content/profile";
import { formatMonthYearFromDate } from "@/lib/format";
import { Icon } from "@/components/Icon";

export const metadata: Metadata = {
  title: "Datenschutzerklärung",
  description:
    "Informationen nach Art. 13 DSGVO zur Verarbeitung personenbezogener Daten auf dieser Website.",
  robots: { index: true, follow: true },
};

/**
 * Datenschutzerklärung. Bewusst als Code und nicht als Markdown-Datei: der Inhalt
 * hängt an Werten aus `profile.ts` (Kontaktadresse) und am Build-Datum, und er soll
 * beim Umbau der Seite mit auffallen, statt in content/ zu veralten.
 *
 * Inhaltlich beschreibt die Seite den Ist-Zustand: keine Cookies, kein Storage,
 * keine eingebetteten Inhalte Dritter, kein Formular. Wer daran etwas ändert —
 * Schriftart von Google, eingebettete Karte, Kontaktformular — muss hier nachziehen.
 */
export default function DatenschutzPage() {
  const stand = formatMonthYearFromDate(new Date());

  return (
    <main className="mx-auto max-w-4xl px-6 py-16">
      <Link
        href="/"
        className="mb-10 flex w-fit items-center gap-2 text-sm font-medium text-slate-400 transition-colors hover:text-cyan-300"
      >
        <Icon name="arrowLeft" className="h-4 w-4" /> Zurück zum Portfolio
      </Link>

      <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] accent-text">
        Pflichtangaben
      </p>
      <h1 className="mb-3 text-3xl font-bold tracking-tight text-slate-100 sm:text-4xl">
        Datenschutzerklärung
      </h1>
      <p className="mb-10 text-slate-400">
        Informationen über die Verarbeitung personenbezogener Daten auf dieser Website
        nach Art. 13 der Datenschutz-Grundverordnung (DSGVO). Stand: {stand}.
      </p>

      <div className="card p-6 sm:p-10">
        <article className="prose-doc">
          <h2>1. Verantwortlicher</h2>
          <p>
            Verantwortlich für die Datenverarbeitung auf dieser Website im Sinne des
            Art. 4 Nr. 7 DSGVO ist:
          </p>
          <p>
            {profile.fullName}
            <br />
            E-Mail:{" "}
            <a href={`mailto:${profile.kontaktEmail}`} className="text-cyan-300 underline underline-offset-4">
              {profile.kontaktEmail}
            </a>
          </p>
          <p>
            Diese Website ist ein privates Portfolio ohne kommerziellen Zweck. Ein
            Datenschutzbeauftragter ist nicht bestellt; die Voraussetzungen nach
            Art. 37 DSGVO und § 38 BDSG liegen nicht vor.
          </p>

          <h2>2. Überblick: was diese Website nicht tut</h2>
          <ul>
            <li>Es werden keine Cookies gesetzt.</li>
            <li>
              Es wird nichts in Ihrem Browser gespeichert — weder Local Storage noch
              Session Storage noch IndexedDB.
            </li>
            <li>
              Es sind keine Inhalte Dritter eingebettet: keine externen Schriftarten,
              keine Karten, keine Videos, keine Social-Media-Plugins. Auch die
              Weltkarte im Abschnitt „Reisen“ ist eine lokale Grafik ohne Kartendienst.
            </li>
            <li>Es gibt kein Kontaktformular, keine Anmeldung und keinen Newsletter.</li>
            <li>
              Es findet keine automatisierte Entscheidungsfindung und kein Profiling
              nach Art. 22 DSGVO statt.
            </li>
          </ul>

          <h2>3. Hosting und Server-Logfiles</h2>
          <p>
            Diese Website wird über GitHub Pages bereitgestellt. Anbieter ist die
            GitHub, Inc., 88 Colin P. Kelly Jr. Street, San Francisco, CA 94107, USA.
            Beim Aufruf einer Seite verarbeitet GitHub technisch notwendige
            Zugriffsdaten in Server-Logfiles, insbesondere:
          </p>
          <ul>
            <li>IP-Adresse des anfragenden Geräts</li>
            <li>Datum und Uhrzeit des Zugriffs</li>
            <li>angeforderte Datei und übertragene Datenmenge</li>
            <li>die zuvor besuchte Seite (Referrer)</li>
            <li>Browsertyp, Browserversion und Betriebssystem (User-Agent)</li>
          </ul>
          <p>
            Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO. Das berechtigte Interesse
            liegt in der technisch fehlerfreien Bereitstellung und der Sicherheit der
            Website; ohne die Verarbeitung dieser Daten lässt sich eine Website nicht
            ausliefern. Auf die Speicherdauer dieser Logfiles habe ich keinen Einfluss,
            sie richtet sich nach den Bestimmungen von GitHub.
          </p>
          <p>
            Dabei können Daten in die USA übermittelt werden. GitHub, Inc. ist unter
            dem EU-U.S. Data Privacy Framework zertifiziert, für das die Europäische
            Kommission mit Beschluss vom 10. Juli 2023 ein angemessenes Schutzniveau
            festgestellt hat. Einzelheiten zur Datenverarbeitung durch GitHub:{" "}
            <a
              href="https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-300 underline underline-offset-4"
            >
              GitHub General Privacy Statement
            </a>
            .
          </p>

          <h2>4. Reichweitenmessung mit GoatCounter</h2>
          <p>
            Um zu erfahren, welche Inhalte dieser Seite aufgerufen werden, setze ich
            GoatCounter ein. GoatCounter arbeitet ohne Cookies und ohne jeden Zugriff
            auf Informationen in Ihrem Endgerät: Beim Seitenaufruf wird lediglich eine
            Bildanfrage an den GoatCounter-Server gesendet. Ein Einwilligungserfordernis
            nach § 25 Abs. 1 TDDDG besteht deshalb nicht.
          </p>
          <p>Mit dieser Anfrage werden übermittelt:</p>
          <ul>
            <li>der aufgerufene Seitenpfad und der Seitentitel</li>
            <li>die zuvor besuchte Seite (Referrer)</li>
            <li>die Bildschirmgröße Ihres Geräts</li>
            <li>
              technisch bedingt Ihre IP-Adresse und der User-Agent-Header, wie bei jeder
              Anfrage im Internet
            </li>
          </ul>
          <p>
            GoatCounter speichert IP-Adresse und User-Agent nach eigenen Angaben nicht
            dauerhaft, sondern leitet daraus nur das Herkunftsland sowie Browser- und
            Systemversion ab und speichert diese ausschließlich in aggregierter Form.
            Es wird keine Kennung gesetzt, die einen Wiedererkennungswert hätte. Eine
            Zuordnung zu Ihrer Person ist mir nicht möglich.
          </p>
          <p>
            Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO; das berechtigte Interesse
            liegt in der statistischen Auswertung der Nutzung dieser Seite. Die Daten
            werden auf Servern der Hetzner Online GmbH in Finnland und Deutschland
            gespeichert — eine Übermittlung in ein Drittland findet nicht statt.
            Einzelheiten:{" "}
            <a
              href="https://www.goatcounter.com/help/privacy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-300 underline underline-offset-4"
            >
              Datenschutzhinweise von GoatCounter
            </a>
            .
          </p>
          <p>
            Sie können die Messung unterbinden, indem Sie Anfragen an die Domain
            <code> goatcounter.com </code> in Ihrem Browser oder über einen
            Inhaltsblocker sperren. Ein Widerspruch nach Art. 21 DSGVO ist außerdem
            jederzeit formlos an die oben genannte Adresse möglich.
          </p>

          <h2>5. Zeugnisse und Zertifikate als PDF</h2>
          <p>
            Die auf dieser Seite verlinkten PDF-Dokumente liegen auf demselben Server
            wie die Website. Ihr Abruf löst keine über Abschnitt 3 hinausgehende
            Verarbeitung aus; es sind keine Zähl- oder Nachverfolgungselemente
            eingebettet.
          </p>

          <h2>6. Links zu GitHub und LinkedIn</h2>
          <p>
            Diese Seite verlinkt auf mein Profil bei GitHub und bei LinkedIn. Es
            handelt sich um gewöhnliche Links, nicht um eingebettete Inhalte: Beim
            bloßen Aufruf dieser Seite werden keine Daten an diese Anbieter übertragen.
            Erst wenn Sie einen solchen Link anklicken, verlassen Sie diese Website, und
            es gelten die Datenschutzbestimmungen des jeweiligen Anbieters.
          </p>

          <h2>7. Ihre Rechte</h2>
          <p>Ihnen stehen gegenüber dem Verantwortlichen folgende Rechte zu:</p>
          <ul>
            <li>Auskunft über die zu Ihrer Person verarbeiteten Daten (Art. 15 DSGVO)</li>
            <li>Berichtigung unrichtiger Daten (Art. 16 DSGVO)</li>
            <li>Löschung (Art. 17 DSGVO)</li>
            <li>Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
            <li>Datenübertragbarkeit (Art. 20 DSGVO)</li>
          </ul>
          <p>
            <strong>
              Widerspruchsrecht: Sie haben das Recht, aus Gründen, die sich aus Ihrer
              besonderen Situation ergeben, jederzeit gegen die Verarbeitung Sie
              betreffender personenbezogener Daten Widerspruch einzulegen, die auf
              Grundlage von Art. 6 Abs. 1 lit. f DSGVO erfolgt (Art. 21 DSGVO).
            </strong>{" "}
            Das betrifft die in den Abschnitten 3 und 4 beschriebenen Verarbeitungen.
            Eine formlose Nachricht an die oben genannte Adresse genügt.
          </p>
          <p>
            Unabhängig davon steht Ihnen nach Art. 77 DSGVO ein Beschwerderecht bei
            einer Datenschutz-Aufsichtsbehörde zu. Sie können sich dafür an die Behörde
            Ihres gewöhnlichen Aufenthaltsorts, Ihres Arbeitsplatzes oder des Orts des
            mutmaßlichen Verstoßes wenden.
          </p>

          <h2>8. Änderungen dieser Erklärung</h2>
          <p>
            Ändert sich die Website technisch, wird diese Erklärung angepasst. Es gilt
            jeweils die hier abrufbare Fassung; der Stand ist oben angegeben.
          </p>
        </article>
      </div>
    </main>
  );
}
