"use client";

import { Children, useCallback, useEffect, useRef, useState } from "react";
import type { ReactNode } from "react";
import { useTranslations } from "next-intl";

/**
 * The mobile canvas turns every 3-card row into a swipeable carousel; the desktop
 * canvas keeps them as a grid. This renders both from one set of children:
 *
 *   below lg — a scroll-snap track, one card per view, with pagination controls
 *   lg and up — the plain grid described by `gridClassName`, untouched
 *
 * Children come straight from the calling server component, so the cards stay server
 * rendered; only the track and its controls are client code.
 */
export function CardCarousel({
  children,
  gridClassName,
  peek = false,
  controls = "dots",
}: {
  children: ReactNode;
  /** the `lg:` grid this collapses back into on desktop */
  gridClassName: string;
  /** show a sliver of the next card (導入事例) instead of one full-width card */
  peek?: boolean;
  controls?: "dots" | "arrows";
}) {
  // Read labels here rather than taking them as props: the callers are server
  // components, and a message formatter cannot cross that boundary.
  const t = useTranslations("site.carousel");
  const track = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const items = Children.toArray(children);

  // Read the active card straight off scroll position — no timers, and it stays
  // correct whether the move came from a swipe or from a control.
  const sync = useCallback(() => {
    const el = track.current;
    if (!el) return;
    const step = el.scrollWidth / Math.max(items.length, 1);
    setActive(Math.min(items.length - 1, Math.max(0, Math.round(el.scrollLeft / step))));
  }, [items.length]);

  useEffect(() => {
    const el = track.current;
    if (!el) return;
    let frame = 0;
    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(sync);
    };
    el.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      el.removeEventListener("scroll", onScroll);
    };
  }, [sync]);

  const goTo = useCallback(
    (index: number) => {
      const el = track.current;
      if (!el) return;
      const next = Math.min(items.length - 1, Math.max(0, index));
      const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      el.scrollTo({
        left: (el.scrollWidth / Math.max(items.length, 1)) * next,
        behavior: reduced ? "auto" : "smooth",
      });
    },
    [items.length],
  );

  return (
    <>
      {/* ── mobile / tablet: swipe track ───────────────────────────────── */}
      <div className="lg:hidden">
        {/* -mx-6 cancels the Container gutter so the track runs edge to edge, then
            the scroll padding puts each card back on the gutter when it snaps. */}
        <div
          ref={track}
          /* scroll-px must match px, or snapping drags the first card flush to the
             container edge and the gutter is lost. */
          className="-mx-6 flex snap-x snap-mandatory scroll-px-6 gap-[12px] overflow-x-auto scroll-smooth px-6 [scrollbar-width:none] md:-mx-8 md:scroll-px-8 md:px-8 [&::-webkit-scrollbar]:hidden"
        >
          {items.map((child, i) => (
            <div
              key={i}
              className={`shrink-0 snap-start ${peek ? "w-[86%] max-w-[500px]" : "w-full"}`}
            >
              {child}
            </div>
          ))}
        </div>

        {items.length > 1 &&
          (controls === "dots" ? (
            <div className="mt-[24px] flex items-center justify-center">
              {items.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => goTo(i)}
                  aria-label={t("goTo", { n: i + 1 })}
                  aria-current={i === active}
                  /* 44px hit area around a 8px dot */
                  className="flex h-[44px] w-[24px] items-center justify-center"
                >
                  <span
                    className="h-[8px] w-[8px] rounded-full transition-colors"
                    style={{ background: i === active ? "#131316" : "#D1D1D6" }}
                  />
                </button>
              ))}
            </div>
          ) : (
            <div className="mt-[24px] flex items-center justify-center gap-[16px]">
              <button
                type="button"
                onClick={() => goTo(active - 1)}
                aria-label={t("prev")}
                className="flex h-[50px] w-[50px] items-center justify-center rounded-[10px] bg-[#26272B] transition-opacity hover:opacity-80"
              >
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                  <path
                    d="M9 1L3 7l6 6"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              <button
                type="button"
                onClick={() => goTo(active + 1)}
                aria-label={t("next")}
                className="flex h-[50px] w-[50px] items-center justify-center rounded-[10px] bg-white ring-1 ring-[#E4E4E7] transition-opacity hover:opacity-90"
              >
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                  <path
                    d="M5 1l6 6-6 6"
                    stroke="#414651"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          ))}
      </div>

      {/* ── desktop: the original grid ─────────────────────────────────── */}
      <div className={`hidden lg:grid ${gridClassName}`}>{children}</div>
    </>
  );
}
