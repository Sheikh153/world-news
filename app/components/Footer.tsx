import Link from "next/link";
import { categories } from "@/app/data/categories";
import { site } from "@/app/lib/site";

export default function Footer() {
  return (
    <footer className="bg-ink text-paper/90 mt-auto">
      <div className="max-w-[1180px] mx-auto px-6 pt-14 pb-8">
        <div className="grid grid-cols-[1.4fr_1fr_1fr] gap-12 pb-10 border-b border-paper/10">
          <div>
            <div className="font-display text-2xl font-bold text-paper mb-3">
              {site.name}
            </div>
            <p className="text-paper/55 text-sm leading-relaxed max-w-[320px]">
              {site.description}
            </p>
          </div>

          <div>
            <h4 className="text-paper text-sm font-semibold mb-4">
              Sections
            </h4>
            <ul className="space-y-2.5">
              {categories.map((c) => (
                <li key={c.slug}>
                  <Link
                    href={`/category/${c.slug}`}
                    className="text-paper/55 text-sm hover:text-paper transition-colors"
                  >
                    {c.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-paper text-sm font-semibold mb-4">Site</h4>
            <ul className="space-y-2.5">
              <li>
                <Link
                  href="/"
                  className="text-paper/55 text-sm hover:text-paper transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-paper/55 text-sm hover:text-paper transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/sitemap.xml"
                  className="text-paper/55 text-sm hover:text-paper transition-colors"
                >
                  Sitemap
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex items-center justify-between pt-6">
          <span className="text-paper/40 text-xs">
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </span>
          <span className="text-paper/40 text-xs">
            Built for editorial &amp; SEO practice
          </span>
        </div>
      </div>
    </footer>
  );
}
