import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { Container, Eyebrow } from "@/components/site/ui";
import { ContactForm } from "@/components/site/ContactForm";

type Props = {
  params: Promise<{ locale: string }>;
  searchParams: Promise<{ plan?: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "site.contactPage" });
  return {
    title: t("metaTitle"),
    description: t("metaDescription"),
  };
}

/* 無料相談の3つの前提。左カラムに置いて、フォームを書き始める前に
   「何のための30分か」が分かるようにする。 */
const POINTS = ["point1", "point2", "point3"] as const;

const ICONS: Record<(typeof POINTS)[number], React.ReactNode> = {
  point1: (
    <path
      d="M12 6v6l4 2M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
      stroke="#fff"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
  point2: (
    <path
      d="M12 3l7.5 3v5.25c0 4.33-3.2 8.38-7.5 9.75-4.3-1.37-7.5-5.42-7.5-9.75V6L12 3Z"
      stroke="#fff"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
  point3: (
    <path
      d="M4 7h16M4 12h16M4 17h9"
      stroke="#fff"
      strokeWidth="1.7"
      strokeLinecap="round"
    />
  ),
};

export default async function ContactPage({ params, searchParams }: Props) {
  const { locale } = await params;
  const { plan } = await searchParams;
  const t = await getTranslations({ locale, namespace: "site.contactPage" });

  return (
    <div className="min-h-screen bg-white font-sans">
      <Navbar />

      <section
        className="dot-field relative -mt-[78px] overflow-hidden"
        style={{ background: "var(--grad-hero)" }}
      >
        <Container className="relative z-10">
          <div className="grid gap-[48px] pt-[130px] pb-[90px] lg:grid-cols-[1fr_520px] lg:gap-[80px] lg:pt-[170px] lg:pb-[120px]">
            <div className="lg:pt-[10px]">
              <Eyebrow>{t("eyebrow")}</Eyebrow>
              <h1 className="mt-[22px] text-[36px] leading-[1.17] font-bold tracking-[-0.01em] text-[#131316] [line-break:strict] [word-break:keep-all] md:text-[46px] lg:text-[52px] lg:leading-[60px]">
                {t("titleLine1")}
                <br />
                {t("titleLine2")}
              </h1>
              <p className="mt-[22px] max-w-[470px] text-[16px] leading-[25px] text-[#51525C]">
                {t("subtitle")}
              </p>

              <ul className="mt-[44px] space-y-[26px]">
                {POINTS.map((p) => (
                  <li key={p} className="flex items-start gap-[14px]">
                    <span
                      className="mt-[1px] flex h-[34px] w-[34px] shrink-0 items-center justify-center rounded-full"
                      style={{ background: "var(--grad-brand)" }}
                      aria-hidden="true"
                    >
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                        {ICONS[p]}
                      </svg>
                    </span>
                    <span>
                      <span className="block text-[16px] leading-[24px] font-medium text-[#131316]">
                        {t(`${p}Title`)}
                      </span>
                      <span className="mt-[4px] block max-w-[400px] text-[15px] leading-[23px] text-[#51525C]">
                        {t(`${p}Desc`)}
                      </span>
                    </span>
                  </li>
                ))}
              </ul>

              <p className="mt-[40px] text-[14px] leading-[21px] text-[#70707B]">
                {t("emailDirect")}{" "}
                <a
                  href="mailto:contact@the-unchain.com"
                  className="font-medium text-[#004DFF] underline-offset-2 hover:underline"
                >
                  contact@the-unchain.com
                </a>
              </p>
            </div>

            <div className="lg:self-start">
              <ContactForm planParam={plan} />
            </div>
          </div>
        </Container>
      </section>

      <Footer />
    </div>
  );
}
