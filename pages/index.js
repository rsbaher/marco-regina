import React from "react"
import OurStory from '../components/OurStory'
import DetailsSection from '../components/DetailsSection'
import Floral from '../components/Floral'
import Link from 'next/link'
import Layout from '../components/layout'

function Home() {
  return (
    <Layout h1="Marco &amp; Regina" h2="">
      <section className="content1">
        <OurStory />
      </section>
      <section className="content2">
        <Floral />
        <DetailsSection />
        <br />
        <div className="container-three-column-button">
          
            <Link href="/details/" passHref>
              <button type="button" className="pointer-on-hover button-style button-gold color-light-pink">
                Event Details
              </button>
            </Link>
            
            <Link href="/rsvp/" passHref>
              <button type="button" className="pointer-on-hover button-style button-gold color-light-pink">
                &nbsp;RSVP&nbsp;
              </button>
            </Link>

            <Link href={process.env.REGISTRY_LINK} passHref>
              <a type="button" target="_blank" rel="noopener noreferrer" className="pointer-on-hover button-style button-gold color-light-pink">
                &nbsp;Registry&nbsp;
              </a>
            </Link>
        </div>

      </section>
    </Layout>
  )
}

export default Home;