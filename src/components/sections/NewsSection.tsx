"use client";

import { useTranslations, useLocale } from "next-intl";
import { SectionReveal } from "@/components/ui/SectionReveal";
import newsData from "@/data/news.json";

type NewsItem = {
  id: string;
  date: string;
  category: string;
  title: { ja: string; en: string };
  url: string;
};

export function NewsSection() {
  const t = useTranslations("news");
  const locale = useLocale() as "ja" | "en";
  const news = newsData as NewsItem[];

  if (news.length === 0) return null;

  return (
    <SectionReveal id="news" className="bg-bg-tertiary">
      <div className="mx-auto max-w-[1120px] px-6 py-40 md:py-[200px]">
        <p className="text-[11px] font-semibold tracking-[0.12em] uppercase text-accent">
          15
        </p>
        <h2 className="mt-4 text-[40px] font-medium leading-[1.2] tracking-[-0.01em]">
          {t("title")}
        </h2>

        <div className="mt-16 divide-y divide-border-default border-t border-border-default">
          {news.map((item) => (
            <a
              key={item.id}
              href={item.url}
              className="group flex flex-col gap-2 py-5 transition-colors duration-150 sm:flex-row sm:items-center sm:gap-6"
            >
              <span className="text-sm tabular-nums font-[Inter,sans-serif] text-text-tertiary group-hover:text-accent transition-colors duration-150">
                {item.date}
              </span>
              <span className="bg-accent-soft px-2 py-0.5 text-[11px] font-semibold text-accent rounded-sm w-fit">
                {item.category === "press" ? t("press") : t("coverage")}
              </span>
              <span className="flex-1 text-sm font-medium text-text-primary line-clamp-2 group-hover:text-accent transition-colors duration-150">
                {item.title[locale]}
              </span>
            </a>
          ))}
        </div>
      </div>
    </SectionReveal>
  );
}
