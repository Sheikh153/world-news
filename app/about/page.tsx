import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/app/lib/site";
import { categories } from "@/app/data/categories";
import Breadcrumbs from "@/app/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "About",
  description:
    "The Global Brief is an explainer-first newsroom covering economics, geopolitics, climate, technology, and health for readers who want context, not noise.",
  alternates: { canonical: `${site.url}/about` },
};

const categoryBlurbs: Record<string, string> = {
  economy:
    "Trade, markets, labor, and the systems that move money and goods across borders.",
  geopolitics:
    "Alliances, conflict, and the shifting balance of power between states and blocs.",
  climate:
    "Policy, science, and the economics of a warming planet.",
  "human-rights":
    "Civil liberties, press freedom, and accountability where power goes unchecked.",
  technology:
    "The rules, races, and tradeoffs shaping how new technology reaches the world.",
  health:
    "Public health systems, preparedness, and the science that keeps them running.",
};

const stats = [
  { value: "2021", label: "Founded" },
  { value: "6", label: "Coverage areas" },
  { value: "0", label: "Sponsored articles" },
];

const steps = [
  {
    title: "We start with a question, not a headline",
    body: "Story ideas come from a pattern our editors keep noticing, a decision that's hard to explain in a single sentence, or a reader asking 'wait, how does that actually work?' If a topic can't survive that question, we don't run it.",
  },
  {
    title: "Research comes before drafting",
    body: "Writers work from primary sources, public data, and documented reporting before a single paragraph is written. If a claim can't be traced back to something concrete, it doesn't make it into the piece — and it doesn't get replaced with a vaguer version of itself.",
  },
  {
    title: "Editing means challenging the piece, not polishing it",
    body: "Every draft goes through an editor whose job is to find the weakest claim in the article and push on it. Headlines and framing get checked against the actual body of the piece, not the other way around.",
  },
  {
    title: "Publishing isn't the end of the process",
    body: "Articles carry a visible publish and update date. When a story needs a correction or a meaningful update, we make it and note when the change happened — we don't quietly edit the past.",
  },
];

const standards = [
  {
    title: "Sourcing over speed",
    body: "We would rather publish an explainer a day later than run something we can't stand behind. None of our pieces are built around a single anonymous claim.",
  },
  {
    title: "Separation between reporting and opinion",
    body: "Explainers are written to help a reader understand a topic, not to tell them what to think about it. Analysis is clearly framed as analysis.",
  },
  {
    title: "Corrections are public",
    body: "Mistakes happen in any newsroom. When we get something wrong, we fix it and are transparent that a correction was made, rather than editing quietly.",
  },
  {
    title: "No sponsored content disguised as editorial",
    body: "If a piece is ever sponsored, it will say so clearly, in plain language, at the top — not in a footnote.",
  },
];

export default function AboutPage() {
  return (
    <main>
      <section className="max-w-[1180px] mx-auto px-6 pt-12 pb-10">
        <Breadcrumbs items={[{ label: "About", href: "/about" }]} />

        <span className="text-crimson text-xs font-semibold uppercase tracking-wide">
          About Us
        </span>
        <h1 className="font-display text-4xl sm:text-5xl font-bold text-ink leading-[1.08] mt-3 mb-6 max-w-[720px]">
          News moves fast. Understanding it shouldn&apos;t be an afterthought.
        </h1>
        <p className="text-ink/70 text-lg leading-relaxed max-w-[680px] mb-10">
          {site.name} is a newsroom built around a single habit: before we
          tell you what happened, we make sure you understand why it
          happened, who it affects, and what's likely to come next. We
          publish explainers, not alerts — fewer stories, written to hold up
          months after the headline fades.
        </p>

        <div className="flex flex-wrap gap-10 pt-8 border-t border-line">
          {stats.map((s) => (
            <div key={s.label}>
              <div className="font-display text-3xl font-bold text-ink">
                {s.value}
              </div>
              <div className="text-ink/50 text-sm mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-[760px] mx-auto px-6 py-4">
        <div className="space-y-5 text-ink/70 text-base leading-relaxed">
          <h2 className="font-display text-2xl font-bold text-ink !mt-2 !mb-3">
            Our mission
          </h2>
          <p>
            Most news coverage is optimized for the moment a story breaks —
            a headline, a quote, a number, gone from the front page within a
            day. That's useful for knowing something happened. It's much
            less useful for understanding it. {site.name} exists to fill
            that gap: durable, well-sourced explainers that stay accurate
            and relevant long after the news cycle has moved on.
          </p>
          <p>
            We're not trying to be first. We're trying to be the piece you
            still trust — and still find useful — six months later.
          </p>

          <blockquote className="border-l-4 border-crimson pl-5 py-1 my-8 text-ink text-xl font-display italic leading-snug">
            &ldquo;If an article can't be understood by someone with zero
            background on the topic, we haven't finished the job.&rdquo;
          </blockquote>

          <h2 className="font-display text-2xl font-bold text-ink !mt-10 !mb-3">
            Who we write for
          </h2>
          <p>
            Our readers are curious, time-constrained, and skeptical of
            being told what to think. They don't need every development
            explained to them in real time — they need the handful that
            actually matter, explained properly. We write for people who
            read one good explainer instead of ten reactive headlines.
          </p>
        </div>
      </section>

      <section className="bg-mist border-t border-line mt-8">
        <div className="max-w-[1180px] mx-auto px-6 py-14">
          <h2 className="font-display text-2xl font-bold text-ink mb-2">
            What we cover
          </h2>
          <p className="text-ink/55 text-base mb-8 max-w-[560px]">
            Six sections, chosen because they explain most of what shapes
            everyday life across borders.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((c) => (
              <Link
                key={c.slug}
                href={`/category/${c.slug}`}
                className="group block bg-paper border border-line hover:border-crimson rounded-xl p-6 transition-colors"
              >
                <h3 className="font-display text-lg font-bold text-ink group-hover:text-crimson transition-colors mb-2">
                  {c.name}
                </h3>
                <p className="text-ink/60 text-sm leading-relaxed">
                  {categoryBlurbs[c.slug]}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-[760px] mx-auto px-6 py-14">
        <h2 className="font-display text-2xl font-bold text-ink mb-2">
          How a story gets made
        </h2>
        <p className="text-ink/55 text-base leading-relaxed mb-8">
          Every explainer we publish goes through the same four stages —
          slower than a wire report, on purpose.
        </p>
        <ol className="space-y-8">
          {steps.map((step, i) => (
            <li key={step.title} className="flex gap-5">
              <span className="font-display text-2xl font-bold text-crimson/70 leading-none shrink-0 w-8">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="font-display text-lg font-bold text-ink mb-1.5">
                  {step.title}
                </h3>
                <p className="text-ink/65 text-base leading-relaxed">
                  {step.body}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="bg-ink border-t border-line">
        <div className="max-w-[1180px] mx-auto px-6 py-14">
          <h2 className="font-display text-2xl font-bold text-paper mb-2">
            Editorial standards
          </h2>
          <p className="text-paper/55 text-base mb-8 max-w-[560px]">
            Rules we hold ourselves to, whether or not anyone is checking.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-8">
            {standards.map((s) => (
              <div key={s.title}>
                <h3 className="font-display text-lg font-bold text-paper mb-1.5">
                  {s.title}
                </h3>
                <p className="text-paper/60 text-sm leading-relaxed">
                  {s.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-[760px] mx-auto px-6 py-14">
        <h2 className="font-display text-2xl font-bold text-ink mb-4">
          Corrections and feedback
        </h2>
        <div className="space-y-5 text-ink/70 text-base leading-relaxed">
          <p>
            No newsroom gets everything right on the first try. When a
            reader flags an error — a wrong figure, an outdated detail, a
            misattributed claim — we verify it against the original source
            and correct the piece directly, updating the article's
            &ldquo;last updated&rdquo; date so the record stays honest about
            what changed and when.
          </p>
          <p>
            If you've spotted something that needs a second look in one of
            our explainers, the fastest way to help is to point to the
            specific sentence and the source you think we got wrong. Vague
            disagreement is hard to act on; a specific correction almost
            always gets fixed.
          </p>
        </div>
      </section>
    </main>
  );
}
