import Link from "next/link";
import { ChevronLeft, ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { NotionBlockRenderer } from "@/lib/notion-renderer";
import { getBlogPosts } from "@/lib/notion";
import type { NotionPage, NotionBlock } from "@/lib/notion-types";

type Props = {
  page: NotionPage;
  blocks: NotionBlock[];
};

export async function BlogTemplate({ page, blocks }: Props) {
  const allPosts = await getBlogPosts();
  const isListing = page.slug === "blog" || page.slug === "resources";

  if (isListing) {
    return (
      <>
        <section
          className="bg-[#1e3a5f] text-white py-16 lg:py-20"
          aria-labelledby="blog-hero"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Badge variant="accent" className="mb-4">
              {page.heroBadge || "Resources"}
            </Badge>
            <h1
              id="blog-hero"
              className="text-4xl sm:text-5xl font-bold mb-5 max-w-2xl"
            >
              {page.heroTitle || "Insights for Receivables Professionals"}
            </h1>
            <p className="text-blue-200 text-lg max-w-2xl leading-relaxed">
              {page.heroDescription ||
                "Guides, compliance updates, and strategies to optimize your receivables management."}
            </p>
          </div>
        </section>

        {blocks.length > 0 && (
          <section className="bg-white py-12">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
              <NotionBlockRenderer blocks={blocks} />
            </div>
          </section>
        )}

        <section className="bg-white py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {allPosts.map((post) => (
                <Link
                  key={post.id}
                  href={`/blog/${post.slug}`}
                  className="group"
                >
                  <Card className="h-full hover:shadow-md hover:border-[#1e3a5f]/30 transition-all duration-200 group-hover:-translate-y-1">
                    <CardHeader>
                      <div className="flex items-center gap-2 mb-2">
                        <Badge variant="accent" className="text-xs">
                          {post.category}
                        </Badge>
                        <span className="text-xs text-[#64748b]">
                          {post.readTime}
                        </span>
                      </div>
                      <CardTitle className="text-base leading-snug group-hover:text-[#1e3a5f]">
                        {post.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription>{post.excerpt}</CardDescription>
                      <p className="mt-4 text-sm font-medium text-[#c8962c] flex items-center gap-1">
                        Read more{" "}
                        <ArrowRight
                          className="h-3 w-3"
                          aria-hidden="true"
                        />
                      </p>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </>
    );
  }

  // Single blog post via template route (unlikely but supported)
  return (
    <section className="py-16">
      <Container className="max-w-3xl">
        <Link
          href="/blog"
          className="mb-8 inline-flex items-center gap-2 text-sm text-[#1e3a5f]"
        >
          <ChevronLeft className="h-4 w-4" aria-hidden="true" />
          Back to all posts
        </Link>
        <h1 className="text-3xl sm:text-4xl font-bold text-[#0f1c2e] mb-4">
          {page.title}
        </h1>
        <p className="text-[#64748b] leading-relaxed mb-8">
          {page.description}
        </p>
        {blocks.length > 0 ? (
          <NotionBlockRenderer blocks={blocks} />
        ) : (
          <p className="text-[#334155] leading-relaxed">
            Content coming soon.
          </p>
        )}
        <div className="mt-12 pt-8 border-t border-[#e2e8f0]">
          <Link href="/blog">
            <Button variant="outline" size="md">
              <ChevronLeft className="mr-2 h-4 w-4" aria-hidden="true" />
              Back to All Posts
            </Button>
          </Link>
        </div>
      </Container>
    </section>
  );
}
