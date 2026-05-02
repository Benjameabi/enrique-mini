import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import styles from './ToolCarousel.module.css'
import ToolIcon from '../ToolIcon/ToolIcon'
import type { ToolItem } from '../../data/links'

export interface ToolCarouselProps {
  title: string
  tools: ToolItem[]
}

/**
 * Tool / app showcase. Inspired by the OpenSesh "Our Tools" panel:
 * a row of three large icon tiles (with the centre tile highlighted),
 * followed by an active-item details panel that holds the tool's name
 * (with prev/next chevrons), description, and tag pills.
 */
export default function ToolCarousel({ title, tools }: ToolCarouselProps) {
  const [index, setIndex] = useState(Math.min(1, tools.length - 1))

  if (tools.length === 0) return null

  const goPrev = () => setIndex((i) => (i - 1 + tools.length) % tools.length)
  const goNext = () => setIndex((i) => (i + 1) % tools.length)

  const visible = [
    tools[(index - 1 + tools.length) % tools.length],
    tools[index],
    tools[(index + 1) % tools.length],
  ]
  const active = tools[index]

  return (
    <section className={styles.section}>
      <h2 className={styles.sectionTitle}>{title}</h2>

      <div className={styles.panel}>
        <div className={styles.iconRow}>
          {visible.map((tool, i) => (
            <button
              key={`${tool.id}-${i}`}
              type="button"
              className={`${styles.iconTile} ${i === 1 ? styles.iconTileActive : ''}`}
              onClick={() => {
                if (i === 0) goPrev()
                else if (i === 2) goNext()
              }}
              aria-label={tool.name}
              style={{ background: tool.iconBg }}
            >
              <ToolIcon slug={tool.slug} size={i === 1 ? 64 : 52} />
            </button>
          ))}
        </div>

        <div className={styles.details}>
          <div className={styles.detailsHeader}>
            <button
              type="button"
              className={styles.chevron}
              onClick={goPrev}
              aria-label="Previous tool"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>

            <AnimatePresence mode="wait">
              <motion.h3
                key={active.id}
                className={styles.toolName}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.18 }}
              >
                {active.name}
              </motion.h3>
            </AnimatePresence>

            <button
              type="button"
              className={styles.chevron}
              onClick={goNext}
              aria-label="Next tool"
            >
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
              <li
                key={tag}
                className={`${styles.tag} ${i === 0 ? styles.tagPrimary : ''}`}
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
