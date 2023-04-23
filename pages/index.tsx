import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import IntroSection from '@/components/IntroSection'
import Projects from '@/components/Projects'

export default function Home() {
  return (
    <>
      <Head>
        <title>Eva Kristóphersdóttir Design</title>
        {/*Change the content of the site so that it is detailed.*/}
        <meta name="description" content="A portfolio of designs and apps by Eva Kristóphersdóttir." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <IntroSection/>
        <Projects/>    
            {/* This is where the portfolio projects will be displayed*/}
        <section>
            {/* This is where the codepen for the social media icons will go.*/}
        </section>
        <section>
            {/* This is the footer and copyright.*/}
        </section>
      </main>
    </>
  )
}
