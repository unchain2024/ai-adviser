"use client";

import { useState } from "react";
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import { Container, contactHref } from "./ui";
import { SectionLink } from "./SectionLink";
import { LanguageToggle } from "./LanguageToggle";

/* 対象企業 ＞ ご支援の流れ ＞ 成果物 ＞ 料金 ＞ よくある質問。
   「導入事例」は掲載許諾済みの事例を公開できるまでナビに出さない。 */
const LINKS = [
  { key: "audience", href: "#audience" },
  { key: "process", href: "#process" },
  { key: "deliverables", href: "#deliverables" },
  { key: "pricing", href: "#pricing" },
  { key: "faq", href: "#faq" },
] as const;

export function Navbar() {
  const t = useTranslations("site.nav");
  const locale = useLocale();
  const [open, setOpen] = useState(false);

  return (
    <div className="sticky top-0 z-50 pt-4">
      <Container>
        <nav className="rounded-[16px] bg-white shadow-[0_2px_10px_rgba(0,0,0,0.06)] ring-1 ring-[#E4E4E7]">
          <div className="flex h-[62px] items-center pr-[11px] pl-4 sm:pr-[17px] sm:pl-6">
            <SectionLink href="#top" className="flex shrink-0 items-center" aria-label="AI ADVISOR">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/art/logo-dark.svg"
                alt="AI ADVISOR by UNCHAIN"
                width={108}
                height={29}
                className="w-[92px] sm:w-[108px]"
              />
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

            <div className="ml-auto flex items-center gap-2 sm:gap-4">
              <LanguageToggle />
              <Link
                href={contactHref(locale)}
                className="btn-dark hidden h-[36px] items-center rounded-[8px] px-[13px] text-[14px] font-medium lg:inline-flex"
              >
                {t("cta")}
              </Link>
              <button
                type="button"
                className="btn-dark flex h-[40px] w-[40px] items-center justify-center rounded-[10px] lg:hidden"
                aria-expanded={open}
                aria-label="Menu"
                onClick={() => setOpen(!open)}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  {open ? (
                    <path d="M6 6l12 12M18 6L6 18" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
                  ) : (
                    <path d="M4 7h16M4 12h16M4 17h16" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
                  )}
                </svg>
              </button>
            </div>
          </div>

          {open && (
            <div className="border-t border-[#E4E4E7] px-4 pt-2 pb-5 sm:px-6 lg:hidden">
              {LINKS.map((l) => (
                <SectionLink
                  key={l.key}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="flex min-h-[44px] items-center text-[15px] text-[#131316]"
                >
                  {t(l.key)}
                </SectionLink>
              ))}
              <Link
                href={contactHref(locale)}
                onClick={() => setOpen(false)}
                className="btn-dark mt-3 flex h-[44px] items-center justify-center rounded-[8px] text-[14px] font-medium"
              >
                {t("cta")}
              </Link>
            </div>
          )}
        </nav>
      </Container>
    </div>
  );
}
