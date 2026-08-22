"use client";

import Script from "next/script";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

// GoatCounter-Analytics für die Website.
// count.js zählt nur den initialen Load — Route-Wechsel (Client-Navigation zu
// /hobbys/* und /zeugnisse/*) triggern wir hier manuell nach.

declare global {
  interface Window {
    goatcounter?: { count: (opts?: { path?: string }) => void };
  }
}

export default function Analytics() {
  const pathname = usePathname();
  // Ersten Load überspringen — den zählt count.js beim Laden schon selbst.
  const initialLoad = useRef(true);
  // Pfad, der gezählt werden soll, solange count.js noch nicht geladen ist
  // (strategy="afterInteractive" — ein schneller erster Klick käme sonst zu früh).
  const ausstehend = useRef<string | null>(null);

  useEffect(() => {
    if (initialLoad.current) {
      initialLoad.current = false;
      return;
    }
    if (window.goatcounter?.count) {
      window.goatcounter.count({ path: pathname });
    } else {
      ausstehend.current = pathname;
    }
  }, [pathname]);

  return (
    <Script
      data-goatcounter="https://jonasgebert.goatcounter.com/count"
      src="https://gc.zgo.at/count.js"
      strategy="afterInteractive"
      onReady={() => {
        // Nachfeuern, was während des Ladens aufgelaufen ist.
        const pfad = ausstehend.current;
        ausstehend.current = null;
        if (pfad) window.goatcounter?.count({ path: pfad });
      }}
    />
  );
}
