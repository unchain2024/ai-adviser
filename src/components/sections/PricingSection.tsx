"use client";

import { useTranslations } from "next-intl";
import { SectionReveal } from "@/components/ui/SectionReveal";
import { Scale, ShieldCheck, GraduationCap } from "lucide-react";

const assuranceIcons = [Scale, ShieldCheck, GraduationCap];

export function PricingSection({
  onSelectPlan,
}: {
  onSelectPlan: (plan: string) => void;
}) {
  const t = useTranslations("pricing");
  const plans = [0, 1, 2];
  const assurances = [0, 1, 2];

  function handlePlanClick(planIndex: number) {
    const planName = t(`plans.${planIndex}.name`);
    onSelectPlan(planName);
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <SectionReveal id="pricing" className="bg-bg-secondary">
      <div className="mx-auto max-w-[1120px] px-6 py-40 md:py-[200px]">
        <p className="text-[11px] font-semibold tracking-[0.12em] uppercase text-accent">
          11
        </p>
        <h2 className="mt-4 text-[40px] font-medium leading-[1.2] tracking-[-0.01em]">
          {t("title")}
        </h2>
        <p className="mt-4 max-w-2xl text-[17px] text-text-secondary">
          {t("subtitle")}
        </p>

        {/* 3 Plans */}
        <div className="relative mx-auto mt-16 grid max-w-5xl gap-8 lg:grid-cols-3">
          {plans.map((i) => {
            const isRecommended = i === 1;
            return (
              <div
                key={i}
                className={`relative flex flex-col rounded-sm bg-bg-primary p-12 ${
                  isRecommended
                    ? "border border-accent"
                    : "border border-border-subtle"
                }`}
              >
                {isRecommended && (
                  <p className="text-[11px] font-semibold tracking-[0.12em] uppercase text-accent">
                    {t("recommended")}
                  </p>
                )}

                {/* Plan name */}
                <p className="mt-1 text-[11px] font-semibold tracking-[0.14em] uppercase text-text-tertiary">
                  {t(`plans.${i}.num`)}
                </p>
                <h3 className="mt-2 text-xl font-semibold">
                  {t(`plans.${i}.name`)}
                </h3>

                {/* Price */}
                <div className="mt-6 border-t border-border-subtle pt-6">
                  <span className="text-[40px] font-medium tabular-nums leading-[1.2] tracking-[-0.01em]">
                    {t(`plans.${i}.price`)}
                  </span>
                  {t(`plans.${i}.period`) && (
                    <span className="ml-1 text-sm text-text-tertiary">
                      {t(`plans.${i}.period`)}
                    </span>
                  )}
                </div>

                {/* Target */}
                <div className="mt-6 border-t border-border-subtle pt-6">
                  <p className="text-xs font-semibold text-text-tertiary">
                    {t("targetLabel")}
                  </p>
                  <p className="mt-1 text-sm text-text-secondary">
                    {t(`plans.${i}.target`)}
                  </p>
                </div>

                {/* Includes */}
                <div className="mt-6 border-t border-border-subtle pt-6">
                  <p className="text-xs font-semibold text-text-tertiary">
                    {t("includesLabel")}
                  </p>
                  <div className="mt-3 space-y-2.5">
                    {(() => {
                      const count = i === 0 ? 3 : i === 1 ? 4 : 3;
                      return Array.from({ length: count }, (_, j) => (
                        <p key={j} className="text-sm text-text-secondary">
                          <span className="inline-block w-1.5 h-1.5 rounded-full bg-accent mr-2 align-middle shrink-0" />
                          {t(`plans.${i}.includes.${j}`)}
                        </p>
                      ));
                    })()}
                  </div>
                </div>

                {/* Closing + CTA */}
                <p className="mt-auto pt-6 text-xs italic text-text-tertiary">
                  {t(`plans.${i}.closing`)}
                </p>

                <div className="mt-6 border-t border-border-subtle pt-6">
                  <button
                    onClick={() => handlePlanClick(i)}
                    className={`block w-full rounded-sm py-3 text-center text-sm font-medium transition-colors duration-150 ${
                      isRecommended
                        ? "bg-accent text-bg-primary hover:bg-accent-hover"
                        : "border border-accent text-accent hover:text-accent-hover"
                    }`}
                  >
                    {t("contactBtn")}
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Footnote */}
        <p className="mt-8 max-w-2xl text-xs text-text-tertiary">
          {t("footnote")}
        </p>

        {/* Assurances */}
        <div className="mx-auto mt-16 max-w-3xl">
          <div className="grid gap-6 sm:grid-cols-3">
            {assurances.map((i) => {
              const Icon = assuranceIcons[i];
              return (
              <div key={i} className="text-center">
                <Icon className="mx-auto h-5 w-5 text-accent" strokeWidth={1.5} />
                <p className="mt-2 text-[11px] font-semibold tracking-[0.12em] uppercase text-text-tertiary">
                  {t(`assurances.${i}.num`)}
                </p>
                <p className="mt-1 text-sm font-semibold">
                  {t(`assurances.${i}.title`)}
                </p>
                <p className="mt-2 text-xs text-text-secondary">
                  {t(`assurances.${i}.desc`)}
                </p>
              </div>
              );
            })}
          </div>

          <div className="mt-10 text-center">
            <a
              href="#contact"
              className="text-sm font-medium text-accent transition-colors duration-150 hover:text-accent-hover"
            >
              {t("cta")} &rarr;
            </a>
          </div>
        </div>
      </div>
    </SectionReveal>
  );
}
