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

  useEffect(() => {
    if (initialLoad.current) {
      initialLoad.current = false;
      return;
    }
    window.goatcounter?.count({ path: pathname });
  }, [pathname]);

  return (
    <Script
      data-goatcounter="https://jonasgebert.goatcounter.com/count"
      src="https://gc.zgo.at/count.js"
      strategy="afterInteractive"
    />
  );
}
