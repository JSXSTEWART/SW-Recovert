import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone } from "lucide-react";
import { siteConfig } from "@/data/site";

export function CtaSection() {
  return (
    <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Ready to Recover What You&apos;re Owed?
        </h2>
        <p className="text-lg text-blue-100 mb-8 max-w-xl mx-auto">
          Get a free, no-obligation consultation and learn how Meridian can
          improve your recovery rates today.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            asChild
            size="lg"
            className="bg-yellow-400 text-blue-900 hover:bg-yellow-300 font-bold"
          >
            <Link href="/contact">
              Schedule a Free Consultation{" "}
              <ArrowRight className="ml-2" size={18} />
            </Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-white text-white hover:bg-white/10"
          >
            <a href={`tel:${siteConfig.contact.phone}`}>
              <Phone size={16} className="mr-2" /> Call{" "}
              {siteConfig.contact.phone}
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
