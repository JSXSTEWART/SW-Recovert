import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CtaSection } from "@/components/sections/CtaSection";
import { siteConfig, stats } from "@/data/site";
import { CheckCircle, Award, Users, Globe } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us",
  description: `Learn about ${siteConfig.name}—our mission, leadership, compliance standards, and 25+ years of debt recovery expertise.`,
};

const values = [
  {
    icon: CheckCircle,
    title: "Integrity",
    description:
      "Every interaction—with clients and consumers—is governed by honesty and respect.",
  },
  {
    icon: Award,
    title: "Excellence",
    description:
      "We pursue best-in-class outcomes and hold ourselves accountable to measurable results.",
  },
  {
    icon: Users,
    title: "Partnership",
    description:
      "We are an extension of your team, not a vendor. Your success is our success.",
  },
  {
    icon: Globe,
    title: "Compliance",
    description:
      "Regulatory adherence isn't optional—it's built into every process we operate.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              About Meridian Recovery Solutions
            </h1>
            <p className="text-lg text-blue-100">
              For over 25 years we&apos;ve helped organizations across America
              recover revenue, reduce risk, and strengthen their financial
              operations—without compromising compliance or customer
              relationships.
            </p>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Our Mission
              </h2>
              <p className="text-gray-600 mb-4">
                To deliver the highest-performing, most compliant accounts
                receivable and debt recovery services available—creating
                measurable value for our clients while treating every consumer
                with dignity and fairness.
              </p>
              <p className="text-gray-600 mb-6">
                We believe the best collections strategy is also the most
                ethical one. That&apos;s why our processes are built around
                transparency, rigorous compliance, and respect for all parties
                involved.
              </p>
              <Button asChild className="bg-blue-700 hover:bg-blue-800">
                <Link href="/contact">Work With Us</Link>
              </Button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat) => (
                <Card key={stat.label} className="text-center">
                  <CardContent className="pt-6">
                    <div className="text-3xl font-extrabold text-blue-700 mb-1">
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-10">
            Our Core Values
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => {
              const Icon = value.icon;
              return (
                <div
                  key={value.title}
                  className="bg-white rounded-xl p-6 border border-gray-200 text-center"
                >
                  <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-blue-100 flex items-center justify-center">
                    <Icon size={22} className="text-blue-700" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    {value.title}
                  </h3>
                  <p className="text-sm text-gray-600">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Compliance */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Compliance Is Our Foundation
          </h2>
          <p className="text-gray-600 mb-6">
            Meridian maintains active licenses in all 50 states and holds
            certifications including FDCPA compliance, HIPAA certification, SOC
            2 Type II, and membership in ACA International. Our compliance team
            conducts quarterly audits and ongoing staff training to ensure every
            engagement meets—and exceeds—regulatory requirements.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "FDCPA Compliant",
              "HIPAA Certified",
              "Licensed All 50 States",
              "ACA International Member",
              "BBB A+ Rated",
              "SOC 2 Type II",
            ].map((badge) => (
              <span
                key={badge}
                className="px-3 py-1.5 bg-blue-50 border border-blue-200 rounded-full text-sm text-blue-700 font-medium"
              >
                {badge}
              </span>
            ))}
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
