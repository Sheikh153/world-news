import type { Metadata } from "next";
import { site } from "@/app/lib/site";
import Breadcrumbs from "@/app/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "About",
  description: `About ${site.name} — ${site.description}`,
  alternates: { canonical: `${site.url}/about` },
};

export default function AboutPage() {
  return (
    <main className="max-w-[760px] mx-auto px-6 py-12">
      <Breadcrumbs items={[{ label: "About", href: "/about" }]} />

      <h1 className="font-display text-4xl font-bold text-ink mb-6">
        About {site.name}
      </h1>

      <div className="space-y-5 text-ink/70 text-base leading-relaxed">
        <p>
          {site.name} is a template news publication used for SEO practice.
          Replace this paragraph with a real description of your publication
          — who it&apos;s for, what it covers, and why it exists.
        </p>
        <h2 className="font-display text-2xl font-bold text-ink !mt-10 !mb-3">
          What we cover
        </h2>
        <p>
          Placeholder text describing your editorial focus. This site ships
          with sections for Economy, Geopolitics, Climate, Human Rights,
          Technology, and Health — edit{" "}
          <code className="bg-mist px-1.5 py-0.5 rounded text-sm">
            app/data/categories.ts
          </code>{" "}
          to change them.
        </p>
        <h2 className="font-display text-2xl font-bold text-ink !mt-10 !mb-3">
          Editorial standards
        </h2>
        <p>
          Placeholder text describing sourcing, corrections, and editorial
          policy.
        </p>
      </div>
    </main>
  );
}
