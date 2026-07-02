import styles from './TopNav.module.css'

export interface TopNavProps {
  /** Centered name shown in the cream pill nav, styled with the mono font. */
  name?: string
}

export default function TopNav({ name = 'Enrique Diaz' }: TopNavProps) {
  return (
    <nav className={styles.nav}>
      <button className={styles.iconButton} aria-label="Menu">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M3 12h18M3 6h18M3 18h18" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
      <span className={styles.logo}>{name}</span>
      <button className={`${styles.iconButton} ${styles.right}`} aria-label="Language">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <circle cx="12" cy="12" r="10" />
          <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
        </svg>
      </button>
    </nav>
  )
}
