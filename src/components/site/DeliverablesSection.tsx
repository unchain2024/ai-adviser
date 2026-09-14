import { useLocale, useTranslations } from "next-intl";
import { ArtLayer, ArtText, Container, Eyebrow } from "./ui";

const BOX: [number, number] = [594, 280];

/**
 * How far the artwork is blown up on mobile. At 2× the illustration reads at the
 * size the mobile canvas draws it, and — because every illustration sits at
 * `focus` ≤ 0.75 of the source width — the scaled art still covers the card edge
 * to edge after being shifted, so no seam of bare background shows through.
 */
const ART_SCALE = 2;
/**
 * Height ÷ width of the art window. The art itself stands ART_SCALE × (280/594)
 * tall; the window is trimmed a few percent shorter and the art centred inside it,
 * so the artwork's own top and bottom edges are cropped away. Without that trim the
 * art's top border draws a hard seam across the card under the title.
 */
const ART_RATIO = ART_SCALE * (280 / 594) * 0.94;

/**
 * `titleWidth` reproduces the line breaks of the Japanese design. Latin copy is
 * far wider per line, so it gets the full text column the artwork leaves free.
 *
 * `focus` is where the illustration's centre sits across the source artwork, as a
 * fraction of its width. The desktop art is a landscape card with the illustration
 * pushed to the right and the title overlaid on the empty left half; on mobile the
 * title moves above the art, so the art is shifted to bring `focus` onto the card's
 * centre line. Retune this if the artwork is ever redrawn.
 */
const CARDS = [
  { src: "/art/s2-a.svg", origin: [120, 317] as [number, number], key: "item1", titleWidth: 250, focus: 0.72 },
  { src: "/art/s2-b.svg", origin: [726, 317] as [number, number], key: "item2", titleWidth: 250, focus: 0.74 },
  { src: "/art/s2-c.svg", origin: [120, 609] as [number, number], key: "item3", titleWidth: 250, focus: 0.72 },
  { src: "/art/s2-d.svg", origin: [726, 609] as [number, number], key: "item4", titleWidth: 250, focus: 0.75 },
] as const;

/* extra6 = 定例セッション記録 — 議事録は主要成果物から補助項目に移した。 */
const EXTRAS = ["extra1", "extra2", "extra3", "extra4", "extra5", "extra6"] as const;

export function DeliverablesSection() {
  const t = useTranslations("site.deliverables");
  const isJa = useLocale() === "ja";

  return (
    <section id="deliverables" className="scroll-mt-[78px] bg-black pt-[120px] pb-[120px]">
      <Container>
        <div className="text-center">
          <Eyebrow className="mx-auto text-white">{t("eyebrow")}</Eyebrow>
          <h2 className="mt-[22px] text-[28px] leading-[1.15] font-bold tracking-[-0.01em] text-white sm:text-[34px] md:text-[46px] lg:text-[55px]">
            {t("title")}
          </h2>
          <p className="mt-[24px] text-[16px] leading-[23px] text-[#D1D1D6] lg:leading-none">
            {t("subtitle")}
          </p>
        </div>

        <div className="mt-[65px] grid gap-[12px] md:grid-cols-2">
          {CARDS.map((card) => (
            <div key={card.key}>
              {/* mobile: portrait card — real 24px title on top, art enlarged below */}
              <article className="overflow-hidden rounded-[20px] bg-[#18181B] ring-1 ring-white/10 lg:hidden">
                <h3 className="px-[24px] pt-[28px] text-[24px] leading-[33px] font-medium text-white">
                  {t(card.key)}
                </h3>
                <div
                  className="relative mt-[20px] w-full overflow-hidden"
                  style={{ aspectRatio: `1 / ${ART_RATIO}` }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={card.src}
                    alt=""
                    aria-hidden="true"
                    /* max-w-none: preflight's `img{max-width:100%}` would otherwise
                       clamp the 200% width and leave only a sliver of art visible. */
                    className="absolute top-1/2 max-w-none -translate-y-1/2"
                    style={{
                      width: `${ART_SCALE * 100}%`,
                      left: `${50 - card.focus * ART_SCALE * 100}%`,
                    }}
                  />
                </div>
              </article>

              {/* desktop: the landscape card with the title overlaid, unchanged */}
              <div className="hidden overflow-hidden rounded-[20px] lg:block">
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
            </div>
          ))}
        </div>

        <p className="mt-[64px] text-center text-[14px] leading-none text-[#D1D1D6]">
          {t("extrasLabel")}
        </p>

        {/* One row split by vertical hairlines on desktop — the gutter is the design's
            63px in Japanese and tightens for the longer Latin labels. On mobile the
            canvas stacks them, so the hairlines turn horizontal. */}
        <div
          className="mt-[27px] flex flex-col rounded-[12px] bg-[#18181B] px-[24px] ring-1 ring-white/10 lg:flex-row lg:flex-wrap lg:items-center lg:justify-center lg:px-0 lg:py-[33px] xl:flex-nowrap"
          style={{ ["--gutter" as string]: isJa ? "26px" : "18px" }}
        >
          {EXTRAS.map((k, i) => (
            <div
              key={k}
              className="flex w-full items-center justify-center border-t border-[#3F3F46] first:border-t-0 lg:w-auto lg:border-t-0"
            >
              {i > 0 && (
                <span className="hidden h-[33px] w-px bg-[#3F3F46] lg:block" aria-hidden="true" />
              )}
              <span className="px-[24px] py-[16px] text-center text-[15px] leading-[22px] text-white lg:px-[var(--gutter)] lg:py-0 lg:leading-none lg:whitespace-nowrap">
                {t(k)}
              </span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
