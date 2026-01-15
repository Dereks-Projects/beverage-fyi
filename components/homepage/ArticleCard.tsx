import Link from 'next/link'
import Image from 'next/image'
import { Article } from '@/types/article'
import styles from './ArticleCard.module.css'

interface ArticleCardProps {
  article: Article
}

export default function ArticleCard({ article }: ArticleCardProps) {
  const { title, subtitle, slug, mainImage, subcategory } = article

  return (
    <article className={styles.card}>
      <Link href={`/articles/${slug.current}`} className={styles.imageLink}>
        <div className={styles.imageWrapper}>
          {mainImage?.asset?.url ? (
            <Image
              src={mainImage.asset.url}
              alt={mainImage.alt || title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className={styles.image}
            />
          ) : (
            <div className={styles.placeholder} />
          )}
          {subcategory && (
            <span className={styles.subcategory}>{subcategory}</span>
          )}
        </div>
      </Link>

      <div className={styles.content}>
        <h3 className={styles.title}>
          <Link href={`/articles/${slug.current}`}>{title}</Link>
        </h3>
        {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
        <Link href={`/articles/${slug.current}`} className={styles.readMore}>
          Read More
        </Link>
      </div>
    </article>
  )
}