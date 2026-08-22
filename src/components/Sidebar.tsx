"use client";

import { useEffect, useState } from "react";
import { Icon, type IconName } from "./Icon";

const items: { id: string; label: string; icon: IconName }[] = [
  { id: "home", label: "Home", icon: "home" },
  { id: "ueber-mich", label: "Über mich", icon: "user" },
  { id: "lebenslauf", label: "Lebenslauf", icon: "briefcase" },
  { id: "noten", label: "Noten", icon: "chart" },
  { id: "skills", label: "Skills", icon: "wrench" },
  { id: "zeugnisse", label: "Zeugnisse", icon: "award" },
  { id: "zertifikate", label: "Zertifikate", icon: "file" },
  { id: "reisen", label: "Reisen", icon: "globe" },
  { id: "hobbys", label: "Hobbys", icon: "heart" },
  { id: "kontakt", label: "Kontakt", icon: "mail" },
];

/** Glassmorphism-Sidebar: minimiert (nur Icons), expandiert on Hover. Mobil: Bottom Bar. */
export function Sidebar() {
  const [active, setActive] = useState("home");

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) setActive(e.target.id);
        }
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    for (const { id } of items) {
      const el = document.getElementById(id);
      if (el) io.observe(el);
    }
    return () => io.disconnect();
  }, []);

  return (
    <>
      {/* Desktop */}
      <nav
        aria-label="Hauptnavigation"
        className="group glass fixed left-4 top-1/2 z-50 hidden -translate-y-1/2 flex-col gap-1 rounded-2xl p-2 transition-all duration-300 md:flex"
      >
        {items.map(({ id, label, icon }) => (
          <a
            key={id}
            href={`#${id}`}
            aria-current={active === id ? "true" : undefined}
            className={`flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm transition-colors ${
              active === id
                ? "bg-cyan-400/10 text-cyan-300"
                : "text-slate-400 hover:bg-slate-700/40 hover:text-slate-200"
            }`}
          >
            <Icon name={icon} className="h-5 w-5 shrink-0" />
            <span className="max-w-0 overflow-hidden whitespace-nowrap opacity-0 transition-all duration-300 group-hover:max-w-[9rem] group-hover:opacity-100">
              {label}
            </span>
          </a>
        ))}
      </nav>

      {/* Mobile Bottom Bar */}
      <nav
        aria-label="Hauptnavigation (mobil)"
        className="glass fixed bottom-3 left-1/2 z-50 flex max-w-[95vw] -translate-x-1/2 gap-1 overflow-x-auto rounded-2xl p-2 md:hidden"
      >
        {items.map(({ id, label, icon }) => (
          <a
            key={id}
            href={`#${id}`}
            aria-label={label}
            className={`rounded-xl p-2.5 ${
              active === id ? "bg-cyan-400/10 text-cyan-300" : "text-slate-400"
            }`}
          >
            <Icon name={icon} className="h-5 w-5" />
          </a>
        ))}
      </nav>
    </>
  );
}
