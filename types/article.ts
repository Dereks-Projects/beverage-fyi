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