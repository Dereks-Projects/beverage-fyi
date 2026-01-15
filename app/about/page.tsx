import { Metadata } from 'next'
import styles from './about.module.css'

export const metadata: Metadata = {
  title: 'About Us | Beverage.fyi',
  description: 'Learn about Beverage.fyi, our mission to democratize beverage education, and the creator behind the platform.',
  alternates: {
    canonical: 'https://beverage.fyi/about',
  },
}

export default function AboutPage() {
  return (
    <div className={styles.pageContainer}>
      
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>About Us</h1>
          <p className={styles.heroSubtitle}>
            Beverage.fyi is a digital magazine dedicated to wine, spirits, beer, and sake education — 
            bringing you the history, craft, and culture behind the world's most celebrated drinks. 
            No memberships. No paywalls. Just quality knowledge, freely accessible.
          </p>
        </div>
      </section>

      <section className={styles.missionSection}>
        <div className={styles.sectionContent}>
          <h2 className={styles.sectionTitle}>Our Mission</h2>
          <p className={styles.missionText}>
            The beverage industry is rich with <span className={styles.highlight}>remarkable stories</span> — 
            tales of winemakers coaxing elegance from ancient vines, craft distillers perfecting recipes 
            across generations, brewers pushing the boundaries of flavor, and sake masters honoring 
            centuries of tradition. Yet too often, this knowledge remains locked behind expensive 
            certifications, industry gatekeepers, or scattered across countless sources that demand 
            your email before offering a single insight.
          </p>
          <p className={styles.missionText}>
            We believe that <span className={styles.highlight}>great beverage education should be accessible to everyone</span>. 
            Whether you're a hospitality professional looking to deepen your expertise, an enthusiast 
            eager to understand what makes a Burgundy different from a Bordeaux, or simply someone who 
            wants to appreciate the craftsmanship in their glass — you deserve access to quality content 
            without the friction of sign-up forms, membership tiers, or content drip campaigns.
          </p>
          <p className={styles.missionText}>
            Beverage.fyi exists to <span className={styles.highlight}>democratize beverage knowledge</span>. We 
            curate and create educational content that respects your time and intelligence, presenting 
            complex topics with clarity and depth. From the terroir that shapes great wine to the 
            fermentation that defines craft beer, from the volcanic soils of mezcal to the polished 
            rice of premium sake — we bring you the stories behind the drinks, no strings attached.
          </p>
        </div>
      </section>

      <section className={styles.creatorSection}>
        <div className={styles.sectionContent}>
          <h2 className={styles.sectionTitle}>About the Creator</h2>
          <p className={styles.sectionText}>
            Beverage.fyi was created by Derek Engles, a hospitality professional with over two decades 
            of experience in luxury beverage service. After years working as a sommelier and wine 
            director at properties including Wynn Resort and MGM Grand, Derek transitioned into 
            technology development — combining deep industry knowledge with a modern tech stack to 
            build educational platforms that make a real impact in the hospitality space.
          </p>
        </div>
      </section>

      <section className={styles.collaborateSection}>
        <div className={styles.collaborateContent}>
          <h2 className={styles.collaborateTitle}>Let's Collaborate</h2>
          <p className={styles.collaborateText}>
            Whether you're a beverage brand looking to tell your story, a hospitality group seeking 
            to elevate your team's knowledge, or an organization that wants to put quality content 
            in front of an engaged audience — we'd love to hear from you. We partner with brands 
            and businesses to create educational content that brings your team up to speed and 
            places your brand front and center with consumers who care about craft and quality.
          </p>
          <a href="mailto:derekengles@gmail.com" className={styles.contactLink}>
            Get in Touch
          </a>
        </div>
      </section>

    </div>
  )
}