# CONGRUENT PROJECT: Architecture Standardization

## Objective

Bring Backbar.fyi and Hospitality.fyi up to Beverage.fyi's architectural standard. This is not a redesign — it's a refactor. The sites look the same to users afterward. The difference is under the hood: one source of truth for brand values, consistent rendering patterns, and proper TypeScript/image handling.

---

## Current State

| Feature | Beverage.fyi | Backbar.fyi | Hospitality.fyi |
|---|---|---|---|
| CSS Design Tokens | ✅ `:root` variables | ❌ Hardcoded values | ❌ Hardcoded values |
| Font | ✅ Inter | ✅ Inter (just migrated) | ✅ Inter (just migrated) |
| `display: 'swap'` on font | ✅ Yes | ❌ No | ❌ No |
| PortableText renderers | Default (bare `<p>`) | Default (bare `<p>`) | ✅ Explicit (`.paragraph`) |
| TypeScript Article type | ✅ Imported | ❌ Inline/untyped | ❌ Mixed |
| Next.js `Image` component | ✅ Yes | ❌ Plain `<img>` | ❌ Plain `<img>` |
| Metadata keywords | ✅ Yes | ❌ No | ❌ No |
| Robots config | ✅ Full | ❌ Missing | ❌ Missing |
| Title template | ✅ `%s \| Site.name` | ❌ Manual per page | ❌ Manual per page |
| Header structure | ✅ Portfolio + Nav | ✅ Portfolio + Nav (just built) | ✅ Portfolio + Nav (just built) |
| Drop cap | ✅ Yes (just added) | ✅ Yes (just added) | ✅ Yes (just added) |
| About page template | ✅ Congruent | ✅ Congruent (just built) | ✅ Congruent (just built) |
| Accessibility (focus states) | ✅ Yes | ❌ No | ❌ No |
| `letter-spacing: normal` on logo | ✅ Yes | ⚠️ Needs verification | ⚠️ Needs verification |

---

## Priority 1: Design Tokens (Highest Impact)

**What:** Add a `:root` block to `globals.css` on Backbar and Hospitality, then systematically replace all hardcoded values in every CSS module file.

**Why:** This is the root cause of every color/spacing problem we hit today. One token controls one value. Change it once, it updates everywhere.

**Estimated scope:** 2–3 hours per site.

### Backbar.fyi — `app/globals.css`

**Add to top of file:**
```css
:root {
  /* Colors */
  --color-background: #fafafa;
  --color-header-footer: #001015;
  --color-accent: #a8d5ba;
  --color-text-primary: #000000;
  --color-text-secondary: #555555;
  --color-text-light: #ffffff;
  --color-border: #dddddd;

  /* Typography */
  --font-primary: var(--font-inter), 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;

  /* Spacing */
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

### Hospitality.fyi — `app/globals.css`

**Same structure, different color values:**
```css
:root {
  --color-background: #fafafa;
  --color-header-footer: #00171f;    /* Verify this against live site */
  --color-accent: #ffde59;
  --color-text-primary: #000000;
  --color-text-secondary: #6b7280;
  --color-text-light: #ffffff;
  --color-border: #e5e7eb;
  /* ... same spacing, layout, transition tokens as above */
}
```

### Then: Replace Hardcoded Values in CSS Modules

**Files to update on each site:**
- `article.module.css` (or `page.module.css`)
- `Header.module.css`
- `Footer.module.css`
- `about.module.css`
- `articles.module.css` (collection page)
- `page.module.css` (homepage)
- `not-found.module.css`
- `legal-pages.module.css`
- Every component `.module.css` file

**Before/After example (Backbar `article.module.css`):**
```css
/* BEFORE */
.title {
  font-family: var(--font-inter), 'Inter', sans-serif;
  font-size: 32px;
  font-weight: 700;
  color: #000000;
  margin-bottom: 15px;
}

/* AFTER */
.title {
  font-family: var(--font-primary);
  font-size: 2rem;
  font-weight: 700;
  color: var(--color-text-primary);
  margin-bottom: var(--spacing-md);
}
```

**Process per file:**
1. Open the CSS module
2. Replace every hex color with the corresponding `var(--color-*)` token
3. Replace every `font-family` declaration with `var(--font-primary)`
4. Replace pixel spacing with `var(--spacing-*)` tokens where practical
5. Verify site renders identically in browser
6. Commit

---

## Priority 2: PortableText Rendering

**What:** Standardize on explicit custom block renderers across all three sites.

**Why:** Explicit renderers give direct control over every block type. The drop cap selector becomes predictable. Debugging is easier because class names are visible in DevTools.

**Target pattern (from Hospitality.fyi):**

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

### Sites to update:
- **Backbar.fyi** — `app/articles/[slug]/page.tsx` — add explicit block renderers, add `.paragraph`, `.h2`, `.blockquote`, `.link` classes to `article.module.css`, update drop cap selector
- **Beverage.fyi** — `app/articles/[slug]/page.tsx` — add explicit block renderers, add corresponding classes to `page.module.css`, update drop cap selector

### CSS additions needed per site:
```css
.paragraph {
  margin: 0 0 var(--spacing-lg) 0;
}

.h2 {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--color-text-primary);
  margin: var(--spacing-2xl) 0 var(--spacing-md) 0;
}

.blockquote {
  border-left: 4px solid var(--color-accent);
  padding-left: var(--spacing-lg);
  margin: var(--spacing-xl) 0;
  font-style: italic;
  color: var(--color-text-secondary);
}

.link {
  color: var(--color-text-primary);
  text-decoration: underline;
  transition: color var(--transition-fast);
}

.link:hover {
  color: var(--color-accent);
}
```

### Drop cap selector update:
```css
/* Change from */
.body p:first-child::first-letter { }

/* Change to */
.body .paragraph:first-child::first-letter { }
```

---

## Priority 3: Metadata & SEO Parity

**What:** Add missing metadata fields to Backbar and Hospitality root layouts.

**Why:** Beverage.fyi has keywords, robots directives, author info, and a title template. The other two are missing these, which leaves SEO value on the table.

### Add to Backbar.fyi `app/layout.tsx` metadata:
```typescript
export const metadata: Metadata = {
  title: {
    default: 'Backbar.fyi | Bar Industry Insights & Spirits Education',
    template: '%s | Backbar.fyi',
  },
  // ... existing fields ...
  keywords: [
    'spirits education',
    'bar industry',
    'cocktail culture',
    'bourbon guide',
    'whiskey knowledge',
    'bartender resources',
    'distilled spirits',
    'mixology',
  ],
  authors: [{ name: 'Derek Engles' }],
  creator: 'Derek Engles',
  publisher: 'Backbar.fyi',
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
}
```

### Add to Hospitality.fyi `app/layout.tsx` metadata:
```typescript
// Same structure, different keywords:
keywords: [
  'hospitality education',
  'service excellence',
  'hotel industry',
  'restaurant management',
  'fine dining standards',
  'Forbes Travel Guide',
  'Michelin service',
  'luxury hospitality',
],
```

### Also add `display: 'swap'` to font loading on both sites:
```typescript
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',           // ← add this
  weight: ['400', '500', '700'],
  variable: '--font-inter',
})
```

---

## Priority 4: Image Component Migration

**What:** Replace plain `<img>` tags with Next.js `Image` component in article pages on Backbar and Hospitality.

**Why:** Automatic image optimization, lazy loading, WebP conversion, better Core Web Vitals. Directly impacts SEO ranking.

### Files to update:
- **Backbar.fyi** — `app/articles/[slug]/page.tsx` — main image
- **Hospitality.fyi** — `app/articles/[slug]/page.tsx` — main image

### Before:
```tsx
<img
  src={article.mainImage.asset.url}
  alt={article.mainImage.alt}
  className={styles.mainImage}
/>
```

### After:
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

### CSS consideration:
The `Image` component renders with specific dimensions. Verify that `.mainImage` CSS still produces `width: 100%; height: auto;` behavior. May need to add:
```css
.mainImage {
  width: 100%;
  height: auto;
}
```

---

## Priority 5: Accessibility Additions

**What:** Add focus states and selection styling to Backbar and Hospitality `globals.css`.

**Why:** Beverage.fyi has these. They're small additions that improve accessibility compliance and polish.

### Add to both sites' `globals.css`:
```css
:focus-visible {
  outline: 2px solid var(--color-accent);
  outline-offset: 2px;
}

::selection {
  background-color: var(--color-accent);
  color: var(--color-text-light);
}
```

---

## Execution Order

| Step | Site | Task | Est. Time |
|---|---|---|---|
| 1 | Backbar.fyi | Add `:root` tokens to globals.css | 15 min |
| 2 | Backbar.fyi | Replace hardcoded values in all CSS modules | 2–3 hrs |
| 3 | Backbar.fyi | Add explicit PortableText renderers + update CSS | 45 min |
| 4 | Backbar.fyi | Add metadata fields + `display: 'swap'` | 15 min |
| 5 | Backbar.fyi | Migrate main image to `Image` component | 20 min |
| 6 | Backbar.fyi | Add focus/selection states | 5 min |
| 7 | Backbar.fyi | Test everything, `pnpm build`, push | 30 min |
| 8 | Hospitality.fyi | Repeat steps 1–7 | ~4 hrs |

**Total estimated time: 8–10 hours across both sites.**

---

## Verification Checklist (Per Site)

After completing all changes:

- [ ] `pnpm build` completes with zero errors
- [ ] All pages render identically to before (visual regression check)
- [ ] No hardcoded hex colors remain in any CSS module
- [ ] Every CSS module references `var(--color-*)` or `var(--spacing-*)` tokens
- [ ] Drop cap renders correctly on article pages
- [ ] PortableText renders h2, blockquote, links, images, paragraphs correctly
- [ ] `Image` component loads article main images properly
- [ ] Focus states visible when tabbing through navigation
- [ ] Selection highlight uses accent color
- [ ] Header/footer colors match (both controlled by same token)
- [ ] Hero gradients start with header color token value
- [ ] Portfolio panel renders and functions correctly
- [ ] Mobile responsive on all pages
- [ ] All metadata present in page source (view-source check)

---

## What NOT to Change

This project is a refactor, not a redesign. Do not change:

- Visual appearance (colors, sizes, spacing should look identical)
- Content (all text stays the same)
- Sanity queries or data structure
- URL patterns or routing
- Deployment configuration
- Domain or DNS settings
- Any functionality users interact with

The goal: same restaurant, same menu, same food — but the kitchen is organized properly.