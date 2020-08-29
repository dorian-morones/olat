import Head from "next/head";
import styles from "./layout.module.css";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";

const name = "Olat.";
export const siteTitle = "olat.";

export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.now.sh/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.zeit.co%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header className={styles.header}>
        {home ? (
          <>
            <div className={utilStyles.bannerContent}>
              <h1 className={utilStyles.heading2Xl}>{name}</h1>
              <h3 className={utilStyles.bannerDescription}>
                Escribo sobre los temas de codigo que usamos dia a dia.
              </h3>
            </div>
            <div className={utilStyles.bannerLinks}>
              <img
                src="/images/profile.jpg"
                className={`${styles.headerHomeImage} ${utilStyles.borderCircle}`}
                alt={name}
              />
              <div className={utilStyles.extLinks}>
                <a href="https://github.com/dorian-morones">Github</a>
                <a href="https://www.linkedin.com/in/dorian-morones-meza-701b28122/">
                  Linkedin
                </a>
                <a href="https://twitter.com/DorianMorones">Twitter</a>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className={utilStyles.bannerContent}>
              <Link href="/">
                <h1 className={utilStyles.heading2Xl}>{name}</h1>
              </Link>
              <h3 className={utilStyles.bannerDescription}>
                Escribo sobre los temas de codigo que usamos dia a dia.
              </h3>
            </div>
            <div className={utilStyles.bannerLinks}>
              <Link href="/">
                <img
                  src="/images/profile.jpg"
                  className={`${styles.headerHomeImage} ${utilStyles.borderCircle}`}
                  alt={name}
                />
              </Link>
              <div className={utilStyles.extLinks}>
                <a href="https://github.com/dorian-morones">Github</a>
                <a href="https://www.linkedin.com/in/dorian-morones-meza-701b28122/">
                  Linkedin
                </a>
                <a href="https://twitter.com/DorianMorones">Twitter</a>
              </div>
            </div>
          </>
        )}
      </header>
      <main>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
      )}
    </div>
  );
}
