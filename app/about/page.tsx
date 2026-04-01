import type { Metadata } from "next";
import { PageHero } from "@/components/sections/page-hero";
import { Container } from "@/components/ui/container";
import { InfoCard } from "@/components/ui/info-card";

export const metadata: Metadata = {
  title: "About",
  description: "Learn about Apex Receivables Group and our approach to ethical, high-performance debt recovery.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero title="About Apex Receivables Group" description="We help organizations recover revenue with integrity, analytics, and industry-specific expertise." />
      <section className="py-16">
        <Container className="grid gap-6 md:grid-cols-3">
          <InfoCard title="Our mission" description="Deliver measurable receivables outcomes while protecting client brands and consumer dignity." />
          <InfoCard title="Our approach" description="Compliance-led operations, transparent performance reporting, and tailored workflows by segment." />
          <InfoCard title="Our people" description="Specialized teams in healthcare, government, commercial finance, and customer communications." />
        </Container>
      </section>
    </>
  );
}
