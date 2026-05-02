import { useCallback, useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import styles from './LinkCarousel.module.css'
import SocialCard from '../SocialCard/SocialCard'
import type { SocialLink } from '../../data/links'

export interface LinkCarouselProps {
  title: string
  links: SocialLink[]
}

/**
 * Horizontally scrollable carousel of social cards. Visually mirrors
 * OpenSesh: a dark rounded container, three-and-a-bit cards visible at a
 * time with a "peek" effect, and circular prev/next chevrons overlayed
 * over the container edges.
 */
export default function LinkCarousel({ title, links }: LinkCarouselProps) {
  const trackRef = useRef<HTMLUListElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

  const updateScrollState = useCallback(() => {
    const track = trackRef.current
    if (!track) return
    const { scrollLeft, scrollWidth, clientWidth } = track
    setCanScrollLeft(scrollLeft > 4)
    setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 4)
  }, [])

  useEffect(() => {
    updateScrollState()
    const track = trackRef.current
    if (!track) return
    track.addEventListener('scroll', updateScrollState, { passive: true })
    window.addEventListener('resize', updateScrollState)
    return () => {
      track.removeEventListener('scroll', updateScrollState)
      window.removeEventListener('resize', updateScrollState)
    }
  }, [updateScrollState])

  const scroll = (direction: 'left' | 'right') => {
    const track = trackRef.current
    if (!track) return
    const itemWidth = track.firstElementChild?.clientWidth ?? 130
    const delta = (itemWidth + 12) * (direction === 'left' ? -1 : 1)
    track.scrollBy({ left: delta, behavior: 'smooth' })
  }

  return (
    <section className={styles.section}>
      <h2 className={styles.sectionTitle}>{title}</h2>
      <div className={styles.container}>
        <button
          type="button"
          className={`${styles.arrowButton} ${styles.arrowLeft}`}
          onClick={() => scroll('left')}
          aria-label="Scroll left"
          disabled={!canScrollLeft}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>

        <motion.ul
          ref={trackRef}
          className={styles.track}
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.06 },
            },
          }}
        >
          {links.map((link) => (
            <motion.li
              key={link.id}
              className={styles.item}
              variants={{
                hidden: { opacity: 0, x: 16 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <SocialCard link={link} />
            </motion.li>
          ))}
        </motion.ul>

        <button
          type="button"
          className={`${styles.arrowButton} ${styles.arrowRight}`}
          onClick={() => scroll('right')}
          aria-label="Scroll right"
          disabled={!canScrollRight}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 18l6-6-6-6" />
          </svg>
        </button>
      </div>
    </section>
  )
}
