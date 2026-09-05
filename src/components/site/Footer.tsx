import { useLocale, useTranslations } from "next-intl";
import { Container, Eyebrow } from "./ui";
import { SectionLink } from "./SectionLink";

const NAV = [
  { key: "process", href: "#process" },
  { key: "deliverables", href: "#deliverables" },
  { key: "audience", href: "#audience" },
  { key: "pricing", href: "#pricing" },
  { key: "faq", href: "#faq" },
] as const;

/** Legal pages live on the main UNCHAIN site, which mirrors our locales. */
const LEGAL = [
  { key: "privacy", path: "privacy-policy" },
  { key: "terms", path: "terms-of-use" },
  { key: "security", path: "trust-security" },
] as const;

const SOCIAL = [
  { key: "x", icon: "/art/social-x.svg", href: "https://x.com/" },
  { key: "linkedin", icon: "/art/social-linkedin.svg", href: "https://www.linkedin.com/" },
  { key: "medium", icon: "/art/social-medium.svg", href: "https://medium.com/" },
] as const;

export function Footer() {
  const tf = useTranslations("site.footer");
  const tn = useTranslations("site.nav");
  const locale = useLocale();

  return (
    <footer className="relative overflow-hidden bg-black pt-[62px] pb-[28px]">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/art/compass-footer.svg"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-0 hidden lg:block"
        style={{ top: "170px" }}
      />

      <Container className="relative">
        <div className="grid gap-12 lg:grid-cols-[1fr_183px_254px_170px] lg:gap-x-0">
          <div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/art/logo-light.svg"
              alt="AI ADVISOR by UNCHAIN"
              width={132}
              height={35}
            />
          </div>

          <nav>
            <Eyebrow className="text-white">{tf("navTitle")}</Eyebrow>
            <ul className="mt-[21px] space-y-[23px] leading-none">
              {NAV.map((l) => (
                <li key={l.key}>
                  <SectionLink
                    href={l.href}
                    className="text-[16px] leading-none text-white transition-opacity hover:opacity-70"
                  >
                    {tn(l.key)}
                  </SectionLink>
                </li>
              ))}
            </ul>
          </nav>

          <nav>
            <Eyebrow className="text-white">{tf("legalTitle")}</Eyebrow>
            <ul className="mt-[21px] space-y-[23px] leading-none">
              {LEGAL.map((l) => (
                <li key={l.key}>
                  <a
                    href={`https://www.the-unchain.com/${locale}/${l.path}`}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="text-[16px] leading-none text-white transition-opacity hover:opacity-70"
                  >
                    {tf(l.key)}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <Eyebrow className="text-white">{tf("socialTitle")}</Eyebrow>
            <ul className="mt-[19px] space-y-[16px]">
              {SOCIAL.map((s) => (
                <li key={s.key}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="flex items-center gap-[12px] transition-opacity hover:opacity-70"
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={s.icon} alt="" aria-hidden="true" width={28} height={28} />
                    <span className="text-[15px] leading-none text-white">{tf(s.key)}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <hr className="mt-[82px] border-0 border-t border-[#26272B]" />
        <p className="mt-[26px] text-center text-[13px] leading-none text-white">
          {tf("copyright")}
        </p>
      </Container>
    </footer>
  );
}
