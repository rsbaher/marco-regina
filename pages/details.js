import styled from 'styled-components'
import Subtitle from '../components/subtitle'
import Card from '../components/card'
import Link from 'next/link'
import Button from '../components/button'
import Floral from '../components/Floral'
import CardTitle from '../components/CardTitle'
import React from 'react';
import Modal from '../components/Modal'

const ChildDiv = styled.div`
position: relative;
overflow: hidden;
z-index: 0;

@media (max-width: 414px) {
  font-size: 1.2em;
}

@media (max-width: 375px) {
  font-size: 1.2em;
}`

export default function Gallery() {
  const hotel1 = process.env.HOTELS[0];
  const hotel2 = process.env.HOTELS[1];
  const hotel3 = process.env.HOTELS[2];
  const hotel4 = process.env.HOTELS[3];
  return (
    <>
      <section className="content1">
        <Subtitle style={{ marginBottom: '0.5em' }}>The Details</Subtitle>

        <div className="container-three-columns">

          <Card className="background-color-light-pink">
            <CardTitle style={{ textAlign: 'center', }}>Itenerary</CardTitle>
            <br />
            <div className="font-taj-bold">The Ceremony</div>
            <div className="color-gold"><span className="bold">Start Time:</span> {process.env.WEDDING_TIME.ceremony}</div>
            <br />
            <div className="font-taj-bold">The Reception</div>
            <div className="color-gold"><span className="bold">Cocktail Hour:</span> {process.env.WEDDING_TIME.cocktail}</div>
            <div className="color-gold"><span className="bold">Dinner Start:</span> {process.env.WEDDING_TIME.dinner}</div>
          </Card>

          <Card className="background-color-light-pink">
            <CardTitle style={{ textAlign: 'center', }}>Adresses</CardTitle>
            <br />
            <div className="title-container-two-columns"><ChildDiv className="font-taj-bold">The Ceremony</ChildDiv>
              <ChildDiv><a className="title-gold pointer-on-hover" rel="noreferrer"
                href={process.env.CEREMONY_ADDR.url}
                target="_blank">Directions</a></ChildDiv>
            </div>

            <div className="color-gold bold">{process.env.CEREMONY_VENUE}</div>
            <div className="color-gold">{process.env.CEREMONY_ADDR.l1}</div>
            <div className="color-gold">{process.env.CEREMONY_ADDR.l2}</div>
            <div className="color-gold">{process.env.CEREMONY_ADDR.l3}</div>

            <br />
            <div className="title-container-two-columns"><ChildDiv className="font-taj-bold">The Reception</ChildDiv>
              <ChildDiv><a className="title-gold pointer-on-hover" rel="noreferrer"
                href={process.env.RECEPTION_ADDR.url}
                target="_blank">Directions</a></ChildDiv>
            </div>

            <div className="color-gold bold">  {process.env.RECEPTION_VENUE}</div>
            <div className="color-gold">{process.env.RECEPTION_ADDR.l1}</div>
            <div className="color-gold">{process.env.RECEPTION_ADDR.l2}</div>
            <div className="color-gold">{process.env.RECEPTION_ADDR.l3}</div>
          </Card>

          <Card className="background-color-light-pink">
            <CardTitle style={{ textAlign: 'center', }}>Meal Options</CardTitle>
            <br />
            <div className="font-taj-bold">Chicken Type 1</div>
            <div>Detailed Description of the chicken</div>
            <br />
            <div className="font-taj-bold">Chicken Type 2</div>
            <div>Detailed Description of the chicken</div>
          </Card>

        </div>
        <br />
        <Link href="/" passHref><CardTitle className="underline pointer-on-hover" style={{ textAlign: 'center', }}>Back Home</CardTitle></Link>
        < br />
      </section>

      <section className="content2">
        <Floral />

        <Subtitle style={{ marginBottom: '0.5em', paddingTop: '1em' }}>Hotel Options</Subtitle>
        <div className="container-two-columns" style={{ maxWidth: '900px', }}>
         
          <Card className="background-color-light-pink">
            <CardTitle className="text-align-center">{hotel1.name}</CardTitle>
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
          </Card>

          <Card className="background-color-light-pink">
            <CardTitle className="text-align-center">{hotel2.name}</CardTitle>
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
          </Card>

          <Card className="background-color-light-pink">
            <CardTitle className="text-align-center">{hotel3.name}</CardTitle>
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
          </Card>

          <Card className="background-color-light-pink">
            <CardTitle className="text-align-center">{hotel4.name}</CardTitle>
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
          </Card>
        </div>
        <br />
        <Link href="/" passHref><CardTitle className="underline pointer-on-hover" style={{ textAlign: 'center', }}>Back Home</CardTitle></Link>
        <br />
      </section>
    </>
  )
}