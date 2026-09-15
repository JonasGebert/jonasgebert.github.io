import { Sidebar } from "@/components/Sidebar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Timeline } from "@/components/Timeline";
import { Grades } from "@/components/Grades";
import { Skills } from "@/components/Skills";
import { CertificateSection } from "@/components/CertificateSection";
import { Hobbies } from "@/components/Hobbies";
import { Contact } from "@/components/Contact";
import { TravelMap } from "@/components/TravelMap";
import { zeugnisse, zertifikate } from "@/content/zeugnisse";

// Der Footer steht im Root-Layout (src/app/layout.tsx), damit er auf allen Seiten
// erscheint — und mit ihm der Link zur Datenschutzerklärung.

export default function Home() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-cyan-400 focus:px-4 focus:py-2 focus:text-slate-950"
      >
        Zum Inhalt springen
      </a>
      <Sidebar />
      <main id="main" tabIndex={-1}>
        <Hero />
        <About />
        <Timeline />
        <Grades />
        <Skills />
        <CertificateSection
          id="zeugnisse"
          items={zeugnisse}
          icon="award"
          kicker="Zeugnisse"
          title="Nachweise im Original"
          intro="Alle Zeugnisse als vollständige Web-Version und als PDF-Download."
        />
        <CertificateSection
          id="zertifikate"
          items={zertifikate}
          icon="file"
          kicker="Zertifikate"
          title="Zertifikate & Bescheinigungen"
          intro="Zusatzqualifikationen aus Lehrgängen und Seminaren — jeweils als Web-Version und PDF."
        />
        <TravelMap />
        <Hobbies />
        <Contact />
      </main>
    </>
  );
}
