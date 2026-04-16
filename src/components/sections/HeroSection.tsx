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
    }, 5000);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="mx-auto max-w-[1120px] px-6 py-28 md:px-12 md:py-44">
      <div className="grid items-center gap-12 lg:grid-cols-[1fr_1fr] lg:gap-16">
        {/* Left — copy */}
        <div>
          <p className="text-[11px] font-semibold tracking-[0.12em] text-accent uppercase">
            {t("eyebrow")}
          </p>

          <h1 className="mt-10 text-[40px] font-medium leading-[1.15] tracking-[-0.01em] text-text-primary md:text-[56px]">
            {t("title1")}
            <br />
            {t("title2")}
          </h1>

          <p className="mt-12 text-[17px] leading-[1.75] text-text-secondary">
            {t("subtitle")}
          </p>

          <div className="mt-16 flex flex-wrap items-center gap-6">
            <a
              href="#contact"
              className="inline-flex h-[44px] items-center rounded-sm bg-accent px-6 text-[14px] font-medium text-white transition-colors duration-150 hover:bg-accent-hover"
            >
              {t("cta")}
            </a>
            <a
              href="#services"
              className="group inline-flex items-center gap-2 text-[14px] font-medium text-text-secondary transition-colors duration-150 hover:text-accent"
            >
              {t("ctaSecondary")}
              <ArrowRight className="h-4 w-4 transition-transform duration-150 group-hover:translate-x-1" />
            </a>
          </div>

          <p className="mt-20 text-[11px] font-semibold tracking-[0.12em] text-text-tertiary uppercase">
            {t("trust")}
          </p>
        </div>

        {/* Right — photo slideshow */}
        <div className="flex justify-center lg:justify-end">
          <div className="relative aspect-[4/3] w-full max-w-[520px] overflow-hidden rounded-2xl">
            {heroImages.map((src, i) => (
              <Image
                key={src}
                src={src}
                alt="Founder presenting"
                fill
                className={`object-cover transition-opacity duration-1000 ${
                  i === activeIdx ? "opacity-100" : "opacity-0"
                }`}
                priority={i === 0}
              />
            ))}
            {/* Dot indicators */}
            <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
              {heroImages.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveIdx(i)}
                  className={`h-2 w-2 rounded-full transition-colors duration-300 ${
                    i === activeIdx ? "bg-white" : "bg-white/40"
                  }`}
                  aria-label={`Photo ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
