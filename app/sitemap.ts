import type { MetadataRoute } from "next";
import { getPages, getBlogPosts, getServices, getIndustries, getLocations } from "@/lib/notion";
import { getAllSlugs } from "@/lib/route-map";

const baseUrl = "https://www.swrecovery.com";

function toSlug(name: string): string {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [pages, blogPosts, services, industries, locations] = await Promise.all([
    getPages(),
    getBlogPosts(),
    getServices(),
    getIndustries(),
    getLocations(),
  ]);

  // Page routes (from Notion Pages DB or route map)
  const pageSlugs = pages.length > 0 ? pages.map((p) => p.slug) : getAllSlugs();

  const pageEntries: MetadataRoute.Sitemap = pageSlugs.map((slug) => ({
    url: `${baseUrl}/${slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: slug === "" ? 1 : 0.8,
  }));

  // Blog routes
  const blogEntries: MetadataRoute.Sitemap = [
    { url: `${baseUrl}/blog`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.8 },
    ...blogPosts.map((post) => ({
      url: `${baseUrl}/blog/${post.slug}`,
      lastModified: new Date(post.publishedAt),
      changeFrequency: "weekly" as const,
      priority: 0.7,
    })),
  ];

  // Typed collection routes
  const serviceEntries: MetadataRoute.Sitemap = services.map((s) => ({
    url: `${baseUrl}/service/${s.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const industryEntries: MetadataRoute.Sitemap = industries.map((i) => ({
    url: `${baseUrl}/industry/${i.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const locationEntries: MetadataRoute.Sitemap = locations.map((l) => ({
    url: `${baseUrl}/location/${toSlug(l.name)}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [
    ...pageEntries,
    ...blogEntries,
    ...serviceEntries,
    ...industryEntries,
    ...locationEntries,
  ];
}
