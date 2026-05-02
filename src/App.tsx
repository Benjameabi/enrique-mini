import { motion } from 'framer-motion'
import styles from './App.module.css'
import Background from './components/Background/Background'
import TopNav from './components/TopNav/TopNav'
import LinkCarousel from './components/LinkCarousel/LinkCarousel'
import FeaturedSection from './components/FeaturedCard/FeaturedCard'
import ToolCarousel from './components/ToolCarousel/ToolCarousel'
import YouTubeSubscribe from './components/YouTubeSubscribe/YouTubeSubscribe'
import VideoCard from './components/VideoCard/VideoCard'
import {
  featuredWork,
  profile,
  socialLinks,
  tools,
  videos,
  youtube,
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
          <LinkCarousel title="My Links" links={socialLinks} />

          <FeaturedSection title="Featured Work" items={featuredWork} />

          <ToolCarousel title="My Stack" tools={tools} />

          <YouTubeSubscribe
            title="Recent Videos"
            handle={youtube.handle}
            channelUrl={youtube.channelUrl}
          />

          <div className={styles.videoList}>
            {videos.map((video) => (
              <VideoCard key={video.id} video={video} />
            ))}
          </div>
        </motion.div>

        <motion.footer
          className={styles.footer}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <p className={styles.footerTagline}>
            Build practical tools.<br />
            Tell honest stories.{' '}
            <a href="#contact" className={styles.footerHighlight}>
              Start here
            </a>
          </p>

          <a href="mailto:hello@benjameabi.com" className={styles.footerEmail}>
            hello@benjameabi.com
          </a>

          <div className={styles.footerBottom}>
            <p className={styles.madeWithLove}>Made with love</p>
            <p className={styles.copyright}>
              © {new Date().getFullYear()} All rights reserved
            </p>
          </div>
        </motion.footer>
      </div>
    </main>
  )
}
