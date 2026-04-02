import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getPageBySlug, getPages } from "@/lib/notion";
import { templates } from "@/components/templates";
import { getRouteEntry, getAllSlugs } from "@/lib/route-map";
import type { NotionPage, NotionBlock } from "@/lib/notion-types";

export const revalidate = 300;

type Props = {
  params: Promise<{ slug?: string[] }>;
};

function resolveSlug(slugSegments?: string[]): string {
  if (!slugSegments || slugSegments.length === 0) return "";
  return slugSegments.join("/");
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug: slugSegments } = await params;
  const slug = resolveSlug(slugSegments);

  // Try Notion Pages DB first
  const result = await getPageBySlug(slug);
  if (result) {
    return {
      title: result.page.title,
      description: result.page.description,
      openGraph: result.page.ogImage
        ? { images: [{ url: result.page.ogImage }] }
        : undefined,
    };
  }

  // Fall back to route map
  const entry = getRouteEntry(slug);
  if (entry) {
    return {
      title: entry.title,
      description: entry.description,
    };
  }

  return { title: "Page Not Found" };
}

export async function generateStaticParams() {
  // Prefer Notion pages if available, otherwise use the route map
  const pages = await getPages();

  if (pages.length > 0) {
    return pages.map((page) => ({
      slug: page.slug === "" ? [] : page.slug.split("/"),
    }));
  }

  return getAllSlugs().map((s) => ({
    slug: s === "" ? [] : s.split("/"),
  }));
}

export default async function CatchAllPage({ params }: Props) {
  const { slug: slugSegments } = await params;
  const slug = resolveSlug(slugSegments);

  // Try Notion Pages DB first
  const result = await getPageBySlug(slug);
  if (result) {
    const Template = templates[result.page.template];
    if (!Template) notFound();
    return <Template page={result.page} blocks={result.blocks} />;
  }

  // Fall back to route map
  const entry = getRouteEntry(slug);
  if (!entry) notFound();

  const Template = templates[entry.template];
  if (!Template) notFound();

  const fallbackPage: NotionPage = {
    id: entry.slug || "home",
    slug: entry.slug,
    title: entry.title,
    description: entry.description,
    template: entry.template,
    heroTitle: entry.heroTitle,
    heroBadge: entry.heroBadge,
    heroDescription: entry.heroDescription,
    ogImage: "",
    status: "Published",
    order: 0,
    lastEdited: "",
  };

  const emptyBlocks: NotionBlock[] = [];
  return <Template page={fallbackPage} blocks={emptyBlocks} />;
}
