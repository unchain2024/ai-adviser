import { useTranslations } from "next-intl";
import { Container, Eyebrow } from "./ui";
import { SectionLink } from "./SectionLink";

function Check() {
  return (
    <span
      className="mt-[1px] flex h-[25.77px] w-[25.77px] shrink-0 items-center justify-center rounded-full"
      style={{ background: "var(--grad-check)" }}
      aria-hidden="true"
    >
      <svg width="13" height="12" viewBox="160.5 741.5 13.5 11.5" fill="none">
        <path
          d="M172.333 743.3L165 750.633L161.667 747.3"
          stroke="#fff"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}

/**
 * `custom` は金額を出さないプラン（全社推進プラン＝個別見積もり）。「月額」の前置きと
 * 「税別」の注記を出さず、代わりに個別案内の一文を置く。
 */
const PLANS = [
  {
    name: "plan1Name",
    audience: "plan1Audience",
    price: "plan1Price",
    features: ["plan1Feature1", "plan1Feature2", "plan1Feature3"],
    featured: false,
    custom: false,
    cta: "cta",
  },
  {
    name: "plan2Name",
    audience: "plan2Audience",
    price: "plan2Price",
    features: ["plan2Feature1", "plan2Feature2", "plan2Feature3"],
    featured: true,
    custom: false,
    cta: "cta",
  },
  {
    name: "plan3Name",
    audience: "plan3Audience",
    price: "plan3Price",
    features: ["plan3Feature1", "plan3Feature2", "plan3Feature3"],
    featured: false,
    custom: true,
    cta: "plan3Cta",
  },
] as const;

/* 月額料金／主な対象／参加人数／支援部門数／セッション／チャット相談／
   優先テーマ・利用ルール／研修／効果測定 */
const ROWS = [
  ["rowPriceLabel", "rowPricePlan1", "rowPricePlan2", "rowPricePlan3"],
  ["row1Label", "row1Plan1", "row1Plan2", "row1Plan3"],
  ["rowPeopleLabel", "rowPeoplePlan1", "rowPeoplePlan2", "rowPeoplePlan3"],
  ["rowDeptsLabel", "rowDeptsPlan1", "rowDeptsPlan2", "rowDeptsPlan3"],
  ["row2Label", "row2Plan1", "row2Plan2", "row2Plan3"],
  ["rowChatLabel", "rowChatPlan1", "rowChatPlan2", "rowChatPlan3"],
  ["row3Label", "row3Plan1", "row3Plan2", "row3Plan3"],
  ["row4Label", "row4Plan1", "row4Plan2", "row4Plan3"],
  ["row5Label", "row5Plan1", "row5Plan2", "row5Plan3"],
] as const;

/* 初期費用・最低契約期間・解約・プラン変更・対象外業務・成果物の権利・
   秘密保持・支払条件を料金表の直下に明記する。 */
const TERMS = [
  ["term1Label", "term1Value"],
  ["term2Label", "term2Value"],
  ["term3Label", "term3Value"],
  ["term4Label", "term4Value"],
  ["term5Label", "term5Value"],
  ["term6Label", "term6Value"],
  ["term7Label", "term7Value"],
  ["term8Label", "term8Value"],
] as const;

function PlanBody({ plan }: { plan: (typeof PLANS)[number] }) {
  const t = useTranslations("site.pricing");

  return (
    <>
      <h3 className="text-[24px] leading-[1.3] font-medium text-[#131316]">{t(plan.name)}</h3>
      <p className="mt-[17px] text-[14px] leading-[1.4] text-[#70707B]">{t(plan.audience)}</p>
      <p className="mt-[26px] flex items-baseline gap-[8px]">
        {!plan.custom && (
          <span className="text-[16px] leading-none text-[#131316]">{t("priceLabel")}</span>
        )}
        <span className="text-[34px] leading-none font-bold text-[#131316]">{t(plan.price)}</span>
      </p>
      <p className="mt-[15px] text-[14px] leading-none text-[#70707B]">
        {plan.custom ? t("plan3PriceNote") : t("taxNote")}
      </p>
    </>
  );
}

function PlanFeatures({ plan }: { plan: (typeof PLANS)[number] }) {
  const t = useTranslations("site.pricing");

  return (
    <ul className="mt-[32px] space-y-[24px] border-t border-[#E4E4E7] pt-[32px]">
      {plan.features.map((f) => (
        <li key={f} className="flex items-start gap-[12px]">
          <Check />
          <span className="text-[15px] leading-[26px] text-[#131316]">{t(f)}</span>
        </li>
      ))}
    </ul>
  );
}

export function PricingSection() {
  const t = useTranslations("site.pricing");

  return (
    <section id="pricing" className="scroll-mt-[78px] bg-[#F4F4F5] pt-[120px] pb-[121px]">
      <Container>
        <div className="text-center">
          <Eyebrow className="mx-auto">{t("eyebrow")}</Eyebrow>
          <h2 className="mt-[22px] text-[34px] leading-[1.15] font-bold tracking-[-0.01em] text-black [line-break:strict] [word-break:keep-all] md:text-[46px] lg:text-[55px]">
            {t("title")}
          </h2>
        </div>

        <div className="mt-[63px] grid items-end gap-[12.5px] md:grid-cols-2 lg:grid-cols-[383.667fr_402.667fr_383.667fr]">
          {PLANS.map((plan) =>
            plan.featured ? (
              <div
                key={plan.name}
                className="order-first rounded-[20px] p-[8px] md:order-none"
                style={{ background: "var(--grad-brand)" }}
              >
                <div className="rounded-[16px] bg-white px-[32px] pt-[30px] pb-[30px]">
                  <PlanBody plan={plan} />
                  <SectionLink
                    href="#contact"
                    className="btn-dark mt-[24px] flex h-[50px] items-center justify-center rounded-[10px] px-[12px] text-center text-[15px] font-medium"
                  >
                    {t(plan.cta)}
                  </SectionLink>
                  <PlanFeatures plan={plan} />
                </div>
              </div>
            ) : (
              <div
                key={plan.name}
                className="rounded-[20px] bg-white px-[32px] pt-[32px] pb-[32px] ring-1 ring-[#E4E4E7]"
              >
                <PlanBody plan={plan} />
                <SectionLink
                  href="#contact"
                  className="mt-[24px] flex h-[49px] items-center justify-center rounded-[10px] bg-[#F4F4F5] px-[12px] text-center text-[15px] font-medium text-[#131316] ring-1 ring-[#E4E4E7] transition-colors hover:bg-[#ECECEE]"
                >
                  {t(plan.cta)}
                </SectionLink>
                <PlanFeatures plan={plan} />
              </div>
            ),
          )}
        </div>

        {/* comparison table */}
        <div className="mt-[61px] overflow-x-auto rounded-[16px] ring-1 ring-[#E4E4E7]">
          <table className="w-full min-w-[900px] border-collapse text-left">
            <thead>
              <tr className="bg-white">
                <th className="h-[71px] w-1/4 px-[17px] text-[19px] font-medium text-[#131316]">
                  {t("tableFeature")}
                </th>
                <th className="h-[71px] w-1/4 px-[17px] text-[19px] font-medium text-[#131316]">
                  {t("plan1Name")}
                </th>
                <th className="h-[71px] w-1/4 px-[17px] text-[19px] font-medium text-[#131316]">
                  {t("plan2Name")}
                </th>
                <th className="h-[71px] w-1/4 px-[17px] text-[19px] font-medium text-[#131316]">
                  {t("plan3Name")}
                </th>
              </tr>
            </thead>
            <tbody>
              {ROWS.map((row, i) => (
                <tr key={row[0]} className={i % 2 === 0 ? "bg-[#F4F4F5]" : "bg-white"}>
                  {row.map((cell, j) => (
                    <td
                      key={cell}
                      className={`h-[71px] px-[17px] py-[14px] text-[15px] leading-[22px] text-[#131316] ${j === 0 ? "font-medium" : ""}`}
                    >
                      {t(cell)}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* contract terms, directly under the price table */}
        <div className="mt-[24px] rounded-[16px] bg-white px-[24px] py-[28px] ring-1 ring-[#E4E4E7] sm:px-[32px]">
          <h3 className="text-[19px] leading-none font-medium text-[#131316]">{t("termsTitle")}</h3>
          <dl className="mt-[20px] grid gap-x-[32px] gap-y-[16px] md:grid-cols-2">
            {TERMS.map(([label, value]) => (
              <div key={label} className="flex flex-col gap-[6px]">
                <dt className="text-[14px] leading-none font-medium text-[#131316]">{t(label)}</dt>
                <dd className="text-[14px] leading-[21px] text-[#51525C]">{t(value)}</dd>
              </div>
            ))}
          </dl>
        </div>
      </Container>
    </section>
  );
}
