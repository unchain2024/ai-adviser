"use client";

import { useTranslations } from "next-intl";
import { SectionReveal } from "@/components/ui/SectionReveal";
import { Quote } from "lucide-react";

export function ProjectShowcaseSection() {
  const t = useTranslations("projectShowcase");
  const projects = [0, 1, 2];

  return (
    <SectionReveal id="track-record" className="bg-bg-primary">
      <div className="mx-auto max-w-[1200px] px-6 py-24 md:px-12 md:py-32">
        <span className="inline-block rounded-full bg-bg-secondary px-4 py-1.5 text-[11px] font-medium tracking-[0.12em] text-text-tertiary uppercase">
          Track Record
        </span>
        <h2 className="mt-6 font-[var(--font-display)] text-[32px] font-light leading-[1.2] tracking-[-0.02em] text-text-primary md:text-[42px]">
          {t("title")}
        </h2>
        <p className="mt-2 text-[13px] text-text-tertiary">
          {t("subtitle")}
        </p>

        {/* Project cards with embedded testimonial quotes */}
        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {projects.map((i) => (
            <div
              key={i}
              className="group flex flex-col rounded-[20px] bg-bg-secondary p-8 transition-all duration-200 hover:shadow-md"
            >
              <span className="inline-block w-fit rounded-full bg-bg-primary px-3 py-1 text-[11px] font-medium tracking-[0.08em] text-accent uppercase shadow-sm">
                {t(`projects.${i}.industry`)}
              </span>
              <h3 className="mt-4 text-[17px] font-medium leading-[1.4] text-text-primary">
                {t(`projects.${i}.solution`)}
              </h3>
              <p className="mt-3 text-[13px] leading-[1.8] text-text-secondary">
                {t(`projects.${i}.desc`)}
              </p>

              {/* Embedded quote */}
              <div className="mt-auto pt-6">
                <div className="rounded-[14px] bg-bg-primary p-5 shadow-sm">
                  <Quote className="h-4 w-4 text-accent/30" strokeWidth={1.5} />
                  <p className="mt-2 text-[13px] leading-[1.7] text-text-secondary italic">
                    &ldquo;{t(`projects.${i}.quote`)}&rdquo;
                  </p>
                  <p className="mt-2 text-[11px] font-medium text-text-tertiary">
                    — {t(`projects.${i}.quoteAttr`)}
                  </p>
                </div>
              </div>

              <a
                href="#contact"
                className="mt-5 inline-flex w-fit items-center rounded-full border border-border-default px-5 py-2 text-[12px] font-medium text-accent transition-all duration-150 hover:border-accent hover:bg-accent hover:text-white"
              >
                {t("contactLink")}
              </a>
            </div>
          ))}
        </div>
      </div>
    </SectionReveal>
  );
}
