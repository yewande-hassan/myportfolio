import Head from 'next/head'
import styles from '../styles/Home.module.css'
// import { CountUp } from 'use-count-up'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

export default function Home() {
  const router = useRouter()
  const [showLandingPage, setShowLandingPage] = useState<boolean>(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLandingPage(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!showLandingPage) {
      router.push("/portfolio");
    }
  }, [router, showLandingPage]);
  return (
    <>
    <Head>
    <title>Yewande Hassan Portfolio</title>
    <meta name="description" content="Yewande Hassan portofolio" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="icon" href="/favicon.ico" />
    </Head>
    <main
    >
      {showLandingPage && (
        <div className={styles.animatedScreen}>
          <h1>
            <span>Software</span>
            <div className={styles.message}>
              <div className={styles.word1}>Engineer</div>
              <div className={styles.word2}>Developer</div>
            </div>
          </h1>
          <div className={styles.counter}>
            {/* <CountUp isCounting end={100} duration={3} />% */}
          </div>
        </div>
      )}
    </main>
    </>
  )
}
