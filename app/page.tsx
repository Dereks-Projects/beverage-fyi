import Link from 'next/link'
import { client } from '@/sanity/lib/client'
import {
  featuredArticleQuery,
  latestArticleQuery,
  subFeaturedArticlesQuery,
  homepageGridArticlesQuery,
} from '@/sanity/queries'
import { Article } from '@/types/article'
import FeaturedArticle from '@/components/homepage/FeaturedArticle'
import SubFeaturedArticles from '@/components/homepage/SubFeaturedArticles'
import ArticleGrid from '@/components/homepage/ArticleGrid'
import styles from './page.module.css'

export const revalidate = 60

async function getHomepageData() {
  let featured: Article | null = await client.fetch(featuredArticleQuery)

  if (!featured) {
    featured = await client.fetch(latestArticleQuery)
  }

  const subFeatured: Article[] = await client.fetch(subFeaturedArticlesQuery)
  const gridArticles: Article[] = await client.fetch(homepageGridArticlesQuery)

  return { featured, subFeatured, gridArticles }
}

export default async function HomePage() {
  const { featured, subFeatured, gridArticles } = await getHomepageData()

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <section className={styles.hero}>
          <div className={styles.featuredColumn}>
            {featured && <FeaturedArticle article={featured} />}
          </div>
          <div className={styles.subFeaturedColumn}>
            <SubFeaturedArticles articles={subFeatured} />
          </div>
        </section>

        <ArticleGrid articles={gridArticles} />

        <div className={styles.moreButtonWrapper}>
          <Link href="/articles" className={styles.moreButton}>
            More
          </Link>
        </div>
      </div>
    </div>
  )
}