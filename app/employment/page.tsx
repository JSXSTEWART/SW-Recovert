import type { Metadata } from "next";
import { PageHero } from "@/components/sections/page-hero";
import { Container } from "@/components/ui/container";

export const metadata: Metadata = {
  title: "Employment",
  description: "Careers and open opportunities at Southwest Recovery Services.",
};

export default function EmploymentPage() {
  return (
    <>
      <PageHero title="Employment" description="Build your career with a compliance-first recovery team." />
      <section className="py-12">
        <Container>
          <p className="text-muted-foreground">Open positions and application workflow coming soon.</p>
        </Container>
      </section>
    </>
  );
}
