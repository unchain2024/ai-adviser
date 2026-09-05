"use client";

import { useRef } from "react";
import { useTranslations } from "next-intl";
import { Container, Eyebrow } from "./ui";

const ITEMS = [
  { avatar: "/art/avatar-1.webp", role: "item1Role", company: "item1Company", quote: "item1Quote" },
  { avatar: "/art/avatar-2.webp", role: "item2Role", company: "item2Company", quote: "item2Quote" },
  { avatar: "/art/avatar-3.webp", role: "item3Role", company: "item3Company", quote: "item3Quote" },
] as const;

export function TestimonialsSection() {
  const t = useTranslations("site.testimonials");
  const track = useRef<HTMLDivElement>(null);

  function scrollBy(dir: -1 | 1) {
    track.current?.scrollBy({ left: dir * 520, behavior: "smooth" });
  }

  return (
    <section className="overflow-hidden bg-black pt-[120px] pb-[124px]">
      <Container>
        <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <Eyebrow className="text-white">{t("eyebrow")}</Eyebrow>
            <h2 className="mt-[22px] text-[34px] leading-[1.15] font-bold tracking-[-0.01em] text-white md:text-[46px] lg:text-[55px]">
              {t("title")}
            </h2>
          </div>
          <div className="flex shrink-0 gap-[16px] sm:mt-[47px]">
            <button
              type="button"
              aria-label={t("prev")}
              onClick={() => scrollBy(-1)}
              className="flex h-[50px] w-[50px] items-center justify-center rounded-[10px] bg-[#26272B] transition-opacity hover:opacity-80"
            >
              <svg width="14" height="14" viewBox="1222 185 14 16" fill="none" aria-hidden="true">
                <path
                  d="M1232 199L1226 193L1232 187"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <button
              type="button"
              aria-label={t("next")}
              onClick={() => scrollBy(1)}
              className="flex h-[50px] w-[50px] items-center justify-center rounded-[10px] bg-white ring-1 ring-[#E4E4E7] transition-opacity hover:opacity-90"
            >
              <svg width="14" height="14" viewBox="1288 185 14 16" fill="none" aria-hidden="true">
                <path
                  d="M1292 199L1298 193L1292 187"
                  stroke="#414651"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </Container>

      {/* full-bleed track: the first card lines up with the 1200px column and the
          last one runs off the right edge, exactly as in the design */}
      <div className="mt-[60px] w-full">
        <div
          ref={track}
          className="flex snap-x snap-mandatory gap-[20px] overflow-x-auto scroll-smooth pb-2 [--gutter:24px] md:[--gutter:32px] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          style={{
            paddingInline: "max(var(--gutter), calc((100% - 1200px) / 2))",
            scrollPaddingInline: "max(var(--gutter), calc((100% - 1200px) / 2))",
          }}
        >
          {ITEMS.map((item) => (
            <figure
              key={item.role + item.quote}
              className="flex h-[450px] w-[500px] shrink-0 snap-start flex-col rounded-[20px] bg-[#18181B] p-[32px] ring-1 ring-white/10"
            >
              <figcaption className="flex items-center gap-[16px]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={item.avatar}
                  alt=""
                  aria-hidden="true"
                  className="h-[50px] w-[50px] rounded-[8px] object-cover"
                  width={50}
                  height={50}
                />
                <span className="flex flex-col gap-[13px]">
                  <span className="text-[16px] leading-none text-white">{t(item.role)}</span>
                  <span className="text-[14px] leading-none text-[#70707B]">
                    {t(item.company)}
                  </span>
                </span>
              </figcaption>

              <div className="mt-auto">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/art/s5-quote.svg" alt="" aria-hidden="true" width={36} height={33} />
                <blockquote className="mt-[23px] text-[30px] leading-[36px] font-normal text-white">
                  {t(item.quote)}
                </blockquote>
              </div>
            </figure>
          ))}
        </div>
      </div>

      <Container>
        <p className="mt-[37px] text-[12px] leading-none text-[#70707B]">{t("footnote")}</p>
      </Container>
    </section>
  );
}
