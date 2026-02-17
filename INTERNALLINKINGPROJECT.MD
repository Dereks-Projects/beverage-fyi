# Internal Linking Implementation Guide

## What Was Done on SOMM.SITE

Three changes were made to add an internal article linking system. Apply the same pattern to this site.

---

## Change 1: Schema — Add Internal Link to Rich Text Editor

In the article schema file (`article.ts` or equivalent), the `body` field's block type needs a `marks.annotations` array with two link types:

- **External Link** — standard URL field (may already exist)
- **Internal Article Link** — a reference field that points to other articles (and study guides if applicable)

This gives the Studio editor two link options when highlighting text.

## Change 2: Frontend Page — Render Internal Links

In the article page component, two things need updating:

**GROQ query:** The body must resolve internal link references. Add this to the body projection:
```
markDefs[]{
  ...,
  _type == "internalLink" => {
    ...,
    "slug": reference->slug.current,
    "docType": reference->_type
  }
}
```

**PortableText components:** Add a `marks.internalLink` renderer that turns the reference into a Next.js `<Link>` using the resolved slug.

## Change 3: Frontend Page — Two Related Article Systems

**Hand-picked (Related Reading box):** Fetch `relatedArticles[]->{ title, slug }` from the article. Display as a light gray box with linked titles below the first in-body image. If none are selected, show nothing.

**Auto-pulled (bottom 3 cards):** Fetch 3 most recent articles from the same subcategory (not just category). Display as image cards at the bottom. This replaces any existing "same category" logic.

---

## Files Affected
- Article schema (`sanity/schemaTypes/article.ts`)
- Article page component (`app/articles/[slug]/page.tsx`)
- Article page CSS (`app/articles/[slug]/article.module.css`)

## Notes
- Existing articles are unaffected — new fields are optional
- Related Reading box only appears when hand-picked articles are selected
- Internal links in body text render as standard text links with subtle underline
- No database migration needed — these are additive schema changes