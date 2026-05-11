import { motion } from 'framer-motion'
import styles from './VideoCard.module.css'

/** YouTube-backed row item (lämna för framtiden — hubben använder `PodcastSection`). */
export interface Video {
  id: string
  title: string
  description?: string
  publishedAt: string
}

export interface VideoCardProps {
  video: Video
}

const formatDate = (iso: string) => {
  try {
    const d = new Date(iso)
    return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
  } catch {
    return iso
  }
}

/**
 * Stacked YouTube video card. Uses YouTube's high-quality thumbnail
 * endpoint (`maxresdefault.jpg`, falling back to `hqdefault.jpg` if the
 * uploader didn't provide an HD frame) and links straight to the watch
 * page on youtube.com — no embed, no autoplay, no tracking iframe.
 */
export default function VideoCard({ video }: VideoCardProps) {
  const watchUrl = `https://www.youtube.com/watch?v=${video.id}`
  const hd = `https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`
  const sd = `https://img.youtube.com/vi/${video.id}/hqdefault.jpg`

  return (
    <motion.a
      href={watchUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.card}
      whileHover={{ y: -2 }}
      transition={{ type: 'spring', stiffness: 320, damping: 28 }}
    >
      <div className={styles.cover}>
        <img
          src={hd}
          srcSet={`${sd} 480w, ${hd} 1280w`}
          sizes="(max-width: 600px) 100vw, 460px"
          alt=""
          loading="lazy"
          className={styles.thumb}
          onError={(e) => {
            const img = e.currentTarget
            if (img.src !== sd) img.src = sd
          }}
        />
        <span className={styles.playOverlay} aria-hidden="true">
          <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
            <path d="M8 5v14l11-7z" />
          </svg>
        </span>
      </div>

      <div className={styles.body}>
        <h3 className={styles.title}>{video.title}</h3>
        <p className={styles.meta}>
          YouTube <span className={styles.metaDot}>·</span>{' '}
          {formatDate(video.publishedAt)}
        </p>
        {video.description && (
          <p className={styles.description}>{video.description}</p>
        )}
      </div>
    </motion.a>
  )
}
