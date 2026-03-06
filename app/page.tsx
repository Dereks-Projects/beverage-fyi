import Link from 'next/link'
import { client } from '@/sanity/lib/client'
import { homepageArticlesQuery } from '@/sanity/queries'
import { Article } from '@/types/article'
import FeaturedArticle from '@/components/homepage/FeaturedArticle'
import SubFeaturedArticles from '@/components/homepage/SubFeaturedArticles'
import ArticleGrid from '@/components/homepage/ArticleGrid'
import styles from './page.module.css'

export const revalidate = 60

async function getHomepageData() {
  const articles: Article[] = await client.fetch(homepageArticlesQuery)

  const featured = articles[0] || null
  const subFeatured = articles.slice(1, 3)
  const gridArticles = articles.slice(3, 12)

  return { featured, subFeatured, gridArticles }
}

export default async function HomePage() {
  const { featured, subFeatured, gridArticles } = await getHomepageData()

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        {/* Hero — Most recent article featured, next 2 subfeatured */}
        <section className={styles.hero}>
          <div className={styles.featuredColumn}>
            {featured && <FeaturedArticle article={featured} />}
          </div>
          <div className={styles.subFeaturedColumn}>
            <SubFeaturedArticles articles={subFeatured} />
          </div>
        </section>

        {/* Grid — Next 9 most recent articles */}
        <ArticleGrid articles={gridArticles} title="Explore More" />

        <div className={styles.moreButtonWrapper}>
          <Link href="/articles" className={styles.moreButton}>
            More Articles
          </Link>
        </div>
      </div>
    </div>
  )
}