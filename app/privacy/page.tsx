import type { Metadata } from "next";
import { PageHero } from "@/components/sections/page-hero";
import { Container } from "@/components/ui/container";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy for Apex Receivables Group website and contact forms.",
};

export default function PrivacyPage() {
  return (
    <>
      <PageHero title="Privacy Policy" description="This policy explains how we collect, use, and protect information submitted through our website." />
      <section className="py-16">
        <Container className="max-w-3xl space-y-5 text-sm leading-6 text-muted-foreground">
          <h2 className="text-xl font-semibold text-foreground">Information we collect</h2>
          <p>We collect contact information you submit, website usage analytics, and correspondence details related to service inquiries.</p>
          <h2 className="text-xl font-semibold text-foreground">How information is used</h2>
          <p>Information is used to respond to inquiries, improve services, and maintain secure operations and compliance documentation.</p>
          <h2 className="text-xl font-semibold text-foreground">Data protection</h2>
          <p>We maintain administrative and technical safeguards designed to protect personal data from unauthorized access.</p>
          <h2 className="text-xl font-semibold text-foreground">Contact</h2>
          <p>For privacy questions, email privacy@apexreceivables.com.</p>
        </Container>
      </section>
    </>
  );
}
