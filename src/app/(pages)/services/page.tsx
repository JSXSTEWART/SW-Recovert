import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CtaSection } from "@/components/sections/CtaSection";
import { services, siteConfig } from "@/data/site";
import {
  CheckCircle,
  DollarSign,
  TrendingUp,
  BookOpen,
  Lightbulb,
  Settings,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Services",
  description: `Explore ${siteConfig.name}'s full range of debt recovery, revenue cycle management, accounts receivable, consulting, and BPO services.`,
};

const iconMap: Record<string, React.ElementType> = {
  DollarSign,
  TrendingUp,
  BookOpen,
  Lightbulb,
  Settings,
};

export default function ServicesPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Our Services
            </h1>
            <p className="text-lg text-blue-100">
              End-to-end receivables management solutions—built for compliance,
              designed for performance.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col gap-16">
            {services.map((service, index) => {
              const Icon = iconMap[service.icon] || DollarSign;
              const isEven = index % 2 === 0;
              return (
                <div
                  key={service.slug}
                  id={service.slug}
                  className="grid md:grid-cols-2 gap-10 items-center"
                >
                  <div className={!isEven ? "md:order-2" : ""}>
                    <div className="w-14 h-14 rounded-xl bg-blue-700 flex items-center justify-center mb-4">
                      <Icon size={28} className="text-white" />
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                      {service.title}
                    </h2>
                    <p className="text-gray-600 mb-6">{service.description}</p>
                    <Button asChild className="bg-blue-700 hover:bg-blue-800">
                      <Link href="/contact">Get a Consultation</Link>
                    </Button>
                  </div>
                  <div
                    className={`bg-gray-50 rounded-2xl p-8 ${!isEven ? "md:order-1" : ""}`}
                  >
                    <h3 className="font-semibold text-gray-900 mb-4">
                      What&apos;s Included
                    </h3>
                    <ul className="flex flex-col gap-3">
                      {service.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-start gap-3"
                        >
                          <CheckCircle
                            size={18}
                            className="text-blue-700 mt-0.5 shrink-0"
                          />
                          <span className="text-gray-700 text-sm">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
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
