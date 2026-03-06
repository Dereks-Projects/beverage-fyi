import { Metadata } from 'next'
import Link from 'next/link'
import { client } from '@/sanity/lib/client'
import { beerCollectionQuery, beerCollectionCountQuery } from '@/sanity/queries'
import { Article } from '@/types/article'
import ArticleCard from '@/components/homepage/ArticleCard'
import FilterTabs from '@/components/article/FilterTabs'
import styles from '../articles.module.css'

export const revalidate = 60

export const metadata: Metadata = {
  title: 'Beer Articles | Beverage.fyi',
  description: 'In-depth articles on beer styles, brewing history, production, and tasting. From stout to lager, pilsner to IPA.',
  alternates: {
    canonical: 'https://beverage.fyi/articles/beer',
  },
}

export default async function BeerPage() {
  const start = 0
  const end = 12

  const articles: Article[] = await client.fetch(beerCollectionQuery, { start, end })
  const totalCount: number = await client.fetch(beerCollectionCountQuery)
  const totalPages = Math.ceil(totalCount / 12)

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
        <Link href="/articles" className={styles.backButton}>
          ← All Articles
        </Link>
        {totalPages > 1 && (
          <Link href="/articles/beer/page/2" className={styles.nextButton}>
            More Articles →
          </Link>
        )}
      </footer>
    </div>
  )
}