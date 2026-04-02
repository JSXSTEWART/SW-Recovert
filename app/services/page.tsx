import type { Metadata } from "next";
import Link from "next/link";
import {
  Shield,
  TrendingUp,
  Users,
  BookOpen,
  Cpu,
  ArrowRight,
  CheckCircle,
  Phone,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "Southwest Recovery Services offers debt recovery, revenue cycle management, accounts receivable management, compliance consulting, and business process outsourcing.",
};

const services = [
  {
    id: "debt-recovery",
    icon: Shield,
    title: "Debt Recovery",
    tagline: "First- & Third-Party Collections",
    description:
      "Our compliance-first collections program combines data analytics, multi-channel outreach, and skilled negotiators to maximize recovery while preserving your brand equity.",
    features: ["First-party early-out collections", "Third-party contingency collections", "Pre-charge-off intervention programs", "Legal referral and judgment management", "Skip tracing and asset research", "Consumer dispute resolution"],
  },
  {
    id: "revenue-cycle",
    icon: TrendingUp,
    title: "Revenue Cycle Management",
    tagline: "End-to-End RCM Solutions",
    description:
      "From patient registration to final payment, our RCM solutions reduce friction, accelerate cash flow, and decrease days sales outstanding across your entire portfolio.",
    features: ["Insurance eligibility verification", "Claims submission and management", "Denial management and appeals", "Patient billing and payment portals", "Coding audit and compliance", "Performance analytics and reporting"],
  },
  {
    id: "accounts-receivable",
    icon: Users,
    title: "Accounts Receivable Management",
    tagline: "Proactive AR Outsourcing",
    description:
      "We act as an extension of your billing team, managing the full AR cycle with best-in-class technology and experienced staff to reduce write-offs and keep receivables healthy.",
    features: ["Outsourced billing and invoicing", "Aging report management", "Payment plan administration", "Dispute and exception handling", "Cash application and reconciliation", "Real-time performance dashboards"],
  },
  {
    id: "consulting",
    icon: BookOpen,
    title: "Consulting",
    tagline: "Strategic Advisory Services",
    description:
      "Our compliance and operations consultants help you build or optimize your internal credit, collections, and receivables processes for sustainable, long-term performance.",
    features: ["FDCPA/HIPAA compliance audits", "Credit policy development", "Collections process redesign", "Technology selection and implementation", "Staff training programs", "Vendor management review"],
  },
  {
    id: "bpo",
    icon: Cpu,
    title: "Business Process Outsourcing",
    tagline: "Full-Service Back Office Support",
    description:
      "Scale your back-office operations without expanding headcount. Our BPO services deliver the expertise, technology, and capacity you need - at a fraction of the cost.",
    features: ["Customer service and call center", "Document processing and imaging", "Data entry and validation", "Compliance monitoring", "Reporting and analytics", "Workflow automation"],
  },
];

export default function ServicesPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-[#1e3a5f] via-[#25496f] to-[#335f89] text-white py-16 lg:py-20" aria-labelledby="services-hero-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Badge variant="accent" className="mb-4 border-none bg-[#c8962c]/20 text-[#f6d99d]">Our Services</Badge>
          <h1 id="services-hero-heading" className="text-4xl sm:text-5xl font-bold mb-5 max-w-2xl">A Full Suite of Recovery &amp; Receivables Solutions</h1>
          <p className="text-blue-200 text-lg max-w-2xl leading-relaxed">From early-stage AR support to advanced collections and compliance consulting, our services are designed to fit your workflow, data stack, and regulatory obligations.</p>
        </div>
      </section>

      <section className="bg-white py-16 lg:py-24" aria-label="Service details">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isEven = index % 2 === 0;
            return (
              <div key={service.id} id={service.id} className="grid lg:grid-cols-2 gap-10 items-start" aria-labelledby={`service-${service.id}-heading`}>
                <div className={isEven ? "" : "lg:order-2"}>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-12 h-12 bg-[#1e3a5f] rounded-xl flex items-center justify-center" aria-hidden="true">
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <Badge variant="secondary">{service.tagline}</Badge>
                  </div>
                  <h2 id={`service-${service.id}-heading`} className="text-3xl font-bold text-[#0f1c2e] mb-4">{service.title}</h2>
                  <p className="text-[#64748b] leading-relaxed mb-6">{service.description}</p>
                  <Link href="/contact">
                    <Button variant="primary" size="md">Get a Quote <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" /></Button>
                  </Link>
                </div>
                <div className={`bg-[#f4f6f9] rounded-2xl p-8 ${isEven ? "" : "lg:order-1"}`}>
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-[#c8962c] mb-4">What&apos;s Included</h3>
                  <ul className="space-y-3" role="list">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3"><CheckCircle className="h-5 w-5 text-[#c8962c] shrink-0 mt-0.5" aria-hidden="true" /><span className="text-[#374151]">{feature}</span></li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="bg-[#f8fafc] py-16" aria-labelledby="pricing-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="pricing-heading" className="text-3xl font-bold text-[#0f1c2e] mb-3 text-center">Flexible Engagement Models</h2>
          <p className="text-center text-[#64748b] max-w-2xl mx-auto mb-10">Choose the structure that best aligns with your goals, risk profile, and internal team capacity.</p>
          <div className="grid md:grid-cols-3 gap-6">
            {[{ title: "Contingency", description: "No recovery, no fee. We only earn when you collect - aligned incentives from day one." }, { title: "Fixed Fee", description: "Predictable monthly pricing for ongoing AR management and first-party services." }, { title: "Hybrid", description: "A custom blend of fixed and contingency pricing designed around your specific portfolio." }].map((model) => (
              <Card key={model.title}>
                <CardHeader><CardTitle className="text-lg">{model.title} Pricing</CardTitle></CardHeader>
                <CardContent><CardDescription>{model.description}</CardDescription></CardContent>
              </Card>
            ))}
          </div>
          <p className="text-center text-sm text-[#64748b] mt-8">All pricing is customized based on portfolio size, age, and industry. <Link href="/contact" className="text-[#1e3a5f] font-medium underline underline-offset-2">Contact us for a custom quote.</Link></p>
        </div>
      </section>

      <section className="bg-[#1e3a5f] text-white py-16" aria-labelledby="services-cta-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 id="services-cta-heading" className="text-3xl font-bold mb-4">Not Sure Which Service Is Right for You?</h2>
          <p className="text-blue-200 mb-7 max-w-xl mx-auto">Our specialists will analyze your receivables portfolio and recommend the most effective solution.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact"><Button size="lg" variant="secondary">Request a Free Analysis <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" /></Button></Link>
            <a href="tel:+18665514684"><Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-[#1e3a5f]"><Phone className="mr-2 h-5 w-5" aria-hidden="true" />Call 1-866-551-4684</Button></a>
          </div>
        </div>
      </section>
    </>
  );
}
