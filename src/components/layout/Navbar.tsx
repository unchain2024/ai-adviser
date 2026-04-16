"use client";

import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import { Menu, X } from "lucide-react";
import { LanguageToggle } from "./LanguageToggle";

const NAV_KEYS = [
  { key: "services", href: "#services" },
  { key: "pricing", href: "#pricing" },
  { key: "cases", href: "#testimonials" },
  { key: "founder", href: "#founder" },
  { key: "news", href: "#news" },
] as const;

export function Navbar() {
  const t = useTranslations("nav");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`sticky top-0 z-50 border-b border-border-subtle transition-colors duration-150 ${
        scrolled ? "bg-bg-primary/92 backdrop-blur-[12px]" : "bg-bg-primary"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-[1120px] items-center justify-between px-6 md:px-12">
        {/* Left: Brand */}
        <a href="#" className="flex flex-col">
          <span className="font-inter text-[18px] font-semibold tracking-[0.02em] text-text-primary">
            {t("brand")}
          </span>
          <span className="text-[11px] font-semibold tracking-[0.12em] text-text-tertiary uppercase">
            {t("subtitle")}
          </span>
        </a>

        {/* Center: Desktop links */}
        <div className="hidden items-center gap-10 lg:flex">
          {NAV_KEYS.map((l) => (
            <a
              key={l.key}
              href={l.href}
              className="text-[14px] font-medium text-text-secondary transition-colors duration-150 hover:text-accent hover:underline hover:underline-offset-[6px]"
            >
              {t(l.key)}
            </a>
          ))}
        </div>

        {/* Right: Language + CTA */}
        <div className="hidden items-center gap-5 lg:flex">
          <LanguageToggle />
          <a
            href="#contact"
            className="inline-flex h-[44px] items-center rounded-sm bg-accent px-6 text-[14px] font-medium text-white transition-colors duration-150 hover:bg-accent-hover"
          >
            {t("cta")}
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menu"
        >
          {mobileOpen ? (
            <X className="h-6 w-6 text-text-primary" />
          ) : (
            <Menu className="h-6 w-6 text-text-primary" />
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="border-t border-border-subtle px-6 pb-6 lg:hidden">
          {NAV_KEYS.map((l) => (
            <a
              key={l.key}
              href={l.href}
              className="block py-3 text-[14px] font-medium text-text-secondary transition-colors duration-150 hover:text-accent"
              onClick={() => setMobileOpen(false)}
            >
              {t(l.key)}
            </a>
          ))}
          <div className="mt-4 flex items-center gap-4">
            <LanguageToggle />
          </div>
          <a
            href="#contact"
            className="mt-5 flex h-[44px] w-full items-center justify-center rounded-sm bg-accent text-[14px] font-medium text-white transition-colors duration-150 hover:bg-accent-hover"
            onClick={() => setMobileOpen(false)}
          >
            {t("cta")}
          </a>
        </div>
      )}
    </nav>
  );
}
