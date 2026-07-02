import { motion } from 'framer-motion'
import styles from './NewsletterCTA.module.css'
import { springTransition } from '../../motion'

export interface NewsletterCTAProps {
  href: string
  title?: string
  label?: string
  subtitle?: string
  buttonLabel?: string
}

export default function NewsletterCTA({
  href,
  title = 'Nyhetsbrev',
  label = 'Prenumerera',
  subtitle = 'Insikter och inspiration från enriquediaz.se',
  buttonLabel = 'Till anmälan',
}: NewsletterCTAProps) {
  return (
    <section className={styles.section}>
      <h2 className={styles.sectionTitle}>{title}</h2>

      <motion.a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.card}
        whileHover={{ y: -2, transition: springTransition }}
        whileTap={{ scale: 0.99, transition: springTransition }}
      >
        <span className={styles.logoWrap} aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="5" width="18" height="14" rx="2" />
            <path d="m3 7 9 6 9-6" />
          </svg>
        </span>
        <span className={styles.text}>
          <span className={styles.label}>{label}</span>
          <span className={styles.handle}>{subtitle}</span>
        </span>
        <span className={styles.cta}>
          {buttonLabel}
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
            <path d="M15 3h6v6" />
            <path d="M10 14 21 3" />
          </svg>
        </span>
      </motion.a>
    </section>
  )
}
