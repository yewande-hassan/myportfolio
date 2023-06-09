import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import CountingAnimation from '../components/countUp'

export default function Home() {
  const router = useRouter()
  const [showLandingPage, setShowLandingPage] = useState<boolean>(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLandingPage(false);
    }, 2500);

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
        <div className={`${styles.animatedScreen}`}>
          <h1>
            <span className='text-[20px] ml-[40px]'>Software</span>
            <div className={styles.message}>
              <div className={styles.word1}>Engineer</div>
              <div className={styles.word2}>Developer</div>
            </div>
          </h1>
          <div className={styles.counter}>
           <CountingAnimation/>%
          </div>
        </div>
      )}
    </main>
    </>
  )
}
