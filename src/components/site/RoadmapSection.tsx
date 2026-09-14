import { useTranslations } from "next-intl";
import { Container, Eyebrow } from "./ui";
import { CardCarousel } from "./CardCarousel";

/**
 * 最初の3カ月 — a single three-stage roadmap shared by every plan, replacing the
 * plan-by-plan description that used to sit in the bottom of the audience cards.
 */
const MONTHS = [
  { label: "month1Label", title: "month1Title", desc: "month1Desc" },
  { label: "month2Label", title: "month2Title", desc: "month2Desc" },
  { label: "month3Label", title: "month3Title", desc: "month3Desc" },
] as const;

export function RoadmapSection() {
  const t = useTranslations("site.roadmap");

  return (
    <section id="roadmap" className="scroll-mt-[78px] bg-white pt-[120px] pb-[120px]">
      <Container>
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="lg:max-w-[760px]">
            <Eyebrow>{t("eyebrow")}</Eyebrow>
            <h2 className="mt-[22px] text-[28px] leading-[1.15] font-bold tracking-[-0.01em] text-black [line-break:strict] [overflow-wrap:anywhere] [word-break:keep-all] sm:text-[34px] md:text-[46px] lg:text-[55px]">
              {t("title")}
            </h2>
          </div>
          <p className="max-w-none text-[16px] leading-[24px] text-[#51525C] lg:max-w-[318px] lg:pb-[2px]">
            {t("note")}
          </p>
        </div>

        <div className="mt-[57px]">
          <CardCarousel gridClassName="gap-[12px] lg:grid-cols-3">
            {MONTHS.map((m, i) => (
              <article
                key={m.label}
                className="relative flex flex-col overflow-hidden rounded-[20px] bg-[#F5F5F5] px-[24px] pt-[27px] pb-[30px] ring-1 ring-[#E4E4E7]"
              >
                {/* the step rail: filled up to the current month */}
                <div className="flex items-center gap-[6px]" aria-hidden="true">
                  {MONTHS.map((_, j) => (
                    <span
                      key={j}
                      className="h-[4px] w-[26px] rounded-full"
                      style={{ background: j <= i ? "#257FFC" : "#DCDCDC" }}
                    />
                  ))}
                </div>

                <p className="mt-[21px] text-[20px] leading-none font-bold text-[#257FFC]">
                  {t(m.label)}
                </p>
                <h3 className="mt-[16px] text-[24px] leading-[1.3] font-medium text-[#131316]">
                  {t(m.title)}
                </h3>
                <p className="mt-[12px] text-[14px] leading-[21px] text-[#51525C]">{t(m.desc)}</p>
              </article>
            ))}
          </CardCarousel>
        </div>
      </Container>
    </section>
  );
}
