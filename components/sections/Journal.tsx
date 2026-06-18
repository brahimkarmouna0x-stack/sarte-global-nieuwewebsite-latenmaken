import { JOURNAL_SECTION } from "@/constants";
import { formatPostDate, getAllPosts } from "@/lib/blog";
import type { Article } from "@/types";

import { ArticleCard } from "../ui/ArticleCard";
import { Container } from "../ui/Container";
import { Reveal } from "../ui/Reveal";

/**
 * Journal listing — driven by the MDX posts in `content/journal`. Each card
 * links to its real `/journal/[slug]` page. `limit` lets the homepage show a
 * teaser (e.g. the three latest) while the /journal page shows everything.
 */
export function Journal({ limit }: { readonly limit?: number } = {}) {
  const posts = getAllPosts().slice(0, limit ?? Infinity);

  const articles: readonly Article[] = posts.map((post) => ({
    tag: post.tag,
    title: post.title,
    date: formatPostDate(post.date),
    readLabel: `${post.readMinutes} min lezen`,
    href: `/journal/${post.slug}`,
    artwork: post.artwork,
    slug: post.slug,
    excerpt: post.excerpt,
    readMinutes: post.readMinutes,
    author: post.author,
  }));

  return (
    <section id="journal" aria-labelledby="journal-h">
      <Container>
        <Reveal as="header" className="section-head">
          <div>
            <span className="eyebrow">{JOURNAL_SECTION.eyebrow}</span>
            <h2 className="h2" id="journal-h">
              {JOURNAL_SECTION.titleLead} <em>{JOURNAL_SECTION.titleEm}</em>
            </h2>
          </div>
          <p className="sub">{JOURNAL_SECTION.sub}</p>
        </Reveal>

        <div className="journal-grid">
          {articles.map((article, index) => (
            <ArticleCard key={article.slug} article={article} index={index} />
          ))}
        </div>
      </Container>
    </section>
  );
}
