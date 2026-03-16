# Beverage.fyi

**The hub of the Informative Media ecosystem.**

Beverage.fyi is one of five sites in the Informative Media portfolio, all powered by a shared Sanity CMS dataset. It serves as the newsroom for industry content, the home for spirits, beer, sake, coffee and tea, and education articles, and a showcase for wine content hosted on SOMM.SITE.

---

## The Informative Media Ecosystem

| Site | Domain | Content Ownership |
|------|--------|-------------------|
| **SOMM.SITE** | somm.site | Wine (full articles) |
| **Beverage.fyi** | beverage.fyi | Industry, Spirits, Beer, Sake, Coffee and Tea, Education (full articles) + Wine showcase |
| **Hospitality.fyi** | hospitality.fyi | Hospitality and service content |
| **Restaurant Standards** | restaurantstandards.com | Training and standards content |
| **Somm.Tips** | somm.tips | Wine pairings and shopping insights |

All sites pull from the same Sanity dataset. Articles have a `sites` field (array of strings) that determines which sites they are published to, and a `category` field that determines content type.

### Content Routing Rules

- **Wine articles** live on Somm.Site. Beverage.fyi has a `/wine` showcase page that displays teaser cards linking externally to `somm.site/articles/[slug]`.
- **Spirits, Beer, Sake, Coffee and Tea, Industry, and Education articles** are owned by Beverage.fyi and display as full articles.
- No full wine articles exist on Beverage.fyi. This eliminates duplicate content across domains, which is critical for SEO.
- Backbar.fyi has been retired. All spirits content now lives on Beverage.fyi.

---

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **CMS:** Sanity.io (shared dataset across all portfolio sites)
- **Styling:** CSS Modules (mobile-first, no Tailwind)
- **Font:** Inter (loaded via `next/font/google`)
- **Deployment:** Vercel
- **Data Fetching:** `client.fetch()` using GROQ queries via `next-sanity`
- **Analytics:** Google Analytics 4 (G-87NHCW30CX)
- **Package Manager:** pnpm

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
│   │   ├── page.tsx                # Industry tab (page 1)
│   │   └── page/
│   │       └── [page]/
│   │           └── page.tsx        # Industry tab (paginated)
│   ├── spirits/
│   │   ├── page.tsx                # Spirits tab (page 1)
│   │   └── page/
│   │       └── [page]/
│   │           └── page.tsx        # Spirits tab (paginated)
│   ├── beer/
│   │   ├── page.tsx                # Beer tab (page 1)
│   │   └── page/
│   │       └── [page]/
│   │           └── page.tsx        # Beer tab (paginated)
│   ├── sake/
│   │   ├── page.tsx                # Sake tab (page 1)
│   │   └── page/
│   │       └── [page]/
│   │           └── page.tsx        # Sake tab (paginated)
│   ├── coffee-tea/
│   │   ├── page.tsx                # Coffee and Tea tab (page 1)
│   │   └── page/
│   │       └── [page]/
│   │           └── page.tsx        # Coffee and Tea tab (paginated)
│   └── tag/
│       └── [tag]/
│           ├── page.tsx            # Dynamic tag collection (page 1)
│           └── page/
│               └── [page]/
│                   └── page.tsx    # Dynamic tag collection (paginated)
├── wine/
│   ├── page.tsx                    # Wine showcase page (links to Somm.Site)
│   └── wine.module.css
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
│   ├── TeaserCard.tsx              # External-linking card (wine showcase)
│   └── TeaserCard.module.css
├── article/
│   ├── FilterTabs.tsx              # Collection page pill navigation
│   ├── FilterTabs.module.css
│   ├── RelatedArticles.tsx         # Related articles on single article pages
│   └── RelatedArticles.module.css
└── layout/
    ├── Header.tsx                  # Fixed header with portfolio and nav panels
    ├── Header.module.css
    ├── Footer.tsx                  # Footer with nav links
    └── Footer.module.css

sanity/
├── lib/
│   ├── client.ts                   # Sanity client configuration
│   └── env.ts                      # Environment variable validation
└── queries.ts                      # All GROQ queries (centralized)
```

---

## Homepage Layout

The homepage is a clean reverse-chronological feed. One unified query pulls 12 articles across all Beverage.fyi categories (industry, spirits, beer, sake, coffee-tea, education). The array is sliced by position:

1. **Hero** — Position [0] as featured article (large image, title, subtitle, first sentence on desktop). Positions [1-2] as sub-featured articles (two smaller cards beside the hero on desktop, stacked on mobile).

2. **"Explore More" Grid** — Positions [3-11] displayed as ArticleCards in a 3-column grid on desktop. On mobile, cards display as horizontal layout (image left, text right).

3. **"More Articles" Button** — Routes to `/articles` collection page.

---

## Article Collection Pages

Six filter tabs, each with its own URL route for SEO:

| Tab | URL | Categories |
|-----|-----|------------|
| **All** | `/articles` | industry, spirits, beer, sake, coffee-tea, education |
| **Industry** | `/articles/industry` | industry |
| **Spirits** | `/articles/spirits` | spirits |
| **Beer** | `/articles/beer` | beer |
| **Sake** | `/articles/sake` | sake |
| **Coffee and Tea** | `/articles/coffee-tea` | coffee-tea |

Each tab has full pagination support (12 articles per page). The `FilterTabs` component renders pill-shaped `<Link>` elements (not JavaScript toggles) so every filtered view is a real, crawlable URL with its own metadata. On mobile, the pill row scrolls horizontally.

Dynamic tag pages (`/articles/tag/[tag]`) remain functional. Clicking a tag on any article card routes to a paginated collection of articles with that tag.

---

## Wine Showcase Page

The `/wine` route is a top-level editorial showcase page. It pulls 9 wine articles from Somm.Site (`"somm" in sites && category == "wine"`) and displays them using `TeaserCard` components that link externally. The page has an editorial header, a 3x3 grid of teaser cards, and a CTA button linking to somm.site.

---

## Key Components

### ArticleCard vs TeaserCard

| | ArticleCard | TeaserCard |
|---|---|---|
| **Purpose** | Display owned content | Preview sister site content |
| **Link type** | Next.js `<Link>` (internal) | `<a target="_blank">` (external) |
| **Props** | `article` | `article`, `baseUrl`, `siteName` |
| **CTA** | "Read More" (gray, with visually-hidden title for SEO) | "Read on SITE" (accent gold) |
| **Mobile layout** | Horizontal (image left, text right) | Vertical (standard card) |
| **Subcategory** | Text label above title | Badge overlay on image |

### FilterTabs

Server-rendered `<Link>` navigation between collection views. Takes an `activeTab` prop (`'all'` | `'industry'` | `'spirits'` | `'beer'` | `'sake'` | `'coffee-tea'`). Styled as pills with dark fill for active state. Horizontal scroll on mobile.

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

---

## GROQ Query Architecture

All queries are centralized in `sanity/queries.ts`. Key filtering patterns:

```groq
// Homepage — all Beverage.fyi content, chronological
"beverage" in sites && category in ["industry", "beer", "spirits", "sake", "coffee-tea", "education"]

// Collection page — All tab (same as homepage)
"beverage" in sites && category in ["industry", "spirits", "beer", "sake", "coffee-tea", "education"]

// Individual category tabs
"beverage" in sites && category == "spirits"
"beverage" in sites && category == "beer"
"beverage" in sites && category == "sake"
"beverage" in sites && category == "coffee-tea"
"beverage" in sites && category == "industry"

// Wine showcase (from Somm.Site)
"somm" in sites && category == "wine"
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

---

## SEO Strategy

- **No duplicate content.** Wine articles are never rendered as full content on Beverage.fyi. Teaser cards link externally to Somm.Site.
- **Paginated routes.** Every collection page is a real URL — no JavaScript-hidden content. Google crawls the full pagination chain.
- **Tab routes over client-side filters.** Each of the six filter tabs is a distinct, indexable URL with unique title, meta description, and canonical.
- **Dynamic tag pages.** Clicking a tag routes to `/articles/tag/[tag]` with paginated results and unique metadata.
- **Descriptive link text.** ArticleCard "Read More" links include visually-hidden article titles for accessibility and SEO.
- **Preconnect.** `<link rel="preconnect" href="https://cdn.sanity.io" />` in the root layout for faster image loading.
- **Canonical URLs** set on every page via `alternates.canonical` in metadata.
- **Structured metadata** includes OpenGraph, Twitter cards, and robots directives.
- **ISR.** All data-fetching pages use `revalidate = 60` for near-real-time content updates without full rebuilds.

---

## Performance

- **Preconnect** to Sanity CDN reduces LCP by starting the connection early
- **next/font/google** loads Inter with font-display swap, eliminating layout shift
- **Image optimization** via Next.js Image component with responsive sizes attributes
- **CSS Modules** ensure zero unused styles per page
- **ISR** avoids cold builds while keeping content fresh

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
pnpm install

# Run development server
pnpm dev

# Build for production
pnpm build

# Start production server
pnpm start
```

---

## Deployment

Deployed via Vercel from GitHub. The site uses ISR (Incremental Static Regeneration) with `revalidate = 60`, meaning content updates from Sanity appear within 60 seconds of publishing.

---

## Author

**Derek Engles** — Founder, Informative Media
