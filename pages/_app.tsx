import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head';
// import { AnimatePresence } from 'framer-motion';
interface Props{
  children:any
  Layout: React.FC<any>;
    }
export default function App({ Component, pageProps }: AppProps) {
  const Layout = (Component as unknown as Props)?.Layout || EmptyLayout;
  return (
    <>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>
    {/* <AnimatePresence 
      mode="wait" 
      initial={false}
      onExitComplete={() => window.scrollTo(0, 0)}> */}
  <Layout>
  <Component {...pageProps} />
  </Layout>
  {/* </AnimatePresence> */}
  </>
  )
}
const EmptyLayout = ({ children }:Props) => <>{children}</>;
