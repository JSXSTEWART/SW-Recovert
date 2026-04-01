import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/sections/page-hero";
import { Container } from "@/components/ui/container";

export const metadata: Metadata = {
  title: "Resources",
  description: "Guides, articles, and updates for debt recovery and accounts receivable leaders.",
};

export default function ResourcesPage() {
  return (
    <>
      <PageHero title="Resources" description="Practical insights for finance, operations, and compliance teams." />
      <section className="py-16">
        <Container className="space-y-4">
          {["Compliance checklist for outsourced collections", "AR KPI scorecard template", "How to evaluate RCM partners"].map((item) => (
            <article key={item} className="rounded-lg border border-border bg-white p-6">
              <h2 className="text-lg font-semibold">{item}</h2>
              <p className="mt-2 text-sm text-muted-foreground">Short, actionable guidance for teams improving receivables operations.</p>
              <Link href="/blog" className="mt-4 inline-block text-sm underline underline-offset-4">View blog index</Link>
            </article>
          ))}
        </Container>
      </section>
    </>
  );
}
