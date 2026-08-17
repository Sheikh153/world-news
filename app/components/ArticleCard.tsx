import Link from "next/link";
import Image from "next/image";
import type { Article } from "@/app/data/articles";
import { categories } from "@/app/data/categories";

export default function ArticleCard({ article }: { article: Article }) {
  const category = categories.find((c) => c.slug === article.category);

  return (
    <article className="group">
      <Link href={`/article/${article.slug}`}>
        <div className="relative h-[200px] rounded-lg overflow-hidden mb-4 bg-mist">
          <Image
            src={article.coverImage}
            alt={article.coverImageAlt}
            fill
            sizes="(max-width: 768px) 100vw, 380px"
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
      </Link>
      {category && (
        <Link
          href={`/category/${category.slug}`}
          className="text-crimson text-xs font-semibold uppercase tracking-wide"
        >
          {category.name}
        </Link>
      )}
      <h3 className="font-display text-xl font-bold text-ink leading-snug mt-1.5 mb-2">
        <Link
          href={`/article/${article.slug}`}
          className="hover:text-crimson transition-colors"
        >
          {article.title}
        </Link>
      </h3>
      <p className="text-ink/60 text-sm leading-relaxed mb-2">
        {article.excerpt}
      </p>
      <div className="flex items-center gap-2 text-ink/40 text-xs">
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
    </article>
  );
}
