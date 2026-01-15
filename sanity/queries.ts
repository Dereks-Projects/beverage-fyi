// Site configuration
const SITE_FILTER = `"beverage" in sites`
const CATEGORY_FILTER = `category in ["wine", "spirits", "beer", "sake"]`
const INDUSTRY_FILTER = `category == "industry"`
const BASE_FILTER = `_type == "article" && ${SITE_FILTER} && ${CATEGORY_FILTER}`
const INDUSTRY_BASE_FILTER = `_type == "article" && ${SITE_FILTER} && ${INDUSTRY_FILTER}`

// Reusable field projections
const ARTICLE_CARD_FIELDS = `
  _id,
  title,
  subtitle,
  slug,
  mainImage {
    asset -> {
      _id,
      url
    },
    alt
  },
  subcategory,
  category,
  publishedAt,
  author
`

const FEATURED_ARTICLE_FIELDS = `
  _id,
  title,
  subtitle,
  slug,
  mainImage {
    asset -> {
      _id,
      url
    },
    alt
  },
  subcategory,
  category,
  publishedAt,
  author,
  body
`

const ARTICLE_FULL_FIELDS = `
  _id,
  title,
  subtitle,
  slug,
  mainImage {
    asset -> {
      _id,
      url
    },
    alt
  },
  subcategory,
  category,
  tags,
  publishedAt,
  author,
  body[] {
    ...,
    _type == "image" => {
      ...,
      asset -> {
        _id,
        url
      }
    }
  }
`

// ============ HOMEPAGE QUERIES ============

// Featured article (most recent industry article)
export const featuredArticleQuery = `
  *[${INDUSTRY_BASE_FILTER}] | order(publishedAt desc)[0] {
    ${FEATURED_ARTICLE_FIELDS}
  }
`

// Fallback if no industry article exists
export const latestArticleQuery = `
  *[${BASE_FILTER}] | order(publishedAt desc)[0] {
    ${FEATURED_ARTICLE_FIELDS}
  }
`

// Sub-featured articles (next 2 industry articles)
export const subFeaturedArticlesQuery = `
  *[${INDUSTRY_BASE_FILTER}] | order(publishedAt desc)[1...3] {
    ${ARTICLE_CARD_FIELDS}
  }
`

// More articles for homepage grid (wine, spirits, beer, sake only)
export const homepageGridArticlesQuery = `
  *[${BASE_FILTER}] | order(publishedAt desc)[0...9] {
    ${ARTICLE_CARD_FIELDS}
  }
`

// ============ ARTICLE COLLECTION QUERIES ============

// All articles paginated
export const allArticlesQuery = `
  *[${BASE_FILTER}] | order(publishedAt desc) {
    ${ARTICLE_CARD_FIELDS}
  }
`

// Articles count for pagination
export const articlesCountQuery = `
  count(*[${BASE_FILTER}])
`

// Articles by subcategory
export const articlesBySubcategoryQuery = `
  *[${BASE_FILTER} && subcategory == $subcategory] | order(publishedAt desc) {
    ${ARTICLE_CARD_FIELDS}
  }
`

// Articles by tag
export const articlesByTagQuery = `
  *[${BASE_FILTER} && $tag in tags] | order(publishedAt desc) {
    ${ARTICLE_CARD_FIELDS}
  }
`

// Get all unique subcategories
export const allSubcategoriesQuery = `
  *[${BASE_FILTER}].subcategory
`

// Get all unique tags
export const allTagsQuery = `
  array::unique(*[${BASE_FILTER}].tags[])
`

// ============ SINGLE ARTICLE QUERIES ============

// Single article by slug
export const articleBySlugQuery = `
  *[_type == "article" && ${SITE_FILTER} && slug.current == $slug][0] {
    ${ARTICLE_FULL_FIELDS}
  }
`

// Related articles (same subcategory, excluding current)
export const relatedArticlesQuery = `
  *[${BASE_FILTER} && subcategory == $subcategory && slug.current != $currentSlug] | order(publishedAt desc)[0...3] {
    ${ARTICLE_CARD_FIELDS}
  }
`

// All slugs for static generation
export const allArticleSlugsQuery = `
  *[${BASE_FILTER}].slug.current
`

// ============ SITEMAP QUERIES ============

// All articles for sitemap
export const sitemapArticlesQuery = `
  *[${BASE_FILTER}] {
    "slug": slug.current,
    publishedAt
  }
`

// All subcategories for sitemap
export const sitemapSubcategoriesQuery = `
  array::unique(*[${BASE_FILTER}].subcategory)
`

// All tags for sitemap
export const sitemapTagsQuery = `
  array::unique(*[${BASE_FILTER}].tags[])
`

// ============ ARTICLE COLLECTION PAGE QUERIES ============
// These include ALL categories (wine, spirits, beer, sake, AND industry)

const ALL_CATEGORIES_FILTER = `_type == "article" && ${SITE_FILTER}`

// Paginated articles for collection page (12 per page)
export const collectionArticlesQuery = `
  *[${ALL_CATEGORIES_FILTER}] | order(publishedAt desc)[$start...$end] {
    ${ARTICLE_CARD_FIELDS}
  }
`

// Total count for pagination
export const collectionArticlesCountQuery = `
  count(*[${ALL_CATEGORIES_FILTER}])
`

// Paginated articles by subcategory
export const collectionBySubcategoryQuery = `
  *[${ALL_CATEGORIES_FILTER} && subcategory == $subcategory] | order(publishedAt desc)[$start...$end] {
    ${ARTICLE_CARD_FIELDS}
  }
`

// Count by subcategory
export const collectionBySubcategoryCountQuery = `
  count(*[${ALL_CATEGORIES_FILTER} && subcategory == $subcategory])
`

// Paginated articles by tag
export const collectionByTagQuery = `
  *[${ALL_CATEGORIES_FILTER} && $tag in tags] | order(publishedAt desc)[$start...$end] {
    ${ARTICLE_CARD_FIELDS}
  }
`

// Count by tag
export const collectionByTagCountQuery = `
  count(*[${ALL_CATEGORIES_FILTER} && $tag in tags])
`

// All subcategories (from ALL categories, for dropdown)
export const collectionSubcategoriesQuery = `
  array::unique(*[${ALL_CATEGORIES_FILTER}].subcategory)
`