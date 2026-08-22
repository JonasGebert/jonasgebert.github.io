import type { MetadataRoute } from "next";
import { hobbies } from "@/content/extras";
import { listZeugnisSlugs } from "@/lib/markdown";

const SITE_URL = "https://jonasgebert.github.io";

// output: "export" verlangt eine explizite Kennzeichnung als statische Route.
export const dynamic = "force-static";

/**
 * sitemap.xml für den statischen Export. Enthält die Startseite und alle
 * generierten Unterseiten — die Routen kommen aus denselben Quellen wie
 * generateStaticParams, damit nichts auseinanderläuft.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const pfade = [
    "/",
    ...listZeugnisSlugs().map((slug) => `/zeugnisse/${slug}/`),
    ...hobbies.map((h) => `/hobbys/${h.slug}/`),
  ];

  // Build-Zeitpunkt — der Workflow baut monatlich neu.
  const lastModified = new Date();

  return pfade.map((pfad) => ({
    url: `${SITE_URL}${pfad}`,
    lastModified,
    changeFrequency: "monthly" as const,
    priority: pfad === "/" ? 1 : 0.7,
  }));
}
