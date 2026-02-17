import { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { client } from '@/sanity/lib/client'
import { beveragesCollectionQuery, beveragesCollectionCountQuery } from '@/sanity/queries'
import { Article } from '@/types/article'
import ArticleCard from '@/components/homepage/ArticleCard'
import FilterTabs from '@/components/article/FilterTabs'
import styles from '../../../articles.module.css'

interface PageProps {
  params: Promise<{ page: string }>
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { page } = await params
  return {
    title: `Beverage Knowledge - Page ${page} | Beverage.fyi`,
    description: 'In-depth articles on beer, sake, coffee, tea, and beverage education.',
    alternates: {
      canonical: `https://beverage.fyi/articles/beverages/page/${page}`,
    },
  }
}

export default async function BeveragesPagePaginated({ params }: PageProps) {
  const { page } = await params
  const currentPage = parseInt(page, 10)

  if (isNaN(currentPage) || currentPage < 1) {
    notFound()
  }

  const start = (currentPage - 1) * 12
  const end = start + 12

  const articles: Article[] = await client.fetch(beveragesCollectionQuery, { start, end })
  const totalCount: number = await client.fetch(beveragesCollectionCountQuery)

  const totalPages = Math.ceil(totalCount / 12)

  if (currentPage > totalPages) {
    notFound()
  }

  const hasPrevPage = currentPage > 1
  const hasNextPage = currentPage < totalPages

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
        {hasPrevPage ? (
          <Link
            href={currentPage === 2 ? '/articles/beverages' : `/articles/beverages/page/${currentPage - 1}`}
            className={styles.backButton}
          >
            ← Back
          </Link>
        ) : (
          <Link href="/articles/beverages" className={styles.backButton}>
            ← Back
          </Link>
        )}
        {hasNextPage && (
          <Link href={`/articles/beverages/page/${currentPage + 1}`} className={styles.nextButton}>
            More Articles →
          </Link>
        )}
      </footer>
    </div>
  )
}