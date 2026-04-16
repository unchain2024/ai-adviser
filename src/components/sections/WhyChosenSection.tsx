"use client";

import { useTranslations } from "next-intl";
import { SectionReveal } from "@/components/ui/SectionReveal";
import { FlaskConical, Scale, ShieldCheck } from "lucide-react";

const reasonIcons = [FlaskConical, Scale, ShieldCheck];

export function WhyChosenSection() {
  const t = useTranslations("whyChosen");
  const reasons = [0, 1, 2];

  return (
    <SectionReveal>
      <div className="mx-auto max-w-[1120px] px-6 py-40 md:px-12 md:py-[200px]">
        <p className="text-[11px] font-semibold tracking-[0.12em] uppercase text-accent">
          06
        </p>
        <h2 className="mt-4 text-[40px] font-medium leading-[1.2] tracking-[-0.01em]">
          {t("title")}
        </h2>
        <p className="mt-6 max-w-[720px] text-[17px] text-text-secondary">
          {t("intro")}
        </p>

        <div className="mt-14 grid md:grid-cols-3">
          {reasons.map((i) => (
            <div
              key={i}
              className={`py-2 md:py-0 md:px-8 first:md:pl-0 last:md:pr-0 ${
                i < 2 ? "md:border-r md:border-border-subtle" : ""
              }`}
            >
              {(() => { const Icon = reasonIcons[i]; return <Icon className="h-6 w-6 text-accent" strokeWidth={1.5} />; })()}
              <p className="mt-4 text-[40px] font-medium text-accent">
                {String(i + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-6 text-lg font-semibold">{t(`reasons.${i}.title`)}</h3>
              <p className="mt-4 text-[15px] leading-[1.95] text-text-secondary">
                {t(`reasons.${i}.desc`)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </SectionReveal>
  );
}
