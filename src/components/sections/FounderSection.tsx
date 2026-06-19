"use client";

import { useTranslations } from "next-intl";
import { SectionReveal } from "@/components/ui/SectionReveal";
import Image from "next/image";

export function FounderSection() {
  const t = useTranslations("founder");
  const timelineItems = [0, 1, 2, 3, 4];

  return (
    <SectionReveal id="founder" className="bg-bg-secondary">
      <div className="mx-auto max-w-[1200px] px-6 py-24 md:px-12 md:py-32">
        <span className="inline-block rounded-full bg-bg-tertiary px-4 py-1.5 text-[11px] font-medium tracking-[0.12em] text-text-tertiary uppercase">
          Leadership
        </span>
        <h2 className="mt-6 font-[var(--font-display)] text-[32px] font-light leading-[1.2] tracking-[-0.02em] text-text-primary md:text-[42px]">
          {t("sectionTitle")}
        </h2>

        <div className="mt-12 grid gap-10 lg:grid-cols-[5fr_7fr]">
          {/* Left: Photo */}
          <div>
            <div className="overflow-hidden rounded-[24px] shadow-md">
              <Image
                src="/founder.webp"
                alt={t("name")}
                width={400}
                height={500}
                className="aspect-[4/5] w-full object-cover"
              />
            </div>

            {/* Logos */}
            <div className="mt-6 rounded-[16px] bg-bg-primary p-5 shadow-sm">
              <p className="text-[11px] font-medium tracking-[0.1em] text-text-tertiary uppercase">
                {t("logosCaption")}
              </p>
              <div className="mt-2 flex flex-wrap gap-x-5 gap-y-1">
                {[0, 1, 2, 3, 4, 5].map((i) => (
                  <span key={i} className="text-[12px] text-text-tertiary">
                    {t(`logos.${i}`)}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Content */}
          <div>
            <p className="text-[11px] font-semibold tracking-[0.1em] text-accent uppercase">
              {t("eyebrow")}
            </p>
            <h3 className="mt-2 text-[24px] font-medium">{t("name")}</h3>
            <p className="mt-1 text-[13px] text-text-tertiary">{t("titleLine")}</p>

            {/* Pull quote */}
            <blockquote className="my-8 rounded-[16px] bg-bg-primary p-6 shadow-sm">
              <p className="text-[17px] font-light leading-[1.8] text-text-primary whitespace-pre-line">
                &ldquo;{t("quote")}&rdquo;
              </p>
            </blockquote>

            <p className="max-w-[560px] text-[13px] leading-[1.8] text-text-secondary">
              {t("narrative")}
            </p>

            {/* Timeline */}
            <div className="relative mt-10 pl-6">
              <div className="absolute top-0 bottom-0 left-[3px] w-px bg-border-default" />
              {timelineItems.map((i) => (
                <div key={i} className="relative mb-6 last:mb-0">
                  <div className="absolute top-[7px] h-2.5 w-2.5 rounded-full border-2 border-accent bg-bg-secondary" style={{ left: '-5.5px' }} />
                  <div className="ml-4">
                    <p className="text-[14px] font-medium tabular-nums text-accent">
                      {t(`timeline.${i}.year`)}
                    </p>
                    <p className="mt-0.5 text-[13px] font-medium">{t(`timeline.${i}.org`)}</p>
                    <p className="mt-0.5 text-[12px] text-text-secondary">
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
