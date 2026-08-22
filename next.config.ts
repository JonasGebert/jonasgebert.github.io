import type { NextConfig } from "next";

// Build-Zeit-Prüfung der Notenschnitte (läuft nur hier im Node-Prozess,
// kommt damit nicht ins Client-Bundle). Wirft bei Abweichung und bricht den Build ab.
import "./src/content/grades.check";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
