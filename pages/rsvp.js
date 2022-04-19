import Link from 'next/link'
import Floral from '../components/Floral'
import React from 'react';
import Layout from '../components/layout'
import Itenerary from '../components/Itenerary';
import Addresses from '../components/Addresses'
import Meals from '../components/Meals'
import Image from 'next/dist/client/image';
import SideImg from '../public/img/engagement/wagon-portrait2.jpg'
import SideImg2 from '../public/img/engagement/TruckBench-cropped4.jpg'
import SideImg3 from '../public/img/engagement/TruckBenchHandingFlowers.JPG'
import SideImg4 from '../public/img/engagement/withFuzzy-cropped.jpg'

export default function Gallery() {

  return (
    <Layout h1="Marco &amp; Regina" h2="">
      <section className="content1">
        <h2 style={{ marginBottom: '0.5em' }}>The Details</h2>

        <div className="container-three-columns">

          <div className="cards-div background-color-light-pink">
            <Itenerary />
          </div>

          <div className="cards-div background-color-light-pink">
            <Addresses />
          </div>

          <div className="cards-div background-color-light-pink">
            <h3 style={{ textAlign: 'center', }}>Meal Options</h3>
            <br />
            <Meals />
          </div>

        </div>

        <br />
        <Link href="/" passHref><h3 className="underline pointer-on-hover" style={{ textAlign: 'center', }}>Back Home</h3></Link>
        < br />
      </section>

      <section className="content2">
        <Floral />
        <h2 className="title-floral">R S V P</h2>
        <div className="container-two-columns-750break">
          <iframe className="cards-div background-color-light-pink" src="https://docs.google.com/forms/d/e/1FAIpQLSe4T6BwFCA3Bw8TAhbWgqu9vuVdW3H3UiENOB3LnKN3WaCJXA/viewform?embedded=true"
            width="450" height="1605">Loading…</iframe>

          <div className="hide-750break">
            <Image src={SideImg3} alt="" />
            <Image src={SideImg} alt="" />
            <Image src={SideImg2} alt="" />
            <Image src={SideImg4} alt="" />
          </div>
        </div>
        <br />
        <Link href="/" passHref><h3 className="underline pointer-on-hover" style={{ textAlign: 'center', }}>Back Home</h3></Link>
        < br />
      </section>
    </Layout>
  )
}