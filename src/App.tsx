import { motion } from 'framer-motion'
import styles from './App.module.css'
import Background from './components/Background/Background'
import TopNav from './components/TopNav/TopNav'
import LinkCarousel from './components/LinkCarousel/LinkCarousel'
import FeaturedSection from './components/FeaturedCard/FeaturedCard'
import ServiceCarousel from './components/ServiceCarousel/ServiceCarousel'
import NewsletterCTA from './components/NewsletterCTA/NewsletterCTA'
import PodcastSection from './components/PodcastSection/PodcastSection'
import { sectionReveal, staggerContainer } from './motion'
import {
  featuredWork,
  podcastPageUrl,
  podcastSectionCopy,
  podcastShows,
  profile,
  socialLinks,
  services,
  siteUrl,
} from './data/links'

export default function App() {
  return (
    <main className={styles.app}>
      <Background />
      <div className={styles.container}>
        <TopNav name={profile.name} />

        <motion.div
          className={styles.body}
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={sectionReveal}>
            <LinkCarousel title="Kontaktvägar" links={socialLinks} />
          </motion.div>

          <motion.div variants={sectionReveal}>
            <FeaturedSection title="Kom igång" items={featuredWork} />
          </motion.div>

          <motion.div variants={sectionReveal}>
            <ServiceCarousel title="Vilka tjänster erbjuder jag" services={services} />
          </motion.div>

          <motion.div variants={sectionReveal}>
            <PodcastSection
              pageUrl={podcastPageUrl}
              title={podcastSectionCopy.title}
              intro={podcastSectionCopy.intro}
              primaryCta={podcastSectionCopy.primaryCta}
              primarySubtitle={podcastSectionCopy.primarySubtitle}
              shows={podcastShows}
            />
          </motion.div>

          <motion.div variants={sectionReveal}>
            <NewsletterCTA href={siteUrl} />
          </motion.div>
        </motion.div>

        <motion.footer
          className={styles.footer}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.45, ease: [0.2, 0.8, 0.2, 1] }}
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
