import Link from "next/link";
import { ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { NotionBlockRenderer } from "@/lib/notion-renderer";
import type { NotionPage, NotionBlock } from "@/lib/notion-types";

type Props = {
  page: NotionPage;
  blocks: NotionBlock[];
};

const benefits = [
  "Competitive salary and performance bonuses",
  "Comprehensive health, dental, and vision insurance",
  "401(k) with company match",
  "Paid time off and holidays",
  "Professional development and training",
  "Supportive, team-oriented culture",
];

export async function CareersTemplate({ page, blocks }: Props) {
  return (
    <>
      <section
        className="bg-[#1e3a5f] text-white py-16 lg:py-20"
        aria-labelledby="careers-hero"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Badge variant="accent" className="mb-4">
            {page.heroBadge || "Careers"}
          </Badge>
          <h1
            id="careers-hero"
            className="text-4xl sm:text-5xl font-bold mb-5 max-w-2xl"
          >
            {page.heroTitle || "Join the Southwest Recovery Services Team"}
          </h1>
          <p className="text-blue-200 text-lg max-w-2xl leading-relaxed">
            {page.heroDescription ||
              "We're looking for talented individuals who share our commitment to compliance, results, and professional growth."}
          </p>
        </div>
      </section>

      <section className="bg-white py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-start mb-12">
            <div>
              <h2 className="text-2xl font-bold text-[#0f1c2e] mb-4">
                Why Work With Us
              </h2>
              <p className="text-[#64748b] leading-relaxed mb-6">
                Southwest Recovery Services has been a leader in the receivables
                management industry for over 25 years. We offer a professional,
                compliance-focused environment where talent is recognized and
                rewarded.
              </p>
              <Link href="/contact">
                <Button variant="primary" size="md">
                  Apply Now{" "}
                  <ArrowRight
                    className="ml-2 h-4 w-4"
                    aria-hidden="true"
                  />
                </Button>
              </Link>
            </div>
            <div className="bg-[#f4f6f9] rounded-2xl p-6">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-[#c8962c] mb-4">
                Benefits & Perks
              </h3>
              <ul className="space-y-3">
                {benefits.map((benefit) => (
                  <li key={benefit} className="flex items-start gap-3">
                    <CheckCircle
                      className="h-5 w-5 text-[#c8962c] shrink-0 mt-0.5"
                      aria-hidden="true"
                    />
                    <span className="text-[#374151]">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {blocks.length > 0 && <NotionBlockRenderer blocks={blocks} />}
        </div>
      </section>

      <section
        className="bg-[#1e3a5f] text-white py-16"
        aria-labelledby="careers-cta"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 id="careers-cta" className="text-3xl font-bold mb-4">
            Ready to Make an Impact?
          </h2>
          <p className="text-blue-200 mb-7 max-w-xl mx-auto">
            Send your resume and cover letter to our hiring team.
          </p>
          <a href="mailto:info@swrecovery.com">
            <Button size="lg" variant="secondary">
              Email Your Resume{" "}
              <ArrowRight
                className="ml-2 h-5 w-5"
                aria-hidden="true"
              />
            </Button>
          </a>
        </div>
      </section>
    </>
  );
}
