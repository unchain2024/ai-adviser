"use client";

import { useTranslations } from "next-intl";
import { SectionReveal } from "@/components/ui/SectionReveal";
import { TrendingUp, Megaphone, HeadphonesIcon, Radio, BarChart3, Users, FolderCog } from "lucide-react";

const deptIcons = [TrendingUp, Megaphone, HeadphonesIcon, Radio, BarChart3, Users, FolderCog];

export function DepartmentUseCasesSection() {
  const t = useTranslations("departments");
  const items = [0, 1, 2, 3, 4, 5, 6];

  return (
    <SectionReveal>
      <div className="mx-auto max-w-[1120px] px-6 py-40 md:py-[200px]">
        <p className="text-[11px] font-semibold tracking-[0.12em] uppercase text-accent">
          09
        </p>
        <h2 className="mt-4 text-[40px] font-medium leading-[1.2] tracking-[-0.01em]">
          {t("title")}
        </h2>

        <div className="mt-14 grid gap-16 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((i) => {
            const caseCount = [5, 4, 4, 4, 4, 4, 3][i];
            return (
              <div
                key={i}
                className="p-6 transition-colors duration-150 hover:bg-accent-soft"
              >
                {(() => { const Icon = deptIcons[i]; return <Icon className="h-5 w-5 text-accent" strokeWidth={1.5} />; })()}
                <h3 className="mt-3 text-lg font-semibold">
                  {t(`items.${i}.name`)}
                </h3>
                <div className="mt-2 h-px w-6 bg-accent" />
                <div className="mt-4 space-y-3">
                  {Array.from({ length: caseCount }, (_, j) => (
                    <p key={j} className="text-sm text-text-secondary">
                      {t(`items.${i}.cases.${j}`)}
                    </p>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </SectionReveal>
  );
}
