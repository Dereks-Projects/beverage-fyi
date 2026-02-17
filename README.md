# Beverage.fyi

**The hub of the Informative Media ecosystem.**

Beverage.fyi is one of five sites in the Informative Media portfolio, all powered by a shared Sanity CMS dataset. It serves three distinct functions: the newsroom for industry content, the hub that drives traffic to specialist sister sites, and the home for beverage categories that don't have their own dedicated property.

---

## The Informative Media Ecosystem

| Site | Domain | Content Ownership |
|------|--------|-------------------|
| **SOMM.SITE** | somm.site | Wine (full articles) |
| **Backbar.fyi** | backbar.fyi | Spirits (full articles) |
| **Beverage.fyi** | beverage.fyi | Industry, Beer, Sake, Coffee & Tea, Education (full articles) + Wine/Spirits teasers |
| **Hospitality.fyi** | hospitality.fyi | Hospitality and service content |
| **Restaurant Standards** | restaurantstandards.com | Training and standards content |

All sites pull from the same Sanity dataset. Articles have a `sites` field (array of strings) that determines which sites they're published to, and a `category` field that determines content type.

### Content Routing Rules

- **Wine articles** live on Somm.Site. Beverage.fyi displays teaser cards that link externally to `somm.site/articles/[slug]`.
- **Spirits articles** live on Backbar.fyi. Beverage.fyi displays teaser cards that link externally to `backbar.fyi/articles/[slug]`.
- **Industry, Beer, Sake, Coffee & Tea, and Education articles** are owned by Beverage.fyi and display as full articles.
- No full wine or spirits articles exist on Beverage.fyi. This eliminates duplicate content across domains, which is critical for SEO.

---

## Tech Stack

- **Framework:** Next.js (App Router)
- **CMS:** Sanity.io (shared dataset across all portfolio sites)
- **Styling:** CSS Modules (mobile-first)
- **Font:** Inter (loaded via `next/font/google`)
- **Deployment:** Vercel
- **Data Fetching:** `client.fetch()` using GROQ queries via `next-sanity`
- **Analytics:** Google Analytics 4 (G-87NHCW30CX)

---

## Project Structure

```
app/
├── about/
├── articles/
│   ├── page.tsx                    # Article Collection — All tab (page 1)
│   ├── articles.module.css         # Shared styles for all collection pages
│   ├── [slug]/                     # Individual article pages
│   ├── page/
│   │   └── [page]/
│   │       └── page.tsx            # Article Collection — All tab (paginated)
│   ├── industry/
│   │   ├── page.tsx                # Industry Insights tab (page 1)
│   │   └── page/
│   │       └── [page]/
│   │           └── page.tsx        # Industry Insights tab (paginated)
│   ├── beverages/
│   │   ├── page.tsx                # Beverage Knowledge tab (page 1)
│   │   └── page/
│   │       └── [page]/
│   │           └── page.tsx        # Beverage Knowledge tab (paginated)
│   ├── tag/
│   │   └── [tag]/
│   │       ├── page.tsx            # Dynamic tag collection (page 1)
│   │       └── page/
│   │           └── [page]/
│   │               └── page.tsx    # Dynamic tag collection (paginated)
│   └── subcategory/                # Legacy — can be removed
├── cookies/
├── disclaimer/
├── privacy/
├── terms/
├── globals.css                     # Design tokens, reset, utilities
├── layout.tsx                      # Root layout (Header, Footer, analytics)
├── page.tsx                        # Homepage
├── page.module.css                 # Homepage styles
├── not-found.tsx
├── robots.ts
└── sitemap.ts

components/
├── homepage/
│   ├── FeaturedArticle.tsx         # Hero featured article (large)
│   ├── FeaturedArticle.module.css
│   ├── SubFeaturedArticles.tsx     # Hero sub-featured articles (2 smaller)
│   ├── SubFeaturedArticles.module.css
│   ├── ArticleCard.tsx             # Standard article card (owned content)
│   ├── ArticleCard.module.css
│   ├── ArticleGrid.tsx             # Grid wrapper for ArticleCards
│   ├── ArticleGrid.module.css
│   ├── TeaserCard.tsx              # External-linking card (wine/spirits)
│   ├── TeaserCard.module.css
│   ├── TeaserSection.tsx           # Gray band container for teaser rows
│   └── TeaserSection.module.css
├── article/
│   ├── FilterTabs.tsx              # Collection page tab navigation
│   └── FilterTabs.module.css
└── layout/
    ├── Header.tsx
    └── Footer.tsx

sanity/
├── lib/
│   ├── client.ts                   # Sanity client configuration
│   └── env.ts                      # Environment variable validation
└── queries.ts                      # All GROQ queries (centralized)
```

---

## Homepage Layout

The homepage is divided into four visual zones:

1. **Hero (white background)** — 1 featured + 2 sub-featured Industry articles. Full articles owned by Beverage.fyi.

2. **"Explore More" Grid (white background)** — Up to 9 articles from Beer, Sake, Coffee & Tea, and Education categories. Full articles owned by Beverage.fyi.

3. **Teaser Band (gray background, `#d9d9d9`)** — Two rows of 3 teaser cards each. Row 1: Spirits articles linking to Backbar.fyi. Row 2: Wine articles linking to Somm.Site. Cards have `#fafafa` background with border-radius to create contrast against the gray band. "Read on" links in accent gold indicate external destination.

4. **"More Articles" Button (white background)** — Routes to `/articles` collection page.

---

## Article Collection Pages

Three tab-filtered views, each with its own URL route for SEO:

| Tab | URL | Categories |
|-----|-----|------------|
| **All** | `/articles` | industry, beer, sake, coffee-tea, education |
| **Industry Insights** | `/articles/industry` | industry |
| **Beverage Knowledge** | `/articles/beverages` | beer, sake, coffee-tea, education |

Each tab has full pagination support (`/articles/page/2`, `/articles/industry/page/2`, etc.). The `FilterTabs` component renders `<Link>` elements (not JavaScript toggles) so every filtered view is a real, crawlable URL with its own metadata.

Dynamic tag pages (`/articles/tag/[tag]`) remain functional — clicking a tag badge on any article card routes to a paginated collection of articles with that tag.

---

## Key Components

### TeaserCard vs ArticleCard

Both share near-identical visual DNA but serve different purposes:

| | ArticleCard | TeaserCard |
|---|---|---|
| **Purpose** | Display owned content | Preview sister site content |
| **Link type** | Next.js `<Link>` (internal) | `<a target="_blank">` (external) |
| **Props** | `article` | `article`, `baseUrl`, `siteName` |
| **CTA** | "Read More" (gray) | "Read on SITE →" (accent gold) |
| **Background** | Transparent | `#fafafa` (pops off gray band) |

### FilterTabs

Server-rendered `<Link>` navigation between collection views. Takes an `activeTab` prop (`'all'` | `'industry'` | `'beverages'`) to highlight the current tab with an accent gold underline. No client-side JavaScript state.

---

## Sanity Schema Reference

Articles use these key fields:

- `category` (string): `wine`, `spirits`, `beer`, `sake`, `coffee-tea`, `education`, `hospitality`, `service`, `industry`
- `subcategory` (string): Capitalized values like "Regions", "Stout", "Current Trends", etc.
- `sites` (array of strings): `"somm"`, `"backbar"`, `"beverage"`, `"restaurant"`, `"hospitality"`
- `title` (string)
- `subtitle` (text)
- `slug` (slug)
- `mainImage` (image with alt text)
- `publishedAt` (datetime)
- `author` (string, defaults to "Derek Engles")
- `tags` (array of strings)
- `relatedArticles` (array of references)
- `parentGuide` (reference to a studyGuide document)

There is also a `studyGuide` document type with `childArticles`, `keyFacts`, and `geography` fields.

---

## GROQ Query Architecture

All queries are centralized in `sanity/queries.ts`. Key filtering patterns:

```groq
// Beverage-owned content
"beverage" in sites && category in ["industry", "beer", "sake", "coffee-tea", "education"]

// Wine teasers (from Somm.Site)
"somm" in sites && category == "wine"

// Spirits teasers (from Backbar.fyi)
"backbar" in sites && category == "spirits"
```

Pagination uses GROQ slice syntax: `[$start...$end]` with 12 articles per page.

---

## Design Tokens

Defined in `globals.css`:

| Token | Value | Usage |
|-------|-------|-------|
| `--color-background` | `#fafafa` | Page background |
| `--color-header-footer` | `#000000` | Header and footer |
| `--color-accent` | `#c9a227` | Gold accent (badges, active states, teaser links) |
| `--color-text-primary` | `#1a1a1a` | Headings, body text |
| `--color-text-secondary` | `#666666` | Subtitles, meta text |
| `--color-border` | `#e0e0e0` | Dividers, placeholders |
| `--max-width` | `1200px` | Content container |

Teaser band background: `#d9d9d9`
Teaser card background: `#fafafa`

---

## SEO Strategy

- **No duplicate content.** Wine and spirits articles are never rendered as full content on Beverage.fyi. Teaser cards link externally to the owning site.
- **Paginated routes.** Every collection page is a real URL (`/articles/page/2`) — no JavaScript-hidden content. Google crawls the full pagination chain.
- **Tab routes over client-side filters.** Each filter tab (`/articles`, `/articles/industry`, `/articles/beverages`) is a distinct, indexable URL with unique `<title>`, `<meta description>`, and canonical.
- **Dynamic tag pages.** Clicking a tag badge routes to `/articles/tag/[tag]` with paginated results and unique metadata per tag.
- **Canonical URLs** set on every page via `alternates.canonical` in metadata.
- **Structured metadata** includes OpenGraph, Twitter cards, and robots directives.

---

## Environment Variables

| Variable | Description |
|----------|-------------|
| `NEXT_PUBLIC_SANITY_PROJECT_ID` | Sanity project ID |
| `NEXT_PUBLIC_SANITY_DATASET` | Sanity dataset name |
| `NEXT_PUBLIC_SANITY_API_VERSION` | Sanity API version (default: `2024-01-01`) |

---

## Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

---

## Deployment

Deployed via Vercel. The site uses ISR (Incremental Static Regeneration) with `revalidate = 60` on the homepage, meaning content updates from Sanity appear within 60 seconds of publishing.

---

## Author

**Derek Engles** — Founder, Informative Media