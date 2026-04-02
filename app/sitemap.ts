import type { MetadataRoute } from "next";

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
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: route === "" ? 1 : 0.8,
  }));
}
