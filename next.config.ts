import type { NextConfig } from "next";

// Build-Zeit-Prüfungen (laufen nur hier im Node-Prozess, kommen damit nicht ins
// Client-Bundle). Werfen bei Abweichung und brechen den Build ab.
import "./src/content/grades.check"; // Notenschnitte gegen die Modulliste
import "./src/content/legal.check"; // Pflichtangaben der Datenschutzerklärung

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
