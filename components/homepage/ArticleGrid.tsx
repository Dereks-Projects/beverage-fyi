import { Article } from '@/types/article'
import ArticleCard from './ArticleCard'
import styles from './ArticleGrid.module.css'

interface ArticleGridProps {
  articles: Article[]
  title?: string
}

export default function ArticleGrid({ articles, title = 'More Articles' }: ArticleGridProps) {
  if (!articles || articles.length === 0) return null

  return (
    <section className={styles.section}>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.grid}>
        {articles.map((article) => (
          <ArticleCard key={article._id} article={article} />
        ))}
      </div>
    </section>
  )
}