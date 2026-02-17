import { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { client } from '@/sanity/lib/client'
import { collectionBySubcategoryQuery, collectionBySubcategoryCountQuery, collectionSubcategoriesQuery } from '@/sanity/queries'
import { Article } from '@/types/article'
import ArticleCard from '@/components/homepage/ArticleCard'
import SubcategoryDropdown from '@/components/article/SubcategoryDropdown'
import styles from '../../articles.module.css'

interface PageProps {
  params: Promise<{ subcategory: string }>
}

function slugToTitle(slug: string): string {
  return slug
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { subcategory } = await params
  const title = slugToTitle(subcategory)
  return {
    title: `${title} Articles | Beverage.fyi`,
    description: `Explore our collection of ${title.toLowerCase()} articles. Expert education for beverage enthusiasts and industry professionals.`,
    alternates: {
      canonical: `https://beverage.fyi/articles/subcategory/${subcategory}`,
    },
  }
}

export default async function SubcategoryPage({ params }: PageProps) {
  const { subcategory } = await params
  const subcategoryTitle = slugToTitle(subcategory)

  const articles: Article[] = await client.fetch(collectionBySubcategoryQuery, {
    subcategory: subcategoryTitle,
    start: 0,
    end: 12,
  })
  const totalCount: number = await client.fetch(collectionBySubcategoryCountQuery, {
    subcategory: subcategoryTitle,
  })
  const subcategories: string[] = await client.fetch(collectionSubcategoriesQuery)

  if (articles.length === 0) {
    notFound()
  }

  const totalPages = Math.ceil(totalCount / 12)

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
        <Link href="/articles" className={styles.backButton}>
          ← Back
        </Link>
        {totalPages > 1 && (
          <Link href={`/articles/subcategory/${subcategory}/page/2`} className={styles.nextButton}>
            More Articles →
          </Link>
        )}
      </footer>
    </div>
  )
}