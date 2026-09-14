import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import { Container, contactHref } from "./ui";
import { SectionLink } from "./SectionLink";

export function CtaBanner() {
  const t = useTranslations("site.ctaBanner");
  const locale = useLocale();

  return (
    <section id="contact" className="scroll-mt-[78px] bg-white pt-[80px] pb-[80px]">
      <Container>
        <div
          className="relative overflow-hidden rounded-[20px] px-[24px] pt-[56px] pb-[58%] sm:px-[60px] sm:pb-[56px] lg:min-h-[406px]"
          style={{ background: "var(--grad-brand)" }}
        >
          {/* The canvas runs the compass down the right edge on desktop and parks it
              across the bottom of the card on mobile, with the copy layered over it. */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/art/compass-banner.svg"
            alt=""
            aria-hidden="true"
            className="pointer-events-none absolute top-0 right-0 hidden h-full lg:block"
          />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/art/compass-banner.svg"
            alt=""
            aria-hidden="true"
            className="pointer-events-none absolute -right-[8%] -bottom-[2%] w-[72%] max-w-none sm:hidden"
          />

          <div className="relative lg:pt-[10px]">
            <h2 className="max-w-[660px] text-[22px] leading-[1.25] font-bold tracking-[-0.01em] text-white [line-break:strict] [overflow-wrap:anywhere] [word-break:keep-all] sm:text-[32px] sm:leading-[1.2] md:text-[40px] lg:text-[46px] lg:leading-[55px]">
              {t("titleLine1")}
              <br />
              {t("titleLine2")}
            </h2>
            <p className="mt-[33px] text-[16px] leading-[23px] text-white/85">
              {t("descLine1")}
              <br />
              {t("descLine2")}
            </p>
            <div className="mt-[40px] flex w-full flex-col items-stretch gap-[16px] sm:mt-[65px] sm:w-auto sm:flex-row sm:flex-wrap sm:items-center">
              <Link
                href={contactHref(locale)}
                className="btn-light inline-flex h-[50px] w-full items-center justify-center rounded-[10px] px-[18px] text-center text-[16px] font-medium sm:w-auto"
              >
                {t("primary")}
              </Link>
              <SectionLink
                href="#pricing"
                className="inline-flex h-[50px] w-full items-center justify-center rounded-[10px] bg-white/20 px-[18px] text-center text-[16px] font-medium text-white transition-colors hover:bg-white/30 sm:w-auto"
              >
                {t("secondary")}
              </SectionLink>
            </div>
            <p className="mt-[20px] text-[13px] leading-[19px] text-white/85">
              {t("consent")}
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
