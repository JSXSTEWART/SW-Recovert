import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowRight, CheckCircle, ChevronLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { getServices, getBlocks } from "@/lib/notion";
import { NotionBlockRenderer } from "@/lib/notion-renderer";
import { iconMap } from "@/components/templates/icon-map";

export const revalidate = 300;

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const services = await getServices();
  const service = services.find((s) => s.slug === slug);

  if (!service) return { title: "Service Not Found" };

  return {
    title: `${service.title} | Services`,
    description: service.description,
  };
}

export async function generateStaticParams() {
  const services = await getServices();
  return services.map((s) => ({ slug: s.slug }));
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const services = await getServices();
  const service = services.find((s) => s.slug === slug);

  if (!service) notFound();

  const Icon = iconMap[service.icon] ?? iconMap.Shield;
  const blocks = service.id.includes("-")
    ? await getBlocks(service.id)
    : [];

  return (
    <>
      <section className="bg-[#1e3a5f] text-white py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/services"
            className="inline-flex items-center gap-1 text-sm text-blue-200 hover:text-white mb-6 transition-colors"
          >
            <ChevronLeft className="h-4 w-4" aria-hidden="true" />
            All Services
          </Link>
          <div className="flex items-center gap-3 mb-4">
            <div
              className="w-14 h-14 bg-white/10 rounded-xl flex items-center justify-center"
              aria-hidden="true"
            >
              <Icon className="h-7 w-7 text-white" />
            </div>
            <Badge variant="accent">{service.tagline}</Badge>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold mb-5 max-w-2xl">
            {service.title}
          </h1>
          <p className="text-blue-200 text-lg max-w-2xl leading-relaxed">
            {service.description}
          </p>
        </div>
      </section>

      <section className="bg-white py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <h2 className="text-2xl font-bold text-[#0f1c2e] mb-6">
                What&apos;s Included
              </h2>
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
            <div className="bg-[#f4f6f9] rounded-2xl p-8">
              <h3 className="text-lg font-bold text-[#0f1c2e] mb-3">
                Ready to get started?
              </h3>
              <p className="text-[#64748b] mb-6">
                Contact our team for a free consultation and custom quote
                tailored to your organization.
              </p>
              <Link href="/contact">
                <Button variant="primary" size="lg" className="w-full">
                  Get a Free Quote
                  <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
                </Button>
              </Link>
            </div>
          </div>

          {blocks.length > 0 && (
            <div className="mt-12 pt-8 border-t border-[#e2e8f0]">
              <NotionBlockRenderer blocks={blocks} />
            </div>
          )}
        </div>
      </section>
    </>
  );
}
