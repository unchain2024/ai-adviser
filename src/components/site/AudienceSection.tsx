import { useTranslations } from "next-intl";
import { Container, Eyebrow } from "./ui";

const CARDS = [
  { art: "/art/s3-a.svg", title: "card1Title", desc: "card1Desc", badge: "card1Badge", phase: "card1Phase" },
  { art: "/art/s3-b.svg", title: "card2Title", desc: "card2Desc", badge: "card2Badge", phase: "card2Phase" },
  { art: "/art/s3-c.svg", title: "card3Title", desc: "card3Desc", badge: "card3Badge", phase: "card3Phase" },
] as const;

export function AudienceSection() {
  const t = useTranslations("site.audience");

  return (
    <section id="audience" className="scroll-mt-[78px] bg-[#F4F4F5] pt-[120px] pb-[120px]">
      <Container>
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <Eyebrow>{t("eyebrow")}</Eyebrow>
            <h2 className="mt-[22px] text-[34px] leading-[1.15] font-bold tracking-[-0.01em] text-black md:text-[46px] lg:text-[55px] lg:leading-[63px] [line-break:strict] [word-break:keep-all]">
              {t("titleLine1")}
              <br />
              {t("titleLine2")}
            </h2>
          </div>
          <p className="max-w-[318px] text-[16px] leading-[23px] text-[#51525C] lg:pb-[2px]">
            {t("note")}
          </p>
        </div>

        <div className="mt-[63px] grid gap-[12px] md:grid-cols-2 lg:grid-cols-3">
          {CARDS.map((card) => (
            <article
              key={card.title}
              className="flex flex-col overflow-hidden rounded-[20px] bg-white ring-1 ring-[#E4E4E7]"
            >
              <div className="px-[24px] pt-[25px]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={card.art} alt="" aria-hidden="true" className="w-full" />
              </div>

              <div className="mt-[24px] flex flex-1 flex-col border-t border-[#E4E4E7] px-[24px] pt-[29px]">
                <h3 className="text-[24px] leading-[1.3] font-medium text-[#131316]">
                  {t(card.title)}
                </h3>
                <p className="mt-[21px] text-[14px] leading-[21px] text-[#51525C]">
                  {t(card.desc)}
                </p>
                <span
                  className="mt-[27px] mb-[24px] inline-flex h-[34px] w-fit items-center rounded-full px-[13px] text-[14px] leading-none text-[#131316] ring-1 ring-[#E4E4E7]"
                  style={{ background: "var(--grad-chip)" }}
                >
                  {t(card.badge)}
                </span>
              </div>

              <div className="mt-auto border-t border-[#E6E6E6] bg-[#E9F1F8] px-[24px] pt-[21px] pb-[19px]">
                <p className="text-[20px] leading-none font-bold text-[#257FFC]">
                  {t("phaseLabel")}
                </p>
                <p className="mt-[16px] text-[14px] leading-[21px] text-[#131316]">
                  {t(card.phase)}
                </p>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
