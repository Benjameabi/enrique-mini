import { motion } from 'framer-motion'
import styles from './YouTubeSubscribe.module.css'

export interface YouTubeSubscribeProps {
  /** Channel handle, e.g. "@benjameabi". */
  handle: string
  /** Full channel URL, e.g. "https://www.youtube.com/@benjameabi". */
  channelUrl: string
  /** Section title shown above the call-to-action. */
  title?: string
}

/**
 * Compact "Subscribe on YouTube" call-to-action. Replaces the previous
 * email signup card and links straight to the channel.
 */
export default function YouTubeSubscribe({
  handle,
  channelUrl,
  title = 'Recent Videos',
}: YouTubeSubscribeProps) {
  return (
    <section className={styles.section}>
      <h2 className={styles.sectionTitle}>{title}</h2>

      <motion.a
        href={channelUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.card}
        whileHover={{ y: -1 }}
        whileTap={{ scale: 0.99 }}
        transition={{ type: 'spring', stiffness: 320, damping: 28 }}
      >
        <span className={styles.logoWrap} aria-hidden="true">
          <svg viewBox="0 0 24 17" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M23.5 2.6c-.3-1-1-1.8-2-2.1C19.7 0 12 0 12 0S4.3 0 2.5.5c-1 .3-1.7 1.1-2 2.1C0 4.4 0 8.5 0 8.5s0 4 .5 5.9c.3 1 1 1.8 2 2 1.8.6 9.5.6 9.5.6s7.7 0 9.5-.5c1-.3 1.7-1.1 2-2.1.5-1.9.5-5.9.5-5.9s0-4.1-.5-6z"
              fill="#FF0000"
            />
            <path d="M9.6 12.2 16 8.5 9.6 4.8z" fill="#fff" />
          </svg>
        </span>
        <span className={styles.text}>
          <span className={styles.label}>Subscribe on YouTube</span>
          <span className={styles.handle}>{handle}</span>
        </span>
        <span className={styles.cta}>
          Subscribe
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
