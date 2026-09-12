import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { StatsStrip } from "@/components/site/StatsStrip";
import { AudienceSection } from "@/components/site/AudienceSection";
import { RoadmapSection } from "@/components/site/RoadmapSection";
import { ProcessSection } from "@/components/site/ProcessSection";
import { DeliverablesSection } from "@/components/site/DeliverablesSection";
import { ComparisonSection } from "@/components/site/ComparisonSection";
import { AdvisorSection } from "@/components/site/AdvisorSection";
import { PricingSection } from "@/components/site/PricingSection";
import { FaqSection } from "@/components/site/FaqSection";
import { CtaBanner } from "@/components/site/CtaBanner";
import { Footer } from "@/components/site/Footer";

/**
 * ヒーロー ＞ 対象企業 ＞ 最初の3カ月 ＞ ご支援の流れ ＞ 成果物 ＞
 * 他の選択肢との違い ＞ 導入事例 ＞ 支援体制 ＞ 料金 ＞ FAQ ＞ 最終CTA・フッター
 *
 * 導入事例（TestimonialsSection）は、掲載許諾・原文確認・数値根拠が揃うまで非表示。
 * 公開時は ComparisonSection と AdvisorSection の間に戻す。
 */
export default function Home() {
  return (
    <div className="min-h-screen bg-white font-sans">
      <Navbar />
      <Hero />
      <StatsStrip />
      <AudienceSection />
      <RoadmapSection />
      <ProcessSection />
      <DeliverablesSection />
      <ComparisonSection />
      <AdvisorSection />
      <PricingSection />
      <FaqSection />
      <CtaBanner />
      <Footer />
    </div>
  );
}
