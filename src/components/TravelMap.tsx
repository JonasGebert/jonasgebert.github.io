"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { travelSection, travelTrips, type TravelTrip } from "@/content/extras";
import { WORLD_LAND_PATH, WORLD_VIEWBOX, toMapPercent } from "@/content/worldMap";
import { formatJahre } from "@/lib/format";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";
import { Icon } from "./Icon";

/**
 * Reisekarte: Weltkarte mit einem Pin pro Reise, darunter dieselben Reisen als Liste.
 *
 * Warum beides? Auf einer Weltkarte liegen London, Sevilla und Danzig auf dem Handy
 * nur wenige Pixel auseinander — als einzige Bedienelemente wären die Pins dort nicht
 * zuverlässig treffbar und mit der Tastatur ohnehin nicht sinnvoll ansteuerbar.
 * Deshalb sind die Pins bewusst `aria-hidden` und nicht fokussierbar: sie sind die
 * visuelle Abkürzung für die Maus, die Liste darunter ist das vollwertige Bedienelement
 * mit sauberen 44-px-Trefferflächen, Beschriftung und Tastaturzugang. Beide öffnen
 * denselben Dialog.
 */
export function TravelMap() {
  const [activeSlug, setActiveSlug] = useState<string | null>(null);
  const [photoIndex, setPhotoIndex] = useState(0);
  const dialogRef = useRef<HTMLDialogElement | null>(null);
  const chipRefs = useRef(new Map<string, HTMLButtonElement>());
  const lastSlug = useRef<string | null>(null);

  const trip: TravelTrip | undefined = travelTrips.find((t) => t.slug === activeSlug);
  const photos = trip?.photos ?? [];
  const photo = photos[photoIndex];

  const open = useCallback((slug: string) => {
    lastSlug.current = slug;
    setPhotoIndex(0);
    setActiveSlug(slug);
  }, []);

  // Nativer <dialog>: bringt Fokusfalle, ESC und eigene Ebene über allem mit —
  // deshalb kein selbstgebauter Overlay und kein z-index-Wettrüsten.
  useEffect(() => {
    const el = dialogRef.current;
    if (!el) return;
    if (activeSlug && !el.open) el.showModal();
    if (!activeSlug && el.open) el.close();
  }, [activeSlug]);

  const handleClose = useCallback(() => {
    setActiveSlug(null);
    // Fokus zurück auf den Auslöser, sonst landet er nach dem Schließen am Seitenanfang.
    const slug = lastSlug.current;
    if (slug) chipRefs.current.get(slug)?.focus();
  }, []);

  const step = useCallback(
    (delta: number) => {
      if (photos.length < 2) return;
      setPhotoIndex((i) => (i + delta + photos.length) % photos.length);
    },
    [photos.length]
  );

  return (
    <section id="reisen" className="mx-auto max-w-6xl px-6 py-24">
      <SectionHeading kicker="Reisen" title={travelSection.title} intro={travelSection.message} />

      <Reveal>
        <div className="relative overflow-hidden rounded-2xl border border-slate-700/40 bg-[#0c121f]">
          <svg viewBox={WORLD_VIEWBOX} className="block h-auto w-full" aria-hidden="true" focusable="false">
            <path
              d={WORLD_LAND_PATH}
              fill="rgba(30, 41, 59, 0.85)"
              stroke="rgba(100, 116, 139, 0.5)"
              strokeWidth="0.6"
              strokeLinejoin="round"
            />
          </svg>

          {travelTrips.map((t, i) => {
            const { x, y } = toMapPercent(t.lat, t.lon);
            const isActive = t.slug === activeSlug;
            return (
              <button
                key={t.slug}
                type="button"
                aria-hidden="true"
                tabIndex={-1}
                onClick={() => open(t.slug)}
                style={{ left: `${x}%`, top: `${y}%` }}
                className="group absolute grid h-11 w-11 -translate-x-1/2 -translate-y-1/2 cursor-pointer place-items-center"
              >
                <span
                  className="pin-halo absolute h-2.5 w-2.5 rounded-full bg-cyan-400 sm:h-3.5 sm:w-3.5"
                  style={{ animationDelay: `${i * 0.28}s` }}
                />
                <span
                  className={`relative h-2 w-2 rounded-full ring-2 transition-transform duration-200 group-hover:scale-150 sm:h-2.5 sm:w-2.5 ${
                    isActive ? "scale-150 bg-cyan-300 ring-cyan-300/60" : "bg-cyan-400 ring-cyan-400/30"
                  }`}
                />
                <span className="pointer-events-none absolute bottom-8 whitespace-nowrap rounded-md border border-slate-600/50 bg-slate-900/95 px-2 py-1 text-xs font-medium text-slate-200 opacity-0 shadow-lg transition-opacity duration-200 group-hover:opacity-100">
                  {t.ort} {formatJahre(t.jahre)}
                </span>
              </button>
            );
          })}
        </div>
      </Reveal>

      <Reveal>
        <ul className="mt-6 flex flex-wrap gap-2">
          {travelTrips.map((t) => {
            const isActive = t.slug === activeSlug;
            return (
              <li key={t.slug}>
                <button
                  type="button"
                  ref={(el) => {
                    if (el) chipRefs.current.set(t.slug, el);
                    else chipRefs.current.delete(t.slug);
                  }}
                  onClick={() => open(t.slug)}
                  aria-haspopup="dialog"
                  aria-label={`${t.ort}, ${t.land} ${t.jahre.join(", ")} — Bilder ansehen`}
                  className={`flex min-h-11 items-center gap-2 rounded-full border px-4 py-2 text-sm transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-400 ${
                    isActive
                      ? "border-cyan-400/60 bg-cyan-400/10 text-cyan-200"
                      : "border-slate-700/60 bg-slate-900/40 text-slate-300 hover:border-cyan-400/40 hover:text-slate-100"
                  }`}
                >
                  <span className="font-medium">{t.ort}</span>
                  <span className="text-slate-500">{formatJahre(t.jahre)}</span>
                </button>
              </li>
            );
          })}
        </ul>
      </Reveal>

      <dialog
        ref={dialogRef}
        onClose={handleClose}
        onClick={(e) => {
          if (e.target === dialogRef.current) dialogRef.current?.close();
        }}
        onKeyDown={(e) => {
          if (e.key === "ArrowRight") step(1);
          if (e.key === "ArrowLeft") step(-1);
        }}
        aria-labelledby="reise-dialog-titel"
        className="m-auto w-[min(92vw,56rem)] rounded-2xl border border-slate-700/50 bg-[#101624] p-0 text-slate-200 backdrop:bg-slate-950/80"
      >
        {trip ? (
          <div className="flex flex-col">
            <div className="flex items-start justify-between gap-4 border-b border-slate-700/50 px-5 py-4">
              <div>
                <h3 id="reise-dialog-titel" className="text-lg font-semibold text-slate-100">
                  {trip.ort}
                </h3>
                <p className="text-sm text-slate-400">
                  {trip.land} · {formatJahre(trip.jahre)}
                </p>
              </div>
              <button
                type="button"
                onClick={() => dialogRef.current?.close()}
                aria-label="Dialog schließen"
                className="grid h-11 w-11 shrink-0 place-items-center rounded-lg text-slate-400 transition-colors hover:bg-slate-800 hover:text-slate-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-400"
              >
                <Icon name="close" />
              </button>
            </div>

            {photo ? (
              <figure className="m-0">
                <Image
                  key={photo.src}
                  src={photo.src}
                  alt={photo.alt}
                  width={photo.width}
                  height={photo.height}
                  className="max-h-[65vh] w-full bg-slate-950 object-contain"
                />
                {photo.caption ? (
                  <figcaption className="px-5 py-3 text-sm text-slate-400">{photo.caption}</figcaption>
                ) : null}
              </figure>
            ) : (
              // Reise ohne Fotos: der Dialog wäre sonst eine leere Box unter der
              // Überschrift. Platzhalter im selben Seitenverhältnis, damit später
              // eingesetzte Bilder das Layout nicht verschieben.
              <div className="m-0 bg-slate-950">
                <Image
                  src="/assets/images/placeholder-reise.svg"
                  alt=""
                  width={1600}
                  height={900}
                  className="max-h-[65vh] w-full object-contain opacity-70"
                />
                <p className="px-5 py-3 text-sm text-slate-400">
                  Fotos zu dieser Station folgen.
                </p>
              </div>
            )}

            {photos.length > 1 ? (
              <div className="flex items-center justify-between border-t border-slate-700/50 px-5 py-3">
                <button
                  type="button"
                  onClick={() => step(-1)}
                  aria-label="Vorheriges Bild"
                  className="grid h-11 w-11 place-items-center rounded-lg text-slate-400 transition-colors hover:bg-slate-800 hover:text-slate-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-400"
                >
                  <Icon name="chevronLeft" />
                </button>
                <p className="text-sm text-slate-500" aria-live="polite">
                  Bild {photoIndex + 1} von {photos.length}
                </p>
                <button
                  type="button"
                  onClick={() => step(1)}
                  aria-label="Nächstes Bild"
                  className="grid h-11 w-11 place-items-center rounded-lg text-slate-400 transition-colors hover:bg-slate-800 hover:text-slate-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-400"
                >
                  <Icon name="chevronRight" />
                </button>
              </div>
            ) : null}
          </div>
        ) : null}
      </dialog>
    </section>
  );
}
