import type { ReactNode } from 'react'

export type ServiceGlyphKind = 'mentorship' | 'coaching'

export interface ServiceGlyphProps {
  kind: ServiceGlyphKind
  size?: number
}

const mentorship: ReactNode = (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path
      d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"
      stroke="currentColor"
      strokeWidth="1.65"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="1.65" />
    <path
      d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"
      stroke="currentColor"
      strokeWidth="1.65"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

const coaching: ReactNode = (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <circle cx="12" cy="9" r="3.5" stroke="currentColor" strokeWidth="1.65" />
    <path
      d="M5 20v-1a7 7 0 0 1 14 0v1"
      stroke="currentColor"
      strokeWidth="1.65"
      strokeLinecap="round"
    />
    <path
      d="M17 4.5l2 2 3-3.5"
      stroke="currentColor"
      strokeWidth="1.65"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

const map: Record<ServiceGlyphKind, ReactNode> = {
  mentorship,
  coaching,
}

export default function ServiceGlyph({ kind, size = 56 }: ServiceGlyphProps) {
  return (
    <span
      style={{
        width: size,
        height: size,
        display: 'grid',
        placeItems: 'center',
        color: 'rgba(255,255,255,0.92)',
      }}
    >
      <span style={{ width: size * 0.72, height: size * 0.72, display: 'block' }}>{map[kind]}</span>
    </span>
  )
}
