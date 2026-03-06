import Link from 'next/link'
import styles from './FilterTabs.module.css'

interface FilterTabsProps {
  activeTab: 'all' | 'industry' | 'spirits' | 'beer' | 'sake' | 'coffee-tea'
}

export default function FilterTabs({ activeTab }: FilterTabsProps) {
  return (
    <nav className={styles.tabs} aria-label="Article collection filters">
      <Link
        href="/articles"
        className={`${styles.tab} ${activeTab === 'all' ? styles.active : ''}`}
      >
        All
      </Link>
      <Link
        href="/articles/industry"
        className={`${styles.tab} ${activeTab === 'industry' ? styles.active : ''}`}
      >
        Industry
      </Link>
      <Link
        href="/articles/spirits"
        className={`${styles.tab} ${activeTab === 'spirits' ? styles.active : ''}`}
      >
        Spirits
      </Link>
      <Link
        href="/articles/beer"
        className={`${styles.tab} ${activeTab === 'beer' ? styles.active : ''}`}
      >
        Beer
      </Link>
      <Link
        href="/articles/sake"
        className={`${styles.tab} ${activeTab === 'sake' ? styles.active : ''}`}
      >
        Sake
      </Link>
      <Link
        href="/articles/coffee-tea"
        className={`${styles.tab} ${activeTab === 'coffee-tea' ? styles.active : ''}`}
      >
        Coffee &amp; Tea
      </Link>
    </nav>
  )
}