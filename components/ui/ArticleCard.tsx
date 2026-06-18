import Link from "next/link";

import type { ArticleCardProps } from "@/types";

import { ArticleArtwork } from "./ArticleArtwork";
import { Reveal } from "./Reveal";

/**
 * Journal listing card. Links to the real article route (`/journal/[slug]`) so
 * the post is a crawlable, indexable page — the old modal-only version exposed
 * no URL to Google. Falls back to `href` when a slug is absent.
 */
export function ArticleCard({ article, index }: ArticleCardProps) {
  const href = article.slug ? `/journal/${article.slug}` : article.href;

  return (
    <Reveal as="article" className="article" index={index}>
      <Link
        href={href}
        className="article-trigger"
        aria-label={`Lees artikel: ${article.title}`}
      >
        <div className="article-head">
          <ArticleArtwork id={article.artwork} />
        </div>
        <div className="article-body">
          <span className="article-tag">{article.tag}</span>
          <h3 className="article-title">{article.title}</h3>
          <div className="article-meta">
            <span>{article.date}</span>
            <span className="article-meta__read">
              {article.readLabel}{" "}
              <svg
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                aria-hidden="true"
              >
                <path d="M5 12h14M13 5l7 7-7 7" />
              </svg>
            </span>
          </div>
        </div>
      </Link>
    </Reveal>
  );
}
