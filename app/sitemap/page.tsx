import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/sections/page-hero";
import { Container } from "@/components/ui/container";
import { blogPosts, migrationPages } from "@/lib/content";

export const metadata: Metadata = {
  title: "Sitemap",
  description: "Navigational sitemap for key pages and migrated blog posts.",
};

export default function SitemapPage() {
  return (
    <>
      <PageHero title="Sitemap" description="Quick links to primary pages and latest migrated posts." />
      <section className="py-12">
        <Container className="grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-xl font-semibold mb-4">Pages</h2>
            <ul className="space-y-2 text-sm">
              {migrationPages.map((page) => (
                <li key={page.href}>
                  <Link href={page.href} className="text-[#1e3a5f] hover:underline">
                    {page.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-4">Posts</h2>
            <ul className="space-y-2 text-sm">
              {blogPosts.map((post) => (
                <li key={post.slug}>
                  <Link href={`/blog/${post.slug}`} className="text-[#1e3a5f] hover:underline">
                    {post.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>
    </>
  );
}
