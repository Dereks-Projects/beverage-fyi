import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { PortableText, PortableTextComponents } from '@portabletext/react'
import { client } from '@/sanity/lib/client'
import { articleBySlugQuery, relatedArticlesQuery } from '@/sanity/queries'
import { Article } from '@/types/article'
import RelatedArticles from '@/components/article/RelatedArticles'
import styles from './page.module.css'

interface ArticlePageProps {
  params: Promise<{ slug: string }>
}

function formatDate(dateString: string): string {
  const date = new Date(dateString)
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

export async function generateMetadata({ params }: ArticlePageProps): Promise<Metadata> {
  const { slug } = await params
  const article: Article | null = await client.fetch(articleBySlugQuery, { slug })

  if (!article) {
    return {
      title: 'Article Not Found | Beverage.fyi',
    }
  }

  const articleUrl = `https://beverage.fyi/articles/${slug}`
  const imageUrl = article.mainImage?.asset?.url

  return {
    title: `${article.title} | Beverage.fyi`,
    description: article.subtitle || 'Wine, spirits, beer, and sake education.',
    alternates: {
      canonical: articleUrl,
    },
    openGraph: {
      type: 'article',
      title: article.title,
      description: article.subtitle || 'Wine, spirits, beer, and sake education.',
      url: articleUrl,
      siteName: 'Beverage.fyi',
      publishedTime: article.publishedAt,
      authors: [article.author || 'Beverage.fyi'],
      images: imageUrl
        ? [
            {
              url: imageUrl,
              width: 1200,
              height: 630,
              alt: article.mainImage?.alt || article.title,
            },
          ]
        : [],
    },
    twitter: {
      card: 'summary_large_image',
      title: article.title,
      description: article.subtitle || 'Wine, spirits, beer, and sake education.',
      images: imageUrl ? [imageUrl] : [],
    },
  }
}

const portableTextComponents: PortableTextComponents = {
  types: {
    image: ({ value }: { value: { asset?: { url?: string }; alt?: string; caption?: string } }) => (
      <figure className={styles.bodyImage}>
        <img src={value.asset?.url} alt={value.alt || ''} />
        {value.caption && <figcaption>{value.caption}</figcaption>}
      </figure>
    ),
  },
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params
  const article: Article | null = await client.fetch(articleBySlugQuery, { slug })

  if (!article) {
    notFound()
  }

  let relatedArticles: Article[] = []

  if (article.subcategory) {
    relatedArticles = await client.fetch(relatedArticlesQuery, {
      subcategory: article.subcategory,
      currentSlug: slug,
    })
  }

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.subtitle || '',
    author: {
      '@type': 'Person',
      name: article.author || 'Beverage.fyi',
    },
    datePublished: article.publishedAt,
    image: article.mainImage?.asset?.url,
    publisher: {
      '@type': 'Organization',
      name: 'Beverage.fyi',
      url: 'https://beverage.fyi',
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://beverage.fyi/articles/${article.slug?.current}`,
    },
  }

  const breadcrumbItems = [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: 'https://beverage.fyi',
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Articles',
      item: 'https://beverage.fyi/articles',
    },
  ]

  if (article.subcategory) {
    breadcrumbItems.push({
      '@type': 'ListItem',
      position: 3,
      name: article.subcategory,
      item: `https://beverage.fyi/articles/subcategory/${article.subcategory.toLowerCase().replace(/\s+/g, '-')}`,
    })
    breadcrumbItems.push({
      '@type': 'ListItem',
      position: 4,
      name: article.title,
      item: `https://beverage.fyi/articles/${article.slug?.current}`,
    })
  } else {
    breadcrumbItems.push({
      '@type': 'ListItem',
      position: 3,
      name: article.title,
      item: `https://beverage.fyi/articles/${article.slug?.current}`,
    })
  }

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbItems,
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <article className={styles.article}>
        <header className={styles.header}>
          <nav className={styles.breadcrumb} aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span className={styles.breadcrumbSeparator}>/</span>
            <Link href="/articles">Articles</Link>
            {article.subcategory && (
              <>
                <span className={styles.breadcrumbSeparator}>/</span>
                <Link
                  href={`/articles/subcategory/${article.subcategory.toLowerCase().replace(/\s+/g, '-')}`}
                >
                  {article.subcategory}
                </Link>
              </>
            )}
          </nav>

          <h1 className={styles.title}>{article.title}</h1>

          {article.subtitle && <p className={styles.subtitle}>{article.subtitle}</p>}

          <div className={styles.meta}>
            {article.author && <span className={styles.author}>By {article.author}</span>}
            {article.author && article.publishedAt && (
              <span className={styles.metaSeparator}>•</span>
            )}
            {article.publishedAt && (
              <time className={styles.publishedDate} dateTime={article.publishedAt}>
                {formatDate(article.publishedAt)}
              </time>
            )}
          </div>
        </header>

        {article.mainImage?.asset?.url && (
          <div className={styles.imageWrapper}>
            <Image
              src={article.mainImage.asset.url}
              alt={article.mainImage.alt || article.title}
              width={800}
              height={450}
              className={styles.mainImage}
              priority
            />
          </div>
        )}

        <div className={styles.body}>
          {article.body && <PortableText value={article.body} components={portableTextComponents} />}
        </div>

        {article.tags && article.tags.length > 0 && (
          <div className={styles.tags}>
            <span className={styles.tagsLabel}>Tags:</span>
            {article.tags.map((tag: string) => (
              <Link
                key={tag}
                href={`/articles/tag/${tag.toLowerCase().replace(/\s+/g, '-')}`}
                className={styles.tagLink}
              >
                {tag}
              </Link>
            ))}
          </div>
        )}

        <RelatedArticles articles={relatedArticles} />

        <footer className={styles.articleFooter}>
          <Link href="/articles" className={styles.backLink}>
            ← Back to Articles
          </Link>
        </footer>
      </article>
    </>
  )
}