import { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { client } from '@/sanity/lib/client'
import { collectionArticlesQuery, collectionArticlesCountQuery, collectionSubcategoriesQuery } from '@/sanity/queries'
import { Article } from '@/types/article'
import ArticleCard from '@/components/homepage/ArticleCard'
import SubcategoryDropdown from '@/components/article/SubcategoryDropdown'
import styles from '../../articles.module.css'

interface PageProps {
  params: Promise<{ page: string }>
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { page } = await params
  return {
    title: `Article Collection - Page ${page} | Beverage.fyi`,
    description: 'Explore our collection of in-depth articles on wine, spirits, beer, and sake.',
    alternates: {
      canonical: `https://beverage.fyi/articles/page/${page}`,
    },
  }
}

export default async function ArticlesPagePaginated({ params }: PageProps) {
  const { page } = await params
  const currentPage = parseInt(page, 10)

  if (isNaN(currentPage) || currentPage < 1) {
    notFound()
  }

  const start = (currentPage - 1) * 12
  const end = start + 12

  const articles: Article[] = await client.fetch(collectionArticlesQuery, { start, end })
  const totalCount: number = await client.fetch(collectionArticlesCountQuery)
  const subcategories: string[] = await client.fetch(collectionSubcategoriesQuery)

  const totalPages = Math.ceil(totalCount / 12)

  if (currentPage > totalPages) {
    notFound()
  }

  const hasPrevPage = currentPage > 1
  const hasNextPage = currentPage < totalPages

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>Article Collection</h1>
        <SubcategoryDropdown subcategories={subcategories.filter(Boolean).sort()} />
      </header>

      <div className={styles.grid}>
        {articles.map((article) => (
          <ArticleCard key={article._id} article={article} />
        ))}
      </div>

      <footer className={styles.pageFooter}>
        {hasPrevPage ? (
          <Link
            href={currentPage === 2 ? '/articles' : `/articles/page/${currentPage - 1}`}
            className={styles.backButton}
          >
            ← Back
          </Link>
        ) : (
          <Link href="/" className={styles.backButton}>
            ← Back
          </Link>
        )}
        {hasNextPage && (
          <Link href={`/articles/page/${currentPage + 1}`} className={styles.nextButton}>
            More Articles →
          </Link>
        )}
      </footer>
    </div>
  )
}