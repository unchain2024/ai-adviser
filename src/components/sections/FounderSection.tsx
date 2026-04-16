"use client";

import { useTranslations } from "next-intl";
import { SectionReveal } from "@/components/ui/SectionReveal";
import Image from "next/image";

export function FounderSection() {
  const t = useTranslations("founder");
  const timelineItems = [0, 1, 2, 3, 4];

  return (
    <SectionReveal id="founder" className="bg-bg-secondary">
      <div className="mx-auto max-w-[1120px] px-6 py-40 md:px-12 md:py-[200px]">
        <p className="text-[11px] font-semibold tracking-[0.12em] uppercase text-accent">
          07
        </p>
        <h2 className="mt-4 text-[40px] font-medium leading-[1.2] tracking-[-0.01em]">
          {t("sectionTitle")}
        </h2>

        <div className="mt-16 grid gap-16 lg:grid-cols-[2fr_3fr]">
          {/* Left: Photo */}
          <div>
            <div className="border border-border-subtle p-[24px] rounded-sm">
              <Image
                src="/founder.webp"
                alt={t("name")}
                width={400}
                height={500}
                className="aspect-[4/5] w-full object-cover grayscale transition-all duration-[400ms] hover:grayscale-0"
              />
            </div>

            {/* Logos strip */}
            <div className="mt-8">
              <p className="text-[11px] font-semibold tracking-[0.12em] uppercase text-accent">
                {t("logosCaption")}
              </p>
              <div className="mt-3 flex flex-wrap gap-x-6 gap-y-2">
                {[0, 1, 2, 3, 4, 5].map((i) => (
                  <span
                    key={i}
                    className="text-xs text-text-tertiary opacity-30 transition-opacity duration-150 hover:opacity-100"
                  >
                    {t(`logos.${i}`)}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Content */}
          <div>
            <p className="text-[11px] font-semibold tracking-[0.12em] uppercase text-accent">
              {t("eyebrow")}
            </p>
            <h3 className="mt-3 text-2xl font-medium">{t("name")}</h3>
            <p className="mt-1 text-sm text-text-tertiary">{t("titleLine")}</p>

            {/* Pull quote */}
            <blockquote className="my-16 border-l-2 border-accent pl-6">
              <p className="text-[24px] font-medium leading-[1.6] text-text-primary whitespace-pre-line">
                &ldquo;{t("quote")}&rdquo;
              </p>
            </blockquote>

            {/* Narrative */}
            <p className="max-w-[560px] text-sm leading-[1.7] text-text-secondary">
              {t("narrative")}
            </p>

            {/* Timeline */}
            <div className="relative mt-10 pl-8">
              <div className="absolute top-0 bottom-0 left-[3px] w-px bg-border-subtle" />
              {timelineItems.map((i) => (
                <div key={i} className="relative mb-8 last:mb-0">
                  <div className="absolute -left-[5.5px] top-[6px] h-2 w-2 rounded-full bg-accent" style={{ left: '-4.5px' }} />
                  <div className="ml-4">
                    <p className="font-[Inter] tabular-nums text-lg font-semibold text-accent">
                      {t(`timeline.${i}.year`)}
                    </p>
                    <p className="mt-1 text-sm font-semibold">{t(`timeline.${i}.org`)}</p>
                    <p className="mt-1 text-sm text-text-secondary">
                      {t(`timeline.${i}.desc`)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </SectionReveal>
  );
}
