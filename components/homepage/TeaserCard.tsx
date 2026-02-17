import Image from 'next/image'
import { Article } from '@/types/article'
import styles from './TeaserCard.module.css'

interface TeaserCardProps {
  article: Article
  baseUrl: string    // e.g. "https://somm.site" or "https://backbar.fyi"
  siteName: string   // e.g. "SOMM.SITE" or "BACKBAR.FYI"
}

export default function TeaserCard({ article, baseUrl, siteName }: TeaserCardProps) {
  const { title, subtitle, slug, mainImage, subcategory } = article
  const externalUrl = `${baseUrl}/articles/${slug.current}`

  return (
    <article className={styles.card}>
      <a href={externalUrl} target="_blank" rel="noopener noreferrer" className={styles.imageLink}>
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
      </a>

      <div className={styles.content}>
        <h3 className={styles.title}>
          <a href={externalUrl} target="_blank" rel="noopener noreferrer">
            {title}
          </a>
        </h3>
        {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
        <a
          href={externalUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.readOn}
        >
          Read on {siteName} →
        </a>
      </div>
    </article>
  )
}