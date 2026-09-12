"use client";

import type { AnchorHTMLAttributes, MouseEvent } from "react";
import { useLocale } from "next-intl";
import { usePathname } from "next/navigation";

/**
 * In-page navigation for the one-page layout. Scrolls smoothly to the section
 * and leaves the address bar clean — a bare "#pricing" is noise on a site that
 * has no separate pricing page.
 *
 * Renders a real <a href="#…">, so it stays right-clickable and crawlable, and
 * still works if JS hasn't run. `scroll-margin-top` on the sections keeps the
 * target clear of the sticky navbar.
 *
 * The standalone pages (/contact) share the navbar and footer, so a "#pricing"
 * there has nothing to scroll to. On those pages the same links resolve to
 * "/{locale}#pricing" and navigate home instead.
 */
export function SectionLink({
  href,
  onClick,
  children,
  ...rest
}: AnchorHTMLAttributes<HTMLAnchorElement> & { href: string }) {
  const locale = useLocale();
  const pathname = usePathname();
  const home = `/${locale}`;
  const onHome = pathname === home || pathname === `${home}/`;
  const isHash = href.startsWith("#");
  const resolved =
    isHash && !onHome ? (href === "#top" ? home : `${home}${href}`) : href;

  function handleClick(event: MouseEvent<HTMLAnchorElement>) {
    onClick?.(event);

    // let modified clicks (new tab, etc.) behave normally
    if (event.defaultPrevented || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) {
      return;
    }
    if (!isHash || !onHome) return;

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
    <a href={resolved} onClick={handleClick} {...rest}>
      {children}
    </a>
  );
}
