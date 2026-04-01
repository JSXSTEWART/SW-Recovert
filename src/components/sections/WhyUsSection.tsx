import {
  ShieldCheck,
  BarChart3,
  Users,
  HeadphonesIcon,
  FileText,
  Globe,
} from "lucide-react";

const differentiators = [
  {
    icon: ShieldCheck,
    title: "Compliance-First Approach",
    description:
      "Every interaction is governed by strict FDCPA, HIPAA, and state-specific regulations. Our compliance team monitors every account.",
  },
  {
    icon: BarChart3,
    title: "Transparent Reporting",
    description:
      "Real-time dashboards and detailed monthly reports keep you informed on every dollar recovered and every action taken.",
  },
  {
    icon: Users,
    title: "Industry Specialists",
    description:
      "Dedicated teams with deep expertise in your vertical—from healthcare RCM to government receivables management.",
  },
  {
    icon: HeadphonesIcon,
    title: "White-Glove Service",
    description:
      "A dedicated account manager, regular strategy calls, and SLA-backed response times set us apart from commodity collectors.",
  },
  {
    icon: FileText,
    title: "Proven Methodology",
    description:
      "Our proprietary recovery framework has consistently outperformed national benchmarks by 15–30% across all verticals.",
  },
  {
    icon: Globe,
    title: "Nationwide Coverage",
    description:
      "Licensed and bonded in all 50 states. We handle multi-jurisdictional accounts with a single point of contact.",
  },
];

export function WhyUsSection() {
  return (
    <section className="py-20 bg-white" id="why-us">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Meridian?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Organizations choose us because compliance, transparency, and
            performance aren&apos;t trade-offs—they&apos;re our standard.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {differentiators.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.title} className="flex gap-4">
                <div className="shrink-0 w-11 h-11 rounded-lg bg-blue-700 flex items-center justify-center">
                  <Icon size={20} className="text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-600">{item.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
