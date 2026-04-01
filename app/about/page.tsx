import type { Metadata } from "next";
import Link from "next/link";
import {
  CheckCircle,
  ArrowRight,
  Award,
  Shield,
  Users,
  TrendingUp,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Meridian Recovery Solutions — 25+ years of trusted debt recovery, compliance expertise, and client-first service across commercial, healthcare, government, and more.",
};

const values = [
  {
    icon: Shield,
    title: "Compliance First",
    description:
      "Every action we take is guided by FDCPA, HIPAA, GLBA, and applicable state regulations. Compliance isn't a checkbox — it's our foundation.",
  },
  {
    icon: Users,
    title: "Client-Centric",
    description:
      "We act as an extension of your team, protecting your brand reputation while maximizing recovery outcomes.",
  },
  {
    icon: TrendingUp,
    title: "Data-Driven Results",
    description:
      "Real-time dashboards and transparent reporting give you complete visibility into performance and progress.",
  },
  {
    icon: Award,
    title: "Industry Expertise",
    description:
      "Specialized teams trained in the unique operational and regulatory requirements of each sector we serve.",
  },
];

const credentials = [
  "ACA International Member",
  "BBB Accredited Business (A+ Rating)",
  "SOC 2 Type II Certified",
  "FDCPA Compliant",
  "HIPAA Certified",
  "Licensed in All 50 States",
];

const team = [
  {
    name: "James Thornton",
    title: "Chief Executive Officer",
    bio: "25+ years in financial services and debt recovery. Former VP at major national credit bureau.",
  },
  {
    name: "Dr. Lisa Park",
    title: "Chief Compliance Officer",
    bio: "Former regulatory attorney specializing in FDCPA, HIPAA, and state collection law.",
  },
  {
    name: "Marcus Williams",
    title: "VP of Operations",
    bio: "Expert in BPO, process optimization, and multi-channel collections technology.",
  },
  {
    name: "Sarah Chen",
    title: "VP of Healthcare Services",
    bio: "15 years in healthcare revenue cycle management with a focus on patient-centered collections.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="bg-[#1e3a5f] text-white py-16 lg:py-20"
        aria-labelledby="about-hero-heading"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Badge variant="accent" className="mb-4">
            About Us
          </Badge>
          <h1
            id="about-hero-heading"
            className="text-4xl sm:text-5xl font-bold mb-5 max-w-2xl"
          >
            25 Years of Trusted Recovery Expertise
          </h1>
          <p className="text-blue-200 text-lg max-w-2xl leading-relaxed">
            Founded in 1999, Meridian Recovery Solutions has grown into one of
            the most trusted names in debt recovery and accounts receivable
            management — built on a foundation of compliance, transparency, and
            measurable results.
          </p>
        </div>
      </section>

      {/* Mission & Story */}
      <section className="bg-white py-16 lg:py-24" aria-labelledby="mission-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="secondary" className="mb-4">Our Mission</Badge>
              <h2 id="mission-heading" className="text-3xl sm:text-4xl font-bold text-[#0f1c2e] mb-5">
                Recovering Revenue Without Compromising Integrity
              </h2>
              <div className="space-y-4 text-[#64748b] leading-relaxed">
                <p>
                  At Meridian, we believe effective debt recovery doesn&apos;t require
                  aggressive tactics — it requires expertise, technology, and a
                  genuine commitment to doing the right thing for both our clients
                  and the consumers we contact.
                </p>
                <p>
                  Our approach combines industry-leading compliance standards,
                  data analytics, and omnichannel outreach to achieve recovery
                  rates that consistently outperform industry averages — while
                  protecting the brand relationships you&apos;ve worked hard to build.
                </p>
                <p>
                  From first-party accounts receivable management to third-party
                  collections, every program is customized to your industry&apos;s
                  unique requirements and your organization&apos;s specific goals.
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="bg-[#f4f6f9] rounded-2xl p-8">
                <h3 className="text-xl font-bold text-[#0f1c2e] mb-4">
                  Certifications &amp; Credentials
                </h3>
                <ul className="space-y-3" role="list">
                  {credentials.map((cred) => (
                    <li key={cred} className="flex items-center gap-3">
                      <CheckCircle
                        className="h-5 w-5 text-[#c8962c] shrink-0"
                        aria-hidden="true"
                      />
                      <span className="text-[#374151]">{cred}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-[#f4f6f9] py-16 lg:py-24" aria-labelledby="values-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <Badge variant="secondary" className="mb-4">Our Values</Badge>
            <h2 id="values-heading" className="text-3xl sm:text-4xl font-bold text-[#0f1c2e] mb-4">
              What Drives Us Every Day
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => {
              const Icon = value.icon;
              return (
                <Card key={value.title} className="text-center p-6">
                  <CardContent className="p-0">
                    <div
                      className="w-14 h-14 bg-[#1e3a5f] rounded-xl flex items-center justify-center mx-auto mb-4"
                      aria-hidden="true"
                    >
                      <Icon className="h-7 w-7 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-[#0f1c2e] mb-2">
                      {value.title}
                    </h3>
                    <p className="text-sm text-[#64748b] leading-relaxed">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="bg-white py-16 lg:py-24" aria-labelledby="team-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <Badge variant="secondary" className="mb-4">Leadership</Badge>
            <h2 id="team-heading" className="text-3xl sm:text-4xl font-bold text-[#0f1c2e] mb-4">
              Our Executive Team
            </h2>
            <p className="text-[#64748b]">
              Experienced leaders with deep expertise in financial services,
              compliance, and technology-driven operations.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member) => (
              <Card key={member.name} className="text-center p-6">
                <CardContent className="p-0">
                  <div
                    className="w-16 h-16 bg-[#1e3a5f] rounded-full flex items-center justify-center mx-auto mb-4 text-white text-xl font-bold"
                    aria-hidden="true"
                  >
                    {member.name.charAt(0)}
                  </div>
                  <h3 className="font-bold text-[#0f1c2e]">{member.name}</h3>
                  <p className="text-sm text-[#c8962c] font-medium mt-1 mb-3">
                    {member.title}
                  </p>
                  <p className="text-sm text-[#64748b] leading-relaxed">
                    {member.bio}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#1e3a5f] text-white py-16" aria-labelledby="about-cta-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 id="about-cta-heading" className="text-3xl font-bold mb-4">
            Ready to Work With Us?
          </h2>
          <p className="text-blue-200 mb-7 max-w-xl mx-auto">
            Contact our team to discuss how Meridian can be customized to your
            organization&apos;s recovery goals.
          </p>
          <Link href="/contact">
            <Button size="lg" variant="secondary">
              Contact Our Team
              <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
            </Button>
          </Link>
        </div>
      </section>
    </>
  );
}
