import type { Metadata } from "next";
import { PageHero } from "@/components/sections/page-hero";
import { Container } from "@/components/ui/container";

export const metadata: Metadata = {
  title: "Industries",
  description: "Industry-focused receivables and debt recovery services for regulated markets.",
};

const industries = [
  "Commercial",
  "Healthcare",
  "Government",
  "Utilities",
  "Insurance",
  "Property Management",
  "Automotive Finance",
];

export default function IndustriesPage() {
  return (
    <>
      <PageHero title="Industries Served" description="Sector expertise helps us align communication, compliance, and workflows to your operating reality." />
      <section className="py-16">
        <Container className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((industry) => (
            <article key={industry} className="rounded-lg border border-border bg-white p-6">
              <h2 className="text-lg font-semibold">{industry}</h2>
              <p className="mt-3 text-sm text-muted-foreground">Customized account strategies and reporting models tailored to {industry.toLowerCase()} portfolios.</p>
            </article>
          ))}
        </Container>
      </section>
    </>
  );
}
