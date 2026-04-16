"use client";

import { useTranslations } from "next-intl";
import { SectionReveal } from "@/components/ui/SectionReveal";
import { Headphones, ListChecks, Map, Rocket, RefreshCw } from "lucide-react";

const stageIcons = [Headphones, ListChecks, Map, Rocket, RefreshCw];

export function ServiceFlowSection() {
  const t = useTranslations("serviceFlow");
  const stages = [0, 1, 2, 3, 4];

  return (
    <SectionReveal className="bg-bg-primary">
      <div className="mx-auto max-w-[1120px] px-6 py-40 md:px-12 md:py-[200px]">
        <p className="text-[11px] font-semibold tracking-[0.12em] uppercase text-accent">
          04
        </p>
        <h2 className="mt-6 text-[40px] font-medium leading-[1.2] tracking-[-0.01em] text-text-primary">
          {t("title")}
        </h2>
        <p className="mt-6 max-w-[640px] text-[17px] text-text-secondary">
          {t("desc")}
        </p>

        {/* Desktop: horizontal timeline */}
        <div className="mt-16 hidden md:flex md:items-start">
          {stages.map((i) => (
            <div key={i} className="flex flex-1 flex-col items-center">
              <div className="flex w-full items-center">
                {i > 0 && <div className="h-px flex-1 bg-border-subtle" />}
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 border-accent bg-bg-primary">
                  {(() => { const Icon = stageIcons[i]; return <Icon className="h-5 w-5 text-accent" strokeWidth={1.5} />; })()}
                </div>
                {i < 4 && <div className="h-px flex-1 bg-border-subtle" />}
              </div>
              <p className="mt-2 text-center text-[11px] font-semibold tracking-[0.08em] uppercase text-accent">
                {String(i + 1).padStart(2, "0")}
              </p>
              <p className="mt-1 text-center text-sm font-semibold text-text-primary">
                {t(`stages.${i}.title`)}
              </p>
              <p className="mt-1 text-center text-xs text-text-secondary">
                {t(`stages.${i}.desc`)}
              </p>
            </div>
          ))}
        </div>

        {/* Mobile: vertical timeline */}
        <div className="mt-16 flex flex-col md:hidden">
          {stages.map((i) => (
            <div key={i} className="flex items-start">
              <div className="flex flex-col items-center">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 border-accent bg-bg-primary">
                  {(() => { const Icon = stageIcons[i]; return <Icon className="h-5 w-5 text-accent" strokeWidth={1.5} />; })()}
                </div>
                {i < 4 && <div className="mx-auto w-px flex-1 bg-border-subtle" style={{ minHeight: 48 }} />}
              </div>
              <div className="ml-4 pb-10">
                <p className="text-sm font-semibold text-text-primary">
                  {t(`stages.${i}.title`)}
                </p>
                <p className="mt-1 text-xs text-text-secondary">
                  {t(`stages.${i}.desc`)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionReveal>
  );
}
