import type { PageTemplate } from "@/lib/notion-types";

// ---------------------------------------------------------------------------
// Route Map — the single source of truth for slug → template resolution.
//
// Every routable slug is declared here. The catch-all [[...slug]] route and
// typed collection routes (service/[slug], industry/[slug], location/[slug])
// all resolve through this table.
//
// To add a new page: add an entry here. To move a page between templates:
// change the `template` field. No routing code needs to change.
// ---------------------------------------------------------------------------

export type RouteEntry = {
  /** URL slug (empty string = home page) */
  slug: string;
  /** Which template component renders this page */
  template: PageTemplate;
  /** Which Notion database this content lives in (null = Pages DB or fallback) */
  source: "pages" | "blog" | "services" | "industries" | "testimonials" | "team" | "locations" | "settings" | null;
  /** SEO / fallback metadata */
  title: string;
  description: string;
  heroTitle: string;
  heroBadge: string;
  heroDescription: string;
};

// ---------------------------------------------------------------------------
// The map — ordered by navigation priority
// ---------------------------------------------------------------------------

export const routeMap: RouteEntry[] = [
  // ── Home ──────────────────────────────────────────────────────────────
  {
    slug: "",
    template: "landing",
    source: "pages",
    title: "Financial BPO & Receivables Management Services",
    description: "Southwest Recovery Services delivers scalable financial business process outsourcing, receivables management, and compliance-driven recovery programs.",
    heroTitle: "Optimize Performance.\nStrengthen Cash Flow.",
    heroBadge: "Trusted Since 1999",
    heroDescription: "Southwest Recovery Services delivers scalable financial BPO and receivables programs for healthcare, government, utilities, and commercial organizations — so your internal teams can stay focused on growth.",
  },

  // ── Core pages ────────────────────────────────────────────────────────
  {
    slug: "about",
    template: "landing",
    source: "pages",
    title: "About Us",
    description: "Learn about Southwest Recovery Services — 25+ years of trusted recovery expertise, compliance-first approach, and industry leadership.",
    heroTitle: "25 Years of Trusted Recovery Expertise",
    heroBadge: "About Us",
    heroDescription: "Founded in 1999, Southwest Recovery Services has grown into a nationally recognized leader in financial BPO and receivables management.",
  },
  {
    slug: "services",
    template: "service",
    source: "services",
    title: "Our Services",
    description: "Southwest Recovery Services offers debt recovery, revenue cycle management, accounts receivable management, compliance consulting, and business process outsourcing.",
    heroTitle: "A Full Suite of Recovery & Receivables Solutions",
    heroBadge: "Our Services",
    heroDescription: "From early-stage AR management to contingency collections and BPO, we deliver integrated solutions customized to your industry and compliance requirements.",
  },
  {
    slug: "industries",
    template: "industry",
    source: "industries",
    title: "Industries We Serve",
    description: "Industry-specific recovery expertise for commercial, healthcare, government, utilities, insurance, property management, and auto finance.",
    heroTitle: "Industry-Specific Recovery Expertise",
    heroBadge: "Industries We Serve",
    heroDescription: "Every industry has unique compliance requirements, debtor demographics, and recovery challenges. We bring specialized teams and proven strategies to each.",
  },
  {
    slug: "contact",
    template: "contact",
    source: "pages",
    title: "Contact Us",
    description: "Contact Southwest Recovery Services for a free consultation about your debt recovery and receivables management needs.",
    heroTitle: "Let's Start a Conversation",
    heroBadge: "Contact Us",
    heroDescription: "Tell us about your receivables challenges and we'll connect you with a specialist who can help.",
  },
  {
    slug: "resources",
    template: "blog",
    source: "blog",
    title: "Resources & Insights",
    description: "Guides, compliance updates, case studies, and strategies for receivables management professionals.",
    heroTitle: "Insights for Receivables Professionals",
    heroBadge: "Resources",
    heroDescription: "Guides, compliance updates, and strategies to optimize your receivables management.",
  },

  // ── Collection listing pages ──────────────────────────────────────────
  {
    slug: "testimonials",
    template: "landing",
    source: "testimonials",
    title: "Client Testimonials",
    description: "Read what our clients say about Southwest Recovery Services — real results from real partnerships.",
    heroTitle: "What Our Clients Say",
    heroBadge: "Testimonials",
    heroDescription: "Hear from organizations that have trusted Southwest Recovery Services to transform their receivables performance.",
  },
  {
    slug: "locations",
    template: "landing",
    source: "locations",
    title: "Our Locations",
    description: "Southwest Recovery Services office locations in Addison TX, Phoenix AZ, and Houston TX.",
    heroTitle: "Our Offices",
    heroBadge: "Locations",
    heroDescription: "With offices across the country, we serve clients nationwide with local expertise.",
  },
  {
    slug: "about/locations",
    template: "landing",
    source: "locations",
    title: "Our Locations",
    description: "Southwest Recovery Services office locations.",
    heroTitle: "Our Offices",
    heroBadge: "Locations",
    heroDescription: "With offices across the country, we serve clients nationwide with local expertise.",
  },

  // ── Support & careers ─────────────────────────────────────────────────
  {
    slug: "customer-support",
    template: "support",
    source: "pages",
    title: "Customer Support",
    description: "Get help with your account, make a payment, or contact Southwest Recovery Services customer service.",
    heroTitle: "We're Here to Help",
    heroBadge: "Customer Support",
    heroDescription: "Have questions about your account? Need to make a payment? Our support team is ready to assist you.",
  },
  {
    slug: "employment",
    template: "careers",
    source: "pages",
    title: "Careers at Southwest Recovery Services",
    description: "Join our team — explore career opportunities at Southwest Recovery Services.",
    heroTitle: "Join the Southwest Recovery Services Team",
    heroBadge: "Careers",
    heroDescription: "We're looking for talented individuals who share our commitment to compliance, results, and professional growth.",
  },

  // ── Legal pages ───────────────────────────────────────────────────────
  {
    slug: "privacy-policy",
    template: "legal",
    source: "pages",
    title: "Privacy Policy",
    description: "Southwest Recovery Services Privacy Policy — how we collect, use, and protect your personal information.",
    heroTitle: "Privacy Policy",
    heroBadge: "Legal",
    heroDescription: "",
  },
  {
    slug: "privacy",
    template: "legal",
    source: "pages",
    title: "Privacy Information",
    description: "Privacy information for Southwest Recovery Services.",
    heroTitle: "Privacy Information",
    heroBadge: "Legal",
    heroDescription: "",
  },
  {
    slug: "sms-privacy-policy",
    template: "legal",
    source: "pages",
    title: "SMS Privacy Policy",
    description: "SMS Privacy Policy for Southwest Recovery Services text message communications.",
    heroTitle: "SMS Privacy Policy",
    heroBadge: "Legal",
    heroDescription: "",
  },
  {
    slug: "sms-terms-and-conditions-policy",
    template: "legal",
    source: "pages",
    title: "SMS Terms and Conditions",
    description: "SMS Terms and Conditions for Southwest Recovery Services text message communications.",
    heroTitle: "SMS Terms and Conditions",
    heroBadge: "Legal",
    heroDescription: "",
  },
];

// ---------------------------------------------------------------------------
// Lookup helpers
// ---------------------------------------------------------------------------

const slugIndex = new Map<string, RouteEntry>(
  routeMap.map((entry) => [entry.slug, entry])
);

/** Look up a route entry by slug. Returns undefined if not mapped. */
export function getRouteEntry(slug: string): RouteEntry | undefined {
  return slugIndex.get(slug);
}

/** Get all slugs for static generation */
export function getAllSlugs(): string[] {
  return routeMap.map((entry) => entry.slug);
}

/** Get all slugs that use a specific template */
export function getSlugsByTemplate(template: PageTemplate): string[] {
  return routeMap
    .filter((entry) => entry.template === template)
    .map((entry) => entry.slug);
}

/** Get all slugs that source from a specific database */
export function getSlugsBySource(source: RouteEntry["source"]): string[] {
  return routeMap
    .filter((entry) => entry.source === source)
    .map((entry) => entry.slug);
}
