import Link from 'next/link'
import Floral from '../components/Floral'
import React from 'react';
import Layout from '../components/layout'
import Hotels from '../components/Hotels';
import Meals from '../components/Meals'
import Itenerary from '../components/Itenerary';
import Addresses from '../components/Addresses'
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

        <h2 style={{ marginBottom: '0.5em', paddingTop: '1em' }}>Hotel Options</h2>
        <Hotels />

        <br />
        <Link href="/" passHref><h3 className="underline pointer-on-hover" style={{ textAlign: 'center', }}>Back Home</h3></Link>
        <br />

      </section>
    </Layout>
  )
}