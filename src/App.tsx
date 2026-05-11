import { motion } from 'framer-motion'
import styles from './App.module.css'
import Background from './components/Background/Background'
import TopNav from './components/TopNav/TopNav'
import LinkCarousel from './components/LinkCarousel/LinkCarousel'
import FeaturedSection from './components/FeaturedCard/FeaturedCard'
import ToolCarousel from './components/ToolCarousel/ToolCarousel'
import NewsletterCTA from './components/NewsletterCTA/NewsletterCTA'
import PodcastSection from './components/PodcastSection/PodcastSection'
import {
  featuredWork,
  podcastPageUrl,
  podcastSectionCopy,
  podcastShows,
  profile,
  socialLinks,
  siteUrl,
  tools,
} from './data/links'

export default function App() {
  return (
    <main className={styles.app}>
      <Background />
      <div className={styles.container}>
        <TopNav name={profile.name} />

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className={styles.body}
        >
          <LinkCarousel title="Kontaktvägar" links={socialLinks} />

          <FeaturedSection title="Kom igång" items={featuredWork} />

          <ToolCarousel title="Hur jag kan stötta dig" tools={tools} />

          <PodcastSection
            pageUrl={podcastPageUrl}
            title={podcastSectionCopy.title}
            intro={podcastSectionCopy.intro}
            primaryCta={podcastSectionCopy.primaryCta}
            primarySubtitle={podcastSectionCopy.primarySubtitle}
            shows={podcastShows}
          />

          <NewsletterCTA href={siteUrl} />
        </motion.div>

        <motion.footer
          className={styles.footer}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <p className={styles.footerTagline}>
            Börja på en resa mot den bästa versionen av dig själv.{' '}
            <a href={siteUrl} className={styles.footerHighlight}>
              Besök enriquediaz.se
            </a>
          </p>

          <a href="mailto:kontakt@enriquediaz.se" className={styles.footerEmail}>
            kontakt@enriquediaz.se
          </a>

          <div className={styles.footerBottom}>
            <p className={styles.madeWithLove}>
              643 92 Vingåker, Sverige ·{' '}
              <a href="tel:+46731555052" className={styles.footerHighlight}>
                +46 73 155 50 52
              </a>
            </p>
            <p className={styles.copyright}>
              © {new Date().getFullYear()} Enrique Diaz. Alla rättigheter förbehållna.
            </p>
          </div>
        </motion.footer>
      </div>
    </main>
  )
}
