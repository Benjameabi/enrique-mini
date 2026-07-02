import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import styles from './FeaturedCard.module.css'
import { maskReveal, springTransition } from '../../motion'
import type { FeaturedItem } from '../../data/links'

export interface FeaturedSectionProps {
  title: string
  items: FeaturedItem[]
}

/**
 * Stacked / paginated featured-work card. Mirrors the OpenSesh "Free
 * Resources" pattern: a large image cover with an optional "Live" pill,
 * followed by a title, description, and an outlined pill button. Below
 * the card sits a row of dot indicators and prev/next chevrons that
 * cycle through the items.
 */
export default function FeaturedSection({ title, items }: FeaturedSectionProps) {
  const [index, setIndex] = useState(0)
  const item = items[index]

  const goPrev = () => setIndex((i) => (i - 1 + items.length) % items.length)
  const goNext = () => setIndex((i) => (i + 1) % items.length)

  return (
    <section className={styles.section}>
      <h2 className={styles.sectionTitle}>{title}</h2>

      <div className={styles.cardFrame}>
        <AnimatePresence mode="wait">
          <motion.a
            key={item.id}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.card}
            variants={maskReveal}
            initial="hidden"
            animate="visible"
            exit="exit"
            whileHover={{ y: -2, transition: springTransition }}
            whileTap={{ scale: 0.99, transition: springTransition }}
          >
            <div
              className={styles.cover}
              style={{ background: item.cover, color: item.coverAccent ?? '#ffffff' }}
            >
              {item.isLive && <span className={styles.liveBadge}>Live</span>}
              {item.coverLabel && (
                <span className={styles.coverLabel}>
                  {item.coverLabel.split('\n').map((line, i) => (
                    <span key={i}>{line}</span>
                  ))}
                </span>
              )}
            </div>

            <div className={styles.body}>
              <h3 className={styles.title}>{item.title}</h3>
              <p className={styles.description}>{item.description}</p>

              <div className={styles.buttonRow}>
                <span className={styles.button}>
                  {item.buttonLabel}
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                    <path d="M15 3h6v6" />
                    <path d="M10 14 21 3" />
                  </svg>
                </span>
              </div>
            </div>
          </motion.a>
        </AnimatePresence>
      </div>

      {items.length > 1 && (
        <div className={styles.controls}>
          <button
            type="button"
            className={styles.chevron}
            onClick={goPrev}
            aria-label="Previous featured item"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>

          <div className={styles.dots} role="tablist">
            {items.map((_, i) => (
              <button
                key={i}
                type="button"
                role="tab"
                aria-selected={i === index}
                aria-label={`Go to item ${i + 1}`}
                className={`${styles.dot} ${i === index ? styles.dotActive : ''}`}
                onClick={() => setIndex(i)}
              />
            ))}
          </div>

          <button
            type="button"
            className={styles.chevron}
            onClick={goNext}
            aria-label="Next featured item"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </div>
      )}
    </section>
  )
}
