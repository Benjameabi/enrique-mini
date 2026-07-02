/** Shared Aurelia motion tokens — smooth, restrained easing across sections. */

export const springTransition = {
  type: 'spring' as const,
  stiffness: 320,
  damping: 28,
}

export const easeOut = [0.2, 0.8, 0.2, 1] as const

export const staggerContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.07, delayChildren: 0.04 },
  },
}

export const sectionReveal = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: easeOut },
  },
}

export const maskReveal = {
  hidden: {
    opacity: 0,
    y: 12,
    clipPath: 'inset(0 0 100% 0 round 11px)',
  },
  visible: {
    opacity: 1,
    y: 0,
    clipPath: 'inset(0 0 0% 0 round 11px)',
    transition: { duration: 0.38, ease: easeOut },
  },
  exit: {
    opacity: 0,
    y: -8,
    clipPath: 'inset(100% 0 0 0 round 11px)',
    transition: { duration: 0.22, ease: easeOut },
  },
}

export const itemReveal = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.35, ease: easeOut },
  },
}
