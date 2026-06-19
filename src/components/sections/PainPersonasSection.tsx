"use client";

import { useTranslations } from "next-intl";
import { SectionReveal } from "@/components/ui/SectionReveal";
import { StaggerReveal } from "@/components/ui/StaggerReveal";

const MARKS = [
  /* circle */
  <svg key={0} viewBox="0 0 48 48" className="h-12 w-12 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-12">
    <circle cx="24" cy="24" r="16" fill="none" className="stroke-accent" strokeWidth="1" />
  </svg>,
  /* half-circle */
  <svg key={1} viewBox="0 0 48 48" className="h-12 w-12 transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-12">
    <path d="M8 24a16 16 0 0 1 32 0" fill="none" className="stroke-accent" strokeWidth="1" />
  </svg>,
  /* two dots */
  <svg key={2} viewBox="0 0 48 48" className="h-12 w-12 transition-transform duration-500 group-hover:scale-110">
    <circle cx="16" cy="24" r="3" fill="none" className="stroke-accent transition-all duration-500 group-hover:fill-accent/20" strokeWidth="1" />
    <circle cx="32" cy="24" r="3" fill="none" className="stroke-accent transition-all duration-500 group-hover:fill-accent/20" strokeWidth="1" />
  </svg>,
  /* triangle */
  <svg key={3} viewBox="0 0 48 48" className="h-12 w-12 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6">
    <path d="M24 8 L40 40 L8 40 Z" fill="none" className="stroke-accent" strokeWidth="1" />
  </svg>,
  /* square */
  <svg key={4} viewBox="0 0 48 48" className="h-12 w-12 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-45">
    <rect x="10" y="10" width="28" height="28" fill="none" className="stroke-accent" strokeWidth="1" />
  </svg>,
  /* line */
  <svg key={5} viewBox="0 0 48 48" className="h-12 w-12 transition-transform duration-500 group-hover:scale-x-125">
    <line x1="8" y1="24" x2="40" y2="24" className="stroke-accent" strokeWidth="1" />
  </svg>,
];

export function PainPersonasSection() {
  const t = useTranslations("painPersonas");
  const items = [0, 1, 2, 3, 4, 5];

  return (
    <SectionReveal className="bg-bg-secondary">
      <div className="mx-auto max-w-[1120px] px-6 py-40 md:px-12 md:py-[200px]">
        <p className="text-[11px] font-semibold tracking-[0.12em] uppercase text-accent">
          02
        </p>
        <h2 className="mt-6 text-[40px] font-medium leading-[1.2] tracking-[-0.01em] text-text-primary">
          {t("title")}
        </h2>

        <div className="mt-14 grid gap-20 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((i) => (
            <StaggerReveal key={i} index={i}>
              <div className="group cursor-default">
                <div className="mb-6">{MARKS[i]}</div>
                <p className="text-[17px] leading-[1.95] text-text-primary transition-colors duration-300 group-hover:text-accent">
                  {t(`items.${i}`)}
                </p>
              </div>
            </StaggerReveal>
          ))}
        </div>
      </div>
    </SectionReveal>
  );
}
