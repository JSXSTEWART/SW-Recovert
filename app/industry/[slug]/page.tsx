import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowRight, AlertTriangle, CheckCircle, ChevronLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { getIndustries, getBlocks } from "@/lib/notion";
import { NotionBlockRenderer } from "@/lib/notion-renderer";
import { iconMap } from "@/components/templates/icon-map";

export const revalidate = 300;

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const industries = await getIndustries();
  const industry = industries.find((i) => i.slug === slug);

  if (!industry) return { title: "Industry Not Found" };

  return {
    title: `${industry.title} | Industries`,
    description: industry.description,
  };
}

export async function generateStaticParams() {
  const industries = await getIndustries();
  return industries.map((i) => ({ slug: i.slug }));
}

export default async function IndustryDetailPage({ params }: Props) {
  const { slug } = await params;
  const industries = await getIndustries();
  const industry = industries.find((i) => i.slug === slug);

  if (!industry) notFound();

  const Icon = iconMap[industry.icon] ?? iconMap.Building2;
  const blocks = industry.id.includes("-")
    ? await getBlocks(industry.id)
    : [];

  return (
    <>
      <section className="bg-[#1e3a5f] text-white py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/industries"
            className="inline-flex items-center gap-1 text-sm text-blue-200 hover:text-white mb-6 transition-colors"
          >
            <ChevronLeft className="h-4 w-4" aria-hidden="true" />
            All Industries
          </Link>
          <div className="flex items-center gap-3 mb-4">
            <div
              className="w-14 h-14 bg-white/10 rounded-xl flex items-center justify-center"
              aria-hidden="true"
            >
              <Icon className="h-7 w-7 text-white" />
            </div>
            <Badge variant="accent">{industry.title}</Badge>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold mb-5 max-w-2xl">
            {industry.title} Recovery Solutions
          </h1>
          <p className="text-blue-200 text-lg max-w-2xl leading-relaxed">
            {industry.description}
          </p>
        </div>
      </section>

      <section className="bg-white py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-[#f4f6f9] rounded-2xl p-6">
              <h2 className="text-sm font-semibold uppercase tracking-wider text-[#c8962c] mb-4 flex items-center gap-2">
                <AlertTriangle className="h-4 w-4" aria-hidden="true" />
                Common Challenges
              </h2>
              <ul className="space-y-2">
                {industry.challenges.map((challenge) => (
                  <li
                    key={challenge}
                    className="flex items-start gap-2 text-[#374151]"
                  >
                    <span className="text-[#c8962c] mt-1">&bull;</span>
                    {challenge}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-[#f4f6f9] rounded-2xl p-6">
              <h2 className="text-sm font-semibold uppercase tracking-wider text-[#1e3a5f] mb-4 flex items-center gap-2">
                <CheckCircle className="h-4 w-4" aria-hidden="true" />
                Our Solutions
              </h2>
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

          {blocks.length > 0 && (
            <div className="mt-8">
              <NotionBlockRenderer blocks={blocks} />
            </div>
          )}

          <div className="mt-12 text-center">
            <Link href="/contact">
              <Button variant="primary" size="lg">
                Talk to a {industry.title} Specialist
                <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
