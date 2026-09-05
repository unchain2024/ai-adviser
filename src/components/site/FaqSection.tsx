"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Container, Eyebrow } from "./ui";

const ITEMS = [
  ["q1", "a1"],
  ["q2", "a2"],
  ["q3", "a3"],
  ["q4", "a4"],
  ["q5", "a5"],
  ["q6", "a6"],
  ["q7", "a7"],
  ["q8", "a8"],
] as const;

export function FaqSection() {
  const t = useTranslations("site.faq");
  const [open, setOpen] = useState(0);

  return (
    <section id="faq" className="scroll-mt-[78px] bg-white pt-[89px] pb-[88px]">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[466px_1fr] lg:gap-x-0">
          <div className="lg:pt-[32px]">
            <Eyebrow>{t("eyebrow")}</Eyebrow>
            <h2 className="mt-[22px] text-[34px] leading-[1.15] font-bold tracking-[-0.01em] text-black md:text-[46px] lg:text-[55px]">
              {t("title")}
            </h2>
          </div>

          <div>
            {ITEMS.map(([q, a], i) => {
              const isOpen = open === i;
              return (
                <div key={q} className="border-b border-[#E4E4E7] last:border-b-0">
                  <h3>
                    <button
                      type="button"
                      aria-expanded={isOpen}
                      onClick={() => setOpen(isOpen ? -1 : i)}
                      className={`flex w-full items-center justify-between gap-6 pt-[33px] text-left ${isOpen ? "pb-[13px]" : "pb-[33px]"}`}
                    >
                      <span className="text-[16px] leading-[22px] font-medium text-[#131316]">
                        {t(q)}
                      </span>
                      <svg
                        width="16"
                        height="10"
                        viewBox="1300 127 16 10"
                        fill="none"
                        aria-hidden="true"
                        className={`shrink-0 transition-transform duration-200 ${isOpen ? "" : "rotate-180"}`}
                      >
                        <path
                          d="M1314 135L1308 129L1302 135"
                          stroke="#70707B"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>
                  </h3>
                  {isOpen && (
                    <p className="pb-[31px] text-[14px] leading-[20px] text-[#51525C]">
                      {t(a)}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
