import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { StatsStrip } from "@/components/site/StatsStrip";
import { ProcessSection } from "@/components/site/ProcessSection";
import { DeliverablesSection } from "@/components/site/DeliverablesSection";
import { AudienceSection } from "@/components/site/AudienceSection";
import { AdvisorSection } from "@/components/site/AdvisorSection";
import { TestimonialsSection } from "@/components/site/TestimonialsSection";
import { PricingSection } from "@/components/site/PricingSection";
import { FaqSection } from "@/components/site/FaqSection";
import { CtaBanner } from "@/components/site/CtaBanner";
import { Footer } from "@/components/site/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white font-sans">
      <Navbar />
      <Hero />
      <StatsStrip />
      <ProcessSection />
      <DeliverablesSection />
      <AudienceSection />
      <AdvisorSection />
      <TestimonialsSection />
      <PricingSection />
      <FaqSection />
      <CtaBanner />
      <Footer />
    </div>
  );
}
