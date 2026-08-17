// Sample articles showing the data shape every article should follow.
// Add new entries here to publish a new article — the [slug] route,
// category pages, sitemap, and homepage all read from this file.

export type ContentBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "h3"; text: string };

export type Article = {
  slug: string;
  title: string;
  metaDescription: string; // keep under ~160 characters for SEO
  excerpt: string; // shown on cards/listing pages
  category: string; // must match a slug in data/categories.ts
  tags: string[];
  author: string;
  publishedAt: string; // ISO date, e.g. "2026-07-22"
  updatedAt: string;
  readTime: string;
  coverImage: string;
  coverImageAlt: string;
  content: ContentBlock[];
};

export const articles: Article[] = [
  {
    slug: "how-global-supply-chains-work",
    title: "How Global Supply Chains Actually Work",
    metaDescription:
      "PLACEHOLDER META DESCRIPTION — replace with a 150-160 character summary of this article for search engines.",
    excerpt:
      "This is placeholder excerpt text. Replace it with a one or two sentence summary that will show up on article cards and listing pages.",
    category: "economy",
    tags: ["trade", "logistics", "economy"],
    author: "Your Name",
    publishedAt: "2026-07-22",
    updatedAt: "2026-07-22",
    readTime: "X min read",
    coverImage:
      "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=1200",
    coverImageAlt: "Cargo ships loaded with shipping containers docked at a port",
    content: [
      {
        type: "p",
        text: "This is a placeholder introduction paragraph. Set up the topic here in two or three sentences — what is this article about, and why should the reader care?",
      },
      {
        type: "h2",
        text: "Placeholder subheading one",
      },
      {
        type: "p",
        text: "Placeholder body text under the first subheading. Real articles should aim for well-researched, original paragraphs here.",
      },
      {
        type: "h3",
        text: "A supporting point",
      },
      {
        type: "p",
        text: "Placeholder text for a supporting point nested under the subheading above, using an h3.",
      },
      {
        type: "h2",
        text: "Placeholder subheading two",
      },
      {
        type: "p",
        text: "Placeholder closing section. Wrap up the article's main takeaway here.",
      },
    ],
  },
  {
    slug: "rise-of-multipolar-diplomacy",
    title: "The Rise of Multipolar Diplomacy",
    metaDescription:
      "PLACEHOLDER META DESCRIPTION — replace with a 150-160 character summary of this article for search engines.",
    excerpt:
      "This is placeholder excerpt text. Replace it with a one or two sentence summary that will show up on article cards and listing pages.",
    category: "geopolitics",
    tags: ["diplomacy", "international relations"],
    author: "Your Name",
    publishedAt: "2026-08-05",
    updatedAt: "2026-08-05",
    readTime: "X min read",
    coverImage:
      "https://images.unsplash.com/photo-1623278589094-6741f418d3bf?w=1200",
    coverImageAlt: "Entrance of the United Nations headquarters building with flags",
    content: [
      {
        type: "p",
        text: "Placeholder introduction paragraph for this article.",
      },
      {
        type: "h2",
        text: "Placeholder subheading one",
      },
      {
        type: "p",
        text: "Placeholder body text.",
      },
      {
        type: "h2",
        text: "Placeholder subheading two",
      },
      {
        type: "p",
        text: "Placeholder body text.",
      },
    ],
  },
  {
    slug: "what-cop-climate-summits-decide",
    title: "What COP Climate Summits Actually Decide",
    metaDescription:
      "PLACEHOLDER META DESCRIPTION — replace with a 150-160 character summary of this article for search engines.",
    excerpt:
      "This is placeholder excerpt text. Replace it with a one or two sentence summary that will show up on article cards and listing pages.",
    category: "climate",
    tags: ["climate policy", "environment"],
    author: "Your Name",
    publishedAt: "2026-06-18",
    updatedAt: "2026-06-18",
    readTime: "X min read",
    coverImage:
      "https://images.unsplash.com/photo-1762381157166-f51ac99ab412?w=1200",
    coverImageAlt: "Wind turbines and solar panels in a rural landscape",
    content: [
      {
        type: "p",
        text: "Placeholder introduction paragraph for this article.",
      },
      {
        type: "h2",
        text: "Placeholder subheading one",
      },
      {
        type: "p",
        text: "Placeholder body text.",
      },
      {
        type: "h2",
        text: "Placeholder subheading two",
      },
      {
        type: "p",
        text: "Placeholder body text.",
      },
    ],
  },
];
