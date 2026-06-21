import { TEAM_MEMBERS, TEAM_MEMBER_BY_NAME, TEAM_MEMBER_BY_SLUG } from "@/constants/team";
import type { TeamMember } from "@/types";

import { getAllPosts } from "./blog";
import type { PostMeta } from "./blog";

/**
 * Authors are the real team members (constants/team.ts). A blog post's
 * `author` frontmatter is matched by name to a member, which gives every
 * article a real Person author + a profile page at `/team/[slug]`. When a name
 * does not resolve (e.g. an editorial byline), callers fall back to a plain
 * name / the Organization — we never fabricate a Person profile.
 */

export const AUTHOR_BASE_PATH = "/team";

/** Profile/author page path for a slug, e.g. "/team/alex-chen". */
export function authorPath(slug: string): string {
  return `${AUTHOR_BASE_PATH}/${slug}`;
}

/** All author slugs — for `generateStaticParams` and the sitemap. */
export function getAuthorSlugs(): readonly string[] {
  return TEAM_MEMBERS.map((member) => member.slug);
}

/** Member for a profile slug, or `null` when the slug is unknown. */
export function getAuthorBySlug(slug: string): TeamMember | null {
  return TEAM_MEMBER_BY_SLUG.get(slug) ?? null;
}

/** Member matching a post's `author` byline, or `null` for editorial bylines. */
export function getAuthorByName(name: string): TeamMember | null {
  return TEAM_MEMBER_BY_NAME.get(name) ?? null;
}

/** Posts written by a given author (by name), newest first. */
export function getPostsByAuthor(name: string): PostMeta[] {
  return getAllPosts().filter((post) => post.author === name);
}
