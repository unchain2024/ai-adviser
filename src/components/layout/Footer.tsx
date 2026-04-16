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
        { label: t("company.news"), href: "#news" },
        { label: t("company.careers"), href: "#" },
      ],
    },
    {
      title: t("services.title"),
      links: [
        { label: t("services.advisory"), href: "#services" },
        { label: t("services.dxFoundation"), href: "#services" },
        { label: t("services.governance"), href: "#services" },
        { label: t("services.asguard"), href: "#" },
        { label: t("services.neuron"), href: "#" },
      ],
    },
    {
      title: t("resources.title"),
      links: [
        { label: t("resources.cases"), href: "#testimonials" },
        { label: t("resources.seminars"), href: "#seminars" },
        { label: t("resources.blog"), href: "#" },
        { label: t("resources.download"), href: "#" },
      ],
    },
    {
      title: t("legal.title"),
      links: [
        { label: t("legal.privacy"), href: "#" },
        { label: t("legal.terms"), href: "#" },
        { label: t("legal.security"), href: "#" },
        { label: t("legal.contact"), href: "#contact" },
      ],
    },
  ];

  return (
    <footer className="border-t border-border-subtle bg-bg-primary">
      <div className="mx-auto max-w-[1120px] px-6 py-16 md:px-12">
        <div className="grid gap-12 md:grid-cols-5">
          {/* Brand column */}
          <div>
            <p className="font-inter text-[18px] font-semibold tracking-[0.02em] text-text-primary">
              UNCHAIN
            </p>
            <p className="mt-1 text-[11px] font-semibold tracking-[0.12em] text-text-tertiary uppercase">
              {t("tagline")}
            </p>
          </div>

          {/* Link columns */}
          {columns.map((col) => (
            <div key={col.title}>
              <div>
                <p className="text-[11px] font-semibold tracking-[0.12em] text-text-tertiary uppercase">
                  {col.title}
                </p>
                <span className="mt-2 block h-px w-6 bg-accent" />
              </div>
              <ul className="mt-4 space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-[14px] font-normal text-text-secondary transition-colors duration-150 hover:text-accent"
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
      <div className="border-t border-border-subtle">
        <div className="mx-auto flex max-w-[1120px] items-center justify-between px-6 py-4 md:px-12">
          <p className="text-[12px] text-text-tertiary">{t("copyright")}</p>
          <p className="text-[12px] text-text-tertiary">{t("backedBy")}</p>
        </div>
      </div>
    </footer>
  );
}
