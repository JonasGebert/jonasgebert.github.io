import type { MetadataRoute } from "next";

const SITE_URL = "https://jonasgebert.github.io";

// output: "export" verlangt eine explizite Kennzeichnung als statische Route.
export const dynamic = "force-static";

/** robots.txt für den statischen Export — die Seite soll indexiert werden. */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
