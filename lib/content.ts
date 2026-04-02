export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: "Guide" | "Industry" | "Compliance" | "Local";
  readTime: string;
  publishedAt: string;
};

// Seeded from the live SW Recovery sitemap to prioritize migration work.
export const blogPosts: BlogPost[] = [
  {
    slug: "promise-to-pay-in-debt-collection-definition-examples-law",
    title: "Promise to Pay in Debt Collection: Definition, Examples & Law",
    excerpt:
      "What a promise to pay means, how collectors document it, and the legal guardrails organizations should follow.",
    category: "Guide",
    readTime: "8 min read",
    publishedAt: "2026-03-18",
  },
  {
    slug: "b2b-debt-recovery-commercial-collection-agency-services-announced",
    title: "B2B Debt Recovery: Commercial Collection Agency Services Announced Nationwide",
    excerpt:
      "An overview of commercial collection services, escalation timelines, and expectations for B2B recovery outcomes.",
    category: "Industry",
    readTime: "6 min read",
    publishedAt: "2026-03-12",
  },
  {
    slug: "debt-collection-agency-in-tampa-fl-reviews-cost-top-companies",
    title: "Debt Collection Agency in Tampa, FL: Reviews, Cost & Top Companies",
    excerpt:
      "A city-focused evaluation framework for selecting compliant recovery partners in Tampa.",
    category: "Local",
    readTime: "7 min read",
    publishedAt: "2026-03-09",
  },
  {
    slug: "how-long-before-an-invoice-becomes-invalid",
    title: "How Long Is It Before An Invoice Becomes Invalid? Timeline & Chase Options",
    excerpt:
      "Statute, contract, and workflow realities that determine when invoices become harder to enforce.",
    category: "Guide",
    readTime: "9 min read",
    publishedAt: "2026-03-03",
  },
  {
    slug: "best-collection-agencies-for-waste-management-companies",
    title: "3 Best Collection Agencies for Waste Management Companies: Cost & Reviews",
    excerpt:
      "How waste management operators can evaluate specialty collections partners and fee models.",
    category: "Industry",
    readTime: "6 min read",
    publishedAt: "2026-02-27",
  },
  {
    slug: "chargeback-debt-collection-small-business-recovery",
    title: "Chargeback Debt Collection: Can Small Businesses Recover Lost Revenue?",
    excerpt:
      "Practical tactics SMBs can use to reduce chargeback losses and recover eligible balances.",
    category: "Guide",
    readTime: "7 min read",
    publishedAt: "2026-02-20",
  },
  {
    slug: "when-can-you-send-an-invoice-to-collections",
    title: "When Can You Send an Invoice to Collections? Laws & Examples",
    excerpt:
      "Decision checkpoints and legal considerations before placing a delinquent account with a collector.",
    category: "Compliance",
    readTime: "8 min read",
    publishedAt: "2026-02-16",
  },
  {
    slug: "minimum-amount-for-debt-collection",
    title: "What Is the Minimum Amount for Debt Collection? The Cost Math SMBs Need to Know",
    excerpt:
      "A break-even lens for deciding when small balances are worth external recovery.",
    category: "Guide",
    readTime: "5 min read",
    publishedAt: "2026-02-10",
  },
  {
    slug: "trucking-debt-collection-hiring-pro-collectors",
    title: "Trucking Debt Collection: When To Hire Pro Collectors For Invoice Recovery",
    excerpt:
      "Signals freight operators should watch before moving unpaid invoices to third-party collections.",
    category: "Industry",
    readTime: "7 min read",
    publishedAt: "2026-02-05",
  },
  {
    slug: "cfpb-rules-for-debt-collectors-2026-outlook-updates",
    title: "CFPB Rules for Debt Collectors: 2026 Outlook & Updates",
    excerpt:
      "Key regulatory themes and operational implications debt collection teams should monitor in 2026.",
    category: "Compliance",
    readTime: "10 min read",
    publishedAt: "2026-01-28",
  },
  {
    slug: "soft-vs-hard-collections-explained",
    title: "Soft vs Hard Collections Explained: Methods & Examples",
    excerpt:
      "Understand early-stage and late-stage collection workflows, including channel and tone differences.",
    category: "Guide",
    readTime: "6 min read",
    publishedAt: "2026-01-21",
  },
  {
    slug: "average-collection-agency-fees-2026",
    title: "Average Collection Agency Fees: 2026 Costs & Commission Rates Explained",
    excerpt:
      "Current fee structures, contingency ranges, and contract terms to benchmark agency proposals.",
    category: "Guide",
    readTime: "8 min read",
    publishedAt: "2026-01-15",
  },
];

export const migrationPages = [
  { title: "SMS Terms and Conditions Policy", href: "/sms-terms-and-conditions-policy" },
  { title: "SMS Privacy Policy", href: "/sms-privacy-policy" },
  { title: "Testimonials", href: "/testimonials" },
  { title: "Employment", href: "/employment" },
  { title: "Sitemap", href: "/sitemap" },
];
