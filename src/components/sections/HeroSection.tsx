"use client";

import { useTranslations } from "next-intl";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

const heroImages = ["/founder-hero.png", "/founder-hero-2.png"];

export function HeroSection() {
  const t = useTranslations("hero");
  const [activeIdx, setActiveIdx] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % heroImages.length);
    }, 6000);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="bg-bg-primary">
      <div className="mx-auto max-w-[1200px] px-6 py-20 md:px-12 md:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left: Content */}
          <div>
            <span className="inline-block rounded-full bg-bg-secondary px-4 py-1.5 text-[11px] font-medium tracking-[0.12em] text-text-tertiary uppercase">
              {t("eyebrow")}
            </span>

            <h1 className="mt-8 font-[var(--font-display)] text-[36px] font-light leading-[1.15] tracking-[-0.02em] text-text-primary md:text-[52px]">
              {t("title1")}
              <br />
              {t("title2")}
            </h1>

            <p className="mt-6 max-w-[480px] text-[15px] leading-[1.8] text-text-secondary">
              {t("subtitle")}
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href="#contact"
                className="inline-flex h-[48px] items-center rounded-full bg-accent px-8 text-[14px] font-medium text-white transition-all duration-200 hover:bg-accent-hover hover:shadow-lg"
              >
                {t("cta")}
              </a>
              <a
                href="#services"
                className="group inline-flex h-[48px] items-center gap-2 rounded-full border border-border-default px-7 text-[14px] font-medium text-text-primary transition-all duration-200 hover:border-accent hover:text-accent"
              >
                {t("ctaSecondary")}
                <ArrowRight className="h-4 w-4 transition-transform duration-150 group-hover:translate-x-1" />
              </a>
            </div>
          </div>

          {/* Right: Contained photo */}
          <div className="relative">
            <div className="overflow-hidden rounded-[24px] bg-bg-secondary shadow-lg">
              <div className="relative aspect-[4/5]">
                {heroImages.map((src, i) => (
                  <Image
                    key={src}
                    src={src}
                    alt=""
                    fill
                    className={`object-cover transition-opacity duration-1000 ${
                      i === activeIdx ? "opacity-100" : "opacity-0"
                    }`}
                    priority={i === 0}
                  />
                ))}
              </div>
            </div>

            {/* Photo dots */}
            <div className="mt-4 flex justify-center gap-2">
              {heroImages.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveIdx(i)}
                  className={`rounded-full transition-all duration-300 ${
                    i === activeIdx
                      ? "h-2 w-6 bg-accent"
                      : "h-2 w-2 bg-border-default hover:bg-accent/40"
                  }`}
                  aria-label={`Photo ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Trust strip */}
      <div className="border-t border-border-subtle">
        <div className="mx-auto max-w-[1200px] px-6 py-4 md:px-12">
          <p className="text-[11px] tracking-[0.08em] text-text-tertiary">
            {t("trust")}
          </p>
        </div>
      </div>
    </section>
  );
}
