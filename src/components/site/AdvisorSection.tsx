import { useTranslations } from "next-intl";
import { Container, Eyebrow } from "./ui";

function Screw({ className }: { className: string }) {
  return (
    <span
      className={`absolute h-[9.29px] w-[9.29px] rounded-full bg-[#C2C2C2] ${className}`}
      style={{ boxShadow: "0 0 0 3.71605px #fff, 0 1px 2px rgba(0,0,0,0.18)" }}
      aria-hidden="true"
    />
  );
}

export function AdvisorSection() {
  const t = useTranslations("site.advisor");

  return (
    <section id="advisor" className="scroll-mt-[78px] bg-[#F4F4F5] pt-[120px] pb-[120px]">
      <Container>
        <div className="grid gap-14 lg:grid-cols-[420px_1fr] lg:gap-x-[60px] lg:pl-[17.5px]">
          {/* photo card */}
          <div className="relative mx-auto w-full max-w-[420px] rounded-[25px] bg-white px-[30px] pt-[30px] pb-[26px] shadow-[0_4px_4px_rgba(0,0,0,0.06)] ring-1 ring-[#E9E9E9] lg:mx-0">
            <Screw className="top-[17px] left-[17px]" />
            <Screw className="top-[17px] right-[17px]" />
            <Screw className="bottom-[21px] left-[17px]" />
            <Screw className="bottom-[21px] right-[17px]" />

            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/art/s4-photo.svg"
              alt={t("name")}
              className="w-full rounded-[16px]"
              width={360}
              height={383}
            />
            <p className="mt-[20px] text-center text-[22px] leading-none font-normal text-[#131316]">
              {t("name")}
            </p>
            <p className="mt-[16px] text-center text-[14px] leading-none text-[#70707B]">
              {t("role")}
            </p>
          </div>

          {/* copy */}
          <div className="flex flex-col">
            <Eyebrow>{t("eyebrow")}</Eyebrow>
            <h2 className="mt-[22px] text-[34px] leading-[1.15] font-bold tracking-[-0.01em] text-black md:text-[46px] lg:text-[55px] lg:leading-[64px] [line-break:strict] [word-break:keep-all]">
              {t("titleLine1")}
              <br />
              {t("titleLine2")}
            </h2>
            <p className="mt-[24px] text-[16px] leading-[23px] text-[#51525C]">
              {t("descLine1")}
              <br />
              {t("descLine2")}
            </p>

            <div className="mt-[52px] lg:mt-auto">
              <ul className="space-y-[9px] text-[16px] leading-[14px] text-[#51525C]">
                <li className="flex gap-[9px]">
                  <span aria-hidden="true">•</span>
                  <span className="leading-[16px]">{t("bullet1")}</span>
                </li>
                <li className="flex gap-[9px]">
                  <span aria-hidden="true">•</span>
                  <span className="leading-[16px]">{t("bullet2")}</span>
                </li>
              </ul>
              <p className="mt-[9px] text-[16px] leading-[23px] text-[#51525C]">{t("note1")}</p>
              <p className="text-[16px] leading-[23px] text-[#51525C]">{t("team")}</p>
              <p className="text-[16px] leading-[23px] text-[#51525C]">{t("note2")}</p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
