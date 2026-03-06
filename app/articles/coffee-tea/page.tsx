import { Metadata } from 'next'
import Link from 'next/link'
import { client } from '@/sanity/lib/client'
import { coffeeTeaCollectionQuery, coffeeTeaCollectionCountQuery } from '@/sanity/queries'
import { Article } from '@/types/article'
import ArticleCard from '@/components/homepage/ArticleCard'
import FilterTabs from '@/components/article/FilterTabs'
import styles from '../articles.module.css'

export const revalidate = 60

export const metadata: Metadata = {
  title: 'Coffee & Tea Articles | Beverage.fyi',
  description: 'In-depth articles on coffee and tea. Origins, brewing methods, tasting guides, and the culture behind the world\'s most consumed beverages.',
  alternates: {
    canonical: 'https://beverage.fyi/articles/coffee-tea',
  },
}

export default async function CoffeeTeaPage() {
  const start = 0
  const end = 12

  const articles: Article[] = await client.fetch(coffeeTeaCollectionQuery, { start, end })
  const totalCount: number = await client.fetch(coffeeTeaCollectionCountQuery)
  const totalPages = Math.ceil(totalCount / 12)

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>Coffee &amp; Tea</h1>
        <FilterTabs activeTab="coffee-tea" />
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
          <Link href="/articles/coffee-tea/page/2" className={styles.nextButton}>
            More Articles →
          </Link>
        )}
      </footer>
    </div>
  )
}