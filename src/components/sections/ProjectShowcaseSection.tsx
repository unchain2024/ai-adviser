"use client";

import { useTranslations } from "next-intl";
import { SectionReveal } from "@/components/ui/SectionReveal";

export function ProjectShowcaseSection() {
  const t = useTranslations("projectShowcase");
  const projects = [0, 1, 2];

  return (
    <SectionReveal>
      <div className="mx-auto max-w-[1120px] px-6 py-40 md:px-12 md:py-[200px]">
        <p className="text-[11px] font-semibold tracking-[0.12em] uppercase text-accent">
          08
        </p>
        <h2 className="mt-4 text-[40px] font-medium leading-[1.2] tracking-[-0.01em]">
          {t("title")}
        </h2>
        <p className="mt-4 text-sm text-text-tertiary">
          {t("subtitle")}
        </p>

        <div className="mt-16 space-y-40">
          {projects.map((i) => (
            <div
              key={i}
              className="grid gap-12 lg:grid-cols-[1fr_1fr]"
            >
              <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                <p className="text-[11px] font-semibold tracking-[0.12em] uppercase text-accent">
                  PROJECT {String(i + 1).padStart(2, "0")}
                </p>
                <p className="mt-3 text-sm font-semibold text-accent">
                  {t(`projects.${i}.industry`)}
                </p>
                <h3 className="mt-2 text-[28px] font-medium leading-[1.3]">
                  {t(`projects.${i}.solution`)}
                </h3>
                <p className="mt-4 text-[15px] leading-[1.7] text-text-secondary">
                  {t(`projects.${i}.desc`)}
                </p>
                <a
                  href="#contact"
                  className="mt-4 inline-block text-sm font-medium text-text-primary transition-colors duration-150 hover:text-accent"
                >
                  {t("contactLink")} &rarr;
                </a>
              </div>

              {/* Abstract visual */}
              <div className={`flex items-center justify-center p-12 ${
                i % 2 === 1 ? "lg:order-1" : ""
              }`}>
                <svg viewBox="0 0 200 140" className="h-auto w-full max-w-[300px] opacity-30">
                  <rect x="20" y="20" width="60" height="40" rx="2" fill="none" className="stroke-accent" strokeWidth="0.5" />
                  <rect x="100" y="20" width="80" height="40" rx="2" fill="none" className="stroke-accent" strokeWidth="0.5" />
                  <rect x="40" y="80" width="120" height="40" rx="2" fill="none" className="stroke-accent" strokeWidth="0.5" />
                  <line x1="50" y1="60" x2="50" y2="80" className="stroke-accent" strokeWidth="0.5" />
                  <line x1="140" y1="60" x2="140" y2="80" className="stroke-accent" strokeWidth="0.5" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionReveal>
  );
}
