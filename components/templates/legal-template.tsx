import { Badge } from "@/components/ui/badge";
import { NotionBlockRenderer } from "@/lib/notion-renderer";
import type { NotionPage, NotionBlock } from "@/lib/notion-types";

type Props = {
  page: NotionPage;
  blocks: NotionBlock[];
};

export async function LegalTemplate({ page, blocks }: Props) {
  return (
    <>
      <section
        className="bg-[#1e3a5f] text-white py-12 lg:py-16"
        aria-labelledby="legal-heading"
      >
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Badge variant="accent" className="mb-3">
            {page.heroBadge || "Legal"}
          </Badge>
          <h1
            id="legal-heading"
            className="text-3xl sm:text-4xl font-bold mb-3"
          >
            {page.heroTitle || page.title}
          </h1>
          {page.heroDescription && (
            <p className="text-blue-200 leading-relaxed">
              {page.heroDescription}
            </p>
          )}
        </div>
      </section>

      <section className="bg-white py-12 lg:py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {blocks.length > 0 ? (
            <article className="prose-like">
              <NotionBlockRenderer blocks={blocks} />
            </article>
          ) : (
            <p className="text-[#64748b]">
              This policy is being updated. Please check back soon or contact us
              at{" "}
              <a
                href="mailto:privacy@swrecovery.com"
                className="text-[#1e3a5f] underline"
              >
                privacy@swrecovery.com
              </a>
              .
            </p>
          )}
        </div>
      </section>
    </>
  );
}
