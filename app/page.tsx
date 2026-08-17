import Link from "next/link";
import Image from "next/image";
import { articles } from "@/app/data/articles";
import { categories } from "@/app/data/categories";
import ArticleCard from "@/app/components/ArticleCard";

export default function Home() {
  const sorted = [...articles].sort(
    (a, b) => +new Date(b.publishedAt) - +new Date(a.publishedAt)
  );
  const [featured, ...rest] = sorted;
  const featuredCategory = categories.find((c) => c.slug === featured.category);

  return (
    <main>
      <section className="max-w-[1180px] mx-auto px-6 pt-12 pb-4">
        <Link href={`/article/${featured.slug}`} className="group grid grid-cols-2 gap-10 items-center">
          <div className="relative h-[380px] rounded-xl overflow-hidden bg-mist">
            <Image
              src={featured.coverImage}
              alt={featured.coverImageAlt}
              fill
              sizes="(max-width: 768px) 100vw, 560px"
              priority
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>
          <div>
            {featuredCategory && (
              <span className="text-crimson text-xs font-semibold uppercase tracking-wide">
                {featuredCategory.name}
              </span>
            )}
            <h1 className="font-display text-4xl font-bold text-ink leading-[1.1] mt-2 mb-4 group-hover:text-crimson transition-colors">
              {featured.title}
            </h1>
            <p className="text-ink/60 text-base leading-relaxed mb-4">
              {featured.excerpt}
            </p>
            <div className="flex items-center gap-2 text-ink/40 text-xs">
              <span>{featured.author}</span>
              <span>·</span>
              <time dateTime={featured.publishedAt}>
                {new Date(featured.publishedAt).toLocaleDateString("en-US", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}
              </time>
              <span>·</span>
              <span>{featured.readTime}</span>
            </div>
          </div>
        </Link>
      </section>

      <section className="max-w-[1180px] mx-auto px-6 py-14 border-t border-line mt-8">
        <div className="flex items-end justify-between mb-8">
          <h2 className="font-display text-2xl font-bold text-ink">
            Latest articles
          </h2>
        </div>
        <div className="grid grid-cols-3 gap-x-8 gap-y-12">
          {rest.map((a) => (
            <ArticleCard key={a.slug} article={a} />
          ))}
        </div>
      </section>

      <section className="bg-mist border-t border-line">
        <div className="max-w-[1180px] mx-auto px-6 py-14">
          <h2 className="font-display text-2xl font-bold text-ink mb-6">
            Browse by section
          </h2>
          <div className="flex flex-wrap gap-3">
            {categories.map((c) => (
              <Link
                key={c.slug}
                href={`/category/${c.slug}`}
                className="bg-paper border border-line hover:border-crimson hover:text-crimson text-ink/80 text-sm font-medium px-4 py-2 rounded-full transition-colors"
              >
                {c.name}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
