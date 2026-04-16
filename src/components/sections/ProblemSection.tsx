"use client";

import { useTranslations } from "next-intl";
import { SectionReveal } from "@/components/ui/SectionReveal";
import { Ban, HelpCircle, Puzzle, PauseCircle, UserX } from "lucide-react";

const problemIcons = [Ban, HelpCircle, Puzzle, PauseCircle, UserX];

export function ProblemSection() {
  const t = useTranslations("problem");
  const items = [0, 1, 2, 3, 4];

  return (
    <SectionReveal className="bg-bg-tertiary">
      <div className="mx-auto max-w-[1120px] px-6 py-40 md:px-12 md:py-[200px]">
        <p className="text-[11px] font-semibold tracking-[0.12em] uppercase text-accent">
          01
        </p>
        <h2 className="mt-6 text-[40px] font-medium leading-[1.2] tracking-[-0.01em] text-text-primary">
          {t("title")}
        </h2>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {items.map((i) => {
            const Icon = problemIcons[i];
            return (
            <div key={i}>
              <Icon className="h-5 w-5 text-accent" strokeWidth={1.5} />
              <p className="mt-3 text-[11px] font-semibold tracking-[0.12em] uppercase text-accent">
                {String(i + 1).padStart(2, "0")}
              </p>
              <p className="mt-4 text-lg font-semibold text-text-primary">
                「{t(`items.${i}.label`)}」
              </p>
              <div className="mt-2 h-px w-6 bg-accent" />
              <p className="mt-4 text-sm text-text-secondary">
                {t(`items.${i}.desc`)}
              </p>
            </div>
            );
          })}
        </div>

        <p className="mt-[120px] text-center text-lg font-medium text-text-secondary">
          {t("closing")}
        </p>
      </div>
    </SectionReveal>
  );
}
