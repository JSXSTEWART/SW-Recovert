import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/sections/page-hero";
import { Container } from "@/components/ui/container";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { getBlogPosts } from "@/lib/notion";

export const revalidate = 60;

export const metadata: Metadata = {
  title: "Blog",
  description: "Debt recovery, compliance, and AR strategy articles from Southwest Recovery Services.",
};

const toneByCategory: Record<string, "accent" | "secondary" | "default" | "outline"> = {
  Guide: "outline",
  Industry: "secondary",
  Compliance: "default",
  Local: "accent",
};

export default async function BlogPage() {
  const blogPosts = await getBlogPosts();

  return (
    <>
      <PageHero
        title="Blog"
        description="Guides, compliance updates, and strategies for receivables management professionals."
      />
      <section className="py-16">
        <Container>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="group" aria-label={`Read ${post.title}`}>
                <Card className="h-full transition-all group-hover:-translate-y-1 group-hover:shadow-md">
                  <CardHeader>
                    <Badge variant={toneByCategory[post.category] ?? "secondary"} className="w-fit mb-2">
                      {post.category}
                    </Badge>
                    <CardTitle className="text-base leading-snug group-hover:text-[#1e3a5f]">{post.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>{post.excerpt}</CardDescription>
                    <div className="mt-4 flex items-center justify-between text-xs text-muted-foreground">
                      <span>{new Date(post.publishedAt).toLocaleDateString("en-US")}</span>
                      <span className="inline-flex items-center gap-1 font-medium text-[#c8962c]">
                        Read more <ArrowRight className="h-3 w-3" aria-hidden="true" />
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
