"use client";

import { useTranslations } from "next-intl";
import { SectionReveal } from "@/components/ui/SectionReveal";
import { StaggerReveal } from "@/components/ui/StaggerReveal";
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

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((i) => {
            const caseCount = [5, 4, 4, 4, 4, 4, 3][i];
            const Icon = deptIcons[i];
            return (
              <StaggerReveal key={i} index={i}>
                <div className="group cursor-default rounded-sm border border-transparent p-6 transition-all duration-300 hover:border-border-subtle hover:bg-bg-secondary hover:shadow-md">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent-soft transition-colors duration-300 group-hover:bg-accent">
                    <Icon className="h-5 w-5 text-accent transition-colors duration-300 group-hover:text-white" strokeWidth={1.5} />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold">
                    {t(`items.${i}.name`)}
                  </h3>
                  <div className="mt-2 h-px w-6 bg-accent transition-all duration-300 group-hover:w-12" />
                  <div className="mt-4 space-y-3">
                    {Array.from({ length: caseCount }, (_, j) => (
                      <p key={j} className="text-sm text-text-secondary transition-colors duration-200 group-hover:text-text-primary">
                        {t(`items.${i}.cases.${j}`)}
                      </p>
                    ))}
                  </div>
                </div>
              </StaggerReveal>
            );
          })}
        </div>
      </div>
    </SectionReveal>
  );
}
