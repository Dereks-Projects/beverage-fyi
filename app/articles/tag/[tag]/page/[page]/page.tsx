import { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { client } from '@/sanity/lib/client'
import { Article } from '@/types/article'
import ArticleCard from '@/components/homepage/ArticleCard'
import styles from '../../../../articles.module.css'

interface PageProps {
  params: Promise<{ tag: string; page: string }>
}

function slugToTitle(slug: string): string {
  return slug
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { tag, page } = await params
  const title = slugToTitle(tag)
  return {
    title: `${title} Articles - Page ${page} | Beverage.fyi`,
    description: `Explore our collection of articles tagged with ${title.toLowerCase()}.`,
    alternates: {
      canonical: `https://beverage.fyi/articles/tag/${tag}/page/${page}`,
    },
  }
}

export default async function TagPagePaginated({ params }: PageProps) {
  const { tag, page } = await params
  const currentPage = parseInt(page, 10)
  const queryTag = tag.replace(/-/g, ' ')
  const tagTitle = slugToTitle(tag)

  if (isNaN(currentPage) || currentPage < 1) {
    notFound()
  }

  const start = (currentPage - 1) * 12
  const end = start + 12

  // Query defined inline with values interpolated directly (no parameters)
  const articlesQuery = `
    *[_type == "article" && "beverage" in sites && "${queryTag}" in tags] | order(publishedAt desc)[${start}...${end}] {
      _id,
      title,
      subtitle,
      slug,
      mainImage {
        asset -> {
          _id,
          url
        },
        alt
      },
      subcategory,
      category,
      publishedAt,
      author
    }
  `

  const countQuery = `
    count(*[_type == "article" && "beverage" in sites && "${queryTag}" in tags])
  `

  const articles: Article[] = await client.fetch(articlesQuery)
  const totalCount: number = await client.fetch(countQuery)

  const totalPages = Math.ceil(totalCount / 12)

  if (currentPage > totalPages || articles.length === 0) {
    notFound()
  }

  const hasPrevPage = currentPage > 1
  const hasNextPage = currentPage < totalPages

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>{tagTitle}</h1>
        <nav className={styles.filterNav}>
          <Link href="/articles" className={styles.filterButton}>
            ← All Articles
          </Link>
        </nav>
      </header>

      <div className={styles.grid}>
        {articles.map((article) => (
          <ArticleCard key={article._id} article={article} />
        ))}
      </div>

      <footer className={styles.pageFooter}>
        {hasPrevPage ? (
          <Link
            href={currentPage === 2 ? `/articles/tag/${tag}` : `/articles/tag/${tag}/page/${currentPage - 1}`}
            className={styles.backButton}
          >
            ← Back
          </Link>
        ) : (
          <Link href={`/articles/tag/${tag}`} className={styles.backButton}>
            ← Back
          </Link>
        )}
        {hasNextPage && (
          <Link href={`/articles/tag/${tag}/page/${currentPage + 1}`} className={styles.nextButton}>
            More Articles →
          </Link>
        )}
      </footer>
    </div>
  )
}