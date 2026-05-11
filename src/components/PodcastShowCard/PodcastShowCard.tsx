import { motion } from 'framer-motion'
import styles from './PodcastShowCard.module.css'
import type { PodcastShow } from '../../data/links'

export interface PodcastShowCardProps {
  show: PodcastShow
}

export default function PodcastShowCard({ show }: PodcastShowCardProps) {
  return (
    <motion.a
      href={show.href}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.card}
      whileHover={{ y: -2 }}
      transition={{ type: 'spring', stiffness: 320, damping: 28 }}
    >
      <div className={styles.cover}>
        <img
          src={show.imageUrl}
          alt=""
          loading="lazy"
          className={styles.thumb}
        />
        <div className={styles.badge} aria-hidden="true">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
            <path d="M3 18v-6a9 9 0 0 1 18 0v6" />
            <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" />
          </svg>
        </div>
      </div>
      <div className={styles.body}>
        <h3 className={styles.title}>{show.title}</h3>
        <p className={styles.description}>{show.description}</p>
      </div>
    </motion.a>
  )
}
