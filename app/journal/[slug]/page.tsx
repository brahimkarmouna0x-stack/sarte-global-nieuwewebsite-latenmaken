import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { compileMDX } from "next-mdx-remote/rsc";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";

import { ArticleArtwork } from "@/components/ui/ArticleArtwork";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { getAuthorByName } from "@/lib/authors";
import {
  formatPostDate,
  getAllPosts,
  getPostBySlug,
  getRelatedPosts,
} from "@/lib/blog";
import {
  buildArticleMetadata,
  buildArticleSchema,
  buildBreadcrumbSchema,
  buildFaqSchema,
} from "@/lib/seo";

// Only the MDX files we ship are valid; anything else is a 404 (no on-demand ISR).
export const dynamicParams = false;

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  return buildArticleMetadata({
    path: `/journal/${post.slug}`,
    title: `${post.title} | Sarte Global`,
    description: post.description,
    keywords: post.keywords,
    datePublished: post.date,
    dateModified: post.updated,
    image: post.cover,
    ogAlt: post.title,
  });
}

export default async function JournalArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const { content } = await compileMDX({
    source: post.content,
    options: {
      mdxOptions: {
        remarkPlugins: [remarkGfm],
        rehypePlugins: [
          rehypeSlug,
          [rehypeAutolinkHeadings, { behavior: "wrap" }],
        ],
      },
    },
  });

  const path = `/journal/${post.slug}`;
  const related = getRelatedPosts(post.slug);
  // Match the byline to a real team member so the BlogPosting links to the
  // author's Person node (/team/[slug]); editorial bylines fall back to a name.
  const author = getAuthorByName(post.author);

  const articleJsonLd = buildArticleSchema({
    path,
    title: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.updated,
    author: author
      ? { name: author.name, slug: author.slug, jobTitle: author.role }
      : post.author,
    image: post.cover,
  });
  const breadcrumbJsonLd = buildBreadcrumbSchema(post.title, path);
  const faqJsonLd = post.faq && post.faq.length > 0 ? buildFaqSchema(post.faq) : null;

  return (
    <main className="post" id="top">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      {faqJsonLd ? (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      ) : null}

      <Container className="post__inner">
        <nav className="post__crumbs" aria-label="Kruimelpad">
          <Link href="/">Home</Link>
          <span aria-hidden="true">/</span>
          <Link href="/journal">Journal</Link>
          <span aria-hidden="true">/</span>
          <span aria-current="page">{post.tag}</span>
        </nav>

        <Reveal as="header" className="post__head">
          <span className="eyebrow">{post.tag}</span>
          <h1 className="post__title">{post.title}</h1>
          <div className="post__meta">
            <time dateTime={post.date}>{formatPostDate(post.date)}</time>
            <span>{post.readMinutes} min leestijd</span>
            {author ? (
              <Link href={`/team/${author.slug}`} className="post__author">
                {author.name}
              </Link>
            ) : (
              <span>{post.author}</span>
            )}
          </div>
          <p className="post__excerpt">{post.excerpt}</p>
        </Reveal>

        <div className="post__art" aria-hidden="true">
          <ArticleArtwork id={post.artwork} />
        </div>

        <article className="post-body">{content}</article>

        <aside className="post__cta">
          <h2 className="post__cta-title">Klaar voor een website die dit waarmaakt?</h2>
          <p className="post__cta-sub">
            Bekijk hoe wij een professionele website laten maken, of plan een
            vrijblijvend gesprek over jouw project.
          </p>
          <div className="post__cta-actions">
            <Link href="/website-laten-maken" className="btn btn-primary">
              Nieuwe website laten maken <span className="arr">→</span>
            </Link>
            <Link href="/contact" className="btn btn-ghost">
              Neem contact op
            </Link>
          </div>
        </aside>

        {related.length > 0 ? (
          <section className="post__related" aria-labelledby="post-related-h">
            <h2 className="post__related-h" id="post-related-h">
              Lees ook
            </h2>
            <ul className="post__related-list">
              {related.map((item) => (
                <li key={item.slug}>
                  <Link href={`/journal/${item.slug}`} className="post__related-card">
                    <span className="post__related-tag">{item.tag}</span>
                    <span className="post__related-title">{item.title}</span>
                    <span className="post__related-excerpt">{item.excerpt}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        ) : null}
      </Container>
    </main>
  );
}
