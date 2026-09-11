import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import { Container, contactHref } from "./ui";
import { SectionLink } from "./SectionLink";

/**
 * Backdrop lifted straight out of public/Hero.svg — nothing here is redrawn.
 *
 * hero-glow.svg  the white plate and the two blurred ellipses, verbatim. Drawn
 *                with preserveAspectRatio="none" and stretched over the whole
 *                section, so the wash keeps the canvas's composition at any
 *                width instead of scaling up and washing out.
 * hero-tile.svg  one 90px tile of the grid, repeated at its native size from
 *                just under the navbar down.
 */
function HeroBackdrop() {
  return (
    <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden" aria-hidden="true">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: "url(/art/hero-glow.svg)",
          backgroundSize: "100% 100%",
          backgroundRepeat: "no-repeat",
        }}
      />
      <div
        className="absolute inset-x-0 top-[78px] bottom-0"
        style={{
          backgroundImage: "url(/art/hero-tile.svg)",
          backgroundSize: "90px 90px",
          backgroundRepeat: "repeat",
        }}
      />
    </div>
  );
}

export function Hero() {
  const t = useTranslations("site.hero");
  const locale = useLocale();

  return (
    <section id="top" className="relative -mt-[78px] overflow-hidden bg-white">
      <HeroBackdrop />

      <Container className="relative z-10">
        <div className="flex flex-col items-center pt-[190px] pb-[150px] text-center lg:pt-[334px] lg:pb-[233px]">
          <h1 className="text-[34px] leading-[1.18] font-bold text-[#131316] [line-break:strict] [word-break:keep-all] md:text-[48px] lg:text-[61px] lg:leading-[1.06]">
            {t("titleLine1")}
            {/* One line on the design canvas. Japanese joins with no separator —
                the gap is the 、's own trailing space, which is what the canvas
                measures. Latin still needs a real word space. The break is kept
                for narrow viewports. */}
            <br className="lg:hidden" />
            {locale !== "ja" && <span className="hidden lg:inline">{" "}</span>}
            {t("titleLine2")}
          </h1>

          <p className="mt-[22px] max-w-[720px] text-[16px] leading-[23px] text-balance text-[#131316]">
            {t("subtitle")}
          </p>

          <div className="mt-[33px] flex flex-wrap items-center justify-center gap-[16px]">
            <Link
              href={contactHref(locale)}
              className="btn-dark inline-flex h-[50px] items-center justify-center rounded-[10px] px-[17px] text-[16px] font-medium"
            >
              {t("ctaPrimary")}
            </Link>
            <SectionLink
              href="#process"
              className="btn-light inline-flex h-[50px] items-center justify-center rounded-[10px] px-[17px] text-[16px] font-medium"
            >
              {t("ctaSecondary")}
            </SectionLink>
          </div>
        </div>
      </Container>
    </section>
  );
}
