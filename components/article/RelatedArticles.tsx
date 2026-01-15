import Link from 'next/link'
import Image from 'next/image'
import styles from './RelatedArticles.module.css'

interface RelatedArticle {
  _id: string
  title: string
  slug: {
    current: string
  }
  mainImage?: {
    asset: {
      url: string
    }
    alt?: string
  }
}

interface RelatedArticlesProps {
  articles: RelatedArticle[]
}

export default function RelatedArticles({ articles }: RelatedArticlesProps) {
  if (!articles || articles.length === 0) {
    return null
  }

  return (
    <section className={styles.section} aria-labelledby="related-articles-heading">
      <h2 id="related-articles-heading" className={styles.heading}>
        Related Articles
      </h2>

      <div className={styles.grid}>
        {articles.map((article) => (
          <Link
            key={article._id}
            href={`/articles/${article.slug.current}`}
            className={styles.card}
          >
            {article.mainImage?.asset?.url ? (
              <Image
                src={article.mainImage.asset.url}
                alt={article.mainImage.alt || article.title}
                width={400}
                height={250}
                className={styles.cardImage}
              />
            ) : (
              <div
                className={styles.cardImage}
                style={{ backgroundColor: 'var(--color-border)' }}
                aria-hidden="true"
              />
            )}
            <h3 className={styles.cardTitle}>{article.title}</h3>
          </Link>
        ))}
      </div>
    </section>
  )
}