import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen, FileText, Video, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { NewsletterForm } from "@/components/resources/newsletter-form";

export const metadata: Metadata = {
  title: "Resources & Blog",
  description:
    "Explore Meridian Recovery Solutions' library of guides, case studies, articles, and compliance updates to stay current on debt recovery best practices.",
};

const featured = {
  badge: "Featured Guide",
  title: "The Complete Guide to FDCPA Compliance for Creditors & Collectors",
  excerpt:
    "A detailed breakdown of the Fair Debt Collection Practices Act - what it covers, who it applies to, common violations, and how to build a compliance-first collections program that protects your organization.",
  type: "Guide",
  readTime: "12 min read",
  href: "#",
};

const articles = [
  {
    badge: "Case Study",
    title: "Healthcare System Reduces Bad Debt by 38% in 12 Months",
    excerpt:
      "How Meridian's tailored RCM approach helped a regional 3-hospital network recover $4.2M in outstanding patient balances while maintaining patient satisfaction scores.",
    readTime: "6 min read",
    href: "#",
  },
  {
    badge: "Article",
    title: "5 Signs Your Accounts Receivable Process Needs Professional Help",
    excerpt:
      "DSO climbing? Write-offs increasing? Staff overwhelmed? These are the early warning signs that your AR workflow needs expert intervention.",
    readTime: "4 min read",
    href: "#",
  },
  {
    badge: "Compliance Update",
    title: "2025 CFPB Rule Changes: What Collectors Need to Know",
    excerpt:
      "A plain-language summary of the latest Consumer Financial Protection Bureau guidance and how it affects your collections operations.",
    readTime: "5 min read",
    href: "#",
  },
  {
    badge: "Guide",
    title: "First-Party vs. Third-Party Collections: Choosing the Right Strategy",
    excerpt:
      "Understanding when to manage collections in-house versus outsourcing to a third party - and how to make the transition seamlessly.",
    readTime: "7 min read",
    href: "#",
  },
  {
    badge: "Article",
    title: "Revenue Cycle Management Best Practices for Community Hospitals",
    excerpt:
      "Practical steps community hospitals can take to improve charge capture, reduce denials, and accelerate reimbursement without adding staff.",
    readTime: "5 min read",
    href: "#",
  },
  {
    badge: "Case Study",
    title: "Municipal Government Recovers $1.8M in Delinquent Fees",
    excerpt:
      "How a mid-sized city partnered with Meridian to recover two years of unpaid parking fines and utility assessments while maintaining public trust.",
    readTime: "5 min read",
    href: "#",
  },
  {
    badge: "Guide",
    title: "HIPAA & Debt Collections: A Compliance Primer for Healthcare Providers",
    excerpt:
      "What healthcare organizations need to know about permissible PHI disclosures in the collection process - and how to stay compliant.",
    readTime: "8 min read",
    href: "#",
  },
  {
    badge: "Article",
    title: "How Technology is Transforming Accounts Receivable Management",
    excerpt:
      "AI-driven scoring, digital self-cure tools, and real-time analytics are reshaping how organizations manage receivables. Here's what to watch.",
    readTime: "4 min read",
    href: "#",
  },
  {
    badge: "Compliance Update",
    title: "State Collection Law Changes: Q1 2025 Summary",
    excerpt:
      "A roundup of significant state-level collection law amendments, interest rate caps, and consumer notice requirements effective in 2025.",
    readTime: "6 min read",
    href: "#",
  },
];

const resourceTypes = [
  { icon: BookOpen, label: "Guides", count: 12 },
  { icon: FileText, label: "Case Studies", count: 8 },
  { icon: Video, label: "Webinars", count: 5 },
  { icon: Download, label: "Templates", count: 6 },
];

const badgeColor: Record<string, "accent" | "secondary" | "default" | "outline"> = {
  "Case Study": "accent",
  "Article": "secondary",
  "Compliance Update": "default",
  "Guide": "outline",
};

export default function ResourcesPage() {
  return (
    <>
      <section
        className="bg-[#1e3a5f] text-white py-16 lg:py-20"
        aria-labelledby="resources-hero-heading"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Badge variant="accent" className="mb-4">
            Resources &amp; Blog
          </Badge>
          <h1
            id="resources-hero-heading"
            className="text-4xl sm:text-5xl font-bold mb-5 max-w-2xl"
          >
            Insights for Receivables Professionals
          </h1>
          <p className="text-blue-200 text-lg max-w-2xl leading-relaxed">
            Stay current with compliance updates, industry best practices, and
            actionable strategies to improve your recovery performance.
          </p>
        </div>
      </section>

      <section className="bg-white border-b border-[#e2e8f0] py-8" aria-label="Resource categories">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {resourceTypes.map((type) => {
              const Icon = type.icon;
              return (
                <div
                  key={type.label}
                  className="flex items-center gap-3 p-4 bg-[#f4f6f9] rounded-xl"
                >
                  <div
                    className="w-10 h-10 bg-[#1e3a5f] rounded-lg flex items-center justify-center"
                    aria-hidden="true"
                  >
                    <Icon className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-[#0f1c2e]">{type.label}</p>
                    <p className="text-xs text-[#64748b]">{type.count} resources</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-white py-16" aria-labelledby="featured-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            id="featured-heading"
            className="text-sm font-semibold uppercase tracking-wider text-[#64748b] mb-6"
          >
            Featured Resource
          </h2>
          <div className="bg-[#f4f6f9] rounded-2xl p-8 md:p-10">
            <Badge variant="accent" className="mb-4">
              {featured.badge}
            </Badge>
            <h3 className="text-2xl sm:text-3xl font-bold text-[#0f1c2e] mb-4 max-w-2xl">
              {featured.title}
            </h3>
            <p className="text-[#64748b] leading-relaxed mb-6 max-w-2xl">
              {featured.excerpt}
            </p>
            <div className="flex items-center gap-4">
              <Link href={featured.href}>
                <Button variant="primary" size="md">
                  Read the Guide
                  <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                </Button>
              </Link>
              <span className="text-sm text-[#64748b]">{featured.readTime}</span>
            </div>
          </div>
        </div>
      </section>

      <section
        className="bg-[#f4f6f9] py-16 lg:py-24"
        aria-labelledby="articles-heading"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            id="articles-heading"
            className="text-3xl font-bold text-[#0f1c2e] mb-10"
          >
            All Resources
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((article) => (
              <Link
                key={article.title}
                href={article.href}
                className="group"
                aria-label={`Read: ${article.title}`}
              >
                <Card className="h-full hover:shadow-md hover:border-[#1e3a5f]/30 transition-all duration-200 group-hover:-translate-y-1">
                  <CardHeader>
                    <Badge
                      variant={badgeColor[article.badge] ?? "secondary"}
                      className="w-fit mb-3"
                    >
                      {article.badge}
                    </Badge>
                    <CardTitle className="text-base leading-snug group-hover:text-[#1e3a5f]">
                      {article.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="mb-4">
                      {article.excerpt}
                    </CardDescription>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-[#94a3b8]">
                        {article.readTime}
                      </span>
                      <span className="text-sm font-medium text-[#c8962c] flex items-center gap-1">
                        Read more{" "}
                        <ArrowRight className="h-3 w-3" aria-hidden="true" />
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#1e3a5f] text-white py-16" aria-labelledby="newsletter-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 id="newsletter-heading" className="text-3xl font-bold mb-4">
            Stay Ahead of Compliance Changes
          </h2>
          <p className="text-blue-200 mb-7 max-w-xl mx-auto">
            Subscribe to the Meridian newsletter for monthly compliance alerts,
            industry insights, and best-practice guides.
          </p>
          <NewsletterForm />
          <p className="mt-3 text-xs text-blue-300">
            No spam. Unsubscribe at any time.
          </p>
        </div>
      </section>
    </>
  );
}
