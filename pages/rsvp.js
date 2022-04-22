import Link from 'next/link'
import React from 'react';
import Layout from '../components/layout'

export default function Gallery() {
  return (
    <Layout h1="Marco &amp; Regina" h2="">
      <section className="content1">
        <h2 className="color-gold" style={{fontSize: '4.5em'}}>R . S . V . P</h2>
        <div className="container-one-column">
          <iframe className="cards-div background-color-light-pink" src="https://docs.google.com/forms/d/e/1FAIpQLSe4T6BwFCA3Bw8TAhbWgqu9vuVdW3H3UiENOB3LnKN3WaCJXA/viewform?embedded=true"
            width="365" height="1620">Loading…</iframe>
        </div>

        <br />
        <Link href="/" passHref><h3 className="underline pointer-on-hover" style={{ textAlign: 'center', }}>Back Home</h3></Link>
        < br />
      </section>
    </Layout>
  )
}