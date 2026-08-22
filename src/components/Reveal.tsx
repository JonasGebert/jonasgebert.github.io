"use client";

import { useCallback, useEffect, useRef } from "react";

/** Scroll-Reveal-Wrapper: blendet Kinder beim Scrollen ein (IntersectionObserver). */
export function Reveal({
  children,
  className = "",
  as: Tag = "div",
}: {
  children: React.ReactNode;
  className?: string;
  as?: "div" | "section" | "li";
}) {
  const ref = useRef<HTMLElement | null>(null);

  // Callback-Ref statt useRef direkt am Element: `as` ist eine Union (div/section/li)
  // mit unterschiedlichen Ref-Typen — ein Callback auf HTMLElement passt auf alle drei
  // und macht den früheren `as any`-Cast überflüssig.
  const setRef = useCallback((el: HTMLElement | null) => {
    ref.current = el;
  }, []);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.classList.add("is-visible");
            io.unobserve(e.target);
          }
        }
      },
      { threshold: 0.15 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <Tag ref={setRef} className={`reveal ${className}`}>
      {children}
    </Tag>
  );
}
