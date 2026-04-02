import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Badge } from "@/components/ui/badge";
import { blogPosts } from "@/lib/content";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((item) => item.slug === slug);

  if (!post) {
    return { title: "Post Not Found" };
  }

  return {
    title: post.title,
    description: post.excerpt,
  };
}

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = blogPosts.find((item) => item.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <section className="py-16">
      <Container className="max-w-3xl">
        <Link href="/blog" className="mb-8 inline-flex items-center gap-2 text-sm text-[#1e3a5f]">
          <ChevronLeft className="h-4 w-4" aria-hidden="true" />
          Back to all posts
        </Link>
        <Badge variant="secondary" className="mb-3">
          {post.category}
        </Badge>
        <h1 className="text-3xl sm:text-4xl font-bold text-[#0f1c2e] mb-4">{post.title}</h1>
        <p className="text-sm text-muted-foreground mb-8">
          {new Date(post.publishedAt).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
          {" · "}
          {post.readTime}
        </p>

        <div className="space-y-4 text-[#334155] leading-relaxed">
          <p>{post.excerpt}</p>
          <p>
            This article page is part of the ongoing site rebuild and is seeded from the production sitemap.
            Long-form content and citations can be expanded in future iterations while keeping URLs in place for
            internal linking and SEO continuity.
          </p>
        </div>
      </Container>
    </section>
  );
}
