import styles from './Background.module.css'

/**
 * Subtle dot-grid background, matching the muted texture in the OpenSesh
 * mobile reference. Pure CSS — no canvas / WebGL — so it stays cheap and
 * looks right on every device.
 */
export default function Background() {
  return <div className={styles.background} aria-hidden="true" />
}
