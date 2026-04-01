import Link from "next/link";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { services } from "@/data/site";
import {
  DollarSign,
  TrendingUp,
  BookOpen,
  Lightbulb,
  Settings,
  ArrowRight,
} from "lucide-react";

const iconMap: Record<string, React.ElementType> = {
  DollarSign,
  TrendingUp,
  BookOpen,
  Lightbulb,
  Settings,
};

export function ServicesSection() {
  return (
    <section className="py-20 bg-white" id="services">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive receivables management solutions tailored to your
            industry and compliance requirements.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => {
            const Icon = iconMap[service.icon] || DollarSign;
            return (
              <Card
                key={service.slug}
                className="group hover:shadow-lg transition-shadow border-gray-200"
              >
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center mb-3 group-hover:bg-blue-700 transition-colors">
                    <Icon
                      size={22}
                      className="text-blue-700 group-hover:text-white transition-colors"
                    />
                  </div>
                  <CardTitle className="text-lg">{service.title}</CardTitle>
                  <CardDescription>{service.shortDescription}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button
                    asChild
                    variant="ghost"
                    size="sm"
                    className="text-blue-700 hover:text-blue-900 p-0"
                  >
                    <Link
                      href={`/services#${service.slug}`}
                      className="flex items-center gap-1"
                    >
                      Learn more <ArrowRight size={14} />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
        <div className="text-center mt-10">
          <Button asChild size="lg" className="bg-blue-700 hover:bg-blue-800">
            <Link href="/services">View All Services</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
