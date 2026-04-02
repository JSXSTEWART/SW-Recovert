import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { MapPin, Phone, ChevronLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { getLocations } from "@/lib/notion";

export const revalidate = 300;

type Props = {
  params: Promise<{ slug: string }>;
};

function toSlug(name: string): string {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const locations = await getLocations();
  const location = locations.find((l) => toSlug(l.name) === slug);

  if (!location) return { title: "Location Not Found" };

  return {
    title: `${location.name} | Locations`,
    description: `Southwest Recovery Services office in ${location.name}. ${location.address}`,
  };
}

export async function generateStaticParams() {
  const locations = await getLocations();
  return locations.map((l) => ({ slug: toSlug(l.name) }));
}

export default async function LocationDetailPage({ params }: Props) {
  const { slug } = await params;
  const locations = await getLocations();
  const location = locations.find((l) => toSlug(l.name) === slug);

  if (!location) notFound();

  return (
    <>
      <section className="bg-[#1e3a5f] text-white py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/locations"
            className="inline-flex items-center gap-1 text-sm text-blue-200 hover:text-white mb-6 transition-colors"
          >
            <ChevronLeft className="h-4 w-4" aria-hidden="true" />
            All Locations
          </Link>
          <Badge variant="accent" className="mb-4">
            {location.type === "HQ" ? "Corporate Office" : "Operations Center"}
          </Badge>
          <h1 className="text-4xl sm:text-5xl font-bold mb-5">
            {location.name}
          </h1>
        </div>
      </section>

      <section className="bg-white py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-10">
            <div className="space-y-6">
              <div className="flex gap-4">
                <div
                  className="w-10 h-10 bg-[#1e3a5f]/10 rounded-lg flex items-center justify-center shrink-0"
                  aria-hidden="true"
                >
                  <MapPin className="h-5 w-5 text-[#1e3a5f]" />
                </div>
                <div>
                  <p className="text-sm font-medium text-[#64748b]">Address</p>
                  <p className="text-[#0f1c2e]">{location.address}</p>
                </div>
              </div>
              {location.phone && (
                <div className="flex gap-4">
                  <div
                    className="w-10 h-10 bg-[#1e3a5f]/10 rounded-lg flex items-center justify-center shrink-0"
                    aria-hidden="true"
                  >
                    <Phone className="h-5 w-5 text-[#1e3a5f]" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-[#64748b]">Phone</p>
                    <a
                      href={`tel:${location.phone.replace(/[^\d+]/g, "")}`}
                      className="text-[#1e3a5f] font-medium hover:text-[#c8962c] transition-colors"
                    >
                      {location.phone}
                    </a>
                  </div>
                </div>
              )}
            </div>

            <div className="bg-[#f4f6f9] rounded-2xl p-8 text-center">
              <h2 className="text-lg font-bold text-[#0f1c2e] mb-3">
                Contact This Office
              </h2>
              <p className="text-[#64748b] mb-6">
                Reach out to schedule a meeting or learn about our services in
                this region.
              </p>
              <Link href="/contact">
                <Button variant="primary" size="lg" className="w-full">
                  Get in Touch
                  <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
