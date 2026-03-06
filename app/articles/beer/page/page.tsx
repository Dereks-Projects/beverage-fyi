import { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { client } from '@/sanity/lib/client'
import { beerCollectionQuery, beerCollectionCountQuery } from '@/sanity/queries'
import { Article } from '@/types/article'
import ArticleCard from '@/components/homepage/ArticleCard'
import FilterTabs from '@/components/article/FilterTabs'
import styles from '../../../articles.module.css'

export const revalidate = 60

interface PageProps {
  params: Promise<{ page: string }>
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { page } = await params
  return {
    title: `Beer Articles - Page ${page} | Beverage.fyi`,
    description: 'In-depth articles on beer styles, brewing history, production, and tasting.',
    alternates: {
      canonical: `https://beverage.fyi/articles/beer/page/${page}`,
    },
  }
}

export default async function BeerPagePaginated({ params }: PageProps) {
  const { page } = await params
  const currentPage = parseInt(page, 10)

  if (isNaN(currentPage) || currentPage < 1) {
    notFound()
  }

  const start = (currentPage - 1) * 12
  const end = start + 12

  const articles: Article[] = await client.fetch(beerCollectionQuery, { start, end })
  const totalCount: number = await client.fetch(beerCollectionCountQuery)

  const totalPages = Math.ceil(totalCount / 12)

  if (currentPage > totalPages) {
    notFound()
  }

  const hasPrevPage = currentPage > 1
  const hasNextPage = currentPage < totalPages

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>Beer</h1>
        <FilterTabs activeTab="beer" />
      </header>

      <div className={styles.grid}>
        {articles.map((article) => (
          <ArticleCard key={article._id} article={article} />
        ))}
      </div>

      <footer className={styles.pageFooter}>
        {hasPrevPage ? (
          <Link
            href={currentPage === 2 ? '/articles/beer' : `/articles/beer/page/${currentPage - 1}`}
            className={styles.backButton}
          >
            ← Back
          </Link>
        ) : (
          <Link href="/articles/beer" className={styles.backButton}>
            ← Back
          </Link>
        )}
        {hasNextPage && (
          <Link href={`/articles/beer/page/${currentPage + 1}`} className={styles.nextButton}>
            More Articles →
          </Link>
        )}
      </footer>
    </div>
  )
}