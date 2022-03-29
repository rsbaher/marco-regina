import Link from 'next/link'
import Floral from '../components/Floral'
import React from 'react';
import Layout from '../components/layout'
import Hotels from '../components/Hotels';
import Meals from '../components/Meals'

export default function Gallery() {

  return (
    <Layout h1="Marco &amp; Regina" h2="">
      <section className="content1">
        <h2 style={{ marginBottom: '0.5em' }}>The Details</h2>

        <div className="container-three-columns">

          <div className="cards-div background-color-light-pink">
            <h3 style={{ textAlign: 'center', }}>Itenerary</h3>
            <br />
            <div className="font-taj-bold">The Ceremony</div>
            <div className="color-gold"><span className="bold">Start Time:</span> {process.env.WEDDING_TIME.ceremony}</div>
            <br />
            <div className="font-taj-bold">The Reception</div>
            <div className="color-gold"><span className="bold">Cocktail Hour:</span> {process.env.WEDDING_TIME.cocktail}</div>
            <div className="color-gold"><span className="bold">Dinner Start:</span> {process.env.WEDDING_TIME.dinner}</div>
          </div>

          <div className="cards-div background-color-light-pink">
            <h3 style={{ textAlign: 'center', }}>Adresses</h3>
            <br />
            <div className="title-container-two-columns"><div className="child-div font-taj-bold">The Ceremony</div>
              <div className="child-div"><a className="title-gold pointer-on-hover" rel="noreferrer"
                href={process.env.CEREMONY_ADDR.url}
                target="_blank">Directions</a></div>
            </div>

            <div className="color-gold bold">{process.env.CEREMONY_VENUE}</div>
            <div className="color-gold">{process.env.CEREMONY_ADDR.l1}</div>
            <div className="color-gold">{process.env.CEREMONY_ADDR.l2}</div>
            <div className="color-gold">{process.env.CEREMONY_ADDR.l3}</div>

            <br />
            <div className="title-container-two-columns"><div className="child-div font-taj-bold">The Reception</div>
              <div className="child-div" ><a className="title-gold pointer-on-hover" rel="noreferrer"
                href={process.env.RECEPTION_ADDR.url}
                target="_blank">Directions</a></div>
            </div>

            <div className="color-gold bold">{process.env.RECEPTION_VENUE}</div>
            <div className="color-gold">{process.env.RECEPTION_ADDR.l1}</div>
            <div className="color-gold">{process.env.RECEPTION_ADDR.l2}</div>
            <div className="color-gold">{process.env.RECEPTION_ADDR.l3}</div>
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