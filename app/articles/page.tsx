import { Metadata } from 'next'
import Link from 'next/link'
import { client } from '@/sanity/lib/client'
import { Article } from '@/types/article'
import ArticleCard from '@/components/homepage/ArticleCard'
import styles from './articles.module.css'

export const metadata: Metadata = {
  title: 'Articles | Beverage.fyi',
  description: 'Explore our collection of beverage articles covering wine, spirits, beer, sake, and industry insights.',
  alternates: {
    canonical: 'https://beverage.fyi/articles',
  },
}

export default async function ArticlesPage() {
  // Query for all articles (no tag filter)
  const articlesQuery = `
    *[_type == "article" && "beverage" in sites] | order(publishedAt desc)[0...12] {
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

  const countQuery = `
    count(*[_type == "article" && "beverage" in sites])
  `

  const articles: Article[] = await client.fetch(articlesQuery)
  const totalCount: number = await client.fetch(countQuery)
  const totalPages = Math.ceil(totalCount / 12)

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>All Articles</h1>
      </header>

      <div className={styles.grid}>
        {articles.map((article) => (
          <ArticleCard key={article._id} article={article} />
        ))}
      </div>

      <footer className={styles.pageFooter}>
        <Link href="/" className={styles.backButton}>
          ← Home
        </Link>
        {totalPages > 1 && (
          <Link href="/articles/page/2" className={styles.nextButton}>
            More Articles →
          </Link>
        )}
      </footer>
    </div>
  )
}