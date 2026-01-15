import { Metadata } from 'next'
import Link from 'next/link'
import { client } from '@/sanity/lib/client'
import { collectionArticlesQuery, collectionArticlesCountQuery, collectionSubcategoriesQuery } from '@/sanity/queries'
import { Article } from '@/types/article'
import ArticleCard from '@/components/homepage/ArticleCard'
import SubcategoryDropdown from '@/components/article/SubcategoryDropdown'
import styles from './articles.module.css'

export const metadata: Metadata = {
  title: 'Article Collection | Beverage.fyi',
  description: 'Explore our collection of in-depth articles on wine, spirits, beer, and sake. Expert education for beverage enthusiasts and industry professionals.',
  alternates: {
    canonical: 'https://beverage.fyi/articles',
  },
}

export default async function ArticlesPage() {
  const articles: Article[] = await client.fetch(collectionArticlesQuery, { start: 0, end: 12 })
  const totalCount: number = await client.fetch(collectionArticlesCountQuery)
  const subcategories: string[] = await client.fetch(collectionSubcategoriesQuery)

  const totalPages = Math.ceil(totalCount / 12)

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
        <Link href="/" className={styles.backButton}>
          ← Back
        </Link>
        {totalPages > 1 && (
          <Link href="/articles/page/2" className={styles.nextButton}>
            More Articles →
          </Link>
        )}
      </footer>
    </div>
  )
}