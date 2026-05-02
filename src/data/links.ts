/**
 * Centralised content for the link hub.
 *
 * Each export below feeds a different section of `src/App.tsx`. Edit the
 * data here to update the live page — no component changes required.
 */

export type LinkIcon =
  | 'github'
  | 'linkedin'
  | 'portfolio'
  | 'instagram'
  | 'email'
  | 'figma'
  | 'substack'

export interface SocialLink {
  /** Stable identifier used as a React key. */
  id: string
  /** Brand label rendered as the card title (display serif). */
  label: string
  /** "@username" line shown beneath the label. */
  handle: string
  /** Destination URL — opens in a new tab. */
  href: string
  /** Which icon to render at the top of the card. */
  icon: LinkIcon
}

export interface FeaturedItem {
  id: string
  title: string
  description: string
  href: string
  /** Optional image URL. If absent, a generated gradient cover is used. */
  image?: string
  /** Background gradient used when `image` is missing. */
  cover?: string
  /** Foreground accent (text colour shown on top of `cover`). */
  coverAccent?: string
  /** Callout displayed inside the cover (mimics OpenSesh's "Portfolio Template"). */
  coverLabel?: string
  /** Show the orange "Live" pill on the top-right of the image? */
  isLive?: boolean
  /** Label shown inside the bottom-right pill button. */
  buttonLabel: string
}

export interface ToolItem {
  id: string
  /** Tool / app name displayed in the details panel. */
  name: string
  /** Short one-or-two-line description. */
  description: string
  /** Coloured tag pills shown beneath the description. */
  tags: string[]
  /** Background colour for the icon tile. */
  iconBg: string
  /** Brand slug used to look up the inline SVG logo. */
  slug: import('../components/ToolIcon/ToolIcon').ToolSlug
}

export interface Video {
  /** YouTube video id, taken from the watch URL (`?v=ID`). */
  id: string
  title: string
  /** Optional one-line description shown beneath the title. */
  description?: string
  /** ISO date string — formatted to "MMM d, yyyy" at render time. */
  publishedAt: string
}

export const youtube = {
  handle: '@benjameabi',
  channelUrl: 'https://www.youtube.com/@benjameabi',
}

export const profile = {
  name: 'benjame abi',
  tagline: 'Developer · Film & Photography · Communication',
}

export const socialLinks: SocialLink[] = [
  {
    id: 'github',
    label: 'Github',
    handle: '@benjameabi',
    href: 'https://github.com/benjameabi',
    icon: 'github',
  },
  {
    id: 'linkedin',
    label: 'LinkedIn',
    handle: '@benjameabi',
    href: 'https://www.linkedin.com/in/benjameabi',
    icon: 'linkedin',
  },
  {
    id: 'instagram',
    label: 'Instagram',
    handle: '@benjameabi',
    href: 'https://instagram.com/benjameabi',
    icon: 'instagram',
  },
  {
    id: 'substack',
    label: 'Substack',
    handle: '@benjameabi',
    href: 'https://benjameabi.substack.com',
    icon: 'substack',
  },
  {
    id: 'figma',
    label: 'Figma',
    handle: '@benjameabi',
    href: 'https://figma.com/@benjameabi',
    icon: 'figma',
  },
]

export const featuredWork: FeaturedItem[] = [
  {
    id: 'portfolio',
    title: 'Portfolio',
    description:
      "A curated set of case studies spanning product, photography and the films I've shipped over the past few years.",
    href: 'https://your-portfolio.com',
    cover: 'linear-gradient(135deg, #1a1a1a 0%, #3a2410 60%, #ff5e00 140%)',
    coverAccent: '#ffe9d6',
    coverLabel: 'Portfolio\nTemplate',
    isLive: true,
    buttonLabel: 'Website',
  },
  {
    id: 'design-directory',
    title: 'Design Directory',
    description:
      'A living index of the references, tools and creators I revisit while building. Open-source and free to remix.',
    href: 'https://your-portfolio.com/directory',
    cover: 'radial-gradient(120% 80% at 30% 30%, #2c1a52 0%, #0a0a14 70%)',
    coverAccent: '#ffd49e',
    coverLabel: 'Design\nDirectory',
    isLive: true,
    buttonLabel: 'Website',
  },
]

export const tools: ToolItem[] = [
  {
    id: 'cursor',
    slug: 'cursor',
    name: 'Cursor',
    description: 'AI-first code editor I use to ship most things shown on this site.',
    tags: ['Editor', 'AI', 'Free Tier'],
    iconBg: '#000000',
  },
  {
    id: 'figma',
    slug: 'figma',
    name: 'Figma',
    description: 'Browser-based design tool — perfect for moodboards, wireframes, and design systems.',
    tags: ['Design', 'Collaboration', 'Free Tier'],
    iconBg: '#0a0a0a',
  },
  {
    id: 'obsidian',
    slug: 'obsidian',
    name: 'Obsidian',
    description: 'Free open-source markdown vault I lean on to organise notes, research and screenplays.',
    tags: ['Productivity', 'Open Source', 'Markdown'],
    iconBg: '#150b2c',
  },
  {
    id: 'davinci',
    slug: 'davinci',
    name: 'DaVinci Resolve',
    description: 'Colour grading and editing platform I use for short-form film work.',
    tags: ['Video', 'Colour', 'Free Tier'],
    iconBg: '#0d0f1a',
  },
  {
    id: 'framer',
    slug: 'framer',
    name: 'Framer',
    description: 'For prototyping motion-heavy concepts and shipping marketing pages quickly.',
    tags: ['Web', 'Prototyping'],
    iconBg: '#0a0a0a',
  },
]

/**
 * Recent videos surfaced in the "Recent Videos" section.
 *
 * Each entry's `id` is the YouTube video id (the value after `youtu.be/`
 * or `?v=` in the watch URL). YouTube serves a high-quality thumbnail at
 * `https://img.youtube.com/vi/<id>/maxresdefault.jpg`, so no asset
 * upload is required — just paste the id.
 *
 * Titles below are placeholders — open each video, copy the real title
 * and paste it in. The thumbnails pull live from YouTube either way.
 */
export const videos: Video[] = [
  {
    id: 'bFV0itPdYn0',
    title: 'Latest video',
    publishedAt: '2026-04-20',
  },
  {
    id: 'G1SSKyNXMuY',
    title: 'Recent video',
    publishedAt: '2026-04-05',
  },
  {
    id: 'aP-Wm5YniWw',
    title: 'Earlier video',
    publishedAt: '2026-03-18',
  },
  {
    id: 'yUmU_49m0a4',
    title: 'Older video',
    publishedAt: '2026-02-26',
  },
]

/**
 * Legacy export retained for any old imports — points to the social links.
 */
export type LinkItem = SocialLink
export const links = socialLinks