"use client";

import { useTranslations } from "next-intl";
import { SectionReveal } from "@/components/ui/SectionReveal";
import { StaggerReveal } from "@/components/ui/StaggerReveal";
import { Handshake, BrainCircuit, Telescope } from "lucide-react";

const ladderIcons = [Handshake, BrainCircuit, Telescope];

export function LadderSection() {
  const t = useTranslations("ladder");
  const steps = [0, 1, 2];

  return (
    <SectionReveal className="bg-bg-tertiary">
      <div className="mx-auto max-w-[1120px] px-6 py-40 md:py-[200px]">
        <p className="text-[11px] font-semibold tracking-[0.12em] uppercase text-accent">
          13
        </p>
        <h2 className="mt-4 text-[40px] font-medium leading-[1.2] tracking-[-0.01em]">
          {t("title")}
        </h2>

        {/* Rising stair visualization */}
        <div className="mt-20 flex flex-col gap-0 sm:flex-row sm:items-end sm:gap-0">
          {steps.map((i) => {
            const Icon = ladderIcons[i];
            return (
              <StaggerReveal key={i} index={i} className="flex flex-1 flex-col sm:flex-row sm:items-end">
                {/* Step content with ascending effect */}
                <div
                  className="group flex-1 cursor-default rounded-sm p-6 pb-8 transition-all duration-300 hover:bg-bg-primary hover:shadow-md"
                  style={{ marginTop: `${(2 - i) * 60}px` }}
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent-soft transition-colors duration-300 group-hover:bg-accent">
                    <Icon className="h-5 w-5 text-accent transition-colors duration-300 group-hover:text-white" strokeWidth={1.5} />
                  </div>
                  <p className="mt-3 text-[11px] font-semibold tracking-[0.12em] uppercase text-accent">
                    {t(`steps.${i}.step`)}
                  </p>
                  <p className="mt-3 text-lg font-semibold">
                    {t(`steps.${i}.title`)}
                  </p>
                  {/* Hairline connector */}
                  <div className="mt-4 h-px w-full bg-border-default transition-all duration-300 group-hover:bg-accent" />
                </div>

                {/* Connector between steps */}
                {i < steps.length - 1 && (
                  <div className="hidden sm:block h-px w-8 bg-border-default mb-8" />
                )}
              </StaggerReveal>
            );
          })}
        </div>

        <p className="mt-14 max-w-2xl text-sm text-text-secondary">
          {t("closing")}
        </p>
      </div>
    </SectionReveal>
  );
}
