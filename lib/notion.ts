import { Client } from "@notionhq/client";
import { env } from "@/config/env";
import { blogPosts as fallbackBlogPosts } from "@/lib/content";
import { siteConfig as fallbackSiteConfig } from "@/lib/site";
import type {
  NotionPage,
  NotionBlogPost,
  NotionService,
  NotionIndustry,
  NotionTestimonial,
  NotionTeamMember,
  NotionLocation,
  NotionBlock,
  SiteSettings,
  PageTemplate,
} from "@/lib/notion-types";

// ---------------------------------------------------------------------------
// Client
// ---------------------------------------------------------------------------

const notion = new Client({ auth: env.NOTION_API_KEY });

const isConfigured = () => Boolean(env.NOTION_API_KEY);

// ---------------------------------------------------------------------------
// Property helpers – extract typed values from Notion page properties
// ---------------------------------------------------------------------------

type PropertyValue = {
  type: string;
  title?: { plain_text: string }[];
  rich_text?: { plain_text: string }[];
  select?: { name: string } | null;
  number?: number | null;
  checkbox?: boolean;
  date?: { start: string } | null;
  url?: string | null;
  files?: { file?: { url: string }; external?: { url: string } }[];
  [key: string]: unknown;
};

function getTitle(prop: PropertyValue | undefined): string {
  if (!prop || prop.type !== "title") return "";
  return prop.title?.map((t) => t.plain_text).join("") ?? "";
}

function getRichText(prop: PropertyValue | undefined): string {
  if (!prop || prop.type !== "rich_text") return "";
  return prop.rich_text?.map((t) => t.plain_text).join("") ?? "";
}

function getSelect(prop: PropertyValue | undefined): string {
  if (!prop || prop.type !== "select") return "";
  return prop.select?.name ?? "";
}

function getNumber(prop: PropertyValue | undefined): number {
  if (!prop || prop.type !== "number") return 0;
  return prop.number ?? 0;
}

function getCheckbox(prop: PropertyValue | undefined): boolean {
  if (!prop || prop.type !== "checkbox") return false;
  return prop.checkbox ?? false;
}

function getDate(prop: PropertyValue | undefined): string {
  if (!prop || prop.type !== "date") return "";
  return prop.date?.start ?? "";
}

function getFileUrl(prop: PropertyValue | undefined): string {
  if (!prop || prop.type !== "files") return "";
  const file = prop.files?.[0];
  return file?.file?.url ?? file?.external?.url ?? "";
}

// ---------------------------------------------------------------------------
// Pages database
// ---------------------------------------------------------------------------

export async function getPages(): Promise<NotionPage[]> {
  if (!isConfigured() || !env.NOTION_PAGES_DB_ID) return [];

  try {
    const response = await notion.databases.query({
      database_id: env.NOTION_PAGES_DB_ID,
      filter: {
        property: "Status",
        select: { equals: "Published" },
      },
      sorts: [{ property: "Order", direction: "ascending" }],
    });

    return response.results.map((page) => {
      const props = (page as Record<string, unknown>).properties as Record<
        string,
        PropertyValue
      >;
      return {
        id: (page as { id: string }).id,
        slug: getRichText(props.Slug),
        title: getTitle(props.Title),
        description: getRichText(props.Description),
        template: (getSelect(props.Template) || "landing") as PageTemplate,
        heroTitle: getRichText(props.HeroTitle),
        heroBadge: getRichText(props.HeroBadge),
        heroDescription: getRichText(props.HeroDescription),
        ogImage: getFileUrl(props.OGImage),
        status: getSelect(props.Status) as NotionPage["status"],
        order: getNumber(props.Order),
        lastEdited: (page as { last_edited_time?: string }).last_edited_time ?? "",
      };
    });
  } catch (error) {
    console.error("[Notion] Failed to fetch pages:", error);
    return [];
  }
}

export async function getPageBySlug(
  slug: string
): Promise<{ page: NotionPage; blocks: NotionBlock[] } | null> {
  if (!isConfigured() || !env.NOTION_PAGES_DB_ID) return null;

  try {
    const response = await notion.databases.query({
      database_id: env.NOTION_PAGES_DB_ID,
      filter: {
        and: [
          { property: "Slug", rich_text: { equals: slug } },
          { property: "Status", select: { equals: "Published" } },
        ],
      },
      page_size: 1,
    });

    if (response.results.length === 0) return null;

    const result = response.results[0];
    const props = (result as Record<string, unknown>).properties as Record<
      string,
      PropertyValue
    >;

    const page: NotionPage = {
      id: (result as { id: string }).id,
      slug: getRichText(props.Slug),
      title: getTitle(props.Title),
      description: getRichText(props.Description),
      template: (getSelect(props.Template) || "landing") as PageTemplate,
      heroTitle: getRichText(props.HeroTitle),
      heroBadge: getRichText(props.HeroBadge),
      heroDescription: getRichText(props.HeroDescription),
      ogImage: getFileUrl(props.OGImage),
      status: getSelect(props.Status) as NotionPage["status"],
      order: getNumber(props.Order),
      lastEdited: (result as { last_edited_time?: string }).last_edited_time ?? "",
    };

    const blocks = await getBlocks(page.id);
    return { page, blocks };
  } catch (error) {
    console.error(`[Notion] Failed to fetch page slug=${slug}:`, error);
    return null;
  }
}

// ---------------------------------------------------------------------------
// Blog database
// ---------------------------------------------------------------------------

export async function getBlogPosts(): Promise<NotionBlogPost[]> {
  if (!isConfigured() || !env.NOTION_BLOG_DB_ID) {
    return fallbackBlogPosts.map((p) => ({
      id: p.slug,
      slug: p.slug,
      title: p.title,
      excerpt: p.excerpt,
      category: p.category,
      readTime: p.readTime,
      publishedAt: p.publishedAt,
      featured: false,
      status: "Published" as const,
      ogImage: "",
    }));
  }

  try {
    const response = await notion.databases.query({
      database_id: env.NOTION_BLOG_DB_ID,
      filter: {
        property: "Status",
        select: { equals: "Published" },
      },
      sorts: [{ property: "Published At", direction: "descending" }],
    });

    return response.results.map((page) => {
      const props = (page as Record<string, unknown>).properties as Record<
        string,
        PropertyValue
      >;
      return {
        id: (page as { id: string }).id,
        slug: getRichText(props.Slug),
        title: getTitle(props.Title),
        excerpt: getRichText(props.Excerpt),
        category: (getSelect(props.Category) || "Guide") as NotionBlogPost["category"],
        readTime: getRichText(props["Read Time"]),
        publishedAt: getDate(props["Published At"]),
        featured: getCheckbox(props.Featured),
        status: getSelect(props.Status) as NotionBlogPost["status"],
        ogImage: getFileUrl(props.OGImage),
      };
    });
  } catch (error) {
    console.error("[Notion] Failed to fetch blog posts:", error);
    return fallbackBlogPosts.map((p) => ({
      id: p.slug,
      slug: p.slug,
      title: p.title,
      excerpt: p.excerpt,
      category: p.category,
      readTime: p.readTime,
      publishedAt: p.publishedAt,
      featured: false,
      status: "Published" as const,
      ogImage: "",
    }));
  }
}

export async function getBlogPost(
  slug: string
): Promise<{ post: NotionBlogPost; blocks: NotionBlock[] } | null> {
  if (!isConfigured() || !env.NOTION_BLOG_DB_ID) {
    const fallback = fallbackBlogPosts.find((p) => p.slug === slug);
    if (!fallback) return null;
    return {
      post: {
        id: fallback.slug,
        slug: fallback.slug,
        title: fallback.title,
        excerpt: fallback.excerpt,
        category: fallback.category,
        readTime: fallback.readTime,
        publishedAt: fallback.publishedAt,
        featured: false,
        status: "Published",
        ogImage: "",
      },
      blocks: [],
    };
  }

  try {
    const response = await notion.databases.query({
      database_id: env.NOTION_BLOG_DB_ID,
      filter: {
        and: [
          { property: "Slug", rich_text: { equals: slug } },
          { property: "Status", select: { equals: "Published" } },
        ],
      },
      page_size: 1,
    });

    if (response.results.length === 0) return null;

    const result = response.results[0];
    const props = (result as Record<string, unknown>).properties as Record<
      string,
      PropertyValue
    >;

    const post: NotionBlogPost = {
      id: (result as { id: string }).id,
      slug: getRichText(props.Slug),
      title: getTitle(props.Title),
      excerpt: getRichText(props.Excerpt),
      category: (getSelect(props.Category) || "Guide") as NotionBlogPost["category"],
      readTime: getRichText(props["Read Time"]),
      publishedAt: getDate(props["Published At"]),
      featured: getCheckbox(props.Featured),
      status: getSelect(props.Status) as NotionBlogPost["status"],
      ogImage: getFileUrl(props.OGImage),
    };

    const blocks = await getBlocks(post.id);
    return { post, blocks };
  } catch (error) {
    console.error(`[Notion] Failed to fetch blog post slug=${slug}:`, error);
    return null;
  }
}

// ---------------------------------------------------------------------------
// Services database
// ---------------------------------------------------------------------------

export async function getServices(): Promise<NotionService[]> {
  if (!isConfigured() || !env.NOTION_SERVICES_DB_ID) return fallbackServices;

  try {
    const response = await notion.databases.query({
      database_id: env.NOTION_SERVICES_DB_ID,
      sorts: [{ property: "Order", direction: "ascending" }],
    });

    return response.results.map((page) => {
      const props = (page as Record<string, unknown>).properties as Record<
        string,
        PropertyValue
      >;
      return {
        id: (page as { id: string }).id,
        title: getTitle(props.Title),
        slug: getRichText(props.Slug),
        tagline: getRichText(props.Tagline),
        description: getRichText(props.Description),
        icon: getSelect(props.Icon),
        features: getRichText(props.Features)
          .split(",")
          .map((f) => f.trim())
          .filter(Boolean),
        order: getNumber(props.Order),
      };
    });
  } catch (error) {
    console.error("[Notion] Failed to fetch services:", error);
    return fallbackServices;
  }
}

// ---------------------------------------------------------------------------
// Industries database
// ---------------------------------------------------------------------------

export async function getIndustries(): Promise<NotionIndustry[]> {
  if (!isConfigured() || !env.NOTION_INDUSTRIES_DB_ID) return fallbackIndustries;

  try {
    const response = await notion.databases.query({
      database_id: env.NOTION_INDUSTRIES_DB_ID,
      sorts: [{ property: "Order", direction: "ascending" }],
    });

    return response.results.map((page) => {
      const props = (page as Record<string, unknown>).properties as Record<
        string,
        PropertyValue
      >;
      return {
        id: (page as { id: string }).id,
        title: getTitle(props.Title),
        slug: getRichText(props.Slug),
        description: getRichText(props.Description),
        icon: getSelect(props.Icon),
        challenges: getRichText(props.Challenges)
          .split(",")
          .map((c) => c.trim())
          .filter(Boolean),
        solutions: getRichText(props.Solutions)
          .split(",")
          .map((s) => s.trim())
          .filter(Boolean),
        order: getNumber(props.Order),
      };
    });
  } catch (error) {
    console.error("[Notion] Failed to fetch industries:", error);
    return fallbackIndustries;
  }
}

// ---------------------------------------------------------------------------
// Testimonials database
// ---------------------------------------------------------------------------

export async function getTestimonials(): Promise<NotionTestimonial[]> {
  if (!isConfigured() || !env.NOTION_TESTIMONIALS_DB_ID)
    return fallbackTestimonials;

  try {
    const response = await notion.databases.query({
      database_id: env.NOTION_TESTIMONIALS_DB_ID,
    });

    return response.results.map((page) => {
      const props = (page as Record<string, unknown>).properties as Record<
        string,
        PropertyValue
      >;
      return {
        id: (page as { id: string }).id,
        quote: getTitle(props.Quote),
        authorName: getRichText(props["Author Name"]),
        authorTitle: getRichText(props["Author Title"]),
        company: getRichText(props.Company),
        featured: getCheckbox(props.Featured),
      };
    });
  } catch (error) {
    console.error("[Notion] Failed to fetch testimonials:", error);
    return fallbackTestimonials;
  }
}

// ---------------------------------------------------------------------------
// Team Members database
// ---------------------------------------------------------------------------

export async function getTeamMembers(): Promise<NotionTeamMember[]> {
  if (!isConfigured() || !env.NOTION_TEAM_DB_ID) return fallbackTeamMembers;

  try {
    const response = await notion.databases.query({
      database_id: env.NOTION_TEAM_DB_ID,
      sorts: [{ property: "Order", direction: "ascending" }],
    });

    return response.results.map((page) => {
      const props = (page as Record<string, unknown>).properties as Record<
        string,
        PropertyValue
      >;
      return {
        id: (page as { id: string }).id,
        name: getTitle(props.Name),
        role: getRichText(props.Role),
        bio: getRichText(props.Bio),
        photo: getFileUrl(props.Photo),
        order: getNumber(props.Order),
      };
    });
  } catch (error) {
    console.error("[Notion] Failed to fetch team members:", error);
    return fallbackTeamMembers;
  }
}

// ---------------------------------------------------------------------------
// Locations database
// ---------------------------------------------------------------------------

export async function getLocations(): Promise<NotionLocation[]> {
  if (!isConfigured() || !env.NOTION_LOCATIONS_DB_ID) return fallbackLocations;

  try {
    const response = await notion.databases.query({
      database_id: env.NOTION_LOCATIONS_DB_ID,
    });

    return response.results.map((page) => {
      const props = (page as Record<string, unknown>).properties as Record<
        string,
        PropertyValue
      >;
      return {
        id: (page as { id: string }).id,
        name: getTitle(props.Name),
        address: getRichText(props.Address),
        phone: getRichText(props.Phone),
        type: (getSelect(props.Type) || "Operations") as NotionLocation["type"],
      };
    });
  } catch (error) {
    console.error("[Notion] Failed to fetch locations:", error);
    return fallbackLocations;
  }
}

// ---------------------------------------------------------------------------
// Site Settings (key-value)
// ---------------------------------------------------------------------------

export async function getSiteSettings(): Promise<SiteSettings> {
  if (!isConfigured() || !env.NOTION_SETTINGS_DB_ID) {
    return {
      companyName: fallbackSiteConfig.name,
      description: fallbackSiteConfig.description,
      phone: fallbackSiteConfig.phone,
      customerServicePhone: fallbackSiteConfig.customerServicePhone,
      paymentPhone: fallbackSiteConfig.paymentPhone,
      email: fallbackSiteConfig.email,
      privacyEmail: fallbackSiteConfig.privacyEmail,
      headquarters: fallbackSiteConfig.headquarters,
      url: fallbackSiteConfig.url,
    };
  }

  try {
    const response = await notion.databases.query({
      database_id: env.NOTION_SETTINGS_DB_ID,
    });

    const settings: Record<string, string> = {};
    for (const page of response.results) {
      const props = (page as Record<string, unknown>).properties as Record<
        string,
        PropertyValue
      >;
      const key = getTitle(props.Key);
      const value = getRichText(props.Value);
      if (key) settings[key] = value;
    }

    return {
      companyName: settings.company_name || fallbackSiteConfig.name,
      description: settings.description || fallbackSiteConfig.description,
      phone: settings.phone || fallbackSiteConfig.phone,
      customerServicePhone:
        settings.customer_service_phone ||
        fallbackSiteConfig.customerServicePhone,
      paymentPhone: settings.payment_phone || fallbackSiteConfig.paymentPhone,
      email: settings.email || fallbackSiteConfig.email,
      privacyEmail: settings.privacy_email || fallbackSiteConfig.privacyEmail,
      headquarters: settings.headquarters || fallbackSiteConfig.headquarters,
      url: settings.url || fallbackSiteConfig.url,
    };
  } catch (error) {
    console.error("[Notion] Failed to fetch site settings:", error);
    return {
      companyName: fallbackSiteConfig.name,
      description: fallbackSiteConfig.description,
      phone: fallbackSiteConfig.phone,
      customerServicePhone: fallbackSiteConfig.customerServicePhone,
      paymentPhone: fallbackSiteConfig.paymentPhone,
      email: fallbackSiteConfig.email,
      privacyEmail: fallbackSiteConfig.privacyEmail,
      headquarters: fallbackSiteConfig.headquarters,
      url: fallbackSiteConfig.url,
    };
  }
}

// ---------------------------------------------------------------------------
// Block fetching (recursive)
// ---------------------------------------------------------------------------

export async function getBlocks(pageId: string): Promise<NotionBlock[]> {
  if (!isConfigured()) return [];

  try {
    const blocks: NotionBlock[] = [];
    let cursor: string | undefined;

    do {
      const response = await notion.blocks.children.list({
        block_id: pageId,
        start_cursor: cursor,
        page_size: 100,
      });

      for (const block of response.results) {
        const b = block as unknown as NotionBlock;
        if (b.has_children) {
          b.children = await getBlocks(b.id);
        }
        blocks.push(b);
      }

      cursor = response.has_more ? response.next_cursor ?? undefined : undefined;
    } while (cursor);

    return blocks;
  } catch (error) {
    console.error(`[Notion] Failed to fetch blocks for ${pageId}:`, error);
    return [];
  }
}

// ---------------------------------------------------------------------------
// Fallback data – used when Notion is not configured or API fails
// ---------------------------------------------------------------------------

const fallbackServices: NotionService[] = [
  {
    id: "debt-recovery",
    title: "Debt Recovery",
    slug: "debt-recovery",
    tagline: "First- & Third-Party Collections",
    description:
      "Compliant, results-driven collections that maximize recovery while preserving client relationships and brand reputation.",
    icon: "Shield",
    features: [
      "First-party collections",
      "Third-party contingency",
      "Pre-charge-off intervention",
      "Legal referral",
      "Skip tracing",
      "Dispute resolution",
    ],
    order: 1,
  },
  {
    id: "revenue-cycle",
    title: "Revenue Cycle Management",
    slug: "revenue-cycle-management",
    tagline: "End-to-End RCM Solutions",
    description:
      "End-to-end RCM solutions that accelerate cash flow and reduce days sales outstanding across your entire portfolio.",
    icon: "TrendingUp",
    features: [
      "Eligibility verification",
      "Claims submission",
      "Denial management",
      "Patient portals",
      "Coding audit",
      "Reporting",
    ],
    order: 2,
  },
  {
    id: "accounts-receivable",
    title: "Accounts Receivable Management",
    slug: "accounts-receivable-management",
    tagline: "Proactive AR Outsourcing",
    description:
      "Proactive AR management services that reduce write-offs and keep your receivables healthy from day one.",
    icon: "Users",
    features: [
      "Outsourced billing",
      "Aging reports",
      "Payment plans",
      "Dispute handling",
      "Cash application",
      "Dashboards",
    ],
    order: 3,
  },
  {
    id: "consulting",
    title: "Consulting",
    slug: "consulting",
    tagline: "Strategic Advisory Services",
    description:
      "Strategic consulting to optimize your credit, collections, and compliance policies for long-term profitability.",
    icon: "BookOpen",
    features: [
      "FDCPA/HIPAA audits",
      "Credit policy",
      "Process redesign",
      "Technology selection",
      "Training",
      "Vendor review",
    ],
    order: 4,
  },
  {
    id: "bpo",
    title: "Business Process Outsourcing",
    slug: "business-process-outsourcing",
    tagline: "Full-Service Back Office Support",
    description:
      "Comprehensive back-office BPO services including call center, document processing, and compliance monitoring.",
    icon: "Cpu",
    features: [
      "Call center",
      "Document processing",
      "Data entry",
      "Compliance monitoring",
      "Reporting",
      "Automation",
    ],
    order: 5,
  },
];

const fallbackIndustries: NotionIndustry[] = [
  {
    id: "commercial",
    title: "Commercial",
    slug: "commercial",
    description: "B2B recovery with relationship-sensitive approach.",
    icon: "Building2",
    challenges: [
      "Complex payment terms",
      "Multi-stakeholder decisions",
      "Relationship preservation",
    ],
    solutions: [
      "Dedicated account teams",
      "Escalation protocols",
      "Performance dashboards",
    ],
    order: 1,
  },
  {
    id: "healthcare",
    title: "Healthcare",
    slug: "healthcare",
    description: "HIPAA-certified, patient-first recovery approach.",
    icon: "HeartPulse",
    challenges: [
      "HIPAA compliance",
      "Patient experience",
      "Complex billing cycles",
    ],
    solutions: [
      "Certified compliance teams",
      "Patient-friendly communication",
      "RCM integration",
    ],
    order: 2,
  },
  {
    id: "government",
    title: "Government",
    slug: "government",
    description: "Audit-ready recovery with Debt Set-Aside programs.",
    icon: "Landmark",
    challenges: [
      "Audit requirements",
      "Public accountability",
      "Regulatory complexity",
    ],
    solutions: [
      "Audit-ready reporting",
      "Debt Set-Aside programs",
      "Full regulatory compliance",
    ],
    order: 3,
  },
  {
    id: "utilities",
    title: "Utilities",
    slug: "utilities",
    description: "High-volume recovery with hardship programs.",
    icon: "Zap",
    challenges: [
      "High account volumes",
      "Regulatory oversight",
      "Customer hardship",
    ],
    solutions: [
      "Automated workflows",
      "Hardship programs",
      "Scalable operations",
    ],
    order: 4,
  },
  {
    id: "insurance",
    title: "Insurance",
    slug: "insurance",
    description: "Subrogation recovery and premium arrears collection.",
    icon: "Shield",
    challenges: [
      "Subrogation complexity",
      "Premium arrears",
      "Claim disputes",
    ],
    solutions: [
      "Subrogation specialists",
      "Premium recovery programs",
      "Dispute resolution",
    ],
    order: 5,
  },
  {
    id: "property-management",
    title: "Property Management",
    slug: "property-management",
    description: "Unpaid rent, security deposits, and HOA assessments.",
    icon: "Home",
    challenges: [
      "Tenant turnover",
      "Security deposit disputes",
      "HOA delinquency",
    ],
    solutions: [
      "Tenant-sensitive communication",
      "Legal escalation",
      "HOA collection programs",
    ],
    order: 6,
  },
  {
    id: "auto-finance",
    title: "Auto Finance",
    slug: "auto-finance",
    description: "Deficiency recovery and repossession follow-up.",
    icon: "Car",
    challenges: [
      "Deficiency balances",
      "Repossession coordination",
      "Title management",
    ],
    solutions: [
      "Deficiency recovery programs",
      "Repossession follow-up",
      "Skip tracing",
    ],
    order: 7,
  },
];

const fallbackTestimonials: NotionTestimonial[] = [
  {
    id: "testimonial-1",
    quote:
      "Southwest Recovery Services' team recovered 91% of our aged receivables in just 6 months - results we never thought possible. Their compliance-first approach gave us complete confidence.",
    authorName: "Sarah Mitchell",
    authorTitle: "CFO",
    company: "Regional Medical Center",
    featured: true,
  },
  {
    id: "testimonial-2",
    quote:
      "Their dedicated account team understands our industry inside and out. We've seen a 40% improvement in our recovery rates since partnering with SWRS.",
    authorName: "David Chen",
    authorTitle: "VP of Finance",
    company: "Metro Utilities Corp",
    featured: true,
  },
  {
    id: "testimonial-3",
    quote:
      "The compliance standards and transparency SWRS provides are unmatched. Our board has complete visibility into every aspect of the recovery process.",
    authorName: "Jennifer Adams",
    authorTitle: "Director of Revenue",
    company: "State Government Agency",
    featured: false,
  },
];

const fallbackTeamMembers: NotionTeamMember[] = [
  {
    id: "team-1",
    name: "James Thornton",
    role: "Chief Executive Officer",
    bio: "25+ years in financial services and debt recovery. Former VP at major national credit bureau.",
    photo: "",
    order: 1,
  },
  {
    id: "team-2",
    name: "Dr. Lisa Park",
    role: "Chief Compliance Officer",
    bio: "Former regulatory attorney specializing in FDCPA, HIPAA, and state collection law.",
    photo: "",
    order: 2,
  },
  {
    id: "team-3",
    name: "Marcus Williams",
    role: "VP of Operations",
    bio: "Expert in BPO, process optimization, and multi-channel collections technology.",
    photo: "",
    order: 3,
  },
  {
    id: "team-4",
    name: "Sarah Chen",
    role: "VP of Healthcare Services",
    bio: "15 years in healthcare revenue cycle management with a focus on patient-centered collections.",
    photo: "",
    order: 4,
  },
];

const fallbackLocations: NotionLocation[] = [
  {
    id: "loc-1",
    name: "Addison, TX (Corporate Office)",
    address: "16200 Addison Road, Suite 260, Addison, TX 75001",
    phone: "+1 (866) 551-4684",
    type: "HQ",
  },
  {
    id: "loc-2",
    name: "Phoenix, AZ",
    address: "Regional Operations Center, Phoenix Metro Area",
    phone: "",
    type: "Operations",
  },
  {
    id: "loc-3",
    name: "Houston, TX",
    address: "Regional Operations Center, Houston Metro Area",
    phone: "",
    type: "Operations",
  },
];
