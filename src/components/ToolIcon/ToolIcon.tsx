import type { ReactNode } from 'react'

export type ToolSlug =
  | 'cursor'
  | 'figma'
  | 'obsidian'
  | 'davinci'
  | 'framer'

export interface ToolIconProps {
  slug: ToolSlug
  size?: number
}

const figmaLogo = (
  <svg viewBox="0 0 38 57" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path
      d="M19 28.5a9.5 9.5 0 1 1 19 0 9.5 9.5 0 0 1-19 0z"
      fill="#1ABCFE"
    />
    <path
      d="M0 47.5C0 42.25 4.25 38 9.5 38H19v9.5a9.5 9.5 0 1 1-19 0z"
      fill="#0ACF83"
    />
    <path d="M19 0v19h9.5a9.5 9.5 0 1 0 0-19H19z" fill="#FF7262" />
    <path
      d="M0 9.5C0 14.75 4.25 19 9.5 19H19V0H9.5A9.5 9.5 0 0 0 0 9.5z"
      fill="#F24E1E"
    />
    <path
      d="M0 28.5C0 33.75 4.25 38 9.5 38H19V19H9.5A9.5 9.5 0 0 0 0 28.5z"
      fill="#A259FF"
    />
  </svg>
)

const obsidianLogo = (
  <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <defs>
      <linearGradient id="obsidian-body" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#A98BFF" />
        <stop offset="100%" stopColor="#6C4CFF" />
      </linearGradient>
      <linearGradient id="obsidian-shine" x1="50%" y1="0%" x2="50%" y2="100%">
        <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.6" />
        <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
      </linearGradient>
    </defs>
    <path
      d="M21.5 30 7 28l-4-9.5L11 4l9 1.5L29 18z"
      fill="url(#obsidian-body)"
    />
    <path
      d="M21.5 30 24 16l5 2-7.5 12z"
      fill="#3F2A8A"
      opacity="0.55"
    />
    <path
      d="M11 4l9 1.5 4 10.5-13-2z"
      fill="url(#obsidian-shine)"
      opacity="0.55"
    />
    <path d="M7 28l4-13 13 1L21.5 30z" fill="#5C3DD9" opacity="0.35" />
  </svg>
)

const cursorLogo = (
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <defs>
      <linearGradient id="cursor-light" x1="50%" y1="0%" x2="50%" y2="100%">
        <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.95" />
        <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0.55" />
      </linearGradient>
      <linearGradient id="cursor-mid" x1="0%" y1="50%" x2="100%" y2="50%">
        <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.85" />
        <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0.35" />
      </linearGradient>
    </defs>
    <path d="M12 2 21.5 7.25v9.5L12 22 2.5 16.75v-9.5z" fill="#000" />
    <path d="M12 2v10l9.5-4.75z" fill="url(#cursor-light)" />
    <path d="M12 22V12L2.5 16.75z" fill="url(#cursor-mid)" />
    <path d="M12 12 2.5 7.25v9.5z" fill="#FFFFFF" opacity="0.18" />
    <path d="M12 12l9.5-4.75v9.5z" fill="#FFFFFF" opacity="0.45" />
  </svg>
)

const davinciLogo = (
  <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <defs>
      <linearGradient id="davinci-ring" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#F25C28" />
        <stop offset="55%" stopColor="#A8246A" />
        <stop offset="100%" stopColor="#1F8FD1" />
      </linearGradient>
    </defs>
    <circle cx="16" cy="16" r="11" fill="none" stroke="url(#davinci-ring)" strokeWidth="3.5" />
    <circle cx="16" cy="16" r="4" fill="#1F8FD1" />
    <circle cx="16" cy="16" r="1.6" fill="#0a0a0a" />
  </svg>
)

const framerLogo = (
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path
      d="M5 2h14v7H12L19 16v6H12L5 15V9h7L5 2z"
      fill="#FFFFFF"
    />
  </svg>
)

const iconMap: Record<ToolSlug, ReactNode> = {
  figma: figmaLogo,
  obsidian: obsidianLogo,
  cursor: cursorLogo,
  davinci: davinciLogo,
  framer: framerLogo,
}

/**
 * Renders the brand mark for one of the tools showcased in the
 * "My Stack" carousel. Each SVG is hand-tuned with brand colours so the
 * tile reads like a real app icon — no external icon libraries needed.
 */
export default function ToolIcon({ slug, size = 56 }: ToolIconProps) {
  const icon = iconMap[slug]
  return (
    <span
      style={{ width: size, height: size, display: 'grid', placeItems: 'center' }}
    >
      {icon}
    </span>
  )
}
