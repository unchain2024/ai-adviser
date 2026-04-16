"use client";

import { useTranslations } from "next-intl";
import { SectionReveal } from "@/components/ui/SectionReveal";
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
          {steps.map((i) => (
            <div key={i} className="flex flex-1 flex-col sm:flex-row sm:items-end">
              {/* Step content with ascending effect */}
              <div
                className="flex-1 pb-8"
                style={{ marginTop: `${(2 - i) * 60}px` }}
              >
                {(() => { const Icon = ladderIcons[i]; return <Icon className="h-5 w-5 text-accent" strokeWidth={1.5} />; })()}
                <p className="mt-2 text-[11px] font-semibold tracking-[0.12em] uppercase text-accent">
                  {t(`steps.${i}.step`)}
                </p>
                <p className="mt-3 text-lg font-semibold">
                  {t(`steps.${i}.title`)}
                </p>
                {/* Hairline connector */}
                <div className="mt-4 h-px w-full bg-border-default" />
              </div>

              {/* Connector between steps */}
              {i < steps.length - 1 && (
                <div className="hidden sm:block h-px w-8 bg-border-default mb-8" />
              )}
            </div>
          ))}
        </div>

        <p className="mt-14 max-w-2xl text-sm text-text-secondary">
          {t("closing")}
        </p>
      </div>
    </SectionReveal>
  );
}
