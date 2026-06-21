import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { getAuthorBySlug, getAuthorSlugs, getPostsByAuthor } from "@/lib/authors";
import { buildBreadcrumbTrail, buildPersonSchema } from "@/lib/seo";

// Author/team profile pages: one per real team member (constants/team.ts). They
// give each blog author a Person profile (E-E-A-T) and list that author's
// articles. Only known slugs are valid; anything else 404s.
export const dynamicParams = false;

export function generateStaticParams() {
  return getAuthorSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const member = getAuthorBySlug(slug);
  if (!member) return {};

  const path = `/team/${member.slug}`;
  // Bare title — the root "%s · Sarte Global" template adds the brand once.
  const title = `${member.name} — ${member.role}`;
  const description = `${member.name}, ${member.role} bij Sarte Global. ${member.bio}`;

  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title: `${title} · Sarte Global`,
      description,
      url: path,
      type: "profile",
      images: [
        {
          url: "/images/company-img.png",
          width: 1200,
          height: 800,
          alt: `${member.name} · Sarte Global`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} · Sarte Global`,
      description,
      images: ["/images/company-img.png"],
    },
  };
}

export default async function AuthorPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const member = getAuthorBySlug(slug);
  if (!member) notFound();

  const path = `/team/${member.slug}`;
  const posts = getPostsByAuthor(member.name);
  const firstName = member.name.split(" ")[0] ?? member.name;

  const personJsonLd = buildPersonSchema(member);
  const breadcrumbJsonLd = buildBreadcrumbTrail([
    { name: "Over ons", path: "/over-ons" },
    { name: member.name, path },
  ]);

  return (
    <main className="post" id="top">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <Container className="post__inner">
        <nav className="post__crumbs" aria-label="Kruimelpad">
          <Link href="/">Home</Link>
          <span aria-hidden="true">/</span>
          <Link href="/over-ons">Over ons</Link>
          <span aria-hidden="true">/</span>
          <span aria-current="page">{member.name}</span>
        </nav>

        <Reveal as="header" className="post__head">
          <span className="eyebrow">{member.role}</span>
          <h1 className="post__title">{member.name}</h1>
          <p className="post__excerpt">{member.bio}</p>
        </Reveal>

        {posts.length > 0 ? (
          <section className="post__related" aria-labelledby="author-posts-h">
            <h2 className="post__related-h" id="author-posts-h">
              Artikelen van {firstName}
            </h2>
            <ul className="post__related-list">
              {posts.map((item) => (
                <li key={item.slug}>
                  <Link
                    href={`/journal/${item.slug}`}
                    className="post__related-card"
                  >
                    <span className="post__related-tag">{item.tag}</span>
                    <span className="post__related-title">{item.title}</span>
                    <span className="post__related-excerpt">{item.excerpt}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        ) : null}

        <aside className="post__cta">
          <h2 className="post__cta-title">Samenwerken met ons team?</h2>
          <p className="post__cta-sub">
            Plan een vrijblijvend gesprek over jouw project — je spreekt direct
            met de mensen die het werk doen.
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
      </Container>
    </main>
  );
}
