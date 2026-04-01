import type { Metadata } from "next";
import { HeroSection } from "@/components/sections/HeroSection";
import { StatsSection } from "@/components/sections/StatsSection";
import { WhyUsSection } from "@/components/sections/WhyUsSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { IndustriesSection } from "@/components/sections/IndustriesSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { ResourcesPreviewSection } from "@/components/sections/ResourcesPreviewSection";
import { CtaSection } from "@/components/sections/CtaSection";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: `${siteConfig.name} | ${siteConfig.tagline}`,
  description: siteConfig.description,
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <WhyUsSection />
      <ServicesSection />
      <IndustriesSection />
      <TestimonialsSection />
      <ResourcesPreviewSection />
      <CtaSection />
    </>
  );
}
