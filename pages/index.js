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
        <div className="container-two-columns">
          <span className="column-content-div-right">
            <Link href="/details/" passHref>
              <button type="button" onClick="" className="pointer-on-hover button-style button-gold color-light-pink">
                Event Details
              </button>
            </Link></span>
          <span className="column-content-div-left">
            <Link href="https://forms.gle/fFWzJy9GD32GVmWh7/" target="_blank" passHref>
              <button type="button" onClick="" className="pointer-on-hover button-style button-gold color-light-pink">
                &nbsp;RSVP&nbsp;
              </button>
            </Link></span>
        </div>

      </section>
    </Layout>
  )
}

export default Home;