import type { Metadata } from "next";
import { PageHero } from "@/components/sections/page-hero";
import { Container } from "@/components/ui/container";
import { InfoCard } from "@/components/ui/info-card";

export const metadata: Metadata = {
  title: "Services",
  description: "Debt recovery, revenue cycle management, AR optimization, and BPO services.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero title="Services" description="Flexible programs built around your account mix, compliance obligations, and customer experience goals." />
      <section className="py-16">
        <Container className="grid gap-5 md:grid-cols-2">
          <InfoCard title="Debt Recovery" description="Early, mid, and late-stage recovery with digital-first outreach and escalation protocols." />
          <InfoCard title="Revenue Cycle Management" description="Eligibility, billing follow-up, denials support, and payment plan optimization." />
          <InfoCard title="Accounts Receivable Management" description="Work queue segmentation, prioritized account treatment, and KPI governance." />
          <InfoCard title="Consulting" description="Maturity assessments, policy design, and collections playbook implementation." />
          <InfoCard title="Business Process Outsourcing" description="Embedded operational support for statements, payment processing, and inbound servicing." />
        </Container>
      </section>
    </>
  );
}
