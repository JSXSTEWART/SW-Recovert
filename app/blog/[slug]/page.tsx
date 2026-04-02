import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Badge } from "@/components/ui/badge";
import { getBlogPost, getBlogPosts } from "@/lib/notion";
import { NotionBlockRenderer } from "@/lib/notion-renderer";

export const revalidate = 60;

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const result = await getBlogPost(slug);

  if (!result) {
    return { title: "Post Not Found" };
  }

  return {
    title: result.post.title,
    description: result.post.excerpt,
    openGraph: result.post.ogImage
      ? { images: [{ url: result.post.ogImage }] }
      : undefined,
  };
}

export async function generateStaticParams() {
  const posts = await getBlogPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const result = await getBlogPost(slug);

  if (!result) {
    notFound();
  }

  const { post, blocks } = result;

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

        {blocks.length > 0 ? (
          <NotionBlockRenderer blocks={blocks} />
        ) : (
          <div className="space-y-4 text-[#334155] leading-relaxed">
            <p>{post.excerpt}</p>
            <p>
              Full article content is managed in Notion. Connect your Notion
              database to see the complete post.
            </p>
          </div>
        )}
      </Container>
    </section>
  );
}
