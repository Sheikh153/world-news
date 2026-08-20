"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { categories } from "@/app/data/categories";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="border-b border-line bg-paper">
      <div className="max-w-[1180px] mx-auto px-6">
        <div className="h-16 flex items-center justify-between border-b border-line">
          <Link href="/" className="font-display text-2xl font-bold text-ink">
            Terravox
          </Link>
          <span className="hidden sm:block text-xs uppercase tracking-[0.2em] text-ink/45">
            World Affairs, Explained
          </span>
        </div>

        <nav className="flex items-center gap-7 h-12 overflow-x-auto text-sm">
          <Link
            href="/"
            className={
              pathname === "/"
                ? "text-crimson font-semibold whitespace-nowrap"
                : "text-ink/70 hover:text-crimson transition-colors whitespace-nowrap"
            }
          >
            Home
          </Link>
          {categories.map((c) => {
            const href = `/category/${c.slug}`;
            const active = pathname === href;
            return (
              <Link
                key={c.slug}
                href={href}
                className={
                  active
                    ? "text-crimson font-semibold whitespace-nowrap"
                    : "text-ink/70 hover:text-crimson transition-colors whitespace-nowrap"
                }
              >
                {c.name}
              </Link>
            );
          })}
          <Link
            href="/about"
            className={
              pathname === "/about"
                ? "text-crimson font-semibold whitespace-nowrap"
                : "text-ink/70 hover:text-crimson transition-colors whitespace-nowrap"
            }
          >
            About
          </Link>
        </nav>
      </div>
    </header>
  );
}
