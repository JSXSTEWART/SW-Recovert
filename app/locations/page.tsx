import type { Metadata } from "next";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Phone } from "lucide-react";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Locations",
  description:
    "Find Southwest Recovery Services office locations and contact details for local support.",
};

const locations = [
  {
    city: "Addison, TX (Corporate Office)",
    address: siteConfig.headquarters.replace(", ", "\n").replace(", ", "\n"),
    phone: siteConfig.phone,
  },
  {
    city: "Phoenix, AZ (Operations)",
    address: "Regional Operations Center\nPhoenix Metro Area",
    phone: siteConfig.phone,
  },
  {
    city: "Houston, TX (Operations)",
    address: "Regional Operations Center\nHouston Metro Area",
    phone: siteConfig.phone,
  },
];

export default function LocationsPage() {
  return (
    <>
      <section className="bg-[#1e3a5f] text-white py-16 lg:py-20" aria-labelledby="locations-hero-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Badge variant="accent" className="mb-4">Locations</Badge>
          <h1 id="locations-hero-heading" className="text-4xl sm:text-5xl font-bold mb-5 max-w-2xl">Regional Presence, National Coverage</h1>
          <p className="text-blue-200 text-lg max-w-2xl leading-relaxed">Southwest Recovery Services supports clients across the U.S. with experienced teams and compliance-first operations.</p>
        </div>
      </section>

      <section className="bg-white py-16 lg:py-24" aria-label="Office locations">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {locations.map((location) => (
            <Card key={location.city}>
              <CardHeader><CardTitle className="text-[#0f1c2e]">{location.city}</CardTitle></CardHeader>
              <CardContent className="space-y-3 text-sm text-[#475569]">
                <p className="flex gap-2 whitespace-pre-line"><MapPin className="h-4 w-4 mt-0.5 text-[#1e3a5f]" />{location.address}</p>
                <a href={`tel:${location.phone.replace(/[^\d+]/g, "")}`} className="flex gap-2 hover:text-[#1e3a5f] transition-colors"><Phone className="h-4 w-4 mt-0.5 text-[#1e3a5f]" />{location.phone}</a>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </>
  );
}
