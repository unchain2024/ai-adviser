"use client";

import type { AnchorHTMLAttributes, MouseEvent } from "react";

/**
 * In-page navigation for the one-page layout. Scrolls smoothly to the section
 * and leaves the address bar clean — a bare "#pricing" is noise on a site that
 * has no separate pricing page.
 *
 * Renders a real <a href="#…">, so it stays right-clickable and crawlable, and
 * still works if JS hasn't run. `scroll-margin-top` on the sections keeps the
 * target clear of the sticky navbar.
 */
export function SectionLink({
  href,
  onClick,
  children,
  ...rest
}: AnchorHTMLAttributes<HTMLAnchorElement> & { href: string }) {
  function handleClick(event: MouseEvent<HTMLAnchorElement>) {
    onClick?.(event);

    // let modified clicks (new tab, etc.) behave normally
    if (event.defaultPrevented || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) {
      return;
    }
    if (!href.startsWith("#")) return;

    const id = href.slice(1);
    const target = id === "top" ? document.body : document.getElementById(id);
    if (!target) return;

    event.preventDefault();
    if (id === "top") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }

  return (
    <a href={href} onClick={handleClick} {...rest}>
      {children}
    </a>
  );
}
