"use client";

import { useLocale } from "next-intl";
import { useRouter, usePathname } from "next/navigation";

export function LanguageToggle() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  function switchLocale(newLocale: string) {
    const segments = pathname.split("/");
    segments[1] = newLocale;
    router.push(segments.join("/"));
  }

  return (
    <div className="flex items-center gap-1.5 text-[12px] font-medium tracking-wide">
      <button
        onClick={() => switchLocale("ja")}
        className={`transition-opacity duration-200 ${
          locale === "ja"
            ? "text-text-primary opacity-100"
            : "text-text-primary opacity-40 hover:opacity-70"
        }`}
      >
        JA
      </button>
      <span className="text-text-primary opacity-30" aria-hidden="true">·</span>
      <button
        onClick={() => switchLocale("en")}
        className={`transition-opacity duration-200 ${
          locale === "en"
            ? "text-text-primary opacity-100"
            : "text-text-primary opacity-40 hover:opacity-70"
        }`}
      >
        EN
      </button>
    </div>
  );
}
