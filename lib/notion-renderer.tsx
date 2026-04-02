import React from "react";
import Image from "next/image";
import type { NotionBlock, NotionRichText } from "@/lib/notion-types";

// ---------------------------------------------------------------------------
// Rich text renderer
// ---------------------------------------------------------------------------

function renderRichText(texts: NotionRichText[]): React.ReactNode[] {
  return texts.map((text, i) => {
    let node: React.ReactNode = text.plain_text;

    if (text.annotations.bold) node = <strong key={i}>{node}</strong>;
    if (text.annotations.italic) node = <em key={i}>{node}</em>;
    if (text.annotations.strikethrough) node = <s key={i}>{node}</s>;
    if (text.annotations.underline)
      node = (
        <span key={i} className="underline">
          {node}
        </span>
      );
    if (text.annotations.code)
      node = (
        <code
          key={i}
          className="bg-gray-100 text-[#1e3a5f] px-1.5 py-0.5 rounded text-sm font-mono"
        >
          {node}
        </code>
      );

    if (text.href) {
      node = (
        <a
          key={i}
          href={text.href}
          className="text-[#1e3a5f] underline hover:text-[#c8962c] transition-colors"
          target={text.href.startsWith("http") ? "_blank" : undefined}
          rel={text.href.startsWith("http") ? "noopener noreferrer" : undefined}
        >
          {node}
        </a>
      );
    }

    return node;
  });
}

// ---------------------------------------------------------------------------
// Block-level helpers
// ---------------------------------------------------------------------------

function getBlockRichText(block: NotionBlock): NotionRichText[] {
  const data = block[block.type] as { rich_text?: NotionRichText[] } | undefined;
  return data?.rich_text ?? [];
}

function getBlockText(block: NotionBlock): React.ReactNode {
  const texts = getBlockRichText(block);
  if (texts.length === 0) return null;
  return renderRichText(texts);
}

// ---------------------------------------------------------------------------
// Group consecutive list items
// ---------------------------------------------------------------------------

function groupListItems(blocks: NotionBlock[]): (NotionBlock | NotionBlock[])[] {
  const result: (NotionBlock | NotionBlock[])[] = [];
  let currentList: NotionBlock[] = [];
  let currentType = "";

  for (const block of blocks) {
    if (
      block.type === "bulleted_list_item" ||
      block.type === "numbered_list_item"
    ) {
      if (currentType === block.type) {
        currentList.push(block);
      } else {
        if (currentList.length > 0) result.push(currentList);
        currentList = [block];
        currentType = block.type;
      }
    } else {
      if (currentList.length > 0) {
        result.push(currentList);
        currentList = [];
        currentType = "";
      }
      result.push(block);
    }
  }
  if (currentList.length > 0) result.push(currentList);

  return result;
}

// ---------------------------------------------------------------------------
// Individual block renderers
// ---------------------------------------------------------------------------

function renderBlock(block: NotionBlock): React.ReactNode {
  switch (block.type) {
    case "paragraph": {
      const content = getBlockText(block);
      if (!content) return <div key={block.id} className="h-4" />;
      return (
        <p key={block.id} className="text-[#334155] leading-relaxed">
          {content}
        </p>
      );
    }

    case "heading_1":
      return (
        <h2
          key={block.id}
          className="text-3xl font-bold text-[#0f1c2e] mt-10 mb-4"
        >
          {getBlockText(block)}
        </h2>
      );

    case "heading_2":
      return (
        <h3
          key={block.id}
          className="text-2xl font-bold text-[#0f1c2e] mt-8 mb-3"
        >
          {getBlockText(block)}
        </h3>
      );

    case "heading_3":
      return (
        <h4
          key={block.id}
          className="text-xl font-semibold text-[#0f1c2e] mt-6 mb-2"
        >
          {getBlockText(block)}
        </h4>
      );

    case "bulleted_list_item":
    case "numbered_list_item":
      return (
        <li key={block.id} className="text-[#334155] leading-relaxed">
          {getBlockText(block)}
          {block.children && block.children.length > 0 && (
            <NotionBlockRenderer blocks={block.children} />
          )}
        </li>
      );

    case "quote":
      return (
        <blockquote
          key={block.id}
          className="border-l-4 border-[#c8962c] pl-4 py-2 my-4 italic text-[#475569]"
        >
          {getBlockText(block)}
        </blockquote>
      );

    case "callout": {
      const data = block.callout as
        | { icon?: { emoji?: string }; rich_text?: NotionRichText[] }
        | undefined;
      const icon = data?.icon?.emoji ?? "💡";
      return (
        <div
          key={block.id}
          className="flex gap-3 p-4 my-4 bg-[#f4f6f9] rounded-lg border border-[#e2e8f0]"
        >
          <span className="text-xl shrink-0">{icon}</span>
          <div className="text-[#334155] leading-relaxed">
            {data?.rich_text ? renderRichText(data.rich_text as NotionRichText[]) : null}
          </div>
        </div>
      );
    }

    case "code": {
      const data = block.code as
        | { rich_text?: NotionRichText[]; language?: string }
        | undefined;
      const lang = data?.language ?? "";
      return (
        <div key={block.id} className="my-4">
          {lang && (
            <div className="bg-[#1e3a5f] text-white text-xs px-3 py-1 rounded-t-lg font-mono">
              {lang}
            </div>
          )}
          <pre
            className={`bg-[#0f1c2e] text-gray-200 p-4 overflow-x-auto text-sm font-mono ${
              lang ? "rounded-b-lg" : "rounded-lg"
            }`}
          >
            <code>
              {data?.rich_text?.map((t) => t.plain_text).join("") ?? ""}
            </code>
          </pre>
        </div>
      );
    }

    case "image": {
      const data = block.image as
        | {
            type: string;
            file?: { url: string };
            external?: { url: string };
            caption?: NotionRichText[];
          }
        | undefined;
      const url = data?.file?.url ?? data?.external?.url ?? "";
      if (!url) return null;
      const caption = data?.caption;
      return (
        <figure key={block.id} className="my-6">
          <div className="relative w-full overflow-hidden rounded-lg">
            <Image
              src={url}
              alt={caption?.map((c) => c.plain_text).join("") ?? ""}
              width={800}
              height={450}
              className="w-full h-auto object-cover"
              unoptimized={url.includes("s3.us-west-2.amazonaws.com")}
            />
          </div>
          {caption && caption.length > 0 && (
            <figcaption className="mt-2 text-center text-sm text-[#64748b]">
              {renderRichText(caption)}
            </figcaption>
          )}
        </figure>
      );
    }

    case "divider":
      return <hr key={block.id} className="my-8 border-[#e2e8f0]" />;

    case "toggle": {
      return (
        <details key={block.id} className="my-4 group">
          <summary className="cursor-pointer font-medium text-[#0f1c2e] hover:text-[#1e3a5f] transition-colors">
            {getBlockText(block)}
          </summary>
          {block.children && block.children.length > 0 && (
            <div className="mt-2 pl-4 border-l-2 border-[#e2e8f0]">
              <NotionBlockRenderer blocks={block.children} />
            </div>
          )}
        </details>
      );
    }

    case "table": {
      const rows = block.children ?? [];
      return (
        <div key={block.id} className="my-6 overflow-x-auto">
          <table className="w-full border-collapse border border-[#e2e8f0] text-sm">
            <tbody>
              {rows.map((row, rowIdx) => {
                const cells =
                  (row.table_row as { cells?: NotionRichText[][] })?.cells ?? [];
                const Tag = rowIdx === 0 ? "th" : "td";
                return (
                  <tr
                    key={row.id}
                    className={rowIdx === 0 ? "bg-[#f4f6f9]" : ""}
                  >
                    {cells.map((cell, cellIdx) => (
                      <Tag
                        key={cellIdx}
                        className={`border border-[#e2e8f0] px-3 py-2 text-left ${
                          rowIdx === 0 ? "font-semibold text-[#0f1c2e]" : "text-[#334155]"
                        }`}
                      >
                        {renderRichText(cell)}
                      </Tag>
                    ))}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      );
    }

    case "video": {
      const data = block.video as
        | { type: string; external?: { url: string } }
        | undefined;
      const videoUrl = data?.external?.url ?? "";
      if (!videoUrl) return null;

      if (videoUrl.includes("youtube.com") || videoUrl.includes("youtu.be")) {
        const videoId = videoUrl.includes("youtu.be")
          ? videoUrl.split("/").pop()
          : new URLSearchParams(new URL(videoUrl).search).get("v");
        return (
          <div key={block.id} className="my-6 aspect-video rounded-lg overflow-hidden">
            <iframe
              src={`https://www.youtube.com/embed/${videoId}`}
              className="w-full h-full"
              allowFullScreen
              title="Video"
            />
          </div>
        );
      }
      return null;
    }

    case "bookmark": {
      const data = block.bookmark as
        | { url?: string; caption?: NotionRichText[] }
        | undefined;
      const bookmarkUrl = data?.url ?? "";
      return (
        <a
          key={block.id}
          href={bookmarkUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="block my-4 p-4 border border-[#e2e8f0] rounded-lg hover:border-[#1e3a5f] transition-colors"
        >
          <span className="text-sm text-[#64748b] break-all">{bookmarkUrl}</span>
          {data?.caption && data.caption.length > 0 && (
            <span className="block mt-1 text-[#334155]">
              {renderRichText(data.caption)}
            </span>
          )}
        </a>
      );
    }

    default:
      return null;
  }
}

// ---------------------------------------------------------------------------
// Main renderer component
// ---------------------------------------------------------------------------

export function NotionBlockRenderer({ blocks }: { blocks: NotionBlock[] }) {
  const grouped = groupListItems(blocks);

  return (
    <div className="notion-content space-y-4">
      {grouped.map((item, idx) => {
        if (Array.isArray(item)) {
          const listType = item[0].type;
          const Tag = listType === "numbered_list_item" ? "ol" : "ul";
          return (
            <Tag
              key={`list-${idx}`}
              className={`${
                Tag === "ol" ? "list-decimal" : "list-disc"
              } pl-6 space-y-1`}
            >
              {item.map(renderBlock)}
            </Tag>
          );
        }
        return renderBlock(item);
      })}
    </div>
  );
}
