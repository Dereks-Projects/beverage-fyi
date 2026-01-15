import Link from 'next/link'
import Image from 'next/image'
import { Article } from '@/types/article'
import styles from './SubFeaturedArticles.module.css'

interface SubFeaturedArticlesProps {
  articles: Article[]
}

export default function SubFeaturedArticles({ articles }: SubFeaturedArticlesProps) {
  if (!articles || articles.length === 0) return null

  return (
    <div className={styles.wrapper}>
      {articles.map((article) => (
        <article key={article._id} className={styles.article}>
          <Link href={`/articles/${article.slug.current}`} className={styles.imageLink}>
            <div className={styles.imageWrapper}>
              {article.mainImage?.asset?.url ? (
                <Image
                  src={article.mainImage.asset.url}
                  alt={article.mainImage.alt || article.title}
                  fill
                  sizes="(max-width: 768px) 100px, 200px"
                  className={styles.image}
                />
              ) : (
                <div className={styles.placeholder} />
              )}
              {article.subcategory && (
                <span className={styles.subcategory}>{article.subcategory}</span>
              )}
            </div>
          </Link>

          <div className={styles.content}>
            <h3 className={styles.title}>
              <Link href={`/articles/${article.slug.current}`}>
                {article.title}
              </Link>
            </h3>
            {article.subtitle && (
              <p className={styles.subtitle}>{article.subtitle}</p>
            )}
            <Link
              href={`/articles/${article.slug.current}`}
              className={styles.readMore}
            >
              Read More
            </Link>
          </div>
        </article>
      ))}
    </div>
  )
}