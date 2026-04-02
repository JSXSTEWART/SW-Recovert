import type { MetadataRoute } from "next";
import { getPages, getBlogPosts } from "@/lib/notion";
import { fallbackPages } from "@/lib/fallback-pages";

const baseUrl = "https://www.swrecovery.com";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [pages, blogPosts] = await Promise.all([getPages(), getBlogPosts()]);

  const pageSlugs =
    pages.length > 0
      ? pages.map((p) => p.slug)
      : fallbackPages.map((p) => p.slug);

  const pageEntries: MetadataRoute.Sitemap = pageSlugs.map((slug) => ({
    url: `${baseUrl}/${slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: slug === "" ? 1 : 0.8,
  }));

  const blogEntries: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.publishedAt),
    changeFrequency: "weekly",
    priority: 0.7,
  }));

  const staticEntries: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
  ];

  return [...pageEntries, ...staticEntries, ...blogEntries];
}
