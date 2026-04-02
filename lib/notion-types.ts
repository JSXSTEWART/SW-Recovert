// ---------------------------------------------------------------------------
// Notion CMS – Application-level types
// These types represent the mapped/cleaned data from Notion databases.
// ---------------------------------------------------------------------------

/** Template types available for the Pages database */
export type PageTemplate =
  | "landing"
  | "service"
  | "industry"
  | "blog"
  | "legal"
  | "support"
  | "careers"
  | "contact";

/** A page entry from the Notion Pages database */
export type NotionPage = {
  id: string;
  slug: string;
  title: string;
  description: string;
  template: PageTemplate;
  heroTitle: string;
  heroBadge: string;
  heroDescription: string;
  ogImage: string;
  status: "Draft" | "Published" | "Archived";
  order: number;
  lastEdited: string;
};

/** Blog post from the Blog database */
export type NotionBlogPost = {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: "Guide" | "Industry" | "Compliance" | "Local";
  readTime: string;
  publishedAt: string;
  featured: boolean;
  status: "Draft" | "Published" | "Archived";
  ogImage: string;
};

/** Service entry from the Services database */
export type NotionService = {
  id: string;
  title: string;
  slug: string;
  tagline: string;
  description: string;
  icon: string;
  features: string[];
  order: number;
};

/** Industry vertical from the Industries database */
export type NotionIndustry = {
  id: string;
  title: string;
  slug: string;
  description: string;
  icon: string;
  challenges: string[];
  solutions: string[];
  order: number;
};

/** Client testimonial */
export type NotionTestimonial = {
  id: string;
  quote: string;
  authorName: string;
  authorTitle: string;
  company: string;
  featured: boolean;
};

/** Team member */
export type NotionTeamMember = {
  id: string;
  name: string;
  role: string;
  bio: string;
  photo: string;
  order: number;
};

/** Office location */
export type NotionLocation = {
  id: string;
  name: string;
  address: string;
  phone: string;
  type: "HQ" | "Operations";
};

/** Site-wide settings (key-value from Settings DB) */
export type SiteSettings = {
  companyName: string;
  description: string;
  phone: string;
  customerServicePhone: string;
  paymentPhone: string;
  email: string;
  privacyEmail: string;
  headquarters: string;
  url: string;
};

// ---------------------------------------------------------------------------
// Notion Block rendering types
// ---------------------------------------------------------------------------

export type NotionRichText = {
  plain_text: string;
  href: string | null;
  annotations: {
    bold: boolean;
    italic: boolean;
    strikethrough: boolean;
    underline: boolean;
    code: boolean;
    color: string;
  };
};

export type NotionBlock = {
  id: string;
  type: string;
  has_children: boolean;
  children?: NotionBlock[];
  [key: string]: unknown;
};
