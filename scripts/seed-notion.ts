/**
 * Notion CMS Seeder — Populates all 7 databases with existing hardcoded content.
 *
 * Usage:
 *   NOTION_API_KEY=secret_xxx npx tsx scripts/seed-notion.ts
 *
 * This script is idempotent-ish: it creates new pages each run.
 * Run it once after setting up the databases.
 */

import { Client } from "@notionhq/client";

const notion = new Client({ auth: process.env.NOTION_API_KEY });

const DB = {
  blog: "de337ab0-6907-43f7-aa20-189e7030a1dd",
  services: "0a72865d-bd81-4495-b9d9-fbdc4550fab1",
  industries: "929c793c-dc70-4496-8ab8-161f0920960d",
  team: "cb617f3a-cc8b-45ef-896e-908b4fa0dd7c",
  testimonials: "f789c67a-1f98-4bfd-8ae8-edab8282ba0e",
  locations: "5d3d1955-bb33-4fda-a369-0c87a09551bf",
  settings: "28dc5975-caaf-4201-9059-31dda417e9dd",
} as const;

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function title(text: string) {
  return { title: [{ text: { content: text } }] };
}

function richText(text: string) {
  return { rich_text: [{ text: { content: text } }] };
}

function select(name: string) {
  return { select: { name } };
}

function num(value: number) {
  return { number: value };
}

function checkbox(value: boolean) {
  return { checkbox: value };
}

function date(iso: string) {
  return { date: { start: iso } };
}

async function createPage(database_id: string, properties: Record<string, unknown>) {
  try {
    const page = await notion.pages.create({
      parent: { database_id },
      properties: properties as Parameters<typeof notion.pages.create>[0]["properties"],
    });
    return page;
  } catch (err) {
    console.error(`  Failed:`, (err as Error).message);
    return null;
  }
}

// ---------------------------------------------------------------------------
// Blog Posts
// ---------------------------------------------------------------------------

const blogPosts = [
  { slug: "promise-to-pay-in-debt-collection-definition-examples-law", title: "Promise to Pay in Debt Collection: Definition, Examples & Law", excerpt: "What a promise to pay means, how collectors document it, and the legal guardrails organizations should follow.", category: "Guide", readTime: "8 min read", publishedAt: "2026-03-18" },
  { slug: "b2b-debt-recovery-commercial-collection-agency-services-announced", title: "B2B Debt Recovery: Commercial Collection Agency Services Announced Nationwide", excerpt: "An overview of commercial collection services, escalation timelines, and expectations for B2B recovery outcomes.", category: "Industry", readTime: "6 min read", publishedAt: "2026-03-12" },
  { slug: "debt-collection-agency-in-tampa-fl-reviews-cost-top-companies", title: "Debt Collection Agency in Tampa, FL: Reviews, Cost & Top Companies", excerpt: "A city-focused evaluation framework for selecting compliant recovery partners in Tampa.", category: "Local", readTime: "7 min read", publishedAt: "2026-03-09" },
  { slug: "how-long-before-an-invoice-becomes-invalid", title: "How Long Is It Before An Invoice Becomes Invalid? Timeline & Chase Options", excerpt: "Statute, contract, and workflow realities that determine when invoices become harder to enforce.", category: "Guide", readTime: "9 min read", publishedAt: "2026-03-03" },
  { slug: "best-collection-agencies-for-waste-management-companies", title: "3 Best Collection Agencies for Waste Management Companies: Cost & Reviews", excerpt: "How waste management operators can evaluate specialty collections partners and fee models.", category: "Industry", readTime: "6 min read", publishedAt: "2026-02-27" },
  { slug: "chargeback-debt-collection-small-business-recovery", title: "Chargeback Debt Collection: Can Small Businesses Recover Lost Revenue?", excerpt: "Practical tactics SMBs can use to reduce chargeback losses and recover eligible balances.", category: "Guide", readTime: "7 min read", publishedAt: "2026-02-20" },
  { slug: "when-can-you-send-an-invoice-to-collections", title: "When Can You Send an Invoice to Collections? Laws & Examples", excerpt: "Decision checkpoints and legal considerations before placing a delinquent account with a collector.", category: "Compliance", readTime: "8 min read", publishedAt: "2026-02-16" },
  { slug: "minimum-amount-for-debt-collection", title: "What Is the Minimum Amount for Debt Collection? The Cost Math SMBs Need to Know", excerpt: "A break-even lens for deciding when small balances are worth external recovery.", category: "Guide", readTime: "5 min read", publishedAt: "2026-02-10" },
  { slug: "trucking-debt-collection-hiring-pro-collectors", title: "Trucking Debt Collection: When To Hire Pro Collectors For Invoice Recovery", excerpt: "Signals freight operators should watch before moving unpaid invoices to third-party collections.", category: "Industry", readTime: "7 min read", publishedAt: "2026-02-05" },
  { slug: "cfpb-rules-for-debt-collectors-2026-outlook-updates", title: "CFPB Rules for Debt Collectors: 2026 Outlook & Updates", excerpt: "Key regulatory themes and operational implications debt collection teams should monitor in 2026.", category: "Compliance", readTime: "10 min read", publishedAt: "2026-01-28" },
  { slug: "soft-vs-hard-collections-explained", title: "Soft vs Hard Collections Explained: Methods & Examples", excerpt: "Understand early-stage and late-stage collection workflows, including channel and tone differences.", category: "Guide", readTime: "6 min read", publishedAt: "2026-01-21" },
  { slug: "average-collection-agency-fees-2026", title: "Average Collection Agency Fees: 2026 Costs & Commission Rates Explained", excerpt: "Current fee structures, contingency ranges, and contract terms to benchmark agency proposals.", category: "Guide", readTime: "8 min read", publishedAt: "2026-01-15" },
];

async function seedBlogPosts() {
  console.log("\n📝 Seeding Blog Posts...");
  for (const post of blogPosts) {
    process.stdout.write(`  → ${post.slug}... `);
    const result = await createPage(DB.blog, {
      Title: title(post.title),
      Slug: richText(post.slug),
      Excerpt: richText(post.excerpt),
      Category: select(post.category),
      "Read Time": richText(post.readTime),
      "Published At": date(post.publishedAt),
      Status: select("Published"),
      Featured: checkbox(false),
    });
    console.log(result ? "✓" : "✗");
  }
}

// ---------------------------------------------------------------------------
// Services
// ---------------------------------------------------------------------------

const services = [
  { title: "Debt Recovery", slug: "debt-recovery", tagline: "First- & Third-Party Collections", description: "Compliant, results-driven collections that maximize recovery while preserving client relationships and brand reputation.", icon: "Shield", features: "First-party collections,Third-party contingency,Pre-charge-off intervention,Legal referral,Skip tracing,Dispute resolution", order: 1 },
  { title: "Revenue Cycle Management", slug: "revenue-cycle-management", tagline: "End-to-End RCM Solutions", description: "End-to-end RCM solutions that accelerate cash flow and reduce days sales outstanding across your entire portfolio.", icon: "TrendingUp", features: "Eligibility verification,Claims submission,Denial management,Patient portals,Coding audit,Reporting", order: 2 },
  { title: "Accounts Receivable Management", slug: "accounts-receivable-management", tagline: "Proactive AR Outsourcing", description: "Proactive AR management services that reduce write-offs and keep your receivables healthy from day one.", icon: "Users", features: "Outsourced billing,Aging reports,Payment plans,Dispute handling,Cash application,Dashboards", order: 3 },
  { title: "Consulting", slug: "consulting", tagline: "Strategic Advisory Services", description: "Strategic consulting to optimize your credit, collections, and compliance policies for long-term profitability.", icon: "BookOpen", features: "FDCPA/HIPAA audits,Credit policy,Process redesign,Technology selection,Training,Vendor review", order: 4 },
  { title: "Business Process Outsourcing", slug: "business-process-outsourcing", tagline: "Full-Service Back Office Support", description: "Comprehensive back-office BPO services including call center, document processing, and compliance monitoring.", icon: "Cpu", features: "Call center,Document processing,Data entry,Compliance monitoring,Reporting,Automation", order: 5 },
];

async function seedServices() {
  console.log("\n🛠️  Seeding Services...");
  for (const svc of services) {
    process.stdout.write(`  → ${svc.title}... `);
    const result = await createPage(DB.services, {
      Title: title(svc.title),
      Slug: richText(svc.slug),
      Tagline: richText(svc.tagline),
      Description: richText(svc.description),
      Icon: select(svc.icon),
      Features: richText(svc.features),
      Order: num(svc.order),
    });
    console.log(result ? "✓" : "✗");
  }
}

// ---------------------------------------------------------------------------
// Industries
// ---------------------------------------------------------------------------

const industries = [
  { title: "Commercial", slug: "commercial", description: "B2B recovery with relationship-sensitive approach.", icon: "Building2", challenges: "Complex payment terms,Multi-stakeholder decisions,Relationship preservation", solutions: "Dedicated account teams,Escalation protocols,Performance dashboards", order: 1 },
  { title: "Healthcare", slug: "healthcare", description: "HIPAA-certified, patient-first recovery approach.", icon: "HeartPulse", challenges: "HIPAA compliance,Patient experience,Complex billing cycles", solutions: "Certified compliance teams,Patient-friendly communication,RCM integration", order: 2 },
  { title: "Government", slug: "government", description: "Audit-ready recovery with Debt Set-Aside programs.", icon: "Landmark", challenges: "Audit requirements,Public accountability,Regulatory complexity", solutions: "Audit-ready reporting,Debt Set-Aside programs,Full regulatory compliance", order: 3 },
  { title: "Utilities", slug: "utilities", description: "High-volume recovery with hardship programs.", icon: "Zap", challenges: "High account volumes,Regulatory oversight,Customer hardship", solutions: "Automated workflows,Hardship programs,Scalable operations", order: 4 },
  { title: "Insurance", slug: "insurance", description: "Subrogation recovery and premium arrears collection.", icon: "Shield", challenges: "Subrogation complexity,Premium arrears,Claim disputes", solutions: "Subrogation specialists,Premium recovery programs,Dispute resolution", order: 5 },
  { title: "Property Management", slug: "property-management", description: "Unpaid rent, security deposits, and HOA assessments.", icon: "Home", challenges: "Tenant turnover,Security deposit disputes,HOA delinquency", solutions: "Tenant-sensitive communication,Legal escalation,HOA collection programs", order: 6 },
  { title: "Auto Finance", slug: "auto-finance", description: "Deficiency recovery and repossession follow-up.", icon: "Car", challenges: "Deficiency balances,Repossession coordination,Title management", solutions: "Deficiency recovery programs,Repossession follow-up,Skip tracing", order: 7 },
];

async function seedIndustries() {
  console.log("\n🏭 Seeding Industries...");
  for (const ind of industries) {
    process.stdout.write(`  → ${ind.title}... `);
    const result = await createPage(DB.industries, {
      Title: title(ind.title),
      Slug: richText(ind.slug),
      Description: richText(ind.description),
      Icon: select(ind.icon),
      Challenges: richText(ind.challenges),
      Solutions: richText(ind.solutions),
      Order: num(ind.order),
    });
    console.log(result ? "✓" : "✗");
  }
}

// ---------------------------------------------------------------------------
// Team Members
// ---------------------------------------------------------------------------

const teamMembers = [
  { name: "James Thornton", role: "Chief Executive Officer", bio: "25+ years in financial services and debt recovery. Former VP at major national credit bureau.", order: 1 },
  { name: "Dr. Lisa Park", role: "Chief Compliance Officer", bio: "Former regulatory attorney specializing in FDCPA, HIPAA, and state collection law.", order: 2 },
  { name: "Marcus Williams", role: "VP of Operations", bio: "Expert in BPO, process optimization, and multi-channel collections technology.", order: 3 },
  { name: "Sarah Chen", role: "VP of Healthcare Services", bio: "15 years in healthcare revenue cycle management with a focus on patient-centered collections.", order: 4 },
];

async function seedTeamMembers() {
  console.log("\n👥 Seeding Team Members...");
  for (const member of teamMembers) {
    process.stdout.write(`  → ${member.name}... `);
    const result = await createPage(DB.team, {
      Name: title(member.name),
      Role: richText(member.role),
      Bio: richText(member.bio),
      Order: num(member.order),
    });
    console.log(result ? "✓" : "✗");
  }
}

// ---------------------------------------------------------------------------
// Testimonials
// ---------------------------------------------------------------------------

const testimonials = [
  { quote: "Southwest Recovery Services' team recovered 91% of our aged receivables in just 6 months - results we never thought possible. Their compliance-first approach gave us complete confidence.", authorName: "Sarah Mitchell", authorTitle: "CFO", company: "Regional Medical Center", featured: true },
  { quote: "Their dedicated account team understands our industry inside and out. We've seen a 40% improvement in our recovery rates since partnering with SWRS.", authorName: "David Chen", authorTitle: "VP of Finance", company: "Metro Utilities Corp", featured: true },
  { quote: "The compliance standards and transparency SWRS provides are unmatched. Our board has complete visibility into every aspect of the recovery process.", authorName: "Jennifer Adams", authorTitle: "Director of Revenue", company: "State Government Agency", featured: false },
];

async function seedTestimonials() {
  console.log("\n💬 Seeding Testimonials...");
  for (const t of testimonials) {
    process.stdout.write(`  → ${t.authorName}... `);
    const result = await createPage(DB.testimonials, {
      Quote: title(t.quote),
      "Author Name": richText(t.authorName),
      "Author Title": richText(t.authorTitle),
      Company: richText(t.company),
      Featured: checkbox(t.featured),
    });
    console.log(result ? "✓" : "✗");
  }
}

// ---------------------------------------------------------------------------
// Locations
// ---------------------------------------------------------------------------

const locations = [
  { name: "Addison, TX (Corporate Office)", address: "16200 Addison Road, Suite 260, Addison, TX 75001", phone: "+1 (866) 551-4684", type: "HQ" },
  { name: "Phoenix, AZ", address: "Regional Operations Center, Phoenix Metro Area", phone: "", type: "Operations" },
  { name: "Houston, TX", address: "Regional Operations Center, Houston Metro Area", phone: "", type: "Operations" },
];

async function seedLocations() {
  console.log("\n📍 Seeding Locations...");
  for (const loc of locations) {
    process.stdout.write(`  → ${loc.name}... `);
    const result = await createPage(DB.locations, {
      Name: title(loc.name),
      Address: richText(loc.address),
      Phone: richText(loc.phone),
      Type: select(loc.type),
    });
    console.log(result ? "✓" : "✗");
  }
}

// ---------------------------------------------------------------------------
// Site Settings
// ---------------------------------------------------------------------------

const siteSettings = [
  { key: "company_name", value: "Southwest Recovery Services" },
  { key: "description", value: "Southwest Recovery Services is a nationally recognized leader in financial business process outsourcing and receivables management." },
  { key: "url", value: "https://www.swrecovery.com" },
  { key: "email", value: "info@swrecovery.com" },
  { key: "privacy_email", value: "privacy@swrecovery.com" },
  { key: "phone", value: "+1 (866) 551-4684" },
  { key: "customer_service_phone", value: "+1 (866) 837-3065" },
  { key: "payment_phone", value: "+1 (866) 558-3328" },
  { key: "headquarters", value: "16200 Addison Road, Suite 260, Addison, TX 75001" },
];

async function seedSettings() {
  console.log("\n⚙️  Seeding Site Settings...");
  for (const setting of siteSettings) {
    process.stdout.write(`  → ${setting.key}... `);
    const result = await createPage(DB.settings, {
      Key: title(setting.key),
      Value: richText(setting.value),
    });
    console.log(result ? "✓" : "✗");
  }
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------

async function main() {
  console.log("🚀 Southwest Recovery Services — Notion CMS Seeder");
  console.log("===================================================");

  if (!process.env.NOTION_API_KEY) {
    console.error("❌ NOTION_API_KEY is required. Run with:");
    console.error("   NOTION_API_KEY=secret_xxx npx tsx scripts/seed-notion.ts");
    process.exit(1);
  }

  await seedBlogPosts();
  await seedServices();
  await seedIndustries();
  await seedTeamMembers();
  await seedTestimonials();
  await seedLocations();
  await seedSettings();

  console.log("\n✅ All databases seeded successfully!");
  console.log("   → 12 blog posts");
  console.log("   →  5 services");
  console.log("   →  7 industries");
  console.log("   →  4 team members");
  console.log("   →  3 testimonials");
  console.log("   →  3 locations");
  console.log("   →  9 site settings");
}

main().catch(console.error);
