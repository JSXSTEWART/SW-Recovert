import type { Metadata } from "next";
import { PageHero } from "@/components/sections/page-hero";
import { Container } from "@/components/ui/container";
import { ContactForm } from "@/components/sections/contact-form";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Connect with Apex Receivables Group for a consultation.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero title="Contact" description="Tell us about your portfolio, goals, and constraints. Our team will respond within one business day." />
      <section className="py-16">
        <Container className="grid gap-8 lg:grid-cols-2">
          <ContactForm />
          <aside className="rounded-lg border border-border bg-muted/30 p-6">
            <h2 className="text-lg font-semibold">Talk with our team</h2>
            <p className="mt-2 text-sm text-muted-foreground">We support enterprise and mid-market clients across the United States.</p>
            <dl className="mt-6 space-y-3 text-sm">
              <div><dt className="font-medium">Email</dt><dd className="text-muted-foreground">{siteConfig.email}</dd></div>
              <div><dt className="font-medium">Phone</dt><dd className="text-muted-foreground">{siteConfig.phone}</dd></div>
            </dl>
          </aside>
        </Container>
      </section>
    </>
  );
}
