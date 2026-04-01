import Link from "next/link";

import { Container } from "@/components/ui/container";
import { SectionHeader } from "@/components/ui/section-header";
import { InfoCard } from "@/components/ui/info-card";
import { Button } from "@/components/ui/button";

const services = [
  ["Debt Recovery", "Professional, consumer-sensitive outreach that preserves client relationships while accelerating collections."],
  ["Revenue Cycle Management", "Data-driven workflows that reduce days sales outstanding and improve cash forecasting."],
  ["Accounts Receivable Management", "Segmented recovery strategies by account age, risk profile, and industry regulations."],
  ["Consulting & BPO", "Operational assessments, process redesign, and outsourced support for sustainable AR performance."],
] as const;

export default function HomePage() {
  return (
    <>
      <section className="border-b border-border bg-gradient-to-b from-muted/50 to-white py-20 sm:py-24">
        <Container className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-primary">Accounts Receivable Performance</p>
            <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">
              Recover revenue faster with a compliance-first collections partner.
            </h1>
            <p className="mt-5 max-w-xl text-lg text-muted-foreground">
              Apex Receivables Group helps enterprise and regulated organizations improve cash flow, lower operational burden, and protect customer trust.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg"><Link href="/contact">Schedule a consultation</Link></Button>
              <Button asChild variant="outline" size="lg"><Link href="/services">Explore services</Link></Button>
            </div>
          </div>
          <div className="rounded-lg border border-border bg-white p-8 shadow-sm">
            <h2 className="text-lg font-semibold">Why teams switch to Apex</h2>
            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
              <li>• Dedicated compliance and QA framework aligned to FDCPA, HIPAA, and state-level requirements.</li>
              <li>• Multi-channel outreach with transparent reporting and audit-ready documentation.</li>
              <li>• Industry-specialized teams for healthcare, utilities, government, and more.</li>
            </ul>
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <SectionHeader
            eyebrow="What we do"
            title="Integrated receivables solutions"
            description="From early-stage AR to complex recovery programs, we deliver measurable outcomes and a better debtor experience."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {services.map(([title, description]) => (
              <InfoCard key={title} title={title} description={description} />
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-muted/40 py-16 sm:py-20">
        <Container>
          <SectionHeader
            eyebrow="Industries"
            title="Built for regulated and high-volume environments"
          />
          <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
            {[
              "Commercial",
              "Healthcare",
              "Government",
              "Utilities",
              "Insurance",
              "Property Management",
              "Automotive Finance",
              "Financial Services",
            ].map((industry) => (
              <div key={industry} className="rounded-md border border-border bg-white p-4 text-sm font-medium">
                {industry}
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container className="grid gap-8 lg:grid-cols-3">
          <InfoCard title="31% lower DSO" description="Average year-one reduction in days sales outstanding across new enterprise engagements." />
          <InfoCard title="99.7% QA accuracy" description="Monitored communication quality and documentation across client programs." />
          <InfoCard title="SOC-ready reporting" description="Dashboards and exports that support compliance, finance, and executive visibility." />
        </Container>
      </section>

      <section className="bg-muted/40 py-16 sm:py-20">
        <Container>
          <SectionHeader eyebrow="Resources" title="Insights from receivables leaders" />
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {["Designing a compliant omnichannel strategy", "Healthcare AR trends for 2026", "When to outsource collections operations"].map((post) => (
              <article key={post} className="rounded-lg border border-border bg-white p-5">
                <p className="text-sm text-primary">Article</p>
                <h3 className="mt-2 text-base font-semibold">{post}</h3>
                <Link href="/resources" className="mt-4 inline-block text-sm text-muted-foreground underline underline-offset-4">Read more</Link>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container className="rounded-xl border border-border bg-primary px-6 py-12 text-primary-foreground sm:px-10">
          <h2 className="text-3xl font-semibold tracking-tight">Need to improve cash flow without added risk?</h2>
          <p className="mt-4 max-w-2xl text-primary-foreground/85">
            Let&apos;s build a recovery strategy tailored to your industry, portfolio mix, and compliance requirements.
          </p>
          <Button asChild variant="outline" size="lg" className="mt-8 border-white bg-white text-foreground hover:bg-white/90">
            <Link href="/contact">Request a strategic assessment</Link>
          </Button>
        </Container>
      </section>
    </>
  );
}
