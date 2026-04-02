import Link from "next/link";
import { ArrowRight, CheckCircle, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { NotionBlockRenderer } from "@/lib/notion-renderer";
import { getServices } from "@/lib/notion";
import { iconMap } from "@/components/templates/icon-map";
import type { NotionPage, NotionBlock } from "@/lib/notion-types";

type Props = {
  page: NotionPage;
  blocks: NotionBlock[];
};

export async function ServiceTemplate({ page, blocks }: Props) {
  const services = await getServices();

  return (
    <>
      <section
        className="bg-[#1e3a5f] text-white py-16 lg:py-20"
        aria-labelledby="services-hero-heading"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Badge variant="accent" className="mb-4">
            {page.heroBadge || "Our Services"}
          </Badge>
          <h1
            id="services-hero-heading"
            className="text-4xl sm:text-5xl font-bold mb-5 max-w-2xl"
          >
            {page.heroTitle || "A Full Suite of Recovery & Receivables Solutions"}
          </h1>
          <p className="text-blue-200 text-lg max-w-2xl leading-relaxed">
            {page.heroDescription ||
              "From early-stage AR management to contingency collections and BPO, we deliver integrated solutions customized to your industry and compliance requirements."}
          </p>
        </div>
      </section>

      <section
        className="bg-white py-16 lg:py-24"
        aria-label="Service details"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {services.map((service, index) => {
            const Icon = iconMap[service.icon] ?? iconMap.Shield;
            const isEven = index % 2 === 0;
            return (
              <div
                key={service.id}
                id={service.slug}
                className="grid lg:grid-cols-2 gap-10 items-start"
                aria-labelledby={`service-${service.slug}-heading`}
              >
                <div className={isEven ? "" : "lg:order-2"}>
                  <div className="flex items-center gap-3 mb-3">
                    <div
                      className="w-12 h-12 bg-[#1e3a5f] rounded-xl flex items-center justify-center"
                      aria-hidden="true"
                    >
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <Badge variant="secondary">{service.tagline}</Badge>
                  </div>
                  <h2
                    id={`service-${service.slug}-heading`}
                    className="text-3xl font-bold text-[#0f1c2e] mb-4"
                  >
                    {service.title}
                  </h2>
                  <p className="text-[#64748b] leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <Link href="/contact">
                    <Button variant="primary" size="md">
                      Get a Quote{" "}
                      <ArrowRight
                        className="ml-2 h-4 w-4"
                        aria-hidden="true"
                      />
                    </Button>
                  </Link>
                </div>
                <div
                  className={`bg-[#f4f6f9] rounded-2xl p-8 ${
                    isEven ? "" : "lg:order-1"
                  }`}
                >
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-[#c8962c] mb-4">
                    What&apos;s Included
                  </h3>
                  <ul className="space-y-3" role="list">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <CheckCircle
                          className="h-5 w-5 text-[#c8962c] shrink-0 mt-0.5"
                          aria-hidden="true"
                        />
                        <span className="text-[#374151]">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Notion content blocks (if any additional content in Notion) */}
      {blocks.length > 0 && (
        <section className="bg-white py-16">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <NotionBlockRenderer blocks={blocks} />
          </div>
        </section>
      )}

      <section className="bg-[#f4f6f9] py-16" aria-labelledby="pricing-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Contingency",
                description:
                  "No recovery, no fee. We only earn when you collect — aligned incentives from day one.",
              },
              {
                title: "Fixed Fee",
                description:
                  "Predictable monthly pricing for ongoing AR management and first-party services.",
              },
              {
                title: "Hybrid",
                description:
                  "A custom blend of fixed and contingency pricing designed around your specific portfolio.",
              },
            ].map((model) => (
              <Card key={model.title}>
                <CardHeader>
                  <CardTitle className="text-lg">
                    {model.title} Pricing
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{model.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
          <p className="text-center text-sm text-[#64748b] mt-8">
            All pricing is customized based on portfolio size, age, and
            industry.{" "}
            <Link
              href="/contact"
              className="text-[#1e3a5f] font-medium underline underline-offset-2"
            >
              Contact us for a custom quote.
            </Link>
          </p>
        </div>
      </section>

      <section
        className="bg-[#1e3a5f] text-white py-16"
        aria-labelledby="services-cta-heading"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2
            id="services-cta-heading"
            className="text-3xl font-bold mb-4"
          >
            Not Sure Which Service Is Right for You?
          </h2>
          <p className="text-blue-200 mb-7 max-w-xl mx-auto">
            Our specialists will analyze your receivables portfolio and recommend
            the most effective solution.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" variant="secondary">
                Request a Free Analysis{" "}
                <ArrowRight
                  className="ml-2 h-5 w-5"
                  aria-hidden="true"
                />
              </Button>
            </Link>
            <a href="tel:+18665514684">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-[#1e3a5f]"
              >
                <Phone className="mr-2 h-5 w-5" aria-hidden="true" />
                Call 1-866-551-4684
              </Button>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
