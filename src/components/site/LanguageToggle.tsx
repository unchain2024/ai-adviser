"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "next/navigation";

export function LanguageToggle({ tone = "dark" }: { tone?: "dark" | "light" }) {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  function switchLocale(next: string) {
    if (next === locale) return;
    const segments = pathname.split("/");
    segments[1] = next;
    const search = typeof window === "undefined" ? "" : window.location.search;
    // scroll: false keeps the reader where they were — only the words change
    router.push((segments.join("/") || "/") + search, { scroll: false });
  }

  const base = tone === "light" ? "text-white" : "text-[#131316]";

  return (
    <div className={`flex items-center gap-1.5 text-[12px] font-medium tracking-wide ${base}`}>
      <button
        type="button"
        onClick={() => switchLocale("ja")}
        className={`transition-opacity duration-150 ${locale === "ja" ? "opacity-100" : "opacity-40 hover:opacity-70"}`}
      >
        JA
      </button>
      <span className="opacity-30" aria-hidden="true">
        ·
      </span>
      <button
        type="button"
        onClick={() => switchLocale("en")}
        className={`transition-opacity duration-150 ${locale === "en" ? "opacity-100" : "opacity-40 hover:opacity-70"}`}
      >
        EN
      </button>
    </div>
  );
}
