import Link from 'next/link'
import Floral from '../components/Floral'
import React from 'react';
import Modal from '../components/Modal'
import Layout from '../components/layout'

export default function Gallery() {
  const hotel1 = process.env.HOTELS[0];
  const hotel2 = process.env.HOTELS[1];
  const hotel3 = process.env.HOTELS[2];
  const hotel4 = process.env.HOTELS[3];
  return (
    <Layout h1="Marco &amp; Regina" h2="Wedding Details">
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

            <div className="color-gold bold">  {process.env.RECEPTION_VENUE}</div>
            <div className="color-gold">{process.env.RECEPTION_ADDR.l1}</div>
            <div className="color-gold">{process.env.RECEPTION_ADDR.l2}</div>
            <div className="color-gold">{process.env.RECEPTION_ADDR.l3}</div>
          </div>

          <div className="cards-div background-color-light-pink">
            <h3 style={{ textAlign: 'center', }}>Meal Options</h3>
            <br />
            <div className="font-taj-bold">Chicken Type 1</div>
            <div>Detailed Description of the chicken</div>
            <br />
            <div className="font-taj-bold">Chicken Type 2</div>
            <div>Detailed Description of the chicken</div>
          </div>

        </div>
        <br />
        <Link href="/" passHref><h3 className="underline pointer-on-hover" style={{ textAlign: 'center', }}>Back Home</h3></Link>
        < br />
      </section>

      <section className="content2">
        <Floral />

        <h2 style={{ marginBottom: '0.5em', paddingTop: '1em' }}>Hotel Options</h2>
        <div className="container-two-columns" style={{ maxWidth: '900px', }}>
         
          <div className="cards-div background-color-light-pink">
            <h3 className="text-align-center">{hotel1.name}</h3>
            <div className="title-container-two-columns top-padding-sm" >
              <div className="text-align-right">
                <div>{hotel1.addr.l1}</div>
                <div>{hotel1.addr.l2}&nbsp;{hotel1.addr.l3}</div>
                <div></div></div>
              <div className="text-align-left"><a className="title-gold pointer-on-hover" rel="noreferrer" href={hotel1.addr.url}
                target="_blank">Directions</a></div>
            </div>
            <div className="text-align-center top-padding-sm">
              <Modal title="Hotel Details" hotel={hotel1} /></div>
          </div>

          <div className="cards-div background-color-light-pink">
            <h3 className="text-align-center">{hotel2.name}</h3>
            <div className="title-container-two-columns top-padding-sm" >
              <div className="text-align-right">
                <div>{hotel2.addr.l1}</div>
                <div>{hotel2.addr.l2}&nbsp;{hotel2.addr.l3}</div>
                <div></div></div>

              <div className="text-align-left"><a className="title-gold pointer-on-hover" rel="noreferrer" href={hotel2.addr.url}
                target="_blank">Directions</a></div>
            </div>
            <div className="text-align-center top-padding-sm">
              <Modal title="Hotel Details" hotel={hotel2} /></div>
          </div>

          <div className="cards-div background-color-light-pink">
            <h3 className="text-align-center">{hotel3.name}</h3>
            <div className="title-container-two-columns top-padding-sm" >
              <div className="text-align-right">
                <div>{hotel3.addr.l1}</div>
                <div>{hotel3.addr.l2}&nbsp;{hotel3.addr.l3}</div>
                <div></div></div>

              <div className="text-align-left"><a className="title-gold pointer-on-hover" rel="noreferrer" href={hotel3.addr.url}
                target="_blank">Directions</a></div>
            </div>
            <div className="text-align-center top-padding-sm">
              <Modal title="Hotel Details" hotel={hotel3} /></div>
          </div>

          <div className="cards-div background-color-light-pink">
            <h3 className="text-align-center">{hotel4.name}</h3>
            <div className="title-container-two-columns top-padding-sm" >
              <div className="text-align-right">
                <div>{hotel4.addr.l1}</div>
                <div>{hotel4.addr.l2}&nbsp;{hotel4.addr.l3}</div>
                <div></div></div>

              <div className="text-align-left"><a className="title-gold pointer-on-hover" rel="noreferrer" href={hotel4.addr.url}
                target="_blank">Directions</a></div>
            </div>
            <div className="text-align-center top-padding-sm">
              <Modal title="Hotel Details" hotel={hotel4} /></div>
          </div>
        </div>
        <br />
        <Link href="/" passHref><h3 className="underline pointer-on-hover" style={{ textAlign: 'center', }}>Back Home</h3></Link>
        <br />
      </section>
    </Layout>
  )
}