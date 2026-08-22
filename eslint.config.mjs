import { dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { FlatCompat } from "@eslint/eslintrc";

// ESLint Flat Config. Die Next-Regelsätze liegen noch im alten "extends"-Format,
// deshalb der Umweg über FlatCompat.
const compat = new FlatCompat({ baseDirectory: dirname(fileURLToPath(import.meta.url)) });

const config = [
  {
    ignores: ["node_modules/**", ".next/**", "out/**", "next-env.d.ts", "tsconfig.tsbuildinfo"],
  },
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    linterOptions: {
      // Ins Leere zeigende eslint-disable-Kommentare sollen auffallen.
      reportUnusedDisableDirectives: "error",
    },
  },
];

export default config;
