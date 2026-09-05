"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Container } from "./ui";
import { SectionLink } from "./SectionLink";
import { LanguageToggle } from "./LanguageToggle";

const LINKS = [
  { key: "process", href: "#process" },
  { key: "deliverables", href: "#deliverables" },
  { key: "audience", href: "#audience" },
  { key: "pricing", href: "#pricing" },
  { key: "faq", href: "#faq" },
] as const;

export function Navbar() {
  const t = useTranslations("site.nav");
  const [open, setOpen] = useState(false);

  return (
    <div className="sticky top-0 z-50 pt-4">
      <Container>
        <nav className="rounded-[16px] bg-white shadow-[0_2px_10px_rgba(0,0,0,0.06)] ring-1 ring-[#E4E4E7]">
          <div className="flex h-[62px] items-center pr-[17px] pl-6">
            <SectionLink href="#top" className="flex shrink-0 items-center" aria-label="AI ADVISOR">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/art/logo-dark.svg" alt="AI ADVISOR by UNCHAIN" width={108} height={29} />
            </SectionLink>

            <span className="mx-[32px] hidden h-[17px] w-px bg-[#E4E4E7] lg:block" aria-hidden="true" />

            <div className="hidden items-center gap-[32px] lg:flex">
              {LINKS.map((l) => (
                <SectionLink
                  key={l.key}
                  href={l.href}
                  className="text-[16px] text-[#131316] transition-opacity duration-150 hover:opacity-60"
                >
                  {t(l.key)}
                </SectionLink>
              ))}
            </div>

            <div className="ml-auto flex items-center gap-4">
              <LanguageToggle />
              <SectionLink
                href="#contact"
                className="btn-dark hidden h-[36px] items-center rounded-[8px] px-[13px] text-[14px] font-medium lg:inline-flex"
              >
                {t("cta")}
              </SectionLink>
              <button
                type="button"
                className="lg:hidden"
                aria-expanded={open}
                aria-label="Menu"
                onClick={() => setOpen(!open)}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  {open ? (
                    <path d="M6 6l12 12M18 6L6 18" stroke="#131316" strokeWidth="2" strokeLinecap="round" />
                  ) : (
                    <path d="M4 7h16M4 12h16M4 17h16" stroke="#131316" strokeWidth="2" strokeLinecap="round" />
                  )}
                </svg>
              </button>
            </div>
          </div>

          {open && (
            <div className="border-t border-[#E4E4E7] px-6 pt-2 pb-5 lg:hidden">
              {LINKS.map((l) => (
                <SectionLink
                  key={l.key}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block py-3 text-[15px] text-[#131316]"
                >
                  {t(l.key)}
                </SectionLink>
              ))}
              <SectionLink
                href="#contact"
                onClick={() => setOpen(false)}
                className="btn-dark mt-3 flex h-[44px] items-center justify-center rounded-[8px] text-[14px] font-medium"
              >
                {t("cta")}
              </SectionLink>
            </div>
          )}
        </nav>
      </Container>
    </div>
  );
}
