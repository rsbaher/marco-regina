import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import customStyles from '../components/homepage.style'
import OurStory from '../components/OurStory'
import DetailsSection from '../components/DetailsSection'
import Floral from '../components/Floral'

export default function Home() {

  return (
    <div >
      <Head>
        <title>{ process.env.WEB_TITLE }</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section style={customStyles.content1}>
        <OurStory />
      </section>
      <section style={customStyles.content2}>
        <Floral />
        <DetailsSection />
      </section>

    </div>
  )
}
