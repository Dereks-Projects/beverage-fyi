import { Article } from '@/types/article'
import TeaserCard from './TeaserCard'
import styles from './TeaserSection.module.css'

interface TeaserSectionProps {
  spiritsArticles: Article[]
  wineArticles: Article[]
}

export default function TeaserSection({ spiritsArticles, wineArticles }: TeaserSectionProps) {
  // If both arrays are empty, don't render the section at all
  if (
    (!spiritsArticles || spiritsArticles.length === 0) &&
    (!wineArticles || wineArticles.length === 0)
  ) {
    return null
  }

  return (
    <section className={styles.band}>
      {/* Spirits row — Backbar.fyi */}
      {spiritsArticles && spiritsArticles.length > 0 && (
        <div className={styles.row}>
          <h2 className={styles.rowTitle}>
            Spirits Articles from{' '}
            <a
              href="https://backbar.fyi"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.siteLink}
            >
              Backbar.fyi
            </a>
          </h2>
          <div className={styles.grid}>
            {spiritsArticles.map((article) => (
              <TeaserCard
                key={article._id}
                article={article}
                baseUrl="https://backbar.fyi"
                siteName="BACKBAR.FYI"
              />
            ))}
          </div>
        </div>
      )}

      {/* Wine row — Somm.Site */}
      {wineArticles && wineArticles.length > 0 && (
        <div className={styles.row}>
          <h2 className={styles.rowTitle}>
            Wine Articles from{' '}
            <a
              href="https://somm.site"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.siteLink}
            >
              Somm.Site
            </a>
          </h2>
          <div className={styles.grid}>
            {wineArticles.map((article) => (
              <TeaserCard
                key={article._id}
                article={article}
                baseUrl="https://somm.site"
                siteName="SOMM.SITE"
              />
            ))}
          </div>
        </div>
      )}
    </section>
  )
}