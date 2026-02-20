import { Metadata } from 'next'
import Link from 'next/link'
import { client } from '@/sanity/lib/client'
import { industryCollectionQuery, industryCollectionCountQuery } from '@/sanity/queries'
import { Article } from '@/types/article'
import ArticleCard from '@/components/homepage/ArticleCard'
import FilterTabs from '@/components/article/FilterTabs'
import styles from '../articles.module.css'

export const revalidate = 60

export const metadata: Metadata = {
  title: 'Industry Insights | Beverage.fyi',
  description: 'Industry analysis, trends, and editorial insights for beverage professionals. Current events and expert commentary on the drinks business.',
  alternates: {
    canonical: 'https://beverage.fyi/articles/industry',
  },
}

export default async function IndustryPage() {
  const start = 0
  const end = 12

  const articles: Article[] = await client.fetch(industryCollectionQuery, { start, end })
  const totalCount: number = await client.fetch(industryCollectionCountQuery)
  const totalPages = Math.ceil(totalCount / 12)

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>Industry Insights</h1>
        <FilterTabs activeTab="industry" />
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
          <Link href="/articles/industry/page/2" className={styles.nextButton}>
            More Articles →
          </Link>
        )}
      </footer>
    </div>
  )
}