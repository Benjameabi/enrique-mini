import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import styles from './ServiceCarousel.module.css'
import ServiceGlyph from '../ServiceGlyph/ServiceGlyph'
import type { ServiceItem } from '../../data/links'

export interface ServiceCarouselProps {
  title: string
  services: ServiceItem[]
}

/**
 * Carousel of coaching services (motiverande tjänster), same interaction
 * pattern as the former tool strip: peek tiles + detail pane.
 */
export default function ServiceCarousel({ title, services }: ServiceCarouselProps) {
  const [index, setIndex] = useState(0)

  if (services.length === 0) return null

  const goPrev = () => setIndex((i) => (i - 1 + services.length) % services.length)
  const goNext = () => setIndex((i) => (i + 1) % services.length)

  const visible = [
    services[(index - 1 + services.length) % services.length],
    services[index],
    services[(index + 1) % services.length],
  ]
  const active = services[index]

  return (
    <section className={styles.section}>
      <h2 className={styles.sectionTitle}>{title}</h2>

      <div className={styles.panel}>
        <div className={styles.iconRow}>
          {visible.map((item, i) => (
            <button
              key={`${item.id}-${i}`}
              type="button"
              className={`${styles.iconTile} ${i === 1 ? styles.iconTileActive : ''}`}
              onClick={() => {
                if (i === 0) goPrev()
                else if (i === 2) goNext()
              }}
              aria-label={item.name}
            >
              <ServiceGlyph kind={item.glyph} size={i === 1 ? 64 : 52} />
            </button>
          ))}
        </div>

        <div className={styles.details}>
          <div className={styles.detailsHeader}>
            <button type="button" className={styles.chevron} onClick={goPrev} aria-label="Föregående tjänst">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>

            <AnimatePresence mode="wait">
              <motion.h3
                key={active.id}
                className={styles.serviceName}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.18 }}
              >
                {active.name}
              </motion.h3>
            </AnimatePresence>

            <button type="button" className={styles.chevron} onClick={goNext} aria-label="Nästa tjänst">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
          </div>

          <AnimatePresence mode="wait">
            <motion.p
              key={`${active.id}-desc`}
              className={styles.description}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.18 }}
            >
              {active.description}
            </motion.p>
          </AnimatePresence>

          <ul className={styles.tags}>
            {active.tags.map((tag, i) => (
              <li key={tag} className={`${styles.tag} ${i === 0 ? styles.tagPrimary : ''}`}>
                {tag}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
