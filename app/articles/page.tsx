import { Metadata } from 'next'
import Link from 'next/link'
import { client } from '@/sanity/lib/client'
import { collectionArticlesQuery, collectionArticlesCountQuery } from '@/sanity/queries'
import { Article } from '@/types/article'
import ArticleCard from '@/components/homepage/ArticleCard'
import FilterTabs from '@/components/article/FilterTabs'
import styles from './articles.module.css'

export const revalidate = 60

export const metadata: Metadata = {
  title: 'Article Collection | Beverage.fyi',
  description: 'Explore our collection of industry insights, beer, sake, coffee, tea, and beverage education articles.',
  alternates: {
    canonical: 'https://beverage.fyi/articles',
  },
}

export default async function ArticlesPage() {
  const start = 0
  const end = 12

  const articles: Article[] = await client.fetch(collectionArticlesQuery, { start, end })
  const totalCount: number = await client.fetch(collectionArticlesCountQuery)
  const totalPages = Math.ceil(totalCount / 12)

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>Article Collection</h1>
        <FilterTabs activeTab="all" />
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