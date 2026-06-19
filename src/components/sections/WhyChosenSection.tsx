"use client";

import { useTranslations } from "next-intl";
import { SectionReveal } from "@/components/ui/SectionReveal";
import { FlaskConical, Scale, ShieldCheck, Check } from "lucide-react";

const reasonIcons = [FlaskConical, Scale, ShieldCheck];

export function WhyChosenSection() {
  const t = useTranslations("whyChosen");
  const tc = useTranslations("comparison");
  const reasons = [0, 1, 2];
  const rows = [0, 1, 2, 3, 4, 5];

  return (
    <SectionReveal className="bg-bg-secondary">
      <div className="mx-auto max-w-[1200px] px-6 py-24 md:px-12 md:py-32">
        <span className="inline-block rounded-full bg-bg-tertiary px-4 py-1.5 text-[11px] font-medium tracking-[0.12em] text-text-tertiary uppercase">
          Why UNCHAIN
        </span>
        <h2 className="mt-6 font-[var(--font-display)] text-[32px] font-light leading-[1.2] tracking-[-0.02em] text-text-primary md:text-[42px]">
          {t("title")}
        </h2>
        <p className="mt-4 max-w-[640px] text-[15px] leading-[1.8] text-text-secondary">
          {t("intro")}
        </p>

        {/* 3 reasons */}
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {reasons.map((i) => {
            const Icon = reasonIcons[i];
            return (
              <div key={i} className="rounded-[20px] bg-bg-primary p-8 shadow-sm transition-all duration-200 hover:shadow-md">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-accent-soft">
                  <Icon className="h-5 w-5 text-accent" strokeWidth={1.5} />
                </div>
                <h3 className="mt-5 text-[17px] font-medium text-text-primary">
                  {t(`reasons.${i}.title`)}
                </h3>
                <p className="mt-3 text-[14px] leading-[1.8] text-text-secondary">
                  {t(`reasons.${i}.desc`)}
                </p>
              </div>
            );
          })}
        </div>

        {/* Comparison table */}
        <div className="mt-16 rounded-[20px] bg-bg-primary p-8 shadow-sm md:p-10">
          <h3 className="text-[20px] font-medium text-text-primary">
            {tc("title")}
          </h3>

          <div className="mt-6 overflow-hidden rounded-[16px] border border-border-subtle">
            {/* Header */}
            <div className="grid grid-cols-2 bg-bg-secondary px-6 py-3">
              <p className="text-[12px] font-semibold tracking-[0.08em] text-text-tertiary uppercase">
                {tc("headerThem")}
              </p>
              <p className="text-[12px] font-semibold tracking-[0.08em] text-accent uppercase">
                {tc("headerUs")}
              </p>
            </div>

            {/* Rows */}
            {rows.map((i) => (
              <div
                key={i}
                className="grid grid-cols-2 border-t border-border-subtle px-6 py-4 transition-colors duration-150 hover:bg-bg-secondary"
              >
                <p className="text-[13px] text-text-tertiary">
                  {tc(`rows.${i}.them`)}
                </p>
                <div className="flex items-start gap-2 text-[13px] font-medium text-text-primary">
                  <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-accent">
                    <Check className="h-2.5 w-2.5 text-white" strokeWidth={3} />
                  </span>
                  {tc(`rows.${i}.us`)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SectionReveal>
  );
}
