import type { MetadataRoute } from "next";
import { blogPosts, migrationPages } from "@/lib/content";

const baseUrl = "https://www.swrecovery.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/about",
    "/about/locations",
    "/services",
    "/industries",
    "/resources",
    "/blog",
    "/customer-support",
    "/locations",
    "/contact",
    "/privacy-policy",
    "/privacy",
    ...migrationPages.map((page) => page.href),
    ...blogPosts.map((post) => `/blog/${post.slug}`),
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: route === "" ? 1 : 0.8,
  }));
}
