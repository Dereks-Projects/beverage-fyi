import { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { client } from '@/sanity/lib/client'
import { collectionBySubcategoryQuery, collectionBySubcategoryCountQuery, collectionSubcategoriesQuery } from '@/sanity/queries'
import { Article } from '@/types/article'
import ArticleCard from '@/components/homepage/ArticleCard'
import SubcategoryDropdown from '@/components/article/SubcategoryDropdown'
import styles from '../../../../articles.module.css'

interface PageProps {
  params: Promise<{ subcategory: string; page: string }>
}

function slugToTitle(slug: string): string {
  return slug
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { subcategory, page } = await params
  const title = slugToTitle(subcategory)
  return {
    title: `${title} Articles - Page ${page} | Beverage.fyi`,
    description: `Explore our collection of ${title.toLowerCase()} articles. Expert education for beverage enthusiasts and industry professionals.`,
    alternates: {
      canonical: `https://beverage.fyi/articles/subcategory/${subcategory}/page/${page}`,
    },
  }
}

export default async function SubcategoryPagePaginated({ params }: PageProps) {
  const { subcategory, page } = await params
  const currentPage = parseInt(page, 10)
  const subcategoryTitle = slugToTitle(subcategory)

  if (isNaN(currentPage) || currentPage < 1) {
    notFound()
  }

  const start = (currentPage - 1) * 12
  const end = start + 12

  const articles: Article[] = await client.fetch(collectionBySubcategoryQuery, {
    subcategory: subcategoryTitle,
    start,
    end,
  })
  const totalCount: number = await client.fetch(collectionBySubcategoryCountQuery, {
    subcategory: subcategoryTitle,
  })
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
        <h1 className={styles.title}>{subcategoryTitle}</h1>
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
            href={currentPage === 2 ? `/articles/subcategory/${subcategory}` : `/articles/subcategory/${subcategory}/page/${currentPage - 1}`}
            className={styles.backButton}
          >
            ← Back
          </Link>
        ) : (
          <Link href={`/articles/subcategory/${subcategory}`} className={styles.backButton}>
            ← Back
          </Link>
        )}
        {hasNextPage && (
          <Link href={`/articles/subcategory/${subcategory}/page/${currentPage + 1}`} className={styles.nextButton}>
            More Articles →
          </Link>
        )}
      </footer>
    </div>
  )
}