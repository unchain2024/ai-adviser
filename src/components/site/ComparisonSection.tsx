import { useTranslations } from "next-intl";
import { Container, Eyebrow } from "./ui";
import { SectionLink } from "./SectionLink";

/** 他の選択肢との違い — 一般的なAI研修 / 単発コンサル / AI ADVISOR の3列比較。 */
const ROWS = ["row1", "row2", "row3", "row4", "row5"] as const;

export function ComparisonSection() {
  const t = useTranslations("site.comparison");

  return (
    <section id="comparison" className="scroll-mt-[78px] bg-white pt-[120px] pb-[120px]">
      <Container>
        <div className="text-center">
          <Eyebrow className="mx-auto">{t("eyebrow")}</Eyebrow>
          <h2 className="mx-auto mt-[22px] max-w-[900px] text-[34px] leading-[1.15] font-bold tracking-[-0.01em] text-black [line-break:strict] [word-break:keep-all] md:text-[46px] lg:text-[55px]">
            {t("title")}
          </h2>
        </div>

        <div className="mt-[63px] overflow-x-auto rounded-[16px] ring-1 ring-[#E4E4E7]">
          <table className="w-full min-w-[900px] border-collapse text-left">
            <thead>
              <tr className="bg-white">
                <th className="h-[71px] w-[22%] px-[17px] text-[19px] font-medium text-[#131316]" />
                <th className="h-[71px] w-[26%] px-[17px] text-[19px] font-medium text-[#70707B]">
                  {t("colTraining")}
                </th>
                <th className="h-[71px] w-[26%] px-[17px] text-[19px] font-medium text-[#70707B]">
                  {t("colConsulting")}
                </th>
                <th className="h-[71px] w-[26%] bg-[#E9F1F8] px-[17px] text-[19px] font-medium text-[#131316]">
                  {t("colOurs")}
                </th>
              </tr>
            </thead>
            <tbody>
              {ROWS.map((row, i) => (
                <tr key={row} className={i % 2 === 0 ? "bg-[#F4F4F5]" : "bg-white"}>
                  <td className="h-[71px] px-[17px] text-[15px] leading-[22px] font-medium text-[#131316]">
                    {t(`${row}Label`)}
                  </td>
                  <td className="h-[71px] px-[17px] text-[15px] leading-[22px] text-[#51525C]">
                    {t(`${row}Training`)}
                  </td>
                  <td className="h-[71px] px-[17px] text-[15px] leading-[22px] text-[#51525C]">
                    {t(`${row}Consulting`)}
                  </td>
                  <td className="h-[71px] bg-[#E9F1F8] px-[17px] text-[15px] leading-[22px] font-medium text-[#131316]">
                    {t(`${row}Ours`)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* second of the three CTAs: hero / here / final banner */}
        <div className="mt-[48px] flex flex-col items-center gap-[16px]">
          <p className="text-[16px] leading-[23px] text-[#51525C]">{t("ctaNote")}</p>
          <SectionLink
            href="#contact"
            className="btn-dark inline-flex h-[50px] items-center justify-center rounded-[10px] px-[17px] text-[16px] font-medium"
          >
            {t("cta")}
          </SectionLink>
        </div>
      </Container>
    </section>
  );
}
