import { useTranslations } from "next-intl";
import { Container } from "./ui";
import { SectionLink } from "./SectionLink";

export function CtaBanner() {
  const t = useTranslations("site.ctaBanner");

  return (
    <section id="contact" className="scroll-mt-[78px] bg-white pt-[80px] pb-[80px]">
      <Container>
        <div
          className="relative overflow-hidden rounded-[20px] px-[24px] py-[56px] sm:px-[60px] lg:min-h-[406px]"
          style={{ background: "var(--grad-brand)" }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/art/compass-banner.svg"
            alt=""
            aria-hidden="true"
            className="pointer-events-none absolute top-0 right-0 hidden h-full lg:block"
          />

          <div className="relative lg:pt-[10px]">
            <h2 className="max-w-[660px] text-[32px] leading-[1.2] font-bold tracking-[-0.01em] text-white md:text-[40px] lg:text-[46px] lg:leading-[55px]">
              {t("titleLine1")}
              <br />
              {t("titleLine2")}
            </h2>
            <p className="mt-[33px] text-[16px] leading-[23px] text-white/85">
              {t("descLine1")}
              <br />
              {t("descLine2")}
            </p>
            <div className="mt-[65px] flex flex-wrap items-center gap-[16px]">
              <a
                href="mailto:contact@the-unchain.com"
                className="btn-light inline-flex h-[50px] items-center justify-center rounded-[10px] px-[18px] text-[16px] font-medium"
              >
                {t("primary")}
              </a>
              <SectionLink
                href="#pricing"
                className="inline-flex h-[50px] items-center justify-center rounded-[10px] bg-white/20 px-[18px] text-[16px] font-medium text-white transition-colors hover:bg-white/30"
              >
                {t("secondary")}
              </SectionLink>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
