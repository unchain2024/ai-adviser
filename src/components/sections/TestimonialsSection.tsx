"use client";

import { useState, useEffect, useCallback } from "react";
import { useTranslations } from "next-intl";
import { SectionReveal } from "@/components/ui/SectionReveal";

export function TestimonialsSection() {
  const t = useTranslations("testimonials");
  const items = [0, 1, 2, 3];
  const [current, setCurrent] = useState(0);
  const [fadeKey, setFadeKey] = useState(0);

  const goTo = useCallback((idx: number) => {
    setCurrent(idx);
    setFadeKey((k) => k + 1);
  }, []);

  // Auto-rotate every 7 seconds
  useEffect(() => {
    const id = setInterval(() => {
      goTo((current + 1) % 4);
    }, 7000);
    return () => clearInterval(id);
  }, [current, goTo]);

  return (
    <SectionReveal id="testimonials" className="bg-bg-primary">
      <div className="mx-auto max-w-[1120px] px-6 py-40 md:py-[200px]">
        <p className="text-[11px] font-semibold tracking-[0.12em] uppercase text-accent">
          12
        </p>
        <h2 className="mt-4 text-[40px] font-medium leading-[1.2] tracking-[-0.01em]">
          {t("title")}
        </h2>

        {/* Single quote gallery */}
        <div className="mt-20 flex flex-col items-center">
          <div key={fadeKey} className="animate-fade-slide-in relative max-w-[640px] mx-auto text-center">
            {/* Opening quote mark */}
            <span className="absolute -top-10 -left-10 text-[72px] leading-none text-accent/20 select-none">
              「
            </span>

            <p className="text-[24px] font-normal leading-[1.9]">
              {t(`items.${current}.quote`)}
            </p>

            {/* Closing quote mark */}
            <span className="absolute -bottom-10 -right-10 text-[72px] leading-none text-accent/20 select-none">
              」
            </span>
          </div>

          {/* Attribution */}
          <div key={`attr-${fadeKey}`} className="animate-fade-slide-in mt-16 flex flex-col items-center">
            <div className="h-px w-6 bg-accent" />
            <p className="mt-4 text-sm font-medium text-text-secondary">
              {t(`items.${current}.attr`)}
            </p>
            <p className="mt-1 text-sm font-medium">
              {t(`items.${current}.org`)}
            </p>
          </div>

          {/* Navigation */}
          <div className="mt-12 flex items-center gap-6">
            <button
              onClick={() => goTo((current - 1 + 4) % 4)}
              className="text-sm text-text-secondary transition-colors duration-150 hover:text-accent"
            >
              ‹ previous
            </button>

            <div className="flex items-center gap-2">
              {items.map((i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  className={`block rounded-full transition-all duration-300 ${
                    i === current ? "h-2 w-6 bg-accent" : "h-2 w-2 bg-border-default hover:bg-accent/40"
                  }`}
                  aria-label={`Testimonial ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={() => goTo((current + 1) % 4)}
              className="text-sm text-text-secondary transition-colors duration-150 hover:text-accent"
            >
              next ›
            </button>
          </div>

          {/* Progress bar */}
          <div className="mt-6 h-px w-32 bg-border-subtle overflow-hidden rounded-full">
            <div
              key={`progress-${fadeKey}`}
              className="h-full bg-accent"
              style={{ animation: "progress-fill 7s linear forwards" }}
            />
          </div>
          <style jsx>{`
            @keyframes progress-fill {
              from { width: 0%; }
              to { width: 100%; }
            }
          `}</style>
        </div>
      </div>
    </SectionReveal>
  );
}
