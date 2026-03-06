import { Metadata } from 'next'
import { client } from '@/sanity/lib/client'
import { wineShowcaseQuery } from '@/sanity/queries'
import { Article } from '@/types/article'
import TeaserCard from '@/components/homepage/TeaserCard'
import styles from './wine.module.css'

export const revalidate = 60

export const metadata: Metadata = {
  title: 'Wine | Beverage.fyi',
  description: 'Explore wine regions, grape varieties, and tasting guides from SOMM.SITE. Expert wine education from the Informative Media ecosystem.',
  alternates: {
    canonical: 'https://beverage.fyi/wine',
  },
}

export default async function WinePage() {
  const articles: Article[] = await client.fetch(wineShowcaseQuery)

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <header className={styles.header}>
          <h1 className={styles.title}>Wine Education</h1>
          <p className={styles.subtitle}>From the cellar at SOMM.SITE</p>
          <p className={styles.intro}>
            Wine has its own home in the Informative Media ecosystem.
            From Old World regions to emerging appellations, grape
            varieties to cellar strategies, our dedicated wine
            platform delivers the depth this subject demands. Here
            is a look at the latest from the SOMM.SITE editorial team.
          </p>
        </header>

        <div className={styles.grid}>
          {articles.map((article) => (
            <TeaserCard
              key={article._id}
              article={article}
              baseUrl="https://somm.site"
              siteName="SOMM.SITE"
            />
          ))}
        </div>

        <div className={styles.ctaWrapper}>
          <p className={styles.ctaText}>
            Discover the full collection of wine articles, study guides, and tasting resources.
          </p>
          <a
            href="https://somm.site"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.ctaButton}
          >
            Visit <span className={styles.ctaSite}>SOMM.SITE</span>
          </a>
        </div>
      </div>
    </div>
  )
}