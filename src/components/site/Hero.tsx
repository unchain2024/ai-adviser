import { useTranslations } from "next-intl";
import { Container } from "./ui";
import { SectionLink } from "./SectionLink";

/* Membership card — frame 602×386.469, inner card 548.117×332.586 (design px). */
const FW = 602;
const FH = 386.469;
const pct = (v: number, total: number) => `${(v / total) * 100}%`;
/** design px → share of the frame width, so the whole card scales as one unit */
const cq = (v: number) => `${(v / FW) * 100}cqw`;

function Screw({ left, top }: { left: number; top: number }) {
  return (
    <span
      className="absolute rounded-full bg-[#C2C2C2]"
      style={{
        left: pct(left - 4.645, FW),
        top: pct(top - 4.645, FH),
        width: pct(9.29, FW),
        aspectRatio: "1",
        boxShadow: "0 0 0 3.71605px #fff, 0 1px 2px rgba(0,0,0,0.18)",
      }}
      aria-hidden="true"
    />
  );
}

function MembershipCard() {
  const t = useTranslations("site.hero");
  return (
    <div
      className="relative w-full max-w-[602px] rounded-[27.87px] bg-white/80 shadow-[0_4px_4px_rgba(0,0,0,0.06)] ring-1 ring-[#E9E9E9] backdrop-blur-[2px]"
      style={{ aspectRatio: `${FW} / ${FH}`, containerType: "inline-size" }}
    >
      <Screw left={20.438} top={20.438} />
      <Screw left={FW - 20.438} top={20.438} />
      <Screw left={20.438} top={FH - 20.438} />
      <Screw left={FW - 20.438} top={FH - 20.438} />

      <div
        className="absolute overflow-hidden"
        style={{
          left: pct(26.941, FW),
          top: pct(26.942, FH),
          width: pct(548.117, FW),
          height: pct(332.586, FH),
          borderRadius: cq(22.296),
          background: "var(--grad-brand)",
          boxShadow: "0 5.57px 14.86px rgba(0,0,0,0.3)",
        }}
      >
        {/* 1.858px hairline, white fading to transparent */}
        <span
          className="pointer-events-none absolute inset-0"
          style={{
            borderRadius: cq(22.296),
            padding: cq(1.858),
            background:
              "linear-gradient(180deg, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0) 100%)",
            WebkitMask: "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
            WebkitMaskComposite: "xor",
            maskComposite: "exclude",
          }}
          aria-hidden="true"
        />
        <span
          className="pointer-events-none absolute inset-x-0 top-0"
          style={{
            height: pct(270, 332.586),
            background:
              "linear-gradient(180deg, rgba(255,255,255,0.18) 0%, rgba(255,255,255,0) 83%)",
          }}
          aria-hidden="true"
        />

        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/art/logo-card.svg"
          alt=""
          aria-hidden="true"
          className="absolute"
          style={{ left: cq(21.06), top: cq(13.29), width: cq(104) }}
        />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/art/compass.svg"
          alt=""
          aria-hidden="true"
          className="absolute"
          style={{ left: cq(454.06), top: cq(8.29), width: cq(88) }}
        />

        <span
          className="absolute font-medium whitespace-nowrap text-white/85"
          style={{ left: cq(47), top: cq(167), fontSize: cq(28), lineHeight: 1.15 }}
        >
          {t("cardKicker")}
        </span>
        <span
          className="absolute font-bold whitespace-nowrap text-white"
          style={{ left: cq(49), top: cq(196), fontSize: cq(55), lineHeight: 1.15 }}
        >
          {t("cardTitle")}
        </span>
        <span
          className="absolute bg-white/40"
          style={{ left: cq(52), top: cq(309), width: cq(384), height: "1px" }}
          aria-hidden="true"
        />
        <span
          className="absolute font-medium whitespace-nowrap text-white"
          style={{ left: cq(456), top: cq(300), fontSize: cq(15), lineHeight: 1.15 }}
        >
          {t("cardBrand")}
        </span>
      </div>
    </div>
  );
}

export function Hero() {
  const t = useTranslations("site.hero");

  return (
    <section
      id="top"
      className="dot-field relative -mt-[78px] overflow-hidden"
      style={{ background: "var(--grad-hero)" }}
    >
      {/* decorative rules from the design canvas */}
      <div className="pointer-events-none absolute inset-0 hidden xl:block" aria-hidden="true">
        <span className="absolute top-0 bottom-0 left-[47.92%] w-px bg-[#D1D1D6]" />
        <span className="absolute top-0 bottom-0 left-[93.61%] w-px bg-[#D1D1D6]" />
        <span className="absolute inset-x-0 top-[30.56%] h-px bg-[#D1D1D6]" />
        <span className="absolute inset-x-0 top-[79.67%] h-px bg-[#D1D1D6]" />
      </div>

      <Container className="relative">
        <div className="grid items-start gap-14 pt-[150px] pb-[110px] lg:grid-cols-[1fr_602px] lg:gap-0 lg:pt-[303.765px] lg:pb-[210px]">
          <div className="lg:pt-[37px]">
            <h1 className="text-[40px] leading-[1.17] font-bold text-[#131316] md:text-[52px] lg:text-[61px] lg:leading-[70px]">
              {t("titleLine1")}
              <br />
              {t("titleLine2")}
            </h1>
            <p className="mt-[23px] max-w-[486px] text-[16px] leading-[23px] text-[#131316]">
              {t("subtitle")}
            </p>
            <div className="mt-[56px] flex flex-wrap items-center gap-[16px]">
              <SectionLink
                href="#contact"
                className="btn-dark inline-flex h-[50px] items-center justify-center rounded-[10px] px-[17px] text-[16px] font-medium"
              >
                {t("ctaPrimary")}
              </SectionLink>
              <SectionLink
                href="#pricing"
                className="btn-light inline-flex h-[50px] items-center justify-center rounded-[10px] px-[17px] text-[16px] font-medium"
              >
                {t("ctaSecondary")}
              </SectionLink>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <MembershipCard />
          </div>
        </div>
      </Container>
    </section>
  );
}
