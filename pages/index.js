import React, { useContext, useState } from "react"
import OurStory from '../components/OurStory'
import DetailsSection from '../components/DetailsSection'
import Floral from '../components/Floral'
import Link from 'next/link'
import { Context } from '../utilities/context'
import Layout from '../components/layout'
import GetInvitationForm from '../components/GetInvitationForm'
import {getCodes} from '../utilities/helper'

function Home() {
  const [context, setContext] = useContext(Context)
  console.log("index context: ", context)
  
  return (
    <Layout h1="Marco &amp; Regina" h2="">
      <section className="content1">
        <OurStory />
      </section>
      <section className="content2">
        <Floral />
        <DetailsSection />
        <br />
        <div className="text-align-center">
          <Link href="/details" className="pointer-on-hover" passHref>
            <button type="button" onClick="" className="button-style button-gold color-light-pink">
              Event Details
            </button>
          </Link>
        </div>
        <br />
        <div className="text-align-center">
          <GetInvitationForm />
        </div>

      </section>
    </Layout>
  )
}

export async function getStaticProps(props) {
  let codes = await getCodes()
  let index = "index Data"

  return {
    props: {
      index: index,
      codes: codes
    }
  }
}

export default Home;