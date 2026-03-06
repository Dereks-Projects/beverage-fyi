import { Metadata } from 'next'
import Link from 'next/link'
import { client } from '@/sanity/lib/client'
import { spiritsCollectionQuery, spiritsCollectionCountQuery } from '@/sanity/queries'
import { Article } from '@/types/article'
import ArticleCard from '@/components/homepage/ArticleCard'
import FilterTabs from '@/components/article/FilterTabs'
import styles from '../articles.module.css'

export const revalidate = 60

export const metadata: Metadata = {
  title: 'Spirits Articles | Beverage.fyi',
  description: 'In-depth articles on spirits, cocktails, and distilled beverages. Whiskey, tequila, vodka, gin, rum, and more.',
  alternates: {
    canonical: 'https://beverage.fyi/articles/spirits',
  },
}

export default async function SpiritsPage() {
  const start = 0
  const end = 12

  const articles: Article[] = await client.fetch(spiritsCollectionQuery, { start, end })
  const totalCount: number = await client.fetch(spiritsCollectionCountQuery)
  const totalPages = Math.ceil(totalCount / 12)

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>Spirits</h1>
        <FilterTabs activeTab="spirits" />
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
          <Link href="/articles/spirits/page/2" className={styles.nextButton}>
            More Articles →
          </Link>
        )}
      </footer>
    </div>
  )
}