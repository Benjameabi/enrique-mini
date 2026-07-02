import { useEffect, useState } from 'react'
import styles from './Background.module.css'

interface Particle {
  id: number
  x: number
  size: number
  duration: number
  delay: number
  opacity: number
  drift: number
}

/**
 * Performant, secondary ambient background with slow-moving amber gradients
 * and floating particles. Optimized using CSS hardware acceleration to remain
 * cheap and buttery smooth on all devices, adhering to Aurelia design guardrails.
 */
export default function Background() {
  const [particles, setParticles] = useState<Particle[]>([])

  useEffect(() => {
    // Generate particles on client mount to prevent SSR mismatch
    const generated = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      size: Math.random() * 3 + 1.5, // 1.5px to 4.5px
      duration: Math.random() * 20 + 20, // 20s to 40s
      delay: Math.random() * -40, // Negative delay so particles start pre-distributed
      opacity: Math.random() * 0.15 + 0.05, // Muted, secondary opacity
      drift: Math.random() * 60 - 30, // Horizontal drift amount
    }))
    setParticles(generated)
  }, [])

  return (
    <div className={styles.background} aria-hidden="true">
      {/* Slow-moving ambient glow blobs */}
      <div className={styles.blob1} />
      <div className={styles.blob2} />

      {/* Textured dot-grid overlay */}
      <div className={styles.grid} />

      {/* Fine floating amber particles */}
      <div className={styles.particles}>
        {particles.map((p) => (
          <div
            key={p.id}
            className={styles.particle}
            style={
              {
                left: `${p.x}%`,
                width: `${p.size}px`,
                height: `${p.size}px`,
                animationDuration: `${p.duration}s`,
                animationDelay: `${p.delay}s`,
                '--drift': `${p.drift}px`,
                '--p-opacity': p.opacity,
              } as React.CSSProperties
            }
          />
        ))}
      </div>
    </div>
  )
}
