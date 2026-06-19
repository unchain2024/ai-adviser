"use client";

import { useTranslations } from "next-intl";

export function Footer() {
  const t = useTranslations("footer");

  const columns = [
    {
      title: t("company.title"),
      links: [
        { label: t("company.about"), href: "#" },
        { label: t("company.founder"), href: "#founder" },
        { label: t("company.careers"), href: "#" },
      ],
    },
    {
      title: t("services.title"),
      links: [
        { label: t("services.advisory"), href: "#services" },
        { label: t("services.dxFoundation"), href: "#services" },
        { label: t("services.governance"), href: "#services" },
      ],
    },
    {
      title: t("resources.title"),
      links: [
        { label: t("resources.cases"), href: "#track-record" },
        { label: t("resources.blog"), href: "#" },
        { label: t("resources.download"), href: "#" },
      ],
    },
    {
      title: t("legal.title"),
      links: [
        { label: t("legal.privacy"), href: "https://www.the-unchain.com/privacy-policy" },
        { label: t("legal.terms"), href: "https://www.the-unchain.com/terms-of-use" },
        { label: t("legal.security"), href: "#" },
        { label: t("legal.contact"), href: "#contact" },
      ],
    },
  ];

  return (
    <footer className="bg-[#141413]">
      <div className="mx-auto max-w-[1200px] px-6 py-16 md:px-12">
        <div className="grid gap-12 md:grid-cols-5">
          {/* Brand column */}
          <div>
            <p className="font-[var(--font-display)] text-[18px] font-medium tracking-[0.02em] text-white">
              UNCHAIN
            </p>
            <p className="mt-1 text-[10px] font-medium tracking-[0.14em] text-white/40 uppercase">
              AI ADVISER
            </p>
          </div>

          {/* Link columns */}
          {columns.map((col) => (
            <div key={col.title}>
              <p className="text-[11px] font-medium tracking-[0.12em] text-white/50 uppercase">
                {col.title}
              </p>
              <ul className="mt-5 space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      {...(link.href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                      className="text-[14px] text-white/40 transition-colors duration-150 hover:text-white"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/8">
        <div className="mx-auto flex max-w-[1200px] items-center justify-between px-6 py-4 md:px-12">
          <p className="text-[12px] text-white/30">{t("copyright")}</p>
          <p className="text-[12px] text-white/30">{t("backedBy")}</p>
        </div>
      </div>
    </footer>
  );
}
