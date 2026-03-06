import { Metadata } from 'next'
import Link from 'next/link'
import { client } from '@/sanity/lib/client'
import { sakeCollectionQuery, sakeCollectionCountQuery } from '@/sanity/queries'
import { Article } from '@/types/article'
import ArticleCard from '@/components/homepage/ArticleCard'
import FilterTabs from '@/components/article/FilterTabs'
import styles from '../articles.module.css'

export const revalidate = 60

export const metadata: Metadata = {
  title: 'Sake Articles | Beverage.fyi',
  description: 'In-depth articles on sake, Japanese rice wine, brewing traditions, and tasting guides. From junmai to daiginjo.',
  alternates: {
    canonical: 'https://beverage.fyi/articles/sake',
  },
}

export default async function SakePage() {
  const start = 0
  const end = 12

  const articles: Article[] = await client.fetch(sakeCollectionQuery, { start, end })
  const totalCount: number = await client.fetch(sakeCollectionCountQuery)
  const totalPages = Math.ceil(totalCount / 12)

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>Sake</h1>
        <FilterTabs activeTab="sake" />
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
          <Link href="/articles/sake/page/2" className={styles.nextButton}>
            More Articles →
          </Link>
        )}
      </footer>
    </div>
  )
}