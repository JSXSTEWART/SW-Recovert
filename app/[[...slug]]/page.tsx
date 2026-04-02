import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getPageBySlug, getPages } from "@/lib/notion";
import { templates } from "@/components/templates";
import { fallbackPages } from "@/lib/fallback-pages";
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

  const fallback = fallbackPages.find((p) => p.slug === slug);
  if (fallback) {
    return {
      title: fallback.title,
      description: fallback.description,
    };
  }

  return { title: "Page Not Found" };
}

export async function generateStaticParams() {
  const pages = await getPages();

  if (pages.length > 0) {
    return pages.map((page) => ({
      slug: page.slug === "" ? [] : page.slug.split("/"),
    }));
  }

  return fallbackPages.map((page) => ({
    slug: page.slug === "" ? [] : page.slug.split("/"),
  }));
}

export default async function CatchAllPage({ params }: Props) {
  const { slug: slugSegments } = await params;
  const slug = resolveSlug(slugSegments);

  // Try Notion first
  const result = await getPageBySlug(slug);
  if (result) {
    const Template = templates[result.page.template];
    if (!Template) notFound();
    return <Template page={result.page} blocks={result.blocks} />;
  }

  // Fallback to hardcoded pages
  const fallback = fallbackPages.find((p) => p.slug === slug);
  if (!fallback) notFound();

  const Template = templates[fallback.template];
  if (!Template) notFound();

  const fallbackPage: NotionPage = {
    id: fallback.slug || "home",
    slug: fallback.slug,
    title: fallback.title,
    description: fallback.description,
    template: fallback.template,
    heroTitle: fallback.heroTitle,
    heroBadge: fallback.heroBadge,
    heroDescription: fallback.heroDescription,
    ogImage: "",
    status: "Published",
    order: 0,
    lastEdited: "",
  };

  const emptyBlocks: NotionBlock[] = [];
  return <Template page={fallbackPage} blocks={emptyBlocks} />;
}
