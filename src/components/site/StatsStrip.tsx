import { useTranslations } from "next-intl";
import { Container } from "./ui";

const ITEMS = [
  { icon: "/art/icon-calendar.svg", label: "item1Label", value: "item1Value" },
  { icon: "/art/icon-chat.svg", label: "item2Label", value: "item2Value" },
  { icon: "/art/icon-bolt.svg", label: "item3Label", value: "item3Value" },
  { icon: "/art/icon-tag.svg", label: "item4Label", value: "item4Value" },
] as const;

export function StatsStrip() {
  const t = useTranslations("site.stats");

  return (
    <section className="border-b border-[#E4E4E7] bg-white">
      <Container>
        <div className="grid grid-cols-2 gap-x-[30px] gap-y-8 py-[34px] lg:grid-cols-4">
          {ITEMS.map((item) => (
            <div key={item.label} className="flex items-center gap-[16px]">
              <span
                className="flex h-[44px] w-[44px] shrink-0 items-center justify-center rounded-[10px] ring-1 ring-[#E4E4E7]"
                style={{ background: "var(--grad-chip)" }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={item.icon} alt="" aria-hidden="true" width={20} height={20} />
              </span>
              <span className="flex h-[44px] min-w-0 flex-col justify-between pt-[2px]">
                <span className="text-[14px] leading-none text-[#70707B]">{t(item.label)}</span>
                <span className="text-[16px] leading-none font-bold text-[#131316]">
                  {t(item.value)}
                </span>
              </span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
