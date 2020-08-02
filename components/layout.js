import Head from 'next/head'
import Link from 'next/link'

import Banner from './banner'
import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'

import {name, siteTitle, pathProfilePicture} from '../utils/constants'

export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Va de Brujas, un blog con mucha brujería"
        />
        <meta
          property="og:image"
          content={`https://og-image.now.sh/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header className={styles.header}>
        {home ? (
           <Banner/>
        ) : (
          <>
          <Banner/>
             {/*<Link href="/">
             <a>
              
               {/* <img
                  src={pathProfilePicture}
                  className={`${styles.headerImage} ${utilStyles.borderCircle}`}
                  alt={name}
               />
              </a>
            </Link>*/}
            <h2 className={utilStyles.headingLg}>
              
            </h2>
          </>
        )}
      </header>
      <main>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">
            <a>← Regresar a la portada principal</a>
          </Link>
        </div>
      )}
    </div>
  )
}