import styled from 'styled-components'
import Subtitle from '../components/subtitle'
import Card from '../components/card'
import Link from 'next/link'
import Button from '../components/button'
import Floral from '../components/Floral'
import CardTitle from '../components/CardTitle'
import React from 'react';

const WeddingDetails = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr;
  grid-gap: 1em;
  margin: auto;
  max-width: 1100px;
  padding: 1em;

  @media (max-width: 414px) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
  }
`
const GridColumn2 = styled.div`
display: grid;
grid-template-columns: 1fr 1fr;
grid-template-rows: 1fr;

@media (max-width: 414px) {
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 1fr;
}`

const WeddingVenue = styled.a`
  color: #cba135;
  font-weight: bold;
  text-decoration-color: #cba135;
  z-index: 2;
  text-align: right;
`

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
        <Subtitle>The Details</Subtitle>
        <br />
        <WeddingDetails>
          <Card className="background-color-light-pink">
            <CardTitle style={{ textAlign: 'center', }}>Itenerary</CardTitle>
            <br />
            <div className="font-taj-bold">The Ceremony</div>
            <div className="color-gold"><span className="bold">Start Time:</span> {process.env.WEDDING_TIME.ceremony}</div>
            <br />
            <div className="font-taj-bold">The Reception</div>
            <div className="color-gold"><span className="bold">Cocktail Hour:</span> {process.env.WEDDING_TIME.cocktail}</div>
            <div className="color-gold"><span className="bold">Dinner Start:</span> {process.env.WEDDING_TIME.dinner}</div>
            <br />
            <div className="font-taj-bold">Photos at Jacaranda</div>
            <div className="color-gold"><span className="bold">Start Time:</span> {process.env.WEDDING_TIME.photo}</div>

          </Card>

          <Card className="background-color-light-pink">
            <CardTitle style={{ textAlign: 'center', }}>Adresses</CardTitle>
            <br />
            <GridColumn2><ChildDiv className="font-taj-bold">The Ceremony</ChildDiv>
              <ChildDiv><WeddingVenue
                href={process.env.CEREMONY_ADDR.url}
                target="_blank">Directions</WeddingVenue></ChildDiv>
            </GridColumn2>

            <div className="color-gold bold">{process.env.CEREMONY_VENUE}</div>
            <div className="color-gold">{process.env.CEREMONY_ADDR.l1}</div>
            <div className="color-gold">{process.env.CEREMONY_ADDR.l2}</div>
            <div className="color-gold">{process.env.CEREMONY_ADDR.l3}</div>

            <br />
            <GridColumn2><ChildDiv className="font-taj-bold">The Reception</ChildDiv>
              <ChildDiv><WeddingVenue
                href={process.env.RECEPTION_ADDR.url}
                target="_blank">Directions</WeddingVenue></ChildDiv>
            </GridColumn2>

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
        </WeddingDetails>
        <br />
        <Link href="/"><CardTitle className="underline" style={{ textAlign: 'center', }}>Back Home</CardTitle></Link>
        < br />
      </section>

      <section className="content2">
        <Floral />
        <br />
        <br />
        <br />
        <Subtitle>Hotel Options</Subtitle>
        <br />
        <GridColumn2 style={{ maxWidth: '1100px', gridGap: '1em', margin: 'auto' }}>
          <Card className="background-color-light-pink">
            <CardTitle style={{ textAlign: 'center', }}>{hotel1.name}</CardTitle>

            <div>{hotel1.addr.l1}</div>
            <div>{hotel1.addr.l2}</div>
            <div>{hotel1.addr.l3}</div>

            <div><WeddingVenue href={hotel1.addr.url}
              target="_blank">Directions</WeddingVenue></div>
          </Card>

          <Card className="background-color-light-pink">
            <CardTitle style={{ textAlign: 'center', }}>{hotel2.name}</CardTitle>

            <div>{hotel2.addr.l1}</div>
            <div>{hotel2.addr.l2}</div>
            <div>{hotel2.addr.l3}</div>

            <div><WeddingVenue href={hotel2.addr.url}
              target="_blank">Directions</WeddingVenue></div>
          </Card>

          <Card className="background-color-light-pink">
            <CardTitle style={{ textAlign: 'center', }}>{hotel3.name}</CardTitle>

            <div>{hotel3.addr.l1}</div>
            <div>{hotel3.addr.l2}</div>
            <div>{hotel3.addr.l3}</div>

            <div><WeddingVenue href={hotel3.addr.url}
              target="_blank">Directions</WeddingVenue></div>
          </Card>

          <Card className="background-color-light-pink">
            <CardTitle style={{ textAlign: 'center', }}>{hotel4.name}</CardTitle>

            <div>{hotel4.addr.l1}</div>
            <div>{hotel4.addr.l2}</div>
            <div>{hotel4.addr.l3}</div>

            <div><WeddingVenue href={hotel4.addr.url}
              target="_blank">Directions</WeddingVenue></div>
          </Card>
        </GridColumn2>
        <br />
        <Link href="/"><CardTitle className="underline" style={{ textAlign: 'center', }}>Back Home</CardTitle></Link>
        <br />
      </section>
    </>
  )
}