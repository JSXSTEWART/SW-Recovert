import type { Metadata } from "next";
import Link from "next/link";
import {
  Shield,
  TrendingUp,
  Users,
  CheckCircle,
  ArrowRight,
  Building2,
  HeartPulse,
  Landmark,
  Zap,
  Car,
  Home as HomeIcon,
  BookOpen,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "Professional Debt Recovery & Accounts Receivable Management",
  description:
    "Meridian Recovery Solutions delivers results-driven debt recovery, revenue cycle management, and AR management services. Trusted by healthcare, government, commercial, and more.",
};

const services = [
  {
    icon: Shield,
    title: "Debt Recovery",
    description:
      "Compliant, results-driven collections that maximize recovery while preserving client relationships and brand reputation.",
    href: "/services#debt-recovery",
  },
  {
    icon: TrendingUp,
    title: "Revenue Cycle Management",
    description:
      "End-to-end RCM solutions that accelerate cash flow and reduce days sales outstanding across your entire portfolio.",
    href: "/services#revenue-cycle",
  },
  {
    icon: Users,
    title: "Accounts Receivable Management",
    description:
      "Proactive AR management services that reduce write-offs and keep your receivables healthy from day one.",
    href: "/services#accounts-receivable",
  },
  {
    icon: BookOpen,
    title: "Consulting",
    description:
      "Strategic consulting to optimize your credit, collections, and compliance policies for long-term profitability.",
    href: "/services#consulting",
  },
];

const industries = [
  { icon: Building2, label: "Commercial" },
  { icon: HeartPulse, label: "Healthcare" },
  { icon: Landmark, label: "Government" },
  { icon: Zap, label: "Utilities" },
  { icon: Shield, label: "Insurance" },
  { icon: HomeIcon, label: "Property Mgmt" },
  { icon: Car, label: "Auto Finance" },
];

const stats = [
  { value: "94%", label: "Average Recovery Rate" },
  { value: "$2B+", label: "Recovered for Clients" },
  { value: "500+", label: "Enterprise Clients" },
  { value: "25+", label: "Years of Experience" },
];

const differentiators = [
  "FDCPA, HIPAA, and GLBA compliant operations",
  "Dedicated account managers with industry expertise",
  "Real-time client portal and performance dashboards",
  "Omnichannel outreach: phone, mail, email, text",
  "No-recovery, no-fee pricing options available",
  "SOC 2 Type II certified data security",
];

const resources = [
  {
    badge: "Guide",
    title: "FDCPA Compliance: What Every Business Needs to Know",
    excerpt:
      "A comprehensive guide to the Fair Debt Collection Practices Act and how it affects your receivables strategy.",
    href: "/resources",
  },
  {
    badge: "Case Study",
    title: "How We Recovered $4.2M for a Regional Healthcare System",
    excerpt:
      "See how our tailored RCM approach helped a 3-hospital network reduce bad debt by 38% in 12 months.",
    href: "/resources",
  },
  {
    badge: "Article",
    title: "5 Signs Your AR Process Needs Professional Help",
    excerpt:
      "Early warning indicators that your accounts receivable workflow is costing you more than you think.",
    href: "/resources",
  },
];

export default function HomePage() {
  return (
    <>
      <section
        className="relative bg-[#1e3a5f] text-white overflow-hidden"
        aria-labelledby="hero-heading"
      >
        <div
          className="absolute inset-0 opacity-10"
          aria-hidden="true"
          style={{
            backgroundImage:
              "radial-gradient(circle at 70% 50%, #c8962c 0%, transparent 60%)",
          }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="max-w-3xl">
            <Badge variant="accent" className="mb-5">
              Trusted Since 1999
            </Badge>
            <h1
              id="hero-heading"
              className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6"
            >
              Recover Revenue.
              <br />
              <span className="text-[#c8962c]">Protect Relationships.</span>
            </h1>
            <p className="text-lg sm:text-xl text-blue-200 leading-relaxed mb-8 max-w-2xl">
              Meridian Recovery Solutions delivers compliant, results-driven debt
              recovery and accounts receivable management for commercial,
              healthcare, government, and more - so you can focus on your core
              business.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/contact">
                <Button size="lg" variant="secondary" className="w-full sm:w-auto">
                  Get a Free Consultation
                  <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
                </Button>
              </Link>
              <Link href="/services">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-[#1e3a5f] w-full sm:w-auto"
                >
                  Explore Services
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#c8962c]" aria-label="Key statistics">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <dl className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center text-white">
            {stats.map((stat) => (
              <div key={stat.label}>
                <dt className="text-3xl sm:text-4xl font-bold">{stat.value}</dt>
                <dd className="mt-1 text-sm font-medium opacity-90">{stat.label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section
        className="bg-white py-16 lg:py-24"
        aria-labelledby="why-heading"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="secondary" className="mb-4">
                Why Meridian
              </Badge>
              <h2
                id="why-heading"
                className="text-3xl sm:text-4xl font-bold text-[#0f1c2e] mb-5"
              >
                A Partner You Can Trust With Your Bottom Line
              </h2>
              <p className="text-[#64748b] leading-relaxed mb-8">
                For over 25 years, we&apos;ve helped organizations of all sizes
                recover outstanding revenue while maintaining strict regulatory
                compliance and protecting the relationships that matter most.
              </p>
              <ul className="space-y-3" role="list">
                {differentiators.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle
                      className="h-5 w-5 text-[#c8962c] shrink-0 mt-0.5"
                      aria-hidden="true"
                    />
                    <span className="text-[#374151]">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <Link href="/about">
                  <Button variant="outline" size="md">
                    Learn About Us
                    <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                  </Button>
                </Link>
              </div>
            </div>
            <div className="bg-[#f4f6f9] rounded-2xl p-8">
              <blockquote className="text-lg italic text-[#0f1c2e] leading-relaxed">
                &ldquo;Meridian&rsquo;s team recovered 91% of our aged receivables
                in just 6 months - results we never thought possible. Their
                compliance-first approach gave us complete confidence.&rdquo;
              </blockquote>
              <footer className="mt-5 flex items-center gap-3">
                <div
                  className="w-10 h-10 bg-[#1e3a5f] rounded-full flex items-center justify-center text-white font-bold"
                  aria-hidden="true"
                >
                  S
                </div>
                <div>
                  <p className="font-semibold text-[#0f1c2e]">Sarah Mitchell</p>
                  <p className="text-sm text-[#64748b]">
                    CFO, Regional Medical Center
                  </p>
                </div>
              </footer>
            </div>
          </div>
        </div>
      </section>

      <section
        className="bg-[#f4f6f9] py-16 lg:py-24"
        aria-labelledby="services-heading"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <Badge variant="secondary" className="mb-4">
              What We Do
            </Badge>
            <h2
              id="services-heading"
              className="text-3xl sm:text-4xl font-bold text-[#0f1c2e] mb-4"
            >
              Comprehensive Recovery Solutions
            </h2>
            <p className="text-[#64748b]">
              From first-party AR management to third-party debt recovery, we
              offer an integrated suite of services tailored to your industry.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <Link
                  key={service.title}
                  href={service.href}
                  className="group"
                  aria-label={`Learn more about ${service.title}`}
                >
                  <Card className="h-full hover:shadow-md hover:border-[#1e3a5f]/30 transition-all duration-200 group-hover:-translate-y-1">
                    <CardHeader>
                      <div
                        className="w-12 h-12 bg-[#1e3a5f]/10 rounded-lg flex items-center justify-center mb-3 group-hover:bg-[#1e3a5f] transition-colors"
                        aria-hidden="true"
                      >
                        <Icon className="h-6 w-6 text-[#1e3a5f] group-hover:text-white transition-colors" />
                      </div>
                      <CardTitle className="text-lg">{service.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription>{service.description}</CardDescription>
                    </CardContent>
                  </Card>
                </Link>
              );
            })}
          </div>
          <div className="text-center mt-10">
            <Link href="/services">
              <Button variant="primary" size="lg">
                View All Services
                <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section
        className="bg-white py-16 lg:py-24"
        aria-labelledby="industries-heading"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <Badge variant="secondary" className="mb-4">
              Industries We Serve
            </Badge>
            <h2
              id="industries-heading"
              className="text-3xl sm:text-4xl font-bold text-[#0f1c2e] mb-4"
            >
              Specialized Expertise Across Sectors
            </h2>
            <p className="text-[#64748b]">
              Our teams are trained in the unique regulatory and operational
              requirements of each industry we serve.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-4">
            {industries.map((industry) => {
              const Icon = industry.icon;
              return (
                <Link
                  key={industry.label}
                  href="/industries"
                  className="group flex flex-col items-center gap-3 p-5 bg-[#f4f6f9] hover:bg-[#1e3a5f] rounded-xl transition-all duration-200 text-center"
                  aria-label={`${industry.label} industry`}
                >
                  <div
                    className="w-12 h-12 bg-white rounded-lg flex items-center justify-center shadow-sm group-hover:bg-white/20"
                    aria-hidden="true"
                  >
                    <Icon className="h-6 w-6 text-[#1e3a5f] group-hover:text-white" />
                  </div>
                  <span className="text-sm font-medium text-[#374151] group-hover:text-white">
                    {industry.label}
                  </span>
                </Link>
              );
            })}
          </div>
          <div className="text-center mt-10">
            <Link href="/industries">
              <Button variant="outline" size="md">
                Explore Industries
                <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section
        className="bg-[#f4f6f9] py-16 lg:py-24"
        aria-labelledby="resources-heading"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <Badge variant="secondary" className="mb-4">
              Resources
            </Badge>
            <h2
              id="resources-heading"
              className="text-3xl sm:text-4xl font-bold text-[#0f1c2e] mb-4"
            >
              Insights & Best Practices
            </h2>
            <p className="text-[#64748b]">
              Stay current with compliance updates, industry trends, and
              actionable strategies for receivables management.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {resources.map((resource) => (
              <Link
                key={resource.title}
                href={resource.href}
                className="group"
                aria-label={`Read: ${resource.title}`}
              >
                <Card className="h-full hover:shadow-md hover:border-[#1e3a5f]/30 transition-all duration-200 group-hover:-translate-y-1">
                  <CardHeader>
                    <Badge variant="accent" className="w-fit mb-3">
                      {resource.badge}
                    </Badge>
                    <CardTitle className="text-base leading-snug group-hover:text-[#1e3a5f]">
                      {resource.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>{resource.excerpt}</CardDescription>
                    <p className="mt-4 text-sm font-medium text-[#c8962c] flex items-center gap-1">
                      Read more{" "}
                      <ArrowRight className="h-3 w-3" aria-hidden="true" />
                    </p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/resources">
              <Button variant="primary" size="lg">
                View All Resources
                <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section
        className="bg-[#1e3a5f] text-white py-16 lg:py-24"
        aria-labelledby="cta-heading"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2
            id="cta-heading"
            className="text-3xl sm:text-4xl font-bold mb-5"
          >
            Ready to Recover What&apos;s Yours?
          </h2>
          <p className="text-blue-200 text-lg mb-8 max-w-2xl mx-auto">
            Schedule a free consultation with our recovery specialists and
            discover how Meridian can improve your cash flow - with no upfront
            cost.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" variant="secondary">
                Schedule Free Consultation
                <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
              </Button>
            </Link>
            <a href="tel:+18005551234">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-[#1e3a5f]"
              >
                Call 1-800-555-1234
              </Button>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
