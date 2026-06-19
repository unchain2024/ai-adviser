"use client";

import { useTranslations } from "next-intl";
import { SectionReveal } from "@/components/ui/SectionReveal";
import { Ban, HelpCircle, Puzzle, PauseCircle, UserX } from "lucide-react";

const problemIcons = [Ban, HelpCircle, Puzzle, PauseCircle, UserX];

export function ProblemSection() {
  const t = useTranslations("problem");
  const tp = useTranslations("painPersonas");
  const items = [0, 1, 2, 3, 4];
  const personas = [0, 1, 2, 3, 4, 5];

  return (
    <SectionReveal className="bg-bg-secondary">
      <div className="mx-auto max-w-[1200px] px-6 py-24 md:px-12 md:py-32">
        <span className="inline-block rounded-full bg-bg-tertiary px-4 py-1.5 text-[11px] font-medium tracking-[0.12em] text-text-tertiary uppercase">
          Challenges
        </span>
        <h2 className="mt-6 font-[var(--font-display)] text-[32px] font-light leading-[1.2] tracking-[-0.02em] text-text-primary md:text-[42px]">
          {t("title")}
        </h2>

        {/* 5 problem cards */}
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {items.map((i) => {
            const Icon = problemIcons[i];
            return (
              <div key={i} className="rounded-[20px] bg-bg-primary p-6 shadow-sm transition-all duration-200 hover:shadow-md">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent-soft">
                  <Icon className="h-5 w-5 text-accent" strokeWidth={1.5} />
                </div>
                <p className="mt-4 text-[15px] font-medium text-text-primary">
                  {t(`items.${i}.label`)}
                </p>
                <p className="mt-2 text-[13px] leading-[1.7] text-text-secondary">
                  {t(`items.${i}.desc`)}
                </p>
              </div>
            );
          })}
        </div>

        {/* Pain persona bullets */}
        <div className="mt-16 rounded-[20px] bg-bg-primary p-8 shadow-sm md:p-10">
          <h3 className="text-[20px] font-medium text-text-primary">
            {tp("title")}
          </h3>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {personas.map((i) => (
              <div key={i} className="flex items-start gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                <p className="text-[14px] leading-[1.7] text-text-secondary">
                  {tp(`items.${i}`)}
                </p>
              </div>
            ))}
          </div>
        </div>

        <p className="mt-12 text-center text-[15px] font-medium text-text-secondary">
          {t("closing")}
        </p>
      </div>
    </SectionReveal>
  );
}
