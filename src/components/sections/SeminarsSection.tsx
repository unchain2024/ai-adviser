"use client";

import { useTranslations, useLocale } from "next-intl";
import { SectionReveal } from "@/components/ui/SectionReveal";
import { StaggerReveal } from "@/components/ui/StaggerReveal";
import seminarsData from "@/data/seminars.json";

type Seminar = {
  id: string;
  status: string;
  format: string;
  date: string;
  time: string;
  title: { ja: string; en: string };
  desc: { ja: string; en: string };
};

export function SeminarsSection() {
  const t = useTranslations("seminars");
  const locale = useLocale() as "ja" | "en";
  const seminars = seminarsData as Seminar[];

  if (seminars.length === 0) return null;

  return (
    <SectionReveal id="seminars" className="bg-bg-primary">
      <div className="mx-auto max-w-[1120px] px-6 py-40 md:py-[200px]">
        <p className="text-[11px] font-semibold tracking-[0.12em] uppercase text-accent">
          14
        </p>
        <h2 className="mt-4 text-[40px] font-medium leading-[1.2] tracking-[-0.01em]">
          {t("title")}
        </h2>

        <div className="mt-16 divide-y divide-border-default border-t border-border-default">
          {seminars.map((s, idx) => (
            <StaggerReveal key={s.id} index={idx}>
              <div className="group flex flex-col gap-3 py-5 transition-all duration-200 hover:pl-2 cursor-pointer md:flex-row md:items-center md:gap-6">
                {/* Left meta */}
                <div className="flex items-center gap-3 shrink-0">
                  <span className="text-sm tabular-nums font-[Inter,sans-serif] text-text-tertiary group-hover:text-accent transition-colors duration-150">
                    {s.date}
                  </span>
                  <span className="text-[11px] font-medium tracking-[0.08em] text-text-tertiary uppercase group-hover:text-accent transition-colors duration-150">
                    {s.format === "webinar" ? t("webinar") : t("onsite")}
                  </span>
                  <span className="bg-accent-soft px-2 py-0.5 text-[11px] font-semibold text-accent rounded-sm transition-colors duration-200 group-hover:bg-accent group-hover:text-white">
                    {t("statusOpen")}
                  </span>
                </div>

                {/* Title */}
                <h3 className="flex-1 text-base font-semibold group-hover:text-accent transition-colors duration-150">
                  {s.title[locale]}
                </h3>

                {/* Arrow */}
                <span className="hidden md:inline-block text-text-tertiary transition-all duration-200 group-hover:translate-x-2 group-hover:text-accent">
                  →
                </span>
              </div>
            </StaggerReveal>
          ))}
        </div>
      </div>
    </SectionReveal>
  );
}
