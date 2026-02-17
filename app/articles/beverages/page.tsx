import { Metadata } from 'next'
import Link from 'next/link'
import { client } from '@/sanity/lib/client'
import { beveragesCollectionQuery, beveragesCollectionCountQuery } from '@/sanity/queries'
import { Article } from '@/types/article'
import ArticleCard from '@/components/homepage/ArticleCard'
import FilterTabs from '@/components/article/FilterTabs'
import styles from '../articles.module.css'

export const metadata: Metadata = {
  title: 'Beverage Knowledge | Beverage.fyi',
  description: 'In-depth articles on beer, sake, coffee, tea, and beverage education. Guides, history, and professional insights for enthusiasts and industry professionals.',
  alternates: {
    canonical: 'https://beverage.fyi/articles/beverages',
  },
}

export default async function BeveragesPage() {
  const start = 0
  const end = 12

  const articles: Article[] = await client.fetch(beveragesCollectionQuery, { start, end })
  const totalCount: number = await client.fetch(beveragesCollectionCountQuery)
  const totalPages = Math.ceil(totalCount / 12)

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>Beverage Knowledge</h1>
        <FilterTabs activeTab="beverages" />
      </header>

      <div className={styles.grid}>
        {articles.map((article) => (
          <ArticleCard key={article._id} article={article} />
        ))}
      </div>

      <footer className={styles.pageFooter}>
        <Link href="/articles" className={styles.backButton}>
          ← All Articles
        </Link>
        {totalPages > 1 && (
          <Link href="/articles/beverages/page/2" className={styles.nextButton}>
            More Articles →
          </Link>
        )}
      </footer>
    </div>
  )
}