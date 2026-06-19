"use client";

import { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { ProblemSection } from "@/components/sections/ProblemSection";
import { PillarsSection } from "@/components/sections/PillarsSection";
import { WhyChosenSection } from "@/components/sections/WhyChosenSection";
import { ProjectShowcaseSection } from "@/components/sections/ProjectShowcaseSection";
import { FounderSection } from "@/components/sections/FounderSection";
import { PricingSection } from "@/components/sections/PricingSection";
import { ContactSection } from "@/components/sections/ContactSection";

export default function Home() {
  const [selectedPlan, setSelectedPlan] = useState("");

  return (
    <div className="min-h-screen bg-bg-primary font-sans">
      <Navbar />
      <HeroSection />
      <ProblemSection />
      <PillarsSection />
      <WhyChosenSection />
      <ProjectShowcaseSection />
      <FounderSection />
      <PricingSection onSelectPlan={setSelectedPlan} />
      <ContactSection selectedPlan={selectedPlan} />
      <Footer />
    </div>
  );
}
