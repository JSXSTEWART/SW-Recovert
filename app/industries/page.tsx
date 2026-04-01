import type { Metadata } from "next";
import Link from "next/link";
import {
  Building2,
  HeartPulse,
  Landmark,
  Zap,
  Shield,
  Home as HomeIcon,
  Car,
  ArrowRight,
  CheckCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Industries We Serve",
  description:
    "Meridian Recovery Solutions serves commercial, healthcare, government, utilities, insurance, property management, and automotive finance industries with specialized debt recovery solutions.",
};

const industries = [
  {
    id: "commercial",
    icon: Building2,
    title: "Commercial",
    description:
      "We help B2B organizations recover outstanding invoices and manage commercial credit portfolios with minimal disruption to business relationships.",
    challenges: [
      "High-balance, complex commercial disputes",
      "Relationship-sensitive collection approaches",
      "Multi-state jurisdictional complexity",
      "Bankruptcy and corporate restructuring",
    ],
    solutions: [
      "Dedicated commercial recovery specialists",
      "Demand letters and formal notice programs",
      "Legal referral network in all 50 states",
      "Asset investigation and skip tracing",
    ],
  },
  {
    id: "healthcare",
    icon: HeartPulse,
    title: "Healthcare",
    description:
      "Our HIPAA-certified team provides compassionate, compliant patient collections and RCM services that protect patient relationships while improving your bottom line.",
    challenges: [
      "HIPAA compliance complexity",
      "High patient balance sensitivity",
      "Underpayment and denial management",
      "Rising patient responsibility rates",
    ],
    solutions: [
      "HIPAA-certified staff and processes",
      "Patient-first communication approach",
      "Insurance follow-up and denial appeals",
      "Financial counseling and payment plans",
    ],
  },
  {
    id: "government",
    icon: Landmark,
    title: "Government",
    description:
      "We assist government agencies with the recovery of overpayments, fines, fees, and assessments in full compliance with government contracting requirements.",
    challenges: [
      "Strict regulatory and audit requirements",
      "Debt Set-Aside and offset programs",
      "Political and public perception sensitivity",
      "Complex statute of limitations rules",
    ],
    solutions: [
      "Government-specific compliance protocols",
      "Treasury offset program integration",
      "Transparent audit trails and reporting",
      "Public records research capabilities",
    ],
  },
  {
    id: "utilities",
    icon: Zap,
    title: "Utilities",
    description:
      "From electric and gas to water and telecom, we recover utility arrears while navigating seasonal hardship regulations and disconnection rules.",
    challenges: [
      "High account volume with low balances",
      "Seasonal payment difficulty cycles",
      "State-specific disconnection restrictions",
      "Regulatory utility commission oversight",
    ],
    solutions: [
      "High-volume automated outreach",
      "Hardship program identification",
      "State regulatory compliance monitoring",
      "Payment arrangement management",
    ],
  },
  {
    id: "insurance",
    icon: Shield,
    title: "Insurance",
    description:
      "We recover subrogation receivables, premium arrears, and overpayment claims for insurance carriers with full regulatory compliance.",
    challenges: [
      "Subrogation complexity and timelines",
      "Multi-party claim disputes",
      "State insurance department regulations",
      "Premium audit and billing disputes",
    ],
    solutions: [
      "Subrogation recovery specialists",
      "Claims investigation support",
      "State DOI compliance expertise",
      "Recovery analytics and reporting",
    ],
  },
  {
    id: "property-management",
    icon: HomeIcon,
    title: "Property Management",
    description:
      "We recover unpaid rent, property damage claims, and HOA assessments for residential and commercial property managers.",
    challenges: [
      "Post-move-out collections sensitivity",
      "Security deposit disputes",
      "State landlord-tenant law variations",
      "HOA lien enforcement procedures",
    ],
    solutions: [
      "Tenant skip tracing and location",
      "Rent and damage collections",
      "HOA assessment recovery",
      "Eviction-related debt recovery",
    ],
  },
  {
    id: "automotive",
    icon: Car,
    title: "Automotive Finance",
    description:
      "We support auto lenders and dealerships with deficiency balance recovery, early delinquency management, and repossession follow-up.",
    challenges: [
      "UCC compliance for repossession",
      "Deficiency balance calculations",
      "Early delinquency prevention",
      "Geographic asset recovery complexity",
    ],
    solutions: [
      "CFPB-compliant collection practices",
      "Deficiency balance recovery programs",
      "Early intervention/cure programs",
      "Title and lien management support",
    ],
  },
];

export default function IndustriesPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="bg-[#1e3a5f] text-white py-16 lg:py-20"
        aria-labelledby="industries-hero-heading"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Badge variant="secondary" className="mb-4 bg-blue-500/20 text-blue-200 border-none">
            Industries We Serve
          </Badge>
          <h1
            id="industries-hero-heading"
            className="text-4xl sm:text-5xl font-bold mb-5 max-w-2xl"
          >
            Specialized Recovery for Every Sector
          </h1>
          <p className="text-blue-200 text-lg max-w-2xl leading-relaxed">
            Compliance requirements, consumer sensitivities, and regulatory
            environments vary dramatically by industry. Our specialized teams
            are trained to navigate the unique demands of each sector we serve.
          </p>
        </div>
      </section>

      {/* Industries Nav */}
      <section className="bg-white border-b border-[#e2e8f0] py-6 sticky top-0 z-10" aria-label="Jump to industry">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav aria-label="Industry sections" className="flex flex-wrap gap-2 justify-center">
            {industries.map((industry) => {
              const Icon = industry.icon;
              return (
                <a
                  key={industry.id}
                  href={`#${industry.id}`}
                  className="flex items-center gap-2 px-4 py-2 bg-[#f4f6f9] hover:bg-[#1e3a5f] hover:text-white rounded-full text-sm font-medium text-[#374151] transition-all"
                >
                  <Icon className="h-4 w-4" aria-hidden="true" />
                  {industry.title}
                </a>
              );
            })}
          </nav>
        </div>
      </section>

      {/* Industry Details */}
      <section className="bg-white py-16 lg:py-24" aria-label="Industry details">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
          {industries.map((industry) => {
            const Icon = industry.icon;
            return (
              <div
                key={industry.id}
                id={industry.id}
                className="scroll-mt-24"
                aria-labelledby={`industry-${industry.id}-heading`}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div
                    className="w-12 h-12 bg-[#1e3a5f] rounded-xl flex items-center justify-center"
                    aria-hidden="true"
                  >
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <h2
                    id={`industry-${industry.id}-heading`}
                    className="text-3xl font-bold text-[#0f1c2e]"
                  >
                    {industry.title}
                  </h2>
                </div>
                <p className="text-[#64748b] text-lg leading-relaxed mb-8 max-w-3xl">
                  {industry.description}
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-sm text-[#94a3b8] uppercase tracking-wider font-bold">
                        Common Challenges
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3" role="list">
                        {industry.challenges.map((item) => (
                          <li
                            key={item}
                            className="flex items-start gap-2 text-[#374151] text-sm"
                          >
                            <span
                              className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#94a3b8] shrink-0"
                              aria-hidden="true"
                            />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                  <Card className="border-blue-100 bg-blue-50/30">
                    <CardHeader>
                      <CardTitle className="text-sm text-[#c8962c] uppercase tracking-wider font-bold">
                        Our Solutions
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3" role="list">
                        {industry.solutions.map((item) => (
                          <li key={item} className="flex items-start gap-2 text-[#374151] text-sm font-medium">
                            <CheckCircle
                              className="h-4 w-4 text-[#c8962c] shrink-0 mt-0.5"
                              aria-hidden="true"
                            />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>
                <div className="mt-8">
                  <Link href="/contact">
                    <Button variant="outline">
                      Talk to a {industry.title} Specialist
                      <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                    </Button>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#1e3a5f] text-white py-20" aria-labelledby="industries-cta-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 id="industries-cta-heading" className="text-3xl font-bold mb-4">
            Your Industry. Our Expertise.
          </h2>
          <p className="text-blue-200 mb-8 max-w-xl mx-auto">
            Speak with a specialist who understands your sector&apos;s unique
            compliance and recovery challenges.
          </p>
          <Link href="/contact">
            <Button size="lg" variant="secondary" className="bg-[#c8962c] hover:bg-[#b08425] text-white border-none">
              Request an Industry Consultation
              <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
            </Button>
          </Link>
        </div>
      </section>
    </>
  );
}