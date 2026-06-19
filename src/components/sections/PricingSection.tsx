"use client";

import { useTranslations } from "next-intl";
import { SectionReveal } from "@/components/ui/SectionReveal";
import { Scale, ShieldCheck, GraduationCap, Terminal } from "lucide-react";

const assuranceIcons = [Scale, ShieldCheck, GraduationCap];

export function PricingSection({
  onSelectPlan,
}: {
  onSelectPlan: (plan: string) => void;
}) {
  const t = useTranslations("pricing");
  const monthlyPlans = [0, 1, 2];
  const assurances = [0, 1, 2];

  function handlePlanClick(planIndex: number) {
    const planName = t(`plans.${planIndex}.name`);
    onSelectPlan(planName);
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <SectionReveal id="pricing" className="bg-bg-primary">
      <div className="mx-auto max-w-[1200px] px-6 py-24 md:px-12 md:py-32">
        <span className="inline-block rounded-full bg-bg-secondary px-4 py-1.5 text-[11px] font-medium tracking-[0.12em] text-text-tertiary uppercase">
          Plans
        </span>
        <h2 className="mt-6 font-[var(--font-display)] text-[32px] font-light leading-[1.2] tracking-[-0.02em] text-text-primary md:text-[42px]">
          {t("title")}
        </h2>
        <p className="mt-4 max-w-2xl text-[15px] leading-[1.8] text-text-secondary">
          {t("subtitle")}
        </p>

        {/* 3 Monthly plan cards */}
        <div className="relative mx-auto mt-12 grid max-w-5xl gap-5 lg:grid-cols-3">
          {monthlyPlans.map((i) => {
            const isRecommended = i === 1;
            return (
              <div
                key={i}
                className={`relative flex flex-col rounded-[20px] p-8 transition-all duration-200 hover-lift ${
                  isRecommended
                    ? "bg-accent text-white shadow-lg"
                    : "bg-bg-secondary shadow-sm"
                }`}
              >
                {isRecommended && (
                  <span className="absolute -top-3 left-6 rounded-full bg-white px-4 py-1 text-[11px] font-semibold tracking-[0.08em] text-accent uppercase">
                    {t("recommended")}
                  </span>
                )}

                <p className={`text-[11px] font-medium tracking-[0.1em] uppercase ${
                  isRecommended ? "text-white/60" : "text-text-tertiary"
                }`}>
                  {t(`plans.${i}.num`)}
                </p>
                <h3 className={`mt-1 text-[20px] font-medium ${
                  isRecommended ? "" : "text-text-primary"
                }`}>
                  {t(`plans.${i}.name`)}
                </h3>

                {/* Price */}
                <div className={`mt-6 border-t pt-6 ${
                  isRecommended ? "border-white/20" : "border-border-subtle"
                }`}>
                  <span className="text-[36px] font-light tabular-nums tracking-tight">
                    {t(`plans.${i}.price`)}
                  </span>
                  {t(`plans.${i}.period`) && (
                    <span className={`ml-1 text-[13px] ${
                      isRecommended ? "text-white/60" : "text-text-tertiary"
                    }`}>
                      {t(`plans.${i}.period`)}
                    </span>
                  )}
                </div>

                {/* Target */}
                <div className={`mt-5 border-t pt-5 ${
                  isRecommended ? "border-white/20" : "border-border-subtle"
                }`}>
                  <p className={`text-[11px] font-medium uppercase ${
                    isRecommended ? "text-white/60" : "text-text-tertiary"
                  }`}>
                    {t("targetLabel")}
                  </p>
                  <p className={`mt-1 text-[13px] ${
                    isRecommended ? "text-white/80" : "text-text-secondary"
                  }`}>
                    {t(`plans.${i}.target`)}
                  </p>
                </div>

                {/* Includes */}
                <div className={`mt-5 border-t pt-5 ${
                  isRecommended ? "border-white/20" : "border-border-subtle"
                }`}>
                  <p className={`text-[11px] font-medium uppercase ${
                    isRecommended ? "text-white/60" : "text-text-tertiary"
                  }`}>
                    {t("includesLabel")}
                  </p>
                  <div className="mt-3 space-y-2">
                    {(() => {
                      const count = i === 0 ? 3 : i === 1 ? 4 : 3;
                      return Array.from({ length: count }, (_, j) => (
                        <p key={j} className={`flex items-start gap-2 text-[13px] ${
                          isRecommended ? "text-white/80" : "text-text-secondary"
                        }`}>
                          <span className={`mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full ${
                            isRecommended ? "bg-white/60" : "bg-accent"
                          }`} />
                          {t(`plans.${i}.includes.${j}`)}
                        </p>
                      ));
                    })()}
                  </div>
                </div>

                <p className={`mt-auto pt-5 text-[12px] italic ${
                  isRecommended ? "text-white/50" : "text-text-tertiary"
                }`}>
                  {t(`plans.${i}.closing`)}
                </p>

                <div className={`mt-5 border-t pt-5 ${
                  isRecommended ? "border-white/20" : "border-border-subtle"
                }`}>
                  <button
                    onClick={() => handlePlanClick(i)}
                    className={`block w-full rounded-full py-3 text-center text-[13px] font-medium transition-all duration-150 ${
                      isRecommended
                        ? "bg-white text-accent hover:bg-white/90"
                        : "border border-accent text-accent hover:bg-accent hover:text-white"
                    }`}
                  >
                    {t("contactBtn")}
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Spot plan: Claude Code */}
        <div className="mx-auto mt-8 max-w-5xl">
          <div className="flex flex-col gap-6 rounded-[20px] bg-bg-secondary p-8 shadow-sm md:flex-row md:items-center md:justify-between">
            <div className="flex items-start gap-5">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-accent-soft">
                <Terminal className="h-5 w-5 text-accent" strokeWidth={1.5} />
              </div>
              <div>
                <div className="flex items-center gap-3">
                  <h3 className="text-[18px] font-medium text-text-primary">
                    {t("plans.3.name")}
                  </h3>
                  <span className="rounded-full bg-accent/10 px-3 py-0.5 text-[11px] font-medium tracking-[0.06em] text-accent uppercase">
                    {t("plans.3.num")}
                  </span>
                </div>
                <p className="mt-1 text-[13px] text-text-secondary">
                  {t("plans.3.target")}
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {[0, 1, 2].map((j) => (
                    <span key={j} className="rounded-full bg-bg-primary px-3 py-1 text-[12px] text-text-secondary shadow-sm">
                      {t(`plans.3.includes.${j}`)}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex shrink-0 flex-col items-end gap-3">
              <div className="text-right">
                <span className="text-[32px] font-light tabular-nums tracking-tight text-text-primary">
                  {t("plans.3.price")}
                </span>
                <span className="ml-2 text-[13px] text-text-tertiary">
                  {t("plans.3.period")}
                </span>
              </div>
              <button
                onClick={() => handlePlanClick(3)}
                className="rounded-full border border-accent px-6 py-2.5 text-[13px] font-medium text-accent transition-all duration-150 hover:bg-accent hover:text-white"
              >
                {t("contactBtn")}
              </button>
            </div>
          </div>
        </div>

        <p className="mt-6 max-w-2xl text-[12px] text-text-tertiary">
          {t("footnote")}
        </p>

        {/* Assurances */}
        <div className="mx-auto mt-16 max-w-3xl">
          <div className="grid gap-8 sm:grid-cols-3">
            {assurances.map((i) => {
              const Icon = assuranceIcons[i];
              return (
                <div key={i} className="text-center">
                  <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-full bg-accent-soft">
                    <Icon className="h-5 w-5 text-accent" strokeWidth={1.5} />
                  </div>
                  <p className="mt-3 text-[14px] font-medium">
                    {t(`assurances.${i}.title`)}
                  </p>
                  <p className="mt-1 text-[12px] text-text-secondary">
                    {t(`assurances.${i}.desc`)}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="mt-10 text-center">
            <a
              href="#contact"
              className="inline-flex items-center rounded-full border border-border-default px-6 py-2.5 text-[13px] font-medium text-accent transition-all duration-150 hover:border-accent hover:bg-accent hover:text-white"
            >
              {t("cta")} &rarr;
            </a>
          </div>
        </div>
      </div>
    </SectionReveal>
  );
}
