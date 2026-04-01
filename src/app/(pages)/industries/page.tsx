import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CtaSection } from "@/components/sections/CtaSection";
import { industries, siteConfig } from "@/data/site";
import {
  Building2,
  Heart,
  Landmark,
  Zap,
  Shield,
  Home,
  Car,
  CheckCircle,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Industries",
  description: `${siteConfig.name} serves commercial, healthcare, government, utilities, insurance, property management, and automotive finance clients.`,
};

const iconMap: Record<string, React.ElementType> = {
  Building2,
  Heart,
  Landmark,
  Zap,
  Shield,
  Home,
  Car,
};

const industryDetails: Record<
  string,
  { features: string[]; compliance: string }
> = {
  "Commercial & Retail": {
    features: [
      "B2B invoice collections",
      "Consumer charge-off recovery",
      "Pre-legal demand letters",
      "Credit bureau reporting",
    ],
    compliance: "UCC, state commercial collections statutes",
  },
  Healthcare: {
    features: [
      "Patient billing & self-pay recovery",
      "Insurance follow-up",
      "Denial management",
      "Early-out programs",
    ],
    compliance: "HIPAA, FDCPA, state healthcare regulations",
  },
  Government: {
    features: [
      "Tax and fee recovery",
      "Court fines & citation collections",
      "Benefits overpayment recovery",
      "Utility billing",
    ],
    compliance: "FDCPA, state government collections laws, CFPB guidance",
  },
  Utilities: {
    features: [
      "Arrears recovery",
      "Disconnection-prevention programs",
      "Final-bill collections",
      "Payment plan management",
    ],
    compliance: "State PUC regulations, FDCPA",
  },
  Insurance: {
    features: [
      "Premium recovery",
      "Subrogation collections",
      "Overpayment recovery",
      "Policyholder billing",
    ],
    compliance: "State insurance department regulations, FDCPA",
  },
  "Property Management": {
    features: [
      "Rent arrears collections",
      "HOA dues recovery",
      "Move-out balance recovery",
      "Lease break fee collections",
    ],
    compliance:
      "FDCPA, state landlord-tenant laws, Fair Credit Reporting Act",
  },
  "Automotive Finance": {
    features: [
      "Deficiency balance recovery",
      "Skip tracing for repossessions",
      "Remarketing support",
      "Post-repo collections",
    ],
    compliance: "FDCPA, UCC Article 9, state repossession laws",
  },
};

export default function IndustriesPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Industries We Serve
            </h1>
            <p className="text-lg text-blue-100">
              Purpose-built programs for every sector—each with the compliance
              framework, expertise, and technology your industry demands.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            {industries.map((industry) => {
              const Icon = iconMap[industry.icon] || Building2;
              const details = industryDetails[industry.name];
              return (
                <div
                  key={industry.name}
                  id={industry.name.toLowerCase().split(" ")[0]}
                  className="border border-gray-200 rounded-2xl p-6 hover:shadow-md transition-shadow"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-lg bg-blue-700 flex items-center justify-center">
                      <Icon size={22} className="text-white" />
                    </div>
                    <h2 className="text-xl font-bold text-gray-900">
                      {industry.name}
                    </h2>
                  </div>
                  <p className="text-gray-600 mb-4">{industry.description}</p>
                  {details && (
                    <>
                      <ul className="flex flex-col gap-2 mb-4">
                        {details.features.map((f) => (
                          <li
                            key={f}
                            className="flex items-center gap-2 text-sm text-gray-700"
                          >
                            <CheckCircle
                              size={14}
                              className="text-blue-700 shrink-0"
                            />{" "}
                            {f}
                          </li>
                        ))}
                      </ul>
                      <p className="text-xs text-gray-500">
                        <span className="font-semibold">Compliance:</span>{" "}
                        {details.compliance}
                      </p>
                    </>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
