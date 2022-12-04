import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Navbar from './components/Navbar.js'

export default function Home() {
  return (
    <>
      <Head>
        <title>Next Basics</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/logo.svg" />
      </Head>
      <Navbar />
      <div className={styles.container}>
        <main className={styles.main}>
          <h1 className={styles.title}>
            Welcome to <a href="https://nextjs.org">Next.js!</a>
          </h1>

          <div className={styles.grid}>

            <Link href='/about' legacyBehavior>
              <a className={styles.card}>
                <h2>About &rarr;</h2>
                <p>An excellent About page not only narrates your story, values, and gives an inside look into how your business came to be, but it also helps sell. When prospects learn your story and connect with it, they’re likely to buy from you. A well-planned About Us page can do all this!</p>
              </a>
            </Link>

            <Link href='/blog' legacyBehavior>
              <a className={styles.card}>
                <h2>Blog &rarr;</h2>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem repellat ratione veritatis optio in tempora quidem eligendi mollitia maiores fugiat?
                </p>
              </a>
            </Link>

            <Link href='/contact' legacyBehavior>
              <a rel="noopener noreferrer" className={styles.card}>
                <h2>Contact &rarr;</h2>
                <p>
                  The contact us page also includes a physical address, email address, and links to their social media profiles.
                </p>
              </a>
            </Link>

            <Link href='/404' legacyBehavior>
              <a rel="noopener noreferrer" className={styles.card}>
                <h2>404 Page &rarr;</h2>
                <p>
                  Your 404 page should show off your creativity and personality – and help users. Here are 37 awesome examples of 404 pages to inspire you.
                </p>
              </a>
            </Link>
          </div>
        </main>

        <footer className={styles.footer}>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Powered by{' '}
            <span className={styles.logo}>
              <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
            </span>
          </a>
        </footer>
      </div>
    </>
  )
}
