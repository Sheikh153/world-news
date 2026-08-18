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
    readTime: "3 min read",
    coverImage:
      "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=1200",
    coverImageAlt: "Cargo ships loaded with shipping containers docked at a port",
    content: [
      {
        type: "p",
        text: "A pair of sneakers on a store shelf might contain rubber from Southeast Asia, cotton from West Africa, and electronics from East Asia, assembled in a factory that itself depends on machinery built somewhere else entirely. That web of sourcing, manufacturing, and transport — spanning dozens of borders before a single product reaches a customer — is what economists mean by a global supply chain. Understanding how it works explains why a factory closure on one continent can empty shelves on another.",
      },
      {
        type: "h2",
        text: "From raw material to retail shelf",
      },
      {
        type: "p",
        text: "Most global supply chains follow a similar arc. Raw materials are extracted or grown in one country, shipped to a second for processing into components, assembled into finished goods in a third, and then distributed to markets worldwide. Companies build these networks to take advantage of specialized labor, lower production costs, and proximity to particular resources — not because complexity is the goal, but because no single country does everything most cheaply or efficiently.",
      },
      {
        type: "p",
        text: "Container shipping made this possible at scale. Standardized steel containers, widely adopted from the 1960s onward, let goods move between trucks, trains, and ships without being unpacked at each stage, cutting the cost and time of moving freight across the planet. Today, a network of a few hundred major ports and shipping lanes carries the vast majority of world trade by volume.",
      },
      {
        type: "h3",
        text: "Why a single delay ripples for months",
      },
      {
        type: "p",
        text: "Because components pass through so many hands, supply chains behave like a chain in the literal sense: a break at any link can stall everything downstream. A shortage of a single low-cost part — a microchip, a specific resin, a particular fastener — can idle an entire assembly line for a product that otherwise has no relation to that part's country of origin. Manufacturers that run on 'just-in-time' inventory, keeping only days or weeks of stock on hand to cut storage costs, are especially exposed, since they have little buffer to absorb a delay.",
      },
      {
        type: "h2",
        text: "What happens when the chain breaks",
      },
      {
        type: "p",
        text: "When a major shipping route is blocked, a key manufacturing hub shuts down, or demand suddenly spikes, the effects rarely stay contained. Businesses further down the chain face shortages, prices rise as buyers compete for limited stock, and companies scramble to find alternate suppliers — often at higher cost. Recovery can take much longer than the original disruption, because a backlog at one port or factory takes time to clear even after normal operations resume.",
      },
      {
        type: "p",
        text: "In response, many companies and governments have pushed to diversify sourcing across more countries, hold larger safety stocks of critical materials, and in some cases bring production of essential goods closer to home — a shift often described as 'reshoring' or 'nearshoring.' None of these fixes are free: they typically trade some cost efficiency for greater resilience, a tradeoff businesses and policymakers are still working out.",
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
    readTime: "3 min read",
    coverImage:
      "https://images.unsplash.com/photo-1623278589094-6741f418d3bf?w=1200",
    coverImageAlt: "Entrance of the United Nations headquarters building with flags",
    content: [
      {
        type: "p",
        text: "For much of the three decades after the Cold War ended, international relations were often described as unipolar, with the United States shaping trade rules, security alliances, and diplomatic norms largely on its own terms. That picture has grown more complicated. A wider range of states and blocs now compete for influence, and analysts increasingly describe the emerging order as multipolar — a world with several centers of power rather than one.",
      },
      {
        type: "h2",
        text: "What 'multipolar' actually means",
      },
      {
        type: "p",
        text: "Multipolarity doesn't require several countries to be equally powerful. It simply means no single state can reliably set the global agenda without accounting for the interests of multiple other major players — whether that's a rising economic power, a resource-rich bloc, or a coalition of middle powers acting together. In practice, this shows up as more countries pursuing independent foreign policies, forming new regional alliances, or declining to automatically align with an established power on any given issue.",
      },
      {
        type: "p",
        text: "Institutions built for a different era are adapting unevenly. Bodies like the United Nations Security Council still reflect the balance of power at their founding, while newer forums — regional economic blocs, resource-focused alliances, and rotating coalitions of states — have emerged to represent interests older institutions weren't designed to address.",
      },
      {
        type: "h2",
        text: "Why the shift matters for everyday diplomacy",
      },
      {
        type: "p",
        text: "A multipolar world changes how international problems get solved. Agreements that once might have been settled between two or three major capitals now often require buy-in from a longer list of states, each with its own priorities. This can make consensus slower and more fragile — but it can also mean solutions are more durable once reached, since more parties have a stake in making them work.",
      },
      {
        type: "p",
        text: "For smaller and mid-sized countries, multipolarity can expand room to maneuver: with more potential partners to work with, states have more options for trade, security cooperation, and investment than when the choice was largely binary. Diplomats increasingly describe this as an era of 'multi-alignment,' where countries maintain relationships across multiple blocs rather than committing to one camp.",
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
    readTime: "3 min read",
    coverImage:
      "https://images.unsplash.com/photo-1762381157166-f51ac99ab412?w=1200",
    coverImageAlt: "Wind turbines and solar panels in a rural landscape",
    content: [
      {
        type: "p",
        text: "Each year, delegations from nearly 200 countries gather for the Conference of the Parties, or COP, the United Nations' annual climate summit. News coverage often focuses on protests and dramatic late-night negotiating sessions, but the actual decisions on the table are more specific — and more consequential — than the coverage usually suggests.",
      },
      {
        type: "h2",
        text: "The three things COP negotiations actually decide",
      },
      {
        type: "p",
        text: "At their core, COP summits negotiate three interlinked questions: how much countries will cut greenhouse gas emissions and by when, how much money wealthier nations will provide to help developing countries adapt to climate change and transition to cleaner energy, and how to address 'loss and damage' — support for countries already suffering climate impacts they did little to cause. Each country submits its own emissions targets, known as Nationally Determined Contributions, which are reviewed and, in theory, strengthened at each summit.",
      },
      {
        type: "p",
        text: "Climate finance is often the most contentious thread. Developing countries argue that industrialized nations, which produced the bulk of historical emissions, bear greater responsibility for funding the transition elsewhere. Wealthier nations negotiate over how much to commit and through what mechanisms — grants, loans, or private investment — with the gap between pledges and needs remaining a persistent sticking point.",
      },
      {
        type: "h2",
        text: "Why agreements are hard to enforce",
      },
      {
        type: "p",
        text: "COP agreements are negotiated by consensus among nearly 200 governments, which makes them slow to reach and, once signed, difficult to enforce. No global body can penalize a country for missing its emissions targets; compliance relies largely on diplomatic pressure, domestic politics, and each country's own follow-through. Because of this, the practical impact of any COP summit often becomes clear only years later, as countries either translate their pledges into domestic policy or let them lapse.",
      },
      {
        type: "p",
        text: "Even with these limits, the summits serve a function beyond any single agreement: they set a recurring, public checkpoint where governments, businesses, and scientists compare notes on progress, and where the diplomatic cost of backsliding is highest. Whether that pressure translates into faster action remains one of the central questions of international climate policy.",
      },
    ],
  },
  {
    slug: "press-freedom-under-pressure",
    title: "Why Press Freedom Is Under Pressure Worldwide",
    metaDescription:
      "PLACEHOLDER META DESCRIPTION — replace with a 150-160 character summary of this article for search engines.",
    excerpt:
      "This is placeholder excerpt text. Replace it with a one or two sentence summary that will show up on article cards and listing pages.",
    category: "human-rights",
    tags: ["press freedom", "journalism", "civil liberties"],
    author: "Your Name",
    publishedAt: "2026-05-11",
    updatedAt: "2026-05-11",
    readTime: "4 min read",
    coverImage: "https://picsum.photos/seed/press-freedom-under-pressure/1200/700",
    coverImageAlt: "Stack of folded newspapers on a wooden table",
    content: [
      {
        type: "p",
        text: "A free press is often treated as a background assumption of modern life — until it isn't. Press freedom organizations have tracked a steady rise over the past decade in the number of journalists jailed, harassed, or killed for their work, and in the number of countries where independent media face new legal and financial pressure. Understanding why requires looking past any single country's headlines to the tools governments and other actors increasingly use against the press.",
      },
      {
        type: "h2",
        text: "The tools used to pressure journalists",
      },
      {
        type: "p",
        text: "Outright censorship is now only one method among many. Legal harassment — vague 'fake news' or national security laws that carry criminal penalties for unfavorable reporting — lets authorities pursue journalists through the courts rather than through direct bans, which is harder for outside observers to challenge. Economic pressure is just as effective: governments and allied businesses can withdraw advertising, revoke licenses, or squeeze owners financially until a previously independent outlet either shuts down or changes its coverage.",
      },
      {
        type: "p",
        text: "Digital tools have added new pressure points. Spyware capable of accessing a phone's messages, location, and camera has been used against journalists and their sources in multiple documented cases, while state-linked harassment campaigns on social media can make independent reporting personally costly even where no formal law is broken.",
      },
      {
        type: "h2",
        text: "Why it matters beyond the newsroom",
      },
      {
        type: "p",
        text: "Press freedom indexes consistently find that restrictions on independent media correlate with reduced government accountability more broadly — corruption is harder to expose, public health and safety failures take longer to surface, and citizens have less reliable information to make decisions with. International bodies and press freedom organizations track these trends and provide legal support, but enforcement tools remain limited, since media regulation is treated as a matter of domestic sovereignty under most international law.",
      },
      {
        type: "p",
        text: "For readers, the practical takeaway is that where and how a story is reported can itself be a signal worth paying attention to: robust, adversarial journalism tends to survive only where it has some structural protection, whether legal, economic, or institutional.",
      },
    ],
  },
  {
    slug: "global-ai-regulation-race",
    title: "Inside the Global Race to Regulate Artificial Intelligence",
    metaDescription:
      "PLACEHOLDER META DESCRIPTION — replace with a 150-160 character summary of this article for search engines.",
    excerpt:
      "This is placeholder excerpt text. Replace it with a one or two sentence summary that will show up on article cards and listing pages.",
    category: "technology",
    tags: ["artificial intelligence", "regulation", "policy"],
    author: "Your Name",
    publishedAt: "2026-07-02",
    updatedAt: "2026-07-02",
    readTime: "4 min read",
    coverImage: "https://picsum.photos/seed/global-ai-regulation-race/1200/700",
    coverImageAlt: "Rows of server racks in a data center lit by blue light",
    content: [
      {
        type: "p",
        text: "Artificial intelligence systems are now embedded in hiring decisions, medical diagnostics, content moderation, and financial lending — often with little visibility into how they reach their conclusions. Governments around the world are racing to write rules for these systems, and the approaches taken by different regions are likely to shape how AI is built and deployed globally for years to come.",
      },
      {
        type: "h2",
        text: "Three different regulatory philosophies",
      },
      {
        type: "p",
        text: "Broadly, major regulators have taken three different approaches. Comprehensive, risk-tiered regulation classifies AI systems by potential harm and imposes stricter requirements — testing, documentation, human oversight — on higher-risk uses like healthcare or law enforcement, while leaving low-risk applications largely unregulated. A lighter-touch, sector-based approach instead relies on existing rules for specific industries, such as finance or employment, to cover AI use case by case, without a dedicated AI law. A third approach emphasizes voluntary industry commitments and government guidance, betting that fast-moving technology is better served by flexible standards than by fixed legislation that risks becoming outdated before it takes effect.",
      },
      {
        type: "p",
        text: "These approaches aren't just legal technicalities — they have real consequences for which products reach a market first, how much smaller companies can afford to compete with well-resourced developers, and how much explanation a person is entitled to when an algorithm affects them directly.",
      },
      {
        type: "h2",
        text: "Why the rules keep changing",
      },
      {
        type: "p",
        text: "AI regulation is unusually hard to finalize because the technology it targets keeps changing shape. Rules written around one generation of models can look outdated by the time they take effect, and regulators must balance moving fast enough to address real harms against moving so fast that legitimate research and smaller developers get squeezed out by compliance costs designed with the largest companies in mind.",
      },
      {
        type: "p",
        text: "For now, most governments are converging on a similar minimum: some transparency about when AI is being used, mechanisms for people to contest automated decisions that affect them, and closer scrutiny for uses tied to safety, employment, or fundamental rights. How far each government goes beyond that minimum remains one of the more consequential open questions in technology policy.",
      },
    ],
  },
  {
    slug: "preparing-for-the-next-pandemic",
    title: "How the World Prepares for the Next Pandemic",
    metaDescription:
      "PLACEHOLDER META DESCRIPTION — replace with a 150-160 character summary of this article for search engines.",
    excerpt:
      "This is placeholder excerpt text. Replace it with a one or two sentence summary that will show up on article cards and listing pages.",
    category: "health",
    tags: ["public health", "pandemic preparedness", "global health"],
    author: "Your Name",
    publishedAt: "2026-08-12",
    updatedAt: "2026-08-12",
    readTime: "4 min read",
    coverImage: "https://picsum.photos/seed/preparing-for-the-next-pandemic/1200/700",
    coverImageAlt: "Laboratory researcher examining samples under controlled lighting",
    content: [
      {
        type: "p",
        text: "Public health officials rarely describe pandemic preparedness in terms of preventing outbreaks entirely — new pathogens will keep emerging, from animal populations, from environmental change, or simply from natural mutation. Instead, the field focuses on shortening the gap between when an outbreak starts and when it's detected, contained, and treated. That gap, measured in weeks or months, is what most current international preparedness efforts are built to close.",
      },
      {
        type: "h2",
        text: "Early warning is the first line of defense",
      },
      {
        type: "p",
        text: "Modern outbreak detection relies on a mix of traditional and newer surveillance methods: hospitals and labs reporting unusual clusters of illness, genomic sequencing that can identify a new pathogen within days rather than months, and increasingly, wastewater testing that can detect a virus circulating in a community before individual cases are diagnosed. International health regulations require countries to report certain outbreaks to global health authorities, though compliance and speed vary widely depending on a country's testing infrastructure and its incentives to disclose bad news quickly.",
      },
      {
        type: "p",
        text: "Once a threat is identified, containment depends on capacity built well before the outbreak: trained epidemiologists who can trace contacts, stockpiled protective equipment and treatments, and hospital systems with enough surge capacity to handle a spike in patients without normal care collapsing.",
      },
      {
        type: "h2",
        text: "Why global coordination is difficult",
      },
      {
        type: "p",
        text: "Pandemic response requires cooperation between countries with very different resources, political systems, and public trust in institutions — and outbreaks don't respect borders or diplomatic timelines. Wealthier countries have historically secured vaccines and treatments faster than lower-income ones, prompting new international efforts aimed at more equitable distribution during future outbreaks, alongside investment in regional manufacturing so treatments don't have to travel as far once developed.",
      },
      {
        type: "p",
        text: "Much of current preparedness work is intentionally unglamorous: strengthening routine health systems, maintaining stockpiles that may never be used, and running response drills for pathogens that may never emerge. The measure of success is essentially invisible — an outbreak contained before it becomes a headline at all.",
      },
    ],
  },
];
