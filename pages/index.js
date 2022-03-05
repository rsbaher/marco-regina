import React from 'react'
import OurStory from '../components/OurStory'
import DetailsSection from '../components/DetailsSection'
import Floral from '../components/Floral'
import Link from 'next/link'
import { Context } from '../utilities/context'
import Layout from '../components/layout'
import GetInvitationForm from '../components/GetInvitationForm'
import {getGuests} from '../utilities/helper'

function Home(pageProps) {
  const [ context, setContext ] = React.useState(Context)
  console.log("index context: ", context)
  console.log("index props: ", pageProps)
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
  const data = await getGuests()
  console.log("rsvp.staticprops data[0]: ", data[0]);
  console.log("rsvp.staticprops props: ", props);
  return {
    props: {
      index: "index Data",
      data: data[0],
      email: ""
    }
  }
}

export default Home;