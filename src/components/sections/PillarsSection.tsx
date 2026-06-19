"use client";

import { useTranslations } from "next-intl";
import { SectionReveal } from "@/components/ui/SectionReveal";
import { Layers, BrainCircuit, ShieldCheck, Headphones, ListChecks, Map, Rocket, RefreshCw } from "lucide-react";

const pillarIcons = [Layers, BrainCircuit, ShieldCheck];
const flowIcons = [Headphones, ListChecks, Map, Rocket, RefreshCw];

export function PillarsSection() {
  const t = useTranslations("pillars");
  const tf = useTranslations("serviceFlow");
  const pillars = [0, 1, 2];
  const stages = [0, 1, 2, 3, 4];

  return (
    <SectionReveal id="services" className="bg-bg-primary">
      <div className="mx-auto max-w-[1200px] px-6 py-24 md:px-12 md:py-32">
        <span className="inline-block rounded-full bg-bg-secondary px-4 py-1.5 text-[11px] font-medium tracking-[0.12em] text-text-tertiary uppercase">
          Advisory Services
        </span>
        <h2 className="mt-6 font-[var(--font-display)] text-[32px] font-light leading-[1.2] tracking-[-0.02em] text-text-primary md:text-[42px]">
          {t("title")}
        </h2>

        {/* Three pillars as cards */}
        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {pillars.map((i) => {
            const Icon = pillarIcons[i];
            return (
              <div
                key={i}
                className="group rounded-[20px] bg-bg-secondary p-8 transition-all duration-200 hover:shadow-md"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-bg-primary shadow-sm">
                  <Icon className="h-5 w-5 text-accent" strokeWidth={1.5} />
                </div>
                <h3 className="mt-5 text-[18px] font-medium text-text-primary">
                  {t(`items.${i}.name`)}
                </h3>
                <p className="mt-1 text-[12px] text-text-tertiary">
                  {t(`items.${i}.subtitle`)}
                </p>
                <p className="mt-4 text-[14px] leading-[1.8] text-text-secondary">
                  {t(`items.${i}.desc`)}
                </p>
              </div>
            );
          })}
        </div>

        {/* Service flow timeline */}
        <div className="mt-20 rounded-[20px] bg-bg-secondary p-8 md:p-10">
          <h3 className="text-[20px] font-medium text-text-primary">
            {tf("title")}
          </h3>
          <p className="mt-2 max-w-[640px] text-[14px] text-text-secondary">
            {tf("desc")}
          </p>

          {/* Desktop horizontal flow */}
          <div className="mt-10 hidden md:grid md:grid-cols-5 md:gap-0">
            {stages.map((i) => {
              const Icon = flowIcons[i];
              return (
                <div key={i} className="relative flex flex-col items-center text-center">
                  {i > 0 && (
                    <div className="absolute top-5 right-1/2 left-[-50%] h-px bg-border-default" />
                  )}
                  <div className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full bg-bg-primary shadow-sm">
                    <Icon className="h-4 w-4 text-accent" strokeWidth={1.5} />
                  </div>
                  <p className="mt-3 text-[11px] font-semibold tracking-[0.1em] text-accent uppercase">
                    {String(i + 1).padStart(2, "0")}
                  </p>
                  <p className="mt-1 text-[13px] font-medium text-text-primary">
                    {tf(`stages.${i}.title`)}
                  </p>
                  <p className="mt-1 text-[12px] text-text-tertiary">
                    {tf(`stages.${i}.desc`)}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Mobile vertical flow */}
          <div className="mt-8 space-y-5 md:hidden">
            {stages.map((i) => {
              const Icon = flowIcons[i];
              return (
                <div key={i} className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-bg-primary shadow-sm">
                    <Icon className="h-4 w-4 text-accent" strokeWidth={1.5} />
                  </div>
                  <div>
                    <p className="text-[13px] font-medium text-text-primary">
                      {tf(`stages.${i}.title`)}
                    </p>
                    <p className="mt-0.5 text-[12px] text-text-tertiary">
                      {tf(`stages.${i}.desc`)}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </SectionReveal>
  );
}
