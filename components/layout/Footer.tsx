import Link from 'next/link'
import { client } from '@/sanity/lib/client'
import { featuredArticleQuery } from '@/sanity/queries'
import styles from './Footer.module.css'

export default async function Footer() {
  const currentYear = new Date().getFullYear()
  
  const featuredArticle = await client.fetch(featuredArticleQuery)
  const featuredSlug = featuredArticle?.slug?.current || ''

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.linksGrid}>
          <nav className={styles.linkColumn}>
            <Link href="/" className={styles.link}>Home</Link>
            {featuredSlug && (
              <Link href={`/articles/${featuredSlug}`} className={styles.link}>Featured Article</Link>
            )}
            <Link href="/articles" className={styles.link}>Article Collection</Link>
            <Link href="/about" className={styles.link}>About Us</Link>
          </nav>
          <nav className={styles.linkColumn}>
            <Link href="/cookies" className={styles.link}>Cookie Policy</Link>
            <Link href="/terms" className={styles.link}>Terms of Use</Link>
            <Link href="/privacy" className={styles.link}>Privacy Policy</Link>
            <Link href="/disclaimer" className={styles.link}>Content Disclaimer</Link>
          </nav>
        </div>
        <div className={styles.socialLinks}>
          <a href="https://instagram.com/beverage.fyi" target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="Instagram">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
            </svg>
          </a>
          <a href="mailto:hello@beverage.fyi" className={styles.socialLink} aria-label="Email">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="4" width="20" height="16" rx="2"></rect>
              <path d="M22 6l-10 7L2 6"></path>
            </svg>
          </a>
        </div>
        <div className={styles.logoSection}>
          <span className={styles.logoText}>Beverage<span className={styles.logoAccent}>.fyi</span></span>
        </div>
        <p className={styles.copyright}>Copyright {currentYear} - Beverage.fyi - All Rights Reserved</p>
        <Link href="#" className={styles.backToTop}>Back to Top</Link>
      </div>
    </footer>
  )
}