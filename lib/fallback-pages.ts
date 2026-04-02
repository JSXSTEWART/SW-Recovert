import type { PageTemplate } from "@/lib/notion-types";

type FallbackPage = {
  slug: string;
  title: string;
  description: string;
  template: PageTemplate;
  heroTitle: string;
  heroBadge: string;
  heroDescription: string;
};

export const fallbackPages: FallbackPage[] = [
  {
    slug: "",
    title: "Financial BPO & Receivables Management Services",
    description:
      "Southwest Recovery Services delivers scalable financial business process outsourcing, receivables management, and compliance-driven recovery programs.",
    template: "landing",
    heroTitle: "Optimize Performance.\nStrengthen Cash Flow.",
    heroBadge: "Trusted Since 1999",
    heroDescription:
      "Southwest Recovery Services delivers scalable financial BPO and receivables programs for healthcare, government, utilities, and commercial organizations — so your internal teams can stay focused on growth.",
  },
  {
    slug: "about",
    title: "About Us",
    description:
      "Learn about Southwest Recovery Services — 25+ years of trusted recovery expertise, compliance-first approach, and industry leadership.",
    template: "landing",
    heroTitle: "25 Years of Trusted Recovery Expertise",
    heroBadge: "About Us",
    heroDescription:
      "Founded in 1999, Southwest Recovery Services has grown into a nationally recognized leader in financial BPO and receivables management.",
  },
  {
    slug: "services",
    title: "Our Services",
    description:
      "Southwest Recovery Services offers debt recovery, revenue cycle management, accounts receivable management, compliance consulting, and business process outsourcing.",
    template: "service",
    heroTitle: "A Full Suite of Recovery & Receivables Solutions",
    heroBadge: "Our Services",
    heroDescription:
      "From early-stage AR management to contingency collections and BPO, we deliver integrated solutions customized to your industry and compliance requirements.",
  },
  {
    slug: "industries",
    title: "Industries We Serve",
    description:
      "Industry-specific recovery expertise for commercial, healthcare, government, utilities, insurance, property management, and auto finance.",
    template: "industry",
    heroTitle: "Industry-Specific Recovery Expertise",
    heroBadge: "Industries We Serve",
    heroDescription:
      "Every industry has unique compliance requirements, debtor demographics, and recovery challenges. We bring specialized teams and proven strategies to each.",
  },
  {
    slug: "contact",
    title: "Contact Us",
    description:
      "Contact Southwest Recovery Services for a free consultation about your debt recovery and receivables management needs.",
    template: "contact",
    heroTitle: "Let's Start a Conversation",
    heroBadge: "Contact Us",
    heroDescription:
      "Tell us about your receivables challenges and we'll connect you with a specialist who can help.",
  },
  {
    slug: "resources",
    title: "Resources & Insights",
    description:
      "Guides, compliance updates, case studies, and strategies for receivables management professionals.",
    template: "blog",
    heroTitle: "Insights for Receivables Professionals",
    heroBadge: "Resources",
    heroDescription:
      "Guides, compliance updates, and strategies to optimize your receivables management.",
  },
  {
    slug: "testimonials",
    title: "Client Testimonials",
    description:
      "Read what our clients say about Southwest Recovery Services — real results from real partnerships.",
    template: "landing",
    heroTitle: "What Our Clients Say",
    heroBadge: "Testimonials",
    heroDescription:
      "Hear from organizations that have trusted Southwest Recovery Services to transform their receivables performance.",
  },
  {
    slug: "locations",
    title: "Our Locations",
    description:
      "Southwest Recovery Services office locations in Addison TX, Phoenix AZ, and Houston TX.",
    template: "landing",
    heroTitle: "Our Offices",
    heroBadge: "Locations",
    heroDescription:
      "With offices across the country, we serve clients nationwide with local expertise.",
  },
  {
    slug: "about/locations",
    title: "Our Locations",
    description:
      "Southwest Recovery Services office locations.",
    template: "landing",
    heroTitle: "Our Offices",
    heroBadge: "Locations",
    heroDescription:
      "With offices across the country, we serve clients nationwide with local expertise.",
  },
  {
    slug: "customer-support",
    title: "Customer Support",
    description:
      "Get help with your account, make a payment, or contact Southwest Recovery Services customer service.",
    template: "support",
    heroTitle: "We're Here to Help",
    heroBadge: "Customer Support",
    heroDescription:
      "Have questions about your account? Need to make a payment? Our support team is ready to assist you.",
  },
  {
    slug: "employment",
    title: "Careers at Southwest Recovery Services",
    description:
      "Join our team — explore career opportunities at Southwest Recovery Services.",
    template: "careers",
    heroTitle: "Join the Southwest Recovery Services Team",
    heroBadge: "Careers",
    heroDescription:
      "We're looking for talented individuals who share our commitment to compliance, results, and professional growth.",
  },
  {
    slug: "privacy-policy",
    title: "Privacy Policy",
    description:
      "Southwest Recovery Services Privacy Policy — how we collect, use, and protect your personal information.",
    template: "legal",
    heroTitle: "Privacy Policy",
    heroBadge: "Legal",
    heroDescription: "",
  },
  {
    slug: "privacy",
    title: "Privacy Information",
    description:
      "Privacy information for Southwest Recovery Services.",
    template: "legal",
    heroTitle: "Privacy Information",
    heroBadge: "Legal",
    heroDescription: "",
  },
  {
    slug: "sms-privacy-policy",
    title: "SMS Privacy Policy",
    description:
      "SMS Privacy Policy for Southwest Recovery Services text message communications.",
    template: "legal",
    heroTitle: "SMS Privacy Policy",
    heroBadge: "Legal",
    heroDescription: "",
  },
  {
    slug: "sms-terms-and-conditions-policy",
    title: "SMS Terms and Conditions",
    description:
      "SMS Terms and Conditions for Southwest Recovery Services text message communications.",
    template: "legal",
    heroTitle: "SMS Terms and Conditions",
    heroBadge: "Legal",
    heroDescription: "",
  },
];
