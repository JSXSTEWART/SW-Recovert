import Link from "next/link";
import { ArrowRight, AlertTriangle, CheckCircle, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { NotionBlockRenderer } from "@/lib/notion-renderer";
import { getIndustries } from "@/lib/notion";
import { iconMap } from "@/components/templates/icon-map";
import type { NotionPage, NotionBlock } from "@/lib/notion-types";

type Props = {
  page: NotionPage;
  blocks: NotionBlock[];
};

export async function IndustryTemplate({ page, blocks }: Props) {
  const industries = await getIndustries();

  return (
    <>
      <section
        className="bg-[#1e3a5f] text-white py-16 lg:py-20"
        aria-labelledby="industries-hero-heading"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Badge variant="accent" className="mb-4">
            {page.heroBadge || "Industries We Serve"}
          </Badge>
          <h1
            id="industries-hero-heading"
            className="text-4xl sm:text-5xl font-bold mb-5 max-w-2xl"
          >
            {page.heroTitle || "Industry-Specific Recovery Expertise"}
          </h1>
          <p className="text-blue-200 text-lg max-w-2xl leading-relaxed">
            {page.heroDescription ||
              "Every industry has unique compliance requirements, debtor demographics, and recovery challenges. We bring specialized teams and proven strategies to each."}
          </p>
        </div>
      </section>

      {/* Sticky jump nav */}
      <nav className="sticky top-16 z-30 bg-white border-b border-[#e2e8f0] shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-2 py-3 overflow-x-auto scrollbar-hide">
            {industries.map((industry) => {
              const Icon = iconMap[industry.icon] ?? iconMap.Building2;
              return (
                <a
                  key={industry.id}
                  href={`#${industry.slug}`}
                  className="flex items-center gap-2 px-3 py-1.5 text-sm font-medium text-[#475569] hover:text-[#1e3a5f] hover:bg-[#f4f6f9] rounded-lg transition-colors whitespace-nowrap"
                >
                  <Icon className="h-4 w-4" aria-hidden="true" />
                  {industry.title}
                </a>
              );
            })}
          </div>
        </div>
      </nav>

      <section className="bg-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          {industries.map((industry, index) => {
            const Icon = iconMap[industry.icon] ?? iconMap.Building2;
            const isEven = index % 2 === 0;
            return (
              <div
                key={industry.id}
                id={industry.slug}
                className="scroll-mt-32"
              >
                <div className="grid lg:grid-cols-2 gap-10 items-start">
                  <div className={isEven ? "" : "lg:order-2"}>
                    <div className="flex items-center gap-3 mb-4">
                      <div
                        className="w-12 h-12 bg-[#1e3a5f] rounded-xl flex items-center justify-center"
                        aria-hidden="true"
                      >
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                      <h2 className="text-3xl font-bold text-[#0f1c2e]">
                        {industry.title}
                      </h2>
                    </div>
                    <p className="text-[#64748b] leading-relaxed mb-6">
                      {industry.description}
                    </p>
                    <Link href="/contact">
                      <Button variant="primary" size="md">
                        Talk to a {industry.title} Specialist{" "}
                        <ArrowRight
                          className="ml-2 h-4 w-4"
                          aria-hidden="true"
                        />
                      </Button>
                    </Link>
                  </div>
                  <div
                    className={`space-y-6 ${isEven ? "" : "lg:order-1"}`}
                  >
                    <div className="bg-[#f4f6f9] rounded-2xl p-6">
                      <h3 className="text-sm font-semibold uppercase tracking-wider text-[#c8962c] mb-4 flex items-center gap-2">
                        <AlertTriangle
                          className="h-4 w-4"
                          aria-hidden="true"
                        />
                        Common Challenges
                      </h3>
                      <ul className="space-y-2">
                        {industry.challenges.map((challenge) => (
                          <li
                            key={challenge}
                            className="flex items-start gap-2 text-[#374151]"
                          >
                            <span className="text-[#c8962c] mt-1">
                              &bull;
                            </span>
                            {challenge}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="bg-[#f4f6f9] rounded-2xl p-6">
                      <h3 className="text-sm font-semibold uppercase tracking-wider text-[#1e3a5f] mb-4 flex items-center gap-2">
                        <CheckCircle
                          className="h-4 w-4"
                          aria-hidden="true"
                        />
                        Our Solutions
                      </h3>
                      <ul className="space-y-2">
                        {industry.solutions.map((solution) => (
                          <li
                            key={solution}
                            className="flex items-start gap-2 text-[#374151]"
                          >
                            <CheckCircle
                              className="h-4 w-4 text-[#1e3a5f] shrink-0 mt-0.5"
                              aria-hidden="true"
                            />
                            {solution}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {blocks.length > 0 && (
        <section className="bg-white py-16">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <NotionBlockRenderer blocks={blocks} />
          </div>
        </section>
      )}

      <section
        className="bg-[#1e3a5f] text-white py-16"
        aria-labelledby="industry-cta"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 id="industry-cta" className="text-3xl font-bold mb-4">
            Your Industry. Our Expertise.
          </h2>
          <p className="text-blue-200 mb-7 max-w-xl mx-auto">
            Let us show you how our industry-specific approach delivers higher
            recovery rates and better compliance outcomes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" variant="secondary">
                Request a Free Consultation{" "}
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
