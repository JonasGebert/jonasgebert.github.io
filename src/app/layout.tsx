import type { Metadata } from "next";
import "./globals.css";
import { profile } from "@/content/profile";
import Analytics from "./Analytics";

const SITE_URL = "https://jonasgebert.github.io";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Jonas Gebert — Mechatroniker & Maschinenbau-Student",
    template: "%s · Jonas Gebert",
  },
  description: profile.tagline,
  keywords: [
    "Jonas Gebert", "Mechatroniker", "Maschinenbau", "HAW Hamburg",
    "DESY", "Portfolio", "Werkstudent", "Produktion",
  ],
  openGraph: {
    type: "website",
    url: SITE_URL,
    title: "Jonas Gebert — Mechatroniker & Maschinenbau-Student",
    description: profile.tagline,
    locale: "de_DE",
    images: ["/assets/images/portrait.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jonas Gebert — Portfolio",
    description: profile.tagline,
  },
  robots: { index: true, follow: true },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.fullName,
  url: SITE_URL,
  jobTitle: "Mechatroniker / Maschinenbau-Student",
  alumniOf: [
    { "@type": "EducationalOrganization", name: "HAW Hamburg" },
    { "@type": "EducationalOrganization", name: "Willy-Brandt-Schule Norderstedt" },
  ],
  worksFor: { "@type": "Organization", name: "HAW Hamburg (Mathematiktutor)" },
  knowsLanguage: ["de", "en"],
  sameAs: [profile.github, profile.linkedin],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de" className="dark">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
