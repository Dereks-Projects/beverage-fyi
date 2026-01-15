import { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { client } from '@/sanity/lib/client'
import { Article } from '@/types/article'
import ArticleCard from '@/components/homepage/ArticleCard'
import styles from './articles.module.css'

interface PageProps {
  params: Promise<{ tag: string }>
}

function slugToTitle(slug: string): string {
  return slug
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { tag } = await params
  const title = slugToTitle(tag)
  return {
    title: `${title} Articles | Beverage.fyi`,
    description: `Explore our collection of articles tagged with ${title.toLowerCase()}.`,
    alternates: {
      canonical: `https://beverage.fyi/articles/tag/${tag}`,
    },
  }
}

export default async function TagPage({ params }: PageProps) {
  const { tag } = await params
  const queryTag = tag.replace(/-/g, ' ')
  const tagTitle = slugToTitle(tag)

  // Query defined inline with value interpolated directly (no parameters)
  const articlesQuery = `
    *[_type == "article" && "beverage" in sites && "${queryTag}" in tags] | order(publishedAt desc)[0...12] {
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

  if (!articles || articles.length === 0) {
    notFound()
  }

  const totalPages = Math.ceil(totalCount / 12)

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
        <Link href="/articles" className={styles.backButton}>
          ← Back
        </Link>
        {totalPages > 1 && (
          <Link href={`/articles/tag/${tag}/page/2`} className={styles.nextButton}>
            More Articles →
          </Link>
        )}
      </footer>
    </div>
  )
}