import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { articles } from "@/app/data/articles";
import { categories } from "@/app/data/categories";
import { site } from "@/app/lib/site";
import ArticleCard from "@/app/components/ArticleCard";
import Breadcrumbs from "@/app/components/Breadcrumbs";

export function generateStaticParams() {
  return categories.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const category = categories.find((c) => c.slug === slug);
  if (!category) return {};

  const title = `${category.name} News & Analysis`;
  const description = `Explainers and analysis covering ${category.name.toLowerCase()} — part of ${site.name}'s ongoing coverage of world affairs.`;

  return {
    title,
    description,
    alternates: { canonical: `${site.url}/category/${category.slug}` },
    openGraph: { title, description, url: `${site.url}/category/${category.slug}` },
  };
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const category = categories.find((c) => c.slug === slug);
  if (!category) notFound();

  const matching = articles
    .filter((a) => a.category === category.slug)
    .sort((a, b) => +new Date(b.publishedAt) - +new Date(a.publishedAt));

  return (
    <main className="max-w-[1180px] mx-auto px-6 py-12">
      <Breadcrumbs items={[{ label: category.name, href: `/category/${category.slug}` }]} />

      <h1 className="font-display text-4xl font-bold text-ink mb-2">
        {category.name}
      </h1>
      <p className="text-ink/55 text-base mb-10 max-w-[560px]">
        Explainers and analysis covering {category.name.toLowerCase()}.
      </p>

      {matching.length > 0 ? (
        <div className="grid grid-cols-3 gap-x-8 gap-y-12">
          {matching.map((a) => (
            <ArticleCard key={a.slug} article={a} />
          ))}
        </div>
      ) : (
        <p className="text-ink/50 text-sm">
          No articles published in this section yet.
        </p>
      )}
    </main>
  );
}
