# Portfolio Template: Article-Centric Magazine Sites

## Overview

This template describes how to build a mobile-first magazine-style site using Next.js and Sanity.io. These sites are built for acquisition — clean code, enterprise-grade SEO, and professional architecture that appeals to major hospitality companies.

**Reference implementation:** Beverage.fyi (beverage.fyi) — most mature architecture, uses design tokens and CSS custom properties throughout.

**All sites use the same Sanity content lake, filtered by different categories.**

---

## Brand Identity Standards

All portfolio sites share a unified brand identity through Informative Media. These elements must remain congruent across every site:

### Typography
- **Font:** Inter (loaded via `next/font/google`)
- **Weights:** 400, 500, 700
- **CSS Variable:** `--font-inter` (or `--font-primary` in token-based sites)
- **`display: 'swap'`** for performance

### Header Structure (All Sites)
Three-column grid layout:
```
[▼ Portfolio Button] — [Centered Site Logo] — [☰ Hamburger Menu]
```

- **Logo:** `letter-spacing: normal` across all sites
- **Left panel:** Slides from left — portfolio links to all sibling sites (excluding self) + divider + "Presented By: Informative Media"
- **Right panel:** Slides from right — site navigation, legal links, social icon
- **Logic:** Only one panel open at a time. Click overlay to close.

### Portfolio Panel Links (Per Site)
Each site lists the OTHER portfolio sites. Never link to yourself.

| If you're on... | Portfolio lists... |
|---|---|
| Backbar.fyi | Somm.Site, Somm.Tips, Beverage.fyi, Hospitality.fyi |
| Beverage.fyi | Somm.Site, Somm.Tips, Backbar.fyi, Hospitality.fyi |
| Hospitality.fyi | Somm.Site, Somm.Tips, Beverage.fyi, Backbar.fyi |

### Portfolio Site Descriptions
| Site | Description |
|---|---|
| Somm.Site | Explore Wine Culture |
| Somm.Tips | Wine Pairings & Shopping Insights |
| Beverage.fyi | Online Magazine |
| Backbar.fyi | Spirits Education |
| Hospitality.fyi | Hospitality Industry Insights |

### Article Drop Cap
All article pages feature a 3-line drop cap on the first paragraph:
```css
.body p:first-child::first-letter {   /* or .body .paragraph:first-child::first-letter */
  font-weight: 700;
  float: left;
  font-size: 4.2em;
  line-height: 0.8;
  padding-right: 10px;
  padding-top: 4px;
}
```
**Important:** The selector depends on how PortableText renders paragraphs. If the site uses custom block renderers with class names (e.g., `.paragraph`), target that class. If it uses default rendering (bare `<p>` tags), target `p`.

### About Page Template
All sites share an identical structure with section-specific content:

1. **Hero** — Gradient background (site's header color → `#2a2a2a`), "About Us" title, site-specific subtitle
2. **Our Mission** — Single paragraph (not three), site-specific but follows the same pattern: "Great [topic] education shouldn't be locked behind... [Site] exists to democratize [topic]..."
3. **About Informative Media** — **Identical copy across all sites.** Three sentences about the parent company + subtle link to informativemedia.com
4. **Let's Collaborate** — Tightened CTA with site-specific industry language

### Hero Gradient Rule
The top color of every hero gradient must match that site's header background color. This creates a seamless visual flow from the fixed header into the page content.

---

## The SEO Philosophy

SEO is not an afterthought — it is the foundation. When you have interconnected sites with perfect technical SEO, you create a network effect that individual competitors cannot match. Every decision in this template prioritizes:

1. **Crawlability** — Search engines find and understand every page
2. **Indexability** — Every page has unique, optimized metadata
3. **Structured Data** — JSON-LD tells Google exactly what each page contains
4. **Internal Linking** — Related articles, tags, and subcategories create a web of relevance
5. **Speed** — Server-side rendering, optimized images, minimal JavaScript
6. **Authority** — Canonical URLs, proper redirects, no duplicate content

---

## Tech Stack

| Technology | Version | Purpose |
|------------|---------|---------|
| Next.js | 16.0.7 | App Router, SSR, SEO |
| Sanity.io | Latest | Headless CMS, shared content lake |
| CSS Modules | — | Scoped styling, no Tailwind |
| pnpm | Latest | Fast package management |
| Vercel | — | Hosting, edge functions, analytics |
| GoDaddy | — | DNS management |

---

## Architecture

### One Sanity Project, Multiple Sites

All sites pull from the same Sanity project (`21zbxo34`, dataset `production`). Each site filters by:
- `category` field (e.g., "spirits", "wine", "hospitality")
- `sites` array field (e.g., "backbar", "somm", "hospitality")

This architecture means:
- One place to manage all content
- Articles can appear on multiple sites
- Consistent data structure across properties
- Single source of truth

### CSS Architecture Standard: Design Tokens

**All new sites must use CSS custom properties (design tokens).** This is the single most important architectural decision. Define all brand values once in `:root` within `globals.css`:

```css
:root {
  /* Colors — CHANGE THESE PER SITE */
  --color-background: #fafafa;
  --color-header-footer: #000000;      /* Site's dark brand color */
  --color-accent: #c9a227;             /* Site's accent color */
  --color-text-primary: #1a1a1a;
  --color-text-secondary: #666666;
  --color-text-light: #ffffff;
  --color-border: #e0e0e0;

  /* Typography — SAME ACROSS ALL SITES */
  --font-primary: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;

  /* Spacing — SAME ACROSS ALL SITES */
  --spacing-xs: 0.25rem;
  --spacing-sm: 0.5rem;
  --spacing-md: 1rem;
  --spacing-lg: 1.5rem;
  --spacing-xl: 2rem;
  --spacing-2xl: 3rem;
  --spacing-3xl: 4rem;

  /* Layout */
  --max-width: 1200px;
  --header-height: 60px;

  /* Transitions */
  --transition-fast: 150ms ease;
  --transition-normal: 250ms ease;
}
```

Then reference these variables in every CSS module file instead of hardcoding values. This means changing a brand color is a one-line edit, not a 30-file find-and-replace.

### Site Brand Colors

| Site | Header/Footer | Accent | Notes |
|---|---|---|---|
| Beverage.fyi | `#000000` | `#c9a227` (gold) | Reference implementation |
| Backbar.fyi | `#001015` | `#a8d5ba` (green) | Needs token migration |
| Hospitality.fyi | `#00171f` | `#ffde59` (gold) | Needs token migration |

**Critical:** Never change a site's header/footer color without verifying it matches the footer. If the site uses a CSS variable for this, changing it once changes both. If it's hardcoded, you must update every instance.

---

## Folder Structure

```
project-root/
├── middleware.ts                    # Geo-blocking (China/Russia) - ROOT LEVEL
├── app/
│   ├── page.tsx                    # Homepage
│   ├── layout.tsx                  # Root layout (Header, Footer, fonts, metadata)
│   ├── globals.css                 # Global styles + design tokens (:root)
│   ├── page.module.css             # Homepage styles
│   ├── icon.png                    # Favicon (MUST be here, not just public/)
│   ├── sitemap.ts                  # Dynamic sitemap generation
│   ├── robots.ts                   # Robots.txt generation
│   ├── not-found.tsx               # Custom 404 page
│   ├── not-found.module.css        # 404 styles
│   ├── legal-pages.module.css      # Shared legal page styles
│   ├── about/
│   │   ├── page.tsx                # About page (congruent template)
│   │   └── about.module.css
│   ├── privacy/
│   │   └── page.tsx                # Privacy policy
│   ├── terms/
│   │   └── page.tsx                # Terms of use
│   ├── cookies/
│   │   └── page.tsx                # Cookie policy
│   ├── disclaimer/
│   │   └── page.tsx                # Content disclaimer
│   └── articles/
│       ├── page.tsx                # Articles archive (page 1)
│       ├── articles.module.css     # Archive styles (shared by all article routes)
│       ├── [slug]/
│       │   ├── page.tsx            # Individual article (JSON-LD, full SEO)
│       │   └── page.module.css     # Article styles (includes drop cap)
│       ├── page/
│       │   └── [page]/
│       │       └── page.tsx        # Pagination (page 2, 3, etc.)
│       ├── subcategory/
│       │   └── [subcategory]/
│       │       ├── page.tsx        # Filtered by subcategory (page 1)
│       │       └── page/
│       │           └── [page]/
│       │               └── page.tsx # Subcategory pagination (page 2, 3, etc.)
│       └── tag/
│           └── [tag]/
│               ├── page.tsx        # Filtered by tag (page 1)
│               └── page/
│                   └── [page]/
│                       └── page.tsx # Tag pagination (page 2, 3, etc.)
├── components/
│   ├── layout/
│   │   ├── Header.tsx              # Client Component (dual-panel menu)
│   │   ├── Header.module.css
│   │   ├── Footer.tsx
│   │   └── Footer.module.css
│   ├── homepage/
│   │   ├── FeaturedArticle.tsx + .module.css
│   │   ├── SubFeaturedArticles.tsx + .module.css
│   │   ├── ArticleCard.tsx + .module.css
│   │   └── ArticleGrid.tsx + .module.css
│   └── article/
│       ├── RelatedArticles.tsx + .module.css
│       └── SubcategoryDropdown.tsx + .module.css
├── public/
│   ├── favicon.png                 # Favicon image
│   └── [site]-socialcard.png       # OG image (1200x630)
├── sanity/
│   ├── lib/
│   │   └── client.ts               # Sanity client
│   ├── env.ts                      # Environment variables
│   └── queries.ts                  # GROQ queries
├── types/
│   └── article.ts                  # TypeScript interfaces
└── .env.local                      # Credentials (never committed)
```

### Pagination Folder Structure Detail

The nested structure for subcategory and tag pagination uses relative CSS imports:

```
articles/
├── articles.module.css           ← Shared styles
├── page.tsx                      ← imports ./articles.module.css
├── page/[page]/
│   └── page.tsx                  ← imports ../../articles.module.css
├── subcategory/[subcategory]/
│   ├── page.tsx                  ← imports ../../articles.module.css
│   └── page/[page]/
│       └── page.tsx              ← imports ../../../../articles.module.css
└── tag/[tag]/
    ├── page.tsx                  ← imports ../../articles.module.css
    └── page/[page]/
        └── page.tsx              ← imports ../../../../articles.module.css
```

---

## TypeScript Types

Create `types/article.ts`:

```typescript
export interface Article {
  _id: string
  title: string
  subtitle?: string
  slug: {
    current: string
  }
  mainImage?: {
    asset: {
      _id: string
      url: string
    }
    alt?: string
  }
  subcategory?: string
  category: string
  tags?: string[]
  publishedAt?: string
  author?: string
  body?: PortableTextBlock[]
}

export interface PortableTextBlock {
  _type: string
  _key: string
  style?: string
  children?: {
    _type: string
    _key: string
    text?: string
    marks?: string[]
  }[]
  asset?: {
    _id: string
    url: string
  }
  alt?: string
  caption?: string
}
```

---

## Root Layout Standard

Every site's `app/layout.tsx` must follow this pattern:

```typescript
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Script from 'next/script'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '700'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: {
    default: 'Site.name | Tagline',
    template: '%s | Site.name',
  },
  description: '...',
  keywords: ['...'],
  authors: [{ name: 'Derek Engles' }],
  creator: 'Derek Engles',
  publisher: 'Site.name',
  metadataBase: new URL('https://yourdomain.com'),
  alternates: { canonical: '/' },
  openGraph: { /* ... */ },
  twitter: { /* ... */ },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: { icon: '/favicon.png' },
}
```

**Key points:**
- `display: 'swap'` on font for loading performance
- Title template system (`%s | Site.name`) so article pages auto-format
- Full robots config for maximum crawlability
- Keywords array for supplemental SEO signals

---

## SEO Implementation (Critical)

### Every Page Must Have

1. **Unique title** — `Page Name | SITENAME`
2. **Unique description** — Compelling, keyword-rich, under 160 characters
3. **Canonical URL** — Prevents duplicate content issues
4. **Open Graph tags** — Facebook, LinkedIn sharing
5. **Twitter Card tags** — Twitter sharing

### Article Pages Must Also Have

6. **JSON-LD Article schema** — Tells Google this is an article
7. **JSON-LD Breadcrumb schema** — Shows site structure
8. **Dynamic metadata via generateMetadata** — Unique per article

### Required SEO Files

#### app/sitemap.ts
Dynamic sitemap that queries Sanity for all content:
- Homepage (priority: 1.0)
- Article collection (priority: 0.9)
- Individual articles (priority: 0.8)
- About page (priority: 0.7)
- Subcategory pages (priority: 0.6)
- Tag pages (priority: 0.5)
- Legal pages (priority: 0.3)

#### app/robots.ts
```typescript
import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/studio/'],
    },
    sitemap: 'https://yourdomain.com/sitemap.xml',
  }
}
```

### JSON-LD Implementation

Every article page includes two JSON-LD blocks injected via `<script type="application/ld+json">`:

**Article Schema:**
```json
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Article Title",
  "description": "Article subtitle",
  "image": "https://cdn.sanity.io/images/...",
  "datePublished": "2025-01-15T00:00:00Z",
  "author": {
    "@type": "Person",
    "name": "Author Name"
  },
  "publisher": {
    "@type": "Organization",
    "name": "SITENAME",
    "url": "https://yourdomain.com"
  },
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://yourdomain.com/articles/slug"
  }
}
```

**Breadcrumb Schema:**
```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://..." },
    { "@type": "ListItem", "position": 2, "name": "Articles", "item": "https://..." },
    { "@type": "ListItem", "position": 3, "name": "Subcategory", "item": "https://..." },
    { "@type": "ListItem", "position": 4, "name": "Article Title", "item": "https://..." }
  ]
}
```

### generateMetadata Pattern

```typescript
export async function generateMetadata({ params }: ArticlePageProps): Promise<Metadata> {
  const { slug } = await params
  const article = await client.fetch(articleBySlugQuery, { slug })
  
  if (!article) {
    return { title: 'Article Not Found | SITENAME' }
  }

  return {
    title: `${article.title} | SITENAME`,
    description: article.subtitle || `Read ${article.title} on SITENAME`,
    alternates: {
      canonical: `https://domain.com/articles/${slug}`,
    },
    openGraph: {
      title: article.title,
      description: article.subtitle,
      url: `https://domain.com/articles/${slug}`,
      siteName: 'SITENAME',
      type: 'article',
      publishedTime: article.publishedAt,
      authors: [article.author || 'Default Author'],
      images: article.mainImage?.asset?.url ? [{
        url: article.mainImage.asset.url,
        width: 1200,
        height: 630,
        alt: article.mainImage.alt || article.title,
      }] : [],
    },
    twitter: {
      card: 'summary_large_image',
      title: article.title,
      description: article.subtitle,
      images: article.mainImage?.asset?.url ? [article.mainImage.asset.url] : [],
    },
  }
}
```

---

## PortableText Rendering Standard

Use explicit custom block renderers for maximum control. This is the preferred pattern (used by Hospitality.fyi):

```typescript
const portableTextComponents: PortableTextComponents = {
  types: {
    image: ({ value }) => (
      <figure className={styles.bodyImage}>
        <img src={value.asset?.url} alt={value.alt || ''} className={styles.bodyImageImg} />
        {value.caption && <figcaption className={styles.caption}>{value.caption}</figcaption>}
      </figure>
    ),
  },
  block: {
    h2: ({ children }) => <h2 className={styles.h2}>{children}</h2>,
    blockquote: ({ children }) => <blockquote className={styles.blockquote}>{children}</blockquote>,
    normal: ({ children }) => <p className={styles.paragraph}>{children}</p>,
  },
  marks: {
    link: ({ children, value }) => (
      <a href={value?.href} className={styles.link} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    ),
  },
}
```

**Why explicit renderers over CSS selectors:**
- Direct control over every block type
- Class names are explicit, not dependent on DOM structure
- Drop cap selector is predictable (`.body .paragraph:first-child::first-letter`)
- Easier to maintain and debug

**Drop cap note:** If using explicit `.paragraph` class, the selector is `.body .paragraph:first-child::first-letter`. If using bare `<p>` tags, the selector is `.body p:first-child::first-letter`.

---

## Image Handling Standard

Use the Next.js `Image` component for article main images:

```tsx
import Image from 'next/image'

<Image
  src={article.mainImage.asset.url}
  alt={article.mainImage.alt || article.title}
  width={800}
  height={450}
  className={styles.mainImage}
  priority
/>
```

**Why:** Automatic optimization, lazy loading, WebP conversion, and better Core Web Vitals scores (directly impacts SEO ranking).

**Caveat:** `next/image` with `fill` prop requires parent elements to have `position: relative` and defined dimensions. Use `width`/`height` props for simpler implementation.

---

## Sanity Queries

### Query Pattern

Most queries filter by BOTH category AND sites array:

```javascript
*[_type == "article" && category == "spirits" && "backbar" in sites]
```

For a new site, change both values:

```javascript
*[_type == "article" && category == "hospitality" && "hospitality" in sites]
```

### CRITICAL: Single Article Query Exception

The `articleBySlugQuery` should filter ONLY by sites array, NOT by category. This allows articles from all categories (including Industry articles used in featured/sub-featured sections) to be viewable.

```javascript
// WRONG — Industry articles return 404
*[_type == "article" && category in ["wine", "spirits", "beer", "sake"] && slug.current == $slug]

// CORRECT — All site articles are viewable
*[_type == "article" && "sitename" in sites && slug.current == $slug]
```

### TypeScript Type Casting

```typescript
const articles = await client.fetch<Article[]>(query, { tag, start, end })
const count = await client.fetch<number>(countQuery, { subcategory })
```

### Required Queries

Define these in `sanity/queries.ts`:

1. **Homepage Queries:**
   - `featuredArticleQuery` — Most recent Industry article
   - `subFeaturedArticlesQuery` — Next 2 Industry articles
   - `homepageGridArticlesQuery` — Main category articles for grid

2. **Collection Page Queries:**
   - `collectionArticlesQuery` — Paginated, all categories
   - `collectionArticlesCountQuery` — Total count for pagination
   - `collectionBySubcategoryQuery` — Filtered + paginated
   - `collectionBySubcategoryCountQuery` — Count for subcategory
   - `collectionByTagQuery` — Filtered + paginated
   - `collectionByTagCountQuery` — Count for tag
   - `collectionSubcategoriesQuery` — All unique subcategories for dropdown

3. **Single Article Queries:**
   - `articleBySlugQuery` — Full article (filter by sites only, NOT category)
   - `relatedArticlesQuery` — Same subcategory, excludes current, limit 3
   - `relatedArticlesByCategoryQuery` — Fallback if <3 subcategory matches

---

## Geo-Blocking Middleware

Create `middleware.ts` in the **project root** (not in app folder):

```typescript
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const BLOCKED_COUNTRIES = ['CN', 'RU']

export function middleware(request: NextRequest) {
  const country = request.headers.get('x-vercel-ip-country') || ''

  if (BLOCKED_COUNTRIES.includes(country)) {
    return new NextResponse(
      `<!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Access Restricted | SITENAME</title>
          <style>
            * { margin: 0; padding: 0; box-sizing: border-box; }
            body {
              font-family: -apple-system, BlinkMacSystemFont, sans-serif;
              background-color: #00171f;
              color: #ffffff;
              min-height: 100vh;
              display: flex;
              align-items: center;
              justify-content: center;
              text-align: center;
              padding: 20px;
            }
            .container { max-width: 500px; }
            h1 { font-size: 32px; margin-bottom: 16px; }
            p { font-size: 16px; opacity: 0.8; line-height: 1.6; }
          </style>
        </head>
        <body>
          <div class="container">
            <h1>Access Restricted</h1>
            <p>SITENAME is not available in your region.</p>
          </div>
        </body>
      </html>`,
      {
        status: 403,
        headers: { 'Content-Type': 'text/html' },
      }
    )
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico|.*\\.png$|.*\\.jpg$|.*\\.svg$).*)'],
}
```

**Important:**
- Do NOT use `request.geo` — TypeScript doesn't recognize it
- Use `request.headers.get('x-vercel-ip-country')` instead
- Only works on Vercel production, not localhost

---

## Custom 404 Page

Create `app/not-found.tsx` with:
- Large "404" heading
- "Page Not Found" title
- Helpful message
- "Back to Home" button (primary/accent color)
- "Browse Articles" button (secondary/outline)
- Help links section (About, Articles, Privacy)
- Branded styling matching site colors

Next.js automatically uses this for all 404 errors.

---

## Dynamic Filtering

Subcategory and tag pages query Sanity directly — no hardcoded lists.

**Why:** If you add a new subcategory in Sanity, it works automatically without code changes.

**How:** URL slug is converted to query value:
- URL: `/articles/subcategory/other-spirits`
- Conversion: dashes → spaces, capitalize each word
- Query: `subcategory == "Other Spirits"`

For tags:
- URL: `/articles/tag/mezcal`
- Query: `$tag in tags` where tag = "mezcal"
- **Important:** Tags are stored lowercase in Sanity. Pass the URL slug directly — do NOT convert to title case.

---

## Data Conventions in Sanity

Maintain consistency across all sites:

| Field | Format | Example |
|-------|--------|---------|
| Subcategories | Title Case | "Bourbon", "Other Spirits", "Service" |
| Tags | **always lowercase** | "mezcal", "agave", "fine dining" |
| Slugs | lowercase-dashes | "buffalo-trace-distillery" |
| Author | Full Name | "Derek Engles" |

The code handles display formatting — Sanity stores the canonical version.

**Critical:** When querying by tag, pass the URL slug directly. Do NOT convert to title case or the query will fail.

---

## Client vs Server Components

Next.js App Router defaults to Server Components. Use Client Components (`'use client'`) only when needed.

**Server Components (default):**
- Pages
- Layouts
- Article content
- Static sections

**Client Components (add 'use client'):**
- Header (dual-panel menu state)
- SubcategoryDropdown (onChange handler)
- Any component with useState, useEffect, onClick, onChange

---

## Critical Pitfalls — Do NOT Do These

### 1. Do NOT hardcode colors — use design tokens
**Problem:** Changing a brand color requires editing 30+ declarations across multiple files. One miss and the site is inconsistent.
**Solution:** Define all colors in `:root` as CSS custom properties. Reference `var(--color-accent)` everywhere.

### 2. Do NOT use `next/image` without full CSS preparation
**Problem:** `next/image` with `fill` prop requires parent elements to have `position: relative` and defined dimensions. Without this, images break across entire site.
**Solution:** Use `width`/`height` props for simpler implementation, or prepare all parent CSS first.

### 3. Do NOT use `scroll-behavior: smooth` in globals.css
**Problem:** Conflicts with Next.js App Router navigation. Pages load at wrong scroll position.
**Solution:** Remove from CSS entirely. Next.js handles scroll reset automatically.

### 4. Do NOT upgrade Next.js blindly
**Problem:** Running `pnpm add next@latest` can break every TSX file.
**Solution:** Use specific patch versions (e.g., `pnpm add next@16.0.7`). Test locally before pushing.

### 5. Do NOT dump multiple files at once
**Problem:** Files get saved to wrong locations, causing cascading errors.
**Solution:** One file at a time, with exact folder path, wait for confirmation.

### 6. Do NOT put favicon only in public/
**Problem:** May not be picked up by Next.js consistently.
**Solution:** Copy favicon to `app/icon.png` for guaranteed detection.

### 7. Do NOT hardcode subcategory or tag lists
**Problem:** Breaks when articles have values not in the list.
**Solution:** Query Sanity dynamically. Extract unique values from actual data.

### 8. Do NOT use event handlers in Server Components
**Problem:** `onChange`, `onClick` fail silently in Server Components.
**Solution:** Extract interactive elements into separate Client Components with `'use client'`.

### 9. Do NOT pass query params to client.fetch without proper typing
**Problem:** TypeScript strict mode may reject query parameters.
**Solution:** Use generic type parameters: `client.fetch<Article[]>(query, params)`

### 10. Do NOT assume Vercel auto-deploys immediately
**Problem:** Git integration may not trigger automatically on first push.
**Solution:** After first push, check Deployments tab. Click Redeploy if needed.

### 11. Do NOT hardcode DNS values
**Problem:** Vercel provides project-specific DNS values, not generic ones.
**Solution:** After adding domain in Vercel, use the EXACT values Vercel displays.

### 12. Do NOT use request.geo in middleware
**Problem:** TypeScript doesn't recognize the geo property on NextRequest.
**Solution:** Use `request.headers.get('x-vercel-ip-country')` instead.

### 13. Do NOT skip local build verification
**Problem:** TypeScript errors that pass in dev mode fail on Vercel.
**Solution:** Always run `pnpm build` before pushing. Fix all errors first.

### 14. Do NOT filter articleBySlugQuery by category
**Problem:** Featured articles from Industry category return 404 when clicked.
**Solution:** Filter only by sites array, not category, for single article queries.

### 15. Do NOT convert tag slugs to title case
**Problem:** Tags are stored lowercase in Sanity. Converting to title case breaks the query.
**Solution:** Pass the URL slug directly to the tag query without transformation.

### 16. Do NOT change shared CSS variables without checking all consumers
**Problem:** A CSS variable like `--color-header-footer` controls the header AND footer. Changing it updates both — which may not be your intent.
**Solution:** Before changing any CSS variable, search the entire codebase for every place it's referenced. Understand all downstream effects.

---

## Customization Per Site

When creating a new site, change these values:

| Item | What to Change |
|------|----------------|
| Design tokens | `--color-header-footer`, `--color-accent` in `:root` |
| Page background | Usually keep `#fafafa` |
| Site name | Logo text in Header.tsx |
| Portfolio panel | List sibling sites (exclude self) |
| Category filter | `category == "spirits"` → `category == "hospitality"` |
| Sites filter | `"backbar" in sites` → `"hospitality" in sites` |
| Domain | backbar.fyi → hospitality.fyi |
| All metadata | Titles, descriptions, canonical URLs |
| Public assets | socialcard.png, favicon.png |
| Legal page content | Site name, focus area, contact info |
| About page | Hero subtitle, mission paragraph, collaborate text |
| About page (keep same) | Informative Media section — identical copy |
| GA tracking ID | Unique per site |
| Instagram link | Site-specific handle |

---

## Files to Copy vs Customize

### Copy structure exactly:
- `sanity/lib/client.ts`
- `sanity/env.ts`
- Component file structures
- `middleware.ts` structure
- `app/sitemap.ts` structure
- `app/robots.ts` structure
- `types/article.ts`

### Customize for each site:
- `app/globals.css` — Design token values (colors only)
- `sanity/queries.ts` — Category and sites filters
- `app/layout.tsx` — Site name, metadata, GA tracking ID
- `components/layout/Header.tsx` — Logo text, portfolio links, Instagram
- `components/layout/Header.module.css` — Only if accent color differs
- Legal pages — Site name, content focus
- About page — Hero subtitle, mission, collaborate text (keep Informative Media section identical)
- `.env.local` — Verify credentials

---

## Sanity Setup for New Sites

1. **Add CORS origin** in Sanity dashboard → API tab → CORS origins
   - Add `http://localhost:3000` (development)
   - Add `https://yourdomain.com` (production)

2. **Verify site value exists** in article.ts schema sites field

3. **Tag articles** with new site value in Sanity Studio

4. **Create webhook** for auto-deploy (see Deployment section)

---

## Pre-Deploy Verification

**Before pushing to GitHub, ALWAYS run locally:**

```bash
pnpm build
```

This catches TypeScript errors that will fail on Vercel. The build must complete with zero errors before pushing.

**Common errors this catches:**
- Type mismatches in client.fetch calls
- Missing imports
- Invalid props
- Middleware issues

---

## Deployment Process

### Step 1: Git Setup

```bash
git init
git add .
git commit -m "Initial commit: sitename complete site"
git branch -M main
git remote add origin https://github.com/USERNAME/repo-name.git
git push -u origin main
```

### Step 2: Vercel Deployment

1. Go to vercel.com → Add New → Project
2. Import repository from GitHub
3. Configure:
   - Framework: Next.js (auto-detected)
   - Root Directory: `.`
   - Build Command: Default
   - Output Directory: Default

4. Add Environment Variables:
   | Key | Value |
   |-----|-------|
   | NEXT_PUBLIC_SANITY_PROJECT_ID | 21zbxo34 |
   | NEXT_PUBLIC_SANITY_DATASET | production |
   | NEXT_PUBLIC_SANITY_API_VERSION | 2024-01-01 |

5. Click Deploy

### Step 3: Add Domain in Vercel

1. Vercel → Project → Settings → Domains
2. Enter your domain (e.g., hospitality.fyi)
3. Click Add
4. Choose "Add both" for www and non-www
5. **Copy the DNS values Vercel displays** — do NOT use generic values

### Step 4: GoDaddy DNS Configuration

1. Go to GoDaddy → DNS Management for your domain
2. Edit the **A record** (@ / root):
   - Change Data to the IP address Vercel provided
3. Edit the **CNAME record** (www):
   - Change Data to the CNAME value Vercel provided
4. Leave all other records unchanged
5. Return to Vercel and click Refresh until green checkmarks appear

**DNS propagation takes 5-30 minutes. Be patient.**

### Step 5: Sanity Webhook for Auto-Deploy

1. **Create Deploy Hook in Vercel:**
   - Vercel → Project → Settings → Git → Deploy Hooks
   - Name: `sanity-publish`
   - Branch: `main`
   - Copy the generated URL

2. **Create Webhook in Sanity:**
   - sanity.io/manage → Project → API → Webhooks → Add webhook
   - Name: `[SITENAME] Deploy`
   - URL: Paste Vercel deploy hook URL
   - Dataset: `production`
   - Trigger on: Create, Update, Delete
   - Filter: `_type == "article" && "[sitename]" in sites`
   - HTTP method: POST
   - Save

Now publishing an article in Sanity auto-deploys the site in 30-60 seconds.

---

## Deployment Checklist

Run through this for every new site:

### Pre-Development
- [ ] Domain purchased and accessible in GoDaddy
- [ ] Site value added to Sanity schema if new
- [ ] Articles tagged with new site value in Sanity
- [ ] CORS origin added in Sanity for localhost

### Development Complete
- [ ] All pages render correctly on localhost
- [ ] Mobile responsive on all pages
- [ ] `pnpm build` completes with zero errors
- [ ] Favicon displays in browser tab
- [ ] All links work (navigation, articles, tags, subcategories)
- [ ] Portfolio panel links correct (excludes self, includes siblings)
- [ ] Drop cap renders on article first paragraph
- [ ] About page uses congruent template

### Files Verified
- [ ] middleware.ts in root folder (geo-blocking)
- [ ] app/icon.png exists (favicon)
- [ ] app/not-found.tsx exists (404 page)
- [ ] app/sitemap.ts exists
- [ ] app/robots.ts exists
- [ ] public/[site]-socialcard.png exists (1200x630)
- [ ] globals.css has `:root` design tokens defined

### Deployment
- [ ] Git initialized and pushed to GitHub
- [ ] Vercel project created and connected
- [ ] Environment variables set in Vercel
- [ ] Build succeeds on Vercel
- [ ] Domain added in Vercel
- [ ] DNS configured in GoDaddy with Vercel's values
- [ ] SSL certificate issued (automatic, may take minutes)
- [ ] CORS origin added in Sanity for production domain
- [ ] Sanity webhook created for auto-deploy

### Post-Launch SEO
- [ ] Site accessible at https://yourdomain.com
- [ ] Sitemap accessible at https://yourdomain.com/sitemap.xml
- [ ] Robots.txt accessible at https://yourdomain.com/robots.txt
- [ ] Google Search Console property added
- [ ] Sitemap submitted to Google Search Console
- [ ] Google Analytics configured
- [ ] Test OG tags with Facebook Sharing Debugger
- [ ] Test Twitter Cards with Twitter Card Validator

---

## Commands Reference

```bash
# Start development server
pnpm dev

# Build for production (ALWAYS run before pushing)
pnpm build

# Install a package
pnpm add [package-name]

# Install specific Next.js version (safer than latest)
pnpm add next@16.0.7

# Git workflow
git add .
git commit -m "descriptive message"
git push

# Check git status
git status
```

---

## Post-Launch Monitoring

After launch, regularly check:

1. **Google Search Console**
   - Index coverage
   - Crawl errors
   - Core Web Vitals

2. **Google Analytics**
   - Traffic sources
   - Page performance
   - User behavior

3. **Vercel Analytics**
   - Build times
   - Edge function performance
   - Error rates

4. **Manual Testing**
   - Publish new article in Sanity
   - Verify auto-deploy triggers
   - Check article appears on correct sites
   - Test portfolio panel links across all sites