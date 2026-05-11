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

export interface ServiceItem {
  id: string
  /** Tjänstnamn — samma struktur som under «Vilka tjänster erbjuder jag». */
  name: string
  description: string
  tags: string[]
  iconBg: string
  glyph: import('../components/ServiceGlyph/ServiceGlyph').ServiceGlyphKind
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

/** Tjänster under «Vilka tjänster erbjuder jag» på enriquediaz.se */
export const services: ServiceItem[] = [
  {
    id: 'mentorship',
    name: 'Mentorskap',
    description:
      'Mentorskap för dig som vill ha stöd över tid: riktning, ansvar och nätverk. Jag drar på erfarenhet av ledarskap och människor som söker mening och vill förverkliga sina drömmar.',
    tags: ['Långsiktigt', 'Riktning', 'Ansvar'],
    iconBg: 'linear-gradient(145deg, #1e1640 0%, #352060 55%, #0a0a12 100%)',
    glyph: 'mentorship',
  },
  {
    id: 'coaching',
    name: 'Personlig coachning',
    description:
      'Framåtblickande och handlingsorienterad coachning där vi tillsammans tydliggör värderingar, styrkor och hinder — och bygger en plan som hjälper dig nå mål du själv står för.',
    tags: ['Tydliga mål', 'Värderingar', 'Plan'],
    iconBg: 'linear-gradient(145deg, #2a1410 0%, #4a2612 52%, #0c0806 100%)',
    glyph: 'coaching',
  },
]

/**
 * Legacy export retained for any old imports — points to the social links.
 */
export type LinkItem = SocialLink
export const links = socialLinks