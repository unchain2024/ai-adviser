import { useLocale, useTranslations } from "next-intl";
import { ArtLayer, ArtText, Container, Eyebrow } from "./ui";
import { CardCarousel } from "./CardCarousel";

/* Card media boxes are 392 × 342 in the design canvas. */
const BOX: [number, number] = [392, 342];

function Chip({ children }: { children: React.ReactNode }) {
  return (
    <span
      className="inline-flex h-[31px] items-center rounded-full px-[13px] text-[12px] leading-none text-[#131316] ring-1 ring-[#E4E4E7]"
      style={{ background: "var(--grad-chip)" }}
    >
      {children}
    </span>
  );
}

function Card({
  title,
  desc,
  chips,
  media,
}: {
  title: string;
  desc: string;
  chips: string[];
  media: React.ReactNode;
}) {
  return (
    <article className="flex flex-col overflow-hidden rounded-[20px] bg-[#F5F5F5] ring-1 ring-[#E4E4E7]">
      {media}
      <div className="px-[24px] pt-[27px] pb-[18px]">
        <h3 className="text-[24px] leading-none font-medium text-[#131316]">{title}</h3>
        <p className="mt-[12px] text-[14px] leading-[21px] text-[#51525C]">{desc}</p>
        <div className="mt-[21px] flex flex-wrap gap-[8px]">
          {chips.map((c) => (
            <Chip key={c}>{c}</Chip>
          ))}
        </div>
      </div>
    </article>
  );
}

export function ProcessSection() {
  const t = useTranslations("site.process");
  // Latin labels run wider than the CJK originals; the status pills and kanban
  // headers are fixed-width shapes, so English drops a size to stay inside them.
  const chipSize = useLocale() === "ja" ? 16 : 13;
  const columnSize = useLocale() === "ja" ? 14 : 13;
  const itemSize = useLocale() === "ja" ? 16 : 15;
  const statusBox =
    useLocale() === "ja"
      ? ({ x: 843 } as const)
      : ({ x: 838.5, width: 34, align: "center" } as const);

  return (
    <section id="process" className="scroll-mt-[78px] bg-white pt-[120px] pb-[120px]">
      <Container>
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="lg:max-w-[760px]">
            <Eyebrow>{t("eyebrow")}</Eyebrow>
            <h2 className="mt-[22px] text-[28px] leading-[1.15] font-bold tracking-[-0.01em] text-black [line-break:strict] [overflow-wrap:anywhere] [word-break:keep-all] sm:text-[34px] md:text-[46px] lg:text-[55px]">
              {t("title")}
            </h2>
          </div>
          <p className="max-w-none text-[16px] leading-[24px] text-[#51525C] lg:max-w-[318px] lg:pb-[2px]">
            {t("note")}
          </p>
        </div>

        <div className="mt-[57px]">
          <CardCarousel gridClassName="gap-[12px] lg:grid-cols-3">
            <Card
              title={t("card1Title")}
              desc={t("card1Desc")}
              chips={[t("card1Chip1"), t("card1Chip2"), t("card1Chip3")]}
              media={
                <ArtLayer src="/art/s1-a.svg" w={392} h={342}>
                  <ArtText box={BOX} origin={[120, 278]} x={430} y={569} size={12} color="#131316" weight={500}>
                    {t("card1ArtRole")}
                  </ArtText>
                </ArtLayer>
              }
            />
            <Card
              title={t("card2Title")}
              desc={t("card2Desc")}
              chips={[t("card2Chip1"), t("card2Chip2"), t("card2Chip3")]}
              media={
                <ArtLayer src="/art/s1-b.svg" w={392} h={342}>
                  <ArtText box={BOX} origin={[524, 278]} x={648} y={297} size={14} color="#70707B" weight={400}>
                    {t("card2ArtHeading")}
                  </ArtText>
                  <ArtText box={BOX} origin={[524, 278]} x={562} y={351} size={16} color="#FFFFFF" weight={500}>
                    {t("card2ArtQuestion")}
                  </ArtText>
                  <ArtText box={BOX} origin={[524, 278]} x={692} y={433.5} middle size={itemSize} color="#131316" weight={500}>
                    {t("card2ArtItem")}
                  </ArtText>
                  <ArtText box={BOX} origin={[524, 278]} x={692} y={491.5} middle size={itemSize} color="#131316" weight={500}>
                    {t("card2ArtItem2")}
                  </ArtText>
                  <ArtText box={BOX} origin={[524, 278]} x={692} y={549.5} middle size={itemSize} color="#131316" weight={500}>
                    {t("card2ArtItem3")}
                  </ArtText>
                  <ArtText box={BOX} origin={[524, 278]} {...statusBox} y={433.5} middle size={chipSize} color="#131316" weight={500}>
                    {t("card2ArtHigh")}
                  </ArtText>
                  <ArtText box={BOX} origin={[524, 278]} {...statusBox} y={491.5} middle size={chipSize} color="#131316" weight={500}>
                    {t("card2ArtMid")}
                  </ArtText>
                  <ArtText box={BOX} origin={[524, 278]} {...statusBox} y={549.5} middle size={chipSize} color="#131316" weight={500}>
                    {t("card2ArtLow")}
                  </ArtText>
                </ArtLayer>
              }
            />
            <Card
              title={t("card3Title")}
              desc={t("card3Desc")}
              chips={[t("card3Chip1"), t("card3Chip2"), t("card3Chip3")]}
              media={
                <ArtLayer src="/art/s1-c.svg" w={392} h={342}>
                  <ArtText box={BOX} origin={[928, 278]} x={950} y={304} size={16} color="#131316" weight={500}>
                    {t("card3ArtTitle")}
                  </ArtText>
                  <ArtText box={BOX} origin={[928, 278]} x={1211} y={303} size={13} color="#131316" weight={400}>
                    {t("card3ArtProgress")}
                  </ArtText>
                  <ArtText box={BOX} origin={[928, 278]} x={960} y={365.5} middle size={columnSize} color="#131316" weight={500}>
                    {t("card3ArtTodo")}
                  </ArtText>
                  <ArtText box={BOX} origin={[928, 278]} x={1080} y={365.5} middle size={columnSize} color="#131316" weight={500}>
                    {t("card3ArtDoing")}
                  </ArtText>
                  <ArtText box={BOX} origin={[928, 278]} x={1199} y={365.5} middle size={columnSize} color="#131316" weight={500}>
                    {t("card3ArtDone")}
                  </ArtText>
                  <ArtText
                    box={BOX} origin={[928, 278]}
                    x={1207}
                    y={394}
                    size={10}
                    width={72}
                    lineHeight={12}
                    color="#51525C"
                    weight={400}
                  >
                    {t("card3ArtTask1")}
                  </ArtText>
                  <ArtText
                    box={BOX} origin={[928, 278]}
                    x={1207}
                    y={442}
                    size={10}
                    width={72}
                    lineHeight={12}
                    color="#51525C"
                    weight={400}
                  >
                    {t("card3ArtTask2")}
                  </ArtText>
                </ArtLayer>
              }
            />
          </CardCarousel>
        </div>
      </Container>
    </section>
  );
}
