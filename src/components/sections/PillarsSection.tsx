"use client";

import { useTranslations } from "next-intl";
import { SectionReveal } from "@/components/ui/SectionReveal";
import { Layers, BrainCircuit, ShieldCheck } from "lucide-react";

const pillarIcons = [Layers, BrainCircuit, ShieldCheck];

export function PillarsSection() {
  const t = useTranslations("pillars");
  const pillars = [0, 1, 2];
  const steps = [0, 1, 2, 3, 4, 5, 6];

  return (
    <SectionReveal id="services" className="bg-bg-tertiary">
      <div className="mx-auto max-w-[1120px] px-6 py-40 md:px-12 md:py-[200px]">
        <p className="text-[11px] font-semibold tracking-[0.12em] uppercase text-accent">
          03
        </p>
        <h2 className="mt-6 text-[40px] font-medium leading-[1.2] tracking-[-0.01em] text-text-primary">
          {t("title")}
        </h2>

        {/* Three pillars */}
        <div className="mt-14 grid gap-12 lg:grid-cols-3">
          {pillars.map((i) => (
            <div
              key={i}
              className={`flex flex-col${i < 2 ? " lg:border-r lg:border-border-subtle lg:pr-12" : ""}`}
            >
              {(() => { const Icon = pillarIcons[i]; return <Icon className="h-6 w-6 text-accent" strokeWidth={1.5} />; })()}
              <p className="mt-3 text-[11px] font-semibold tracking-[0.12em] uppercase text-accent">
                Pillar {String(i + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-8 text-[28px] font-medium leading-[1.35] text-text-primary">
                {t(`items.${i}.name`)}
              </h3>
              <p className="mt-2 text-sm text-text-tertiary">
                {t(`items.${i}.subtitle`)}
              </p>
              <p className="mt-8 text-[15px] leading-[1.95] text-text-secondary">
                {t(`items.${i}.desc`)}
              </p>
              <div className="mt-8 h-px w-6 bg-accent" />
              <a
                href="#"
                className="mt-4 text-sm text-accent transition-colors duration-150 hover:text-accent/80"
              >
                詳細 →
              </a>
            </div>
          ))}
        </div>

        {/* 7-step rail */}
        <div className="mt-20">
          <h3 className="text-xl font-medium text-text-primary">
            {t("stepsTitle")}
          </h3>
          <div className="mt-10 flex flex-col gap-4 md:flex-row md:items-start md:gap-0">
            {steps.map((i) => (
              <div key={i} className="flex flex-1 items-center md:flex-col md:items-center">
                <div className="flex w-[120px] flex-col items-center">
                  <div className="h-2 w-2 rounded-full bg-accent" />
                  <p className="mt-2 text-[11px] font-semibold tracking-[0.12em] uppercase text-accent">
                    {t(`steps.${i}.num`)}
                  </p>
                  <p className="mt-1 text-sm font-medium text-text-primary text-center">
                    {t(`steps.${i}.title`)}
                  </p>
                </div>
                {i < 6 && (
                  <div className="ml-auto hidden h-px flex-1 bg-border-subtle md:mx-0 md:block" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </SectionReveal>
  );
}
