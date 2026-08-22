import { Sidebar } from "@/components/Sidebar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Timeline } from "@/components/Timeline";
import { Grades } from "@/components/Grades";
import { Skills } from "@/components/Skills";
import { Certificates } from "@/components/Certificates";
import { Certifications } from "@/components/Certifications";
import { Hobbies } from "@/components/Hobbies";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { TravelGallery } from "@/components/TravelGallery";

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
        <Certificates />
        <Certifications />
        <TravelGallery />
        <Hobbies />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
