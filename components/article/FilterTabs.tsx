import Link from 'next/link'
import styles from './FilterTabs.module.css'

interface FilterTabsProps {
  activeTab: 'all' | 'industry' | 'beverages'
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
        Industry Insights
      </Link>
      <Link
        href="/articles/beverages"
        className={`${styles.tab} ${activeTab === 'beverages' ? styles.active : ''}`}
      >
        Beverage Knowledge
      </Link>
    </nav>
  )
}