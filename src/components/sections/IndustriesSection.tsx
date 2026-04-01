import Link from "next/link";
import { Button } from "@/components/ui/button";
import { industries } from "@/data/site";
import {
  Building2,
  Heart,
  Landmark,
  Zap,
  Shield,
  Home,
  Car,
} from "lucide-react";

const iconMap: Record<string, React.ElementType> = {
  Building2,
  Heart,
  Landmark,
  Zap,
  Shield,
  Home,
  Car,
};

export function IndustriesSection() {
  return (
    <section className="py-20 bg-gray-50" id="industries">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Industries We Serve
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Specialized programs and compliance frameworks built for the unique
            needs of each sector.
          </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {industries.map((industry) => {
            const Icon = iconMap[industry.icon] || Building2;
            return (
              <div
                key={industry.name}
                className="bg-white rounded-xl p-5 border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all text-center group"
              >
                <div className="w-10 h-10 mx-auto mb-3 rounded-full bg-blue-50 flex items-center justify-center group-hover:bg-blue-700 transition-colors">
                  <Icon
                    size={18}
                    className="text-blue-700 group-hover:text-white transition-colors"
                  />
                </div>
                <h3 className="text-sm font-semibold text-gray-900 mb-1">
                  {industry.name}
                </h3>
                <p className="text-xs text-gray-500">{industry.description}</p>
              </div>
            );
          })}
        </div>
        <div className="text-center mt-10">
          <Button
            asChild
            variant="outline"
            size="lg"
            className="border-blue-700 text-blue-700 hover:bg-blue-50"
          >
            <Link href="/industries">
              Learn About Our Industry Programs
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
