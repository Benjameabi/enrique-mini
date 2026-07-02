import { motion } from 'framer-motion'
import styles from './PodcastSection.module.css'
import PodcastShowCard from '../PodcastShowCard/PodcastShowCard'
import type { PodcastShow } from '../../data/links'

export interface PodcastSectionProps {
  pageUrl: string
  title: string
  intro: string
  primaryCta: string
  primarySubtitle: string
  shows: PodcastShow[]
}

/**
 * Section displaying the motivational podcasts with consistent 80px padding spacing,
 * Inter display typography headings, and child show cards.
 */
export default function PodcastSection({
  pageUrl,
  title,
  intro,
  primaryCta,
  primarySubtitle,
  shows,
}: PodcastSectionProps) {
  return (
    <section className={styles.section} aria-labelledby="podcast-heading">
      <h2 id="podcast-heading" className={styles.sectionTitle}>
        {title}
      </h2>
      <p className={styles.intro}>{intro}</p>

      <motion.a
        href={pageUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.heroCard}
        whileHover={{ y: -1 }}
        whileTap={{ scale: 0.99 }}
        transition={{ type: 'spring', stiffness: 320, damping: 28 }}
      >
        <span className={styles.heroIcon} aria-hidden="true">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
            <path d="M3 18v-6a9 9 0 0 1 18 0v6" />
            <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" />
          </svg>
        </span>
        <span className={styles.heroText}>
          <span className={styles.heroLabel}>{primaryCta}</span>
          <span className={styles.heroSub}>{primarySubtitle}</span>
        </span>
        <span className={styles.heroPill}>
          Öppna
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
            <path d="M15 3h6v6" />
            <path d="M10 14 21 3" />
          </svg>
        </span>
      </motion.a>

      <div className={styles.grid}>
        {shows.map((show) => (
          <PodcastShowCard key={show.id} show={show} />
        ))}
      </div>
    </section>
  )
}
