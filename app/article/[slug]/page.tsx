import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { articles } from "@/app/data/articles";
import { categories } from "@/app/data/categories";
import { site } from "@/app/lib/site";
import JsonLd from "@/app/components/JsonLd";
import Breadcrumbs from "@/app/components/Breadcrumbs";
import ArticleCard from "@/app/components/ArticleCard";

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);
  if (!article) return {};

  const url = `${site.url}/article/${article.slug}`;

  return {
    title: article.title,
    description: article.metaDescription,
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      title: article.title,
      description: article.metaDescription,
      url,
      publishedTime: article.publishedAt,
      modifiedTime: article.updatedAt,
      authors: [article.author],
      images: [{ url: article.coverImage }],
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.metaDescription,
      images: [article.coverImage],
    },
  };
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);
  if (!article) notFound();

  const category = categories.find((c) => c.slug === article.category);
  const related = articles
    .filter((a) => a.category === article.category && a.slug !== article.slug)
    .slice(0, 3);

  return (
    <main>
      <article className="max-w-[760px] mx-auto px-6 pt-10 pb-16">
        <Breadcrumbs
          items={[
            ...(category
              ? [{ label: category.name, href: `/category/${category.slug}` }]
              : []),
            { label: article.title, href: `/article/${article.slug}` },
          ]}
        />

        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@type": "NewsArticle",
            headline: article.title,
            description: article.metaDescription,
            image: [article.coverImage],
            datePublished: article.publishedAt,
            dateModified: article.updatedAt,
            author: [{ "@type": "Person", name: article.author }],
            publisher: {
              "@type": "Organization",
              name: site.name,
              url: site.url,
            },
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": `${site.url}/article/${article.slug}`,
            },
          }}
        />

        <header className="mb-8">
          {category && (
            <Link
              href={`/category/${category.slug}`}
              className="text-crimson text-xs font-semibold uppercase tracking-wide"
            >
              {category.name}
            </Link>
          )}
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-ink leading-[1.08] mt-3 mb-5">
            {article.title}
          </h1>
          <div className="flex items-center gap-2 text-ink/50 text-sm">
            <span>By {article.author}</span>
            <span>·</span>
            <time dateTime={article.publishedAt}>
              {new Date(article.publishedAt).toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
            </time>
            <span>·</span>
            <span>{article.readTime}</span>
          </div>
        </header>

        <div className="relative h-[360px] rounded-xl overflow-hidden mb-10 bg-mist">
          <Image
            src={article.coverImage}
            alt={article.coverImageAlt}
            fill
            sizes="760px"
            priority
            className="object-cover"
          />
        </div>

        <div className="prose-content">
          {article.content.map((block, i) => {
            if (block.type === "h2") {
              return (
                <h2
                  key={i}
                  className="font-display text-2xl font-bold text-ink mt-10 mb-4"
                >
                  {block.text}
                </h2>
              );
            }
            if (block.type === "h3") {
              return (
                <h3
                  key={i}
                  className="font-display text-xl font-bold text-ink mt-8 mb-3"
                >
                  {block.text}
                </h3>
              );
            }
            return (
              <p key={i} className="text-ink/75 text-base leading-relaxed mb-5">
                {block.text}
              </p>
            );
          })}
        </div>

        {article.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-10 pt-8 border-t border-line">
            {article.tags.map((tag) => (
              <span
                key={tag}
                className="bg-mist text-ink/60 text-xs font-medium px-3 py-1.5 rounded-full"
              >
                #{tag}
              </span>
            ))}
          </div>
        )}
      </article>

      {related.length > 0 && (
        <section className="bg-mist border-t border-line">
          <div className="max-w-[1180px] mx-auto px-6 py-14">
            <h2 className="font-display text-2xl font-bold text-ink mb-8">
              More in {category?.name}
            </h2>
            <div className="grid grid-cols-3 gap-x-8 gap-y-12">
              {related.map((a) => (
                <ArticleCard key={a.slug} article={a} />
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
