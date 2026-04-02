import type { Metadata } from "next";
import { PageHero } from "@/components/sections/page-hero";
import { Container } from "@/components/ui/container";

export const metadata: Metadata = {
  title: "Testimonials",
  description: "Client feedback and outcomes from receivables and recovery engagements.",
};

export default function TestimonialsPage() {
  return (
    <>
      <PageHero title="Testimonials" description="What clients say about partnering with SWRS." />
      <section className="py-12">
        <Container>
          <p className="text-muted-foreground">Testimonials content is being migrated in the next content batch.</p>
        </Container>
      </section>
    </>
  );
}
