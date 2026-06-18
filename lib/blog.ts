import { readFileSync, readdirSync } from "node:fs";
import path from "node:path";

import matter from "gray-matter";

import type { ArticleArtwork } from "@/types";
import type { LandingFAQItem } from "@/constants/landing-nieuwe-website";

/**
 * File-based journal/blog. Posts live as MDX in `content/journal/*.mdx`; the
 * frontmatter drives metadata, JSON-LD and the listing card, while the MDX body
 * is compiled on the article route. Single source of truth — add a file and it
 * appears in the listing, the sitemap and the related-posts links automatically.
 */

const POSTS_DIR = path.join(process.cwd(), "content", "journal");

/** Parsed frontmatter contract — keep in sync with the MDX files. */
export interface PostFrontmatter {
  readonly title: string;
  readonly description: string;
  /** ISO date (YYYY-MM-DD). */
  readonly date: string;
  readonly updated?: string;
  /** Short category label shown on the card (e.g. "Web", "Prijzen"). */
  readonly tag: string;
  readonly tags?: readonly string[];
  readonly keywords: readonly string[];
  /** Keyword cluster — used for related-post grouping. */
  readonly cluster: string;
  readonly author: string;
  readonly readMinutes: number;
  readonly excerpt: string;
  /** Listing-card artwork id (rings | lines | curves). */
  readonly artwork: ArticleArtwork;
  /** Optional cover/share image path. */
  readonly cover?: string;
  /** Optional FAQ → emitted as FAQPage JSON-LD on the article. */
  readonly faq?: readonly LandingFAQItem[];
}

export interface PostMeta extends PostFrontmatter {
  readonly slug: string;
}

export interface Post extends PostMeta {
  /** Raw MDX body (compiled on the route via next-mdx-remote/rsc). */
  readonly content: string;
}

function getSlugs(): string[] {
  return readdirSync(POSTS_DIR)
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => file.replace(/\.mdx$/, ""));
}

function readPost(slug: string): Post {
  const raw = readFileSync(path.join(POSTS_DIR, `${slug}.mdx`), "utf8");
  const { data, content } = matter(raw);
  return { slug, content, ...(data as PostFrontmatter) };
}

/** All posts, newest first. */
export function getAllPosts(): PostMeta[] {
  return getSlugs()
    .map((slug) => {
      const { content: _content, ...meta } = readPost(slug);
      return meta;
    })
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

/** Single post incl. raw MDX body, or `null` if the slug does not exist. */
export function getPostBySlug(slug: string): Post | null {
  if (!getSlugs().includes(slug)) return null;
  return readPost(slug);
}

/** Posts in a given cluster (excludes `excludeSlug`), newest first. */
export function getPostsByCluster(cluster: string, excludeSlug?: string): PostMeta[] {
  return getAllPosts().filter(
    (post) => post.cluster === cluster && post.slug !== excludeSlug,
  );
}

/**
 * Up to `limit` related posts for internal linking: same cluster first, then
 * the most recent others as fallback so the block is never empty.
 */
export function getRelatedPosts(slug: string, limit = 2): PostMeta[] {
  const current = getAllPosts().find((post) => post.slug === slug);
  if (!current) return getAllPosts().slice(0, limit);

  const sameCluster = getPostsByCluster(current.cluster, slug);
  if (sameCluster.length >= limit) return sameCluster.slice(0, limit);

  const others = getAllPosts().filter(
    (post) => post.slug !== slug && post.cluster !== current.cluster,
  );
  return [...sameCluster, ...others].slice(0, limit);
}

/** Dutch long-date format ("14 mei 2026") for display. */
export function formatPostDate(iso: string): string {
  return new Date(iso).toLocaleDateString("nl-NL", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}
