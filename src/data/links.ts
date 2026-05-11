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
  | 'phone'

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

export interface PodcastShow {
  id: string
  title: string
  description: string
  /** Square cover from enriquediaz.se / motiverande-poddar. */
  imageUrl: string
  /** Where tapping the card goes (sajtens poddsida). */
  href: string
}

/** Canonical webb — samma origin som OG-länkar på enriquediaz.se. */
export const siteUrl = 'https://www.enriquediaz.se'

/** Sv /poddsida enligt webbplatsens meny. */
export const podcastPageUrl = `${siteUrl}/motiverande-poddar`

/** Innehåll speglar https://www.enriquediaz.se/motiverande-poddar */
export const podcastShows: PodcastShow[] = [
  {
    id: 'hombres-valientes',
    title: '«Hombres Valientes»',
    description:
      'En guide för män om framgång och mål. Nya avsnitt varje måndag — inspiration och konkret tänkesätt.',
    imageUrl:
      'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=656,h=656,fit=crop/AzG3lDJL99I6lXVX/10942869-m2WaZ99Wq7hW3zDP.jpg',
    href: podcastPageUrl,
  },
  {
    id: 'frid-med-gud',
    title: 'Frid med Gud!',
    description: 'En podd om tro och Gud — reflektera och fylla på över tid.',
    imageUrl:
      'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=656,h=656,fit=crop/AzG3lDJL99I6lXVX/frid-med-gud-m7V5avkbb3Ur7xzw.jpg',
    href: podcastPageUrl,
  },
  {
    id: 'man-i-fokus',
    title: 'Män i fokus',
    description:
      'Stöd för män att tänka bättre och nå sina mål — med fokus på tydlighet, mål och handling.',
    imageUrl:
      'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=656,h=656,fit=crop/AzG3lDJL99I6lXVX/man-i-fokus-mePbREeNgGTjpa3O.jpg',
    href: podcastPageUrl,
  },
]

export const podcastSectionCopy = {
  title: 'Motiverande poddar',
  intro:
    'Lyssna på motiverande poddar med Enrique Diaz. Lär dig tänka bättre, nå dina mål och utvecklas — nya perspektiv varje vecka.',
  primaryCta: 'Till poddsidan',
  primarySubtitle: 'Allt samlat på enriquediaz.se · motiverande-poddar',
}

export const profile = {
  name: 'Enrique Diaz',
  tagline:
    'Personlig coaching & mentorskap — stöttande, handlingsorienterat och helhetsfokuserat.',
}

export const socialLinks: SocialLink[] = [
  {
    id: 'website',
    label: 'Webbplats',
    handle: 'enriquediaz.se',
    href: siteUrl,
    icon: 'portfolio',
  },
  {
    id: 'email',
    label: 'E-post',
    handle: 'kontakt@enriquediaz.se',
    href: 'mailto:kontakt@enriquediaz.se',
    icon: 'email',
  },
  {
    id: 'phone',
    label: 'Telefon',
    handle: '+46 73 155 50 52',
    href: 'tel:+46731555052',
    icon: 'phone',
  },
  {
    id: 'newsletter',
    label: 'Nyhetsbrev',
    handle: 'Prenumerera',
    href: siteUrl,
    icon: 'substack',
  },
]

export const featuredWork: FeaturedItem[] = [
  {
    id: 'booking',
    title: 'Ta nästa steg',
    description:
      'Behöver du hjälp? Boka ett samtal så kommer vi överens om en plan som möter dina behov och dina mål.',
    href: siteUrl,
    cover: 'linear-gradient(135deg, #1a1a1a 0%, #3a2410 60%, #ff5e00 140%)',
    coverAccent: '#ffe9d6',
    coverLabel: 'Boka\nsamtal',
    isLive: true,
    buttonLabel: 'Webbplats',
  },
  {
    id: 'coaching',
    title: 'Vad är coachning?',
    description:
      'En framåtblickande process som stärker dig att göra varaktiga förändringar. Vi identifierar värderingar, styrkor och mål och skapar en tydlig plan tillsammans.',
    href: siteUrl,
    cover: 'radial-gradient(120% 80% at 30% 30%, #2c1a52 0%, #0a0a14 70%)',
    coverAccent: '#ffd49e',
    coverLabel: 'Personlig\ncoachning',
    isLive: true,
    buttonLabel: 'Läs mer',
  },
]

/**
 * Carousel themes aligned with offerings on enriquediaz.se. Tile icons reuse
 * the existing stack artwork as abstract placeholders (copy is the signal).
 */
export const tools: ToolItem[] = [
  {
    id: 'balance',
    slug: 'cursor',
    name: 'Balans & välmående',
    description:
      'Harmoni mellan arbetsliv, familjeliv och ditt mående — så att du kan prestera utan att tappa fotfästet.',
    tags: ['Livspussel', 'Energi', 'Gränser'],
    iconBg: '#000000',
  },
  {
    id: 'performance',
    slug: 'figma',
    name: 'Prestation & produktivitet',
    description:
      'Konkreta strategier för fokus, prioritering och resultat — i linje med dina mål och värderingar.',
    tags: ['ROI på tiden', 'Prioritering', 'Vanor'],
    iconBg: '#0a0a0a',
  },
  {
    id: 'growth',
    slug: 'obsidian',
    name: 'Personlig utveckling',
    description:
      'Djupare självkännedom, förnyad motivation och tydliga nästa steg på din väg framåt.',
    tags: ['Självledarskap', 'Insikt', 'Mening'],
    iconBg: '#150b2c',
  },
  {
    id: 'discipline',
    slug: 'davinci',
    name: 'Disciplin & ansvar',
    description:
      'Ramverk som hjälper dig hålla dig till det du lovat dig själv — och fira framstegen längs vägen.',
    tags: ['Uppföljning', 'Ansvarskultur', 'Lugn tempo'],
    iconBg: '#0d0f1a',
  },
  {
    id: 'clarity',
    slug: 'framer',
    name: 'Tydlighet & riktning',
    description:
      'Från snurriga val till en plan som känns rätt: riktning som speglar vem du är och vart du vill.',
    tags: ['Beslut', 'Värderingar', 'Riktning'],
    iconBg: '#0a0a0a',
  },
]

/**
 * Legacy export retained for any old imports — points to the social links.
 */
export type LinkItem = SocialLink
export const links = socialLinks