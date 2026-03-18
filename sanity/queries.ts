// ============ HOMEPAGE QUERY ============

// 12 most recent articles across all Beverage.fyi categories
// Position 0: featured | Positions 1-2: subfeatured | Positions 3-11: grid
export const homepageArticlesQuery = `
  *[_type == "article" && "beverage" in sites && category in ["industry", "beer", "spirits", "sake", "coffee-tea", "education"]] | order(publishedAt desc)[0...12] {
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
      },
      markDefs[]{
        ...,
        _type == "internalLink" => {
          ...,
          "slug": reference->slug.current,
          "docType": reference->_type
        }
      }
    },
    relatedArticles[]->{
      _id,
      title,
      "slug": slug.current
    },
    faq[] {
      question,
      answer
    }
  }
`

// Related articles (same subcategory, excluding current)
export const relatedArticlesQuery = `
  *[_type == "article" && "beverage" in sites && category in ["industry", "spirits", "beer", "sake", "coffee-tea", "education"] && subcategory == $subcategory && slug.current != $currentSlug] | order(publishedAt desc)[0...3] {
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

// ============ ARTICLE COLLECTION PAGE QUERIES ============
// Beverage.fyi owned content — all categories

// Paginated articles for collection page — ALL tab (12 per page)
export const collectionArticlesQuery = `
  *[_type == "article" && "beverage" in sites && category in ["industry", "spirits", "beer", "sake", "coffee-tea", "education"]] | order(publishedAt desc)[$start...$end] {
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

// Total count for ALL tab pagination
export const collectionArticlesCountQuery = `
  count(*[_type == "article" && "beverage" in sites && category in ["industry", "spirits", "beer", "sake", "coffee-tea", "education"]])
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

// ============ INDUSTRY INSIGHTS COLLECTION QUERIES ============

// Paginated industry articles (12 per page)
export const industryCollectionQuery = `
  *[_type == "article" && "beverage" in sites && category == "industry"] | order(publishedAt desc)[$start...$end] {
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

// Total count for Industry Insights pagination
export const industryCollectionCountQuery = `
  count(*[_type == "article" && "beverage" in sites && category == "industry"])
`

// ============ SPIRITS COLLECTION QUERIES ============

// Paginated spirits articles (12 per page)
export const spiritsCollectionQuery = `
  *[_type == "article" && "beverage" in sites && category == "spirits"] | order(publishedAt desc)[$start...$end] {
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

// Total count for Spirits pagination
export const spiritsCollectionCountQuery = `
  count(*[_type == "article" && "beverage" in sites && category == "spirits"])
`

// ============ BEER COLLECTION QUERIES ============

// Paginated beer articles (12 per page)
export const beerCollectionQuery = `
  *[_type == "article" && "beverage" in sites && category == "beer"] | order(publishedAt desc)[$start...$end] {
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

// Total count for Beer pagination
export const beerCollectionCountQuery = `
  count(*[_type == "article" && "beverage" in sites && category == "beer"])
`

// ============ SAKE COLLECTION QUERIES ============

// Paginated sake articles (12 per page)
export const sakeCollectionQuery = `
  *[_type == "article" && "beverage" in sites && category == "sake"] | order(publishedAt desc)[$start...$end] {
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

// Total count for Sake pagination
export const sakeCollectionCountQuery = `
  count(*[_type == "article" && "beverage" in sites && category == "sake"])
`

// ============ COFFEE & TEA COLLECTION QUERIES ============

// Paginated coffee-tea articles (12 per page)
export const coffeeTeaCollectionQuery = `
  *[_type == "article" && "beverage" in sites && category == "coffee-tea"] | order(publishedAt desc)[$start...$end] {
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

// Total count for Coffee & Tea pagination
export const coffeeTeaCollectionCountQuery = `
  count(*[_type == "article" && "beverage" in sites && category == "coffee-tea"])
`

// ============ WINE SHOWCASE QUERY ============

// 9 most recent wine articles from Somm.Site (for /wine showcase page)
export const wineShowcaseQuery = `
  *[_type == "article" && "somm" in sites && category == "wine"] | order(publishedAt desc)[0...9] {
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