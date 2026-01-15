// ============ HOMEPAGE QUERIES ============

// Featured article (most recent industry article)
export const featuredArticleQuery = `
  *[_type == "article" && "beverage" in sites && category == "industry"] | order(publishedAt desc)[0] {
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
  }
`

// Fallback if no industry article exists
export const latestArticleQuery = `
  *[_type == "article" && "beverage" in sites && category in ["wine", "spirits", "beer", "sake"]] | order(publishedAt desc)[0] {
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
  }
`

// Sub-featured articles (next 2 industry articles)
export const subFeaturedArticlesQuery = `
  *[_type == "article" && "beverage" in sites && category == "industry"] | order(publishedAt desc)[1...3] {
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
  }
`

// More articles for homepage grid (wine, spirits, beer, sake only)
export const homepageGridArticlesQuery = `
  *[_type == "article" && "beverage" in sites && category in ["wine", "spirits", "beer", "sake"]] | order(publishedAt desc)[0...9] {
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
  }
`

// ============ ARTICLE COLLECTION QUERIES ============

// All articles paginated
export const allArticlesQuery = `
  *[_type == "article" && "beverage" in sites && category in ["wine", "spirits", "beer", "sake"]] | order(publishedAt desc) {
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
  }
`

// Articles count for pagination
export const articlesCountQuery = `
  count(*[_type == "article" && "beverage" in sites && category in ["wine", "spirits", "beer", "sake"]])
`

// Articles by subcategory
export const articlesBySubcategoryQuery = `
  *[_type == "article" && "beverage" in sites && category in ["wine", "spirits", "beer", "sake"] && subcategory == $subcategory] | order(publishedAt desc) {
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
  }
`

// Articles by tag
export const articlesByTagQuery = `
  *[_type == "article" && "beverage" in sites && category in ["wine", "spirits", "beer", "sake"] && $tag in tags] | order(publishedAt desc) {
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
  }
`

// Get all unique subcategories
export const allSubcategoriesQuery = `
  *[_type == "article" && "beverage" in sites && category in ["wine", "spirits", "beer", "sake"]].subcategory
`

// Get all unique tags
export const allTagsQuery = `
  array::unique(*[_type == "article" && "beverage" in sites && category in ["wine", "spirits", "beer", "sake"]].tags[])
`

// ============ SINGLE ARTICLE QUERIES ============

// Single article by slug
export const articleBySlugQuery = `
  *[_type == "article" && "beverage" in sites && slug.current == $slug][0] {
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
  }
`

// Related articles (same subcategory, excluding current)
export const relatedArticlesQuery = `
  *[_type == "article" && "beverage" in sites && category in ["wine", "spirits", "beer", "sake"] && subcategory == $subcategory && slug.current != $currentSlug] | order(publishedAt desc)[0...3] {
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
  }
`

// All slugs for static generation
export const allArticleSlugsQuery = `
  *[_type == "article" && "beverage" in sites && category in ["wine", "spirits", "beer", "sake"]].slug.current
`

// ============ SITEMAP QUERIES ============

// All articles for sitemap
export const sitemapArticlesQuery = `
  *[_type == "article" && "beverage" in sites && category in ["wine", "spirits", "beer", "sake"]] {
    "slug": slug.current,
    publishedAt
  }
`

// All subcategories for sitemap
export const sitemapSubcategoriesQuery = `
  array::unique(*[_type == "article" && "beverage" in sites && category in ["wine", "spirits", "beer", "sake"]].subcategory)
`

// All tags for sitemap
export const sitemapTagsQuery = `
  array::unique(*[_type == "article" && "beverage" in sites && category in ["wine", "spirits", "beer", "sake"]].tags[])
`

// ============ ARTICLE COLLECTION PAGE QUERIES ============
// These include ALL categories (wine, spirits, beer, sake, AND industry)

// Paginated articles for collection page (12 per page)
export const collectionArticlesQuery = `
  *[_type == "article" && "beverage" in sites] | order(publishedAt desc)[$start...$end] {
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
  }
`

// Total count for pagination
export const collectionArticlesCountQuery = `
  count(*[_type == "article" && "beverage" in sites])
`

// Paginated articles by subcategory
export const collectionBySubcategoryQuery = `
  *[_type == "article" && "beverage" in sites && subcategory == $subcategory] | order(publishedAt desc)[$start...$end] {
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
  }
`

// Count by subcategory
export const collectionBySubcategoryCountQuery = `
  count(*[_type == "article" && "beverage" in sites && subcategory == $subcategory])
`

// Paginated articles by tag
export const collectionByTagQuery = `
  *[_type == "article" && "beverage" in sites && $tag in tags] | order(publishedAt desc)[$start...$end] {
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
  }
`

// Count by tag
export const collectionByTagCountQuery = `
  count(*[_type == "article" && "beverage" in sites && $tag in tags])
`

// All subcategories (from ALL categories, for dropdown)
export const collectionSubcategoriesQuery = `
  array::unique(*[_type == "article" && "beverage" in sites].subcategory)
`