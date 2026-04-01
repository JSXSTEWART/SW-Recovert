import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, CheckCircle } from "lucide-react";

const trustBadges = [
  "FDCPA Compliant",
  "HIPAA Certified",
  "BBB Accredited",
  "25+ Years Experience",
];

export function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white">
      <div className="relative container mx-auto px-4 py-20 md:py-28 lg:py-36">
        <div className="max-w-3xl">
          <Badge className="mb-4 bg-blue-600 text-white border-blue-500 hover:bg-blue-600">
            Trusted by 500+ Organizations Nationwide
          </Badge>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
            Recover More Revenue.{" "}
            <span className="text-yellow-400">Stay Compliant.</span>{" "}
            Protect Your Brand.
          </h1>
          <p className="text-lg md:text-xl text-blue-100 mb-8 max-w-2xl">
            Meridian Recovery Solutions delivers results-driven debt recovery,
            revenue cycle management, and AR services—fully compliant, fully
            transparent, and built around your industry.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mb-10">
            <Button
              asChild
              size="lg"
              className="bg-yellow-400 text-blue-900 hover:bg-yellow-300 font-bold text-base"
            >
              <Link href="/contact">
                Get a Free Consultation{" "}
                <ArrowRight className="ml-2" size={18} />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/10 text-base"
            >
              <Link href="/services">Explore Our Services</Link>
            </Button>
          </div>
          <div className="flex flex-wrap gap-3">
            {trustBadges.map((badge) => (
              <span
                key={badge}
                className="flex items-center gap-1.5 text-sm text-blue-100"
              >
                <CheckCircle size={15} className="text-yellow-400" /> {badge}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
