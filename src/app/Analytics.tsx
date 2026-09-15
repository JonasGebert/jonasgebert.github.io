"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

/**
 * Reichweitenmessung mit GoatCounter — bewusst OHNE das offizielle count.js.
 *
 * count.js ruft bei jedem Laden `localStorage.getItem("skipgc")` auf. Das ist ein
 * Zugriff auf Informationen in der Endeinrichtung nach § 25 Abs. 1 TDDDG; die
 * Ausnahme in Abs. 2 ("unbedingt erforderlich") greift für eine reine
 * Reichweitenmessung nicht — es wäre also eine Einwilligung nötig, sprich ein Banner.
 *
 * Der Tracking-Pixel von GoatCounter kommt ohne jeden Endgerätezugriff aus: eine
 * gewöhnliche Bildanfrage, kein Cookie, kein Storage. § 25 TDDDG ist damit gar
 * nicht erst einschlägig, es bleibt allein bei Art. 6 Abs. 1 lit. f DSGVO.
 * Deshalb hier eine eigene Image()-Anfrage statt des Skripts.
 *
 * Gezählt wird weiterhin jede Route, auch bei Client-Navigation zu /hobbys/*,
 * /zeugnisse/* und /datenschutz/.
 */

const ENDPOINT = "https://jonasgebert.goatcounter.com/count";

export default function Analytics() {
  const pathname = usePathname();
  // Referrer und Bildschirmgröße gehören nur an den ersten Aufruf (siehe unten).
  const ersterAufruf = useRef(true);

  useEffect(() => {
    const params = new URLSearchParams({
      p: pathname,
      t: document.title,
      // Browser und Proxys cachen die Pixel-Antwort trotz No-Cache-Headern gern;
      // ohne Cache-Buster fehlt der zweite Aufruf desselben Pfads (Zurück-Button).
      rnd: Math.random().toString(36).slice(2),
    });

    if (ersterAufruf.current) {
      ersterAufruf.current = false;
      // Bei Client-Navigation steht in document.referrer weiterhin die externe
      // Quelle — jede Unterseite würde ihr sonst erneut zugeschrieben.
      if (document.referrer) params.set("r", document.referrer);
      params.set("s", `${screen.width},${screen.height},${devicePixelRatio}`);
    }

    new Image().src = `${ENDPOINT}?${params.toString()}`;
  }, [pathname]);

  return null;
}
