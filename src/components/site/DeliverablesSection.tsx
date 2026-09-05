import { useLocale, useTranslations } from "next-intl";
import { ArtLayer, ArtText, Container, Eyebrow } from "./ui";

const BOX: [number, number] = [594, 280];

/**
 * `titleWidth` reproduces the line breaks of the Japanese design. Latin copy is
 * far wider per line, so it gets the full text column the artwork leaves free.
 */
const CARDS = [
  { src: "/art/s2-a.svg", origin: [120, 317] as [number, number], key: "item1", titleWidth: 240 },
  { src: "/art/s2-b.svg", origin: [726, 317] as [number, number], key: "item2", titleWidth: 196 },
  { src: "/art/s2-c.svg", origin: [120, 609] as [number, number], key: "item3", titleWidth: 150 },
  { src: "/art/s2-d.svg", origin: [726, 609] as [number, number], key: "item4", titleWidth: 240 },
] as const;

const EXTRAS = ["extra1", "extra2", "extra3", "extra4", "extra5"] as const;

export function DeliverablesSection() {
  const t = useTranslations("site.deliverables");
  const isJa = useLocale() === "ja";

  return (
    <section id="deliverables" className="scroll-mt-[78px] bg-black pt-[120px] pb-[120px]">
      <Container>
        <div className="text-center">
          <Eyebrow className="mx-auto text-white">{t("eyebrow")}</Eyebrow>
          <h2 className="mt-[22px] text-[34px] leading-[1.15] font-bold tracking-[-0.01em] text-white md:text-[46px] lg:text-[55px]">
            {t("title")}
          </h2>
          <p className="mt-[24px] text-[16px] leading-none text-[#D1D1D6]">{t("subtitle")}</p>
        </div>

        <div className="mt-[65px] grid gap-[12px] md:grid-cols-2">
          {CARDS.map((card) => (
            <div key={card.key} className="overflow-hidden rounded-[20px]">
              <ArtLayer src={card.src} w={594} h={280}>
                <ArtText
                  box={BOX}
                  origin={card.origin}
                  x={card.origin[0] + 24}
                  y={card.origin[1] + 29}
                  size={24}
                  width={isJa ? card.titleWidth : 244}
                  lineHeight={33}
                  color="#FFFFFF"
                  weight={500}
                >
                  {t(card.key)}
                </ArtText>
              </ArtLayer>
            </div>
          ))}
        </div>

        <p className="mt-[64px] text-center text-[14px] leading-none text-[#D1D1D6]">
          {t("extrasLabel")}
        </p>

        {/* one row of five, split by hairlines — the gutter is the design's 63px
            in Japanese and tightens for the longer Latin labels */}
        <div
          className="mt-[27px] flex flex-wrap items-center justify-center rounded-[12px] bg-[#18181B] py-[33px] ring-1 ring-white/10 lg:flex-nowrap"
          style={{ ["--gutter" as string]: isJa ? "63px" : "34px" }}
        >
          {EXTRAS.map((k, i) => (
            <div key={k} className="flex items-center">
              {i > 0 && (
                <span className="hidden h-[33px] w-px bg-[#3F3F46] lg:block" aria-hidden="true" />
              )}
              <span className="px-[24px] py-2 text-[15px] leading-none whitespace-nowrap text-white lg:px-[var(--gutter)] lg:py-0">
                {t(k)}
              </span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
