/** Minimales, abhängigkeitsfreies Icon-Set (Feather-Stil, stroke-basiert). */
const paths = {
  home: <path d="M3 10.5 12 3l9 7.5V21a1 1 0 0 1-1 1h-5v-7h-6v7H4a1 1 0 0 1-1-1z" />,
  user: <><circle cx="12" cy="8" r="4" /><path d="M4 21c0-4 3.5-6 8-6s8 2 8 6" /></>,
  briefcase: <><rect x="3" y="7" width="18" height="13" rx="2" /><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" /></>,
  chart: <><path d="M4 20V10" /><path d="M10 20V4" /><path d="M16 20v-8" /><path d="M22 20H2" /></>,
  wrench: <path d="M14.7 6.3a4.5 4.5 0 0 0-6 6L3 18l3 3 5.7-5.7a4.5 4.5 0 0 0 6-6L14 13l-3-3z" />,
  award: <><circle cx="12" cy="9" r="6" /><path d="M8.5 14 7 22l5-3 5 3-1.5-8" /></>,
  code: <><path d="m8 6-6 6 6 6" /><path d="m16 6 6 6-6 6" /></>,
  globe: <><circle cx="12" cy="12" r="9" /><path d="M3 12h18" /><path d="M12 3a14 14 0 0 1 0 18 14 14 0 0 1 0-18" /></>,
  heart: <path d="M12 21S4 14.5 4 9a4.5 4.5 0 0 1 8-3 4.5 4.5 0 0 1 8 3c0 5.5-8 12-8 12z" />,
  mail: <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></>,
  cpu: <><rect x="6" y="6" width="12" height="12" rx="1" /><path d="M9 2v4M15 2v4M9 18v4M15 18v4M2 9h4M2 15h4M18 9h4M18 15h4" /></>,
  box: <><path d="m12 2 9 5v10l-9 5-9-5V7z" /><path d="m3.5 7.5 8.5 5 8.5-5" /><path d="M12 12.5V22" /></>,
  file: <><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><path d="M14 2v6h6" /></>,
  download: <><path d="M12 3v12" /><path d="m6 11 6 6 6-6" /><path d="M4 21h16" /></>,
  zap: <path d="M13 2 4 14h6l-1 8 9-12h-6z" />,
  car: <><path d="M5 16 6.5 9a2 2 0 0 1 2-1.5h7a2 2 0 0 1 2 1.5L19 16" /><rect x="3" y="15" width="18" height="4" rx="1" /><circle cx="7" cy="20" r="1.5" /><circle cx="17" cy="20" r="1.5" /></>,
  bike: <><circle cx="6" cy="17" r="3.5" /><circle cx="18" cy="17" r="3.5" /><path d="M6 17 10 8h4l4 9" /><path d="M10 8 8 5h3" /></>,
  printer: <><path d="M7 8V3h10v5" /><rect x="4" y="8" width="16" height="8" rx="1" /><path d="M7 14h10v7H7z" /></>,
  tennis: <><circle cx="12" cy="12" r="9" /><path d="M12 3a9 9 0 0 0 9 9" /><path d="M3 12a9 9 0 0 1 9 9" /></>,
  golf: <><path d="M12 18V3" /><path d="m12 4 7 2.5L12 9" /><path d="M7 21c0-1.7 2.2-3 5-3s5 1.3 5 3" /></>,
  diving: <><path d="M4 8h16v2a4 4 0 0 1-4 4h-1.5L12 17l-2.5-3H8a4 4 0 0 1-4-4z" /><path d="M4 20c1.5 1 3 1 4.5 0s3-1 4.5 0 3 1 4.5 0" /></>,
  sailing: <><path d="M12 3v13" /><path d="M12 5c3.5 1 6 4 7 10H12z" /><path d="M4 17h15l-2.5 4h-10z" /></>,
  arrowLeft: <><path d="M19 12H5" /><path d="m11 18-6-6 6-6" /></>,
  external: <><path d="M14 5h5v5" /><path d="M19 5 9 15" /><path d="M19 13v6a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h6" /></>,
  linkedin: <><rect x="3" y="3" width="18" height="18" rx="3" /><path d="M8 11v5" /><path d="M8 8v.01" /><path d="M12 16v-5" /><path d="M16 16v-3a2 2 0 0 0-4 0" /></>,
  github: <path d="M12 2a10 10 0 0 0-3.16 19.5c.5.08.66-.23.66-.5v-1.7c-2.67.6-3.23-1.13-3.23-1.13-.44-1.1-1.08-1.4-1.08-1.4-.88-.6.07-.6.07-.6.97.07 1.48 1 1.48 1 .87 1.52 2.27 1.08 2.83.83.08-.65.34-1.09.61-1.34-2.13-.25-4.37-1.07-4.37-4.77 0-1.05.37-1.9 1-2.57-.1-.25-.43-1.23.09-2.57 0 0 .8-.26 2.64 1a9.2 9.2 0 0 1 4.8 0c1.84-1.26 2.64-1 2.64-1 .52 1.34.2 2.32.1 2.57.62.67 1 1.52 1 2.57 0 3.7-2.25 4.5-4.4 4.75.36.3.66.9.66 1.83v2.72c0 .27.16.58.67.5A10 10 0 0 0 12 2z" />,
} satisfies Record<string, React.ReactNode>;

/** Alle verfügbaren Icon-Namen — Content-Module typisieren ihre icon-Felder darauf. */
export type IconName = keyof typeof paths;

export function Icon({ name, className = "h-5 w-5" }: { name: IconName; className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {paths[name]}
    </svg>
  );
}
