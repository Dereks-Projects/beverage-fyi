import Link from 'next/link'
import Image from 'next/image'
import { Article } from '@/types/article'
import styles from './FeaturedArticle.module.css'

interface FeaturedArticleProps {
  article: Article
}

function getFirstSentence(body: any[] | undefined): string | null {
  if (!body || body.length === 0) return null

  // Find the first text block
  const firstBlock = body.find(
    (block) => block._type === 'block' && block.children
  )

  if (!firstBlock) return null

  // Extract text from children
  const text = firstBlock.children
    .filter((child: any) => child._type === 'span' && child.text)
    .map((child: any) => child.text)
    .join('')

  if (!text) return null

  // Get first sentence (split by . ! or ?)
  const match = text.match(/^[^.!?]+[.!?]/)
  return match ? match[0].trim() : null
}

export default function FeaturedArticle({ article }: FeaturedArticleProps) {
  const { title, subtitle, slug, mainImage, subcategory, body } = article
  const firstSentence = getFirstSentence(body)

  return (
    <article className={styles.featured}>
      <Link href={`/articles/${slug.current}`} className={styles.imageLink}>
        <div className={styles.imageWrapper}>
          {mainImage?.asset?.url ? (
            <Image
              src={mainImage.asset.url}
              alt={mainImage.alt || title}
              fill
              sizes="(max-width: 768px) 100vw, 60vw"
              className={styles.image}
              priority
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
        <h2 className={styles.title}>
          <Link href={`/articles/${slug.current}`}>{title}</Link>
        </h2>
        {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
        {firstSentence && (
          <p className={styles.firstSentence}>{firstSentence}</p>
        )}
        <Link href={`/articles/${slug.current}`} className={styles.readMore}>
          Read More
        </Link>
      </div>
    </article>
  )
}