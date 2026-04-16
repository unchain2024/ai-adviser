"use client";

import { useTranslations } from "next-intl";
import { SectionReveal } from "@/components/ui/SectionReveal";
import { Check } from "lucide-react";

export function ComparisonSection() {
  const t = useTranslations("comparison");
  const rows = [0, 1, 2, 3, 4, 5];

  return (
    <SectionReveal className="bg-bg-primary">
      <div className="mx-auto max-w-[1120px] px-6 py-40 md:px-12 md:py-[200px]">
        <p className="text-[11px] font-semibold tracking-[0.12em] uppercase text-accent">
          10
        </p>
        <h2 className="mt-4 text-[40px] font-medium leading-[1.2] tracking-[-0.01em]">
          {t("title")}
        </h2>

        <div className="mt-14 max-w-3xl">
          {/* Header row */}
          <div className="grid grid-cols-2 border-b border-border-subtle pb-3">
            <p className="text-[11px] font-semibold tracking-[0.12em] uppercase text-text-tertiary">
              {t("headerThem")}
            </p>
            <p className="text-[11px] font-semibold tracking-[0.12em] uppercase text-text-primary">
              {t("headerUs")}
            </p>
          </div>

          {/* Data rows */}
          {rows.map((i) => (
            <div
              key={i}
              className="grid grid-cols-2 border-b border-border-subtle py-4"
            >
              <p className="text-sm text-text-tertiary">
                {t(`rows.${i}.them`)}
              </p>
              <div className="flex items-start gap-2 text-sm font-medium text-text-primary">
                <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-accent">
                  <Check className="h-2.5 w-2.5 text-white" strokeWidth={3} />
                </span>
                {t(`rows.${i}.us`)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionReveal>
  );
}
