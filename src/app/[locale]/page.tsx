"use client";

import { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { ProblemSection } from "@/components/sections/ProblemSection";
import { PainPersonasSection } from "@/components/sections/PainPersonasSection";
import { PillarsSection } from "@/components/sections/PillarsSection";
import { ServiceFlowSection } from "@/components/sections/ServiceFlowSection";
import { VirtuousCycleSection } from "@/components/sections/VirtuousCycleSection";
import { WhyChosenSection } from "@/components/sections/WhyChosenSection";
import { FounderSection } from "@/components/sections/FounderSection";
import { ProjectShowcaseSection } from "@/components/sections/ProjectShowcaseSection";
import { DepartmentUseCasesSection } from "@/components/sections/DepartmentUseCasesSection";
import { ComparisonSection } from "@/components/sections/ComparisonSection";
import { PricingSection } from "@/components/sections/PricingSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { LadderSection } from "@/components/sections/LadderSection";
import { SeminarsSection } from "@/components/sections/SeminarsSection";
import { NewsSection } from "@/components/sections/NewsSection";
import { ContactSection } from "@/components/sections/ContactSection";

export default function Home() {
  const [selectedPlan, setSelectedPlan] = useState("");

  return (
    <div className="min-h-screen bg-bg-primary font-sans">
      <Navbar />
      <HeroSection />
      <ProblemSection />
      <PainPersonasSection />
      <PillarsSection />
      <ServiceFlowSection />
      <VirtuousCycleSection />
      <WhyChosenSection />
      <FounderSection />
      <ProjectShowcaseSection />
      <DepartmentUseCasesSection />
      <ComparisonSection />
      <PricingSection onSelectPlan={setSelectedPlan} />
      <TestimonialsSection />
      <LadderSection />
      <SeminarsSection />
      <NewsSection />
      <ContactSection selectedPlan={selectedPlan} />
      <Footer />
    </div>
  );
}
